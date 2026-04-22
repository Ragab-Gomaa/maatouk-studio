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
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3.5 2" strokeLinecap="round" />
      </svg>
    ),
    title: { en: "Strategy first", ar: "استراتيجية أولاً" },
    body: {
      en: "Every project starts with research, positioning, and business logic — not moodboards. Beautiful work that doesn't perform is just decoration.",
      ar: "كل مشروع يبدأ ببحث وتموضع ومنطق تجاري — لا بـ moodboards. العمل الجميل الذي لا يؤدّي وظيفته مجرد زخرفة.",
    },
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
        <path d="M3 6h6M6 6v12M3 18h6" strokeLinecap="round" />
        <path d="M15 18l3-12 3 12M16 14h4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: { en: "Bilingual by craft", ar: "ثنائي اللغة بالحرفية" },
    body: {
      en: "Arabic isn't a translation. It's a first draft, shaped with the same care as Latin — type pairings, layout, cultural nuance, all from scratch.",
      ar: "العربية ليست ترجمة. هي مسوّدة أولى، تُصاغ بنفس العناية مثل اللاتينية — اقتران الخطوط، التخطيط، الفروق الثقافية، كلها من الصفر.",
    },
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M3 9h18M9 3v18" />
      </svg>
    ),
    title: { en: "Full-stack delivery", ar: "تسليم شامل" },
    body: {
      en: "Strategy, identity, motion, and product — all in-house, one team. The brand you saw in the deck is the one that ships, without compromise.",
      ar: "الاستراتيجية، الهوية، الحركة، والمنتج — كلها داخل الاستوديو، فريق واحد. الهوية التي وافقت عليها هي نفسها التي تنطلق، بلا تنازل.",
    },
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
        <path d="M3 17l6-8 5 6 7-10" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M16 5h5v5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: { en: "Built to scale", ar: "مبني للتوسع" },
    body: {
      en: "We think in systems from day one. Components, tokens, guidelines — everything documented so the work keeps performing long after launch.",
      ar: "نفكّر في أنظمة من اليوم الأول. مكونات، tokens، دلائل — كلها موثقة ليستمر العمل بالأداء طويلاً بعد الإطلاق.",
    },
  },
];

export default function WhySection() {
  const { t } = useTranslation();

  return (
    <section className="py-24 md:py-36 bg-ink text-white relative overflow-hidden">
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
              {t("Why Maatouk", "لماذا معتوق")}
            </span>
            <h2 className="font-lyon font-bold tracking-[-0.03em] text-4xl md:text-5xl lg:text-6xl leading-[0.95] max-w-2xl">
              {t("Four principles,", "أربع مبادئ،")}
              <br />
              <span className="text-brand-green italic">
                {t("one way of working.", "طريقة عمل واحدة.")}
              </span>
            </h2>
          </div>
          <p className="text-base md:text-lg text-white/65 leading-relaxed max-w-lg lg:pb-3">
            {t(
              "How we work — and what you can count on, regardless of the brief.",
              "كيف نعمل — وما يمكنك الاعتماد عليه، مهما كان الملف."
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
