# Blog publishing workflow

Use this workflow only when the user asks to publish. For writing-only requests, stop after drafting or updating Notion. Do not claim success until the production URL and its cover both work.

## Repository facts

- The source is the Notion **Blog Database** at `https://app.notion.com/p/6f7dd5c93d1e46768174f246ed60dead` (data source `collection://a7d8d3eb-df8c-40e3-a3b2-5f916b394ddf`). Fetch it before writing in case its schema changes.
- Website metadata maps exactly as follows: `Title` → title, `Description` → description/meta description, `Slug` → route, `Date` → displayed date/sort order, and `Tags` → tags/metadata keywords. `Published` controls whether `getPosts` returns the entry.
- A non-empty `Title` and `Slug` are required by the current code. Set `Description`, `Date`, and appropriate existing `Tags` for a complete post even though the renderer tolerates some missing values.
- Local access needs `NOTION_TOKEN`, `NOTION_API_ENDPOINT`, and `NOTION_DATABASE_ID`. They are present by name in `.env.local`; never print or commit their values. The old Vercel Blob helpers are not active in the current blog image path, so `BLOB_READ_WRITE_TOKEN` is not part of this workflow.
- `getPostContent` fetches one page of at most 100 direct child blocks. Do not assume images nested inside unsupported structures or blocks after the first 100 will be synchronized or rendered; verify the actual page.

## 1. Preflight

1. Run `git status --short --branch` and `git branch --show-current`. Record all pre-existing changes and do not stage or overwrite unrelated work.
2. Confirm the intended deployment branch. In this repository, a push to `main` creates a production deployment; a non-production branch creates a preview. Do not call a preview “published”.
3. Confirm the three Notion environment variable names exist without showing their values:

   ```bash
   cut -d= -f1 .env.local | sort -u
   ```

4. Fetch the Blog Database and the target page through the connected Notion workspace. Re-check property names, tag options, current content, current cover type, and page ID.
5. For an update, keep the current `Slug` unless the user explicitly requests a change. A slug change changes the production URL and needs redirect/SEO consideration outside this workflow.

## 2. Create or update the Notion post

1. Draft with `Published` unchecked. Write the body using `writing-style.md`.
2. Fill `Title`, a one-sentence `Description`, lowercase hyphenated `Slug`, `Date`, and existing `Tags`. Add a tag option only when genuinely necessary.
3. Add the body as top-level Notion blocks where practical. Use correctly labelled code blocks, normal headings, lists, links, callouts, and image blocks supported by the website renderer.
4. Fetch the saved page again and verify the properties and body. Resolve malformed formatting or unsupported blocks before publishing.

## 3. Set the cover and body images

`resolveNotionImageLocally` has two distinct behaviors; identify which one applies instead of assuming synchronization occurred.

### Notion `file` image (automatic local persistence)

- Prefer a Notion-uploaded `file` cover when the available Notion interface can set it. The same rule applies to uploaded image blocks in the body.
- The signed Notion URL path determines the local path:

  ```text
  public/assets/blog/posts/<first-URL-path-segment>/<next-segment>/<original-filename>
  ```

- Missing files are downloaded, resized to 640 px wide for covers (body images keep their dimensions), converted by Sharp to WebP quality 80, and written using the original filename and extension. The bytes can therefore be WebP even when the filename ends in `.jpg` or `.png`.
- Existing paths are reused without downloading. If a cover was replaced but resolves to the same path, stop and confirm whether the tracked file is stale; do not assume the resolver overwrote it.

### Notion `external` image (no automatic persistence)

- The resolver returns the external URL unchanged. It does **not** copy it into `public`.
- Do not silently expect an arbitrary external cover to appear under `public/assets/blog/posts`.
- When the connector can only set an external cover, use the repository’s established local-cover pattern: save the final image at `public/assets/blog/posts/<hyphenated-page-id>/<slug>.webp`, then set the Notion cover to `https://vd-developer.online/assets/blog/posts/<hyphenated-page-id>/<slug>.webp`. The file must be staged and deployed with the post. The latest published Git-fork article uses this pattern.
- Before production exists, verify this external-cover path from the local file and the rendered `src`; after deployment, verify the absolute production URL. If using some other external host is intentional, document that exception and verify its durability and response, but do not describe it as synchronized.

If the requested cover is local or generated, optimize it to WebP before adding it to the public path. Do not leave a temporary duplicate elsewhere in `public`.

## 4. Expose the post and synchronize assets

