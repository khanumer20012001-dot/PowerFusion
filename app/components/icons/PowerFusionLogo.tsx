import React from "react";

interface PowerFusionLogoProps {
  className?: string;
  width?: number | string;
  height?: number | string;
  variant?: string;
}

/**
 * Power Fusion Logo Component
 * 
 * Features an abstract transformer core with dynamic wrapped coils,
 * a central lightning bolt, and a two-tone flat-design shading system.
 */
export default function PowerFusionLogo({
  className = "",
  width = "100%",
  height = "auto",
}: PowerFusionLogoProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 680 200"
      width={width}
      height={height}
      className={className}
      aria-label="Power Fusion Logo"
      role="img"
    >
      <title>Power Fusion</title>

      {/* --- ICON GROUP --- */}
      <g transform="translate(10, 0)">
        
        {/* 1. Transformer Core Outer Frame (Dark Blue) */}
        {/* Left Column */}
        <rect x="30" y="45" width="30" height="110" fill="#154a78" />
        {/* Right Column */}
        <rect x="140" y="45" width="30" height="110" fill="#154a78" />
        {/* Top Connector */}
        <rect x="30" y="45" width="140" height="25" fill="#154a78" />
        {/* Bottom Connector */}
        <rect x="30" y="130" width="140" height="25" fill="#154a78" />

        {/* 2. Central Transformer Pillar (Two-Tone Shading) */}
        {/* Left Half (Lighter Blue) */}
        <rect x="85" y="20" width="15" height="160" fill="#1d6ca3" />
        {/* Right Half (Dark Blue) */}
        <rect x="100" y="20" width="15" height="160" fill="#154a78" />

        {/* 3. Outer Coils (Vibrant Green) */}
        <g
          stroke="#5aab4e"
          strokeWidth="6.5"
          strokeLinecap="round"
          fill="none"
        >
          {/* Left Side Coils */}
          <line x1="18" y1="55" x2="72" y2="59" />
          <line x1="18" y1="70" x2="72" y2="74" />
          <line x1="18" y1="85" x2="72" y2="89" />
          <line x1="18" y1="100" x2="72" y2="104" />
          <line x1="18" y1="115" x2="72" y2="119" />
          <line x1="18" y1="130" x2="72" y2="134" />
          <line x1="18" y1="145" x2="72" y2="149" />

          {/* Right Side Coils */}
          <line x1="128" y1="55" x2="182" y2="59" />
          <line x1="128" y1="70" x2="182" y2="74" />
          <line x1="128" y1="85" x2="182" y2="89" />
          <line x1="128" y1="100" x2="182" y2="104" />
          <line x1="128" y1="115" x2="182" y2="119" />
          <line x1="128" y1="130" x2="182" y2="134" />
          <line x1="128" y1="145" x2="182" y2="149" />
        </g>

        {/* 4. Center Lightning Bolt (Brand Orange) */}
        {/* Includes a white stroke to create a negative-space "cutout" effect over the core */}
        <path
          d="M 125 35 L 75 110 L 105 110 L 80 170 L 130 95 L 100 95 Z"
          fill="#fb9522"
          stroke="#ffffff"
          strokeWidth="5"
          strokeLinejoin="round"
        />
      </g>

      {/* --- TYPOGRAPHY GROUP --- */}
      {/* 
        Using system sans-serif fonts to ensure perfect crispness and weight 
        without requiring external font files to load.
      */}
      <text
        x="220"
        y="118"
        fontFamily="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
        fontWeight="800"
        fontSize="56"
        letterSpacing="-0.5"
      >
        <tspan fill="#154a78">POWER</tspan>
        <tspan fill="#fb9522" dx="14">FUSION</tspan>
      </text>
    </svg>
  );
}