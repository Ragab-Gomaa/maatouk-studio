"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "@/lib/LocaleContext";
import Button from "@/components/ui/Button";

const services = [
  { en: "Branding", ar: "هوية بصرية" },
  { en: "Motion Design", ar: "تصميم حركة" },
  { en: "Digital Product", ar: "منتج رقمي" },
  { en: "Full Package", ar: "حزمة كاملة" },
];

const budgets = [
  { en: "< $10k", ar: "أقل من ١٠ آلاف" },
  { en: "$10k – $25k", ar: "١٠ – ٢٥ ألف" },
  { en: "$25k – $50k", ar: "٢٥ – ٥٠ ألف" },
  { en: "$50k+", ar: "أكثر من ٥٠ ألف" },
];

type Status = "idle" | "submitting" | "success" | "error";
type Errors = { name?: string; email?: string; message?: string };

export default function ContactPage() {
  const { t } = useTranslation();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [service, setService] = useState("");
  const [budget, setBudget] = useState("");
  const [message, setMessage] = useState("");
  const [website, setWebsite] = useState(""); // honeypot
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Errors>({});

  const validate = (): Errors => {
    const e: Errors = {};
    if (!name.trim()) e.name = t("Please enter your name", "من فضلك أدخل اسمك");
    if (!email.trim()) {
      e.email = t("Email is required", "البريد الإلكتروني مطلوب");
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      e.email = t("Please enter a valid email", "من فضلك أدخل بريداً صحيحاً");
    }
    if (!message.trim() || message.trim().length < 10) {
      e.message = t("Message is too short", "الرسالة قصيرة جداً");
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
          service,
          budget,
          message: message.trim(),
          website,
        }),
      });
      if (!res.ok) throw new Error("bad response");
      setStatus("success");
      setName("");
      setEmail("");
      setCompany("");
      setService("");
      setBudget("");
      setMessage("");
    } catch {
      setStatus("error");
    }
  }

  const inputBase =
    "w-full px-5 py-4 bg-surface-low border rounded-2xl text-[15px] text-ink placeholder:text-ink-whisper outline-none transition-colors focus:border-brand-blue focus:bg-surface-raised";
  const inputOk = "border-black/[0.08]";
  const inputErr = "border-red-400";

  const labelBase = "block text-[11px] uppercase tracking-[0.2em] font-semibold text-ink-muted mb-2.5";

  return (
    <main className="pt-28 md:pt-32 pb-14 bg-surface relative overflow-hidden">
      <div
        className="absolute top-[-200px] right-[-150px] w-[500px] h-[500px] rounded-full bg-brand-blue/[0.06] blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-[1320px] mx-auto px-6 sm:px-8 md:px-12 lg:px-16 grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-12 lg:gap-24 items-start">
        {/* Left — info */}
        <motion.section
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="lg:sticky lg:top-32"
        >
          <span className="inline-flex items-center gap-2 pl-2 pr-4 py-1 bg-surface-raised rounded-full border border-black/[0.06] text-[11px] uppercase tracking-[0.2em] font-semibold text-ink-muted mb-6 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-blue" />
            {t("Get in touch", "تواصل")}
          </span>

          <h1 className="font-lyon font-bold tracking-[-0.035em] leading-[0.92] text-5xl md:text-7xl lg:text-[5.5rem] text-ink mb-8">
            {t("Let's build", "لنبنِ معاً")}
            <br />
            <span className="text-brand-blue italic">
              {t("something real.", "شيئاً حقيقياً.")}
            </span>
          </h1>

          <p className="text-base md:text-lg text-ink-soft leading-relaxed max-w-md mb-10">
            {t(
              "Tell us what you're building and what success looks like. We'll respond within 24 hours with next steps.",
              "أخبرنا بما تبنيه وكيف يبدو النجاح. نرد خلال ٢٤ ساعة بالخطوات التالية."
            )}
          </p>

          <div className="space-y-5">
            <div>
              <div className="text-[11px] uppercase tracking-[0.2em] font-semibold text-ink-muted mb-2">
                {t("Direct email", "بريد مباشر")}
              </div>
              <a
                href="mailto:hello@maatouk.studio"
                className="font-lyon text-2xl md:text-3xl font-bold text-brand-blue hover:text-brand-blue-dark transition-colors"
              >
                hello@maatouk.studio
              </a>
            </div>
            <div>
              <div className="text-[11px] uppercase tracking-[0.2em] font-semibold text-ink-muted mb-2">
                {t("Response time", "وقت الرد")}
              </div>
              <div className="font-medium text-ink">
                {t("Within 24 hours", "خلال ٢٤ ساعة")}
              </div>
            </div>
          </div>
        </motion.section>

        {/* Right — form */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          {status === "success" ? (
            <div className="studio-card rounded-[28px] p-10 md:p-14 text-center">
              <div className="mx-auto mb-6 w-14 h-14 rounded-full bg-brand-green/20 flex items-center justify-center">
                <svg className="w-6 h-6 text-brand-blue" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                  <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h2 className="font-lyon text-3xl font-bold mb-3">
                {t("Thank you.", "شكراً لك.")}
              </h2>
              <p className="text-ink-soft leading-relaxed mb-8">
                {t(
                  "We received your inquiry and will respond within 24 hours.",
                  "استلمنا استفسارك وسنرد خلال ٢٤ ساعة."
                )}
              </p>
              <Button onClick={() => setStatus("idle")} variant="secondary" size="md">
                {t("Send another", "إرسال آخر")}
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="studio-card rounded-[28px] p-8 md:p-10 space-y-6">
              {/* Honeypot */}
              <div aria-hidden="true" style={{ position: "absolute", left: "-9999px", width: 1, height: 1, overflow: "hidden" }}>
                <input
                  type="text"
                  name="website"
                  tabIndex={-1}
                  autoComplete="off"
                  value={website}
                  onChange={(e) => setWebsite(e.target.value)}
                />
              </div>

              <div>
                <label htmlFor="name" className={labelBase}>
                  {t("Your name", "اسمك")} *
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  autoComplete="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className={`${inputBase} ${errors.name ? inputErr : inputOk}`}
                  placeholder={t("John Doe", "محمد أحمد")}
                />
                {errors.name && <p className="text-sm text-red-500 mt-2">{errors.name}</p>}
              </div>

              <div>
                <label htmlFor="email" className={labelBase}>
                  {t("Email address", "البريد الإلكتروني")} *
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  autoComplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={`${inputBase} ${errors.email ? inputErr : inputOk}`}
                  placeholder="name@company.com"
                />
                {errors.email && <p className="text-sm text-red-500 mt-2">{errors.email}</p>}
              </div>

              <div>
                <label htmlFor="company" className={labelBase}>
                  {t("Company", "الشركة")}
                </label>
                <input
                  id="company"
                  type="text"
                  autoComplete="organization"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  className={`${inputBase} ${inputOk}`}
                  placeholder={t("Your company", "شركتك")}
                />
              </div>

              <fieldset>
                <legend className={labelBase}>
                  {t("What do you need?", "ماذا تحتاج؟")}
                </legend>
                <div className="flex flex-wrap gap-2">
                  {services.map((s, i) => {
                    const val = t(s.en, s.ar);
                    const sel = service === val;
                    return (
                      <button
                        key={i}
                        type="button"
                        onClick={() => setService(sel ? "" : val)}
                        aria-pressed={sel}
                        className={`pill text-[13px] font-medium transition-colors ${
                          sel
                            ? "bg-brand-blue text-white"
                            : "bg-surface-low text-ink-muted hover:bg-surface-raised"
                        }`}
                      >
                        {val}
                      </button>
                    );
                  })}
                </div>
              </fieldset>

              <fieldset>
                <legend className={labelBase}>
                  {t("Budget range", "نطاق الميزانية")}
                </legend>
                <div className="flex flex-wrap gap-2">
                  {budgets.map((b, i) => {
                    const val = t(b.en, b.ar);
                    const sel = budget === val;
                    return (
                      <button
                        key={i}
                        type="button"
                        onClick={() => setBudget(sel ? "" : val)}
                        aria-pressed={sel}
                        className={`pill text-[13px] font-medium transition-colors ${
                          sel
                            ? "bg-brand-blue text-white"
                            : "bg-surface-low text-ink-muted hover:bg-surface-raised"
                        }`}
                      >
                        {val}
                      </button>
                    );
                  })}
                </div>
              </fieldset>

              <div>
                <label htmlFor="message" className={labelBase}>
                  {t("Tell us about your project", "أخبرنا عن مشروعك")} *
                </label>
                <textarea
                  id="message"
                  rows={5}
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className={`${inputBase} resize-none ${errors.message ? inputErr : inputOk}`}
                  placeholder={t("Goals, timeline, context...", "الأهداف، الجدول، السياق...")}
                />
                {errors.message && <p className="text-sm text-red-500 mt-2">{errors.message}</p>}
              </div>

              {status === "error" && (
                <div className="px-4 py-3 rounded-xl bg-red-50 border border-red-200 text-sm text-red-700">
                  {t(
                    "Something went wrong. Please try again or email us directly.",
                    "حدث خطأ ما. حاول مجدداً أو راسلنا مباشرة."
                  )}
                </div>
              )}

              <Button
                type="submit"
                variant="primary"
                size="lg"
                disabled={status === "submitting"}
                withArrow={status !== "submitting"}
                className="w-full"
              >
                {status === "submitting"
                  ? t("Sending…", "جاري الإرسال…")
                  : t("Send inquiry", "أرسل الاستفسار")}
              </Button>
            </form>
          )}
        </motion.section>
      </div>
    </main>
  );
}
