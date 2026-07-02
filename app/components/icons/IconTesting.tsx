/**
 * Power Fusion — Service Icon: Testing
 *
 * Depicts a multimeter / testing probe device,
 * representing electrical testing & diagnostics services.
 */

import { type SVGProps } from "react";

interface IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
}

export default function IconTesting({
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
      {/* Multimeter body */}
      <rect
        x="10"
        y="4"
        width="28"
        height="36"
        rx="4"
        stroke="currentColor"
        strokeWidth="2"
      />

      {/* Display screen */}
      <rect
        x="14"
        y="8"
        width="20"
        height="10"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.5"
        opacity="0.7"
      />

      {/* Reading on display */}
      <text
        x="24"
        y="16"
        textAnchor="middle"
        fontFamily="monospace"
        fontSize="7"
        fill="currentColor"
        opacity="0.8"
      >
        220V
      </text>

      {/* Rotary dial */}
      <circle cx="24" cy="28" r="7" stroke="currentColor" strokeWidth="1.5" />
      {/* Dial pointer */}
      <line x1="24" y1="28" x2="24" y2="22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      {/* Dial dot center */}
      <circle cx="24" cy="28" r="1.5" fill="currentColor" />

      {/* Dial markings */}
      <circle cx="20" cy="24" r="0.8" fill="currentColor" opacity="0.5" />
      <circle cx="28" cy="24" r="0.8" fill="currentColor" opacity="0.5" />
      <circle cx="18" cy="28" r="0.8" fill="currentColor" opacity="0.5" />
      <circle cx="30" cy="28" r="0.8" fill="currentColor" opacity="0.5" />
      <circle cx="20" cy="32" r="0.8" fill="currentColor" opacity="0.5" />
      <circle cx="28" cy="32" r="0.8" fill="currentColor" opacity="0.5" />

      {/* Probe ports (bottom) */}
      <circle cx="18" cy="37" r="2" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="30" cy="37" r="2" stroke="currentColor" strokeWidth="1.5" />

      {/* Probe wires */}
      <path d="M18 39 Q18 46 12 46" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      <path d="M30 39 Q30 46 36 46" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" />

      {/* Probe tips */}
      <line x1="12" y1="46" x2="10" y2="48" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <line x1="36" y1="46" x2="38" y2="48" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}
