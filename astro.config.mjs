import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';

/** @type {import('astro').AstroConfig} */
export default defineConfig({
  site: process.env.SITE || 'https://vladexecute.ru',
  integrations: [
    tailwind(),
    react(),
  ],
  output: 'static',
  vite: {
    build: {
      sourcemap: false,
    },
  },
  security: {
    checkOrigin: true,
  },
});
