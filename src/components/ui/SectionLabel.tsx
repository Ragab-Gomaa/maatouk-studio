"use client";

import { motion } from "framer-motion";
import { fadeIn } from "@/lib/animations";

interface SectionLabelProps {
  children: React.ReactNode;
  className?: string;
}

export default function SectionLabel({ children, className = "" }: SectionLabelProps) {
  return (
    <motion.span
      variants={fadeIn}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className={`inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-brand-blue ${className}`}
    >
      <span className="w-2 h-2 rotate-45 bg-brand-blue" />
      {children}
    </motion.span>
  );
}
