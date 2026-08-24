import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { chromium } from "playwright";

const VIEWPORT = { width: 1440, height: 810 };

const readOptions = (argv) => {
  const options = {};
  for (let index = 0; index < argv.length; index += 1) {
    const argument = argv[index];
    if (argument === "--") continue;
    if (!argument.startsWith("--")) continue;
    options[argument.slice(2)] = argv[index + 1];
    index += 1;
  }
  return options;
};

const isCredibleColor = (hex) => {
  if (!hex) return false;
  const values = [1, 3, 5].map((index) => Number.parseInt(hex.slice(index, index + 2), 16) / 255);
  const maximum = Math.max(...values);
  const minimum = Math.min(...values);
  const lightness = (maximum + minimum) / 2;
  return maximum - minimum > 0.15 && lightness > 0.08 && lightness < 0.92;
};

export async function captureProjectScreenshots({ url, outputDir, sections = "", maxCaptures = 2 }) {
  if (!url || !outputDir) throw new Error("Both --url and --output-dir are required.");
  if (!Number.isInteger(Number(maxCaptures)) || Number(maxCaptures) < 1 || Number(maxCaptures) > 3) {
    throw new Error("--max-captures must be an integer from 1 to 3.");
  }

  const browser = await chromium.launch({ headless: true });
  try {
    const page = await browser.newPage({ viewport: VIEWPORT, deviceScaleFactor: 1 });
    await page.goto(url, { waitUntil: "domcontentloaded", timeout: 45_000 });
    await page.waitForLoadState("networkidle", { timeout: 12_000 }).catch(() => {});
    const pageReady = await page
      .waitForFunction(
        () => {
          const viewportArea = window.innerWidth * window.innerHeight;
          const loadingOverlay = Array.from(document.querySelectorAll("[class], [id], [role='progressbar'], [aria-busy='true']")).some(
            (element) => {
              const descriptor = `${element.id} ${element.className} ${element.getAttribute("role") ?? ""}`.toLowerCase();
              if (!/(preloader|loader|loading|progress)/.test(descriptor)) return false;
              const rect = element.getBoundingClientRect();
              const style = getComputedStyle(element);
              return (
                style.visibility !== "hidden" &&
                Number(style.opacity) > 0.05 &&
                rect.width * rect.height > viewportArea * 0.3
              );
            },
          );
          return !loadingOverlay && document.body.innerText.trim().length > 80;
        },
        undefined,
        { timeout: 12_000 },
      )
      .then(() => true)
      .catch(() => false);
    if (!pageReady) {
      throw new Error("The page did not reach a content-ready state; provide a stable public URL or screenshots.");
    }
    await page.evaluate(async () => {
      await document.fonts?.ready;
    });
    await page.waitForTimeout(450);

    const analysis = await page.evaluate(({ requestedSections, maxCaptures: captureLimit }) => {
      const hasMeaningfulVisibleCopy = () =>
        Array.from(document.querySelectorAll("h1, h2, h3, p, a, button, [role='heading']")).some((element) => {
          const text = element.textContent?.trim() ?? "";
          const rect = element.getBoundingClientRect();
          const style = getComputedStyle(element);
          if (
            text.length < 32 ||
            style.visibility === "hidden" ||
            Number(style.opacity) < 0.8 ||
            rect.bottom < 0 ||
            rect.top > window.innerHeight ||
            rect.right < 0 ||
            rect.left > window.innerWidth
          ) {
            return false;
          }
          const point = document.elementFromPoint(
            Math.min(Math.max(rect.left + Math.min(rect.width / 2, 12), 1), window.innerWidth - 1),
            Math.min(Math.max(rect.top + Math.min(rect.height / 2, 12), 1), window.innerHeight - 1),
          );
          return point === element || element.contains(point) || point?.contains(element);
        });
      const heroMeaningful = hasMeaningfulVisibleCopy();
      const sectionLimit = Number(captureLimit) - (heroMeaningful ? 1 : 0);
      const colorToHex = (color) => {
        const values = color.match(/\d+(?:\.\d+)?/g)?.slice(0, 3).map(Number);
        if (!values || values.length !== 3) return null;
        return `#${values.map((value) => Math.round(value).toString(16).padStart(2, "0")).join("")}`;
      };
      const credible = (hex) => {
        if (!hex) return false;
        const values = [1, 3, 5].map((index) => Number.parseInt(hex.slice(index, index + 2), 16) / 255);
        const maximum = Math.max(...values);
        const minimum = Math.min(...values);
        const lightness = (maximum + minimum) / 2;
        return maximum - minimum > 0.15 && lightness > 0.08 && lightness < 0.92;
      };
      const tokenColors = ["--accent", "--primary"]
        .map((token) => {
          const probe = document.createElement("span");
          probe.style.color = `var(${token})`;
          probe.hidden = true;
          document.body.append(probe);
          const value = colorToHex(getComputedStyle(probe).color);
          probe.remove();
          return { token, value };
        })
        .filter(({ value }) => credible(value));

      const counts = new Map();
      for (const element of Array.from(document.querySelectorAll("body *")).slice(0, 2000)) {
        const style = getComputedStyle(element);
        for (const value of [style.backgroundColor, style.color, style.borderTopColor]) {
          const hex = colorToHex(value);
          if (credible(hex)) counts.set(hex, (counts.get(hex) ?? 0) + 1);
        }
      }
      const pageColors = [...counts.entries()]
        .sort((first, second) => second[1] - first[1])
        .map(([value]) => value);

      const terms = requestedSections
        .split(",")
        .map((term) => term.trim().toLowerCase())
        .filter(Boolean);
      const candidates = Array.from(document.querySelectorAll("section, main > div, article, [id]"))
        .map((element) => {
          const rect = element.getBoundingClientRect();
          const text = (element.textContent ?? "").toLowerCase();
          const visualCount = element.querySelectorAll("img, picture, video, canvas, svg").length;
          const headingCount = element.querySelectorAll("h1, h2, h3").length;
          const score = Math.min(text.length, 1_000) + visualCount * 350 + headingCount * 200;
          return { top: rect.top + window.scrollY, height: rect.height, text, score };
        })
        .filter(
          ({ top, height, text }) =>
            top > 400 &&
            height > 240 &&
            height < window.innerHeight * 3 &&
            text.length > 80 &&
            top < document.documentElement.scrollHeight - 200,
        );
      const selected = [];
      for (const term of terms) {
        const candidate = candidates
          .filter(({ top, text }) => text.includes(term) && selected.every((entry) => Math.abs(entry.top - top) > 600))
          .sort((first, second) => second.score - first.score)[0];
        if (candidate) selected.push({ top: candidate.top, label: term.replaceAll(" ", "-") });
        if (selected.length === sectionLimit) break;
      }
      const documentHeight = document.documentElement.scrollHeight;
      for (const candidate of candidates.sort((first, second) => second.score - first.score)) {
        if (selected.length === sectionLimit) break;
        const top = Math.min(Math.max(0, candidate.top), Math.max(0, documentHeight - 810));
        if (selected.every((entry) => Math.abs(entry.top - top) > 600)) {
          selected.push({ top, label: `section-${selected.length + 1}` });
        }
      }
      for (const top of [Math.round(documentHeight * 0.45), Math.round(documentHeight * 0.72)]) {
        if (selected.length === sectionLimit) break;
        const safeTop = Math.min(Math.max(0, top), Math.max(0, documentHeight - 810));
        if (selected.every((entry) => Math.abs(entry.top - safeTop) > 600)) {
          selected.push({ top: safeTop, label: `section-${selected.length + 1}` });
        }
      }

      return { heroMeaningful, tokenColors, pageColors, sections: selected };
    }, { requestedSections: sections, maxCaptures: Number(maxCaptures) });

    const palette = [...analysis.tokenColors.map(({ value }) => value), ...analysis.pageColors]
      .filter((color, index, colors) => colors.indexOf(color) === index);
    const background = palette.find(isCredibleColor) ?? null;
    await mkdir(outputDir, { recursive: true });

    const captures = [];
    const takeShot = async (label, top) => {
      await page.evaluate((y) => window.scrollTo(0, y), top);
      await page.waitForTimeout(2_200);
      const filename = `${String(captures.length + 1).padStart(2, "0")}-${label}.png`;
      const filePath = path.join(outputDir, filename);
      await page.screenshot({ path: filePath, animations: "disabled" });
      captures.push({ label, path: filePath, top });
    };

    if (analysis.heroMeaningful) await takeShot("hero", 0);
    for (const section of analysis.sections) await takeShot(section.label, section.top);

    const metadata = { url, viewport: VIEWPORT, background, palette, captures };
    await writeFile(path.join(outputDir, "metadata.json"), `${JSON.stringify(metadata, null, 2)}\n`);
    return metadata;
  } finally {
    await browser.close();
  }
}

if (import.meta.url === `file://${process.argv[1]}`) {
  const options = readOptions(process.argv.slice(2));
  const result = await captureProjectScreenshots({
    url: options.url,
    outputDir: options["output-dir"],
    sections: options.sections,
    maxCaptures: options["max-captures"] ? Number(options["max-captures"]) : 2,
  });
  console.log(JSON.stringify(result, null, 2));
}
