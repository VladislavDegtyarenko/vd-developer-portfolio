---
name: tailored-cv
description: Create or update an evidence-based CV variant for a specific vacancy in this Next.js CV application.
---

# Tailored CV

Use this skill when a user provides a job description, company, role, or vacancy URL and asks for a tailored CV. Work in
the `cv/` application. Keep the shared layout unchanged unless the user explicitly asks for a design change.

## Understand the vacancy

Before editing, read the vacancy and extract:

- target title and seniority;
- required and preferred technologies;
- product domain and responsibilities;
- collaboration, delivery, testing, and communication expectations;
- evidence that can be demonstrated by the existing CV.

Read `types.ts`, `components/CvPage.tsx`, the general source at `app/cv-data.ts`, and the closest existing tailored
variants before writing. Treat these files as the source of truth for the available facts, fields, and layout.

Map every important keyword to evidence in the existing CV. Use a keyword only when it is supported by the source CV or
by a fact the user supplied in the current request. Never invent an employer, project, metric, responsibility,
technology, seniority level, or outcome. Do not expose confidential client names or details that the source CV keeps
anonymous.

## Create the variant

For a new company or vacancy, create:

```text
app/<company>/cv-data.ts
app/<company>/page.tsx
```

Use the existing variants as templates:

- `cv-data.ts` exports `cv: CvContent` from `../../types` and owns all text for that version;
- `variant` matches the lowercase folder name;
- `pdfFilename` is unique and ends in `.pdf`;
- `page.tsx` imports `CvPage` and the local `cv`, returns `<CvPage content={cv} />`, and defines vacancy-specific
  Next.js metadata;
- the shared component and styles remain the same for every version.

When the target variant already exists, update its data in place instead of creating a duplicate route. Do not edit the
general CV or another company's data to support one vacancy.

## Tailor the content

- Set `eyebrow` to the target role when the level is supported by the candidate's experience.
- Write a short summary that leads with the target role, relevant experience, matching stack, and strongest proven
  outcomes.
- Reorder and regroup `skills` around the vacancy. Put relevant, confirmed technologies first. Keep categories concise
  and avoid keyword stuffing.
- Preserve employer names and dates in `experience`. Rewrite, reorder, or shorten bullets to foreground relevant
  ownership, systems, delivery, testing, and measurable outcomes.
- Use `projects`, `summary`, and `technologies` according to the existing `ExperienceRole` shape. Keep project names
  anonymous when the source CV does.
- Keep `footer.skills` and `footer.availability` accurate. Make sure important technologies also appear in the main
  skills or experience sections because some resume parsers skip the footer.

Write in the established English CV voice: plain, concrete, professional, and concise. Keep the document readable for a
person and an applicant tracking system (ATS), which is software that parses resumes. Do not add promotional language,
hashtags, emojis, or unsupported claims.

## Fit the A4 document

The shared layout is a single-column, one-page A4 CV. Keep the tailored content close to the length of existing
variants. Prefer removing low-relevance detail over shrinking the design or changing the shared styles.

## Verify the result

From the `cv/` directory:

1. Run `npm run lint`.
2. Run `npm run pdf -- <company>` for the new or updated variant.
3. Inspect the generated PDF in `output/pdf/` for one-page A4 output, overflow, clipping, broken links, and awkward
   line breaks.
4. Confirm that the route and PDF filename are unique and that unrelated variants did not change.

If PDF export is unavailable because WeasyPrint is not installed, report that clearly and still run the checks that are
available. Do not claim the PDF was verified when it was not.

Finish by reporting the tailored route, source data file, generated PDF path, and checks that passed.
