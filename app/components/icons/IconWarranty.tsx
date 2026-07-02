/**
 * Power Fusion — Commitment Icon: Warranty on Workmanship
 *
 * A shield with a checkmark inside, representing
 * guaranteed quality and warranty protection.
 */

import { type SVGProps } from "react";

interface IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
}

export default function IconWarranty({
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
      {/* Shield outline */}
      <path
        d="M24 4 L42 12 L42 24 Q42 38 24 46 Q6 38 6 24 L6 12 Z"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
        strokeLinejoin="round"
      />

      {/* Inner shield highlight */}
      <path
        d="M24 8 L38 14 L38 24 Q38 35 24 42 Q10 35 10 24 L10 14 Z"
        stroke="currentColor"
        strokeWidth="0.5"
        fill="currentColor"
        opacity="0.08"
        strokeLinejoin="round"
      />

      {/* Checkmark */}
      <path
        d="M16 24 L22 30 L34 18"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
