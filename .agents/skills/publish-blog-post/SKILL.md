---
name: publish-blog-post
description: Publish a finished Notion blog post for this repository. Use only when the user asks to publish, deploy, release, or republish a post. This includes the cover image, local asset sync, checks, Git commit and push, Vercel deployment, and production verification.
---

# Publish a blog post

Publishing means the post and its image work on the production website.

## Before publishing

1. Run `git status --short --branch`.
2. Keep unrelated changes out of the blog commit.
3. Production comes from `main`. If another branch is active, stop and ask before continuing.
4. Fetch the Notion post again.
5. Check its title, description, slug, date, tags, body, links, code blocks, and cover.
6. Do not change the slug unless the user asks.

## Image

The Notion post is the source of truth for the cover.

1. Use `$create-blog-cover` if a new cover has not been made yet.
2. Open the actual Notion page and visually confirm that its thumbnail is visible before publishing.
3. Fetch the page and confirm its cover is a native Notion `file`, not `external`, when cover metadata is available.
4. Stop if the cover is missing, temporary, external, or only present as a local repository file. Do not deploy first as a workaround.
5. Keep the Notion cover unchanged during asset sync.

Use the same checks for body images. Do not continue with a missing or temporary image URL.

## Publish and copy images

1. Turn on `Published` in Notion.
2. Sync the post:

   ```bash
   pnpm sync-blog-assets -- --slug <slug>
   ```

3. If the cover changed or the old local image was wrong, force a new download:

   ```bash
   pnpm sync-blog-assets -- --slug <slug> --force
   ```

4. Notion `file` images are saved under `public/assets/blog/posts`.
5. Read the sync output and confirm the cover source is `file` and its status is `downloaded`, `refreshed`, or `existing`. Treat `external`, `missing`, and `failed` as publication blockers.
6. Use the local path reported by the sync command. Do not guess the output filename.
7. Check the exact image with `file`.
8. Open the imported image and compare it with the cover visible in Notion.
9. Stop if the expected image is missing or wrong.

## Test

Run:

```bash
pnpm lint
pnpm build
```

Start `pnpm start` in a separate session. Stop it after the browser checks.

Open these pages locally:

- `/blog`
- `/blog/<slug>`
- the image path under `/assets/blog/posts/...`

Check the post, date, tags, code, links, and image.

## Commit and push

1. Check `git status` and `git diff`.
2. Stage only the post assets and other files that belong to this publish.
3. Include every new image under `public/assets/blog/posts`.
4. Commit with a clear message.
5. Push `main`.
6. Do not push if a test failed.

## Check production

1. Get the full commit SHA with `git rev-parse HEAD`.
2. Find the Vercel production deployment with the same `githubCommitSha`.
3. Wait for `READY`.
4. Open the production blog list and post.
5. Check the image visually on both pages.
6. Open the image URL directly. It must return an image, not HTML or a 404.
7. Check recent deployment and browser errors.
8. Report the commit SHA, deployment URL, post URL, image URL, and final state.

Do not say the post is published until all production checks pass.
