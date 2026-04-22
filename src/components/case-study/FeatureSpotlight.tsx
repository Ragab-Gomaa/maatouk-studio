"use client";

import { motion } from "framer-motion";
import { useTranslation } from "@/lib/LocaleContext";
import { PhoneMockup, LaptopMockup } from "./DeviceMockup";

interface FeatureSpotlightProps {
  label: string;
  title: { en: string; ar: string };
  body: { en: string; ar: string };
  imageSrc?: string;
  imageAlt?: string;
  /** Layout direction — "phone" uses a phone frame, "laptop" uses a laptop */
  device?: "phone" | "laptop" | "raw";
  /** Flip the content/image sides */
  reverse?: boolean;
  /** Background color for the image side (matches project palette) */
  bg?: string;
}

export default function FeatureSpotlight({
  label,
  title,
  body,
  imageSrc,
  imageAlt = "",
  device = "laptop",
  reverse = false,
  bg,
}: FeatureSpotlightProps) {
  const { t } = useTranslation();

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center ${
        reverse ? "lg:[direction:rtl]" : ""
      }`}
    >
      {/* Content */}
      <div className={reverse ? "lg:[direction:ltr]" : ""}>
        <div className="flex items-center gap-3 mb-5">
          <span className="w-2 h-2 rotate-45 bg-brand-blue" />
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-brand-blue">
            {label}
          </span>
        </div>
        <h3 className="text-3xl md:text-4xl lg:text-5xl font-lyon font-bold tracking-tight mb-5 leading-[1.1]">
          {t(title.en, title.ar)}
        </h3>
        <p className="text-base md:text-lg text-black/65 leading-relaxed max-w-lg">
          {t(body.en, body.ar)}
        </p>
      </div>

      {/* Image */}
      <div
        className={`relative flex items-center justify-center py-10 md:py-16 ${
          reverse ? "lg:[direction:ltr]" : ""
        }`}
        style={bg ? { backgroundColor: bg } : undefined}
      >
        {imageSrc && device === "laptop" && (
          <LaptopMockup src={imageSrc} alt={imageAlt} className="w-full max-w-[520px]" />
        )}
        {imageSrc && device === "phone" && (
          <PhoneMockup src={imageSrc} alt={imageAlt} width={260} />
        )}
        {imageSrc && device === "raw" && (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={imageSrc}
            alt={imageAlt}
            className="w-full max-w-[520px] h-auto rounded shadow-[0_20px_60px_-20px_rgba(0,0,0,0.2)]"
          />
        )}
      </div>
    </motion.article>
  );
}
