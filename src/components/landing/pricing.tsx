"use client";
import { BrandMark } from "./brand";
import { DOWNLOAD_URL, REPO_URL } from "@/lib/site";

const FREE = [
  "Full-disk scans with the turbo engine",
  "All nine views of the map",
  "Live system Monitor, forever",
  "All five themes — never license-gated",
];

const PRO = [
  "Everything in free",
  "Cleanup Queue — stage, review, commit",
  "Duplicates (SHA-256, hardlink-aware)",
  "Applications + leftover hunting",
  "Snapshots & footprint diffing",
  "14-day offline grace",
];

export function Pricing() {
  return (
    <section id="pricing" className="petal-wash py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-mono text-[12px] uppercase tracking-[0.18em] text-[#c7405d]">
            06 · Pricing
          </p>
          <h2 className="mt-3 font-display text-[clamp(1.9rem,4vw,2.9rem)] font-bold leading-[1.08] tracking-[-0.015em] text-[#3b2428]">
            Free to look. Pro to sweep.
          </h2>
          <p className="mt-4 text-pretty text-[16px] leading-relaxed text-[#8a6568]">
            One license covers one Windows PC and one Mac — your two
            machines, one key. Yearly or lifetime, activated in the app.
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-4xl gap-6 md:grid-cols-2">
          <article className="card-lift flex flex-col rounded-3xl border border-[#e5d0ca] bg-white p-7 sm:p-8">
            <h3 className="font-display text-[19px] font-semibold text-[#3b2428]">Free</h3>
            <p className="mt-1 text-[14px] text-[#8a6568]">For looking — and for watching your system breathe.</p>
            <p className="mt-6 flex items-baseline gap-1.5">
              <span className="font-display text-[3.4rem] font-bold leading-none tracking-tight text-[#3b2428] tnum">$0</span>
              <span className="text-[14px] text-[#a38083]">forever</span>
            </p>
            <ul className="mt-7 space-y-3.5">
              {FREE.map((f) => (
                <li key={f} className="flex items-start gap-3 text-[14.5px] text-[#3b2428]">
                  <svg width="15" height="15" viewBox="0 0 16 16" fill="none" className="mt-0.5 shrink-0 text-[#d8506b]" aria-hidden="true">
                    <path d="m3.5 8.5 3 3 6-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  {f}
                </li>
              ))}
            </ul>
            <a
              href={DOWNLOAD_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex h-11 items-center justify-center rounded-full border border-[#e0c6c0] bg-white text-[15px] font-semibold text-[#3b2428] transition-all hover:border-[#d8506b]/40 hover:shadow-[0_2px_10px_rgba(216,80,107,0.15)]"
            >
              Download free
            </a>
          </article>

          <article className="relative flex flex-col overflow-hidden rounded-3xl border border-[#d8506b]/30 bg-gradient-to-b from-[#fff] via-[#fff] to-[#fdf0f3] p-7 shadow-[0_2px_6px_rgba(59,36,40,0.05),0_24px_60px_-18px_rgba(216,80,107,0.28)] sm:p-8">
            <div className="absolute right-6 top-7 rounded-full bg-[rgba(216,80,107,0.1)] px-3 py-1 font-mono text-[11px] font-semibold uppercase tracking-wider text-[#c7405d]">
              Lifetime
            </div>
            <h3 className="flex items-center gap-2.5 font-display text-[19px] font-semibold text-[#3b2428]">
              <BrandMark size={22} /> DiskGenie Pro
            </h3>
            <p className="mt-1 text-[14px] text-[#8a6568]">For sweeping — the whole toolkit, both machines.</p>
            <p className="mt-6 flex items-baseline gap-1.5">
              <span className="text-ink-grad font-display text-[3.4rem] font-bold leading-none tracking-tight tnum">Lifetime</span>
            </p>
            <p className="mt-1 text-[13px] text-[#a38083]">or yearly — pick your posture in the app</p>
            <ul className="mt-7 space-y-3.5">
              {PRO.map((f) => (
                <li key={f} className="flex items-start gap-3 text-[14.5px] text-[#3b2428]">
                  <svg width="15" height="15" viewBox="0 0 16 16" fill="none" className="mt-0.5 shrink-0 text-[#d8506b]" aria-hidden="true">
                    <path d="m3.5 8.5 3 3 6-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  {f}
                </li>
              ))}
            </ul>
            <a
              href={DOWNLOAD_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="ink-grad ink-glow-strong mt-8 inline-flex h-11 items-center justify-center rounded-full text-[15px] font-semibold text-white transition-transform duration-200 hover:scale-[1.02] active:scale-[0.98]"
            >
              Download &amp; unlock in-app
            </a>
            <p className="mt-3.5 text-center text-[12.5px] leading-relaxed text-[#a38083]">
              Keys activate right in the app — Ed25519-signed, revocable
              within a day, 14 days offline grace.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
