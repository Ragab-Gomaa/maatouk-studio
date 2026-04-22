"use client";

import { motion } from "framer-motion";
import { useTranslation } from "@/lib/LocaleContext";

interface NarrativeBlockProps {
  label: string;
  heading: { en: string; ar: string };
  body: { en: string; ar: string };
}

export default function NarrativeBlock({ label, heading, body }: NarrativeBlockProps) {
  const { t } = useTranslation();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      className="grid grid-cols-1 lg:grid-cols-[240px_1fr] gap-6 lg:gap-16"
    >
      <div>
        <div className="flex items-center gap-3 mb-2">
          <span className="w-2 h-2 rotate-45 bg-brand-blue" />
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-brand-blue">
            {label}
          </span>
        </div>
      </div>

      <div>
        <h3 className="text-2xl md:text-3xl lg:text-4xl font-lyon font-bold tracking-tight mb-5 max-w-2xl leading-[1.15]">
          {t(heading.en, heading.ar)}
        </h3>
        <p className="text-base md:text-lg text-black/65 leading-relaxed max-w-3xl">
          {t(body.en, body.ar)}
        </p>
      </div>
    </motion.div>
  );
}
