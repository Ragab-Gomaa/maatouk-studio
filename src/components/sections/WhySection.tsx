"use client";

import { motion } from "framer-motion";
import { useTranslation } from "@/lib/LocaleContext";

type Principle = {
  icon: React.ReactNode;
  title: { en: string; ar: string };
  body: { en: string; ar: string };
};

const principles: Principle[] = [
  {
    // Chess knight — strategic thinking
    icon: (
      <span
        className="text-[22px] leading-none"
        style={{ fontVariantEmoji: "text" }}
        aria-hidden="true"
      >
        ♞
      </span>
    ),
    title: { en: "Strategy first", ar: "استراتيجية أولاً" },
    body: {
      en: "Every project starts with questions, not templates. We understand the business, the audience, and the market — before we draw a single thing. Form without purpose is just decoration.",
      ar: "كل مشروع يبدأ بأسئلة، لا بقوالب. نفهم العمل، الجمهور، والسوق — قبل أن نرسم شيئاً. الشكلُ بلا هدفٍ مجرّد زخرفة.",
    },
  },
  {
    // Analog clock with hands — time/patience
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-5 h-5"
      >
        <circle cx="12" cy="12" r="9" />
        <line x1="12" y1="12" x2="8.5" y2="9" />
        <line x1="12" y1="12" x2="15.5" y2="7.5" />
        <circle cx="12" cy="12" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
    title: { en: "Quality before speed", ar: "الجودة قبل السرعة" },
    body: {
      en: "We promise better, not faster. Work that lasts needs time to breathe, to be reviewed, iterated, refined. We don't cut the road short.",
      ar: "نعدك بالأفضل، لا بالأسرع. العمل الذي يبقى يحتاج وقتاً ليُراجَع، ويُكرَّر، ويُنقَّح. لا نختصر الطريق.",
    },
  },
  {
    // Double check — delivered & confirmed, end-to-end
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-5 h-5"
      >
        <path d="M2 12 L6 16 L14 8" />
        <path d="M10 14 L12 16 L22 6" />
      </svg>
    ),
    title: { en: "Full-stack delivery", ar: "تسليم شامل" },
    body: {
      en: "From the first strategy to the last line of code — one team, one roof. What you saw in the deck is what reaches the user, with no compromise between stages.",
      ar: "من أوّل استراتيجية إلى آخر سطر كود — فريقٌ واحد تحت سقفٍ واحد. ما تراه في العرض، هو ما يصل للمستخدم — بلا تنازل بين المراحل.",
    },
  },
  {
    // Ascending staircase — growth, scale
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-5 h-5"
      >
        <path d="M3 20 H8 V16 H13 V12 H18 V8 H22" />
      </svg>
    ),
    title: { en: "Built to grow", ar: "مبني للنموّ" },
    body: {
      en: "We design with systems from day one — components, colors, documented rules. What we ship grows with you and doesn't need rebuilding a year later.",
      ar: "نُصمّم بالأنظمة من اليوم الأول — مكوّنات، ألوان، قواعد موثّقة. ما نُسلّمه يكبُر معك، ولا يحتاج إعادة بناء بعد سنة.",
    },
  },
];

export default function WhySection() {
  const { t, locale } = useTranslation();

  return (
    <section className="py-14 md:py-20 bg-ink text-white relative overflow-hidden">
      {/* Ambient glow */}
      <div
        className="absolute top-[-150px] right-[-100px] w-[500px] h-[500px] rounded-full bg-brand-blue/20 blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-[-100px] left-[-100px] w-[400px] h-[400px] rounded-full bg-brand-green/10 blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-[1320px] mx-auto px-6 sm:px-8 md:px-12 lg:px-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="grid grid-cols-1 lg:grid-cols-[auto_1fr] gap-6 lg:gap-16 items-end mb-14 md:mb-20"
        >
          <div>
            <span className="inline-flex items-center gap-2 pl-2 pr-4 py-1 bg-white/10 rounded-full text-[11px] uppercase tracking-[0.2em] font-semibold text-white/80 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-green" />
              {t("Principles", "مبادئنا")}
            </span>
            <h2 className={`font-lyon font-bold tracking-[-0.03em] text-4xl md:text-5xl lg:text-6xl max-w-2xl ${locale === "ar" ? "leading-[1.25]" : "leading-[1.05]"}`}>
              {t("Why ", "لماذا ")}
              <span className="text-brand-green italic">
                {t("Maatouk?", "معتوق؟")}
              </span>
            </h2>
          </div>
          <p className="text-base md:text-lg text-white/65 leading-relaxed max-w-lg lg:pb-3">
            {t(
              "How we think — and what we commit to, whatever the brief.",
              "كيف نُفكّر — وما نُعِدك به، مهما اختلف المشروع."
            )}
          </p>
        </motion.div>

        {/* Principles grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1 } },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5"
        >
          {principles.map((p, i) => (
            <motion.article
              key={i}
              variants={{
                hidden: { opacity: 0, y: 16 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="group relative rounded-[24px] md:rounded-[28px] bg-white/[0.04] hover:bg-white/[0.06] border border-white/[0.08] p-7 md:p-9 transition-colors duration-500"
            >
              <div className="flex items-start justify-between mb-8">
                <div className="w-11 h-11 rounded-2xl bg-brand-green/15 text-brand-green flex items-center justify-center">
                  {p.icon}
                </div>
                <span className="font-lyon text-2xl font-bold text-white/30">
                  0{i + 1}
                </span>
              </div>

              <h3 className="font-lyon font-bold text-2xl md:text-[1.65rem] tracking-[-0.02em] mb-3 leading-tight">
                {t(p.title.en, p.title.ar)}
              </h3>
              <p className="text-sm md:text-[15px] text-white/65 leading-relaxed">
                {t(p.body.en, p.body.ar)}
              </p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
