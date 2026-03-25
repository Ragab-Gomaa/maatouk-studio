"use client";

import { createContext, useContext, ReactNode } from "react";
import { Locale } from "./i18n";
import { useLocale } from "./useLocale";

interface LocaleContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  toggleLocale: () => void;
  dir: "ltr" | "rtl";
  t: <T>(en: T, ar: T) => T;
}

const LocaleContext = createContext<LocaleContextType | null>(null);

export function LocaleProvider({ children }: { children: ReactNode }) {
  const { locale, setLocale, toggleLocale, dir } = useLocale();

  const t = <T,>(en: T, ar: T): T => (locale === "ar" ? ar : en);

  return (
    <LocaleContext.Provider value={{ locale, setLocale, toggleLocale, dir, t }}>
      {children}
    </LocaleContext.Provider>
  );
}

export function useTranslation() {
  const context = useContext(LocaleContext);
  if (!context) {
    throw new Error("useTranslation must be used within a LocaleProvider");
  }
  return context;
}
