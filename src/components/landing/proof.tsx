"use client";

/*
 * Proof strip — the four load-bearing facts, one slim hairline row
 * right under the hero. Replaces the old dark stats band: same
 * credibility, a third of the height, no codebase talk.
 */
const FACTS = [
  {
    title: "Full scans in seconds",
    icon: (
      <svg width="15" height="15" viewBox="0 0 16 16" fill="none" aria-hidden="true">
        <path d="M8 2v10M4.5 4 6 8l2-1 2 1 1.5-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="4.5" cy="13.2" r="1.4" fill="currentColor" />
        <circle cx="8" cy="13.2" r="1.4" fill="currentColor" />
        <circle cx="11.5" cy="13.2" r="1.4" fill="currentColor" />
      </svg>
    ),
  },
  {
    title: "Nine views of one scan",
    icon: (
      <svg width="15" height="15" viewBox="0 0 16 16" fill="none" aria-hidden="true">
        <rect x="2.5" y="2.5" width="4.5" height="4.5" rx="1" stroke="currentColor" strokeWidth="1.5" />
        <rect x="9" y="2.5" width="4.5" height="4.5" rx="1" stroke="currentColor" strokeWidth="1.5" />
        <rect x="2.5" y="9" width="4.5" height="4.5" rx="1" stroke="currentColor" strokeWidth="1.5" />
        <rect x="9" y="9" width="4.5" height="4.5" rx="1" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    title: "Cleanup through a queue you control",
    icon: (
      <svg width="15" height="15" viewBox="0 0 16 16" fill="none" aria-hidden="true">
        <path d="M3 5.5h10M4.5 5.5v7a1.5 1.5 0 0 0 1.5 1.5h4a1.5 1.5 0 0 0 1.5-1.5v-7M6.5 5.5v-2a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Runs entirely on your machine",
    icon: (
      <svg width="15" height="15" viewBox="0 0 16 16" fill="none" aria-hidden="true">
        <rect x="2.5" y="3" width="11" height="7.5" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
        <path d="M6 13.5h4M8 10.5v3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
];

export function Proof() {
  return (
    <section aria-label="The short version" className="py-8 sm:py-10">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <ul className="grid grid-cols-1 gap-x-8 gap-y-5 sm:grid-cols-2 lg:grid-cols-4">
          {FACTS.map((f) => (
            <li key={f.title} className="flex items-center gap-3">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[rgba(216,80,107,0.1)] text-[#b03852]">
                {f.icon}
              </span>
              <p className="text-[14px] font-semibold leading-snug text-[#3b2428]">
                {f.title}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
