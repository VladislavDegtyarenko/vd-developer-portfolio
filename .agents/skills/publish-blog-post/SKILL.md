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

First check the cover type.

### Notion file cover

1. Fetch the page again to get a fresh Notion file URL.
2. Keep the Notion cover unchanged.
3. The sync command will download it into `public/assets/blog/posts`.

### New local or generated cover

1. Use the final image only. Remove temporary copies.
2. Optimize it as WebP.
3. Save it here:

   ```text
   public/assets/blog/posts/<page-id>/<slug>.webp
   ```

4. Set the Notion cover to:

   ```text
   https://vd-developer.online/assets/blog/posts/<page-id>/<slug>.webp
   ```

5. This is an `external` Notion cover. The sync command will not copy it because the file is already in `public`.
6. Before deployment, check the local file directly. The post may not show the cover until the production URL exists.

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
5. A local cover must already be in that folder.
6. Check the exact image with `file`.
7. Open the image and check it visually.
8. Stop if the expected image is missing or wrong.

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
