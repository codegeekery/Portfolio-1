// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://codegeekery.github.io',
  base: '/Portfolio-1',
  vite: {
    plugins: [tailwindcss()]
  }
});