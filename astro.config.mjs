import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import fs from 'fs';

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  site: 'https://ginogc01.github.io',
  base: '/Dr.-Mario-Shop',
  build: {
    assets: 'assets',
  }
});
