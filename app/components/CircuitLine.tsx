interface CircuitLineProps {
  className?: string;
}

const nodes = [
  { x: 60, label: "UTILITY" },
  { x: 310, label: "XFMR" },
  { x: 570, label: "MAIN BKR" },
  { x: 830, label: "DIST. PANEL" },
  { x: 1080, label: "LOAD" },
];

/**
 * The site's signature element: a live single-line diagram — the schematic
 * electrical engineers actually draw to represent a power distribution
 * system. A dashed overlay simulates current flowing through the
 * conductor, and the main breaker carries a pulsing green "ON" indicator.
 */
export default function CircuitLine({ className = "" }: CircuitLineProps) {
  return (
    <div className={`w-full select-none ${className}`} aria-hidden="true">
      <svg viewBox="0 0 1140 110" className="w-full h-auto overflow-visible">
        <line x1="40" y1="46" x2="1100" y2="46" stroke="#99c747" strokeWidth="2" />
        <line
          x1="40"
          y1="46"
          x2="1100"
          y2="46"
          stroke="#fb9522"
          strokeWidth="2"
          strokeDasharray="6 12"
          className="circuit-flow"
        />

        {nodes.map((n) => (
          <g key={n.label} transform={`translate(${n.x},46)`}>
            {n.label === "MAIN BKR" && (
              <>
                <rect x="-10" y="-10" width="20" height="20" fill="#fb9522" stroke="#99c747" strokeWidth="1.5" />
                <line x1="-6" y1="6" x2="6" y2="-6" stroke="#99c747" strokeWidth="1.5" />
                <circle cx="0" cy="-24" r="4" fill="#99c747 " className="led-pulse" />
              </>
            )}
            {n.label === "XFMR" && (
              <>
                <circle cx="-6" cy="0" r="9" fill="none" stroke="#9aa1ab" strokeWidth="1.5" />
                <circle cx="6" cy="0" r="9" fill="none" stroke="#9aa1ab" strokeWidth="1.5" />
              </>
            )}
            {n.label === "LOAD" && (
              <>
                <line x1="0" y1="-10" x2="0" y2="10" stroke="#9aa1ab" strokeWidth="1.5" />
                <line x1="-9" y1="10" x2="9" y2="10" stroke="#9aa1ab" strokeWidth="1.5" />
                <line x1="-6" y1="14" x2="6" y2="14" stroke="#9aa1ab" strokeWidth="1.5" />
                <line x1="-3" y1="18" x2="3" y2="18" stroke="#9aa1ab" strokeWidth="1.5" />
              </>
            )}
            {(n.label === "UTILITY" || n.label === "DIST. PANEL") && (
              <circle cx="0" cy="0" r="5" fill="#0b0c0e" stroke="#9aa1ab" strokeWidth="1.5" />
            )}
            <text
              x="0"
              y="38"
              textAnchor="middle"
              fontFamily="var(--font-mono)"
              fontSize="10.5"
              fill="#6b7280"
              letterSpacing="0.06em"
            >
              {n.label}
            </text>
          </g>
        ))}
      </svg>
    </div>
  );
}
