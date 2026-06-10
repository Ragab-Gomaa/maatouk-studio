import type { Segment } from "@/lib/i18n";

/** Renders a localized statement, keeping per-word accent / italic styling. */
export function Statement({ segments }: { segments: Segment[] }) {
  return (
    <>
      {segments.map((s, i) => {
        const cls = `${s.accent ? "text-[var(--color-accent)]" : ""} ${
          s.italic ? "italic" : ""
        }`.trim();
        return (
          <span key={i} className={cls || undefined}>
            {s.t}
          </span>
        );
      })}
    </>
  );
}
