/**
 * Power Fusion — Primary Logo
 *
 * A high-voltage transformer icon with integrated lightning bolt,
 * rendered as an inline SVG for crisp display at any resolution.
 *
 * Props:
 *   - width / height  → override default sizing
 *   - className        → Tailwind or custom classes
 *   - showText         → render the "POWER FUSION" wordmark below the icon
 *   - variant          → "full" (icon + text) | "icon" (icon only) | "text" (text only)
 */

import { type SVGProps } from "react";

interface PowerFusionLogoProps extends SVGProps<SVGSVGElement> {
  showText?: boolean;
  variant?: "full" | "icon" | "text";
}

export default function PowerFusionLogo({
  showText = true,
  variant = "full",
  width,
  height,
  className,
  ...rest
}: PowerFusionLogoProps) {
  const showIcon = variant === "full" || variant === "icon";
  const showWordmark = variant === "full" || variant === "text";

  // Dimensions adapt to the variant
  const vbWidth = 200;
  const vbHeight = showWordmark ? 90 : 60;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox={`0 0 ${vbWidth} ${vbHeight}`}
      width={width ?? (showWordmark ? 200 : 60)}
      height={height ?? (showWordmark ? 90 : 60)}
      fill="none"
      className={className}
      aria-label="Power Fusion Logo"
      role="img"
      {...rest}
    >
      <defs>
        {/* Gold gradient for the transformer body */}
        <linearGradient id="pf-gold" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#E8C468" />
          <stop offset="100%" stopColor="#D4A843" />
        </linearGradient>

        {/* Navy gradient for the shield / background */}
        <linearGradient id="pf-navy" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#162D50" />
          <stop offset="100%" stopColor="#0A1628" />
        </linearGradient>

        {/* Electric glow filter */}
        <filter id="pf-glow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="1.5" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {showIcon && (
        <g transform={`translate(${showWordmark ? 70 : 0}, 0)`}>
          {/* ── Shield / Badge Background ── */}
          <path
            d="M30 2 L56 10 L56 35 Q56 50 30 58 Q4 50 4 35 L4 10 Z"
            fill="url(#pf-navy)"
            stroke="#D4A843"
            strokeWidth="1.5"
          />

          {/* ── Transformer Body ── */}
          {/* Core / vertical rectangle */}
          <rect
            x="22"
            y="14"
            width="16"
            height="28"
            rx="2"
            fill="url(#pf-gold)"
            opacity="0.9"
          />

          {/* Top bushing */}
          <rect x="26" y="9" width="8" height="7" rx="1" fill="#E8C468" />
          <line x1="30" y1="6" x2="30" y2="10" stroke="#D4A843" strokeWidth="2" strokeLinecap="round" />

          {/* Primary winding (left) */}
          <path
            d="M19 18 Q14 20 14 24 Q14 28 19 30"
            stroke="#E8C468"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
          />
          <path
            d="M17 16 Q10 19 10 24 Q10 29 17 32"
            stroke="#D4A843"
            strokeWidth="1.5"
            fill="none"
            strokeLinecap="round"
          />

          {/* Secondary winding (right) */}
          <path
            d="M41 18 Q46 20 46 24 Q46 28 41 30"
            stroke="#E8C468"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
          />
          <path
            d="M43 16 Q50 19 50 24 Q50 29 43 32"
            stroke="#D4A843"
            strokeWidth="1.5"
            fill="none"
            strokeLinecap="round"
          />

          {/* Base plate */}
          <rect x="18" y="42" width="24" height="4" rx="1" fill="#D4A843" />
          {/* Base legs */}
          <rect x="20" y="46" width="4" height="5" rx="1" fill="#B8922F" />
          <rect x="36" y="46" width="4" height="5" rx="1" fill="#B8922F" />

          {/* ── Lightning Bolt (center of transformer) ── */}
          <path
            d="M32 17 L27 26 L31 26 L28 36 L36 24 L32 24 L35 17 Z"
            fill="#FFFFFF"
            filter="url(#pf-glow)"
          />
        </g>
      )}

      {/* ── Wordmark ── */}
      {showWordmark && (
        <g>
          {/* "POWER" in gold */}
          <text
            x={showIcon ? 100 : 100}
            y={showIcon ? 72 : 30}
            textAnchor="middle"
            fontFamily="Inter, Arial, sans-serif"
            fontWeight="800"
            fontSize="16"
            letterSpacing="3"
            fill="#D4A843"
          >
            POWER
          </text>
          {/* "FUSION" in white */}
          <text
            x={showIcon ? 100 : 100}
            y={showIcon ? 86 : 48}
            textAnchor="middle"
            fontFamily="Inter, Arial, sans-serif"
            fontWeight="300"
            fontSize="14"
            letterSpacing="5"
            fill="#FFFFFF"
          >
            FUSION
          </text>
        </g>
      )}
    </svg>
  );
}
