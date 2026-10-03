"use client";
import { useEffect, useState } from "react";
import { BrandMark } from "./brand";
import { DOWNLOAD_URL, PRICING, type Region } from "@/lib/site";

/*
 * Pricing — the honest commercial story: one license, two ways to pay.
 * Currency defaults to the visitor's region (India gets INR) with a
 * manual toggle; both prices are real and both cover the whole app on
 * a Windows PC and a Mac together.
 */
const INCLUDED = [
  "All nine views of the map",
  "The cleanup queue",
  "The duplicates finder",
  "Applications and leftovers",
  "Snapshots and diffing",
  "The live monitor",
  "All five themes",
  "Windows and Mac together",
];

export function Pricing() {
  const [region, setRegion] = useState<Region>("usd");

  // After hydration, show local pricing to Indian visitors. The server
  // render stays USD so markup matches; the swap runs once post-mount
  // (deferred to a macrotask: no synchronous setState in the effect).
  useEffect(() => {
    const id = setTimeout(() => {
      try {
        const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
        const loc = (navigator.language || "").toLowerCase();
        if (tz === "Asia/Kolkata" || /(^|[-_])in([-_]|$)/.test(loc) || loc === "en-in") {
          setRegion("inr");
        }
      } catch {
        /* region detection is best-effort */
      }
    }, 0);
    return () => clearTimeout(id);
  }, []);

  const p = PRICING[region];

  return (
    <section id="pricing" className="py-14 sm:py-18">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-mono text-[12px] uppercase tracking-[0.18em] text-[#b03852]">
            06 · Pricing
          </p>
          <h2 className="mt-3 font-display text-[clamp(1.9rem,4vw,2.9rem)] font-bold leading-[1.08] tracking-[-0.015em] text-[#3b2428]">
            One license. Two ways to pay.
          </h2>
          <p className="mt-4 text-pretty text-[16px] leading-relaxed text-[#8a6568]">
            Every feature, both your computers, nothing held back. Pay
            for a year, or pay once and be done with it.
          </p>
        </div>

        <div className="mt-8 flex items-center justify-center gap-1.5" role="group" aria-label="Currency">
          {(["usd", "inr"] as const).map((r) => (
            <button
              key={r}
              type="button"
              onClick={() => setRegion(r)}
              aria-pressed={region === r}
              className={`theme-tab rounded-full border px-4 py-1.5 font-mono text-[12.5px] font-semibold ${
                region === r
                  ? "border-[#d8506b] bg-white text-[#b03852] shadow-[0_1px_8px_rgba(216,80,107,0.18)]"
                  : "border-[#e0c6c0] bg-white/70 text-[#8a6568] hover:border-[#d8506b]/40 hover:text-[#b03852]"
              }`}
            >
              {PRICING[r].label}
            </button>
          ))}
        </div>

        <div className="mx-auto mt-8 grid max-w-4xl gap-5 md:grid-cols-2">
          <article className="card-lift flex flex-col rounded-3xl border border-[#e5d0ca] bg-white p-7 sm:p-8">
            <h3 className="font-display text-[19px] font-semibold text-[#3b2428]">Yearly</h3>
            <p className="mt-1 text-[14px] text-[#8a6568]">
              The whole app on both your machines, for a year.
            </p>
            <p className="mt-6 flex items-baseline gap-1.5">
              <span className="font-display text-[3.2rem] font-bold leading-none tracking-tight text-[#3b2428] tnum">
                {p.symbol}{p.yearly}
              </span>
              <span className="text-[14px] text-[#836066]">a year</span>
            </p>
            <a
              href={DOWNLOAD_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex h-11 items-center justify-center rounded-full border border-[#e0c6c0] bg-white text-[15px] font-semibold text-[#3b2428] transition-all hover:border-[#d8506b]/40 hover:shadow-[0_2px_10px_rgba(216,80,107,0.15)]"
            >
              Download DiskGenie
            </a>
          </article>

          <article className="relative flex flex-col overflow-hidden rounded-3xl border border-[#d8506b]/30 bg-gradient-to-b from-[#fff] via-[#fff] to-[#fdf0f3] p-7 shadow-[0_2px_6px_rgba(59,36,40,0.05),0_24px_60px_-18px_rgba(216,80,107,0.28)] sm:p-8">
            <div className="absolute right-6 top-7 rounded-full bg-[rgba(216,80,107,0.1)] px-3 py-1 font-mono text-[11px] font-semibold uppercase tracking-wider text-[#b03852]">
              Best value
            </div>
            <h3 className="flex items-center gap-2.5 font-display text-[19px] font-semibold text-[#3b2428]">
              <BrandMark size={22} /> Lifetime
            </h3>
            <p className="mt-1 text-[14px] text-[#8a6568]">
              The whole app on both your machines, for good. Future
              updates included.
            </p>
            <p className="mt-6 flex items-baseline gap-1.5">
              <span className="text-ink-grad font-display text-[3.2rem] font-bold leading-none tracking-tight tnum">
                {p.symbol}{p.lifetime}
              </span>
              <span className="text-[14px] text-[#836066]">once</span>
            </p>
            <a
              href={DOWNLOAD_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="ink-grad ink-glow-strong mt-7 inline-flex h-11 items-center justify-center rounded-full text-[15px] font-semibold text-white transition-transform duration-200 hover:scale-[1.02] active:scale-[0.98]"
            >
              Download DiskGenie
            </a>
          </article>
        </div>

        <ul className="mx-auto mt-8 grid max-w-4xl grid-cols-1 gap-x-6 gap-y-2.5 rounded-2xl border border-[#e5d0ca] bg-white/70 px-6 py-5 sm:grid-cols-2">
          {INCLUDED.map((f) => (
            <li key={f} className="flex items-center gap-2.5 text-[14px] text-[#3b2428]">
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" className="shrink-0 text-[#d8506b]" aria-hidden="true">
                <path d="m3.5 8.5 3 3 6-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              {f}
            </li>
          ))}
        </ul>

        <p className="mx-auto mt-5 max-w-xl text-center text-[13px] leading-relaxed text-[#836066]">
          Your license key arrives by email after checkout. Paste it into
          the app once and you are set. Going offline? DiskGenie keeps
          working for 14 days.
        </p>
      </div>
    </section>
  );
}
