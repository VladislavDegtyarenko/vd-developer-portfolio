# CV

The CV is a standalone Next.js application designed for a single A4 page.

## Development

Run from this directory:

```bash
pnpm dev
```

## PDF export

The export uses WeasyPrint, not Chrome or Playwright. Install it once on macOS:

```bash
brew install weasyprint
```

Then run from the `vd-developer-portfolio` root:

```bash
pnpm cv:pdf
```

The command builds the CV, compresses raster images in the generated `cv/out` directory, and writes both variants:

```text
output/pdf/Vladyslav-Dihtiarenko-Frontend-Developer.pdf
output/pdf/Vladyslav-Dihtiarenko-Frontend-Engineer-Supabase.pdf
output/pdf/Vladyslav-Dihtiarenko-Frontend-Developer-Gismart.pdf
```

One variant can be exported independently:

```bash
pnpm cv:pdf general
pnpm cv:pdf supabase
pnpm cv:pdf gismart
```

The web routes are `/` for the general CV, `/supabase` for the tailored Supabase version, and
`/gismart` for the tailored Gismart version.
