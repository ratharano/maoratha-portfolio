// @ts-check
import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  site: 'https://ratharano.github.io',

  // Base path configured via environment variable
  // Set ASTRO_BASE=/maoratha-portfolio/ for GitHub Pages
  base: process.env.ASTRO_BASE || '/',

  output: 'static',
  adapter: cloudflare({
    mode: 'static',
    imageProcessing: { enabled: false },
    serverless: { enabled: false },
  }),
});