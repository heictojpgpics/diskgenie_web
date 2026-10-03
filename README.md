# DiskGenie — landing site

The marketing site for [DiskGenie](https://github.com/heictojpgpics/diskgenie),
the Windows &amp; Mac disk-space analyzer. Live at
**https://heictojpgpics.github.io/diskgenie_web/** (and, once DNS is
attached, at **diskgenie.app**).

## Stack

Next.js 16 (App Router, static export) · TypeScript · Tailwind CSS 4 ·
shadcn/ui components · motion (framer-motion) · tsparticles (the Cover
sparkles). No backend — it is a pure static site.

## Design language

The site wears the product's own **Blossom** palette (the cherry-blossom
theme from DiskGenie's in-app theme picker): blush-cream surfaces
`#fbf1ee`, rosewood text `#3b2428`, rose ink `#d8506b`, and the exact
`--ink-grad` gradient the app's brand mark carries. All screenshots and
demo videos are real captures of the application running against its
mock backend (the same harness the CI screenshot tours use).

## Develop

```bash
bun install
bun run dev      # http://localhost:3000
bun run lint
```

## Build & deploy

Deploys automatically on push to `main` via
`.github/workflows/deploy.yml` (GitHub Actions → GitHub Pages):

```bash
STATIC_EXPORT=1 BASE_PATH=/diskgenie_web bun run build   # → ./out
```

## Switching to the custom domain (diskgenie.app)

When the domain's DNS points at GitHub Pages:

1. In the repo settings → Pages → Custom domain: `diskgenie.app`
   (this writes the `CNAME` file — or commit a `CNAME` file containing
   `diskgenie.app` to the `out`-equivalent root, i.e. add it to
   `public/`).
2. Remove `BASE_PATH: /diskgenie_web` from the workflow (set it to
   empty) and `NEXT_PUBLIC_SITE_URL: https://diskgenie.app`.
3. Redeploy. `next.config.ts` reads both from env — no code changes.

## Asset provenance

- `public/shots/*` — WebP captures of the app (Explore's nine modes,
  Duplicates / Applications / Monitor / Snapshots, the cleanup queue,
  the Pro dialog's theme picker, and one shot per theme).
- `public/videos/*` — real action captures (scan + drill, the
  stage-to-queue flow, the theme walk), recorded from the app's mock
  backend, trimmed and encoded as muted H.264 loops.
- `public/brand/*` — the product's favicon set and gradient brand mark.

© 2026 DiskGenie
