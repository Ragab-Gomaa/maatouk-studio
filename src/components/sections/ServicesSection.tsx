"use client";

import { motion } from "framer-motion";
import { useTranslation } from "@/lib/LocaleContext";
import { fadeUp, staggerContainer } from "@/lib/animations";
import SectionLabel from "@/components/ui/SectionLabel";
import Button from "@/components/ui/Button";

type Capability = {
  key: string;
  title: { en: string; ar: string };
  tagline: { en: string; ar: string };
  description: { en: string; ar: string };
  deliverables: { en: string; ar: string }[];
  number: string;
};

const capabilities: Capability[] = [
  {
    key: "branding",
    number: "01",
    title: { en: "Branding", ar: "هوية بصرية" },
    tagline: {
      en: "Identity systems that last.",
      ar: "أنظمة هوية تدوم.",
    },
    description: {
      en: "From strategy to visual system — naming, logo, typography, color, guidelines. Crafted to live in the real world across every touchpoint, bilingual by default.",
      ar: "من الاستراتيجية إلى النظام البصري — التسمية، الشعار، الطباعة، الألوان، الدليل. مصنوعة لتعيش في العالم الحقيقي عبر كل نقطة لمس، ثنائية اللغة افتراضياً.",
    },
    deliverables: [
      { en: "Brand strategy & positioning", ar: "استراتيجية وتموضع" },
      { en: "Logo & visual identity", ar: "الشعار والهوية" },
      { en: "Typography system (AR+EN)", ar: "نظام الطباعة عربي/إنجليزي" },
      { en: "Color & guidelines", ar: "الألوان والدليل" },
      { en: "Naming & messaging", ar: "التسمية والرسائل" },
    ],
  },
  {
    key: "motion",
    number: "02",
    title: { en: "Motion Design", ar: "تصميم الحركة" },
    tagline: {
      en: "Brands that move with intent.",
      ar: "علامات تتحرك بقصد.",
    },
    description: {
      en: "Logo animations, campaign ads, explainer videos, product motion, social content. Every frame serves the story — we don't move for the sake of movement.",
      ar: "تحريك الشعارات، إعلانات الحملات، فيديوهات الشرح، حركة المنتج، محتوى السوشيال. كل إطار يخدم القصة — نحرّك لأن الحركة ضرورية، لا للحركة فقط.",
    },
    deliverables: [
      { en: "Logo & brand animation", ar: "تحريك الشعار والعلامة" },
      { en: "Campaign ads & promos", ar: "إعلانات الحملات" },
      { en: "Explainer & product videos", ar: "فيديوهات الشرح" },
      { en: "Social content systems", ar: "أنظمة محتوى السوشيال" },
      { en: "Title sequences", ar: "مقدمات العناوين" },
    ],
  },
  {
    key: "digital",
    number: "03",
    title: { en: "Digital Products", ar: "منتجات رقمية" },
    tagline: {
      en: "Websites and platforms built to perform.",
      ar: "مواقع ومنصات مبنية لتؤدّي.",
    },
    description: {
      en: "Storefronts, booking platforms, admin dashboards, ERP systems, enterprise apps. Engineered with Next.js, designed with taste, shipped with Arabic and English as equals.",
      ar: "متاجر، منصات حجز، لوحات تحكم، أنظمة ERP، تطبيقات مؤسسية. مصممة بـ Next.js، مُصمَّمة بذوق، مُطلَقة بالعربية والإنجليزية بدرجة واحدة.",
    },
    deliverables: [
      { en: "E-commerce storefronts", ar: "متاجر إلكترونية" },
      { en: "Booking & scheduling platforms", ar: "منصات حجز وجدولة" },
      { en: "ERP / admin dashboards", ar: "أنظمة ERP / لوحات إدارة" },
      { en: "Enterprise PWAs", ar: "تطبيقات PWA مؤسسية" },
      { en: "Full bilingual (AR/EN) + RTL", ar: "ثنائي اللغة كامل + RTL" },
    ],
  },
];

