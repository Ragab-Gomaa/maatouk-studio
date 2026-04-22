"use client";

import { motion } from "framer-motion";
import { useTranslation } from "@/lib/LocaleContext";
import { fadeUp, staggerContainer } from "@/lib/animations";
import SectionLabel from "@/components/ui/SectionLabel";

type Pillar = {
  numeral: string;
  title: { en: string; ar: string };
  body: { en: string; ar: string };
  aside: { en: string; ar: string };
};

const pillars: Pillar[] = [
  {
    numeral: "I",
    title: {
      en: "Strategy-led design",
      ar: "تصميم تقوده الاستراتيجية",
    },
    body: {
      en: "Research, positioning, and business logic come before aesthetic decisions. Beautiful work that doesn't perform is just decoration.",
      ar: "البحث والتموضع والمنطق التجاري يسبقان القرارات الجمالية. العمل الجميل الذي لا يؤدي وظيفته ليس إلا زخرفة.",
    },
    aside: { en: "Every project begins with a brief, not a template.", ar: "كل مشروع يبدأ بملخص، لا بقالب." },
  },
  {
    numeral: "II",
    title: {
      en: "Bilingual by craft",
      ar: "ثنائي اللغة بالحرفية",
    },
    body: {
      en: "Arabic and Latin are treated as equals — shared type pairings, shared layout logic, shared attention to detail. Not translation, not localization — original bilingual design.",
      ar: "العربية واللاتينية متساويتان — اقترانات خطية مشتركة، منطق تخطيط مشترك، واهتمام بالتفاصيل مشترك. ليست ترجمة ولا توطين — تصميم ثنائي أصلي.",
    },
    aside: { en: "RTL is foundation, not an afterthought.", ar: "RTL أساس، لا فكرة لاحقة." },
  },
  {
    numeral: "III",
    title: {
      en: "Full-stack delivery",
      ar: "تسليم شامل",
    },
    body: {
      en: "Strategy to identity to motion to production code — all under one roof, by the same team. One responsibility, one accountability, zero handoff friction.",
      ar: "من الاستراتيجية إلى الهوية إلى الحركة إلى كود الإنتاج — كلها تحت سقف واحد، بنفس الفريق. مسؤولية واحدة، محاسبة واحدة، بلا احتكاك في التسليم.",
    },
    aside: { en: "One team, one outcome.", ar: "فريق واحد، نتيجة واحدة." },
  },
  {
    numeral: "IV",
    title: {
      en: "Built to scale",
      ar: "مبني للتوسع",
    },
    body: {
      en: "We think in systems from day one. Colors, type, components, code — all modular and documented, so the work keeps performing long after handoff.",
      ar: "نفكّر في أنظمة من اليوم الأول. الألوان، الخطوط، المكونات، الكود — كلها موحدة وموثقة، ليستمر العمل بالأداء بعد التسليم بكثير.",
    },
    aside: { en: "Our handoff is a foundation, not an ending.", ar: "تسليمنا أساس، لا نهاية." },
  },
];

export default function WhySection() {
  const { t } = useTranslation();

  return (
    <section className="py-24 md:py-36 bg-white relative overflow-hidden">
      {/* Subtle background mark */}
      <div
        className="absolute -left-20 top-1/3 text-[22rem] lg:text-[32rem] font-lyon font-bold text-brand-blue/[0.025] leading-none hidden xl:block select-none pointer-events-none"
        aria-hidden="true"
      >
        §
      </div>

      <div className="relative z-10 max-w-[1440px] mx-auto px-6 sm:px-8 md:px-12 lg:px-20">
        {/* ─── Header ─── */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-10 lg:gap-16 items-end mb-20 md:mb-28">
          <div>
            <SectionLabel>{t("Why Maatouk", "لماذا معتوق")}</SectionLabel>
            <motion.h2
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-4xl md:text-6xl lg:text-7xl font-lyon font-bold tracking-tight mt-6 leading-[0.95]"
            >
              {t("Four principles,", "أربع مبادئ،")}
              <br />
              <span className="text-brand-blue italic">
                {t("one way of working.", "طريقة عمل واحدة.")}
              </span>
            </motion.h2>
          </div>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-base md:text-lg text-black/60 leading-relaxed max-w-lg"
          >
            {t(
              "What it's like to work with us — and what you can count on no matter what the brief is.",
              "كيف هي تجربة العمل معنا — وما يمكنك الاعتماد عليه مهما كان الملف."
            )}
          </motion.p>
        </div>

        {/* ─── Pillars ─── */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="border-t border-black/[0.08]"
        >
          {pillars.map((p, i) => (
            <motion.article
              key={i}
              variants={fadeUp}
              className="grid grid-cols-1 lg:grid-cols-[auto_1fr_1.3fr] items-start gap-6 lg:gap-16 py-10 md:py-14 border-b border-black/[0.08] group"
            >
              {/* Roman numeral */}
              <div className="lg:w-28 font-lyon text-brand-blue font-bold text-4xl md:text-5xl leading-none">
                {p.numeral}
              </div>

              {/* Title + aside */}
              <div>
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-lyon font-bold tracking-tight leading-[1.05] mb-3 group-hover:text-brand-blue transition-colors duration-700">
                  {t(p.title.en, p.title.ar)}
                </h3>
                <p className="font-lyon italic text-lg md:text-xl text-black/55">
                  &ldquo;{t(p.aside.en, p.aside.ar)}&rdquo;
                </p>
              </div>

              {/* Body */}
              <div>
                <p className="text-base md:text-lg text-black/70 leading-relaxed max-w-2xl">
                  {t(p.body.en, p.body.ar)}
                </p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
