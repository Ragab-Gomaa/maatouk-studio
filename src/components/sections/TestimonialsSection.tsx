"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "@/lib/LocaleContext";

type Testimonial = {
  quote: { en: string; ar: string };
  name: string;
  role: { en: string; ar: string };
};

const testimonials: Testimonial[] = [
  {
    quote: {
      en: "They treated our brand like it mattered — because to them, it did. The Arabic typography work alone was worth the engagement.",
      ar: "تعاملوا مع هويتنا وكأنها مهمة — لأنها عندهم كانت كذلك. العمل على الخط العربي وحده كان يستحق التعاقد.",
    },
    name: "Client A",
    role: { en: "Luxury retail", ar: "تجزئة فاخرة" },
  },
  {
    quote: {
      en: "What impressed us most wasn't the design — it was the thinking behind it. Every decision had a reason.",
      ar: "ما أثار إعجابنا لم يكن التصميم بحد ذاته — بل التفكير خلفه. كل قرار كان مُعلّلاً.",
    },
    name: "Client B",
    role: { en: "Hospitality", ar: "ضيافة" },
  },
  {
    quote: {
      en: "Delivered on time, to spec, and better than we imagined. One team from strategy to ship.",
      ar: "تسليم في الموعد، حسب المطلوب، وأفضل مما تخيلنا. فريق واحد من الاستراتيجية إلى الإطلاق.",
    },
    name: "Client C",
    role: { en: "SaaS platform", ar: "منصة SaaS" },
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
    }, 7000);
    return () => clearInterval(id);
  }, [paused]);

  const current = testimonials[active];

  return (
    <section
      className="py-14 md:py-20 bg-surface-low relative"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="max-w-[1320px] mx-auto px-6 sm:px-8 md:px-12 lg:px-16">
        <div className="relative studio-card rounded-[32px] md:rounded-[40px] p-8 md:p-14 lg:p-20 overflow-hidden">
          {/* Corner quote mark */}
          <span
            className="absolute top-8 left-10 md:top-12 md:left-16 font-lyon text-[9rem] md:text-[12rem] leading-none text-brand-blue/10 select-none pointer-events-none"
            aria-hidden="true"
          >
            &ldquo;
          </span>

          <div className="relative grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-10 lg:gap-16 items-start">
            {/* Left: label */}
            <div>
              <span className="inline-flex items-center gap-2 pl-2 pr-4 py-1 bg-surface-low rounded-full border border-black/[0.06] text-[11px] uppercase tracking-[0.2em] font-semibold text-ink-muted mb-5">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-blue" />
                {t("Voices", "أصوات")}
              </span>
              <h2 className="font-lyon font-bold tracking-[-0.03em] text-3xl md:text-4xl lg:text-5xl leading-[0.95] max-w-sm">
                {t("What clients", "ماذا يقول")}
                <br />
                <span className="text-brand-blue italic">{t("say.", "العملاء.")}</span>
              </h2>

              <div
                className="mt-8 flex items-center gap-4"
                role="tablist"
                aria-label={t("Testimonial navigator", "متصفح الشهادات")}
              >
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    role="tab"
                    aria-selected={i === active}
                    onClick={() => setActive(i)}
                    className={`text-[11px] uppercase tracking-[0.2em] font-semibold transition-colors focus:outline-none focus-visible:outline-2 focus-visible:outline-brand-blue focus-visible:outline-offset-2 ${
                      i === active ? "text-brand-blue" : "text-ink-whisper hover:text-ink-muted"
                    }`}
                  >
                    0{i + 1}
                  </button>
                ))}
              </div>
            </div>

            {/* Right: quote */}
            <div className="relative min-h-[280px]">
              <AnimatePresence mode="wait">
                <motion.figure
                  key={active}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.5 }}
                >
                  <blockquote className="font-lyon text-2xl md:text-3xl lg:text-[2.25rem] font-bold text-ink leading-[1.25] tracking-[-0.02em] max-w-3xl">
                    {t(current.quote.en, current.quote.ar)}
                  </blockquote>
                  <figcaption className="mt-10 flex items-center gap-4">
                    <span className="w-12 h-12 rounded-full bg-brand-blue/10 flex items-center justify-center font-lyon font-bold text-brand-blue">
                      {current.name.split(" ").pop()?.charAt(0)}
                    </span>
                    <div>
                      <div className="font-medium text-ink">{current.name}</div>
                      <div className="text-sm text-ink-soft">
                        {t(current.role.en, current.role.ar)}
                      </div>
                    </div>
                  </figcaption>
                </motion.figure>
              </AnimatePresence>

              <p className="absolute bottom-0 left-0 right-0 text-[10px] text-ink-whisper uppercase tracking-[0.2em] font-medium">
                {t(
                  "Representative client feedback · Signed attribution soon",
                  "ملاحظات تمثيلية من العملاء · توثيق كامل قريباً"
                )}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
