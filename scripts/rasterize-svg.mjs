import { mkdir } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

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

const required = (options, key) => {
  if (!options[key]) throw new Error(`Missing required --${key} option.`);
  return options[key];
};

export async function rasterizeSvg({
  input,
  output,
  width = 1920,
  height = 1080,
  quality = 80,
  background = "#ffffff",
}) {
  const targetWidth = Number(width);
  const targetHeight = Number(height);
  const jpegQuality = Number(quality);

  if (!Number.isInteger(targetWidth) || !Number.isInteger(targetHeight)) {
    throw new Error("--width and --height must be integers.");
  }
  if (!Number.isInteger(jpegQuality) || jpegQuality < 1 || jpegQuality > 100) {
    throw new Error("--quality must be an integer from 1 to 100.");
  }
  if (path.extname(output).toLowerCase() !== ".jpg" && path.extname(output).toLowerCase() !== ".jpeg") {
    throw new Error("The output path must end in .jpg or .jpeg.");
  }

  await mkdir(path.dirname(output), { recursive: true });
  await sharp(input, { density: 72 })
    .flatten({ background })
    .resize(targetWidth, targetHeight, { fit: "fill" })
    .jpeg({ quality: jpegQuality, chromaSubsampling: "4:2:0" })
    .toFile(output);
}

if (import.meta.url === `file://${process.argv[1]}`) {
  const options = readOptions(process.argv.slice(2));
  await rasterizeSvg({
    input: required(options, "input"),
    output: required(options, "output"),
    width: options.width,
    height: options.height,
    quality: options.quality,
    background: options.background,
  });
}
