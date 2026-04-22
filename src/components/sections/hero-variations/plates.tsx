"use client";

import { motion } from "framer-motion";

/**
 * Shared "art plates" for the Hero variations. Each plate is an original
 * typographic / illustrative composition representing one of the studio's
 * three disciplines. Plates are pure SVG so they scale cleanly at any size
 * and never show a featured project or screenshot.
 *
 * Art direction:
 *  - I. Branding  — Arabic letterform with Latin specimen + construction marks
 *  - II. Motion   — Three progressive motion frames with blur trails + timecode
 *  - III. Digital — Minimal UI/code artifact, treated as art not as a product shot
 */

/* ─────────────────── I — Branding (typography) ─────────────────── */

export function BrandingPlate({ compact = false }: { compact?: boolean }) {
  return (
    <svg
      viewBox="0 0 300 400"
      className="w-full h-full"
      preserveAspectRatio="xMidYMid meet"
      aria-hidden="true"
    >
      {/* Construction baselines */}
      <motion.line
        x1="20"
        y1="230"
        x2="280"
        y2="230"
        stroke="rgba(0,41,214,0.14)"
        strokeWidth="0.8"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      />
      <motion.line
        x1="20"
        y1="130"
        x2="280"
        y2="130"
        stroke="rgba(0,41,214,0.1)"
        strokeWidth="0.6"
        strokeDasharray="4 4"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      />
      <motion.line
        x1="20"
        y1="320"
        x2="280"
        y2="320"
        stroke="rgba(0,41,214,0.08)"
        strokeWidth="0.6"
        strokeDasharray="2 6"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.8, delay: 0.8 }}
      />

      {/* Arabic ك — anchor letterform */}
      <motion.text
        x="150"
        y="228"
        textAnchor="middle"
        fontSize="210"
        fill="#0029D6"
        style={{
          fontFamily: '"Mizan", "Traditional Arabic", serif',
          fontWeight: 700,
        }}
        initial={{ opacity: 0, scale: 0.88 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.9, delay: 0.2 }}
      >
        ك
      </motion.text>

      {/* Latin Aa specimen */}
      <motion.text
        x="150"
        y="308"
        textAnchor="middle"
        fontSize="60"
        fill="#111"
        style={{
          fontFamily: "var(--font-lyon), Georgia, serif",
          fontWeight: 700,
        }}
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        Aa
      </motion.text>

      {/* Height measurement tick */}
      {!compact && (
        <motion.g
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 1.0 }}
        >
          <line
            x1="272"
            y1="130"
            x2="272"
            y2="230"
            stroke="rgba(0,41,214,0.35)"
            strokeWidth="0.6"
          />
          <line
            x1="267"
            y1="130"
            x2="277"
            y2="130"
            stroke="rgba(0,41,214,0.35)"
            strokeWidth="0.6"
          />
          <line
            x1="267"
            y1="230"
            x2="277"
            y2="230"
            stroke="rgba(0,41,214,0.35)"
            strokeWidth="0.6"
          />
          <text
            x="282"
            y="184"
            fontSize="9"
            fill="rgba(0,41,214,0.55)"
            style={{ fontFamily: "ui-monospace, monospace" }}
          >
            1em
          </text>
        </motion.g>
      )}

      {/* Corner diamond accent */}
      <motion.rect
        x="40"
        y="350"
        width="10"
        height="10"
        transform="rotate(45 45 355)"
        fill="#3CFFC5"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, delay: 1.1 }}
      />
    </svg>
  );
}

/* ─────────────────── II — Motion (frame stack) ─────────────────── */

