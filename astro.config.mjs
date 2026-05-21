// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://ratharano.github.io',
  // Use base path only for GitHub Pages deployment
  // Cloudflare Pages and other platforms deploy to root
  base: process.env.CF_PAGES ? '/' : '/maoratha-portfolio/',
  output: 'static',
});
