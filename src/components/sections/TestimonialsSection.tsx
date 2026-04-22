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
      en: "The digital storefront genuinely feels like walking into our boutique. The Arabic typography and checkout flow are exceptional.",
      ar: "المتجر الرقمي يشبه تماماً تجربة دخول البوتيك. الخط العربي وتدفق الدفع استثنائيان.",
    },
    name: "Dolcebello",
    role: { en: "E-commerce Lead", ar: "مسؤول التجارة الإلكترونية" },
    company: "Dolcebello",
  },
  {
    quote: {
      en: "They rebuilt our entire booking platform without disrupting daily operations. Six steps handle our full workflow — no training needed.",
      ar: "أعادوا بناء منصة الحجز بالكامل دون تعطيل العمليات اليومية. الست خطوات تدير سير العمل كاملاً — دون تدريب.",
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
    <section
      className="py-24 md:py-36 bg-surface-low relative overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="max-w-[1440px] mx-auto px-6 sm:px-8 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12 lg:gap-20 items-start">
          {/* Left: label + navigator */}
          <div className="lg:sticky lg:top-32">
            <SectionLabel>
              {t("In their words", "بلسانهم")}
            </SectionLabel>
            <motion.h2
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-4xl md:text-5xl lg:text-6xl font-lyon font-bold tracking-tight mt-6 leading-[0.95]"
            >
              {t("Trusted by", "ثقة")}
              <br />
              <span className="text-brand-blue italic">
                {t("ambitious brands.", "علامات طموحة.")}
              </span>
            </motion.h2>

            {/* Navigator */}
            <div
              className="mt-10 flex items-center gap-5"
              role="tablist"
              aria-label={t("Testimonial navigator", "متصفح الشهادات")}
            >
              {testimonials.map((t_, i) => (
                <button
                  key={i}
                  role="tab"
                  aria-selected={i === active}
                  aria-label={t_.name}
                  onClick={() => setActive(i)}
                  className={`text-[10px] uppercase tracking-[0.2em] font-bold transition-colors focus:outline-none focus-visible:outline-2 focus-visible:outline-brand-blue focus-visible:outline-offset-2 ${
                    i === active
                      ? "text-brand-blue"
                      : "text-black/30 hover:text-black/60"
                  }`}
                >
                  {String(i + 1).padStart(2, "0")}
                </button>
              ))}
            </div>
          </div>

          {/* Right: quote */}
          <div className="relative min-h-[360px]">
            <AnimatePresence mode="wait">
              <motion.figure
                key={active}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              >
                <span
                  className="block font-lyon text-7xl md:text-9xl text-brand-blue/50 leading-none mb-2 -ml-1"
                  aria-hidden="true"
                >
                  &ldquo;
                </span>
                <blockquote className="font-lyon text-2xl md:text-3xl lg:text-4xl font-bold text-black/85 leading-[1.3] max-w-3xl">
                  {t(current.quote.en, current.quote.ar)}
                </blockquote>

                <figcaption className="mt-10 md:mt-12 flex items-center gap-5">
                  <div className="w-12 h-12 rounded-full bg-brand-blue/10 flex items-center justify-center shrink-0">
                    <span className="font-lyon font-bold text-brand-blue text-lg">
                      {current.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <div className="text-base font-bold text-black">
                      {current.name}
                    </div>
                    <div className="text-sm text-black/55 mt-0.5">
                      {t(current.role.en, current.role.ar)} — {current.company}
                    </div>
                  </div>
                </figcaption>
              </motion.figure>
            </AnimatePresence>

            <p className="absolute bottom-0 left-0 right-0 text-[10px] text-black/35 uppercase tracking-[0.2em] font-medium">
              {t(
                "Quotes composed from client feedback — signed attribution coming soon",
                "اقتباسات مستنبطة من ملاحظات العملاء — توثيق كامل قريباً"
              )}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
