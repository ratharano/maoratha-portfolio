# AGENTS.md — Mao Ratha Portfolio

This file documents the project for AI-assisted developers and agents. Read it before making changes.

## Project purpose

Minimal personal portfolio for **Mao Ratha**. The site has two goals only:

1. Educate visitors on who Mao Ratha is and what they have done
2. Get visitors to join a weekly newsletter

This is **not** a startup app, CMS, blog platform, or complex frontend experiment.

## Owner & branding

| Item | Value |
|------|--------|
| Site owner | **Mao Ratha** |
| Display name | Mao Ratha (header logo, footer, page titles) |
| Production URL (placeholder) | `https://maoratha.com` — set in `astro.config.mjs` |

All visible name references use **Mao Ratha**. Do not reintroduce previous placeholder names.

## Tech stack

| Layer | Choice | Notes |
|-------|--------|--------|
| Framework | [Astro](https://astro.build) v6 | Static site generation only |
| Output | `output: 'static'` | Cloudflare Pages–compatible; no SSR |
| Styling | Plain CSS | `src/styles/global.css` — **no** Tailwind, CSS frameworks, or CSS-in-JS |
| JavaScript | Minimal | One small script in `NewsletterForm.astro` for placeholder submit UX |
| Dependencies | `astro` only | Avoid adding packages unless clearly necessary |

## Design system

### Aesthetic

- Clean, bold, minimal, editorial, typography-driven
- Modern editorial / brutalist-inspired minimalism
- Prioritize whitespace, hierarchy, alignment, contrast

### Colors (only these)

- White: `#ffffff`
- Black: `#000000`
- Accent: violent red `#e60000` — use **sparingly** (buttons, hovers, labels, newsletter CTA)

No gradients, glassmorphism, multiple accents, or heavy shadows.

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

Exactly **three pages** (file-based routing in `src/pages/`):

| Route | File | Purpose |
|-------|------|---------|
| `/` | `index.astro` | Hero, positioning, project preview, newsletter |
| `/about` | `about.astro` | Biography, experience, principles, newsletter |
| `/projects` | `projects.astro` | Full project list with role/outcome |

No blog, CMS, auth, database, or admin panel.

## Source layout

```
/
├── AGENTS.md                 ← This file
├── README.md                 ← Human quick-start
├── astro.config.mjs          ← site URL, static output
├── package.json
├── public/                   ← Static assets (favicon, future images)
└── src/
    ├── components/
    │   ├── Footer.astro
    │   ├── Header.astro
    │   └── NewsletterForm.astro
    ├── data/
    │   └── projects.ts       ← Shared project placeholders
    ├── layouts/
    │   └── BaseLayout.astro  ← HTML shell, SEO, fonts, global CSS
    ├── pages/
    │   ├── index.astro
    │   ├── about.astro
    │   └── projects.astro
    └── styles/
        └── global.css        ← All styles
```

## Key files for common tasks

### Change site-wide name or SEO site name

- `src/layouts/BaseLayout.astro` — `siteName` constant
- `src/components/Header.astro` — logo text
- `src/components/Footer.astro` — copyright line

### Change page titles / meta descriptions

Each page passes props to `BaseLayout`:

```astro
<BaseLayout
  title="Page Title"
  description="Meta description for SEO and Open Graph."
  ogTitle="Optional override for og:title"
>
```

Title format: `{title} — Mao Ratha` unless `title` is already `Mao Ratha` (home).

### Edit project listings

- **Data:** `src/data/projects.ts` — `projects` array and `featuredProjects` (first two items, used on home)
- **Home preview:** `index.astro` maps `featuredProjects`
- **Full list:** `projects.astro` maps `projects`

Each project has: `slug`, `title`, `description`, `role`, `outcome`.

### Edit page copy

- Home body copy: `src/pages/index.astro`
- About bio/experience/principles: `src/pages/about.astro`
- Projects intro: `src/pages/projects.astro`

Content is placeholder text and intended to be replaced later.

### Styling

- All global and component styles: `src/styles/global.css`
- Prefer existing CSS classes (`.hero`, `.newsletter`, `.project-card`, `.btn`, etc.)
- Do not introduce Tailwind or new CSS frameworks

### Newsletter form

- Component: `src/components/NewsletterForm.astro`
- Props: optional `id` (default `"newsletter"`) for multiple instances on one page
- **No backend** — submit is prevented client-side; success message is shown; note says integration is coming
- When integrating a provider later, replace form `action`/handler and remove or simplify the inline `<script>`

### Production URL / canonical / Open Graph

- `astro.config.mjs` → `site: 'https://maoratha.com'`
- `BaseLayout.astro` builds canonical and `og:url` from `Astro.site` and current path
- Update `site` to the real domain before deploy

## Commands

```sh
npm install      # Install dependencies
npm run dev      # Dev server → http://localhost:4321
npm run build    # Static build → ./dist/
npm run preview  # Preview production build
```

Node **22.12+** required (`package.json` `engines`).

## Deployment (Cloudflare Pages)

| Setting | Value |
|---------|--------|
| Build command | `npm run build` |
| Output directory | `dist` |
| Deploy command | **Empty** — never `npx wrangler deploy` for this static site |
| Node version | 22+ (`.nvmrc`, `NODE_VERSION=22`, Build System v3) |

## Accessibility & SEO

Already implemented; preserve when editing:

- Semantic HTML and heading hierarchy
- `aria-current="page"` on active nav links
- Form labels and `required` on email input
- Focus-visible styles in `global.css`
- Per-page `<title>`, `meta description`, Open Graph and Twitter meta in `BaseLayout`

## Agent guidelines

1. **Minimize scope** — Only change what the task requires.
2. **Match conventions** — Plain CSS, Astro components, existing class names.
3. **Keep the name consistent** — Use **Mao Ratha** everywhere the owner is named.
4. **Do not add** blog routes, CMS, auth, Tailwind, or heavy JS without explicit request.
5. **Content edits** — Prefer `src/data/projects.ts` for projects; page files for narrative copy.
6. **Rebuild** — Run `npm run build` after structural changes to verify the static build.

## Change log (agent-relevant)

| Date | Change |
|------|--------|
| Initial build | Astro minimal portfolio per spec (Pete McPherson placeholder) |
| Rename | All owner references updated to **Mao Ratha**; `site` URL → `maoratha.com`; this `AGENTS.md` added |
