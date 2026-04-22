"use client";

import { motion } from "framer-motion";
import { useTranslation } from "@/lib/LocaleContext";
import { fadeUp, staggerContainer } from "@/lib/animations";
import SectionLabel from "@/components/ui/SectionLabel";
import DiamondDivider from "@/components/ui/DiamondDivider";
import Button from "@/components/ui/Button";

type Service = {
  key: string;
  icon: React.ReactNode;
  title: { en: string; ar: string };
  lede: { en: string; ar: string };
  deliverables: { en: string; ar: string }[];
  proof: { label: { en: string; ar: string }; value: { en: string; ar: string } }[];
  /** Examples from real projects that showcase this service */
  examples: { en: string; ar: string }[];
};

const services: Service[] = [
  {
    key: "branding",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-9 h-9">
        <rect x="6" y="6" width="13" height="13" transform="rotate(45 12.5 12.5)" />
        <rect x="21" y="21" width="13" height="13" transform="rotate(45 27.5 27.5)" />
        <line x1="12.5" y1="19" x2="12.5" y2="27.5" />
        <line x1="19" y1="12.5" x2="27.5" y2="12.5" />
      </svg>
    ),
    title: { en: "Branding", ar: "هوية بصرية" },
    lede: {
      en: "Strategic identity systems that give ambitious brands a distinctive voice, typographic system, and visual architecture — bilingual by default.",
      ar: "أنظمة هوية استراتيجية تمنح العلامات الطموحة صوتاً مميزاً ونظاماً طباعياً وبنية بصرية — ثنائية اللغة افتراضياً.",
    },
    deliverables: [
      { en: "Brand strategy + positioning", ar: "استراتيجية وتموضع العلامة" },
      { en: "Logo + visual identity system", ar: "شعار ونظام هوية بصرية" },
      { en: "Arabic & Latin typography pairing", ar: "اقتران الخطوط العربية واللاتينية" },
      { en: "Brand guidelines + asset library", ar: "دليل العلامة ومكتبة الأصول" },
      { en: "Naming + messaging framework", ar: "التسمية وإطار الرسائل" },
    ],
    proof: [
      {
        label: { en: "Applied in", ar: "مُطبّق في" },
        value: {
          en: "Dolcebello, Nobles Catering, Meezan",
          ar: "دولشي بيلو، نوبلز كاترينج، ميزان",
        },
      },
      { label: { en: "Typical duration", ar: "المدة المعتادة" }, value: { en: "4–6 weeks", ar: "٤–٦ أسابيع" } },
    ],
    examples: [
      { en: "Luxury e-commerce identity (Dolcebello)", ar: "هوية تجارة فاخرة (دولشي بيلو)" },
      { en: "ERP product brand (Meezan)", ar: "علامة منتج ERP (ميزان)" },
    ],
  },
  {
    key: "motion",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-9 h-9">
        <circle cx="20" cy="20" r="14" />
        <polygon points="16,13 27,20 16,27" fill="currentColor" stroke="none" />
      </svg>
    ),
    title: { en: "Motion Design", ar: "تصميم حركة" },
    lede: {
      en: "From logo animations and campaign ads to explainer videos and product stories — motion that makes brands feel alive and products feel inevitable.",
      ar: "من تحريك الشعارات وإعلانات الحملات إلى فيديوهات الشرح وقصص المنتج — حركة تمنح العلامة حياةً والمنتج حتمية.",
    },
    deliverables: [
      { en: "Logo & brand animations", ar: "تحريك الشعار والعلامة" },
      { en: "Campaign ads (social / broadcast)", ar: "إعلانات الحملات (سوشيال / بث)" },
      { en: "Product explainer videos", ar: "فيديوهات شرح المنتج" },
      { en: "App & product motion", ar: "موشن التطبيقات والمنتجات" },
      { en: "Title sequences + social toolkits", ar: "مقدمات العناوين وأدوات السوشيال" },
    ],
    proof: [
      {
        label: { en: "Applied in", ar: "مُطبّق في" },
        value: {
          en: "Sandah, Forkpos, Class Ride, BlankosKSA",
          ar: "سندة، فوركبوس، كلاس رايد، بلانكوس",
        },
      },
      { label: { en: "Typical duration", ar: "المدة المعتادة" }, value: { en: "2–4 wks / piece", ar: "٢–٤ أسابيع / قطعة" } },
    ],
    examples: [
      { en: "Restaurant logo animation (Sandah)", ar: "تحريك شعار مطعم (سندة)" },
      { en: "Ramadan campaign ad (Forkpos)", ar: "إعلان حملة رمضان (فوركبوس)" },
      { en: "App motion graphic (Class Ride)", ar: "موشن تطبيق (كلاس رايد)" },
    ],
  },
  {
    key: "web",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-9 h-9">
        <rect x="4" y="7" width="32" height="24" rx="1.5" />
        <line x1="4" y1="14" x2="36" y2="14" />
        <circle cx="9" cy="10.5" r="1" fill="currentColor" stroke="none" />
        <circle cx="13" cy="10.5" r="1" fill="currentColor" stroke="none" />
        <line x1="10" y1="21" x2="30" y2="21" strokeWidth="1.2" />
        <line x1="10" y1="25" x2="24" y2="25" strokeWidth="1.2" />
      </svg>
    ),
    title: { en: "Websites & Platforms", ar: "مواقع ومنصات" },
    lede: {
      en: "From premium e-commerce and booking platforms to full ERP systems — performant, bilingual, accessible, and engineered to scale.",
      ar: "من التجارة الإلكترونية الفاخرة ومنصات الحجز إلى أنظمة ERP الكاملة — عالية الأداء، ثنائية اللغة، يسهل الوصول إليها، ومصممة للتوسع.",
    },
    deliverables: [
      { en: "E-commerce storefronts (payments + logistics)", ar: "متاجر إلكترونية (مدفوعات + لوجستيات)" },
      { en: "Booking & scheduling platforms", ar: "منصات حجز وجدولة" },
      { en: "ERP / accounting / admin systems", ar: "أنظمة ERP / محاسبة / إدارة" },
      { en: "Enterprise dashboards + PWAs", ar: "لوحات تحكم مؤسسية + PWA" },
      { en: "Bilingual (AR/EN) + full RTL", ar: "ثنائي اللغة (عربي/إنجليزي) + RTL كامل" },
    ],
    proof: [
      {
        label: { en: "Applied in", ar: "مُطبّق في" },
        value: {
          en: "Dolcebello, Nobles Catering, Meezan, Royal Catering, Nobles Respond",
          ar: "دولشي بيلو، نوبلز كاترينج، ميزان، رويال كاترينج، نوبلز ريسبوند",
        },
      },
      { label: { en: "Typical duration", ar: "المدة المعتادة" }, value: { en: "6–12 weeks", ar: "٦–١٢ أسبوع" } },
    ],
    examples: [
      { en: "Luxury e-commerce (Dolcebello)", ar: "تجارة فاخرة (دولشي بيلو)" },
      { en: "6-step booking flow (Nobles Catering)", ar: "حجز ٦ خطوات (نوبلز كاترينج)" },
      { en: "Arabic-first ERP (Meezan)", ar: "ERP عربي أولاً (ميزان)" },
    ],
  },
];

