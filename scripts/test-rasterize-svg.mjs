import assert from "node:assert/strict";
import { mkdtemp, rm, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import path from "node:path";
import { spawn } from "node:child_process";
import sharp from "sharp";

const run = (command, args) =>
  new Promise((resolve, reject) => {
    const child = spawn(command, args, { stdio: "inherit" });
    child.once("error", reject);
    child.once("exit", (code) => (code === 0 ? resolve() : reject(new Error(`Rasterizer exited with code ${code}.`))));
  });

const directory = await mkdtemp(path.join(tmpdir(), "svg-rasterize-"));
try {
  const input = path.join(directory, "source.svg");
  const output = path.join(directory, "output.jpg");
  await writeFile(input, '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="18"><rect width="32" height="18" fill="#2563eb"/></svg>');
  await run(process.execPath, [
    "scripts/rasterize-svg.mjs",
    "--input", input,
    "--output", output,
    "--width", "1920",
    "--height", "1080",
    "--quality", "80",
    "--background", "#2563eb",
  ]);
  const metadata = await sharp(output).metadata();
  assert.equal(metadata.format, "jpeg");
  assert.equal(metadata.width, 1920);
  assert.equal(metadata.height, 1080);
  console.log("SVG rasterizer smoke test passed (JPEG, 1920x1080, quality 80 invocation).");
} finally {
  await rm(directory, { recursive: true, force: true });
}
