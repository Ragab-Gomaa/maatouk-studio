"use client";

import { motion } from "framer-motion";
import { useTranslation } from "@/lib/LocaleContext";

type Fact = {
  value: string;
  label: { en: string; ar: string };
  note: { en: string; ar: string };
};

const facts: Fact[] = [
  {
    value: "15+",
    label: { en: "Projects", ar: "مشروع" },
    note: {
      en: "Identities, motion, websites, and apps.",
      ar: "هويّات، موشن جرافيك، مواقع، وتطبيقات.",
    },
  },
  {
    value: "3+",
    label: { en: "Years of craft", ar: "سنوات من الحِرفة" },
    note: {
      en: "Quiet work, consistent standards.",
      ar: "عملٌ هادئ، وجودةٌ ثابتة.",
    },
  },
  {
    value: "10+",
    label: { en: "Clients", ar: "عميل" },
    note: {
      en: "Brands that trusted us from day one.",
      ar: "علاماتٌ وثقت بنا منذ البداية.",
    },
  },
  {
    value: "24h",
    label: { en: "First reply", ar: "أوّل ردّ" },
    note: {
      en: "We respond to every brief within a day.",
      ar: "نردّ على كل طلبٍ خلال يومٍ واحد.",
    },
  },
];

export default function FactsSection() {
  const { t, locale } = useTranslation();

  return (
    <section className="py-14 md:py-20 bg-surface relative">
      <div className="max-w-[1320px] mx-auto px-6 sm:px-8 md:px-12 lg:px-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="grid grid-cols-1 lg:grid-cols-[auto_1fr] gap-6 lg:gap-16 items-end mb-14 md:mb-16"
        >
          <div>
            <span className="kicker-pill mb-6">
              <span className="kicker-pill-dot" />
              {t("By the numbers", "بالأرقام")}
            </span>
            <h2
              className={`font-lyon font-bold tracking-[-0.03em] text-4xl md:text-5xl lg:text-6xl max-w-2xl ${
                locale === "ar" ? "leading-[1.25]" : "leading-[1.05]"
              }`}
            >
              {t("Numbers over words.", "الأرقام فوق الكلام.")}
            </h2>
          </div>
          <p className="text-base md:text-lg text-ink-soft leading-relaxed max-w-lg lg:pb-3">
            {t(
              "Every number here is verifiable — this is what we've shipped so far.",
              "كل رقمٍ هنا قابلٌ للتحقّق — هذا ما أنجزناه حتى الآن."
            )}
          </p>
        </motion.div>

        {/* Stats grid — editorial, hairline dividers */}
        <motion.ul
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1 } },
          }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-black/[0.08] rounded-[24px] md:rounded-[28px] overflow-hidden border border-black/[0.06]"
        >
          {facts.map((f, i) => (
            <motion.li
              key={i}
              variants={{
                hidden: { opacity: 0, y: 16 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6 }}
              className="bg-surface p-7 md:p-9 lg:p-10"
            >
              <div
                className={`font-semibold text-brand-blue mb-5 ${
                  locale === "ar"
                    ? "text-xs"
                    : "text-[10px] uppercase tracking-[0.25em]"
                }`}
              >
                {t(f.label.en, f.label.ar)}
              </div>
              <div className="font-lyon font-bold text-5xl md:text-6xl lg:text-7xl text-ink tracking-[-0.03em] leading-none mb-5">
                {f.value}
              </div>
              <div className="text-xs md:text-sm text-ink-soft leading-relaxed">
                {t(f.note.en, f.note.ar)}
              </div>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
