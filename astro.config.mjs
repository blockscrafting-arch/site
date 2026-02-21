import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import rehypeCaseHeadingIcons from "./src/plugins/rehype-case-heading-icons.mjs";

/** @type {import('astro').AstroConfig} */
export default defineConfig({
  site: process.env.SITE || "https://vladexecute.ru",
  /** Отключаем prefetchAll: известный баг Astro — prefetch идёт по http и даёт Mixed Content на HTTPS. */
  prefetch: { prefetchAll: false },
  markdown: {
    rehypePlugins: [rehypeCaseHeadingIcons],
  },
  integrations: [tailwind(), react()],
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
