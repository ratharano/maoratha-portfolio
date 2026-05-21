# Mao Ratha — Portfolio

A minimalist personal portfolio built with Astro. Static output, plain CSS, no frameworks.

**For AI agents and maintainers:** see [AGENTS.md](./AGENTS.md) for full project documentation.

## Pages

- **Home** — Hero, positioning, project preview, newsletter signup
- **About** — Biography, experience, principles
- **Projects** — Selected work showcase

## Commands

| Command           | Action                              |
| :---------------- | :---------------------------------- |
| `npm install`     | Install dependencies                |
| `npm run dev`     | Start dev server at localhost:4321  |
| `npm run build`   | Build static site to `./dist/`      |
| `npm run preview` | Preview production build locally    |

## Deploy to Cloudflare Pages

1. Connect this repository to Cloudflare Pages
2. Build command: `npm run build`
3. Build output directory: `dist`
4. Node version: 22 or later

Update `site` in `astro.config.mjs` with your production URL for canonical and Open Graph links.

## Content

Placeholder copy lives in:

- `src/pages/` — page content
- `src/data/projects.ts` — project listings

Replace placeholder text and add real images as needed.

## Tech

- [Astro](https://astro.build) (static site generation)
- Plain CSS (`src/styles/global.css`)
- Fonts: Switzer (body), Khand (headings) via [Fontshare](https://fontshare.com)
