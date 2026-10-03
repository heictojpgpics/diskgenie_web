"use client";
import { BrandMark, Wordmark } from "./brand";
import { DOWNLOAD_URL } from "@/lib/site";

const PRODUCT_LINKS = [
  { label: "Views", href: "#views" },
  { label: "Cleanup", href: "#cleanup" },
  { label: "Themes", href: "#themes" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden">
      {/* the closing line */}
      <div className="rosewood-band relative">
        <div className="relative mx-auto max-w-6xl px-5 py-12 text-center sm:px-6 sm:py-14">
          <BrandMark size={48} className="mx-auto" />
          <h2 className="mx-auto mt-6 max-w-xl font-display text-[clamp(1.8rem,4vw,2.6rem)] font-bold leading-[1.08] tracking-[-0.015em] text-white">
            Your next 20 GB is in there somewhere.
          </h2>
          <p className="mx-auto mt-3.5 max-w-md text-[15.5px] leading-relaxed text-[#e5c4cc]">
            Download DiskGenie, run your first scan, and the map will
            show you the rest.
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={DOWNLOAD_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="ink-grad ink-glow-strong inline-flex h-12 w-full items-center justify-center gap-2.5 rounded-full px-8 text-[15px] font-semibold text-white transition-transform duration-200 hover:scale-[1.02] active:scale-[0.98] sm:w-auto"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M8 1.5v9m0 0L4.8 7.3M8 10.5l3.2-3.2M2.5 13.5h11" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Download DiskGenie
            </a>
            <a
              href={DOWNLOAD_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 w-full items-center justify-center rounded-full border border-white/20 px-8 text-[15px] font-semibold text-white/90 transition-colors hover:border-white/40 hover:bg-white/5 sm:w-auto"
            >
              Get it for Mac too
            </a>
          </div>
        </div>
      </div>

      {/* the footer bar — centered, symmetric, no dead columns */}
      <div className="border-t border-[#e5d0ca] bg-[#fbf1ee]">
        <div className="mx-auto max-w-6xl px-5 py-10 sm:px-6">
          <div className="flex flex-col items-center text-center">
            <div className="flex items-center gap-2.5">
              <BrandMark size={26} />
              <Wordmark className="text-[15.5px]" />
            </div>
            <p className="mt-3.5 max-w-sm text-[13.5px] leading-relaxed text-[#8a6568]">
              The disk space analyzer for Windows and Mac. Scans in
              seconds, cleans through a queue, and deletes nothing
              without your say so.
            </p>
            <nav
              className="mt-6 flex flex-wrap items-center justify-center gap-x-2 gap-y-2.5"
              aria-label="Footer"
            >
              {PRODUCT_LINKS.map((l, i) => (
                <span key={l.href} className="flex items-center gap-2">
                  {i > 0 && <span className="h-1 w-1 rounded-full bg-[#e5d0ca]" aria-hidden="true" />}
                  <a
                    href={l.href}
                    className="text-[13.5px] font-medium text-[#8a6568] transition-colors hover:text-[#3b2428]"
                  >
                    {l.label}
                  </a>
                </span>
              ))}
              <span className="flex items-center gap-2">
                <span className="h-1 w-1 rounded-full bg-[#e5d0ca]" aria-hidden="true" />
                <a
                  href={DOWNLOAD_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[13.5px] font-medium text-[#8a6568] transition-colors hover:text-[#3b2428]"
                >
                  Download
                </a>
              </span>
            </nav>
          </div>

          <div className="mt-8 flex flex-col items-center justify-between gap-2.5 border-t border-[#eedcd7] pt-6 text-[#836066] sm:flex-row">
            <p className="text-[13px]">© 2026 DiskGenie</p>
            <p className="font-mono text-[12px] tracking-wide">
              Windows 10+ · macOS on Apple Silicon
            </p>
            <p className="text-[13px]">diskgenie.app</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