export function MotionPlate() {
  return (
    <svg
      viewBox="0 0 300 400"
      className="w-full h-full"
      preserveAspectRatio="xMidYMid meet"
      aria-hidden="true"
    >
      {/* Sprocket holes — film strip */}
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <motion.rect
          key={`hole-l-${i}`}
          x="16"
          y={50 + i * 50}
          width="6"
          height="10"
          fill="rgba(255,255,255,0.22)"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.3 + i * 0.04 }}
        />
      ))}
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <motion.rect
          key={`hole-r-${i}`}
          x="278"
          y={50 + i * 50}
          width="6"
          height="10"
          fill="rgba(255,255,255,0.22)"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.4 + i * 0.04 }}
        />
      ))}

      {/* Three progressive motion frames */}
      {[0, 1, 2].map((i) => {
        const y = 80 + i * 80;
        const radius = 8 + i * 7;
        const cx = 70 + i * 55;
        return (
          <motion.g
            key={i}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.55, delay: 0.3 + i * 0.18 }}
          >
            <rect
              x="38"
              y={y}
              width="224"
              height="62"
              fill="rgba(60,255,197,0.08)"
              stroke="rgba(60,255,197,0.35)"
              strokeWidth="0.8"
            />
            {/* Blur trail */}
            {[3, 2, 1].map((j) => (
              <circle
                key={j}
                cx={cx - j * 11}
                cy={y + 31}
                r={radius * (1 - j * 0.18)}
                fill="#3CFFC5"
                opacity={0.15 + (3 - j) * 0.08}
              />
            ))}
            {/* Lead shape */}
            <circle cx={cx} cy={y + 31} r={radius} fill="#3CFFC5" />
            {/* Frame index */}
            <text
              x="250"
              y={y + 14}
              fontSize="9"
              fill="rgba(60,255,197,0.55)"
              style={{ fontFamily: "ui-monospace, monospace" }}
            >
              0{i + 1}
            </text>
          </motion.g>
        );
      })}

      {/* Timecode */}
      <motion.text
        x="150"
        y="340"
        textAnchor="middle"
        fontSize="11"
        fill="rgba(60,255,197,0.75)"
        style={{
          fontFamily: "ui-monospace, monospace",
          letterSpacing: "0.28em",
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.9 }}
      >
        00 : 00 : 24 : 09
      </motion.text>

      {/* Play chip */}
      <motion.g
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 1.05 }}
        style={{ transformOrigin: "150px 368px" }}
      >
        <circle
          cx="150"
          cy="368"
          r="14"
          fill="rgba(255,255,255,0.08)"
          stroke="rgba(255,255,255,0.4)"
          strokeWidth="0.8"
        />
        <polygon points="145,361 158,368 145,375" fill="#3CFFC5" />
      </motion.g>
    </svg>
  );
}

/* ─────────────────── III — Digital (UI/code artifact) ─────────────────── */

export function DigitalPlate() {
  return (
    <svg
      viewBox="0 0 300 400"
      className="w-full h-full"
      preserveAspectRatio="xMidYMid meet"
      aria-hidden="true"
    >
      {/* Code bracket above */}
      <motion.text
        x="150"
        y="58"
        textAnchor="middle"
        fontSize="22"
        fill="#0029D6"
        style={{
          fontFamily: "ui-monospace, monospace",
          fontWeight: 700,
          letterSpacing: "0.08em",
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.2 }}
      >
        &lt;/&gt;
      </motion.text>

      {/* Window */}
      <motion.rect
        x="30"
        y="80"
        width="240"
        height="270"
        fill="white"
        stroke="rgba(0,0,0,0.09)"
        strokeWidth="1"
        rx="4"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      />
      <motion.rect
        x="30"
        y="80"
        width="240"
        height="28"
        fill="rgba(0,0,0,0.03)"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.4 }}
      />
      {[0, 1, 2].map((i) => (
        <motion.circle
          key={i}
          cx={45 + i * 12}
          cy="94"
          r="3.5"
          fill={i === 0 ? "#FF5F57" : i === 1 ? "#FEBC2E" : "#28C840"}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.5 + i * 0.05 }}
        />
      ))}

      {/* Headline block */}
      <motion.rect
        x="50"
        y="130"
        width="120"
        height="12"
        fill="#0029D6"
        initial={{ width: 0 }}
        animate={{ width: 120 }}
        transition={{ duration: 0.6, delay: 0.7 }}
      />

      {/* Text lines */}
      <motion.rect
        x="50"
        y="152"
        width="180"
        height="3"
        fill="rgba(0,0,0,0.12)"
        initial={{ width: 0 }}
        animate={{ width: 180 }}
        transition={{ duration: 0.5, delay: 0.85 }}
      />
      <motion.rect
        x="50"
        y="162"
        width="150"
        height="3"
        fill="rgba(0,0,0,0.12)"
        initial={{ width: 0 }}
        animate={{ width: 150 }}
        transition={{ duration: 0.5, delay: 0.95 }}
      />
      <motion.rect
        x="50"
        y="172"
        width="100"
        height="3"
        fill="rgba(0,0,0,0.12)"
        initial={{ width: 0 }}
        animate={{ width: 100 }}
        transition={{ duration: 0.5, delay: 1.05 }}
      />

      {/* Cards grid */}
      {[0, 1, 2, 3].map((i) => {
        const col = i % 2;
        const row = Math.floor(i / 2);
        return (
          <motion.rect
            key={i}
            x={50 + col * 105}
            y={200 + row * 60}
            width="100"
            height="52"
            fill="rgba(0,41,214,0.08)"
            stroke="rgba(0,41,214,0.15)"
            strokeWidth="0.6"
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 1.1 + i * 0.08 }}
          />
        );
      })}

      {/* Mint accent chip */}
      <motion.rect
        x="220"
        y="128"
        width="30"
        height="16"
        rx="2"
        fill="#3CFFC5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3, delay: 1.3 }}
      />
    </svg>
  );
}
