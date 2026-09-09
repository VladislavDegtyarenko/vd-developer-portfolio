import { spawn } from "node:child_process";
import {
  mkdir,
  mkdtemp,
  readdir,
  readFile,
  rename,
  rm,
  stat,
  writeFile,
} from "node:fs/promises";
import { createServer } from "node:http";
import { createRequire } from "node:module";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import sharp from "sharp";

const scriptDirectory = path.dirname(fileURLToPath(import.meta.url));
const cvDirectory = path.resolve(scriptDirectory, "..");
const require = createRequire(import.meta.url);
const staticDirectory = path.join(cvDirectory, "out");
const pdfDirectory = path.join(cvDirectory, "output", "pdf");
async function discoverVariants() {
  const appDirectory = path.join(cvDirectory, "app");
  const entries = await readdir(appDirectory, { withFileTypes: true });
  const directories = [
    "",
    ...entries
      .filter((entry) => entry.isDirectory())
      .map((entry) => entry.name)
      .sort(),
  ];
  const variants = [];
  const filenames = new Set();

  for (const directory of directories) {
    const pageDirectory = path.join(appDirectory, directory);
    if (!(await stat(path.join(pageDirectory, "page.tsx")).catch(() => null)))
      continue;

    const { cv } = await import(
      pathToFileURL(path.join(pageDirectory, "cv-data.ts")).href
    );
    const key = directory || "general";
    if (cv.variant !== key) {
      throw new Error(
        `Expected variant "${key}" in ${pageDirectory}/cv-data.ts.`,
      );
    }
    const filename = cv.pdfFilename;
    if (typeof filename !== "string" || !/^[\w .'-]+\.pdf$/.test(filename)) {
      throw new Error(`Invalid PDF filename for ${key}.`);
    }
    if (filenames.has(filename)) {
      throw new Error(`Duplicate PDF filename: ${filename}`);
    }
    filenames.add(filename);
    variants.push({
      key,
      route: directory ? `/${directory}.html` : "/",
      filename,
    });
  }

  return variants;
}

const rasterExtensions = new Set([".avif", ".jpeg", ".jpg", ".png", ".webp"]);

const mimeTypes = new Map([
  [".avif", "image/avif"],
  [".css", "text/css; charset=utf-8"],
  [".html", "text/html; charset=utf-8"],
  [".ico", "image/x-icon"],
  [".jpeg", "image/jpeg"],
  [".jpg", "image/jpeg"],
  [".js", "text/javascript; charset=utf-8"],
  [".json", "application/json; charset=utf-8"],
  [".png", "image/png"],
  [".svg", "image/svg+xml"],
  [".webp", "image/webp"],
  [".woff", "font/woff"],
  [".woff2", "font/woff2"],
]);

function formatBytes(bytes) {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 ** 2) return `${(bytes / 1024).toFixed(1)} KiB`;
  return `${(bytes / 1024 ** 2).toFixed(2)} MiB`;
}

function printPdfResults(results) {
  const headers = ["Variant", "Output file", "Size"];
  const rows = results.map((result) => [
    result.variant,
    result.filename,
    result.size,
  ]);
  const widths = headers.map((header, index) =>
    Math.max(header.length, ...rows.map((row) => row[index].length)),
  );
  const separator = `├${widths.map((width) => "─".repeat(width + 2)).join("┼")}┤`;
  const formatRow = (row) =>
    `│ ${row.map((cell, index) => cell.padEnd(widths[index])).join(" │ ")} │`;

  console.log("\nGenerated PDF files:");
  console.log(`┌${widths.map((width) => "─".repeat(width + 2)).join("┬")}┐`);
  console.log(formatRow(headers));
  console.log(separator);
  for (const row of rows) console.log(formatRow(row));
  console.log(`└${widths.map((width) => "─".repeat(width + 2)).join("┴")}┘`);
}

async function runAsync(command, args) {
  let result;
  try {
    result = await new Promise((resolve, reject) => {
      const child = spawn(command, args, {
        cwd: cvDirectory,
        stdio: "inherit",
      });

      child.once("error", reject);
      child.once("close", (code) => resolve(code));
    });
  } catch (error) {
    if (error instanceof Error && "code" in error && error.code === "ENOENT") {
      throw new Error(
        command === "weasyprint"
          ? "WeasyPrint is required for CV export. Install it for your operating system and make sure the weasyprint command is available in PATH."
          : `Command not found: ${command}`,
      );
    }
    throw error;
  }

  if (result !== 0) {
    throw new Error(`${command} ${args.join(" ")} exited with code ${result}`);
  }
}

async function collectRasterImages(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = await Promise.all(
    entries.map(async (entry) => {
      const entryPath = path.join(directory, entry.name);

      if (entry.isDirectory()) return collectRasterImages(entryPath);
      if (rasterExtensions.has(path.extname(entry.name).toLowerCase()))
        return [entryPath];
      return [];
    }),
  );

  return files.flat();
}

async function compressImage(imagePath) {
  const extension = path.extname(imagePath).toLowerCase();
  const initialSize = (await stat(imagePath)).size;
  let pipeline = sharp(imagePath).rotate().resize({
    width: 720,
    height: 720,
    fit: "inside",
    withoutEnlargement: true,
  });

  if (extension === ".png") {
    pipeline = pipeline.png({
      compressionLevel: 9,
      effort: 10,
      palette: true,
      quality: 90,
    });
  } else if (extension === ".jpg" || extension === ".jpeg") {
    pipeline = pipeline.jpeg({ mozjpeg: true, quality: 84 });
  } else if (extension === ".webp") {
    pipeline = pipeline.webp({ effort: 6, quality: 84 });
  } else if (extension === ".avif") {
    pipeline = pipeline.avif({ effort: 7, quality: 55 });
  }

  const optimizedImage = await pipeline.toBuffer();
  if (optimizedImage.length >= initialSize) {
    return { initialSize, optimizedSize: initialSize, path: imagePath };
  }

  await writeFile(imagePath, optimizedImage);
  return {
    initialSize,
    optimizedSize: optimizedImage.length,
    path: imagePath,
  };
}

