"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "@/lib/LocaleContext";
import { fadeUp } from "@/lib/animations";
import SectionLabel from "@/components/ui/SectionLabel";

type Testimonial = {
  quote: { en: string; ar: string };
  name: string;
  role: { en: string; ar: string };
  company: string;
};

const testimonials: Testimonial[] = [
  {
    quote: {
      en: "Maatouk Studio took our vision and built a digital storefront that genuinely feels like our boutique. The attention to Arabic typography and checkout flow is exceptional.",
      ar: "استوديو معتوق أخذ رؤيتنا وبنى متجراً رقمياً يشبه تماماً تجربة البوتيك. الاهتمام بالخط العربي وتدفق الدفع استثنائي.",
    },
    name: "Dolcebello Team",
    role: { en: "E-commerce Lead", ar: "مسؤول التجارة الإلكترونية" },
    company: "Dolcebello",
  },
  {
    quote: {
      en: "They rebuilt our entire booking platform without disrupting daily operations. Six-step wizard handles our full workflow — no training needed for the team.",
      ar: "أعادوا بناء منصة الحجز بالكامل دون تعطيل العمليات اليومية. معالج الست خطوات يدير سير عملنا كاملاً — دون الحاجة لتدريب الفريق.",
    },
    name: "Nobles Catering",
    role: { en: "Operations Director", ar: "مدير العمليات" },
    company: "Nobles Catering",
  },
  {
    quote: {
      en: "Finally — an accounting system designed around Arabic, not retrofitted. Meezan changed how our team works day-to-day.",
      ar: "أخيراً — نظام محاسبة مصمم حول العربية، لا مُعدَّل. ميزان غيّر طريقة عمل فريقنا يومياً.",
    },
    name: "Meezan",
    role: { en: "Finance Manager", ar: "مدير مالي" },
    company: "Meezan",
  },
  {
    quote: {
      en: "From strategy to motion to code, it was one team and one vision. The difference is in how coherent everything feels.",
      ar: "من الاستراتيجية للموشن للكود، كان فريقاً واحداً برؤية واحدة. الفرق يظهر في مدى ترابط كل شيء.",
    },
    name: "Royal Catering",
    role: { en: "Marketing Lead", ar: "مسؤول تسويق" },
    company: "Royal Catering",
  },
];

export default function TestimonialsSection() {
  const { t } = useTranslation();
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => {
      setActive((i) => (i + 1) % testimonials.length);
    }, 7500);
    return () => clearInterval(id);
  }, [paused]);

  const current = testimonials[active];

  return (
    <section className="py-24 md:py-36 bg-white relative overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-8 md:px-12 lg:px-20">
        <div className="text-center mb-14 md:mb-20">
          <SectionLabel className="justify-center">
            {t("What clients say", "ماذا يقول العملاء")}
          </SectionLabel>
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-4xl md:text-6xl lg:text-7xl font-lyon font-bold tracking-tight mt-6 max-w-3xl mx-auto"
          >
            {t("Trusted by ambitious brands.", "ثقة العلامات الطموحة.")}
          </motion.h2>
        </div>

        <div
          className="max-w-4xl mx-auto"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {/* Quote */}
          <div className="relative min-h-[260px] md:min-h-[220px]">
            <AnimatePresence mode="wait">
              <motion.blockquote
                key={active}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="text-2xl md:text-3xl lg:text-4xl font-lyon font-bold text-black/85 leading-[1.3] text-center"
              >
                <span className="text-brand-blue text-6xl md:text-7xl font-lyon leading-none block mb-3" aria-hidden="true">
                  &ldquo;
                </span>
                {t(current.quote.en, current.quote.ar)}
              </motion.blockquote>
            </AnimatePresence>
          </div>

          {/* Attribution */}
          <div className="mt-10 md:mt-14 flex flex-col items-center gap-1">
            <AnimatePresence mode="wait">
              <motion.div
                key={`attr-${active}`}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.4 }}
                className="text-center"
              >
                <div className="text-sm md:text-base font-bold text-black">
                  {current.name}
                </div>
                <div className="text-xs md:text-sm text-black/50 mt-1">
                  {t(current.role.en, current.role.ar)} — {current.company}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dots */}
          <div
            className="mt-10 flex items-center justify-center gap-2"
            role="tablist"
            aria-label={t("Testimonial selector", "محدد الشهادات")}
          >
            {testimonials.map((_, i) => (
              <button
                key={i}
                role="tab"
                aria-selected={i === active}
                aria-label={t(`Testimonial ${i + 1}`, `شهادة ${i + 1}`)}
                onClick={() => setActive(i)}
                className={`h-1.5 transition-all duration-300 focus:outline-none focus-visible:outline-2 focus-visible:outline-brand-blue focus-visible:outline-offset-2 ${
                  i === active
                    ? "w-10 bg-brand-blue"
                    : "w-5 bg-black/15 hover:bg-black/30"
                }`}
              />
            ))}
          </div>

          {/* Note */}
          <p className="mt-8 text-[11px] text-center text-black/35 uppercase tracking-[0.2em] font-medium">
            {t(
              "Quotes composed from client feedback — verified attribution coming soon",
              "اقتباسات مستنبطة من ملاحظات العملاء — توثيق كامل قريباً"
            )}
          </p>
        </div>
      </div>
    </section>
  );
}
