---
name: svg-rasterize
description: Convert an SVG into a precisely sized raster image when a reusable JPEG or PNG export is needed.
---

# SVG rasterize

Use `scripts/rasterize-svg.mjs` for deterministic SVG exports. It accepts an input SVG, output path, width, height, JPEG quality, and a flattening background.

For portfolio thumbnails, export a `1920 × 1080` JPEG at quality `80` and pass the chosen cover background to `--background`:

```bash
pnpm svg:rasterize -- --input public/assets/projects/tmp/<slug>.svg --output public/assets/projects/<slug>.jpg --width 1920 --height 1080 --quality 80 --background '#112233'
```

Keep the SVG master when exporting a project cover. Inspect the raster at full size and at the approximate portfolio-card size before considering it complete.
