"use client";

import { useLang } from "@/components/i18n/LangProvider";

export function SkipLink() {
  const { copy } = useLang();
  return (
    <a href="#main-content" className="skip-link">
      {copy.a11y.skip}
    </a>
  );
}
