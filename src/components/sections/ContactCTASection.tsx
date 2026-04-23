"use client";

import { motion } from "framer-motion";
import { useTranslation } from "@/lib/LocaleContext";
import Button from "@/components/ui/Button";

const WHATSAPP_URL = "https://wa.me/201064889808";

function WhatsAppIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={`shrink-0 ${className}`}
      aria-hidden="true"
    >
      <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 0 1 2.41 5.83c0 4.54-3.7 8.23-8.24 8.23-1.48 0-2.93-.39-4.19-1.15l-.3-.17-3.12.82.83-3.04-.2-.32a8.188 8.188 0 0 1-1.26-4.38c.01-4.54 3.7-8.24 8.25-8.24M8.53 7.33c-.16 0-.43.06-.66.31-.22.25-.87.86-.87 2.07 0 1.22.89 2.39 1 2.56.14.17 1.76 2.67 4.25 3.73.59.27 1.05.42 1.41.53.59.19 1.13.16 1.56.1.48-.07 1.46-.6 1.67-1.18.21-.58.21-1.07.15-1.18-.07-.1-.23-.16-.48-.27-.25-.14-1.47-.74-1.69-.82-.23-.08-.4-.12-.56.12-.17.25-.64.81-.78.97-.15.17-.29.19-.53.07-.26-.13-1.06-.39-2-1.23-.74-.66-1.23-1.47-1.38-1.72-.12-.24-.01-.39.11-.5.11-.11.27-.29.37-.44.13-.14.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.4-.42-.56-.43-.14 0-.3-.01-.47-.01Z" />
    </svg>
  );
}

export default function ContactCTASection() {
  const { t, locale } = useTranslation();

  return (
    <section className="py-12 md:py-16 bg-surface">
      <div className="max-w-[1320px] mx-auto px-6 sm:px-8 md:px-12 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative rounded-[36px] md:rounded-[48px] bg-brand-blue text-white overflow-hidden"
        >
          {/* Ambient glows */}
          <div
            className="absolute top-[-120px] right-[-100px] w-[460px] h-[460px] rounded-full bg-brand-green/30 blur-3xl pointer-events-none"
            aria-hidden="true"
          />
          <div
            className="absolute bottom-[-120px] left-[-80px] w-[400px] h-[400px] rounded-full bg-white/10 blur-3xl pointer-events-none"
            aria-hidden="true"
          />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-10 lg:gap-16 p-10 md:p-16 lg:p-20 items-end">
            {/* Left: pill + headline */}
            <div>
              <div className="kicker-pill kicker-pill-dark mb-8">
                <span className="kicker-pill-dot bg-brand-green" />
                {t("Get in touch", "تواصل")}
              </div>

              <h2
                className={`font-lyon font-bold tracking-[-0.035em] text-4xl md:text-6xl lg:text-[5rem] ${
                  locale === "ar" ? "leading-[1.2]" : "leading-[0.95]"
                }`}
              >
                {t("Let's build together", "لنبنِ معاً")}
                <br />
                <span className="text-brand-green italic">
                  {t("something unforgettable.", "شيئاً لا يُنسى.")}
                </span>
              </h2>
            </div>

            {/* Right: description + CTAs + pledge */}
            <div className="space-y-7 md:space-y-8">
              <p className="text-base md:text-lg text-white/80 leading-relaxed max-w-md">
                {t(
                  "Start with a short message. We'll reply with a real plan — no templates, no overselling.",
                  "ابدأ برسالة قصيرة. نردّ بخطّةٍ واضحة — لا قوالبَ جاهزة، ولا وعودَ مُبالغٌ فيها."
                )}
              </p>

              <div className="flex flex-wrap items-center gap-3">
                <Button href="/contact" variant="dark" size="lg" withArrow>
                  {t("Start your project", "ابدأ مشروعك")}
                </Button>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white/10 border border-white/15 text-white text-[15px] font-medium tracking-[-0.01em] hover:bg-white/15 hover:border-white/25 transition-all duration-300"
                >
                  <WhatsAppIcon className="w-4 h-4 text-brand-green" />
                  <span>{t("Chat on WhatsApp", "تواصل واتساب")}</span>
                </a>
              </div>

              <div className="pt-6 border-t border-white/15">
                <p className="text-sm text-white/70 leading-relaxed max-w-md">
                  {t(
                    "One project at a time, with full focus. We reply within 24 hours — to every message.",
                    "مشروعٌ واحد في المرّة، بتركيزٍ كامل. نردّ خلال ٢٤ ساعة — على كل رسالة."
                  )}
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
