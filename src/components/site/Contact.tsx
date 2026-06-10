"use client";

import { useState } from "react";
import { useReveal } from "@/lib/useReveal";
import { useLang } from "@/components/i18n/LangProvider";
import { Statement } from "@/components/ui/Statement";
import { SelectMenu } from "@/components/ui/SelectMenu";

type Status = "idle" | "sending" | "sent" | "error";
type Field = "name" | "phone" | "email" | "budget" | "service";
type Errors = Partial<Record<Field, string>>;

export function Contact() {
  const { copy } = useLang();
  const err = copy.contact.err;
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState<string>("");
  const [errors, setErrors] = useState<Errors>({});
  const [service, setService] = useState("");
  const [budget, setBudget] = useState("");
  const head = useReveal<HTMLDivElement>();
  const headline = useReveal<HTMLHeadingElement>();
  const form = useReveal<HTMLFormElement>();

  const validate = {
    name: (v: string) => (!v.trim() ? err.required : v.length > 120 ? err.invalid_name : undefined),
    email: (v: string) =>
      !v.trim() ? err.required : !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) ? err.email : undefined,
    phone: (v: string) =>
      !v.trim() ? err.required : !/^[+]?[\d\s()-]{6,}$/.test(v) ? err.phone : undefined,
  };

  function onBlurValidate(field: "name" | "email" | "phone", value: string) {
    setErrors((p) => ({ ...p, [field]: validate[field](value) }));
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formEl = e.currentTarget;
    const data = new FormData(formEl);
    const name = String(data.get("name") ?? "");
    const email = String(data.get("email") ?? "");
    const phone = String(data.get("phone") ?? "");

    const next: Errors = {
      name: validate.name(name),
      email: validate.email(email),
      phone: validate.phone(phone),
      service: service ? undefined : err.select,
      budget: budget ? undefined : err.select,
    };
    setErrors(next);
    if (next.name || next.email || next.phone || next.service || next.budget) return;

    setStatus("sending");
    setErrorMsg("");

    const payload = { name, email, phone, budget, service, website: data.get("website") };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const json = await res.json();
      if (json.ok) {
        setStatus("sent");
        formEl.reset();
        setService("");
        setBudget("");
      } else {
        setStatus("error");
        const code = json.error as keyof typeof err | undefined;
        setErrorMsg((code && err[code]) || err.generic);
      }
    } catch {
      setStatus("error");
      setErrorMsg(err.network);
    }
  }

  return (
    <section id="contact" className="relative w-full bg-[var(--color-bg)] py-14 md:py-20">
      <div className="mx-auto w-full max-w-[1600px] px-6 md:px-14">
        <div
          ref={head.ref}
          className={`reveal-up mb-8 flex items-end justify-between md:mb-12 ${
            head.visible ? "is-visible" : ""
          }`}
        >
          <span className="text-[11px] text-white/55 md:text-[12px]">{copy.contact.label}</span>
          <a
            href={`mailto:${copy.nav.email}`}
            className="hidden text-[12px] text-white/55 hover:text-white md:inline"
          >
            {copy.nav.email}
          </a>
        </div>

        <h2
          ref={headline.ref}
          className={`reveal mb-12 max-w-[14ch] font-serif text-[40px] leading-[1.05] text-white sm:text-[56px] md:mb-16 md:text-[88px] lg:text-[112px] ${
            headline.visible ? "is-visible" : ""
          }`}
        >
          <Statement segments={copy.contact.headline} />
        </h2>

        <form
          ref={form.ref}
          onSubmit={onSubmit}
          noValidate
          className={`reveal-up grid grid-cols-1 gap-x-10 gap-y-8 md:grid-cols-2 md:gap-y-10 ${
            form.visible ? "is-visible" : ""
          }`}
          style={{ transitionDelay: "120ms" }}
        >
          <input type="text" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />

          <TextField label={copy.contact.name} name="name" autoComplete="name" required error={errors.name} onBlurValidate={(v) => onBlurValidate("name", v)} />
          <TextField label={copy.contact.phone} name="phone" type="tel" inputMode="tel" autoComplete="tel" required error={errors.phone} onBlurValidate={(v) => onBlurValidate("phone", v)} />
          <TextField label={copy.contact.email} name="email" type="email" inputMode="email" autoComplete="email" required error={errors.email} onBlurValidate={(v) => onBlurValidate("email", v)} />
          <SelectMenu
            label={copy.contact.budget}
            placeholder={copy.contact.selectBudget}
            options={copy.contact.budgetOptions}
            value={budget}
            onChange={(v) => {
              setBudget(v);
              setErrors((p) => ({ ...p, budget: undefined }));
            }}
            required
            error={errors.budget}
          />
          <SelectMenu
            label={copy.contact.service}
            placeholder={copy.contact.selectService}
            options={copy.contact.serviceOptions}
            value={service}
            onChange={(v) => {
              setService(v);
              setErrors((p) => ({ ...p, service: undefined }));
            }}
            required
            error={errors.service}
          />

          <div className="md:col-span-2 flex flex-col items-start justify-between gap-6 border-t border-[var(--color-line)] pt-8 sm:flex-row sm:items-center">
            <p role="status" aria-live="polite" className="text-[13px] text-white/55">
              {status === "sent"
                ? copy.contact.sent
                : status === "error"
                ? `${copy.contact.errorPrefix}: ${errorMsg}.`
                : copy.contact.respond}
            </p>
            <button
              type="submit"
              disabled={status === "sending"}
              className="group inline-flex items-center gap-3 border border-white/40 px-6 py-3 text-[12px] text-white transition-all hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] disabled:opacity-50 md:text-[13px]"
            >
              {status === "sending" ? copy.contact.sending : copy.contact.send}
              <span className="transition-transform duration-500 group-hover:translate-x-1">→</span>
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

function TextField({
  label,
  name,
  type = "text",
  inputMode,
  autoComplete,
  required = false,
  error,
  onBlurValidate,
}: {
  label: string;
  name: string;
  type?: string;
  inputMode?: "text" | "tel" | "email";
  autoComplete?: string;
  required?: boolean;
  error?: string;
  onBlurValidate?: (v: string) => void;
}) {
  const hasError = !!error;
  return (
    <label className="block">
      <span className="mb-3 flex items-baseline justify-between text-[11px] text-white/55 md:text-[12px]">
        <span>
          {label} {required && <span className="text-[var(--color-accent)]">*</span>}
        </span>
        <span
          className={`text-[11px] normal-case tracking-normal transition-opacity duration-300 ${
            hasError ? "text-[var(--color-accent)] opacity-100" : "opacity-0"
          }`}
        >
          {error || " "}
        </span>
      </span>
      <input
        name={name}
        type={type}
        inputMode={inputMode}
        autoComplete={autoComplete}
        required={required}
        onBlur={(e) => onBlurValidate?.(e.currentTarget.value)}
        onChange={(e) => hasError && onBlurValidate?.(e.currentTarget.value)}
        className={`w-full border-b bg-transparent pb-3 text-[16px] text-white outline-none transition-colors focus:border-[var(--color-accent)] md:text-[18px] ${
          hasError ? "border-[var(--color-accent)]" : "border-white/20"
        }`}
      />
    </label>
  );
}
