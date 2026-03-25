"use client";

import { useState, useCallback, useEffect } from "react";
import { Locale, defaultLocale, getDirection } from "./i18n";

export function useLocale() {
  const [locale, setLocaleState] = useState<Locale>(defaultLocale);

  useEffect(() => {
    const saved = localStorage.getItem("maatouk-locale") as Locale | null;
    if (saved === "en" || saved === "ar") {
      setLocaleState(saved);
      document.documentElement.lang = saved;
      document.documentElement.dir = getDirection(saved);
    }
  }, []);

  const setLocale = useCallback((newLocale: Locale) => {
    setLocaleState(newLocale);
    localStorage.setItem("maatouk-locale", newLocale);
    document.documentElement.lang = newLocale;
    document.documentElement.dir = getDirection(newLocale);
  }, []);

  const toggleLocale = useCallback(() => {
    const next = locale === "en" ? "ar" : "en";
    setLocale(next);
  }, [locale, setLocale]);

  return { locale, setLocale, toggleLocale, dir: getDirection(locale) };
}
