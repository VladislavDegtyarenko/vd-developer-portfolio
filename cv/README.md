# CV

This directory contains a standalone Next.js application that renders one-page A4 CVs in a shared layout. It serves
the CVs in a browser and exports them as selectable, searchable PDFs with clickable links.

Each version has its own content, so a CV tailored to one company can change without changing the general CV or other
company versions.

## Structure

```text
cv/
  app/
    page.tsx                 # General CV at /
    cv-data.ts               # General CV content and PDF filename
    <company>/
      page.tsx               # Company CV at /<company>
      cv-data.ts             # Company content and PDF filename
    layout.tsx               # Fonts and default page metadata
    globals.css              # Colors, reset, and A4 print settings
  components/
    CvPage.tsx               # Shared CV layout
    CvPage.module.scss       # Screen and print styles
  types.ts                   # Shared CV content types
  public/                    # Static assets
  scripts/render-pdf.mjs     # Builds pages and exports PDFs
  out/                       # Generated static site files
  output/pdf/                # Generated PDFs
```

The general CV lives directly in `app/`. Company versions currently live in `app/binance/`, `app/eitems/`,
`app/gismart/`, `app/ni-bloom/`, `app/riseguide/`, and `app/supabase/`.

`out/` and `output/` are generated locally and excluded from Git. Files in `output/pdf/archive/` are older PDFs without
current source pages, so they cannot be regenerated from the current code.

## Setup

Run these commands inside the `cv/` directory. The application has its own dependencies and `package-lock.json`.

```bash
npm ci
npm run dev
```

Open `http://localhost:3000` after the development server starts. The build downloads Geist fonts from Google, so the
first build needs network access.

## How to use

### Preview the CVs

Run the development server:

```bash
npm run dev
```

Open one of these routes in the browser:

| Version | Route |
| --- | --- |
| General | `/` |
| Binance | `/binance` |
| EITEMS | `/eitems` |
| Gismart | `/gismart` |
| N-I Bloom | `/ni-bloom` |
| RiseGuide | `/riseguide` |
| Supabase | `/supabase` |

### Export PDFs

Before the first export, install WeasyPrint for your operating system and make sure the `weasyprint` command is
available in your terminal.

#### macOS

Install WeasyPrint with Homebrew:

```bash
brew install weasyprint
weasyprint --version
```

#### Windows

Choose one of these installation methods:

- **Latest executable:** download the latest Windows executable from the [WeasyPrint releases](https://github.com/Kozea/WeasyPrint/releases), add the folder containing `weasyprint.exe` to `PATH`, open a new terminal, and run `weasyprint --version`.
- **Python and MSYS2:** install Python and MSYS2, then run this command in the MSYS2 UCRT64 shell:

  ```bash
  pacman -S mingw-w64-ucrt-x86_64-pango
  ```

  In Command Prompt, create and activate a virtual environment, install WeasyPrint, and verify the command:

  ```bat
  py -m venv .venv-weasyprint
  .venv-weasyprint\Scripts\activate.bat
  python -m pip install weasyprint
  weasyprint --version
  ```

Keep the virtual environment active when you run `npm run pdf`, unless its `Scripts` directory is already in `PATH`.

You can also run the project inside WSL and install WeasyPrint using the Linux instructions from the [official
WeasyPrint documentation](https://doc.courtbouillon.org/weasyprint/latest/first_steps.html).

Export all current versions:

```bash
npm run pdf
```

Export one version or list the available versions:

```bash
npm run pdf -- general
npm run pdf -- supabase
npm run pdf -- --list
```

The exporter builds the static pages before rendering the selected PDFs. You do not need to start `npm run dev` first.
Results always go to `output/pdf/`. Exporting one version leaves the other PDFs and `archive/` unchanged.

When running commands from the portfolio root, prefix them with `npm --prefix cv`:

```bash
npm --prefix cv run pdf
npm --prefix cv run pdf -- supabase
```

### Check the project

```bash
npm run lint
npm run build
```

`npm run build` generates the static site in `out/`. `next start` does not serve this static export.

## How it works

Each `page.tsx` reads the `cv-data.ts` beside it and passes that content to `CvPage`, the shared layout used by every
version. The layout reads from top to bottom: name, contact details, summary, skills, experience, languages, and
availability. It uses no portrait, logo, or sidebar.

When you run `npm run pdf`, the export script:

1. Finds the general page and immediate company folders in `app/`.
2. Reads each version's content and PDF filename from `cv-data.ts`.
3. Builds all pages into HTML, styles, fonts, and images in `out/`.
4. Compresses generated images and starts a temporary local server for the built files.
5. Converts the selected pages to A4 PDFs with WeasyPrint.
6. Moves the PDFs into `output/pdf/` after every selected version renders successfully.

To change wording for one version, edit its `cv-data.ts`. To change the layout for every version, edit
`components/CvPage.tsx`, `components/CvPage.module.scss`, or the shared print settings in `app/globals.css`, then run
the export again.

Both footer texts belong to each version's `cv-data.ts`: `footer.skills` is the short skills line, and
`footer.availability` describes the notice period. Keep key technologies in the main skills and experience sections
too, so they remain available if a resume parser skips the footer.

## Add a company version

For a vacancy-specific CV, follow the local [`tailored-cv`](.agents/skills/tailored-cv/SKILL.md) skill. It explains how
to map a job description to proven experience, create the variant files, keep the CV to one A4 page, and verify the PDF.

1. Create `app/<company>/cv-data.ts` with `export const cv: CvContent`, importing the type from `../../types`. Use the
   folder name as `variant` and set a unique `pdfFilename` ending in `.pdf`.
2. Add `page.tsx` beside it. Import `CvPage` from `../../components/CvPage`, import `cv` from `./cv-data`, and return
   `<CvPage content={cv} />`. Set the page title and description for the vacancy.
3. Run `npm run pdf -- <company>` and inspect the PDF for text that extends beyond the A4 page.

The exporter discovers the general page and immediate company folders automatically. There is no second list of
companies to maintain.
