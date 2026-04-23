"use client";

import { motion } from "framer-motion";

/**
 * Route transition wrapper. App-router re-mounts this component on
 * every navigation, so the motion keyframes replay on each page
 * visit — giving a quiet, consistent fade-in that ties the site
 * together visually.
 */
export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
