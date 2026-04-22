"use client";

import { motion } from "framer-motion";
import { useTranslation } from "@/lib/LocaleContext";

interface Swatch {
  label: string;
  value: string;
  role: { en: string; ar: string };
}

interface ColorPaletteProps {
  palette: {
    background: string;
    surface: string;
    primary: string;
    accent: string;
    ink: string;
  };
  label?: string;
}

export default function ColorPalette({ palette, label }: ColorPaletteProps) {
  const { t } = useTranslation();

  const swatches: Swatch[] = [
    {
      label: "Background",
      value: palette.background,
      role: { en: "Base canvas", ar: "الخلفية الأساسية" },
    },
    {
      label: "Surface",
      value: palette.surface,
      role: { en: "Cards & blocks", ar: "البطاقات والكتل" },
    },
    {
      label: "Primary",
      value: palette.primary,
      role: { en: "Actions & highlights", ar: "الإجراءات والتمييز" },
    },
    {
      label: "Accent",
      value: palette.accent,
      role: { en: "Secondary accent", ar: "لون ثانوي" },
    },
    {
      label: "Ink",
      value: palette.ink,
      role: { en: "Primary text", ar: "النص الأساسي" },
    },
  ];

  return (
    <section>
      <div className="flex items-center gap-3 mb-6">
        <span className="w-2 h-2 rotate-45 bg-brand-blue" />
        <span className="text-xs font-medium uppercase tracking-[0.2em] text-brand-blue">
          {label ?? t("Palette", "الألوان")}
        </span>
      </div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.06 } },
        }}
        className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-4"
      >
        {swatches.map((sw) => (
          <motion.div
            key={sw.label}
            variants={{
              hidden: { opacity: 0, y: 10 },
              visible: { opacity: 1, y: 0 },
            }}
            className="group"
          >
            <div
              className="aspect-[4/5] w-full border border-black/[0.06] transition-transform duration-500 group-hover:scale-[1.02]"
              style={{ backgroundColor: sw.value }}
              aria-hidden="true"
            />
            <div className="mt-3 space-y-0.5">
              <div className="text-xs uppercase tracking-[0.15em] font-bold text-black/70">
                {sw.label}
              </div>
              <div className="text-[11px] font-mono text-black/50">
                {sw.value}
              </div>
              <div className="text-xs text-black/50">
                {t(sw.role.en, sw.role.ar)}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
