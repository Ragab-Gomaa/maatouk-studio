"use client";

import { motion } from "framer-motion";
import { useTranslation } from "@/lib/LocaleContext";
import ContactCTASection from "@/components/sections/ContactCTASection";

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
    title: { en: "Branding", ar: "الهويّة البصريّة" },
    tagline: { en: "Identities that endure.", ar: "هويّةٌ تَبقى." },
    description: {
      en: "We build brand systems from the ground up — positioning, naming, logo, typography, color, and guidelines. Coherent identities that work at every scale, in every medium.",
      ar: "نبني أنظمة هويّةٍ كاملة من الصفر — تموضع، تسمية، شعار، نظام خطوط، ألوان، ودليل استخدام. هويّاتٌ متماسكة تعمل على كلّ حجم، وفي كلّ وسيط.",
    },
    capabilities: [
      { en: "Brand strategy & positioning", ar: "استراتيجيّة العلامة وتموضعها" },
      { en: "Naming & verbal identity", ar: "التسمية والصوت اللفظي" },
      { en: "Logo & visual identity", ar: "الشعار والهويّة البصريّة" },
      { en: "Typography systems", ar: "نظام الخطوط" },
      { en: "Color systems", ar: "نظام الألوان" },
      { en: "Brand guidelines", ar: "دليل استخدام العلامة" },
      { en: "Brand applications", ar: "تطبيقات العلامة" },
    ],
    typicalDeliverables: [
      { en: "Strategy document", ar: "وثيقة الاستراتيجيّة" },
      { en: "Logo suite + lockups", ar: "مجموعة الشعار وتراكيبه" },
      { en: "Typography pairings", ar: "اقتران الخطوط" },
      { en: "Color palette + rules", ar: "لوحة الألوان وقواعدها" },
      { en: "100+ page guidelines", ar: "دليلٌ من +١٠٠ صفحة" },
    ],
    timeline: { en: "4–8 weeks", ar: "٤–٨ أسابيع" },
  },
  {
    number: "02",
    title: { en: "Motion Graphics", ar: "الموشن جرافيك" },
    tagline: { en: "Every frame counts.", ar: "كلّ إطارٍ يُحسَب." },
    description: {
      en: "From logo animation to full campaign films. We design motion systems — how your brand moves on screens, in feeds, and inside products. Every frame serves the story.",
      ar: "من تحريك الشعار إلى أفلام الحملات الكاملة. نصمّم منظومة موشن — كيف تتحرّك علامتك على الشاشات، في المنصّات، وداخل المنتجات. كلّ إطارٍ يخدم القصّة.",
    },
    capabilities: [
      { en: "Logo animation", ar: "تحريك الشعار" },
      { en: "Brand motion systems", ar: "منظومة الموشن للعلامة" },
      { en: "Campaign ads & promos", ar: "إعلانات الحملات" },
      { en: "Explainer videos", ar: "فيديوهات تعريفيّة" },
      { en: "Product motion", ar: "حركة المنتج الرقمي" },
      { en: "Social content systems", ar: "محتوى السوشيال ميديا" },
      { en: "Title sequences", ar: "تتر المقدّمات" },
    ],
    typicalDeliverables: [
      { en: "Motion guidelines", ar: "دليل الموشن" },
      { en: "Hero animations", ar: "تحريكات رئيسيّة" },
      { en: "Social media kit", ar: "حزمة محتوى السوشيال" },
      { en: "Source files", ar: "ملفات المصدر" },
      { en: "Export variants", ar: "صيغ تصدير متعدّدة" },
    ],
    timeline: { en: "2–6 weeks per deliverable", ar: "٢–٦ أسابيع لكلّ تسليم" },
  },
  {
    number: "03",
    title: { en: "Digital Products", ar: "المنتجات الرقميّة" },
    tagline: { en: "Built to work, not just to look.", ar: "تعمل، لا تُعرض فقط." },
    description: {
      en: "Websites, apps, and digital products — designed and built in-house. From marketing sites to full platforms, we handle strategy, UX, interface design, and engineering under one roof.",
      ar: "مواقع، تطبيقات، ومنتجات رقميّة — تُصمَّم وتُطوَّر داخل الاستوديو. من المواقع التسويقيّة إلى المنصّات الكاملة، نتولّى الاستراتيجيّة، وتجربة المستخدم، والتصميم، والتطوير — تحت سقفٍ واحد.",
    },
    capabilities: [
      { en: "Product strategy & UX", ar: "استراتيجيّة المنتج وتجربة المستخدم" },
      { en: "Interface design", ar: "تصميم الواجهات" },
      { en: "Marketing sites", ar: "مواقع تسويقيّة" },
      { en: "Web applications", ar: "تطبيقات الويب" },
      { en: "Mobile apps", ar: "تطبيقات الجوال" },
      { en: "E-commerce platforms", ar: "منصّات تجارة إلكترونيّة" },
      { en: "Performance & SEO", ar: "الأداء وتحسين الظهور" },
    ],
    typicalDeliverables: [
      { en: "Design system", ar: "نظام تصميم" },
      { en: "Prototype & flows", ar: "نموذج أوّلي وتدفّقات" },
      { en: "Shipped product", ar: "منتجٌ جاهزٌ للإطلاق" },
      { en: "Admin dashboard", ar: "لوحة تحكّم" },
      { en: "Documentation", ar: "توثيقٌ تقنيّ" },
    ],
    timeline: { en: "6–16 weeks", ar: "٦–١٦ أسبوعاً" },
  },
];

