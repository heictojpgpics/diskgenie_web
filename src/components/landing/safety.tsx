"use client";

/*
 * Safe by design — one compact dark band. The deep-rosewood surface
 * gives the page its second dark beat (the closing CTA is the third)
 * and the safety story stays human: what the rules mean for you.
 */
const GUARANTEES = [
  {
    title: "Recycle Bin or nothing",
    body: "Cleanup goes to the Recycle Bin on Windows and the Trash on Mac. Anything that could not be recovered that way is refused before it moves.",
  },
  {
    title: "Cloud files stay cloud files",
    body: "OneDrive and other placeholder files are never opened by a scan, so your storage never quietly fills up behind your back.",
  },
  {
    title: "Your data stays put",
    body: "Scans run entirely on your machine. There is no account, and no file names leave your computer.",
  },
];

export function Safety() {
  return (
    <section id="safety" className="py-14 sm:py-18">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <div className="rosewood-band relative overflow-hidden rounded-3xl px-6 py-12 sm:px-12 sm:py-14">
          <div
            className="absolute inset-0 opacity-[0.3]"
            style={{
              backgroundImage:
                "radial-gradient(rgba(255,255,255,0.16) 1px, transparent 1px)",
              backgroundSize: "26px 26px",
            }}
            aria-hidden="true"
          />
          <div className="relative mx-auto max-w-2xl text-center">
            <p className="font-mono text-[12px] uppercase tracking-[0.18em] text-[#f6b8c5]">
              05 · Safe by design
            </p>
            <h2 className="mt-3 font-display text-[clamp(1.9rem,4vw,2.9rem)] font-bold leading-[1.08] tracking-[-0.015em] text-white">
              Deleting is deliberate.
            </h2>
            <p className="mt-4 text-pretty text-[16px] leading-relaxed text-[#e5c4cc]">
              A cleanup tool earns its keep on the delete path. Every
              removal in DiskGenie passes the same three gates.
            </p>
          </div>

          <ul className="relative mt-10 grid gap-4 sm:grid-cols-3">
            {GUARANTEES.map((g) => (
              <li
                key={g.title}
                className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-[2px]"
              >
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[rgba(236,109,132,0.2)] text-[#f6b8c5]">
                    <svg width="12" height="12" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                      <path d="m3.5 8.5 3 3 6-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <div>
                    <p className="text-[15px] font-semibold leading-snug text-white">{g.title}</p>
                    <p className="mt-1.5 text-[13.5px] leading-relaxed text-[#dcb8c0]">{g.body}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
