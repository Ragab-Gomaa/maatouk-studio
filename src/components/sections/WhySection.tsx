"use client";

import { motion } from "framer-motion";
import { useTranslation } from "@/lib/LocaleContext";
import { fadeUp, staggerContainer } from "@/lib/animations";
import SectionLabel from "@/components/ui/SectionLabel";
import BrandMark from "@/components/ui/BrandMark";

const differentiators = [
  {
    title: { en: "Strategy-led design", ar: "تصميم يقوده الاستراتيجية" },
    desc: {
      en: "We start with research and business insight, not aesthetics. Design follows strategy.",
      ar: "نبدأ بالبحث والرؤية التجارية، لا بالجماليات. التصميم يتبع الاستراتيجية.",
    },
    icon: (
      <svg viewBox="0 0 48 48" className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="24" cy="24" r="20" />
        <path d="M24 12v12l8 8" />
      </svg>
    ),
  },
  {
    title: { en: "Bilingual craft", ar: "حرفية ثنائية اللغة" },
    desc: {
      en: "True Arabic-English design, not translation. Every language gets its own typographic care.",
      ar: "تصميم عربي-إنجليزي حقيقي، ليس ترجمة. كل لغة تحظى بعناية خطية خاصة.",
    },
    icon: (
      <svg viewBox="0 0 48 48" className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M6 12h18M15 12v24M6 20h12" />
        <path d="M30 36l6-24 6 24M32 28h8" />
      </svg>
    ),
  },
  {
    title: { en: "Full-stack delivery", ar: "تسليم شامل" },
    desc: {
      en: "From brand strategy to motion to code. One team, one vision, no handoff friction.",
      ar: "من استراتيجية العلامة إلى الحركة إلى الكود. فريق واحد، رؤية واحدة، بلا احتكاك.",
    },
    icon: (
      <svg viewBox="0 0 48 48" className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="6" y="6" width="36" height="36" rx="2" />
        <path d="M6 18h36M18 18v24" />
      </svg>
    ),
  },
  {
    title: { en: "Built to scale", ar: "مبني للتوسع" },
    desc: {
      en: "Systems thinking at every level. Our work grows with your business.",
      ar: "تفكير منهجي في كل مستوى. عملنا ينمو مع عملك.",
    },
    icon: (
      <svg viewBox="0 0 48 48" className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M8 40l10-14 8 8 14-22" />
        <path d="M32 12h8v8" />
      </svg>
    ),
  },
];

const stats = [
  { value: "50+", label: { en: "Projects delivered", ar: "مشروع تم تسليمه" } },
  { value: "4+", label: { en: "Years of craft", ar: "سنوات من الحرفية" } },
  { value: "100%", label: { en: "Client retention", ar: "نسبة احتفاظ العملاء" } },
];

export default function WhySection() {
  const { t } = useTranslation();

  return (
    <section className="py-24 md:py-36 bg-white relative overflow-hidden">
      {/* Subtle background brand mark */}
      <div className="absolute top-1/2 -translate-y-1/2 -right-32 opacity-[0.02] hidden xl:block pointer-events-none">
        <BrandMark color="#0029D6" size={700} />
      </div>

      <div className="relative z-10 max-w-[1440px] mx-auto px-8 md:px-12 lg:px-20">
        {/* Header */}
        <div className="text-center mb-20 md:mb-28">
          <SectionLabel className="justify-center">
            {t("Why Maatouk", "لماذا معتوق")}
          </SectionLabel>
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-4xl md:text-6xl lg:text-7xl font-lyon font-bold tracking-tight mt-6 mb-6"
          >
            {t("Design with intent.", "تصميم بقصد.")}
            <br />
            <span className="text-brand-blue">
              {t("Built for impact.", "مبني للأثر.")}
            </span>
          </motion.h2>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-lg text-black/50 max-w-2xl mx-auto leading-relaxed"
          >
            {t(
              "We combine deep strategic thinking with obsessive craftsmanship. The result: brands that don't just look right — they perform.",
              "نجمع بين التفكير الاستراتيجي العميق والحرفية المتقنة. النتيجة: علامات لا تبدو صحيحة فحسب — بل تؤدي."
            )}
          </motion.p>
        </div>

        {/* Differentiators Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-24"
        >
          {differentiators.map((item, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className="group relative p-8 md:p-10 bg-surface border border-black/[0.06] hover:border-brand-blue/20 hover:shadow-lg transition-all duration-500"
            >
              {/* Icon */}
              <div className="text-brand-blue mb-6">
                {item.icon}
              </div>

              {/* Number */}
              <div className="absolute top-8 right-8 md:top-10 md:right-10 text-6xl font-lyon font-bold text-black/[0.04]">
                0{i + 1}
              </div>

              <h3 className="text-xl md:text-2xl font-lyon font-bold mb-3 group-hover:text-brand-blue transition-colors duration-300">
                {t(item.title.en, item.title.ar)}
              </h3>
              <p className="text-black/50 leading-relaxed">
                {t(item.desc.en, item.desc.ar)}
              </p>

              {/* Bottom accent */}
              <div className="absolute bottom-0 left-0 w-0 h-[3px] bg-brand-blue group-hover:w-full transition-all duration-500" />
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Bar */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-brand-blue p-10 md:p-14"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-6">
            {stats.map((stat, i) => (
              <div
                key={i}
                className={`text-center ${
                  i < stats.length - 1 ? "md:border-r md:border-white/10" : ""
                }`}
              >
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.15 }}
                  className="block text-5xl md:text-6xl font-lyon font-bold text-white mb-2"
                >
                  {stat.value}
                </motion.span>
                <span className="text-sm text-white/50 uppercase tracking-[0.15em] font-medium">
                  {t(stat.label.en, stat.label.ar)}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
