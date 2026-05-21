# AGENTS.md — Mao Ratha Portfolio & Digital Garden

This file documents the project for AI-assisted developers and agents. Read it before making changes.

## Project purpose

Minimal personal portfolio and digital garden for **Mao Ratha**. The site has three goals:

1. Educate visitors on Mao Ratha's background as a Senior UX/UI Designer and Leader.
2. Provide a local-first publishing space for written thoughts.
3. Get visitors to join a weekly newsletter.

This is a static content site. It is not a startup app, CMS, or complex frontend experiment.

## Owner & branding

| Item | Value |
|------|--------|
| Site owner | **Mao Ratha** |
| Display name | Mao Ratha (header logo, footer, page titles) |
| Production URL | `https://maoratha.github.io/maoratha-portfolio` (or custom domain) |

All visible name references use **Mao Ratha**. Do not reintroduce previous placeholder names.

## Tech stack

| Layer | Choice | Notes |
|-------|--------|--------|
| Framework | Astro v6 | Static site generation only |
| Output | `output: 'static'` | GitHub Pages–compatible; zero SSR |
| Content | Local Markdown | Strict local-first data architecture. Content lives in `src/content/`. No databases |
| Styling | Plain CSS | `src/styles/global.css`. FOSS tools only. No Tailwind or CSS-in-JS |
| JavaScript | Minimal | Client-side only when absolutely required |

## Design system

### Aesthetic

- Clean, bold, minimal, editorial, typography-driven
- Prioritize whitespace, hierarchy, alignment, contrast

### Colors

- White: `#ffffff`
- Black: `#000000`
- Accent: Red `#e60000` — use sparingly
- No gradients, glassmorphism, or heavy shadows

### Typography

Loaded in `BaseLayout.astro`:

```html
<link href="https://api.fontshare.com/v2/css?f[]=switzer@400&f[]=khand@700&display=swap" rel="stylesheet">
```

| Font | Usage |
|------|--------|
| Switzer | Body text |
| Khand (700) | Headings, labels, navigation, emphasis |

CSS variables live in `src/styles/global.css` under `:root`.

### What to avoid

- Unnecessary animations and hover gimmicks
- Dashboard-style UI, clutter, overengineering
- Extra dependencies or React unless absolutely required

## Site structure

File-based routing in `src/pages/` and Markdown content in `src/content/`:

| Route | Source | Purpose |
|-------|--------|---------|
| `/` | `src/pages/index.astro` | Hero, positioning, recent projects, newsletter |
| `/about` | `src/pages/about.astro` | Biography, principles, newsletter |
| `/projects` | `src/pages/projects/index.astro` | List of design and development projects |
| `/projects/[slug]` | `src/content/projects/*.md` | Individual project case studies |
| `/thoughts` | `src/pages/thoughts/index.astro` | List of written thoughts and articles |
| `/thoughts/[slug]` | `src/content/thoughts/*.md` | Individual writing entries |

## Source layout

```text
/
├── AGENTS.md
├── README.md
├── astro.config.mjs
├── package.json
├── public/
└── src/
    ├── components/
    │   ├── Footer.astro
    │   ├── Header.astro
    │   └── NewsletterForm.astro
    ├── content/
    │   ├── projects/         ← Markdown files for projects
    │   └── thoughts/         ← Markdown files for writing
    ├── content.config.ts     ← Zod schemas + glob loaders (Astro v6)
    ├── layouts/
    │   ├── BaseLayout.astro
    │   ├── ProjectLayout.astro
    │   └── ThoughtLayout.astro
    ├── pages/
    │   ├── index.astro
    │   ├── about.astro
    │   ├── projects/
    │   └── thoughts/
    └── styles/
        └── global.css
```

## Data architecture (content collections)

All dynamic content must use Astro Content Collections. Do not use TypeScript arrays or JSON files for main content.

1. **Projects (`src/content/projects/`)**: Requires Markdown frontmatter `title`, `description`, `role`, `outcome`, `date`.
2. **Thoughts (`src/content/thoughts/`)**: Requires Markdown frontmatter `title`, `date`, `tags`.

### Edit content

- **Projects:** add or edit `src/content/projects/*.md`
- **Thoughts:** add or edit `src/content/thoughts/*.md`
- **Page copy:** `src/pages/*.astro` for narrative sections not in Markdown

### Newsletter form

- Component: `src/components/NewsletterForm.astro`
- **No backend** — submit is prevented client-side; success message is shown

### Production URL / canonical / Open Graph

- `astro.config.mjs` → `site` and `base` for GitHub Pages (`/maoratha-portfolio`)
- `BaseLayout.astro` builds canonical and `og:url` from `Astro.site` and current path

## Commands

```sh
npm install      # Install dependencies
npm run dev      # Dev server → http://localhost:4321
npm run build    # Static build → ./dist/
npm run preview  # Preview production build (use base path)
```

Node **22.12+** required (`package.json` `engines`).

## Deployment (GitHub Pages)

| Setting | Value |
|---------|--------|
| Host | GitHub Pages |
| Build command | `npm run build` |
| Output directory | `dist` |
| Automation | GitHub Actions (`.github/workflows/deploy.yml`) |

Enable **Settings → Pages → Source: GitHub Actions** on the repository.

## Accessibility & SEO

Preserve when editing:

- Semantic HTML and heading hierarchy
- `aria-current="page"` on active nav links
- Form labels and `required` on email input
- Focus-visible styles in `global.css`
- Per-page `<title>`, `meta description`, Open Graph and Twitter meta in `BaseLayout`

## Agent guidelines

1. **Minimize scope:** Apply the 80/20 rule. Only change what the task requires.
2. **Local-first:** Never introduce external CMS APIs or databases.
3. **Keep name consistent:** Use **Mao Ratha** everywhere.
4. **Strictly static:** Do not add auth, dynamic routing, or heavy JS.
5. **Rebuild:** Run `npm run build` after structural changes to verify static output.
