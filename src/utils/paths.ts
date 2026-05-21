/** Ensure BASE_URL always ends with `/` for safe concatenation. */
function normalizeBase(base: string): string {
  if (!base || base === '/') return '/';
  return base.endsWith('/') ? base : `${base}/`;
}

/** Prefix internal paths with Astro base (GitHub Pages subpath). */
export function withBase(path: string): string {
  const base = normalizeBase(import.meta.env.BASE_URL);
  if (path === '/' || path === '') {
    return base;
  }
  const relative = path.startsWith('/') ? path.slice(1) : path;
  return `${base}${relative}`;
}
