"use client";

import { useState, useRef, useEffect, FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "@/lib/LocaleContext";
import Button from "@/components/ui/Button";

const WHATSAPP_URL = "https://wa.me/201064889808";

const services = [
  { en: "Branding", ar: "هويّة بصريّة" },
  { en: "Motion Graphics", ar: "موشن جرافيك" },
  { en: "Digital Product", ar: "منتج رقمي" },
  { en: "Full Project", ar: "مشروع كامل" },
];

const budgets = [
  "< $10,000",
  "$10,000 – $25,000",
  "$25,000 – $50,000",
  "$50,000+",
];

type Status = "idle" | "submitting" | "success" | "error";
type Errors = { name?: string; email?: string; message?: string };

function WhatsAppIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={`shrink-0 ${className}`}
      aria-hidden="true"
    >
      <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 0 1 2.41 5.83c0 4.54-3.7 8.23-8.24 8.23-1.48 0-2.93-.39-4.19-1.15l-.3-.17-3.12.82.83-3.04-.2-.32a8.188 8.188 0 0 1-1.26-4.38c.01-4.54 3.7-8.24 8.25-8.24M8.53 7.33c-.16 0-.43.06-.66.31-.22.25-.87.86-.87 2.07 0 1.22.89 2.39 1 2.56.14.17 1.76 2.67 4.25 3.73.59.27 1.05.42 1.41.53.59.19 1.13.16 1.56.1.48-.07 1.46-.6 1.67-1.18.21-.58.21-1.07.15-1.18-.07-.1-.23-.16-.48-.27-.25-.14-1.47-.74-1.69-.82-.23-.08-.4-.12-.56.12-.17.25-.64.81-.78.97-.15.17-.29.19-.53.07-.26-.13-1.06-.39-2-1.23-.74-.66-1.23-1.47-1.38-1.72-.12-.24-.01-.39.11-.5.11-.11.27-.29.37-.44.13-.14.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.4-.42-.56-.43-.14 0-.3-.01-.47-.01" />
    </svg>
  );
}

type DropdownProps = {
  label: string;
  placeholder: string;
  options: string[];
  value: string;
  onChange: (v: string) => void;
  ltrValues?: boolean;
};

