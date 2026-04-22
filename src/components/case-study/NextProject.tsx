"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useTranslation } from "@/lib/LocaleContext";
import type { CaseStudy } from "@/data/content";

interface NextProjectProps {
  next: CaseStudy;
}

export default function NextProject({ next }: NextProjectProps) {
  const { t } = useTranslation();
  const { palette } = next;

  return (
    <Link
      href={`/work/${next.slug}`}
      className="group relative block overflow-hidden focus:outline-none focus-visible:outline-2 focus-visible:outline-brand-blue focus-visible:outline-offset-4"
      style={{ backgroundColor: palette.background, color: palette.ink }}
    >
      {/* Pattern */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none transition-opacity duration-700 group-hover:opacity-[0.08]"
        style={{
          color: palette.primary,
          backgroundImage:
            "url('/images/patterns/pattern-disciplines.svg')",
          backgroundSize: "180px",
          backgroundRepeat: "repeat",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-[1440px] mx-auto px-6 sm:px-8 md:px-12 lg:px-20 py-24 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="grid grid-cols-1 lg:grid-cols-[1fr_auto] items-end gap-8 lg:gap-16"
        >
          <div>
            <div
              className="text-[10px] uppercase tracking-[0.3em] font-bold mb-5"
              style={{ color: palette.primary }}
            >
              {t("Next project", "المشروع التالي")}
            </div>
            <div className="flex items-center gap-4 md:gap-6">
              <h2
                className="font-lyon font-bold tracking-tight text-5xl md:text-7xl lg:text-[6.5rem] leading-[0.95] transition-transform duration-700 group-hover:translate-x-3 rtl:group-hover:-translate-x-3"
                style={{ color: palette.ink }}
              >
                {t(next.title.en, next.title.ar)}
              </h2>
            </div>
            <p
              className="mt-6 text-base md:text-lg max-w-xl leading-relaxed"
              style={{ color: palette.inkSoft }}
            >
              {t(next.shortDescription.en, next.shortDescription.ar)}
            </p>
          </div>

          <div className="flex flex-col items-end gap-5 shrink-0">
            <div
              className="w-14 h-14 md:w-16 md:h-16 rounded-full border flex items-center justify-center transition-all duration-500 group-hover:scale-110"
              style={{
                borderColor: `${palette.ink}40`,
                backgroundColor: `${palette.primary}15`,
              }}
            >
              <svg
                className="w-5 h-5 md:w-6 md:h-6 rtl-flip"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                style={{ color: palette.primary }}
                aria-hidden="true"
              >
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </div>
            <span
              className="text-[10px] uppercase tracking-[0.3em] font-bold"
              style={{ color: palette.inkSoft }}
            >
              {t("Open case study", "افتح دراسة الحالة")}
            </span>
          </div>
        </motion.div>
      </div>
    </Link>
  );
}
