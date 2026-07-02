/**
 * Power Fusion — Service Icon: Electrical Construction
 *
 * Depicts a power panel / electrical cabinet with wiring,
 * representing large-scale electrical construction projects.
 */

import { type SVGProps } from "react";

interface IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
}

export default function IconConstruction({
  size = 48,
  className,
  ...rest
}: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      width={size}
      height={size}
      fill="none"
      className={className}
      aria-hidden="true"
      {...rest}
    >
      {/* Cabinet body */}
      <rect
        x="8"
        y="6"
        width="32"
        height="36"
        rx="3"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
      />

      {/* Cabinet door line */}
      <line x1="24" y1="6" x2="24" y2="42" stroke="currentColor" strokeWidth="1.5" opacity="0.5" />

      {/* Door handles */}
      <rect x="21" y="22" width="2" height="6" rx="1" fill="currentColor" opacity="0.7" />
      <rect x="25" y="22" width="2" height="6" rx="1" fill="currentColor" opacity="0.7" />

      {/* Top vents */}
      <line x1="12" y1="10" x2="20" y2="10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="12" y1="13" x2="20" y2="13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="28" y1="10" x2="36" y2="10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="28" y1="13" x2="36" y2="13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />

      {/* Circuit breakers (left panel) */}
      <rect x="12" y="18" width="4" height="3" rx="0.5" fill="currentColor" opacity="0.6" />
      <rect x="12" y="23" width="4" height="3" rx="0.5" fill="currentColor" opacity="0.6" />
      <rect x="12" y="28" width="4" height="3" rx="0.5" fill="currentColor" opacity="0.6" />

      {/* Circuit breakers (right panel) */}
      <rect x="32" y="18" width="4" height="3" rx="0.5" fill="currentColor" opacity="0.6" />
      <rect x="32" y="23" width="4" height="3" rx="0.5" fill="currentColor" opacity="0.6" />
      <rect x="32" y="28" width="4" height="3" rx="0.5" fill="currentColor" opacity="0.6" />

      {/* Cable entry (top) */}
      <path d="M18 6 L18 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M24 6 L24 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M30 6 L30 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />

      {/* Base / mounting */}
      <rect x="6" y="42" width="36" height="3" rx="1" fill="currentColor" opacity="0.4" />
    </svg>
  );
}
