"use client";

import { motion } from "framer-motion";
import { useTranslation } from "@/lib/LocaleContext";

interface ProjectNarrativeProps {
  challenge?: { en: string; ar: string };
  approach?: { en: string; ar: string };
  outcome?: { en: string; ar: string };
}

type NarrativeEntry = {
  label: { en: string; ar: string };
  body: { en: string; ar: string };
  heading: { en: string; ar: string };
};

export default function ProjectNarrative({
  challenge,
  approach,
  outcome,
}: ProjectNarrativeProps) {
  const { t } = useTranslation();

  const entries: NarrativeEntry[] = [];
  if (challenge) {
    entries.push({
      label: { en: "The Challenge", ar: "التحدي" },
      heading: { en: "The problem we inherited.", ar: "المشكلة التي ورثناها." },
      body: challenge,
    });
  }
  if (approach) {
    entries.push({
      label: { en: "Our Approach", ar: "منهجنا" },
      heading: { en: "How we thought about it.", ar: "كيف فكّرنا فيها." },
      body: approach,
    });
  }
  if (outcome) {
    entries.push({
      label: { en: "The Outcome", ar: "النتيجة" },
      heading: { en: "What shipped, and who uses it.", ar: "ما تم تسليمه، ومن يستخدمه." },
      body: outcome,
    });
  }

  if (entries.length === 0) return null;

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-8 md:px-12 lg:px-20 space-y-20 md:space-y-28">
        {entries.map((entry, i) => (
          <motion.article
            key={i}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="grid grid-cols-1 lg:grid-cols-[240px_1fr] gap-6 lg:gap-20"
          >
            {/* Left: label + large index */}
            <div className="flex flex-col items-start gap-3">
              <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-[0.3em] text-brand-blue">
                {String(i + 1).padStart(2, "0")} — {t(entry.label.en, entry.label.ar)}
              </span>
              <div className="h-px w-16 bg-brand-blue/25" />
            </div>

            {/* Right: heading + body */}
            <div>
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-lyon font-bold tracking-tight leading-[1.1] mb-6 max-w-2xl">
                {t(entry.heading.en, entry.heading.ar)}
              </h3>
              <p className="text-base md:text-lg text-black/65 leading-relaxed max-w-3xl">
                {t(entry.body.en, entry.body.ar)}
              </p>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
