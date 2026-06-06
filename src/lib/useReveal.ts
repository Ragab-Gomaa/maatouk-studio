"use client";

import { useEffect, useRef, useState } from "react";

export function useReveal<T extends HTMLElement>(options?: { threshold?: number; rootMargin?: string; once?: boolean }) {
  const { threshold = 0.15, rootMargin = "0px 0px -10% 0px", once = true } = options ?? {};
  const ref = useRef<T | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          if (once) observer.disconnect();
        } else if (!once) {
          setVisible(false);
        }
      },
      { threshold, rootMargin }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, rootMargin, once]);

  return { ref, visible } as const;
}
