"use client";

import { motion } from "framer-motion";
import { useTranslation } from "@/lib/LocaleContext";

interface TypeSpecimenProps {
  displayName: string;
  bodyName: string;
  note?: { en: string; ar: string };
  /** Background color for the specimen block (matches project palette) */
  bg?: string;
  /** Text color for the specimen block */
  ink?: string;
  /** Accent color used for small decorations */
  accent?: string;
}

export default function TypeSpecimen({
  displayName,
  bodyName,
  note,
  bg = "#1A1A1A",
  ink = "#F6EFDF",
  accent = "#D4AF37",
}: TypeSpecimenProps) {
  const { t } = useTranslation();

  return (
    <section>
      <div className="flex items-center gap-3 mb-6">
        <span className="w-2 h-2 rotate-45 bg-brand-blue" />
        <span className="text-xs font-medium uppercase tracking-[0.2em] text-brand-blue">
          {t("Typography", "الطباعة")}
        </span>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7 }}
        className="relative overflow-hidden"
        style={{ backgroundColor: bg, color: ink }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-10 lg:gap-16 p-8 md:p-12 lg:p-16">
          {/* Display */}
          <div>
            <div
              className="text-[9px] md:text-[10px] uppercase tracking-[0.3em] mb-4 font-medium"
              style={{ color: accent }}
            >
              Display · عرض
            </div>
            <div
              className="font-lyon text-6xl md:text-7xl lg:text-8xl leading-[0.95] tracking-tight mb-4"
              style={{ fontFamily: `"${displayName}", Lyon, Georgia, serif` }}
            >
              Aa
            </div>
            <div
              className="font-mizan text-5xl md:text-6xl lg:text-7xl leading-[1] mb-5"
              style={{ fontFamily: `"${displayName}", Mizan, "Traditional Arabic", serif` }}
            >
              أ ب
            </div>
            <div className="flex items-center gap-3 text-xs" style={{ color: ink, opacity: 0.6 }}>
              <span className="h-px w-6" style={{ backgroundColor: accent }} />
              <span className="uppercase tracking-[0.15em] font-medium">
                {displayName}
              </span>
            </div>
          </div>

          {/* Body */}
          <div className="lg:border-l" style={{ borderColor: `${ink}20` }}>
            <div className="lg:pl-16">
              <div
                className="text-[9px] md:text-[10px] uppercase tracking-[0.3em] mb-4 font-medium"
                style={{ color: accent }}
              >
                Body · نص
              </div>
              <p
                className="text-xl md:text-2xl leading-relaxed mb-4"
                style={{ fontFamily: `"${bodyName}", Inter, system-ui, sans-serif` }}
              >
                The quick brown fox jumps over the lazy dog.
              </p>
              <p
                className="font-mizan text-xl md:text-2xl leading-relaxed mb-5"
                dir="rtl"
              >
                النص العربي يحترم تدفقه الطبيعي ويُقرأ بسهولة.
              </p>
              <div className="flex items-center gap-3 text-xs" style={{ color: ink, opacity: 0.6 }}>
                <span className="h-px w-6" style={{ backgroundColor: accent }} />
                <span className="uppercase tracking-[0.15em] font-medium">
                  {bodyName}
                </span>
              </div>
            </div>
          </div>
        </div>

        {note && (
          <div
            className="px-8 md:px-12 lg:px-16 py-4 md:py-5 border-t text-sm leading-relaxed"
            style={{
              borderColor: `${ink}15`,
              color: ink,
              opacity: 0.75,
            }}
          >
            {t(note.en, note.ar)}
          </div>
        )}
      </motion.div>
    </section>
  );
}
