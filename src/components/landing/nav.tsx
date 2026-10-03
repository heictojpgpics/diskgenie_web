"use client";
import { useEffect, useState } from "react";
import { BrandMark } from "./brand";
import { DOWNLOAD_URL, NAV_LINKS } from "@/lib/site";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-[#e5d0ca]/80 bg-[#fbf1ee]/85 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-6">
        <a href="#top" className="flex items-center gap-2.5" aria-label="DiskGenie home">
          <BrandMark size={30} />
          <span className="font-display text-[17px] font-semibold tracking-tight text-[#3b2428]">
            DiskGenie
          </span>
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-full px-3.5 py-2 text-[14px] font-medium text-[#8a6568] transition-colors hover:bg-[#f4e5e1] hover:text-[#3b2428]"
            >
              {l.label}
            </a>
          ))}
        </div>

        <a
          href={DOWNLOAD_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="ink-grad ink-glow group inline-flex items-center gap-2 rounded-full px-4 py-2.5 text-[14px] font-semibold text-white transition-transform duration-200 hover:scale-[1.03] active:scale-[0.98]"
        >
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path
              d="M8 1.5v9m0 0L4.8 7.3M8 10.5l3.2-3.2M2.5 13.5h11"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Download
        </a>
      </nav>
    </header>
  );
}
