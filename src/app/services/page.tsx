"use client";

import { motion } from "framer-motion";
import { useTranslation } from "@/lib/LocaleContext";
import Button from "@/components/ui/Button";

type Service = {
  number: string;
  title: { en: string; ar: string };
  tagline: { en: string; ar: string };
  description: { en: string; ar: string };
  capabilities: { en: string; ar: string }[];
  typicalDeliverables: { en: string; ar: string }[];
  timeline: { en: string; ar: string };
};

const services: Service[] = [
  {
    number: "01",
    title: { en: "Branding", ar: "الهوية البصرية" },
    tagline: { en: "Identities that travel.", ar: "هويات تسافر بعيداً." },
    description: {
      en: "We build brand identity systems from the ground up — positioning, naming, logo, typography, color, and guidelines. Bilingual by default, crafted to work at every scale and across every medium.",
      ar: "نبني أنظمة هوية بصرية من الصفر — تموضع، تسمية، شعار، طباعة، ألوان، ودليل استخدام. ثنائية اللغة افتراضياً، مصنوعة لتعمل بأي حجم وعلى كل وسيط.",
    },
    capabilities: [
      { en: "Brand strategy & positioning", ar: "استراتيجية وتموضع العلامة" },
      { en: "Naming & verbal identity", ar: "التسمية والهوية اللفظية" },
      { en: "Logo & visual identity", ar: "الشعار والهوية البصرية" },
      { en: "Typography systems (AR+EN)", ar: "أنظمة طباعية (عربي/إنجليزي)" },
      { en: "Color systems", ar: "أنظمة الألوان" },
      { en: "Brand guidelines", ar: "دليل العلامة" },
      { en: "Brand applications", ar: "تطبيقات العلامة" },
    ],
    typicalDeliverables: [
      { en: "Strategy document", ar: "وثيقة استراتيجية" },
      { en: "Logo suite + lockups", ar: "مجموعة الشعار" },
      { en: "Typography pairings", ar: "اقتران الخطوط" },
      { en: "Color palette + rules", ar: "الألوان والقواعد" },
      { en: "100+ page guidelines", ar: "دليل +١٠٠ صفحة" },
    ],
    timeline: { en: "4–8 weeks", ar: "٤–٨ أسابيع" },
  },
  {
    number: "02",
    title: { en: "Motion Design", ar: "تصميم الحركة" },
    tagline: { en: "Brands in motion.", ar: "علامات تتحرّك." },
    description: {
      en: "From logo animations to full campaign films. We design motion systems — how your brand behaves on screens, in feeds, and inside products. Every frame serves the story.",
      ar: "من تحريك الشعارات إلى أفلام الحملات الكاملة. نصمّم أنظمة حركة — كيف تتصرّف علامتك على الشاشات، في الـ feeds، وداخل المنتجات. كل إطار يخدم القصة.",
    },
    capabilities: [
      { en: "Logo animation", ar: "تحريك الشعار" },
      { en: "Brand motion systems", ar: "أنظمة الحركة للعلامة" },
      { en: "Campaign ads & promos", ar: "إعلانات الحملات" },
      { en: "Explainer videos", ar: "فيديوهات الشرح" },
      { en: "Product motion", ar: "حركة المنتج" },
      { en: "Social content systems", ar: "أنظمة محتوى السوشيال" },
      { en: "Title sequences", ar: "مقدمات العناوين" },
    ],
    typicalDeliverables: [
      { en: "Motion guidelines", ar: "دليل الحركة" },
      { en: "Hero animation(s)", ar: "حركات رئيسية" },
      { en: "Social media kit", ar: "حزمة سوشيال" },
      { en: "Source files", ar: "ملفات المصدر" },
      { en: "Export variants", ar: "صيغ تصدير متعددة" },
    ],
    timeline: { en: "2–6 weeks per deliverable", ar: "٢–٦ أسابيع لكل تسليم" },
  },
  {
    number: "03",
    title: { en: "Digital Products", ar: "المنتجات الرقمية" },
    tagline: { en: "Shipped, not just shown.", ar: "تُطلَق، لا تُعرَض فقط." },
    description: {
      en: "Websites, apps, and digital products — designed and built in-house. From marketing sites to full platforms, we handle strategy, UX, interface design, and engineering under one roof.",
      ar: "مواقع وتطبيقات ومنتجات رقمية — تُصمّم وتُبرمَج داخل الاستوديو. من المواقع التسويقية إلى المنصات الكاملة، نتولى الاستراتيجية والـ UX والتصميم والبرمجة تحت سقف واحد.",
    },
    capabilities: [
      { en: "Product strategy & UX", ar: "استراتيجية المنتج وتجربة المستخدم" },
      { en: "Interface design", ar: "تصميم الواجهات" },
      { en: "Marketing sites", ar: "مواقع تسويقية" },
      { en: "Web applications", ar: "تطبيقات الويب" },
      { en: "Mobile apps", ar: "تطبيقات الجوال" },
      { en: "E-commerce platforms", ar: "منصات تجارة إلكترونية" },
      { en: "Bilingual (RTL) implementation", ar: "تطبيق ثنائي اللغة كامل" },
    ],
    typicalDeliverables: [
      { en: "Design system", ar: "نظام تصميم" },
      { en: "Prototype & flows", ar: "نموذج أولي وتدفقات" },
      { en: "Shipped product", ar: "منتج جاهز للإطلاق" },
      { en: "Admin dashboard", ar: "لوحة تحكم" },
      { en: "Documentation", ar: "توثيق تقني" },
    ],
    timeline: { en: "6–16 weeks", ar: "٦–١٦ أسبوع" },
  },
];

