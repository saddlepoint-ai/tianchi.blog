---
title: "How this site publishes"
description: "A short note about the Markdown-to-HTML workflow behind this blog."
pubDate: 2026-05-03
tags: ["workflow", "astro", "markdown"]
---

The publishing workflow for this site is deliberately boring.

1. Write a Markdown file in `src/content/blog`.
2. Add frontmatter with a title, description, date, and tags.
3. Preview locally with `npm run dev`.
4. Push to GitHub.
5. GitHub Actions builds the static site and publishes it.

That means the blog has no database, no server process, and no admin panel to maintain. The repository is the editor and the source of truth.
