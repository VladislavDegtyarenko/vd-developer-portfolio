---
name: write-blog-post
description: Write, create, or update a post in this repository's Notion Blog Database. Use for requests such as "write a blog post," "add this post to Notion," or "update this article." Do not build, commit, push, or deploy unless the user also asks to publish.
---

# Write a blog post

Read [references/writing-style.md](references/writing-style.md) before writing.

## Steps

1. Open the Notion **Blog Database**:
   `https://app.notion.com/p/6f7dd5c93d1e46768174f246ed60dead`
2. Fetch the database and its data source. Check the current fields and tag options.
3. Read `notion://docs/enhanced-markdown-spec` before creating or replacing page content.
4. Find the post before creating a new one. Do not create a duplicate.
5. Write the post using the style reference.
6. Set these fields:
   - `Title`
   - `Description`
   - `Slug`
   - `Date`
   - `Tags`
   - `Published`
7. For a new post, keep `Published` off.
8. For an update, keep the current slug and published state unless the user asks to change them.
9. Add the body as normal top-level Notion blocks. Use the right language for code blocks.
10. If the user asks for a new cover, create or choose the image. Keep the local file for publishing. Do not assume the Notion tool can upload it as a file cover.
11. Fetch the saved page again. Check the fields, body, links, code blocks, and cover.
12. Give the user the Notion page link and say whether `Published` is on or off.

Stop here unless the user asked to publish.
