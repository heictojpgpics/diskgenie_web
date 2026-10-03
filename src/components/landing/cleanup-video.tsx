"use client";
import { AppFrame } from "./app-frame";
import { asset } from "@/lib/asset";

const STEPS = [
  { n: "1", label: "Scan", body: "Pick a drive or a folder. The map fills in while it runs." },
  { n: "2", label: "Queue", body: "Right-click any file or folder and add it to the cleanup queue." },
  { n: "3", label: "Review", body: "See everything in one list, with sizes and a total. Nothing has moved yet." },
  { n: "4", label: "Commit", body: "One confirmation and it all goes to the Recycle Bin. A mistake is still fixable." },
] as const;

export function CleanupVideo() {
  return (
    <section id="cleanup" className="py-14 sm:py-18">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_1.25fr] lg:gap-14">
          <div>
            <p className="font-mono text-[12px] uppercase tracking-[0.18em] text-[#b03852]">
              02 · The cleanup
            </p>
            <h2 className="mt-3 font-display text-[clamp(1.9rem,4vw,2.9rem)] font-bold leading-[1.08] tracking-[-0.015em] text-[#3b2428]">
              The twenty-second cleanup.
            </h2>
            <p className="mt-4 text-pretty text-[16px] leading-relaxed text-[#8a6568]">
              Right-click anything suspicious and add it to the queue.
              Keep going while you find more, review the total, then
              commit once. Everything lands in the Recycle Bin, where a
              mistake can still be undone.
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
                aria-label="Queueing folders from the treemap into the cleanup queue"
              />
            </AppFrame>
            <p className="mt-4 text-center text-[13px] text-[#836066]">
              Real footage: right-click, queue, review, commit. The
              queue shows 5.69 GB before the final word.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
