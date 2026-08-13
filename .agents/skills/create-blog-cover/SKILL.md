---
name: create-blog-cover
description: Create a blog cover in the established Figma thumbnail style, export it, and upload it directly to the Notion post as a native file cover. Use when creating or updating a blog post that needs a new thumbnail or cover image. Do not deploy the image or use an external website URL for the Notion cover.
---

# Create a blog cover

Keep the editable design in Figma. Upload the exported raster image to Notion first. The publishing workflow later imports that Notion-hosted file into `public/assets/blog/posts`.

Read these files before designing:

- [references/style-guide.md](references/style-guide.md)
- [references/approved-cover.md](references/approved-cover.md)

## Make the cover

1. Create the Notion page first. Get its page ID and final slug.
2. Load the `figma-use` skill before using Figma.
3. Open the approved Figma frame from the reference.
4. Duplicate the frame on the same Figma page.
5. Rename it to `<post title> (Blog Cover)`.
6. Keep the frame at `1280 × 720`.
7. Replace the title, subtitle, logos, arrow, and right-side artwork for the new topic.
8. Build the artwork with editable Figma text, shapes, and vectors. Use a raster screenshot only when the post needs to show a real interface.
9. Do not use a free-form generated raster image as the final cover unless the user asks for it.
10. Take a Figma screenshot. Check the title, crop, spacing, contrast, and topic before exporting.

Keep the title short enough for two lines. Use three lines only when two lines cannot work.

## Export

1. Export the finished Figma frame as PNG at its natural `1280 × 720` size.
2. Download the export immediately because Figma export links expire.
3. Open the PNG and compare it with the Figma frame. Check it at `1280 × 720` and about `320 × 180`.
4. Do not continue if the font, crop, colors, spacing, or readability changed.

Figma is the editable source. The PNG is an upload artifact, not a repository asset.

## Add it to Notion

1. Upload the exported PNG directly to the Notion post and set it as the page cover (the post thumbnail).
2. The saved Notion cover must be a native `file` cover. Never substitute an `external` URL, a local path, a Figma export URL, or a future production URL.
3. Prefer the connected Notion tool when it supports a native `file_upload` cover. Its generic attachment tool may accept binary files only from a public HTTPS URL, and its page update tool may expose only external covers; do not mistake those connector limitations for Notion API limitations.
4. When the connected tool cannot attach the local raster as a native cover, use the official Notion File Upload API with `NOTION_TOKEN` from `.env.local`:
   - `POST /v1/file_uploads` with `mode: "single_part"`, the filename, and image content type.
   - Send the raster bytes as multipart field `file` to the returned `upload_url`.
   - `PATCH /v1/pages/<page-id>` with `cover.type: "file_upload"` and the returned file-upload ID.
   - Use the current Notion API version required by the endpoint. Never print or log the token.
5. Use the browser/UI only as a last manual fallback when neither the connected tool nor the official API is available or authorized.
6. Fetch the page again and confirm `cover.type` is `file`. Resolve the returned cover URL and confirm it serves the expected image MIME type and bytes. A successful upload or update response alone is not proof.
7. When browser access is already authenticated and available, also visually confirm the cover on the actual Notion page; lack of browser authentication does not invalidate the API verification above.
8. Keep `Published` off unless the user asked to publish.

Do not create anything under `public/assets/blog/posts` in this skill. Do not commit, push, deploy, or claim that the cover is attached until it is visible in Notion.

## Finish

- If the user asked only to write or update the post, stop after saving the draft and cover.
- If the user asked to publish, continue with `$publish-blog-post`.
- Let `pnpm sync-blog-assets` import and optimize the Notion-hosted cover during publishing.
