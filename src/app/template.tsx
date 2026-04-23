"use client";

import { motion } from "framer-motion";

/**
 * Route transition wrapper. App-router re-mounts this component on
 * every navigation, so the motion keyframes replay on each page
 * visit — a quiet, consistent fade-up that signals "new view" across
 * the whole site. Slightly longer than section-level animations (0.6s)
 * so it reads as a page-scope transition, not a section reveal.
 */
export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14, filter: "blur(6px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
