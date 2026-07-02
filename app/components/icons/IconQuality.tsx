/**
 * Power Fusion — Commitment Icon: High-Quality Standards
 *
 * A star / diamond with quality certification ribbons,
 * representing adherence to top industry standards.
 */

import { type SVGProps } from "react";

interface IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
}

export default function IconQuality({
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
      {/* Award medal circle */}
      <circle cx="24" cy="18" r="14" stroke="currentColor" strokeWidth="2" />
      <circle cx="24" cy="18" r="10" stroke="currentColor" strokeWidth="1" opacity="0.4" />

      {/* Star inside the medal */}
      <path
        d="M24 8 L26.5 14 L33 14.5 L28 19 L29.5 25.5 L24 22 L18.5 25.5 L20 19 L15 14.5 L21.5 14 Z"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="currentColor"
        opacity="0.15"
        strokeLinejoin="round"
      />

      {/* Ribbon left */}
      <path
        d="M16 30 L12 44 L18 40 L22 46 L22 32"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
        strokeLinejoin="round"
        strokeLinecap="round"
      />

      {/* Ribbon right */}
      <path
        d="M32 30 L36 44 L30 40 L26 46 L26 32"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
    </svg>
  );
}
