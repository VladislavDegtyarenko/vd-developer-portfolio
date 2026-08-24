import { access, rm } from "node:fs/promises";
import path from "node:path";
import { captureProjectScreenshots } from "./capture-project-screenshots.mjs";
import { assembleThumbnailSvg } from "./assemble-thumbnail-svg.mjs";
import { rasterizeSvg } from "./rasterize-svg.mjs";

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

const projectsDirectory = path.resolve("public/assets/projects");
const validSlug = (slug) => /^[a-z0-9][a-z0-9-]*$/.test(slug);

export async function createProjectThumbnail({ slug, url, sections, background, maxCaptures = 2, replace = false }) {
  if (!validSlug(slug ?? "")) {
    throw new Error("--slug must contain lowercase letters, numbers, and hyphens only.");
  }
  if (!url) throw new Error("--url is required.");

  const captureDirectory = path.join(projectsDirectory, "tmp", `${slug}-screenshots`);
  const svgPath = path.join(projectsDirectory, "tmp", `${slug}.svg`);
  const outputPath = path.join(projectsDirectory, `${slug}.jpg`);
  try {
    await access(outputPath);
    if (!replace) {
      throw new Error(`Refusing to overwrite ${outputPath}. Re-run with --replace after confirming it is the intended project asset.`);
    }
  } catch (error) {
    if (error?.code !== "ENOENT") throw error;
  }
  const capture = await captureProjectScreenshots({ url, outputDir: captureDirectory, sections, maxCaptures: Number(maxCaptures) });
  const selectedBackground = background ?? capture.background;
  if (!selectedBackground) {
    throw new Error("No credible project color was found. Provide --background '#RRGGBB'.");
  }

  await assembleThumbnailSvg({
    input: capture.captures.map(({ path: screenshotPath }) => screenshotPath),
    output: svgPath,
    background: selectedBackground,
  });
  await rasterizeSvg({
    input: svgPath,
    output: outputPath,
    width: 1920,
    height: 1080,
    quality: 80,
    background: selectedBackground,
  });
  await rm(captureDirectory, { recursive: true, force: true });

  return { svgPath, outputPath, background: selectedBackground, captures: capture.captures.length };
}

if (import.meta.url === `file://${process.argv[1]}`) {
  const options = readOptions(process.argv.slice(2));
  const result = await createProjectThumbnail({ ...options, replace: process.argv.includes("--replace") });
  console.log(JSON.stringify(result, null, 2));
}
