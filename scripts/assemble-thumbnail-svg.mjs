import { readFile, mkdir, writeFile } from "node:fs/promises";
import path from "node:path";

const readOptions = (argv) => {
  const options = {};
  const positional = [];

  for (let index = 0; index < argv.length; index += 1) {
    const argument = argv[index];
    if (argument === "--") continue;
    if (!argument.startsWith("--")) {
      positional.push(argument);
      continue;
    }
    options[argument.slice(2)] = argv[index + 1];
    index += 1;
  }

  return { options, positional };
};

const cardMarkup = (dataUri, { x, y, width, height }) => {
  const centerX = x + width / 2;
  const centerY = y + height / 2;
  const id = `card-${x}-${y}`;

  return `
    <g transform="rotate(-30 ${centerX} ${centerY})">
      <rect x="${x}" y="${y}" width="${width}" height="${height}" rx="24" fill="#ffffff" filter="url(#shadow)"/>
      <clipPath id="${id}"><rect x="${x}" y="${y}" width="${width}" height="${height}" rx="24"/></clipPath>
      <image href="${dataUri}" x="${x}" y="${y}" width="${width}" height="${height}" preserveAspectRatio="xMidYMid slice" clip-path="url(#${id})"/>
    </g>`;
};

const layouts = [
  [{ x: 270, y: 145, width: 1380, height: 776 }],
  [
    { x: 0, y: 140, width: 1350, height: 759 },
    { x: 868, y: 304, width: 1760, height: 990 },
  ],
  [
    { x: -20, y: 155, width: 1280, height: 720 },
    { x: 760, y: 90, width: 970, height: 546 },
    { x: 610, y: 525, width: 970, height: 546 },
  ],
];

export async function assembleThumbnailSvg({ input, output, background }) {
  if (!input?.length || input.length > 3) {
    throw new Error("Provide between one and three screenshot inputs.");
  }
  if (!background) throw new Error("A solid --background color is required.");

  const images = await Promise.all(
    input.map(async (filePath) => {
      const base64 = await readFile(filePath, "base64");
      return `data:image/png;base64,${base64}`;
    }),
  );
  const cards = layouts[images.length - 1]
    .map((layout, index) => cardMarkup(images[index], layout))
    .join("\n");
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1920" height="1080" viewBox="0 0 1920 1080">
  <defs>
    <filter id="shadow" x="-20%" y="-20%" width="140%" height="150%">
      <feDropShadow dx="0" dy="20" stdDeviation="20" flood-color="#000000" flood-opacity="0.15"/>
    </filter>
  </defs>
  <rect width="1920" height="1080" fill="${background}"/>
  ${cards}
</svg>\n`;

  await mkdir(path.dirname(output), { recursive: true });
  await writeFile(output, svg);
}

if (import.meta.url === `file://${process.argv[1]}`) {
  const { options, positional } = readOptions(process.argv.slice(2));
  if (!options.output || !options.background || !positional.length) {
    throw new Error("Usage: --output <file.svg> --background <color> <screenshot.png> [...]");
  }
  await assembleThumbnailSvg({
    input: positional,
    output: options.output,
    background: options.background,
  });
}
