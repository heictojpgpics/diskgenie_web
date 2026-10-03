import type { NextConfig } from "next";

/*
 * DiskGenie landing site — Next.js 16.
 *
 * The site deploys as a STATIC export to GitHub Pages:
 *
 *   STATIC_EXPORT=1 BASE_PATH=/diskgenie_web bun run build
 *
 *   STATIC_EXPORT   switches `output` to "export" (emits ./out)
 *   BASE_PATH       the Pages project sub-path (empty for the custom
 *                   domain — see README for the diskgenie.app cutover)
 *
 * Local dev needs neither: `bun run dev` serves from / as usual.
 */
const isStatic = process.env.STATIC_EXPORT === "1";
const basePath = process.env.BASE_PATH ?? "";

const nextConfig: NextConfig = {
  ...(isStatic
    ? { output: "export" as const, trailingSlash: true }
    : { output: "standalone" as const }),
  basePath,
  images: {
    // the static export has no image optimizer; the shipped WebP/PNG
    // assets are already size-tuned by the asset pipeline
    unoptimized: true,
  },
  typescript: {
    ignoreBuildErrors: false,
  },
  reactStrictMode: true,
};

export default nextConfig;
