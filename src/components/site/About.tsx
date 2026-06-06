"use client";

import { useReveal } from "@/lib/useReveal";

export function About() {
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
          <span className="text-[11px] text-white/40 md:text-[12px]">
            About
          </span>
          <span className="inline-flex items-center gap-2.5 rounded-full border border-[var(--color-accent)]/30 bg-[var(--color-accent)]/5 px-3 py-1.5">
            <span className="status-dot block h-1.5 w-1.5 rounded-full bg-[var(--color-accent)]" />
            <span className="text-[11px] text-[var(--color-accent)] md:text-[12px]">
              Currently accepting projects
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
            We are an independent studio working at the intersection of{" "}
            <span className="italic text-[var(--color-accent)]">brand</span>,{" "}
            <span className="italic text-[var(--color-accent)]">digital</span>{" "}
            and{" "}
            <span className="italic text-[var(--color-accent)]">motion</span> —
            building work that earns attention by deserving it.
          </p>

          <div
            ref={meta.ref}
            className={`reveal-up md:col-span-3 md:col-start-10 flex flex-col gap-6 text-[14px] text-white/55 ${
              meta.visible ? "is-visible" : ""
            }`}
            style={{ transitionDelay: "200ms" }}
          >
            <p>Founded in 2023. Based wherever the work is.</p>
            <p>
              Selected for clients in construction, hospitality, technology and
              culture.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
