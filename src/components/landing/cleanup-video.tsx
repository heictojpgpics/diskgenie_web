"use client";
import { AppFrame } from "./app-frame";
import { asset } from "@/lib/asset";

const STEPS = [
  { n: "1", label: "Scan", body: "Pick the whole PC or any folder. The map builds while it runs." },
  { n: "2", label: "Right-click", body: "Any cell, folder, or file — the menu offers Add to Cleanup." },
  { n: "3", label: "Stage", body: "Items queue up with sizes and totals. Nothing has moved yet." },
  { n: "4", label: "Commit once", body: "One confirmation moves everything to the Recycle Bin. Reversible." },
] as const;

export function CleanupVideo() {
  return (
    <section className="petal-wash py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.25fr] lg:gap-16">
          <div>
            <p className="font-mono text-[12px] uppercase tracking-[0.18em] text-[#c7405d]">
              03 · Quick actions
            </p>
            <h2 className="mt-3 font-display text-[clamp(1.9rem,4vw,2.9rem)] font-bold leading-[1.08] tracking-[-0.015em] text-[#3b2428]">
              The twenty-second cleanup.
            </h2>
            <p className="mt-4 text-pretty text-[16px] leading-relaxed text-[#8a6568]">
              Deleting is a two-step dance, on purpose. You stage from
              anywhere — the map, the list, Quick Wins, duplicates — and
              nothing leaves your drive until you say the word.
            </p>

            <ol className="mt-8 space-y-5">
              {STEPS.map((s) => (
                <li key={s.n} className="flex gap-4">
                  <span className="ink-grad ink-glow mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full font-mono text-[12px] font-semibold text-white tnum">
                    {s.n}
                  </span>
                  <div>
                    <p className="text-[15px] font-semibold text-[#3b2428]">{s.label}</p>
                    <p className="mt-0.5 text-[14px] leading-relaxed text-[#8a6568]">{s.body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <div>
            <AppFrame glow>
              <video
                className="block aspect-[5/3] w-full bg-white object-cover"
                src={asset("/videos/quick-actions.mp4")}
                poster={asset("/videos/quick-actions-poster.webp")}
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                aria-label="Staging folders from the treemap into the cleanup queue"
              />
            </AppFrame>
            <p className="mt-4 text-center text-[13px] text-[#a38083]">
              Real footage — right-click, stage, review, commit. The queue
              shows 5.69 GB staged before the final word.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
