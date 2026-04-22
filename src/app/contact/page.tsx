"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "@/lib/LocaleContext";
import { siteContent } from "@/data/content";
import { fadeUp, staggerContainer } from "@/lib/animations";
import Button from "@/components/ui/Button";

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

type Status = "idle" | "submitting" | "success" | "error";

type FieldErrors = {
  name?: string;
  email?: string;
  message?: string;
};

export default function ContactPage() {
  const { t } = useTranslation();
  const labels = siteContent.contact.formLabels;

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [selectedService, setSelectedService] = useState("");
  const [selectedBudget, setSelectedBudget] = useState("");
  const [message, setMessage] = useState("");
  const [website, setWebsite] = useState(""); // honeypot
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<FieldErrors>({});

  const validate = (): FieldErrors => {
    const e: FieldErrors = {};
    if (!name.trim()) e.name = t("Please enter your name", "من فضلك أدخل اسمك");
    if (!email.trim()) {
      e.email = t("Email is required", "البريد الإلكتروني مطلوب");
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      e.email = t("Please enter a valid email", "من فضلك أدخل بريداً صحيحاً");
    }
    if (!message.trim() || message.trim().length < 10) {
      e.message = t(
        "Message is too short (min 10 characters)",
        "الرسالة قصيرة جداً (١٠ أحرف على الأقل)"
      );
    }
    return e;
  };

  async function handleSubmit(ev: FormEvent) {
    ev.preventDefault();
    const v = validate();
    setErrors(v);
    if (Object.keys(v).length) return;

    setStatus("submitting");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          company: company.trim(),
          service: selectedService,
          budget: selectedBudget,
          message: message.trim(),
          website, // honeypot
        }),
      });
      if (!res.ok) throw new Error("bad response");
      setStatus("success");
      setName("");
      setEmail("");
      setCompany("");
      setSelectedService("");
      setSelectedBudget("");
      setMessage("");
    } catch {
      setStatus("error");
    }
  }

  const inputBase =
    "w-full px-0 py-4 border-0 border-b-2 outline-none text-lg bg-transparent transition-colors focus:ring-0";
  const inputOk = "border-black/15 focus:border-brand-blue";
  const inputErr = "border-red-500 focus:border-red-500";
  const labelBase =
    "block text-xs font-bold uppercase tracking-[0.15em] text-black/60 mb-3";

  return (
    <main className="pt-40 pb-20 bg-surface relative overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-8 md:px-12 lg:px-20 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
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
            <p className="text-xl text-black/60 max-w-md leading-relaxed">
              {t(siteContent.contact.sub.en, siteContent.contact.sub.ar)}
            </p>
          </motion.div>

          <motion.div variants={fadeUp} className="space-y-6">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-black/50 mb-2 font-bold">
                {t("Direct Line", "خط مباشر")}
              </p>
              <a
                href={`mailto:${siteContent.contact.email}`}
                className="text-3xl md:text-4xl font-lyon font-bold text-brand-blue hover:text-brand-blue-dark transition-colors"
              >
                {siteContent.contact.email}
              </a>
            </div>
          </motion.div>
        </motion.section>

        {/* Right — Form */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {status === "success" ? (
            <div className="bg-white p-8 md:p-12 text-center">
              <div className="mx-auto mb-6 w-14 h-14 rounded-full bg-brand-green/20 flex items-center justify-center">
                <svg
                  className="w-7 h-7 text-brand-blue"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  aria-hidden="true"
                >
                  <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h2 className="text-3xl md:text-4xl font-lyon font-bold mb-4">
                {t("Thank you.", "شكراً لك.")}
              </h2>
              <p className="text-black/60 leading-relaxed mb-8">
                {t(
                  "We received your inquiry and will respond within 24 hours.",
                  "استلمنا استفسارك وسنرد خلال ٢٤ ساعة."
                )}
              </p>
              <button
                onClick={() => setStatus("idle")}
                className="text-brand-blue font-medium hover:underline"
              >
                {t("Send another inquiry", "إرسال استفسار آخر")}
              </button>
            </div>
          ) : (
            <form
              className="space-y-8 bg-white p-8 md:p-12"
              onSubmit={handleSubmit}
              noValidate
            >
              {/* Honeypot — hidden from users */}
              <div
                aria-hidden="true"
                style={{
                  position: "absolute",
                  left: "-9999px",
                  width: 1,
                  height: 1,
                  overflow: "hidden",
                }}
              >
                <label>
                  Website (do not fill)
                  <input
                    type="text"
                    name="website"
                    tabIndex={-1}
                    autoComplete="off"
                    value={website}
                    onChange={(e) => setWebsite(e.target.value)}
                  />
                </label>
              </div>

              {/* Name */}
              <div>
                <label htmlFor="contact-name" className={labelBase}>
                  {t(labels.name.en, labels.name.ar)}{" "}
                  <span className="text-red-500" aria-hidden="true">*</span>
                </label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  required
                  autoComplete="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? "err-name" : undefined}
                  className={`${inputBase} ${errors.name ? inputErr : inputOk}`}
                  placeholder={t("John Doe", "محمد أحمد")}
                />
                {errors.name && (
                  <p id="err-name" className="text-sm text-red-500 mt-2">
                    {errors.name}
                  </p>
                )}
              </div>

              {/* Email */}
              <div>
                <label htmlFor="contact-email" className={labelBase}>
                  {t(labels.email.en, labels.email.ar)}{" "}
                  <span className="text-red-500" aria-hidden="true">*</span>
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? "err-email" : undefined}
                  className={`${inputBase} ${errors.email ? inputErr : inputOk}`}
                  placeholder="name@company.com"
                />
                {errors.email && (
                  <p id="err-email" className="text-sm text-red-500 mt-2">
                    {errors.email}
                  </p>
                )}
              </div>

              {/* Company */}
              <div>
                <label htmlFor="contact-company" className={labelBase}>
                  {t(labels.company.en, labels.company.ar)}
                </label>
                <input
                  id="contact-company"
                  name="company"
                  type="text"
                  autoComplete="organization"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  className={`${inputBase} ${inputOk}`}
                  placeholder={t("Your company", "شركتك")}
                />
              </div>

              {/* Service */}
              <fieldset>
                <legend className={labelBase}>
                  {t(labels.service.en, labels.service.ar)}
                </legend>
                <div className="flex flex-wrap gap-3">
                  {services.map((s, i) => {
                    const val = t(s.en, s.ar);
                    const selected = selectedService === val;
                    return (
                      <button
                        key={i}
                        type="button"
                        onClick={() => setSelectedService(selected ? "" : val)}
                        aria-pressed={selected}
                        className={`px-5 py-2.5 text-sm font-medium border transition-all duration-300 ${
                          selected
                            ? "border-brand-blue bg-brand-blue text-white"
                            : "border-black/15 text-black/70 hover:border-brand-blue/40"
                        }`}
                      >
                        {val}
                      </button>
                    );
                  })}
                </div>
              </fieldset>

              {/* Budget */}
              <fieldset>
                <legend className={labelBase}>
                  {t(labels.budget.en, labels.budget.ar)}
                </legend>
                <div className="flex flex-wrap gap-3">
                  {budgets.map((b, i) => {
                    const val = t(b.en, b.ar);
                    const selected = selectedBudget === val;
                    return (
                      <button
                        key={i}
                        type="button"
                        onClick={() => setSelectedBudget(selected ? "" : val)}
                        aria-pressed={selected}
                        className={`px-5 py-2.5 text-sm font-medium border transition-all duration-300 ${
                          selected
                            ? "border-brand-blue bg-brand-blue text-white"
                            : "border-black/15 text-black/70 hover:border-brand-blue/40"
                        }`}
                      >
                        {val}
                      </button>
                    );
                  })}
                </div>
              </fieldset>

              {/* Message */}
              <div>
                <label htmlFor="contact-message" className={labelBase}>
                  {t(labels.message.en, labels.message.ar)}{" "}
                  <span className="text-red-500" aria-hidden="true">*</span>
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={5}
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  aria-invalid={!!errors.message}
                  aria-describedby={errors.message ? "err-message" : undefined}
                  className={`${inputBase} resize-none ${
                    errors.message ? inputErr : inputOk
                  }`}
                  placeholder={t(
                    "Tell us about your project...",
                    "أخبرنا عن مشروعك..."
                  )}
                />
                {errors.message && (
                  <p id="err-message" className="text-sm text-red-500 mt-2">
                    {errors.message}
                  </p>
                )}
              </div>

              {/* Error banner */}
              {status === "error" && (
                <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 text-sm">
                  {t(
                    "Something went wrong. Please try again or email us directly.",
                    "حدث خطأ ما. من فضلك حاول مرة أخرى أو راسلنا مباشرة."
                  )}
                </div>
              )}

              {/* Submit */}
              <div>
                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  disabled={status === "submitting"}
                  className="w-full"
                  withArrow={status !== "submitting"}
                >
                  {status === "submitting"
                    ? t("Sending…", "جاري الإرسال…")
                    : t(labels.submit.en, labels.submit.ar)}
                </Button>
              </div>
            </form>
          )}
        </motion.div>
      </div>
    </main>
  );
}