1. Once content and metadata are ready, check `Published` in Notion. Production remains static until a successful deployment, but the local build query can now discover the post.
2. Run the only current full synchronization trigger:

   ```bash
   pnpm build
   ```

   The build statically enumerates all published slugs. `getPosts` resolves every cover; rendering each post calls `getPostContent`, which resolves fetched top-level image blocks.
3. Inspect the asset tree and working tree:

   ```bash
   find public/assets/blog/posts -type f -print | sort
   git status --short -- public/assets/blog/posts
   ```

4. Confirm every expected new `file` image exists at its URL-derived path. For a new or changed file, inspect its actual type:

   ```bash
   file public/assets/blog/posts/<expected-path>
   ```

5. A successful build is insufficient if the expected asset is absent. `saveNotionImageToPublicFolder` logs download/MIME failures and returns `null`, and higher-level Notion failures can result in missing blog output. Stop and investigate expired signed URLs, cover type, unsupported/nested blocks, the 100-block limit, environment configuration, and fetch output.

## 5. Validate locally

1. Run lint separately so its result is explicit:

   ```bash
   pnpm lint
   ```

   If `pnpm` itself fails before ESLint starts (for example, package-manager signature or registry verification), diagnose that tooling failure separately. With the existing install, `./node_modules/.bin/eslint .` is a valid direct fallback. Do not use the fallback to bypass actual ESLint errors.

2. Serve the completed build in another terminal:

   ```bash
   pnpm start
   ```

3. Open `http://localhost:3000/blog/<slug>`. Verify the post is listed at `/blog`, the route loads, metadata/content/date/tags are correct, code blocks render, and all expected body images render.
4. For a locally resolved cover, open `http://localhost:3000/assets/blog/posts/<expected-path>` and confirm the post card and article heading render it. For the established external-production cover pattern, confirm the local file exists and the page emits the intended production `src`; the final visual check happens after deployment.
5. Stop on a 404, missing/old cover, empty post, console error, or broken layout. Do not push a known failure.

## 6. Review and commit only the blog publication

1. Run `git status --short` and `git diff --stat`. Compare with the preflight snapshot.
2. Include every new/changed blog asset under `public/assets/blog/posts`. These generated/persisted files are intentionally tracked; git history shows the original batch and later post images committed there.
3. Stage explicit paths only. Do not use `git add .` or include unrelated working-tree changes. A typical cover-only publication is:

   ```bash
   git add -- public/assets/blog/posts/<exact-post-directory>
   git diff --cached --stat
   git status --short
   ```

4. Confirm the staged diff contains the intended assets and nothing else. Then commit and push the already-confirmed branch:

   ```bash
   git commit -m "Publish <article topic>"
   git push origin <branch>
   ```

5. If lint or build failed, an expected asset is missing, or unrelated changes cannot be isolated, do not commit or push.

## 7. Verify Vercel and production

1. Record the pushed commit with `git rev-parse HEAD`.
2. In the connected Vercel project `vd-developer-portfolio`, list deployments and select the one whose `meta.githubCommitSha` equals that full commit SHA and whose target is `production`. Do not verify an older READY deployment by mistake.
3. Wait until that deployment reaches `READY`. If it reaches `ERROR` or is absent, inspect build logs and stop; do not claim publication succeeded. The CLI fallback is:

   ```bash
   vercel list vd-developer-portfolio --meta githubCommitSha=<full-commit-sha> --format=json
   vercel inspect <deployment-url> --wait --timeout 5m --format=json
   ```

4. Open `https://vd-developer.online/blog/<slug>` in a browser. Verify the expected title and body, inspect the cover visually on both the blog list and article page, and confirm its rendered URL returns an image rather than HTML/404.
5. Verify the asset URL directly when it is local to the site:

   ```bash
   curl -fsSI "https://vd-developer.online/assets/blog/posts/<expected-path>"
   curl -fsS "https://vd-developer.online/blog/<slug>" >/dev/null
   ```

6. Report the production URL, deployment URL/ID, `READY` state, commit SHA, and cover URL. Only now is publishing complete.

## Failure rules

- If the database schema differs from this document, stop and update the mapping before writing.
- If the Notion cover is `external`, do not claim it was synchronized. Either use the tracked local-cover pattern or explicitly verify the external host.
- If a Notion `file` URL has expired or returns a non-image MIME type, refresh/refetch the Notion page and rerun the build; never commit a missing or error response as an image.
- If the expected public file does not appear, stop even if `pnpm build` exits successfully.
- If local validation, lint, or build fails, do not push.
- Preserve unrelated local changes and stage exact blog paths only.
- If the pushed branch creates only a preview, report it as a preview and continue to production only with the intended branch/merge authority.
- Never claim success until the matching production deployment is `READY` and both the production post and cover have been checked.