function Dropdown({
  label,
  placeholder,
  options,
  value,
  onChange,
  ltrValues = false,
}: DropdownProps) {
  const [open, setOpen] = useState(false);
  const [highlight, setHighlight] = useState<number>(-1);
  const rootRef = useRef<HTMLDivElement>(null);
  const btnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const onDown = (e: MouseEvent) => {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        btnRef.current?.focus();
      } else if (e.key === "ArrowDown") {
        e.preventDefault();
        setHighlight((h) => (h + 1) % options.length);
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setHighlight((h) => (h - 1 + options.length) % options.length);
      } else if (e.key === "Enter" && highlight >= 0) {
        e.preventDefault();
        onChange(options[highlight]);
        setOpen(false);
        btnRef.current?.focus();
      }
    };
    window.addEventListener("mousedown", onDown);
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("keydown", onKey);
    };
  }, [open, highlight, options, onChange]);

  return (
    <div ref={rootRef} className="relative">
      <button
        ref={btnRef}
        type="button"
        onClick={() => {
          setOpen((o) => !o);
          setHighlight(options.indexOf(value));
        }}
        aria-haspopup="listbox"
        aria-expanded={open}
        className={`group w-full text-start px-5 pt-2.5 pb-3 rounded-2xl border transition-all focus:outline-none focus-visible:outline-2 focus-visible:outline-brand-blue focus-visible:outline-offset-2 ${
          open
            ? "border-brand-blue bg-surface-raised"
            : "border-black/[0.08] bg-surface-low hover:bg-surface-raised hover:border-black/15"
        }`}
      >
        <div className="text-[10px] uppercase tracking-[0.2em] font-semibold text-ink-muted mb-0.5">
          {label}
        </div>
        <div className="flex items-center justify-between gap-3">
          <span
            dir={ltrValues && value ? "ltr" : undefined}
            className={`truncate text-[15px] ${value ? "text-ink font-medium" : "text-ink-whisper"}`}
          >
            {value || placeholder}
          </span>
          <span className="flex items-center gap-2 shrink-0">
            {value && (
              <span
                role="button"
                tabIndex={-1}
                onClick={(e) => {
                  e.stopPropagation();
                  onChange("");
                  setOpen(false);
                }}
                className="w-5 h-5 rounded-full flex items-center justify-center text-ink-whisper hover:text-ink hover:bg-black/[0.06] transition-colors cursor-pointer"
                aria-label="Clear"
              >
                <svg viewBox="0 0 10 10" className="w-2.5 h-2.5" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round">
                  <path d="M2 2l6 6M8 2l-6 6" />
                </svg>
              </span>
            )}
            <svg
              className={`w-3.5 h-3.5 text-ink-muted transition-transform duration-300 ${
                open ? "rotate-180" : ""
              }`}
              viewBox="0 0 12 12"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.75"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M3 4.5l3 3 3-3" />
            </svg>
          </span>
        </div>
      </button>

      <AnimatePresence>
        {open && (
          <motion.ul
            role="listbox"
            initial={{ opacity: 0, y: -6, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.98 }}
            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="absolute z-30 top-full start-0 end-0 mt-2 rounded-2xl bg-surface border border-black/[0.08] shadow-[0_20px_50px_-20px_rgba(0,0,0,0.25)] overflow-hidden p-1.5"
          >
            {options.map((opt, i) => {
              const selected = opt === value;
              const active = i === highlight;
              return (
                <motion.li
                  key={opt}
                  initial={{ opacity: 0, y: -4 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2, delay: i * 0.03 }}
                >
                  <button
                    type="button"
                    role="option"
                    aria-selected={selected}
                    onMouseEnter={() => setHighlight(i)}
                    onClick={() => {
                      onChange(opt);
                      setOpen(false);
                      btnRef.current?.focus();
                    }}
                    dir={ltrValues ? "ltr" : undefined}
                    className={`w-full px-4 py-3 rounded-xl text-[14px] text-start flex items-center gap-3 transition-colors ${
                      selected
                        ? "bg-brand-blue/10 text-brand-blue font-medium"
                        : active
                          ? "bg-black/[0.04] text-ink"
                          : "text-ink hover:bg-black/[0.03]"
                    }`}
                  >
                    <span
                      className={`w-1.5 h-1.5 rounded-full shrink-0 transition-colors ${
                        selected ? "bg-brand-blue" : "bg-ink-whisper"
                      }`}
                    />
                    <span className="flex-1 truncate">{opt}</span>
                    {selected && (
                      <svg
                        viewBox="0 0 14 14"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="w-3.5 h-3.5 shrink-0 text-brand-blue"
                      >
                        <path d="M3 7l3 3 5-7" />
                      </svg>
                    )}
                  </button>
                </motion.li>
              );
            })}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function ContactPage() {
  const { t, locale } = useTranslation();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
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
      setService("");
      setBudget("");
      setMessage("");
    } catch {
      setStatus("error");
    }
  }

  const fieldBase =
    "group w-full rounded-2xl border bg-surface-low transition-all focus-within:bg-surface-raised focus-within:border-brand-blue hover:border-black/15";
  const fieldOk = "border-black/[0.08]";
  const fieldErr = "border-red-400";
  const innerLabel =
    "block px-5 pt-2.5 text-[10px] uppercase tracking-[0.2em] font-semibold text-ink-muted";
  const innerInput =
    "w-full px-5 pb-3 pt-0.5 bg-transparent text-[15px] text-ink placeholder:text-ink-whisper outline-none";

  return (
    <main className="pt-28 md:pt-32 pb-14 bg-surface relative overflow-hidden">
      <div
        className="absolute top-[-200px] right-[-150px] w-[500px] h-[500px] rounded-full bg-brand-blue/[0.06] blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-[-150px] left-[-100px] w-[400px] h-[400px] rounded-full bg-brand-green/[0.05] blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-[1320px] mx-auto px-6 sm:px-8 md:px-12 lg:px-16 grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-12 lg:gap-20 items-start">
        {/* Left — intro + contact methods */}
        <motion.section
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="lg:sticky lg:top-32"
        >
          <span className="kicker-pill mb-6">
            <span className="kicker-pill-dot" />
            {t("Get in touch", "تواصل")}
          </span>

          <h1
            className={`font-lyon font-bold tracking-[-0.035em] text-5xl md:text-6xl lg:text-[4.5rem] text-ink mb-6 ${
              locale === "ar" ? "leading-[1.2]" : "leading-[0.95]"
            }`}
          >
            {t("Let's build together", "لنبنِ معاً")}
            <br />
            <span className="text-brand-blue italic">
              {t("something unforgettable.", "شيئاً لا يُنسى.")}
            </span>
          </h1>

          <p className="text-base md:text-lg text-ink-soft leading-relaxed max-w-xl text-pretty mb-10">
            {t(
              "Tell us about the idea and the outcome you want. We'll come back with a clear plan within 24 hours.",
              "حدّثنا عن الفكرة والنتيجة التي تريدها. نعود إليك بخطّةٍ واضحة خلال ٢٤ ساعة."
            )}
          </p>

          <div className="space-y-6">
            <div>
              <div className="text-[11px] uppercase tracking-[0.2em] font-semibold text-ink-muted mb-3">
                {t("Prefer a quick chat?", "تُفضّل محادثة سريعة؟")}
              </div>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-ink text-white text-[15px] font-medium tracking-[-0.01em] shadow-sm hover:bg-black hover:shadow-[0_12px_30px_-10px_rgba(0,0,0,0.5)] transition-all duration-300"
              >
                <WhatsAppIcon className="w-4 h-4 text-brand-green" />
                <span>{t("Chat on WhatsApp", "تواصل عبر واتساب")}</span>
              </a>
            </div>

            <div className="pt-4 border-t border-black/[0.06]">
              <div className="flex items-center gap-2 text-sm text-ink-soft">
                <span className="relative flex items-center justify-center w-2 h-2">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-brand-green opacity-60 animate-ping" />
                  <span className="relative inline-flex w-2 h-2 rounded-full bg-brand-green" />
                </span>
                <span>
                  {t(
                    "Reply within 24 hours — to every message.",
                    "ردٌّ خلال ٢٤ ساعة — على كل رسالة."
                  )}
                </span>
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
                <svg
                  className="w-6 h-6 text-brand-blue"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  aria-hidden="true"
                >
                  <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h2 className="font-lyon text-3xl font-bold mb-3">
                {t("Message received.", "وصلتنا رسالتك.")}
              </h2>
              <p className="text-ink-soft leading-relaxed mb-8">
                {t(
                  "We'll come back to you within 24 hours with a clear plan.",
                  "نعود إليك خلال ٢٤ ساعة بخطّةٍ واضحة."
                )}
              </p>
              <Button
                onClick={() => setStatus("idle")}
                variant="secondary"
                size="md"
              >
                {t("Send another", "إرسال آخر")}
              </Button>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              noValidate
              className="studio-card rounded-[28px] p-6 md:p-8 space-y-4"
            >
              {/* Honeypot */}
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
                <input
                  type="text"
                  name="website"
                  tabIndex={-1}
                  autoComplete="off"
                  value={website}
                  onChange={(e) => setWebsite(e.target.value)}
                />
              </div>

              <div className={`${fieldBase} ${errors.name ? fieldErr : fieldOk}`}>
                <label htmlFor="name" className={innerLabel}>
                  {t("Your name", "اسمك")} *
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  autoComplete="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className={innerInput}
                  placeholder={t("John Doe", "محمد أحمد")}
                />
              </div>
              {errors.name && (
                <p className="text-sm text-red-500 -mt-2">{errors.name}</p>
              )}

              <div className={`${fieldBase} ${errors.email ? fieldErr : fieldOk}`}>
                <label htmlFor="email" className={innerLabel}>
                  {t("Email", "البريد الإلكتروني")} *
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  autoComplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={innerInput}
                  placeholder="name@company.com"
                />
              </div>
              {errors.email && (
                <p className="text-sm text-red-500 -mt-2">{errors.email}</p>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Dropdown
                  label={t("Project type", "نوع المشروع")}
                  placeholder={t("Select type", "اختر النوع")}
                  options={services.map((s) => t(s.en, s.ar))}
                  value={service}
                  onChange={setService}
                />
                <Dropdown
                  label={t("Budget", "الميزانيّة")}
                  placeholder={t("Select range", "اختر النطاق")}
                  options={budgets}
                  value={budget}
                  onChange={setBudget}
                  ltrValues
                />
              </div>

              <div className={`${fieldBase} ${errors.message ? fieldErr : fieldOk}`}>
                <label htmlFor="message" className={innerLabel}>
                  {t("Tell us about it", "حدّثنا عن مشروعك")} *
                </label>
                <textarea
                  id="message"
                  rows={4}
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className={`${innerInput} resize-none`}
                  placeholder={t(
                    "The idea, the timing, any context that helps...",
                    "الفكرة، التوقيت، وأيّ سياقٍ يُفيدنا..."
                  )}
                />
              </div>
              {errors.message && (
                <p className="text-sm text-red-500 -mt-2">{errors.message}</p>
              )}

              {status === "error" && (
                <div className="px-4 py-3 rounded-xl bg-red-50 border border-red-200 text-sm text-red-700">
                  {t(
                    "Something went wrong. Please try again or email us directly.",
                    "حدث خطأ. حاول مجدداً، أو راسلنا مباشرة."
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
                  : t("Send message", "أرسل رسالتك")}
              </Button>
            </form>
          )}
        </motion.section>
      </div>
    </main>
  );
}
