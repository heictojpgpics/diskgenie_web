"use client";
import Image from "next/image";
import { AppFrame } from "./app-frame";
import { DOWNLOAD_URL } from "@/lib/site";
import { asset } from "@/lib/asset";

type Feature = {
  icon: React.ReactNode;
  title: string;
  body: string;
  shot?: { src: string; alt: string };
  span?: string;
};

const iconProps = { width: 18, height: 18, viewBox: "0 0 20 20", fill: "none" } as const;
const stroke = { stroke: "currentColor", strokeWidth: 1.7, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };

const FEATURES: Feature[] = [
  {
    icon: <svg {...iconProps}><path d="M10 2.5 16.5 6v8L10 17.5 3.5 14V6L10 2.5Z" {...stroke}/><path d="M10 8.2a2 2 0 1 0 0 3.6 2 2 0 0 0 0-3.6Z" {...stroke}/><path d="M10 2.5v5.7M10 11.9v5.6M3.5 6l4.6 2.8M12.6 12.5l4.4 1.5" {...stroke} opacity={0.45}/></svg>,
    title: "A turbo engine with an honest fallback",
    body: "The turbo engine parses the NTFS master file table directly — a full C:\\ lands in seconds, results streaming while it runs. When elevation or filesystem shape says no, the standard engine takes over visibly, with a stated reason. Never a silent downgrade.",
    span: "lg:col-span-2",
  },
  {
    icon: <svg {...iconProps}><path d="M4 6.5h7M4 10h4" {...stroke}/><path d="M13 11.5 16.5 8l-3.5-3.5" {...stroke}/><path d="M16.5 8H9" {...stroke}/></svg>,
    title: "Duplicates, bit-perfect",
    body: "A 3-pass SHA-256 grouping that only trusts content, skips hardlinks so mirrors never lie, and lets you keep one while staging the rest.",
    shot: { src: "/shots/duplicates.webp", alt: "Duplicates view with grouped identical files" },
  },
  {
    icon: <svg {...iconProps}><rect x="3" y="4.5" width="14" height="11" rx="2.2" {...stroke}/><path d="M7.2 8.4a1.6 1.6 0 1 0 .001 3.2 1.6 1.6 0 0 0 0-3.2Z" {...stroke}/><path d="M9.8 10c1.6-2.6 4.8-2.6 5.6 0-.8 2.6-4 2.6-5.6 0Z" {...stroke} opacity={0.45}/></svg>,
    title: "Applications, swept clean",
    body: "Store and classic apps with sizes and last-used — and the leftover hunt after the uninstaller runs, so nothing caches behind.",
    shot: { src: "/shots/applications.webp", alt: "Applications view with bundle sizes and leftovers" },
  },
  {
    icon: <svg {...iconProps}><path d="M3.5 10a6.5 6.5 0 0 1 11-4.7L16.5 7" {...stroke}/><path d="M16.5 10a6.5 6.5 0 0 1-11 4.7L3.5 13" {...stroke}/><path d="M16.7 4v3h-3M3.3 16v-3h3" {...stroke} opacity={0.45}/></svg>,
    title: "Snapshots that keep you honest",
    body: "Freeze a folder's footprint, then diff it against next week — what grew, what shrank, what your cleanup actually bought you.",
    shot: { src: "/shots/snapshots.webp", alt: "Snapshots view" },
  },
  {
    icon: <svg {...iconProps}><path d="M10 3v14M6.8 5.5 13.2 8.5v3L6.8 14.5" {...stroke}/><path d="M6.8 8.5 13.2 11.5" {...stroke} opacity={0.45}/></svg>,
    title: "A live Monitor, free forever",
    body: "CPU, memory, network, and storage with top processes — sampled every two seconds from native APIs, not shells. The tab that stays free.",
    shot: { src: "/shots/monitor.webp", alt: "Live monitor with system charts" },
  },
  {
    icon: <svg {...iconProps}><path d="M4 13.5a4.2 4.2 0 0 1 3-4 4.2 4.2 0 1 1 6 0 4.2 4.2 0 0 1 3 4" {...stroke}/><path d="M8 13.5a2.6 2.6 0 0 1 4 0" {...stroke} opacity={0.45}/><path d="M2.8 16.5h14.4" {...stroke}/></svg>,
    title: "Quick Wins & an inspector that tells the truth",
    body: "The sidebar ranks the biggest safe savings — media caches, VM disks, node_modules — and every item's inspector shows on-disk vs logical size, compression savings, and last touched. What you see is what the filesystem said.",
    span: "lg:col-span-2",
  },
];

