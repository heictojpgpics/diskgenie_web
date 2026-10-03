"use client";
import { useState } from "react";
import Image from "next/image";
import { AppFrame } from "./app-frame";
import { THEMES } from "@/lib/site";
import { asset } from "@/lib/asset";

/*
 * The theme showcase — click a palette chip and the app shot crossfades
 * between real captures of the same scan under each theme, with the
 * palette's own note.
 */
export function Themes() {
  const [active, setActive] = useState(4); // Blossom, the site's own skin
  const current = THEMES[active];

  return (
    <section id="themes" className="petal-wash py-14 sm:py-18">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-mono text-[12px] uppercase tracking-[0.18em] text-[#b03852]">
            04 · Themes
          </p>
          <h2 className="mt-3 font-display text-[clamp(1.9rem,4vw,2.9rem)] font-bold leading-[1.08] tracking-[-0.015em] text-[#3b2428]">
            Five looks. One click.
          </h2>
          <p className="mt-4 text-pretty text-[16px] leading-relaxed text-[#8a6568]">
            Every surface, chart and accent changes together when you
            pick. Choose what suits your desk, or your mood. This page
            is wearing Blossom.
          </p>
        </div>

        <div
          className="mt-8 flex flex-wrap items-center justify-center gap-2.5"
          role="tablist"
          aria-label="Theme palettes"
        >
          {THEMES.map((t, i) => (
            <button
              key={t.id}
              type="button"
              role="tab"
              aria-selected={i === active}
              onClick={() => setActive(i)}
              className={`theme-tab flex items-center gap-2.5 rounded-full border px-4 py-2.5 text-[14px] font-semibold ${
                i === active
                  ? "border-[#d8506b] bg-white text-[#3b2428] shadow-[0_2px_12px_rgba(216,80,107,0.22)]"
                  : "border-[#e0c6c0] bg-white/70 text-[#8a6568] hover:border-[#d8506b]/40 hover:text-[#3b2428]"
              }`}
            >
              <span
                className="h-4 w-4 rounded-full border border-black/10 shadow-[inset_0_1px_2px_rgba(0,0,0,0.12)]"
                style={{ background: `linear-gradient(135deg, ${t.dots[0]} 45%, ${t.dots[1]} 55%)` }}
                aria-hidden="true"
              />
              {t.name}
            </button>
          ))}
        </div>

        <div className="relative mx-auto mt-8 max-w-4xl">
          <AppFrame className="relative">
            <div className="relative aspect-[5/3] w-full">
              {THEMES.map((t, i) => (
                <div
                  key={t.id}
                  className={`absolute inset-0 transition-opacity duration-500 ${
                    i === active ? "opacity-100" : "pointer-events-none opacity-0"
                  }`}
                  aria-hidden={i !== active}
                >
                  <Image
                    src={asset(t.shot)}
                    alt={`DiskGenie under the ${t.name} theme`}
                    fill
                    sizes="(max-width: 896px) 92vw, 896px"
                    className="object-cover object-top"
                    priority={i === 4}
                  />
                </div>
              ))}
            </div>
          </AppFrame>
          <p className="mt-4 min-h-[1.6em] text-center text-[14px] text-[#8a6568]">
            <span className="font-semibold text-[#3b2428]">{current.name}</span>
            <span className="mx-2 text-[#e5d0ca]">·</span>
            {current.note}
          </p>
        </div>
      </div>
    </section>
  );
}
