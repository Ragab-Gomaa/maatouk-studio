"use client";

import { useEffect, useRef, useState } from "react";
import { useLang } from "@/components/i18n/LangProvider";

export function CustomCursor() {
  const { copy } = useLang();
  const ringRef = useRef<HTMLDivElement | null>(null);
  const [kind, setKind] = useState<string | null>(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;
    setEnabled(true);

    let mx = window.innerWidth / 2;
    let my = window.innerHeight / 2;
    let rx = mx;
    let ry = my;
    let raf = 0;
    let wasActive = false;

    const onMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      const target = e.target as HTMLElement | null;
      const el = target?.closest("[data-cursor]");
      const nowActive = !!el;
      // Entering a target: snap the ring to the pointer so it appears right
      // under the cursor instead of sliding in from its previous spot.
      if (nowActive && !wasActive) {
        rx = mx;
        ry = my;
      }
      wasActive = nowActive;
      setKind(el ? el.getAttribute("data-cursor") : null);
    };

    const tick = () => {
      rx += (mx - rx) * 0.2;
      ry += (my - ry) * 0.2;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${rx}px, ${ry}px, 0) translate(-50%, -50%)`;
      }
      raf = requestAnimationFrame(tick);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    raf = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  if (!enabled) return null;

  const active = kind !== null;
  const label =
    kind === "prev"
      ? `← ${copy.hero.prev}`
      : kind === "next"
      ? `${copy.hero.next} →`
      : copy.cursor.view;

  return (
    <div
      ref={ringRef}
      aria-hidden
      className={`pointer-events-none fixed left-0 top-0 z-[100] flex h-20 w-20 items-center justify-center rounded-full bg-[var(--color-accent)] text-black transition-[opacity,scale] duration-300 ease-out ${
        active ? "opacity-100 scale-100" : "opacity-0 scale-50"
      }`}
    >
      <span className="text-[11px] font-medium leading-none">{label}</span>
    </div>
  );
}