export default function ServicesPage() {
  const { t, locale } = useTranslation();

  return (
    <>
      {/* Hero */}
      <section className="pt-28 md:pt-32 pb-10 md:pb-14 bg-surface relative overflow-hidden">
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
              {t("Services", "خدماتنا")}
            </span>
            <h1
              className={`font-lyon font-bold tracking-[-0.035em] text-5xl md:text-7xl lg:text-[6rem] text-ink max-w-4xl ${
                locale === "ar" ? "leading-[1.2]" : "leading-[0.92]"
              }`}
            >
              {t("Three disciplines.", "ثلاث تخصّصات.")}
              <br />
              <span className="text-brand-blue italic">
                {t("One vision.", "رؤيةٌ واحدة.")}
              </span>
            </h1>
            <p className="mt-6 text-base md:text-lg text-ink-soft max-w-2xl leading-relaxed text-pretty">
              {t(
                "Identity, motion, and digital products — one team working across all three. Here's how we show up in each discipline.",
                "الهويّة، الموشن، والمنتجات الرقميّة — فريقٌ واحد يعمل في الثلاثة. هذه طريقتنا في كلّ تخصّص."
              )}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section className="py-12 md:py-16 bg-surface-low">
        <div className="max-w-[1320px] mx-auto px-6 sm:px-8 md:px-12 lg:px-16">
          <div className="space-y-12 md:space-y-16">
            {services.map((service) => (
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
                    <h2
                      className={`font-lyon font-bold tracking-[-0.03em] text-4xl md:text-5xl lg:text-6xl mb-4 ${
                        locale === "ar" ? "leading-[1.15]" : "leading-[0.9]"
                      }`}
                    >
                      {t(service.title.en, service.title.ar)}
                    </h2>
                    <p className="font-lyon italic text-xl md:text-2xl text-ink-muted mb-6 max-w-xs">
                      {t(service.tagline.en, service.tagline.ar)}
                    </p>
                    <p className="text-base md:text-lg text-ink-soft leading-relaxed max-w-md mb-8 text-pretty">
                      {t(service.description.en, service.description.ar)}
                    </p>

                    <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] font-semibold text-ink-muted">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-green" />
                      {t("Typical timeline:", "المدّة المعتادة:")}
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
                        {t("Capabilities", "ما نتقنه")}
                      </h3>
                      <ul className="space-y-3">
                        {service.capabilities.map((c, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-3 text-sm md:text-[15px] text-ink-muted"
                          >
                            <span className="w-1 h-1 rounded-full bg-brand-blue mt-2 shrink-0" />
                            {t(c.en, c.ar)}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Deliverables */}
                    <div>
                      <h3 className="text-[10px] uppercase tracking-[0.25em] font-bold text-ink-muted mb-5">
                        {t("Typical deliverables", "ما نسلّمه عادةً")}
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

      {/* Closing CTA */}
      <ContactCTASection />
    </>
  );
}
