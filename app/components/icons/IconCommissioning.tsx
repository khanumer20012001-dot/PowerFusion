/**
 * Power Fusion — Service Icon: Commissioning
 *
 * Depicts a clipboard with a checkmark and a power symbol,
 * representing system commissioning & handover services.
 */

import { type SVGProps } from "react";

interface IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
}

export default function IconCommissioning({
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
      {/* Clipboard body */}
      <rect
        x="8"
        y="6"
        width="32"
        height="38"
        rx="3"
        stroke="currentColor"
        strokeWidth="2"
      />

      {/* Clipboard clip */}
      <rect x="17" y="3" width="14" height="8" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <rect x="20" y="2" width="8" height="4" rx="1.5" fill="currentColor" opacity="0.5" />

      {/* Power symbol (circle with line) */}
      <path
        d="M24 16 L24 20"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M18 19 A8 8 0 1 0 30 19"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
      />

      {/* Checklist lines */}
      <line x1="14" y1="33" x2="20" y2="33" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
      <line x1="23" y1="33" x2="34" y2="33" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.4" />

      <line x1="14" y1="37" x2="20" y2="37" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
      <line x1="23" y1="37" x2="34" y2="37" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.4" />

      <line x1="14" y1="41" x2="20" y2="41" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
      <line x1="23" y1="41" x2="30" y2="41" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.4" />

      {/* Checkmarks */}
      <path d="M14 32 L16 34 L20 30" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.8" />
      <path d="M14 36 L16 38 L20 34" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.8" />
    </svg>
  );
}
