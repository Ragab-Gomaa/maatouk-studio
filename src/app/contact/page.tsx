"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "@/lib/LocaleContext";
import { siteContent } from "@/data/content";
import { fadeUp, staggerContainer } from "@/lib/animations";

const services = [
  { en: "Branding", ar: "هوية بصرية" },
  { en: "Motion Design", ar: "تصميم حركة" },
  { en: "Website", ar: "موقع إلكتروني" },
  { en: "Full Package", ar: "حزمة كاملة" },
];

const budgets = [
  { en: "< $10k", ar: "أقل من ١٠ آلاف" },
  { en: "$10k – $25k", ar: "١٠ – ٢٥ ألف" },
  { en: "$25k – $50k", ar: "٢٥ – ٥٠ ألف" },
  { en: "$50k+", ar: "أكثر من ٥٠ ألف" },
];

export default function ContactPage() {
  const { t } = useTranslation();
  const labels = siteContent.contact.formLabels;
  const [selectedService, setSelectedService] = useState("");
  const [selectedBudget, setSelectedBudget] = useState("");

  return (
    <main className="pt-40 pb-20 bg-surface relative overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-8 md:px-12 lg:px-20 grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
        {/* Left — Info */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="space-y-16"
        >
          <motion.div variants={fadeUp} className="space-y-8">
            <div className="flex items-center gap-3">
              <span className="w-2 h-2 rotate-45 bg-brand-blue" />
              <span className="text-xs font-medium uppercase tracking-[0.25em] text-brand-blue">
                {t("Contact", "تواصل")}
              </span>
              <span className="h-px w-12 bg-brand-blue/20" />
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-lyon font-bold tracking-tight leading-[0.9]">
              {t("Let's build", "لنبنِ معاً")}
              <br />
              <span className="text-brand-blue">
                {t("something remarkable.", "شيئاً استثنائياً.")}
              </span>
            </h1>
            <p className="text-xl text-black/50 max-w-md leading-relaxed">
              {t(siteContent.contact.sub.en, siteContent.contact.sub.ar)}
            </p>
          </motion.div>

          <motion.div variants={fadeUp} className="space-y-6">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-black/30 mb-2 font-bold">
                {t("Direct Line", "خط مباشر")}
              </p>
              <a
                href={`mailto:${siteContent.contact.email}`}
                className="text-3xl md:text-4xl font-lyon font-bold text-brand-blue hover:text-brand-blue-dark transition-colors"
              >
                {siteContent.contact.email}
              </a>
            </div>
            <div className="flex gap-6 pt-4">
              {["Instagram", "Behance", "LinkedIn"].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="text-xs font-bold uppercase tracking-[0.15em] text-black/30 hover:text-brand-blue transition-colors"
                >
                  {s}
                </a>
              ))}
            </div>
          </motion.div>
        </motion.section>

        {/* Right — Form */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <form className="space-y-8 bg-white p-8 md:p-12" onSubmit={(e) => e.preventDefault()}>
            {/* Name */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-[0.15em] text-black/30 mb-3">
                {t(labels.name.en, labels.name.ar)}
              </label>
              <input
                type="text"
                required
                className="w-full px-0 py-4 border-0 border-b-2 border-black/10 focus:border-brand-blue outline-none text-lg bg-transparent transition-colors"
                placeholder={t("John Doe", "محمد أحمد")}
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-[0.15em] text-black/30 mb-3">
                {t(labels.email.en, labels.email.ar)}
              </label>
              <input
                type="email"
                required
                className="w-full px-0 py-4 border-0 border-b-2 border-black/10 focus:border-brand-blue outline-none text-lg bg-transparent transition-colors"
                placeholder="name@company.com"
              />
            </div>

            {/* Service */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-[0.15em] text-black/30 mb-4">
                {t(labels.service.en, labels.service.ar)}
              </label>
              <div className="flex flex-wrap gap-3">
                {services.map((s, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setSelectedService(t(s.en, s.ar))}
                    className={`px-5 py-2.5 text-sm font-medium border transition-all duration-300 ${
                      selectedService === t(s.en, s.ar)
                        ? "border-brand-blue bg-brand-blue text-white"
                        : "border-black/10 text-black/60 hover:border-brand-blue/30"
                    }`}
                  >
                    {t(s.en, s.ar)}
                  </button>
                ))}
              </div>
            </div>

            {/* Budget */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-[0.15em] text-black/30 mb-4">
                {t(labels.budget.en, labels.budget.ar)}
              </label>
              <div className="flex flex-wrap gap-3">
                {budgets.map((b, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setSelectedBudget(t(b.en, b.ar))}
                    className={`px-5 py-2.5 text-sm font-medium border transition-all duration-300 ${
                      selectedBudget === t(b.en, b.ar)
                        ? "border-brand-blue bg-brand-blue text-white"
                        : "border-black/10 text-black/60 hover:border-brand-blue/30"
                    }`}
                  >
                    {t(b.en, b.ar)}
                  </button>
                ))}
              </div>
            </div>

            {/* Message */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-[0.15em] text-black/30 mb-3">
                {t(labels.message.en, labels.message.ar)}
              </label>
              <textarea
                rows={4}
                required
                className="w-full px-0 py-4 border-0 border-b-2 border-black/10 focus:border-brand-blue outline-none text-lg bg-transparent transition-colors resize-none"
                placeholder={t(
                  "Tell us about your project...",
                  "أخبرنا عن مشروعك..."
                )}
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full py-5 bg-brand-blue text-white text-base font-bold hover:bg-brand-blue-dark transition-colors duration-300 shine-sweep"
            >
              {t(labels.submit.en, labels.submit.ar)} →
            </button>
          </form>
        </motion.div>
      </div>
    </main>
  );
}
