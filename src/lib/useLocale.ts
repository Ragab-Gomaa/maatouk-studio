"use client";

import { useState, useCallback, useEffect } from "react";
import { Locale, defaultLocale, getDirection } from "./i18n";

const COOKIE_NAME = "maatouk-locale";
const STORAGE_KEY = "maatouk-locale";
const COOKIE_MAX_AGE = 60 * 60 * 24 * 365; // 1 year

function writeCookie(locale: Locale) {
  document.cookie = `${COOKIE_NAME}=${locale}; path=/; max-age=${COOKIE_MAX_AGE}; samesite=lax`;
}

function readClientLocale(): Locale | null {
  // Try cookie first (SSR-authoritative), then localStorage (legacy fallback)
  const match = document.cookie.match(
    new RegExp("(?:^|; )" + COOKIE_NAME + "=([^;]*)")
  );
  const cookieVal = match?.[1] as Locale | undefined;
  if (cookieVal === "en" || cookieVal === "ar") return cookieVal;

  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === "en" || saved === "ar") return saved as Locale;
  } catch {
    // ignore
  }
  return null;
}

export function useLocale(initialLocale?: Locale) {
  const [locale, setLocaleState] = useState<Locale>(
    initialLocale ?? defaultLocale
  );

  // Sync from client-side storage in case the SSR default differs (edge cases
  // like first visit without cookie but with legacy localStorage). After this
  // effect, the cookie is authoritative.
  useEffect(() => {
    const clientLocale = readClientLocale();
    if (clientLocale && clientLocale !== locale) {
      setLocaleState(clientLocale);
      document.documentElement.lang = clientLocale;
      document.documentElement.dir = getDirection(clientLocale);
      writeCookie(clientLocale);
    } else {
      // Make sure cookie exists for subsequent requests.
      writeCookie(locale);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const setLocale = useCallback((newLocale: Locale) => {
    setLocaleState(newLocale);
    try {
      localStorage.setItem(STORAGE_KEY, newLocale);
    } catch {
      // ignore
    }
    writeCookie(newLocale);
    document.documentElement.lang = newLocale;
    document.documentElement.dir = getDirection(newLocale);
  }, []);

  const toggleLocale = useCallback(() => {
    const next = locale === "en" ? "ar" : "en";
    setLocale(next);
  }, [locale, setLocale]);

  return { locale, setLocale, toggleLocale, dir: getDirection(locale) };
}
