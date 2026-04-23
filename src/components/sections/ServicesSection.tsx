"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useTranslation } from "@/lib/LocaleContext";

type Service = {
  number: string;
  title: { en: string; ar: string };
  tagline: { en: string; ar: string };
  description: { en: string; ar: string };
  deliverables: { en: string; ar: string }[];
  accent: "blue" | "green" | "dark";
  icon: React.ReactNode;
};

const services: Service[] = [
  {
    number: "01",
    title: { en: "Branding", ar: "هوية بصرية" },
    tagline: {
      en: "Identities that travel.",
      ar: "هويّةٌ تَبقى.",
    },
    description: {
      en: "Strategic visual identity systems — logo, typography, color, and guidelines. Built to hold together across every touchpoint.",
      ar: "نظامُ هوية متكامل — شعار، خطوط، ألوان، ودليل العلامة. متماسكةٌ في كل سياق، عبر كل وسيط.",
    },
    deliverables: [
      { en: "Brand strategy", ar: "استراتيجية العلامة" },
      { en: "Visual identity", ar: "هوية بصرية" },
      { en: "Typography", ar: "أنظمة الخطوط" },
      { en: "Guidelines", ar: "دليل العلامة" },
      { en: "Naming", ar: "التسمية" },
    ],
    accent: "blue",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-7 h-7" aria-hidden="true">
        <rect x="6" y="6" width="16" height="16" rx="2" transform="rotate(45 14 14)" fill="currentColor" />
        <rect x="26" y="26" width="16" height="16" rx="2" transform="rotate(45 34 34)" fill="currentColor" />
      </svg>
    ),
  },
  {
    number: "02",
    title: { en: "Motion Design", ar: "موشن جرافيك" },
    tagline: {
      en: "Brands in motion.",
      ar: "كلّ إطارٍ يُحسَب.",
    },
    description: {
      en: "Motion systems — not just videos. Logo animations, campaign ads, product motion, and social kits. Your brand feels alive wherever it lands.",
      ar: "أكثر من مقاطع فيديو — تحريك الشعار، الحملات الإعلانية، عروض المنتجات، ومحتوى السوشيال ميديا. كلّ لقطةٍ تحمل صوت العلامة.",
    },
    deliverables: [
      { en: "Logo animation", ar: "تحريك الشعار" },
      { en: "Campaign ads", ar: "حملات إعلانية" },
      { en: "Explainer videos", ar: "فيديوهات تعريفية" },
      { en: "Product motion", ar: "تحريك المنتج" },
      { en: "Social kits", ar: "سوشيال ميديا" },
    ],
    accent: "dark",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" className="w-7 h-7" aria-hidden="true">
        <circle cx="24" cy="24" r="18" />
        <polygon points="19,15 33,24 19,33" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    number: "03",
    title: { en: "Digital Products", ar: "منتجات رقمية" },
    tagline: {
      en: "Shipped, not just shown.",
      ar: "تُطلَق، لا تُعرَض فقط.",
    },
    description: {
      en: "Websites, apps, and digital products. We design and build in-house — so the brand you approved in the deck is the one that actually ships.",
      ar: "مواقع، تطبيقات، ومنتجات رقميّة — تصميماً وتطويراً تحت سقفٍ واحد. ما تعتمده في العرض، هو ما يصل للمستخدم بلا تنازل.",
    },
    deliverables: [
      { en: "Websites", ar: "مواقع إلكترونية" },
      { en: "Mobile apps", ar: "تطبيقات الجوال" },
      { en: "Web apps", ar: "تطبيقات ويب" },
      { en: "E-commerce", ar: "تجارة إلكترونية" },
      { en: "Dashboards", ar: "لوحات تحكّم" },
    ],
    accent: "green",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" className="w-7 h-7" aria-hidden="true">
        <rect x="4" y="9" width="40" height="30" rx="3" />
        <line x1="4" y1="18" x2="44" y2="18" />
        <circle cx="10" cy="13.5" r="1" fill="currentColor" />
        <circle cx="15" cy="13.5" r="1" fill="currentColor" />
      </svg>
    ),
  },
];

