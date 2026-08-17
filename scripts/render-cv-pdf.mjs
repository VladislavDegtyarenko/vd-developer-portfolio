import { spawn, spawnSync } from "node:child_process";
import { mkdir, readFile, readdir, rm, stat, writeFile } from "node:fs/promises";
import { createServer } from "node:http";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const scriptDirectory = path.dirname(fileURLToPath(import.meta.url));
const repositoryDirectory = path.resolve(scriptDirectory, "..");
const cvDirectory = path.join(repositoryDirectory, "cv");
const staticDirectory = path.join(cvDirectory, "out");
const pdfDirectory = path.join(repositoryDirectory, "output", "pdf");
const requestedVariant = process.argv[2] ?? "all";
const pdfVariants = [
  {
    key: "general",
    route: "/",
    filename: "Vladyslav-Dihtiarenko-Frontend-Developer.pdf",
  },
  {
    key: "supabase",
    route: "/supabase.html",
    filename: "Vladyslav-Dihtiarenko-Frontend-Engineer-Supabase.pdf",
  },
  {
    key: "gismart",
    route: "/gismart.html",
    filename: "Vladyslav-Dihtiarenko-Frontend-Developer-Gismart.pdf",
  },
];
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

function run(command, args) {
  const result = spawnSync(command, args, {
    cwd: repositoryDirectory,
    stdio: "inherit",
  });

  if (result.error) throw result.error;
  if (result.status !== 0) {
    throw new Error(`${command} ${args.join(" ")} exited with code ${result.status}`);
  }
}

async function runAsync(command, args) {
  let result;
  try {
    result = await new Promise((resolve, reject) => {
      const child = spawn(command, args, {
        cwd: repositoryDirectory,
        stdio: "inherit",
      });

      child.once("error", reject);
      child.once("close", (code) => resolve(code));
    });
  } catch (error) {
    if (error instanceof Error && "code" in error && error.code === "ENOENT") {
      throw new Error(
        "WeasyPrint is required for CV export. On macOS, install it with: brew install weasyprint",
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
      if (rasterExtensions.has(path.extname(entry.name).toLowerCase())) return [entryPath];
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
  const pathname = decodeURIComponent(new URL(requestUrl ?? "/", "http://localhost").pathname);
  const relativePath = pathname.replace(/^\/+/, "") || "index.html";
  const resolvedPath = path.resolve(staticDirectory, relativePath);
  const staticRoot = `${path.resolve(staticDirectory)}${path.sep}`;

  if (resolvedPath !== path.resolve(staticDirectory) && !resolvedPath.startsWith(staticRoot)) {
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
      if (fileStats?.isDirectory()) filePath = path.join(filePath, "index.html");

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
  if (!address || typeof address === "string") throw new Error("Failed to start CV server.");

  return { server, url: `http://127.0.0.1:${address.port}/` };
}

async function renderPdf(url, pdfPath) {
  await mkdir(path.dirname(pdfPath), { recursive: true });
  await rm(pdfPath, { force: true });

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

  const pdfStats = await stat(pdfPath);
  console.log(`Created ${path.relative(repositoryDirectory, pdfPath)} (${formatBytes(pdfStats.size)})`);
}

async function main() {
  const pnpmCommand = process.platform === "win32" ? "pnpm.cmd" : "pnpm";
  const selectedVariants =
    requestedVariant === "all"
      ? pdfVariants
      : pdfVariants.filter((variant) => variant.key === requestedVariant);

  if (selectedVariants.length === 0) {
    throw new Error(
      `Unknown CV variant "${requestedVariant}". Use all, general, supabase, or gismart.`,
    );
  }

  console.log("Building the CV...");
  run(pnpmCommand, ["--dir", cvDirectory, "run", "build"]);

  console.log("Compressing generated images...");
  await compressStaticImages();

  const { server, url } = await createStaticServer();
  try {
    for (const variant of selectedVariants) {
      const variantUrl = new URL(variant.route, url).href;
      const outputPath = path.join(pdfDirectory, variant.filename);
      console.log(`Rendering ${variant.key} A4 PDF with WeasyPrint...`);
      await renderPdf(variantUrl, outputPath);
    }
  } finally {
    await new Promise((resolve, reject) => {
      server.close((error) => (error ? reject(error) : resolve()));
    });
  }
}

main().catch((error) => {
  console.error(error instanceof Error ? error.message : error);
  process.exitCode = 1;
});
