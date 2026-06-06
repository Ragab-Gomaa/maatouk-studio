"use client";

import { useEffect, useRef, useState } from "react";

export function CustomCursor() {
  const ringRef = useRef<HTMLDivElement | null>(null);
  const [active, setActive] = useState(false);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;
    setEnabled(true);

    let mx = window.innerWidth / 2;
    let my = window.innerHeight / 2;
    let rx = mx;
    let ry = my;
    let raf = 0;

    const onMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      const target = e.target as HTMLElement | null;
      const interactive = target?.closest('[data-cursor="view"]');
      setActive(!!interactive);
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

  return (
    <div
      ref={ringRef}
      aria-hidden
      className={`pointer-events-none fixed left-0 top-0 z-[100] flex h-20 w-20 items-center justify-center rounded-full bg-[var(--color-accent)] text-black transition-[opacity,scale] duration-300 ease-out ${
        active ? "opacity-100 scale-100" : "opacity-0 scale-50"
      }`}
    >
      <span className="text-[10px]">View</span>
    </div>
  );
}
