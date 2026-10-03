import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Bricolage_Grotesque } from "next/font/google";
import { asset } from "@/lib/asset";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const TITLE = "DiskGenie — See where every byte lives";
const DESCRIPTION =
  "A premium disk-space analyzer for Windows and Mac. Rust-powered scans, nine ways to see your drive, a Recycle-Bin-only cleanup queue, and five hand-crafted themes — including Cherry Blossom.";
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://diskgenie.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE,
    template: "%s · DiskGenie",
  },
  description: DESCRIPTION,
  keywords: [
    "disk space analyzer",
    "DiskGenie",
    "storage cleanup",
    "treemap",
    "duplicate finder",
    "Windows disk usage",
    "Mac disk usage",
    "Rust",
  ],
  authors: [{ name: "DiskGenie" }],
  icons: {
    icon: [
      { url: asset("/favicon.ico"), sizes: "any" },
      { url: asset("/brand/favicon-96x96.png"), sizes: "96x96", type: "image/png" },
    ],
    apple: [{ url: asset("/apple-touch-icon.png"), sizes: "180x180", type: "image/png" }],
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: SITE_URL,
    siteName: "DiskGenie",
    type: "website",
    images: [{ url: asset("/brand/og-card.png"), width: 1200, height: 630, alt: "DiskGenie" }],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: [asset("/brand/og-card.png")],
  },
};

export const viewport: Viewport = {
  themeColor: "#fbf1ee",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${geistSans.variable} ${geistMono.variable} ${bricolage.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
