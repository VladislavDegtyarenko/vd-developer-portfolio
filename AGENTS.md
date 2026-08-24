# Repository instructions

For blog writing, updates, or publishing, spawn the `blog` agent defined in `.codex/agents/blog.toml`. The blog agent owns the task.

For portfolio projects, first verify that the `img` filename in the project data exists in `public/assets/projects`. If it does not, use the `project-thumbnail` skill to create it. Always use `project-thumbnail` for an explicit request to create a project cover.
