"use client";

import { motion } from "framer-motion";
import { useTranslation } from "@/lib/LocaleContext";

const steps = [
  {
    num: "01",
    title: { en: "Discover", ar: "اكتشاف" },
    body: {
      en: "We listen first. Research, audit, positioning — we understand the business, the market, and the audience before we draw anything.",
      ar: "نُنصت أولاً. بحثٌ، تدقيقٌ، وتموضع — نفهم العمل والسوق والجمهور قبل أن نرسم شيئاً.",
    },
  },
  {
    num: "02",
    title: { en: "Define", ar: "تعريف" },
    body: {
      en: "Understanding turns into direction. A clear strategy, a defined voice, a visual decision — we agree on everything before we move.",
      ar: "نُحوّل الفهم إلى اتجاه. استراتيجيةٌ واضحة، صوتٌ محدّد، وقرارٌ بصري — نتّفق على كل شيء قبل أن نتقدّم.",
    },
  },
  {
    num: "03",
    title: { en: "Design", ar: "تصميم" },
    body: {
      en: "Ideas take shape. Identity, motion, and product move together in one track — no gap between stages.",
      ar: "تأخذ الأفكار شكلها. الهوية، الموشن، والمنتج تتناغم في مسارٍ واحد — بلا فجوة بين المراحل.",
    },
  },
  {
    num: "04",
    title: { en: "Deliver", ar: "تسليم" },
    body: {
      en: "We ship what works. Ready files, shipped code, documented systems — performance lasts past launch, without us hovering.",
      ar: "نُسلّم ما يعمل. ملفاتٌ جاهزة، كودٌ منشور، أنظمةٌ موثّقة — يستمرّ الأداء بعد الإطلاق بلا إشرافٍ منّا.",
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
              "Four phases, one outcome. You see progress at every step — no surprises, no ambiguity.",
              "أربعُ مراحل، نتيجةٌ واحدة. ترى التقدّم في كل خطوة — بلا مفاجآت، بلا ضبابية."
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
