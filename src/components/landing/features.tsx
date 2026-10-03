"use client";

/*
 * The toolkit — six compact cards, one row of copy each. No in-card
 * screenshots (the film strip and the two videos already carry the
 * footage), no implementation talk: what it does for you, one line.
 */
const iconProps = { width: 18, height: 18, viewBox: "0 0 20 20", fill: "none" } as const;
const stroke = { stroke: "currentColor", strokeWidth: 1.7, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };

const FEATURES = [
  {
    icon: <svg {...iconProps}><path d="M4 6.5h7M4 10h4" {...stroke}/><path d="M13 11.5 16.5 8l-3.5-3.5" {...stroke}/><path d="M16.5 8H9" {...stroke}/></svg>,
    title: "Duplicates, byte for byte",
    body: "Finds files that are truly identical by comparing what's inside them. Keep one copy, queue the rest for cleanup.",
  },
  {
    icon: <svg {...iconProps}><rect x="3" y="4.5" width="14" height="11" rx="2.2" {...stroke}/><path d="M7.2 8.4a1.6 1.6 0 1 0 .001 3.2 1.6 1.6 0 0 0 0-3.2Z" {...stroke}/><path d="M9.8 10c1.6-2.6 4.8-2.6 5.6 0-.8 2.6-4 2.6-5.6 0Z" {...stroke} opacity={0.45}/></svg>,
    title: "Applications and their leftovers",
    body: "See what each app really takes up, including the files its uninstaller quietly leaves behind.",
  },
  {
    icon: <svg {...iconProps}><path d="M3.5 10a6.5 6.5 0 0 1 11-4.7L16.5 7" {...stroke}/><path d="M16.5 10a6.5 6.5 0 0 1-11 4.7L3.5 13" {...stroke}/><path d="M16.7 4v3h-3M3.3 16v-3h3" {...stroke} opacity={0.45}/></svg>,
    title: "Snapshots",
    body: "Save the shape of a folder today, then compare it against next month to see exactly what grew.",
  },
  {
    icon: <svg {...iconProps}><path d="M10 3v14M6.8 5.5 13.2 8.5v3L6.8 14.5" {...stroke}/><path d="M6.8 8.5 13.2 11.5" {...stroke} opacity={0.45}/></svg>,
    title: "Quick Wins",
    body: "A ranked list of the usual suspects: caches, virtual machine disks, old downloads. The fastest wins, first.",
  },
  {
    icon: <svg {...iconProps}><rect x="2.5" y="3" width="11" height="7.5" rx="1.5" {...stroke}/><path d="M6 13.5h4M8 10.5v3" {...stroke}/><path d="M15.5 7.5v6a2 2 0 0 1-2 2H9" {...stroke} opacity={0.45}/></svg>,
    title: "A live monitor",
    body: "CPU, memory, network and disk, with the top processes, refreshed every two seconds.",
  },
  {
    icon: <svg {...iconProps}><circle cx="10" cy="10" r="6.5" {...stroke}/><path d="M10 6.5v3.5l2.5 2.5" {...stroke}/><path d="M10 3.5v1.5M10 15v1.5M3.5 10H5M15 10h1.5" {...stroke} opacity={0.45}/></svg>,
    title: "The inspector",
    body: "Click anything for the full story: real size on disk, compression savings, when it was last touched.",
  },
];

export function Features() {
  return (
    <section id="features" className="py-14 sm:py-18">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <div className="max-w-2xl">
          <p className="font-mono text-[12px] uppercase tracking-[0.18em] text-[#b03852]">
            03 · The toolkit
          </p>
          <h2 className="mt-3 font-display text-[clamp(1.9rem,4vw,2.9rem)] font-bold leading-[1.08] tracking-[-0.015em] text-[#3b2428]">
            Where the space goes, and how to get it back.
          </h2>
          <p className="mt-4 text-pretty text-[16px] leading-relaxed text-[#8a6568]">
            Every tool reads the map your scan already built, so nothing
            walks your disk twice.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((f) => (
            <article
              key={f.title}
              className="card-lift card-lift-hover flex flex-col rounded-2xl border border-[#e5d0ca] bg-white p-6"
            >
              <div className="flex items-center gap-3.5">
                <span className="ink-grad ink-glow flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-white">
                  {f.icon}
                </span>
                <h3 className="font-display text-[16.5px] font-semibold leading-tight text-[#3b2428]">
                  {f.title}
                </h3>
              </div>
              <p className="mt-3.5 text-[14px] leading-relaxed text-[#8a6568]">{f.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
