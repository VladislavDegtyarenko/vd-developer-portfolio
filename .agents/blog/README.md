# Blog

The `blog` agent handles all blog work.

## Flow

- **Write a post** — use `write-blog-post`.
- **Update a post** — use `write-blog-post`. Keep the current slug.
- **Publish a post** — use `publish-blog-post`.
- **Write and publish a post** — use `write-blog-post`, then `publish-blog-post`.

Do not publish unless the user asks.

Publishing is complete only when the production post and image both work.
