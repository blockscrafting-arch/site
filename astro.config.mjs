import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import rehypeCaseHeadingIcons from "./src/plugins/rehype-case-heading-icons.mjs";

/** @type {import('astro').AstroConfig} */
export default defineConfig({
  site: process.env.SITE || "https://vladexecute.ru",
  redirects: {
    '/services/autoposting': '/services/content-factory',
  },
  /** Отключаем prefetchAll: известный баг Astro — prefetch идёт по http и даёт Mixed Content на HTTPS. */
  prefetch: { prefetchAll: false },
  markdown: {
    rehypePlugins: [rehypeCaseHeadingIcons],
    shikiConfig: {
      themes: {
        light: 'github-light',
        dark: 'github-dark',
      },
      /** Отключает inline color/bg — управляем темой через CSS-переменные --shiki-light/--shiki-dark */
      defaultColor: false,
      wrap: false,
    },
  },
  integrations: [
    tailwind(),
    react(),
    sitemap({
      filter: (page) =>
        !page.includes("/404") && !page.includes("/contacts"),
      serialize: (item) => {
        const url = item.url;
        if (url === (process.env.SITE || "https://vladexecute.ru") + "/") {
          item.priority = 1.0;
          item.changefreq = "weekly";
        } else if (url.includes("/services")) {
          item.priority = 0.9;
          item.changefreq = "monthly";
        } else if (url.includes("/cases") || url.includes("/guides")) {
          item.priority = 0.8;
          item.changefreq = "monthly";
        } else {
          item.priority = 0.7;
          item.changefreq = "monthly";
        }
        return item;
      },
    }),
  ],
  output: "static",
  vite: {
    build: {
      sourcemap: false,
    },
  },
  security: {
    checkOrigin: true,
  },
});