export default function ServicesSection() {
  const { t } = useTranslation();

  return (
    <section className="py-24 md:py-36 bg-white relative">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-8 md:px-12 lg:px-20">
        {/* ─── Header ─── */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-10 lg:gap-16 items-end mb-16 md:mb-24">
          <div>
            <SectionLabel>{t("What we do", "ما نقدمه")}</SectionLabel>
            <motion.h2
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-4xl md:text-6xl lg:text-7xl font-lyon font-bold tracking-tight mt-6"
            >
              {t("Three disciplines.", "ثلاثة تخصصات.")}
              <br />
              <span className="text-brand-blue">
                {t("One vision.", "رؤية واحدة.")}
              </span>
            </motion.h2>
          </div>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-lg text-black/60 leading-relaxed max-w-xl"
          >
            {t(
              "We don't split work across agencies. Strategy, design, motion, and code live under one roof — which is why our output feels coherent instead of stitched together.",
              "لا نقسّم العمل بين وكالات. الاستراتيجية والتصميم والحركة والكود تحت سقف واحد — ولهذا يبدو ناتجنا متناسقاً بدل أن يكون مُلصّقاً."
            )}
          </motion.p>
        </div>

        {/* ─── Services (stacked editorial rows) ─── */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="divide-y divide-black/[0.08] border-y border-black/[0.08]"
        >
          {services.map((service, i) => (
            <motion.article
              key={service.key}
              variants={fadeUp}
              className="grid grid-cols-1 lg:grid-cols-[auto_1fr_1fr] gap-6 lg:gap-12 py-10 md:py-14 group"
            >
              {/* Number + icon */}
              <div className="flex lg:flex-col items-start gap-5 lg:gap-6 lg:w-28">
                <span className="font-lyon font-bold text-brand-blue text-3xl md:text-4xl leading-none">
                  0{i + 1}
                </span>
                <div className="text-brand-blue">{service.icon}</div>
              </div>

              {/* Title + lede + deliverables */}
              <div>
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-lyon font-bold tracking-tight mb-4 group-hover:text-brand-blue transition-colors duration-500">
                  {t(service.title.en, service.title.ar)}
                </h3>
                <p className="text-base md:text-lg text-black/65 leading-relaxed mb-6 max-w-xl">
                  {t(service.lede.en, service.lede.ar)}
                </p>
                <ul className="space-y-2.5">
                  {service.deliverables.map((d, j) => (
                    <li
                      key={j}
                      className="flex items-start gap-3 text-sm md:text-[15px] text-black/75"
                    >
                      <span className="w-1.5 h-1.5 rotate-45 bg-brand-blue shrink-0 mt-2" />
                      {t(d.en, d.ar)}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Proof + examples */}
              <div className="space-y-8 lg:pl-8 lg:border-l lg:border-black/[0.08]">
                <div>
                  <div className="text-[10px] uppercase tracking-[0.2em] font-bold text-brand-blue/70 mb-3">
                    {t("Real examples", "أمثلة حقيقية")}
                  </div>
                  <ul className="space-y-2">
                    {service.examples.map((ex, j) => (
                      <li
                        key={j}
                        className="text-sm text-black/70 flex items-start gap-2.5"
                      >
                        <span className="text-brand-blue font-mono text-xs mt-0.5" aria-hidden="true">
                          →
                        </span>
                        {t(ex.en, ex.ar)}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-3">
                  {service.proof.map((p, j) => (
                    <div key={j}>
                      <div className="text-[10px] uppercase tracking-[0.2em] font-bold text-black/40 mb-1">
                        {t(p.label.en, p.label.ar)}
                      </div>
                      <div className="text-sm text-black/80 font-medium">
                        {t(p.value.en, p.value.ar)}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* ─── CTA ─── */}
        <div className="mt-16 md:mt-20 grid grid-cols-1 md:grid-cols-[1fr_auto] items-center gap-6 md:gap-8">
          <p className="text-lg md:text-xl text-black/70 leading-relaxed max-w-2xl font-lyon">
            {t(
              "Got a project that touches two or three of these? That's where we do our best work.",
              "عندك مشروع يلامس اثنين أو ثلاثة منهم؟ هنا نقدم أفضل ما لدينا."
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

      <div className="max-w-[1440px] mx-auto px-6 sm:px-8 md:px-12 lg:px-20 mt-20 md:mt-28">
        <DiamondDivider />
      </div>
    </section>
  );
}
