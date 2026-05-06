// @ts-check
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

const SITE = 'https://tianchi.blog';

// https://astro.build/config
export default defineConfig({
  site: SITE,
  trailingSlash: 'always',
  build: {
    format: 'directory',
  },
  integrations: [
    sitemap({
      // i18n alternates so search engines understand en ↔ zh pairing.
      i18n: {
        defaultLocale: 'en',
        locales: {
          en: 'en-US',
          zh: 'zh-CN',
        },
      },
      // Skip 404; everything else gets indexed.
      filter: (page) => !page.includes('/404'),
      // Per-page priorities so the resume + blog listing rank above individual posts.
      serialize(item) {
        const url = item.url.replace(SITE, '').replace(/\/$/, '') || '/';
        if (url === '/' || url === '/zh') {
          return { ...item, changefreq: 'monthly', priority: 1.0 };
        }
        if (url === '/blog' || url === '/zh/blog') {
          return { ...item, changefreq: 'weekly', priority: 0.9 };
        }
        if (url.startsWith('/blog/') || url.startsWith('/zh/blog/')) {
          return { ...item, changefreq: 'monthly', priority: 0.8 };
        }
        return { ...item, changefreq: 'monthly', priority: 0.5 };
      },
    }),
  ],
});
