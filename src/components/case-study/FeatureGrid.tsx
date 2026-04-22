"use client";

import { motion } from "framer-motion";
import type { Feature } from "@/data/content";
import { useTranslation } from "@/lib/LocaleContext";

interface FeatureGridProps {
  features: Feature[];
  label?: string;
  heading?: { en: string; ar: string };
}

export default function FeatureGrid({ features, label, heading }: FeatureGridProps) {
  const { t } = useTranslation();

  return (
    <section>
      <div className="flex items-center gap-3 mb-5">
        <span className="w-2 h-2 rotate-45 bg-brand-blue" />
        <span className="text-xs font-medium uppercase tracking-[0.2em] text-brand-blue">
          {label ?? t("Features", "المميزات")}
        </span>
      </div>

      {heading && (
        <motion.h3
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          className="text-3xl md:text-4xl font-lyon font-bold tracking-tight mb-10 max-w-2xl"
        >
          {t(heading.en, heading.ar)}
        </motion.h3>
      )}

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.08 } },
        }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
      >
        {features.map((f, i) => (
          <motion.div
            key={i}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            className="group relative p-6 md:p-8 bg-white border border-black/[0.06] hover:border-brand-blue/30 transition-colors"
          >
            <div className="text-[11px] font-bold tracking-wider text-brand-blue/60 mb-4">
              0{i + 1}
            </div>
            <h4 className="text-lg md:text-xl font-lyon font-bold mb-3 group-hover:text-brand-blue transition-colors">
              {t(f.title.en, f.title.ar)}
            </h4>
            <p className="text-sm text-black/60 leading-relaxed">
              {t(f.desc.en, f.desc.ar)}
            </p>

            <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-brand-blue group-hover:w-full transition-all duration-500" />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
