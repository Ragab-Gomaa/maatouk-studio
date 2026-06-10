"use client";

import { useEffect, useId, useRef, useState } from "react";

type Option = { value: string; label: string };

export function SelectMenu({
  label,
  placeholder,
  options,
  value,
  onChange,
  required = false,
  error,
}: {
  label: string;
  placeholder: string;
  options: Option[];
  value: string;
  onChange: (value: string) => void;
  required?: boolean;
  error?: string;
}) {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(0);
  const rootRef = useRef<HTMLDivElement>(null);
  const btnRef = useRef<HTMLButtonElement>(null);
  const listId = useId();
  const selected = options.find((o) => o.value === value);
  const hasError = !!error;

  useEffect(() => {
    if (!open) return;
    const onDown = (e: MouseEvent) => {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onDown);
    return () => document.removeEventListener("mousedown", onDown);
  }, [open]);

  const choose = (i: number) => {
    onChange(options[i].value);
    setOpen(false);
    btnRef.current?.focus();
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (!open) {
      if (e.key === "ArrowDown" || e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        const start = options.findIndex((o) => o.value === value);
        setActive(start >= 0 ? start : 0);
        setOpen(true);
      }
      return;
    }
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActive((a) => Math.min(a + 1, options.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActive((a) => Math.max(a - 1, 0));
    } else if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      choose(active);
    } else if (e.key === "Escape" || e.key === "Tab") {
      setOpen(false);
    }
  };

  return (
    <div ref={rootRef} className="relative" onKeyDown={onKeyDown}>
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

      <button
        ref={btnRef}
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={listId}
        onClick={() => setOpen((v) => !v)}
        className={`flex w-full items-center justify-between border-b bg-transparent pb-3 text-left text-[16px] outline-none transition-colors md:text-[18px] ${
          hasError ? "border-[var(--color-accent)]" : open ? "border-[var(--color-accent)]" : "border-white/20"
        }`}
      >
        <span className={selected ? "text-white" : "text-white/45"}>
          {selected ? selected.label : placeholder}
        </span>
        <svg
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.4"
          aria-hidden
          className={`text-white/60 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
        >
          <path d="M3 5l4 4 4-4" />
        </svg>
      </button>

      <ul
        id={listId}
        role="listbox"
        aria-hidden={!open}
        className={`absolute left-0 right-0 z-20 mt-2 max-h-64 overflow-auto rounded-lg border border-[var(--color-line)] bg-[var(--color-bg-elevated)] py-1.5 shadow-2xl shadow-black/50 transition-all duration-200 ${
          open
            ? "pointer-events-auto translate-y-0 scale-100 opacity-100"
            : "pointer-events-none -translate-y-1 scale-[0.98] opacity-0"
        }`}
        style={{ transformOrigin: "top" }}
      >
        {options.map((o, i) => {
          const isSel = o.value === value;
          return (
            <li
              key={o.value}
              role="option"
              aria-selected={isSel}
              onMouseEnter={() => setActive(i)}
              onClick={() => choose(i)}
              className={`flex cursor-pointer items-center justify-between px-4 py-2.5 text-[15px] transition-colors ${
                i === active ? "bg-white/[0.06]" : ""
              } ${isSel ? "text-[var(--color-accent)]" : "text-white/85"}`}
            >
              {o.label}
              {isSel && (
                <svg width="13" height="13" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
                  <path d="M2 7.5l3.5 3.5L12 3.5" />
                </svg>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
