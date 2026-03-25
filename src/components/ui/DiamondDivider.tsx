"use client";

import { motion } from "framer-motion";
import { lineExpand, diamondSpin } from "@/lib/animations";

interface DiamondDividerProps {
  color?: string;
  className?: string;
}

export default function DiamondDivider({
  color = "#0029D6",
  className = "",
}: DiamondDividerProps) {
  return (
    <div className={`flex items-center gap-4 ${className}`}>
      <motion.div
        variants={lineExpand}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="flex-1 h-px origin-left"
        style={{ backgroundColor: color, opacity: 0.2 }}
      />
      <motion.div
        variants={diamondSpin}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="w-3 h-3 rotate-45 shrink-0"
        style={{ backgroundColor: color }}
      />
      <motion.div
        variants={lineExpand}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="flex-1 h-px origin-right"
        style={{ backgroundColor: color, opacity: 0.2 }}
      />
    </div>
  );
}
