"use client";

import { motion } from "framer-motion";
import { useTranslation } from "@/lib/LocaleContext";
import { fadeUp } from "@/lib/animations";

const marqueeItems = [
  { en: "Branding", ar: "هوية بصرية" },
  { en: "Motion Design", ar: "تصميم حركة" },
  { en: "Websites", ar: "مواقع إلكترونية" },
  { en: "Strategy", ar: "استراتيجية" },
  { en: "Visual Identity", ar: "الهوية البصرية" },
  { en: "Digital Experience", ar: "تجربة رقمية" },
];

function MarqueeRow({ reverse, t }: { reverse?: boolean; t: (en: string, ar: string) => string }) {
  const items = reverse ? [...marqueeItems].reverse() : marqueeItems;
  const repeated = [...items, ...items, ...items, ...items];

  return (
    <div className="overflow-hidden">
      <motion.div
        animate={{ x: reverse ? ["0%", "-50%"] : ["-50%", "0%"] }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        className="flex items-center gap-8 whitespace-nowrap w-max"
      >
        {repeated.map((item, i) => (
          <span key={i} className="flex items-center gap-8">
            <span className="text-4xl md:text-5xl lg:text-6xl font-lyon font-bold text-white/20 hover:text-white/50 transition-colors duration-500 cursor-default">
              {t(item.en, item.ar)}
            </span>
            <span className="w-2 h-2 rotate-45 bg-brand-green/30 shrink-0" />
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
      {/* Marquee */}
      <div className="py-12 md:py-16 space-y-6">
        <MarqueeRow t={t} />
        <MarqueeRow reverse t={t} />
      </div>

      {/* Statement */}
      <div className="max-w-[1440px] mx-auto px-8 md:px-12 lg:px-20 pb-24 md:pb-36 pt-8 md:pt-12">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center"
        >
          <span className="w-2 h-2 rotate-45 bg-brand-green inline-block mb-8" />
          <blockquote className="text-3xl md:text-5xl lg:text-6xl font-lyon font-bold tracking-tight leading-[1.1] max-w-4xl mx-auto mb-8">
            {t(
              "We don't just make things look good — we make them ",
              "لا نكتفي بأن تبدو الأشياء جيدة — بل نجعلها "
            )}
            <span className="text-brand-green">
              {t("work.", "تعمل.")}
            </span>
          </blockquote>
          <p className="text-sm text-white/30 uppercase tracking-[0.2em] font-medium">
            {t("Studio philosophy", "فلسفة الاستوديو")}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
