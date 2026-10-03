"use client";
import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { AppFrame } from "./app-frame";
import { MODES } from "@/lib/site";
import { asset } from "@/lib/asset";

/*
 * The lenses — a scroll-snap film strip of all nine visualizations,
 * real captures of the same scan. Arrows + keyboard + touch; a mono
 * counter tracks position (01 / 09).
 */
export function Lenses() {
  const stripRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);

  const scrollToIndex = useCallback((i: number) => {
    const strip = stripRef.current;
    if (!strip) return;
    const clamped = Math.max(0, Math.min(MODES.length - 1, i));
    const card = strip.children[clamped] as HTMLElement | undefined;
    if (card) {
      strip.scrollTo({ left: card.offsetLeft - strip.offsetLeft, behavior: "smooth" });
    }
  }, []);

  // track the centered card while the user swipes/scrolls
  useEffect(() => {
    const strip = stripRef.current;
    if (!strip) return;
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const center = strip.scrollLeft + strip.clientWidth / 2;
        let best = 0;
        let bestD = Infinity;
        for (let i = 0; i < strip.children.length; i++) {
          const c = strip.children[i] as HTMLElement;
          const d = Math.abs(c.offsetLeft + c.offsetWidth / 2 - center);
          if (d < bestD) {
            bestD = d;
            best = i;
          }
        }
        setIndex(best);
      });
    };
    strip.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      strip.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section id="visualize" className="petal-wash py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <div className="max-w-2xl">
          <p className="font-mono text-[12px] uppercase tracking-[0.18em] text-[#c7405d]">
            01 · Visualize
          </p>
          <h2 className="mt-3 font-display text-[clamp(1.9rem,4vw,2.9rem)] font-bold leading-[1.08] tracking-[-0.015em] text-[#3b2428]">
            One scan. Nine lenses.
          </h2>
          <p className="mt-4 text-pretty text-[16px] leading-relaxed text-[#8a6568]">
            Every view reads the same Rust-built tree, so switching is
            instant and nothing rescans. Some brains want rectangles,
            some want rings, some want a ranked list — bring yours.
          </p>
        </div>

        <div className="mt-10 flex items-center justify-between gap-4">
          <div className="flex items-baseline gap-2 font-mono text-[13px] text-[#8a6568]">
            <span className="text-[15px] font-semibold text-[#3b2428] tnum">
              {String(index + 1).padStart(2, "0")}
            </span>
            <span className="text-[#a38083]">/ {String(MODES.length).padStart(2, "0")}</span>
            <span className="ml-2 hidden text-[#3b2428] sm:inline">
              — {MODES[index].name}
            </span>
          </div>
          <div className="mt-4 flex gap-2">
            <button
              type="button"
              onClick={() => scrollToIndex(index - 1)}
              disabled={index === 0}
              aria-label="Previous view"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-[#e0c6c0] bg-white text-[#3b2428] transition-all hover:border-[#d8506b]/40 hover:shadow-[0_2px_10px_rgba(216,80,107,0.15)] disabled:opacity-35 disabled:hover:shadow-none"
            >
              <svg width="15" height="15" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M10 3 5 8l5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <button
              type="button"
              onClick={() => scrollToIndex(index + 1)}
              disabled={index === MODES.length - 1}
              aria-label="Next view"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-[#e0c6c0] bg-white text-[#3b2428] transition-all hover:border-[#d8506b]/40 hover:shadow-[0_2px_10px_rgba(216,80,107,0.15)] disabled:opacity-35 disabled:hover:shadow-none"
            >
              <svg width="15" height="15" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="m6 3 5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>

        <div
          ref={stripRef}
          className="film-strip mt-4 flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth pb-2 pr-5 pt-2 sm:pr-6"
          role="list"
          aria-label="The nine visualization modes"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "ArrowRight") {
              e.preventDefault();
              scrollToIndex(index + 1);
            } else if (e.key === "ArrowLeft") {
              e.preventDefault();
              scrollToIndex(index - 1);
            }
          }}
        >
          {MODES.map((m, i) => (
            <figure
              key={m.name}
              role="listitem"
              className={`w-[84%] shrink-0 snap-center sm:w-[62%] lg:w-[46%] ${
                i === index ? "" : "opacity-[0.55] transition-opacity duration-300 hover:opacity-100"
              }`}
            >
              <AppFrame className="card-lift card-lift-hover">
                <div className="relative aspect-[5/3] w-full bg-white">
                  <Image
                    src={asset(m.shot)}
                    alt={`${m.name} view of a DiskGenie scan`}
                    fill
                    sizes="(max-width: 640px) 84vw, (max-width: 1024px) 62vw, 46vw"
                    className="object-cover object-top"
                    priority={i < 2}
                  />
                </div>
              </AppFrame>
              <figcaption className="mt-3.5 px-1">
                <span className="font-display text-[15px] font-semibold text-[#3b2428]">
                  {m.name}
                </span>
                <span className="ml-2 font-mono text-[11px] text-[#a38083] tnum">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="mt-0.5 text-[13.5px] text-[#8a6568]">{m.caption}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
