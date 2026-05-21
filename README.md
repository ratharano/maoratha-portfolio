# Mao Ratha — Portfolio & Digital Garden

A minimalist personal portfolio and digital garden built with Astro. Static output, local Markdown content, plain CSS.

**For AI agents and maintainers:** see [AGENTS.md](./AGENTS.md) for full project documentation.

## Pages

- **Home** — Hero, positioning, project preview, newsletter
- **About** — Biography, experience, principles
- **Projects** — Case studies from `src/content/projects/`
- **Thoughts** — Writing from `src/content/thoughts/`

## Commands

| Command           | Action                              |
| :---------------- | :---------------------------------- |
| `npm install`     | Install dependencies                |
| `npm run dev`     | Start dev server at localhost:4321  |
| `npm run build`   | Build static site to `./dist/`      |
| `npm run preview` | Preview production build locally    |

## Content

- `src/content/projects/*.md` — project case studies
- `src/content/thoughts/*.md` — articles and notes
- `src/pages/` — page shells and static copy

## Deploy to GitHub Pages

1. Push to `main` on GitHub.
2. In the repo: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
3. The workflow `.github/workflows/deploy.yml` builds and publishes `dist`.

Live URL: `https://ratharano.github.io/maoratha-portfolio/`

`astro.config.mjs` sets `site` and `base` for this subpath. Update both if you use a custom domain or change the repo name.

## Tech

- [Astro](https://astro.build) (static site generation, content collections)
- Plain CSS (`src/styles/global.css`)
- Fonts: Switzer (body), Khand (headings) via [Fontshare](https://fontshare.com)
