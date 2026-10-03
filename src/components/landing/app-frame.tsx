"use client";
import { cn } from "@/lib/utils";

/*
 * AppFrame — the landing site's window chrome for real app footage.
 * macOS-style traffic lights (softened to sit in the blush palette),
 * a mono title, and a hairline shell with a soft deep shadow.
 */
export function AppFrame({
  title = "DiskGenie",
  children,
  className,
  glow = false,
}: {
  title?: string;
  children: React.ReactNode;
  className?: string;
  glow?: boolean;
}) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-xl hairline bg-white",
        glow
          ? "ink-glow-strong"
          : "shadow-[0_2px_6px_rgba(59,36,40,0.06),0_24px_60px_-18px_rgba(59,36,40,0.28)]",
        className,
      )}
    >
      <div className="relative flex h-9 shrink-0 items-center gap-2 border-b border-[#eedcd7] bg-[#fbf1ee]/90 px-3.5">
        <span className="flex items-center gap-[7px]" aria-hidden="true">
          <span className="h-[11px] w-[11px] rounded-full bg-[#ed6a5e] shadow-[inset_0_0_0_1px_rgba(0,0,0,0.08)]" />
          <span className="h-[11px] w-[11px] rounded-full bg-[#f4bf4f] shadow-[inset_0_0_0_1px_rgba(0,0,0,0.08)]" />
          <span className="h-[11px] w-[11px] rounded-full bg-[#62c554] shadow-[inset_0_0_0_1px_rgba(0,0,0,0.08)]" />
        </span>
        <span className="pointer-events-none absolute inset-x-0 text-center font-mono text-[11px] tracking-wide text-[#836066]">
          {title}
        </span>
      </div>
      {children}
    </div>
  );
}