export default function ServicesPage() {
  const { t } = useTranslation();

  return (
    <>
      {/* Hero */}
      <section className="pt-32 md:pt-40 pb-16 md:pb-20 bg-surface relative overflow-hidden">
        <div
          className="absolute top-[-200px] right-[-150px] w-[500px] h-[500px] rounded-full bg-brand-blue/[0.06] blur-3xl pointer-events-none"
          aria-hidden="true"
        />
        <div className="relative z-10 max-w-[1320px] mx-auto px-6 sm:px-8 md:px-12 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-flex items-center gap-2 pl-2 pr-4 py-1 bg-surface-raised rounded-full border border-black/[0.06] text-[11px] uppercase tracking-[0.2em] font-semibold text-ink-muted mb-6 shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-blue" />
              {t("What we offer", "ما نقدمه")}
            </span>
            <h1 className="font-lyon font-bold tracking-[-0.035em] leading-[0.92] text-5xl md:text-7xl lg:text-[6rem] text-ink max-w-4xl">
              {t("Three disciplines.", "ثلاث تخصصات.")}
              <br />
              <span className="text-brand-blue italic">
                {t("One vision.", "رؤية واحدة.")}
              </span>
            </h1>
            <p className="mt-6 text-base md:text-lg text-ink-soft max-w-2xl leading-relaxed">
              {t(
                "Every project lives at the intersection of brand, motion, and digital. Here's how we work across all three.",
                "كل مشروع يعيش عند تقاطع الهوية والحركة والرقمي. إليك كيف نعمل عبر الثلاثة."
              )}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 md:py-24 bg-surface-low">
        <div className="max-w-[1320px] mx-auto px-6 sm:px-8 md:px-12 lg:px-16">
          <div className="space-y-12 md:space-y-16">
            {services.map((service, idx) => (
              <motion.article
                key={service.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7 }}
                className="studio-card rounded-[28px] md:rounded-[36px] p-8 md:p-12 lg:p-14"
              >
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-10 lg:gap-16">
                  {/* Left */}
                  <div>
                    <div className="flex items-center gap-3 mb-6">
                      <span className="font-lyon text-5xl md:text-6xl lg:text-7xl font-bold text-brand-blue leading-none">
                        {service.number}
                      </span>
                    </div>
                    <h2 className="font-lyon font-bold tracking-[-0.03em] text-4xl md:text-5xl lg:text-6xl leading-[0.9] mb-4">
                      {t(service.title.en, service.title.ar)}
                    </h2>
                    <p className="font-lyon italic text-xl md:text-2xl text-ink-muted mb-6 max-w-xs">
                      {t(service.tagline.en, service.tagline.ar)}
                    </p>
                    <p className="text-base md:text-lg text-ink-soft leading-relaxed max-w-md mb-8">
                      {t(service.description.en, service.description.ar)}
                    </p>

                    <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] font-semibold text-ink-muted">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-green" />
                      {t("Typical timeline:", "المدة المعتادة:")}
                      <span className="text-brand-blue font-bold">
                        {t(service.timeline.en, service.timeline.ar)}
                      </span>
                    </div>
                  </div>

                  {/* Right */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-10">
                    {/* Capabilities */}
                    <div>
                      <h3 className="text-[10px] uppercase tracking-[0.25em] font-bold text-ink-muted mb-5">
                        {t("Capabilities", "القدرات")}
                      </h3>
                      <ul className="space-y-3">
                        {service.capabilities.map((c, i) => (
                          <li key={i} className="flex items-start gap-3 text-sm md:text-[15px] text-ink-muted">
                            <span className="w-1 h-1 rounded-full bg-brand-blue mt-2 shrink-0" />
                            {t(c.en, c.ar)}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Deliverables */}
                    <div>
                      <h3 className="text-[10px] uppercase tracking-[0.25em] font-bold text-ink-muted mb-5">
                        {t("Typical deliverables", "ما نسلّم عادةً")}
                      </h3>
                      <ul className="space-y-3">
                        {service.typicalDeliverables.map((d, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-3 text-sm md:text-[15px] text-ink-muted"
                          >
                            <span className="w-1 h-1 rotate-45 bg-brand-green mt-2 shrink-0" />
                            {t(d.en, d.ar)}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-surface text-center">
        <h3 className="font-lyon font-bold text-3xl md:text-4xl mb-3">
          {t("Have a project in mind?", "لديك مشروع في ذهنك؟")}
        </h3>
        <p className="text-ink-soft mb-8 max-w-md mx-auto px-6">
          {t(
            "We'd love to hear about it. Let's talk.",
            "نحب أن نسمع عنه. لنتحدث."
          )}
        </p>
        <Button href="/contact" variant="primary" size="lg" withArrow>
          {t("Start a project", "ابدأ مشروعك")}
        </Button>
      </section>
    </>
  );
}
