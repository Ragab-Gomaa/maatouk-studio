"use client";

import { useState } from "react";
import { useReveal } from "@/lib/useReveal";

type Status = "idle" | "sending" | "sent" | "error";

type Errors = Partial<Record<"name" | "email" | "message", string>>;

function validateName(v: string): string | undefined {
  if (!v.trim()) return "Required";
  if (v.length > 120) return "Too long";
}
function validateEmail(v: string): string | undefined {
  if (!v.trim()) return "Required";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)) return "Invalid email address";
}
function validateMessage(v: string): string | undefined {
  if (!v.trim()) return "Required";
  if (v.length < 10) return "A bit more, please";
  if (v.length > 5000) return "Too long";
}

export function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState<string>("");
  const [errors, setErrors] = useState<Errors>({});
  const head = useReveal<HTMLDivElement>();
  const headline = useReveal<HTMLHeadingElement>();
  const form = useReveal<HTMLFormElement>();

  function onBlurValidate(field: keyof Errors, value: string) {
    const fn =
      field === "name"
        ? validateName
        : field === "email"
        ? validateEmail
        : validateMessage;
    setErrors((p) => ({ ...p, [field]: fn(value) }));
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formEl = e.currentTarget;
    const data = new FormData(formEl);
    const name = String(data.get("name") ?? "");
    const email = String(data.get("email") ?? "");
    const message = String(data.get("message") ?? "");

    const next: Errors = {
      name: validateName(name),
      email: validateEmail(email),
      message: validateMessage(message),
    };
    setErrors(next);
    if (next.name || next.email || next.message) return;

    setStatus("sending");
    setErrorMsg("");

    const payload = {
      name,
      email,
      company: data.get("company"),
      service: data.get("service"),
      message,
      website: data.get("website"),
    };

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
      } else {
        setStatus("error");
        setErrorMsg(json.error || "Something went wrong");
      }
    } catch {
      setStatus("error");
      setErrorMsg("Network error");
    }
  }

  return (
    <section
      id="contact"
      className="relative w-full bg-[var(--color-bg)] py-14 md:py-20"
    >
      <div className="mx-auto w-full max-w-[1600px] px-6 md:px-14">
        <div
          ref={head.ref}
          className={`reveal-up mb-8 flex items-end justify-between md:mb-12 ${
            head.visible ? "is-visible" : ""
          }`}
        >
          <span className="text-[11px] text-white/40 md:text-[12px]">
            Contact
          </span>
          <a
            href="mailto:hello@maatouk-studio.com"
            className="hidden text-[12px] text-white/40 hover:text-white md:inline"
          >
            hello@maatouk-studio.com
          </a>
        </div>

        <h2
          ref={headline.ref}
          className={`reveal mb-12 max-w-[14ch] font-serif text-[40px] leading-[1.05] text-white sm:text-[56px] md:mb-16 md:text-[88px] lg:text-[112px] ${
            headline.visible ? "is-visible" : ""
          }`}
        >
          Start a{" "}
          <span className="italic text-[var(--color-accent)]">project</span>.
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
          <input
            type="text"
            name="website"
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
            className="hidden"
          />

          <Field
            label="Name"
            name="name"
            required
            error={errors.name}
            onBlurValidate={(v) => onBlurValidate("name", v)}
          />
          <Field
            label="Email"
            name="email"
            type="email"
            required
            error={errors.email}
            onBlurValidate={(v) => onBlurValidate("email", v)}
          />
          <Field label="Company" name="company" />
          <SelectField label="Service" name="service" />

          <div className="md:col-span-2">
            <Field
              label="Message"
              name="message"
              textarea
              required
              error={errors.message}
              onBlurValidate={(v) => onBlurValidate("message", v)}
            />
          </div>

          <div className="md:col-span-2 flex flex-col items-start justify-between gap-6 border-t border-[var(--color-line)] pt-8 sm:flex-row sm:items-center">
            <p className="text-[13px] text-white/40">
              {status === "sent"
                ? "Thanks — we'll be in touch within 48 hours."
                : status === "error"
                ? `Couldn't send: ${errorMsg}.`
                : "We respond to every inquiry within 48 hours."}
            </p>
            <button
              type="submit"
              disabled={status === "sending"}
              className="group inline-flex items-center gap-3 border border-white/30 px-6 py-3 text-[12px] text-white transition-all hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] disabled:opacity-50 md:text-[13px]"
            >
              {status === "sending" ? "Sending…" : "Send inquiry"}
              <span className="transition-transform duration-500 group-hover:translate-x-1">
                →
              </span>
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
  textarea = false,
  error,
  onBlurValidate,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  textarea?: boolean;
  error?: string;
  onBlurValidate?: (v: string) => void;
}) {
  const hasError = !!error;
  return (
    <label className="block">
      <span className="mb-3 flex items-baseline justify-between text-[11px] text-white/40 md:text-[12px]">
        <span>
          {label}{" "}
          {required && <span className="text-[var(--color-accent)]">*</span>}
        </span>
        <span
          className={`normal-case tracking-normal text-[11px] transition-opacity duration-300 ${
            hasError ? "text-[var(--color-accent)] opacity-100" : "opacity-0"
          }`}
        >
          {error || " "}
        </span>
      </span>
      {textarea ? (
        <textarea
          name={name}
          required={required}
          rows={4}
          onBlur={(e) => onBlurValidate?.(e.currentTarget.value)}
          onChange={(e) => hasError && onBlurValidate?.(e.currentTarget.value)}
          className={`w-full resize-none border-b bg-transparent pb-3 text-[16px] text-white outline-none transition-colors focus:border-[var(--color-accent)] md:text-[18px] ${
            hasError ? "border-[var(--color-accent)]" : "border-white/15"
          }`}
        />
      ) : (
        <input
          name={name}
          type={type}
          required={required}
          onBlur={(e) => onBlurValidate?.(e.currentTarget.value)}
          onChange={(e) => hasError && onBlurValidate?.(e.currentTarget.value)}
          className={`w-full border-b bg-transparent pb-3 text-[16px] text-white outline-none transition-colors focus:border-[var(--color-accent)] md:text-[18px] ${
            hasError ? "border-[var(--color-accent)]" : "border-white/15"
          }`}
        />
      )}
    </label>
  );
}

function SelectField({ label, name }: { label: string; name: string }) {
  return (
    <label className="block">
      <span className="mb-3 block text-[11px] text-white/40 md:text-[12px]">
        {label}
      </span>
      <select
        name={name}
        defaultValue=""
        className="w-full appearance-none border-b border-white/15 bg-transparent pb-3 text-[16px] text-white outline-none transition-colors focus:border-[var(--color-accent)] md:text-[18px]"
      >
        <option value="" className="bg-[var(--color-bg)]">
          Select a service
        </option>
        <option value="branding" className="bg-[var(--color-bg)]">
          Branding
        </option>
        <option value="digital" className="bg-[var(--color-bg)]">
          Digital
        </option>
        <option value="motion" className="bg-[var(--color-bg)]">
          Motion
        </option>
        <option value="other" className="bg-[var(--color-bg)]">
          Something else
        </option>
      </select>
    </label>
  );
}
