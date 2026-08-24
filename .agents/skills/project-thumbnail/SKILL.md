---
name: project-thumbnail
description: Create a portfolio project cover from a public project URL using deterministic screenshots and an editable SVG master. Use for explicit project-cover requests or when a project image is missing.
---

# Project thumbnail

Create a `1920 × 1080` JPEG cover plus an editable SVG master under `public/assets/projects/tmp`. Do not regenerate a valid existing cover unless the request explicitly asks for a replacement.

## Source and stopping conditions

Use the project `previewLink` as the source unless the prompt supplies a URL. If it is unavailable, inaccessible, or needs authentication, stop and ask for public access or screenshots. Do not fabricate a cover from an inaccessible site.

## Workflow

1. Capture the desktop page at `1440 × 810` only after fonts load, network activity settles, and any visible loading/preloader overlay has gone. Let one-time entrance and scroll-reveal animations finish, then disable motion only immediately before each screenshot. Stop if the site remains in a loading state instead of using it as a cover.
2. Default to two captures: a real hero plus one content-rich, visually distinct screen. If the initial viewport is a preloader, transition, blank canvas, or isolated counter, skip it and choose two substantive sections instead. Add a third only when it contributes essential variety. Prefer screens that show the project identity, product/UI, key work, outcomes, case studies, or services in context.
3. Inspect the raw captures before export. At least one must communicate the project immediately at portfolio-card size. If a capture is visually weak, recapture a better section rather than exporting it.
4. Let the capture script select a credible background color: `--accent` or `--primary` tokens take priority, followed by a non-neutral page color. If neither yields a credible project color, ask the user for a background hex value.
5. Generate the cover with the workflow helper. It writes a self-contained SVG which embeds the captured screenshots as data URIs, rasterizes it as quality-80 JPEG, and removes the temporary screenshot PNGs only after successful export.

```bash
pnpm project-thumbnail -- --slug <slug> --url <project-url> --sections 'results,growth,case studies,services'
```

The layout uses a solid project-color background and one to three layered screenshot cards. Cards have `24px` radii, `-30°` rotation, and independent `0 20px 20px rgba(0,0,0,.15)` floating shadows. Use near-full-bleed cards and stack them with substantial overlap rather than spreading them apart. Outer corners may intentionally extend beyond the canvas. For two captures, make the first input the large back card and layer the second above it as the dominant foreground card; its minimum preset is `1760 × 990`—1.6× the prior `1100 × 619` card in both dimensions. Keep three cards exceptional; when needed, preserve the same oversized, stacked treatment. Never shrink meaningful UI below easy recognition at card size.

The helper refuses to overwrite an existing JPEG unless `--replace` is supplied after confirming it is the intended project asset. Verify the final JPEG at full size and at portfolio-card size, confirm `ProjectSlide` resolves the image path, and retain `public/assets/projects/tmp/<slug>.svg` as the editable source.
