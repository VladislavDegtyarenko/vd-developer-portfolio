# Blog writing style

This guide captures the stable common denominator across the published Notion articles. Post length varies from a quick tip or video companion to a complete tutorial; match the depth to the topic.

## Voice and tone

- Write as a practical developer teaching another developer. Use plain, friendly English and explain the task directly.
- Use first person for choices or demonstrations (“I’ll use…”, “I’ve created…”) and inclusive “we” for the steps. Address the reader as “you” when giving an action or explaining its result.
- Be confident and concrete without sounding formal. Prefer “Create a file”, “Run this command”, and “This happens because…” over abstract advice.
- Light enthusiasm is fine, especially at the opening or close, but keep the technical sections focused. Do not add emojis, jokes, marketing language, or rhetorical questions by default; those appear in some posts but are not consistent.

## Article structure

1. Open with one or two short paragraphs that name the problem or outcome, the stack, and what the reader will build or fix. For a quick tip, state the pain point immediately. Add a video/source/demo link near the top only when one exists.
2. Give just enough context to explain why the problem occurs or why the technique is useful.
3. Move through the implementation in chronological sections. Use descriptive, title-case headings such as “Set Up the Project”, “Add the Original Repository as Upstream”, or “The Better Fix with Formatting”.
4. Introduce each code block with the action or reason, show the smallest complete useful example, then explain the important lines and observable result.
5. End with a short conclusion or summary that restates the working outcome and key idea. Add useful resources when they materially help.

## Sentences, paragraphs, and explanations

- Default to medium-length sentences and paragraphs of one to three sentences. Put a new step, cause, or result in a new paragraph.
- Use familiar vocabulary. Define a technical term on first use, often with one concrete example, then use its standard spelling and capitalization consistently.
- Explain cause and effect: show the symptom, why it happens, the change, and what the change fixes. Mention practical tradeoffs, accessibility, security, or performance when they affect the implementation.
- Prefer realistic examples—modal dialogs, repository remotes, theme preferences, asset paths, or project files—over elaborate analogies.
- State conclusions directly. Transitional phrases such as “First”, “Then”, “Now”, “However”, and “Finally” are common and useful; do not pad every paragraph with them.

## Examples and formatting

- Wrap commands, filenames, identifiers, props, hooks, and short values in inline code.
- Use fenced code blocks with the correct language. Include filenames as a short comment when context matters. Keep naming descriptive and code internally consistent.
- For build-along tutorials, evolve the example in stages and include a complete version after the important pieces have been introduced.
- Use numbered lists for ordered workflows and bullets for options, features, checks, or summaries. Use callouts sparingly for a genuine tip or warning.
- Screenshots, demos, source links, and videos support the explanation; they do not replace it unless the post is explicitly a video companion.

## Metadata conventions

- Titles are descriptive and search-oriented. Common patterns are “How to…”, an imperative outcome, “X vs Y”, or a specific problem plus the affected tools. Name the main technology in the title when useful.
- Descriptions are normally one sentence, roughly 15–30 words, beginning with the reader benefit or “Learn…”. Name the outcome and relevant technology; do not tease or overclaim.
- Slugs are lowercase, hyphen-separated, concise, and keyword-bearing. Preserve an existing slug unless the user asks to change it.
- Reuse the database’s existing tag spelling and capitalization. Add a new tag only when no existing option accurately applies.

## Avoid

- Vague motivational filler, exaggerated claims, repeated introductions, and long conceptual detours before the first useful step.
- Invented personal anecdotes, preferences, links, demos, or performance claims.
- Unexplained code dumps, pseudo-code presented as working code, or examples that silently omit required setup.
- Copying historical spelling or grammar mistakes. Preserve the voice, not errors.
- Forcing the long-tutorial structure onto a quick tip or a video/link-only post.

## Writing checklist

- The opening identifies the concrete problem or outcome and stack.
- The sequence is runnable from top to bottom and explains why important steps work.
- Code language, filenames, identifiers, and terminology are consistent.
- Paragraphs stay short; lists and headings reflect real structure.
- The conclusion is brief and specific.
- Title, description, slug, date, tags, links, and claims are accurate.
