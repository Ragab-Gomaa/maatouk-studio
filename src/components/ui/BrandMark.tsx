"use client";

interface BrandMarkProps {
  color?: string;
  size?: number;
  className?: string;
}

export default function BrandMark({
  color = "#0029D6",
  size = 48,
  className = "",
}: BrandMarkProps) {
  return (
    <svg
      viewBox="0 0 473.71 473.15"
      width={size}
      height={size}
      className={className}
      aria-hidden="true"
    >
      <rect
        fill={color}
        x="271.74"
        y="271.46"
        width="167.08"
        height="167.08"
        transform="translate(-146.96 355.2) rotate(-45)"
      />
      <polygon
        fill={color}
        points="236.57 355 118.43 236.85 .28 355 1.2 355.92 0 355.92 0 473.15 118.43 473.15 118.43 473.15 118.43 473.15 236.85 473.15 236.85 355.92 235.66 355.92 236.57 355"
      />
      <rect
        fill={color}
        x="34.89"
        y="34.6"
        width="167.08"
        height="167.08"
        transform="translate(-48.86 118.34) rotate(-45)"
      />
      <polygon
        fill={color}
        points="356.84 1.55 355.28 0 353.73 1.55 236.85 1.55 236.85 118.78 237.77 118.78 355.28 236.29 472.79 118.78 473.71 118.78 473.71 1.55 356.84 1.55"
      />
    </svg>
  );
}
