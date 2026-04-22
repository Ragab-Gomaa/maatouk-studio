"use client";

import { motion } from "framer-motion";
import { useTranslation } from "@/lib/LocaleContext";
import type { CaseStudy } from "@/data/content";

interface AtAGlanceProps {
  project: CaseStudy;
}

export default function AtAGlance({ project }: AtAGlanceProps) {
  const { t } = useTranslation();

  const rows: { label: { en: string; ar: string }; value: React.ReactNode }[] = [
    {
      label: { en: "Client", ar: "العميل" },
      value: t(project.client.en, project.client.ar),
    },
    {
      label: { en: "Category", ar: "التصنيف" },
      value: t(project.category.en, project.category.ar),
    },
    {
      label: { en: "Year", ar: "السنة" },
      value: project.year,
    },
    {
      label: { en: "Live at", ar: "الموقع" },
      value: (
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-brand-blue hover:underline focus:outline-none focus-visible:outline-2 focus-visible:outline-brand-blue focus-visible:outline-offset-2"
        >
          <span className="truncate max-w-[200px]">
            {project.liveUrl.replace(/^https?:\/\//, "").replace(/\/$/, "")}
          </span>
          <svg
            className="w-3 h-3 shrink-0 rtl-flip"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            aria-hidden="true"
          >
            <path d="M7 17L17 7M7 7h10v10" />
          </svg>
        </a>
      ),
    },
  ];

  return (
    <section className="py-16 md:py-20 bg-white border-b border-black/[0.06]">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-8 md:px-12 lg:px-20">
        <motion.dl
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.08 } },
          }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-6"
        >
          {rows.map((row, i) => (
            <motion.div
              key={i}
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <dt className="text-[10px] uppercase tracking-[0.25em] font-bold text-black/40 mb-2">
                {t(row.label.en, row.label.ar)}
              </dt>
              <dd className="text-sm md:text-base font-medium text-black">
                {row.value}
              </dd>
            </motion.div>
          ))}
        </motion.dl>
      </div>
    </section>
  );
}
