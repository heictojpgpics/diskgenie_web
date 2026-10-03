"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FAQS } from "@/lib/site";

export function Faq() {
  return (
    <section id="faq" className="petal-wash py-14 sm:py-16">
      <div className="mx-auto max-w-3xl px-5 sm:px-6">
        <div className="text-center">
          <p className="font-mono text-[12px] uppercase tracking-[0.18em] text-[#b03852]">
            07 · FAQ
          </p>
          <h2 className="mt-3 font-display text-[clamp(1.9rem,4vw,2.9rem)] font-bold leading-[1.08] tracking-[-0.015em] text-[#3b2428]">
            Straight answers.
          </h2>
        </div>

          <Accordion type="single" collapsible className="mt-8 space-y-3">
          {FAQS.map((f, i) => (
            <AccordionItem
              key={f.q}
              value={`item-${i}`}
              className="rounded-2xl border border-[#e5d0ca] bg-white px-5 data-[state=open]:border-[#d8506b]/30 data-[state=open]:shadow-[0_2px_14px_rgba(216,80,107,0.1)] sm:px-6"
            >
              <AccordionTrigger className="gap-4 py-5 text-left text-[16px] font-semibold leading-snug text-[#3b2428] hover:no-underline [&>svg]:shrink-0">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="pb-5 text-[14.5px] leading-relaxed text-[#8a6568]">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
