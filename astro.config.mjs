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
      // The cast is needed because `changefreq` expects the `EnumChangefreq` type
      // from the underlying `sitemap` package, not the raw literal — `as const`
      // doesn't narrow to that enum under @ts-check.
      serialize(item) {
        const url = item.url.replace(SITE, '').replace(/\/$/, '') || '/';
        /**
         * @param {number} priority
         * @param {string} changefreq
         * @returns {import('@astrojs/sitemap').SitemapItem}
         */
        const tag = (priority, changefreq) =>
          /** @type {import('@astrojs/sitemap').SitemapItem} */ (
            { ...item, changefreq, priority }
          );
        if (url === '/' || url === '/zh') return tag(1.0, 'monthly');
        if (url === '/blog' || url === '/zh/blog') return tag(0.9, 'weekly');
        if (url.startsWith('/blog/') || url.startsWith('/zh/blog/')) return tag(0.8, 'monthly');
        return tag(0.5, 'monthly');
      },
    }),
  ],
});
