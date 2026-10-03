/*
 * Asset URL helper — with `images.unoptimized` (the static GitHub Pages
 * export has no image loader), `next/image` renders `src` verbatim, so
 * the Pages base path must be prefixed explicitly. `NEXT_PUBLIC_BASE_PATH`
 * is baked in at build time (empty for local dev and the custom domain).
 */
export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function asset(path: string): string {
  return `${BASE_PATH}${path}`;
}