const accentClasses = {
  blue: {
    card: "bg-brand-blue text-white",
    iconBg: "bg-white/15 text-white",
    pill: "bg-white/15 text-white",
    link: "text-brand-green",
  },
  green: {
    card: "bg-surface-raised text-ink border border-black/[0.06]",
    iconBg: "bg-brand-green-soft text-ink",
    pill: "bg-surface-low text-ink-muted",
    link: "text-brand-blue",
  },
  dark: {
    card: "bg-ink text-white",
    iconBg: "bg-white/10 text-brand-green",
    pill: "bg-white/10 text-white/80",
    link: "text-brand-green",
  },
};

export default function ServicesSection() {
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
          className="grid grid-cols-1 lg:grid-cols-[auto_1fr] gap-6 lg:gap-16 items-end mb-16 md:mb-20"
        >
          <div>
            <span className="inline-flex items-center gap-2 pl-2 pr-4 py-1 bg-surface-raised rounded-full border border-black/[0.06] text-[11px] uppercase tracking-[0.2em] font-semibold text-ink-muted mb-6 shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-blue" />
              {t("What we make", "ما نصنعه")}
            </span>
            <h2 className="font-lyon font-bold tracking-[-0.03em] text-4xl md:text-5xl lg:text-6xl leading-[0.95] max-w-2xl">
              {t("Three disciplines,", "ثلاث تخصصات،")}
              <br />
              <span className="text-brand-blue italic">
                {t("one studio.", "استوديو واحد.")}
              </span>
            </h2>
          </div>

          <p className="text-base md:text-lg text-ink-soft leading-relaxed max-w-lg lg:pb-3">
            {t(
              "Every project lives at the intersection of brand, motion, and digital. We work as one team across all three — no handoffs, no seams.",
              "الهويّة، الموشن، والمنتجات الرقميّة — في فريقٍ واحد. نُمسك المشروع من الفكرة إلى الإطلاق، بلا فواصل."
            )}
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.12 } },
          }}
          className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6"
        >
          {services.map((s) => {
            const a = accentClasses[s.accent];
            return (
              <motion.article
                key={s.number}
                variants={{
                  hidden: { opacity: 0, y: 18 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className={`relative h-full flex flex-col rounded-[28px] p-7 md:p-8 lg:p-9 overflow-hidden transition-shadow duration-500 hover:shadow-lg ${a.card}`}
              >
                {/* Top row */}
                <div className="flex items-start justify-between mb-5 md:mb-7">
                  <div
                    className={`w-12 h-12 rounded-2xl flex items-center justify-center ${a.iconBg}`}
                  >
                    {s.icon}
                  </div>
                  <span className="font-lyon text-2xl md:text-3xl font-bold opacity-40">
                    {s.number}
                  </span>
                </div>

                {/* Title + tagline */}
                <h3 className="font-lyon font-bold text-2xl md:text-3xl lg:text-[2rem] tracking-[-0.02em] leading-none mb-2.5">
                  {t(s.title.en, s.title.ar)}
                </h3>
                <p className="font-lyon italic text-lg md:text-xl opacity-80 mb-4">
                  {t(s.tagline.en, s.tagline.ar)}
                </p>
                <p className="text-sm md:text-[15px] leading-relaxed opacity-80 mb-5">
                  {t(s.description.en, s.description.ar)}
                </p>

                {/* Deliverable pills */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {s.deliverables.map((d, i) => (
                    <span
                      key={i}
                      className={`pill text-[11px] !py-1 !px-2.5 font-medium ${a.pill}`}
                    >
                      {t(d.en, d.ar)}
                    </span>
                  ))}
                </div>

                {/* Bottom link — pushed to card bottom so all 3 cards align */}
                <Link
                  href="/services"
                  className={`mt-auto inline-flex items-center gap-1.5 text-sm font-medium self-start ${a.link} group/link focus:outline-none focus-visible:outline-2 focus-visible:outline-current focus-visible:outline-offset-2 rounded-sm`}
                >
                  {t("Learn more", "اعرف المزيد")}
                  <svg
                    className="w-3.5 h-3.5 rtl-flip transition-transform duration-300 group-hover/link:translate-x-0.5"
                    viewBox="0 0 14 14"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    aria-hidden="true"
                  >
                    <path d="M3 7h8M8 4l3 3-3 3" />
                  </svg>
                </Link>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
