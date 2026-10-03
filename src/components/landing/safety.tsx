"use client";
import Image from "next/image";
import { AppFrame } from "./app-frame";
import { asset } from "@/lib/asset";

const GUARANTEES = [
  {
    title: "Recycle Bin, or it doesn't move",
    body: "Commits go to the Windows Recycle Bin or the Mac Trash — never a direct delete. Items that can't be recycled are refused before anything happens, not discovered after.",
  },
  {
    title: "Cloud files are never touched",
    body: "Placeholder files from OneDrive and friends are skipped — never opened, previewed, or hashed, because that would download them. They stay exactly as they are.",
  },
  {
    title: "Protected folders stay protected",
    body: "System folders can't be staged. The review step shows every item, and unreadable areas are reported honestly instead of guessed at.",
  },
  {
    title: "One fallback, always announced",
    body: "Turbo → standard is the only fallback in the product, and it's user-visible with a reason. Everything else is the same engine you started with.",
  },
];

export function Safety() {
  return (
    <section id="safety" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_1fr] lg:gap-16">
          <div className="order-2 lg:order-1">
            <AppFrame className="card-lift">
              <div className="relative aspect-[5/3] w-full bg-white">
                <Image
                  src={asset("/shots/queue.webp")}
                  alt="The cleanup queue popover reviewing staged items before anything moves"
                  fill
                  sizes="(max-width: 1024px) 92vw, 560px"
                  className="object-cover object-top"
                />
              </div>
            </AppFrame>
            <p className="mt-4 text-center text-[13px] text-[#a38083]">
              The queue before the commit — every item, every size, one
              decision.
            </p>
          </div>

          <div className="order-1 lg:order-2">
            <p className="font-mono text-[12px] uppercase tracking-[0.18em] text-[#c7405d]">
              05 · Safety
            </p>
            <h2 className="mt-3 font-display text-[clamp(1.9rem,4vw,2.9rem)] font-bold leading-[1.08] tracking-[-0.015em] text-[#3b2428]">
              Deleting is deliberate.
            </h2>
            <p className="mt-4 text-pretty text-[16px] leading-relaxed text-[#8a6568]">
              A cleanup tool earns trust in the delete path or not at
              all. DiskGenie's is belt, braces, and a receipt.
            </p>

            <ul className="mt-8 grid gap-4 sm:grid-cols-2">
              {GUARANTEES.map((g) => (
                <li key={g.title} className="rounded-2xl border border-[#e5d0ca] bg-white p-5 card-lift">
                  <div className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[rgba(216,80,107,0.12)] text-[#c7405d]">
                      <svg width="12" height="12" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                        <path d="m3.5 8.5 3 3 6-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    <div>
                      <p className="text-[15px] font-semibold leading-snug text-[#3b2428]">{g.title}</p>
                      <p className="mt-1.5 text-[13.5px] leading-relaxed text-[#8a6568]">{g.body}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>

            <p className="mt-6 rounded-xl bg-[rgba(216,80,107,0.07)] px-4 py-3 text-[13px] leading-relaxed text-[#8a6568]">
              <span className="font-semibold text-[#c7405d]">Zero direct-delete APIs</span>{" "}
              in the product code — enforced by a grep in CI on every single build.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
