# Blog workflow

This folder is the entry point for work on the Notion-backed personal blog.

## Route by intent

- **“Write an article about X”** — follow [writing-style.md](./writing-style.md). Draft or update the Notion article, but do not deploy unless the user also asks to publish.
- **“Publish this article”** — follow [writing-style.md](./writing-style.md) when editing copy, then execute [publishing.md](./publishing.md) completely.
- **“Write and publish an article about X”** — write with [writing-style.md](./writing-style.md), then execute [publishing.md](./publishing.md) completely.
- **Update an existing article** — preserve its slug unless the user explicitly requests a slug change. Update Notion, and resync/rebuild/redeploy only when publishing is requested. If the cover changes during publishing, verify the new public asset; do not assume the old asset was refreshed.

Publishing means the production article and cover have both been verified. A Notion edit, successful local build, git push, or Vercel deployment on its own is not enough.

## Current pipeline at a glance

- Source: the Notion **Blog Database** (`Title`, `Description`, `Slug`, `Date`, `Tags`, `Published` plus the page cover and body blocks).
- Query: `src/utils/notion/getPosts.ts` returns only entries with `Published` checked and a non-empty `Slug`, newest `Date` first.
- Rendering: Next.js statically generates published post routes. Metadata comes from `transformPostSummary`; page content comes from the first 100 top-level Notion child blocks.
- Images: `resolveNotionImageLocally` downloads missing Notion `file` images into `public/assets/blog/posts`; `external` images remain remote and are not synchronized.
- Trigger: there is no explicit sync script. `pnpm build` resolves every published cover and each fetched top-level image block; `pnpm dev` resolves only routes that are rendered.
- Deployment: pushing `main` triggers the Git-connected Vercel production project `vd-developer-portfolio`. Other branches produce previews.

## Evaluated improvement (not implemented)

The current weakness is that asset synchronization is a side effect of page rendering, and download failures return `null` after logging instead of necessarily failing the build. A future improvement should add `pnpm sync-blog-assets`, backed by a small script that reuses the existing Notion query and image resolver, visits every published cover and post body, reports the exact files resolved, and exits non-zero if an expected `file` image is absent. Keep `pnpm build` behavior unchanged. This needs a modest extraction of the current rendering-bound code and should be reviewed separately.
