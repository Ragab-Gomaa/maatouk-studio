"use client";

import { motion } from "framer-motion";
import { useTranslation } from "@/lib/LocaleContext";

const steps = [
  {
    num: "01",
    title: { en: "Discover", ar: "اكتشاف" },
    body: {
      en: "We listen first. Research, audit, positioning — we understand the business before we design a pixel.",
      ar: "نستمع أولاً. بحث، تدقيق، تموضع — نفهم العمل قبل أن نصمّم بكسلاً واحداً.",
    },
  },
  {
    num: "02",
    title: { en: "Define", ar: "تعريف" },
    body: {
      en: "Insights turn into direction. We lock the strategy, the voice, and the visual territory before moving forward.",
      ar: "الرؤى تتحول إلى اتجاه. نثبّت الاستراتيجية والصوت والأفق البصري قبل التقدم.",
    },
  },
  {
    num: "03",
    title: { en: "Design", ar: "تصميم" },
    body: {
      en: "Ideas take form. Identity, motion, and product come together in sync — always designed, always built.",
      ar: "الأفكار تتجسّد. الهوية والحركة والمنتج تتناغم — مُصممة دائماً، ومُصنّعة دائماً.",
    },
  },
  {
    num: "04",
    title: { en: "Deliver", ar: "تسليم" },
    body: {
      en: "We ship. Real files, real code, real systems — with guidelines that let the work keep performing.",
      ar: "نُطلق. ملفات حقيقية، كود حقيقي، أنظمة حقيقية — مع دلائل تُبقي العمل يؤدي بعد التسليم.",
    },
  },
];

export default function ProcessSection() {
  const { t } = useTranslation();

  return (
    <section className="py-14 md:py-20 bg-surface relative">
      <div className="max-w-[1320px] mx-auto px-6 sm:px-8 md:px-12 lg:px-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="grid grid-cols-1 lg:grid-cols-[auto_1fr] gap-6 lg:gap-16 items-end mb-14 md:mb-20"
        >
          <div>
            <span className="inline-flex items-center gap-2 pl-2 pr-4 py-1 bg-surface-raised rounded-full border border-black/[0.06] text-[11px] uppercase tracking-[0.2em] font-semibold text-ink-muted mb-6 shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-blue" />
              {t("Process", "المنهجية")}
            </span>
            <h2 className="font-lyon font-bold tracking-[-0.03em] text-4xl md:text-5xl lg:text-6xl leading-[0.95] max-w-2xl">
              {t("From insight", "من الرؤية")}
              <br />
              <span className="text-brand-blue italic">
                {t("to impact.", "إلى الأثر.")}
              </span>
            </h2>
          </div>
          <p className="text-base md:text-lg text-ink-soft leading-relaxed max-w-lg lg:pb-3">
            {t(
              "Every engagement follows four clear phases. You see progress at each one — no surprises, no drift.",
              "كل التزام يسير في أربع مراحل واضحة. ترى التقدم في كل واحدة — بلا مفاجآت، بلا انحراف."
            )}
          </p>
        </motion.div>

        {/* Steps */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1 } },
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5"
        >
          {steps.map((s, i) => (
            <motion.article
              key={i}
              variants={{
                hidden: { opacity: 0, y: 16 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6 }}
              className="group relative studio-card rounded-[24px] p-7 md:p-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="font-lyon text-xl font-bold text-brand-blue">
                  {s.num}
                </span>
                <span className="h-px flex-1 bg-black/[0.08]" />
                {i < steps.length - 1 && (
                  <svg
                    className="w-3.5 h-3.5 text-ink-whisper rtl-flip"
                    viewBox="0 0 14 14"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    aria-hidden="true"
                  >
                    <path d="M3 7h8M8 4l3 3-3 3" />
                  </svg>
                )}
              </div>
              <h3 className="font-lyon font-bold text-2xl md:text-[1.75rem] tracking-[-0.02em] leading-none mb-4">
                {t(s.title.en, s.title.ar)}
              </h3>
              <p className="text-sm md:text-[15px] text-ink-soft leading-relaxed">
                {t(s.body.en, s.body.ar)}
              </p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
