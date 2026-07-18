interface SectionDividerProps {
  label: string;
  tone?: "light" | "dark" | "orange";
}

/**
 * A quiet, static echo of the hero's single-line diagram — a dimension-line
 * style rule with tick marks, used to bridge sections without repeating
 * the loud, animated version. Restraint by design: the boldness was
 * already spent once, in the hero.
 *
 * `tone="orange"` is the one deliberate exception — a brand-colored variant
 * for the rare divider that should register a little more, e.g. right
 * before Services or Contact. Same restraint, just warmer: the brand
 * orange is used at reduced opacity for the ticks (not a new shade — an
 * alpha variant of the one approved hex) and at full strength only for
 * the label text, which is the one element that needs to read clearly.
 */
export default function SectionDivider({ label, tone = "light" }: SectionDividerProps) {
  const isDark = tone === "dark";
  const isOrange = tone === "orange";

 const bgColor = isDark ? "#0b0c0e" : isOrange ? "#fb96220c" : "#ffffff";
  const tickColor = isDark
    ? "#2b2f36"
    : isOrange
    ? "rgba(251, 149, 34, 0.4)" // brand orange, alpha variant — not a new hue
    : "#c3c8cf";
  const labelColor = isDark ? "#6b7280" : isOrange ? "#fb9522" : "#9aa1ab";

  return (
    <div
      className="w-full py-8"
      style={{ backgroundColor: bgColor }}
      aria-hidden="true"
    >
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex items-center gap-4">
          <div
            className="flex-1 h-px"
            style={{
              backgroundImage: `repeating-linear-gradient(90deg, ${tickColor} 0, ${tickColor} 6px, transparent 6px, transparent 14px)`,
            }}
          />
          <span
            className="font-mono text-[10px] tracking-[0.3em] uppercase whitespace-nowrap"
            style={{ color: labelColor }}
          >
            {label}
          </span>
          <div
            className="flex-1 h-px"
            style={{
              backgroundImage: `repeating-linear-gradient(90deg, ${tickColor} 0, ${tickColor} 6px, transparent 6px, transparent 14px)`,
            }}
          />
        </div>
      </div>
    </div>
  );
}