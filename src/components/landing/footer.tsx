"use client";
import { BrandMark, Wordmark } from "./brand";
import { DOWNLOAD_URL, REPO_URL } from "@/lib/site";

export function Footer() {
  return (
    <footer className="relative overflow-hidden">
      {/* final CTA */}
      <div className="rosewood-band relative">
        <div className="relative mx-auto max-w-6xl px-5 py-20 text-center sm:px-6 sm:py-24">
          <BrandMark size={56} className="mx-auto" />
          <h2 className="mx-auto mt-7 max-w-2xl font-display text-[clamp(2rem,5vw,3.2rem)] font-bold leading-[1.06] tracking-[-0.02em] text-white">
            Give your bytes a place to breathe.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-[16px] leading-relaxed text-[#e5c4cc]">
            Download DiskGenie, run your first scan, and watch a full
            drive turn into a map you can actually read.
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
              href={REPO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-full border border-white/20 px-8 text-[15px] font-semibold text-white/90 transition-colors hover:border-white/40 hover:bg-white/5 sm:w-auto"
            >
              <svg width="17" height="17" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82a7.42 7.42 0 0 1 2-.27c.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8Z" />
              </svg>
              Source on GitHub
            </a>
          </div>
          <p className="mt-6 font-mono text-[12px] tracking-wide text-[#dcb8c0]">
            Windows 10+ · macOS on Apple Silicon
          </p>
        </div>
      </div>

      {/* the footer bar */}
      <div className="border-t border-[#e5d0ca] bg-[#fbf1ee]">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-5 px-5 py-8 sm:flex-row sm:px-6">
          <div className="flex items-center gap-2.5">
            <BrandMark size={26} />
            <Wordmark className="text-[15px]" />
          </div>
          <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[13.5px] font-medium text-[#8a6568]">
            <a href="#visualize" className="transition-colors hover:text-[#3b2428]">Visualize</a>
            <a href="#features" className="transition-colors hover:text-[#3b2428]">Features</a>
            <a href="#themes" className="transition-colors hover:text-[#3b2428]">Themes</a>
            <a href="#safety" className="transition-colors hover:text-[#3b2428]">Safety</a>
            <a href="#pricing" className="transition-colors hover:text-[#3b2428]">Pricing</a>
            <a href="#faq" className="transition-colors hover:text-[#3b2428]">FAQ</a>
            <a href={REPO_URL} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-[#3b2428]">GitHub</a>
          </nav>
          <p className="text-[13px] text-[#a38083]">© 2026 DiskGenie · diskgenie.app</p>
        </div>
      </div>
    </footer>
  );
}