async function compressStaticImages() {
  const images = await collectRasterImages(staticDirectory);
  const results = await Promise.all(images.map(compressImage));

  if (results.length === 0) {
    console.log("No raster images found in the CV build.");
    return;
  }

  for (const result of results) {
    const relativePath = path.relative(staticDirectory, result.path);
    console.log(
      `Optimized ${relativePath}: ${formatBytes(result.initialSize)} -> ${formatBytes(result.optimizedSize)}`,
    );
  }
}

function resolveStaticPath(requestUrl) {
  const pathname = decodeURIComponent(
    new URL(requestUrl ?? "/", "http://localhost").pathname,
  );
  const relativePath = pathname.replace(/^\/+/, "") || "index.html";
  const resolvedPath = path.resolve(staticDirectory, relativePath);
  const staticRoot = `${path.resolve(staticDirectory)}${path.sep}`;

  if (
    resolvedPath !== path.resolve(staticDirectory) &&
    !resolvedPath.startsWith(staticRoot)
  ) {
    return null;
  }

  return resolvedPath;
}

async function createStaticServer() {
  const server = createServer(async (request, response) => {
    try {
      let filePath = resolveStaticPath(request.url);
      if (!filePath) {
        response.writeHead(403).end("Forbidden");
        return;
      }

      const fileStats = await stat(filePath).catch(() => null);
      if (fileStats?.isDirectory())
        filePath = path.join(filePath, "index.html");

      const contents = await readFile(filePath);
      const contentType = mimeTypes.get(path.extname(filePath).toLowerCase());
      response.writeHead(200, {
        "Cache-Control": "no-store",
        ...(contentType ? { "Content-Type": contentType } : {}),
      });
      response.end(contents);
    } catch {
      response.writeHead(404).end("Not found");
    }
  });

  await new Promise((resolve, reject) => {
    server.once("error", reject);
    server.listen(0, "127.0.0.1", resolve);
  });

  const address = server.address();
  if (!address || typeof address === "string")
    throw new Error("Failed to start CV server.");

  return { server, url: `http://127.0.0.1:${address.port}/` };
}

async function renderPdf(url, pdfPath) {
  await mkdir(path.dirname(pdfPath), { recursive: true });

  await runAsync("weasyprint", [
    "--quiet",
    "--media-type",
    "print",
    "--optimize-images",
    "--jpeg-quality",
    "84",
    "--dpi",
    "200",
    "--custom-metadata",
    "--pdf-tags",
    "--fail-on-http-errors",
    "--allowed-protocols",
    "http,data,file",
    url,
    pdfPath,
  ]);
}

async function main() {
  const variants = await discoverVariants();
  const args = process.argv.slice(2);
  const requestedVariant = args[0] ?? "all";
  if (args.length > 1) throw new Error("Pass one CV variant or all.");
  if (requestedVariant === "--list") {
    for (const variant of variants) console.log(variant.key);
    return;
  }
  if (requestedVariant === "--help") {
    console.log("Usage: npm run pdf -- [all|<variant>|--list]");
    return;
  }
  const selectedVariants =
    requestedVariant === "all"
      ? variants
      : variants.filter((variant) => variant.key === requestedVariant);
  if (selectedVariants.length === 0) {
    throw new Error(
      `Unknown CV variant "${requestedVariant}". Use all or: ${variants.map((variant) => variant.key).join(", ")}.`,
    );
  }

  await runAsync("weasyprint", ["--version"]);
  console.log("Building the CV...");
  await runAsync(process.execPath, [
    require.resolve("next/dist/bin/next"),
    "build",
    "--webpack",
  ]);

  console.log("Compressing generated images...");
  await compressStaticImages();

  await mkdir(pdfDirectory, { recursive: true });
  const stagingDirectory = await mkdtemp(path.join(pdfDirectory, ".render-"));
  let server;
  try {
    const staticServer = await createStaticServer();
    server = staticServer.server;
    for (const variant of selectedVariants) {
      console.log(`Rendering ${variant.key} A4 PDF...`);
      await renderPdf(
        new URL(variant.route, staticServer.url).href,
        path.join(stagingDirectory, variant.filename),
      );
    }
    // Keep existing PDFs until every requested version has rendered successfully.
    const results = [];
    for (const variant of selectedVariants) {
      const outputPath = path.join(pdfDirectory, variant.filename);
      await rename(path.join(stagingDirectory, variant.filename), outputPath);
      const pdfStats = await stat(outputPath);
      results.push({
        variant: variant.key,
        filename: path.relative(cvDirectory, outputPath),
        size: formatBytes(pdfStats.size),
      });
    }
    printPdfResults(results);
  } finally {
    if (server) {
      await new Promise((resolve, reject) => {
        server.close((error) => (error ? reject(error) : resolve()));
      });
    }
    await rm(stagingDirectory, { recursive: true, force: true });
  }
}

main().catch((error) => {
  console.error(error instanceof Error ? error.message : error);
  process.exitCode = 1;
});
