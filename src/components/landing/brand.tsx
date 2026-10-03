"use client";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { asset } from "@/lib/asset";

/*
 * BrandMark — the real product mark (the disk + broom cutout over the
 * brand gradient circle), exactly as the app's TitleBar renders it.
 */
export function BrandMark({
  size = 32,
  className,
}: {
  size?: number;
  className?: string;
}) {
  return (
    <span
      className={cn("relative inline-block shrink-0 overflow-hidden rounded-full ink-grad ink-glow", className)}
      style={{ width: size, height: size }}
      aria-hidden="true"
    >
      <Image
        src={asset("/brand/mark-512.png")}
        alt=""
        width={size * 4}
        height={size * 4}
        className="h-full w-full object-contain"
        priority
      />
    </span>
  );
}

export function Wordmark({ className }: { className?: string }) {
  return (
    <span className={cn("font-display font-semibold tracking-tight text-[#3b2428]", className)}>
      DiskGenie
    </span>
  );
}