export default function ServicesSection() {
  const { t } = useTranslation();

  return (
    <section className="py-24 md:py-36 bg-white relative">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-8 md:px-12 lg:px-20">
        {/* ─── Section header ─── */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-10 lg:gap-16 items-end mb-20 md:mb-28">
          <div>
            <SectionLabel>{t("Capabilities", "ما نصنعه")}</SectionLabel>
            <motion.h2
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-4xl md:text-6xl lg:text-7xl font-lyon font-bold tracking-tight mt-6 leading-[0.95]"
            >
              {t("Strategy, craft,", "استراتيجية، حرفية،")}
              <br />
              <span className="text-brand-blue">
                {t("under one roof.", "تحت سقف واحد.")}
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
              "We operate as one team across three disciplines. No handoff friction between strategy, design, motion, and engineering — which is why the output feels coherent instead of stitched together.",
              "نعمل كفريق واحد عبر ثلاث تخصصات. لا احتكاك في التسليم بين الاستراتيجية والتصميم والحركة والهندسة — لذا النتيجة تبدو متماسكة، لا مُلصّقة."
            )}
          </motion.p>
        </div>

        {/* ─── Capability rows (editorial stack) ─── */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="border-t border-black/[0.08]"
        >
          {capabilities.map((cap) => (
            <motion.article
              key={cap.key}
              variants={fadeUp}
              className="grid grid-cols-1 lg:grid-cols-[auto_1fr_1.1fr] items-start gap-6 lg:gap-16 py-12 md:py-16 border-b border-black/[0.08] group"
            >
              {/* Number */}
              <div className="flex items-baseline gap-4 lg:w-32">
                <span className="font-lyon font-bold text-brand-blue text-5xl md:text-6xl leading-none">
                  {cap.number}
                </span>
              </div>

              {/* Title + tagline */}
              <div>
                <h3 className="text-3xl md:text-5xl lg:text-6xl font-lyon font-bold tracking-tight leading-[0.95] mb-4 md:mb-5 group-hover:text-brand-blue transition-colors duration-700">
                  {t(cap.title.en, cap.title.ar)}
                </h3>
                <p className="font-lyon text-xl md:text-2xl text-black/70 italic leading-snug mb-5 max-w-md">
                  {t(cap.tagline.en, cap.tagline.ar)}
                </p>
                <p className="text-base text-black/60 leading-relaxed max-w-lg">
                  {t(cap.description.en, cap.description.ar)}
                </p>
              </div>

              {/* Deliverables */}
              <div>
                <div className="text-[10px] uppercase tracking-[0.25em] font-bold text-black/40 mb-5 pt-2">
                  {t("What we ship", "ما نقدمه")}
                </div>
                <ul className="divide-y divide-black/[0.06] border-y border-black/[0.06]">
                  {cap.deliverables.map((d, j) => (
                    <li
                      key={j}
                      className="flex items-center gap-4 py-3.5 text-sm md:text-base text-black/75"
                    >
                      <span className="w-1.5 h-1.5 rotate-45 bg-brand-blue shrink-0" />
                      {t(d.en, d.ar)}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* ─── CTA ─── */}
        <div className="mt-16 md:mt-20 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <p className="text-lg md:text-xl font-lyon text-black/70 max-w-xl leading-relaxed">
            {t(
              "A project that spans two or three of these? That's where we do our best work.",
              "مشروع يجمع اثنين أو ثلاثة من هذه التخصصات؟ هنا نقدم أفضل ما لدينا."
            )}
          </p>
          <div className="flex flex-wrap gap-3">
            <Button href="/services" variant="secondary" size="md">
              {t("All services", "كل الخدمات")}
            </Button>
            <Button href="/contact" variant="primary" size="md" withArrow>
              {t("Start a project", "ابدأ مشروعك")}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
