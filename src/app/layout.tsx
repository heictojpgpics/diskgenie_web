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

const TITLE = "DiskGenie · See what's eating your disk";
const DESCRIPTION =
  "A disk space analyzer for Windows and Mac. Scans a full drive in seconds, shows it nine ways, and cleans it through a queue you control. $10 a year or $25 once.";
// metadataBase is the ORIGIN (no base path): relative metadata URLs
// resolve against it, and asset() already carries the Pages base path.
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://diskgenie.app";
const SITE_PAGE = `${SITE_URL}${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}`;

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
    url: SITE_PAGE,
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
