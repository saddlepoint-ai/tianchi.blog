# tianchi.blog

Personal blog and portfolio site for `tianchi.blog`, built with Astro and Markdown.

## Local Development

```sh
npm install
npm run dev
```

Open `http://localhost:4321`.

## Writing Blog Posts

Create a Markdown file in `src/content/blog`:

```md
---
title: "Post title"
description: "Short summary for the post list and metadata."
pubDate: 2026-05-03
tags: ["notes", "projects"]
---

Write the post here.
```

Astro turns these Markdown files into static HTML at build time.

## Main Files

- `src/data/site.ts` stores profile, resume, projects, interests, and nav content.
- `src/content/blog/*.md` stores blog posts.
- `src/layouts/BaseLayout.astro` owns the shared layout and global styles.
- `src/pages` contains the site routes.

## Deployment

The site is configured for GitHub Pages through `.github/workflows/deploy.yml`.

1. Push the repository to GitHub.
2. In repository settings, enable GitHub Pages with GitHub Actions as the source.
3. Point `tianchi.blog` DNS to GitHub Pages.
4. GitHub Actions builds and deploys on every push to `main`.

For the apex domain, use these A records:

```text
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```

For `www.tianchi.blog`, add a CNAME to `<github-username>.github.io`.
