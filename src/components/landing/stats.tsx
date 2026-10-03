"use client";

const STATS = [
  { n: "9", label: "ways to see one scan", sub: "treemap, sunburst, flame, bubbles, mind map…" },
  { n: "0", label: "direct-delete APIs", sub: "Recycle Bin only — enforced by CI on every build" },
  { n: "2", label: "engines, one honest fallback", sub: "NTFS turbo + standard, never a silent downgrade" },
  { n: "5", label: "handcrafted themes", sub: "light, dark, Ember, Tide — and the Blossom you're in" },
] as const;

export function Stats() {
  return (
    <section className="relative py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <div className="rosewood-band relative overflow-hidden rounded-3xl px-6 py-12 sm:px-12 sm:py-14">
          <div
            className="absolute inset-0 opacity-[0.35]"
            style={{
              backgroundImage:
                "radial-gradient(rgba(255,255,255,0.16) 1px, transparent 1px)",
              backgroundSize: "26px 26px",
            }}
            aria-hidden="true"
          />
          <dl className="relative grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
            {STATS.map((s) => (
              <div key={s.label} className="text-center sm:text-left">
                <dt className="order-2 mt-2 text-[14px] font-medium leading-snug text-[#f0d9dd]">
                  {s.label}
                </dt>
                <dd className="order-1 font-display text-[2.6rem] font-bold leading-none text-transparent tnum" style={{ backgroundImage: "linear-gradient(160deg,#f6b8c5,#ec6d84 55%,#d8506b)", WebkitBackgroundClip: "text", backgroundClip: "text" }}>
                  {s.n}
                </dd>
                <p className="order-3 mt-2 text-[12.5px] leading-relaxed text-[#c9a3ab]">{s.sub}</p>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
