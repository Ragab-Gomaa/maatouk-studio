"use client";

export function MaatoukBadge({
  theme = "dark",
  lang = "en",
}: {
  theme?: "dark" | "light";
  lang?: "ar" | "en";
}) {
  const isAr = lang === "ar";

  return (
    <>
      <a
        href="https://maatouk-studio.com"
        target="_blank"
        rel="noopener noreferrer"
        className={`mb mb--${theme} ${isAr ? "mb--rtl" : "mb--ltr"}`}
      >
        <span className="mb-mark">
          <svg width="20" height="20" viewBox="0 0 473.71 473.15" fill="none">
            <rect
              x="34.89"
              y="34.6"
              width="167.08"
              height="167.08"
              transform="rotate(-45 118.43 118.14)"
              fill="currentColor"
            />
            <polygon
              points="356.84 1.55 355.28 0 353.73 1.55 236.85 1.55 236.85 118.78 237.77 118.78 355.28 236.29 472.79 118.78 473.71 118.78 473.71 1.55 356.84 1.55"
              fill="currentColor"
            />
            <polygon
              points="236.57 355 118.43 236.85 .28 355 1.2 355.92 0 355.92 0 473.15 118.43 473.15 118.43 473.15 118.43 473.15 236.85 473.15 236.85 355.92 235.66 355.92 236.57 355"
              fill="currentColor"
            />
            <rect
              x="271.74"
              y="271.46"
              width="167.08"
              height="167.08"
              transform="rotate(-45 355.28 355)"
              fill="currentColor"
            />
          </svg>
        </span>

        <span className="mb-line" />

        <span className="mb-text">
          <span className="mb-sub">{isAr ? "صمم بواسطة" : "Design by"}</span>
          <span className="mb-name">
            {isAr ? "ستوديو مَعتوق" : "Maatouk Studio"}
          </span>
        </span>
      </a>

      <style>{`
        @font-face {
          font-family: 'Mizan';
          src: url('/fonts/MizanAR-Bold.otf') format('opentype');
          font-weight: 700;
          font-display: swap;
        }
        .mb {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          text-decoration: none;
          padding: 0 4px;
        }
        .mb--rtl { direction: rtl; }
        .mb--ltr { direction: ltr; }
        .mb--dark { color: rgba(255,255,255,0.9); }
        .mb--dark .mb-line { background: rgba(255,255,255,0.9); }
        .mb--light { color: #0029d6; }
        .mb--light .mb-sub { color: #222; }
        .mb--light .mb-name { color: #222; }
        .mb--light .mb-line { background: #222; }
        .mb-mark {
          display: flex;
          transition: transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        .mb:hover .mb-mark { transform: rotate(180deg); }
        .mb-line {
          width: 1px; height: 22px; opacity: 0.4; flex-shrink: 0;
        }
        .mb-text { display: flex; flex-direction: column; gap: 1px; }
        .mb-sub {
          font-family: 'Mizan', 'Cairo', system-ui, sans-serif;
          font-size: 8.5px; color: inherit; line-height: 1.2;
        }
        .mb-name {
          font-family: 'Mizan', 'Cairo', system-ui, sans-serif;
          font-weight: 700; font-size: 12px; color: inherit;
          line-height: 1.2; white-space: nowrap;
        }
        .mb--ltr .mb-sub, .mb--ltr .mb-name {
          font-family: system-ui, -apple-system, sans-serif;
        }
      `}</style>
    </>
  );
}
