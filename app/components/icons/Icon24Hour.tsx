/**
 * Power Fusion — Commitment Icon: 24-Hour Service
 *
 * A clock with "24" and a power indicator,
 * representing round-the-clock call-out availability.
 */

import { type SVGProps } from "react";

interface IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
}

export default function Icon24Hour({
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
      {/* Clock face */}
      <circle cx="24" cy="24" r="20" stroke="currentColor" strokeWidth="2" />
      <circle cx="24" cy="24" r="17" stroke="currentColor" strokeWidth="0.5" opacity="0.3" />

      {/* Hour markers */}
      <line x1="24" y1="6" x2="24" y2="9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <line x1="24" y1="39" x2="24" y2="42" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <line x1="6" y1="24" x2="9" y2="24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <line x1="39" y1="24" x2="42" y2="24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />

      {/* "24" text */}
      <text
        x="24"
        y="22"
        textAnchor="middle"
        fontFamily="Inter, Arial, sans-serif"
        fontWeight="800"
        fontSize="13"
        fill="currentColor"
      >
        24
      </text>

      {/* "HR" text */}
      <text
        x="24"
        y="31"
        textAnchor="middle"
        fontFamily="Inter, Arial, sans-serif"
        fontWeight="600"
        fontSize="7"
        fill="currentColor"
        opacity="0.7"
      >
        HR
      </text>

      {/* Circular arrow (always available) */}
      <path
        d="M36 10 A16 16 0 1 1 10 18"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
        strokeLinecap="round"
        opacity="0.5"
      />
      <path d="M36 10 L38 7 L33 8 Z" fill="currentColor" opacity="0.5" />
    </svg>
  );
}
