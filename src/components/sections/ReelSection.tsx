"use client";

import { motion } from "framer-motion";
import { useTranslation } from "@/lib/LocaleContext";
import { fadeUp } from "@/lib/animations";

/**
 * ReelSection — a full-width marquee of the studio's disciplines + a single
 * philosophical pull-quote below, set on a deep dark field for contrast.
 */
const marqueeItems: { en: string; ar: string }[] = [
  { en: "Branding", ar: "هوية بصرية" },
  { en: "Visual Identity", ar: "الهوية البصرية" },
  { en: "Motion", ar: "تصميم حركة" },
  { en: "Brand Animation", ar: "تحريك العلامة" },
  { en: "Websites", ar: "مواقع إلكترونية" },
  { en: "E-commerce", ar: "تجارة إلكترونية" },
  { en: "ERP & Platforms", ar: "أنظمة ومنصات" },
  { en: "Strategy", ar: "استراتيجية" },
  { en: "Bilingual Design", ar: "تصميم ثنائي اللغة" },
];

function MarqueeRow({
  reverse,
  t,
}: {
  reverse?: boolean;
  t: (en: string, ar: string) => string;
}) {
  const items = reverse ? [...marqueeItems].reverse() : marqueeItems;
  const repeated = [...items, ...items, ...items];

  return (
    <div className="overflow-hidden marquee-ltr-only">
      <motion.div
        animate={{ x: reverse ? ["0%", "-50%"] : ["-50%", "0%"] }}
        transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
        className="flex items-center gap-10 md:gap-14 whitespace-nowrap w-max"
      >
        {repeated.map((item, i) => (
          <span key={i} className="flex items-center gap-10 md:gap-14">
            <span className="text-4xl md:text-6xl lg:text-7xl font-lyon font-bold text-white/10 hover:text-white/30 transition-colors duration-500 cursor-default">
              {t(item.en, item.ar)}
            </span>
            <span
              className="w-2 h-2 rotate-45 bg-brand-green/40 shrink-0"
              aria-hidden="true"
            />
          </span>
        ))}
      </motion.div>
    </div>
  );
}

export default function ReelSection() {
  const { t } = useTranslation();

  return (
    <section className="bg-black text-white relative overflow-hidden">
      {/* Marquee — top rows */}
      <div className="py-12 md:py-16 space-y-6 md:space-y-8">
        <MarqueeRow t={t} />
        <MarqueeRow reverse t={t} />
      </div>

      {/* Divider */}
      <div className="max-w-[1440px] mx-auto px-6 sm:px-8 md:px-12 lg:px-20">
        <div className="h-px bg-white/10" />
      </div>

      {/* Studio statement */}
      <div className="max-w-[1440px] mx-auto px-6 sm:px-8 md:px-12 lg:px-20 py-24 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-10 lg:gap-20">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="lg:sticky lg:top-32"
          >
            <div className="flex items-center gap-3 mb-5">
              <span className="w-2 h-2 rotate-45 bg-brand-green" />
              <span className="text-xs font-medium uppercase tracking-[0.25em] text-brand-green">
                {t("A statement", "بيان")}
              </span>
            </div>
            <div className="text-[10px] text-white/40 uppercase tracking-[0.3em] font-medium">
              {t("Studio philosophy", "فلسفة الاستوديو")}
            </div>
          </motion.div>

          <motion.blockquote
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="font-lyon text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-[1.05]"
          >
            {t(
              "We don't just make things that look good — we make them ",
              "لا نكتفي بأن تبدو الأشياء جيدة — بل نصنعها "
            )}
            <span className="text-brand-green italic">
              {t("work hard.", "تعمل بجد.")}
            </span>
          </motion.blockquote>
        </div>
      </div>

      {/* Marquee — bottom rows */}
      <div className="py-12 md:py-16 space-y-6 md:space-y-8 border-t border-white/10">
        <MarqueeRow t={t} />
      </div>
    </section>
  );
}
