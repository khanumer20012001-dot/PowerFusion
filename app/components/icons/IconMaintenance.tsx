/**
 * Power Fusion — Service Icon: Maintenance
 *
 * Depicts a wrench + gear combination,
 * representing ongoing maintenance & repair services.
 */

import { type SVGProps } from "react";

interface IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
}

export default function IconMaintenance({
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
      {/* Gear (outer teeth) */}
      <path
        d="M28 6 L30 6 L31 9 L34 10 L36.5 8 L38 9.5 L36 12 L37 15 L40 16 L40 18
           L37 19 L36 22 L38 24.5 L36.5 26 L34 24 L31 25 L30 28 L28 28 L27 25
           L24 24 L21.5 26 L20 24.5 L22 22 L21 19 L18 18 L18 16 L21 15 L22 12
           L20 9.5 L21.5 8 L24 10 L27 9 Z"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
        strokeLinejoin="round"
      />
      {/* Gear center hole */}
      <circle cx="29" cy="17" r="4" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="29" cy="17" r="1.5" fill="currentColor" opacity="0.4" />

      {/* Wrench */}
      <path
        d="M8 40 L22 26"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
      {/* Wrench head (open jaw) */}
      <path
        d="M22 26 L26 22 L24 20 L20 24 Z"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="currentColor"
        opacity="0.6"
      />
      {/* Wrench handle grip */}
      <line x1="8" y1="40" x2="13" y2="35" stroke="currentColor" strokeWidth="4" strokeLinecap="round" opacity="0.7" />

      {/* Lightning bolt (small, on the gear) */}
      <path
        d="M30 13 L28 17 L30 17 L28 21"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.8"
      />

      {/* Spark indicators */}
      <line x1="38" y1="6" x2="40" y2="4" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.5" />
      <line x1="42" y1="10" x2="44" y2="9" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.5" />
      <line x1="40" y1="14" x2="43" y2="14" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.5" />
    </svg>
  );
}
