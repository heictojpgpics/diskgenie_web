"use client";
import { useMemo } from "react";
import { Cover } from "@/components/ui/cover";
import { AppFrame } from "./app-frame";
import { DOWNLOAD_URL } from "@/lib/site";
import { asset } from "@/lib/asset";

function Petals({ count = 14 }: { count?: number }) {
  const petals = useMemo(() => {
    // deterministic scatter — stable across renders, no hydration drift
    const seed = (i: number) => {
      const x = Math.sin(i * 12.9898) * 43758.5453;
      return x - Math.floor(x);
    };
    return Array.from({ length: count }, (_, i) => ({
      left: `${(seed(i) * 92 + 2).toFixed(2)}%`,
      duration: `${(9 + seed(i + 40) * 9).toFixed(1)}s`,
      delay: `${(-seed(i + 80) * 18).toFixed(1)}s`,
      scale: 0.55 + seed(i + 120) * 0.9,
      opacity: 0.35 + seed(i + 160) * 0.4,
    }));
  }, [count]);
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {petals.map((p, i) => (
        <span
          key={i}
          className="petal"
          style={{
            left: p.left,
            animationDuration: p.duration,
            animationDelay: p.delay,
            transform: `scale(${p.scale})`,
            opacity: p.opacity,
          }}
        />
      ))}
    </div>
  );
}

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-28 sm:pt-32">
      <div className="cream-wash absolute inset-0" aria-hidden="true" />
      <Petals />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#e5d0ca] bg-white/80 px-4 py-1.5 text-[13px] font-medium text-[#8a6568] shadow-[0_1px_2px_rgba(59,36,40,0.05)]">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#d8506b] opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#d8506b]" />
            </span>
            Rust core · Windows &amp; Mac · zero telemetry by default
          </div>

          <h1 className="font-display text-[clamp(2.4rem,6vw,4.3rem)] font-bold leading-[1.04] tracking-[-0.02em] text-[#3b2428]">
            Your disk is full.
            <br />
            <Cover className="px-3 py-1.5 font-display">DiskGenie</Cover>{" "}
            knows why.
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-pretty text-[17px] leading-relaxed text-[#8a6568] sm:text-lg">
            Scan a drive in seconds, see it nine different ways, and sweep
            the weight away — through a queue that only ever moves to the
            Recycle Bin. A premium desktop tool, built with a Rust core
            and a canvas interface that feels alive.
          </p>

          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={DOWNLOAD_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="ink-grad ink-glow-strong group inline-flex h-12 w-full items-center justify-center gap-2.5 rounded-full px-7 text-[15px] font-semibold text-white transition-transform duration-200 hover:scale-[1.02] active:scale-[0.98] sm:w-auto"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M8 1.5v9m0 0L4.8 7.3M8 10.5l3.2-3.2M2.5 13.5h11" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Download for Windows
            </a>
            <a
              href={DOWNLOAD_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 w-full items-center justify-center gap-2.5 rounded-full border border-[#e0c6c0] bg-white px-7 text-[15px] font-semibold text-[#3b2428] shadow-[0_1px_2px_rgba(59,36,40,0.05)] transition-all duration-200 hover:border-[#d8506b]/40 hover:shadow-[0_2px_10px_rgba(216,80,107,0.15)] active:scale-[0.98] sm:w-auto"
            >
              <svg width="15" height="15" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true" className="text-[#8a6568]">
                <path d="M11.9 1.1c.2 1.4-.4 2.8-1.2 3.8-.9 1-2.2 1.8-3.5 1.7-.2-1.4.5-2.8 1.3-3.7.9-1 2.3-1.7 3.4-1.8ZM13.5 14.4c-.6 1.1-1.2 1.7-1.9 1.8-.6.1-1.2-.1-2-.5-.3-.1-.6-.2-1-.2s-.7.1-1 .2c-.8.4-1.4.6-2 .5-.7-.1-1.3-.7-1.9-1.8C3 13.2 2.6 11.5 2.9 9.9c.2-1 .8-2 1.6-2.6.6-.5 1.3-.8 2-.8.4 0 .7.1 1.1.2.3.1.6.2 1 .2.4 0 .7-.1 1-.2.4-.1.8-.2 1.2-.2.8 0 1.6.4 2.2.9.9.7 1.4 1.8 1.3 3-.1 1.5-.8 2.9-1.8 4Z" />
              </svg>
              Download for Mac
            </a>
          </div>

          <p className="mt-5 font-mono text-[12px] tracking-wide text-[#a38083]">
            Windows 10+ · macOS on Apple Silicon · free to scan
          </p>
        </div>

        {/* the hero footage — a real, unedited capture of the app */}
        <div className="relative mx-auto mt-14 max-w-5xl sm:mt-16">
          <div
            className="absolute -inset-x-8 -top-10 -bottom-16 rounded-[3rem] bg-gradient-to-b from-[rgba(236,109,132,0.10)] to-transparent blur-2xl"
            aria-hidden="true"
          />
          <AppFrame glow className="relative">
            <video
              className="block aspect-[5/3] w-full bg-white object-cover"
              src={asset("/videos/hero-demo.mp4")}
              poster={asset("/videos/hero-demo-poster.webp")}
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              aria-label="DiskGenie scanning a drive and exploring the treemap"
            />
          </AppFrame>
          <p className="mt-4 text-center text-[13px] text-[#a38083]">
            Unedited footage — a full scan, the treemap drill-down, and the
            inspector, at actual speed.
          </p>
        </div>
      </div>
    </section>
  );
}
