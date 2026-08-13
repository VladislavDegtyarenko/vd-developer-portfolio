# Blog

The `blog` agent handles all blog work.

## Flow

- **Write a post** — use `write-blog-post`.
- **Update a post** — use `write-blog-post`. Keep the current slug.
- **Create a cover** — use `create-blog-cover` after the Notion page exists. Create it in Figma, export it, upload it directly to Notion as a native file cover, and verify it is visible there.
- **Publish a post** — use `publish-blog-post`.
- **Write and publish a post** — use `write-blog-post`, `create-blog-cover` when needed, then `publish-blog-post`.

The cover flow is strict:

1. Create the editable image in Figma.
2. Export a raster image and upload it to the Notion post as its thumbnail/page cover.
3. Verify the image is visible in the actual Notion page. Do not use a production URL or deploy first.
4. When publishing, run `pnpm sync-blog-assets` to import the Notion-hosted image into `public/assets/blog/posts`.
5. Commit the imported asset, push `main`, and let Vercel deploy automatically.
6. Verify the production post and image.

Do not publish unless the user asks.

Publishing is complete only when the production post and image both work.

For a local raster upload, prefer the connected Notion tool when it supports native file covers. Otherwise use the official Notion File Upload API with the repository's `NOTION_TOKEN`; browser upload is only a last manual fallback. Verify the resulting page has `cover.type = file` and that its URL serves the expected image.