export function Features() {
  return (
    <section id="features" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <div className="max-w-2xl">
          <p className="font-mono text-[12px] uppercase tracking-[0.18em] text-[#c7405d]">
            02 · The toolkit
          </p>
          <h2 className="mt-3 font-display text-[clamp(1.9rem,4vw,2.9rem)] font-bold leading-[1.08] tracking-[-0.015em] text-[#3b2428]">
            Weight off your drive, weight off your mind.
          </h2>
          <p className="mt-4 text-pretty text-[16px] leading-relaxed text-[#8a6568]">
            Every tool reads the same tree the scan built — nothing
            re-walks your disk, and everything is reviewable before it
            moves.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((f) => (
            <article
              key={f.title}
              className={`card-lift card-lift-hover group relative flex flex-col overflow-hidden rounded-2xl border border-[#e5d0ca] bg-white p-6 ${f.span ?? ""}`}
            >
              <div className="flex items-center gap-3.5">
                <span className="ink-grad ink-glow flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-white">
                  {f.icon}
                </span>
                <h3 className="font-display text-[17px] font-semibold leading-tight text-[#3b2428]">
                  {f.title}
                </h3>
              </div>
              <p className="mt-3.5 text-[14.5px] leading-relaxed text-[#8a6568]">{f.body}</p>
              {f.shot && (
                <div className="relative mt-5 hidden overflow-hidden rounded-xl border border-[#eedcd7] transition-transform duration-500 group-hover:scale-[1.015] sm:block">
                  <div className="relative aspect-[5/3] w-full bg-white">
                    <Image
                      src={asset(f.shot.src)}
                      alt={f.shot.alt}
                      fill
                      sizes="(max-width: 768px) 90vw, (max-width: 1024px) 45vw, 30vw"
                      className="object-cover object-top"
                    />
                  </div>
                </div>
              )}
            </article>
          ))}

          <article className="card-lift card-lift-hover group flex flex-col justify-between overflow-hidden rounded-2xl border border-[#e0c6c0] bg-gradient-to-br from-[#fdeff1] via-[#fbf1ee] to-[#f6e9e5] p-6">
            <div>
              <div className="flex items-center gap-3.5">
                <span className="ink-grad ink-glow flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-white">
                  <svg {...iconProps}><path d="M10 3 4 5.5v4.2c0 3.6 2.5 6.1 6 7.3 3.5-1.2 6-3.7 6-7.3V5.5L10 3Z" {...stroke}/><path d="m7.6 10 1.8 1.8 3.2-3.6" {...stroke}/></svg>
                </span>
                <h3 className="font-display text-[17px] font-semibold leading-tight text-[#3b2428]">
                  Built to be trusted with your bytes
                </h3>
              </div>
              <p className="mt-3.5 text-[14.5px] leading-relaxed text-[#8a6568]">
                No Electron, no browser bloat — a Tauri shell the size of
                a few megabytes around a Rust core. Anonymous analytics,
                off unless configured, one checkbox to silence.
              </p>
            </div>
            <a
              href={DOWNLOAD_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-1.5 text-[14px] font-semibold text-[#c7405d] transition-colors hover:text-[#d8506b]"
            >
              Grab the build
              <svg width="13" height="13" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M3 8h10m0 0L9 4m4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </article>
        </div>
      </div>
    </section>
  );
}
