"use client";

import { useReveal } from "@/lib/useReveal";
import { useLang } from "@/components/i18n/LangProvider";
import { Statement } from "@/components/ui/Statement";

export function About() {
  const { copy } = useLang();
  const head = useReveal<HTMLDivElement>();
  const main = useReveal<HTMLParagraphElement>();
  const meta = useReveal<HTMLDivElement>();

  return (
    <section
      id="about"
      className="relative w-full bg-[var(--color-bg)] py-14 md:py-20"
    >
      <div className="mx-auto w-full max-w-[1600px] px-6 md:px-14">
        <div
          ref={head.ref}
          className={`reveal-up mb-6 flex items-center justify-between md:mb-12 ${head.visible ? "is-visible" : ""}`}
        >
          <span className="text-[11px] text-white/55 md:text-[12px]">
            {copy.about.label}
          </span>
          <span className="inline-flex items-center gap-2.5 rounded-full border border-[var(--color-accent)]/30 bg-[var(--color-accent)]/5 px-3 py-1.5">
            <span className="status-dot block h-1.5 w-1.5 rounded-full bg-[var(--color-accent)]" />
            <span className="text-[11px] text-[var(--color-accent)] md:text-[12px]">
              {copy.about.status}
            </span>
          </span>
        </div>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-12">
          <p
            ref={main.ref}
            className={`reveal md:col-span-7 md:col-start-2 font-serif text-[24px] leading-[1.25] text-white sm:text-[32px] md:text-[44px] lg:text-[52px] ${
              main.visible ? "is-visible" : ""
            }`}
          >
            <Statement segments={copy.about.statement} />
          </p>

          <div
            ref={meta.ref}
            className={`reveal-up md:col-span-3 md:col-start-10 flex flex-col gap-6 text-[14px] text-white/65 ${
              meta.visible ? "is-visible" : ""
            }`}
            style={{ transitionDelay: "200ms" }}
          >
            <p>{copy.about.meta1}</p>
            <p>{copy.about.meta2}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
