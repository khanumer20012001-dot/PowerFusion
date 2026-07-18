"use client";

import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";
import { Icon24Hour, IconWarranty, IconQuality } from "./icons";

const pillars = [
  {
    title: "24-Hour Call-Out",
    spec: "RESPONSE TIME · < 60 MIN",
    tag: "ALWAYS ON",
    description:
      "Always available. Our rapid-response team restores your electrical systems promptly, day or night.",
    icon: Icon24Hour,
    accent: "#1d94d5",
  },
  {
    title: "Warranty on Workmanship",
    spec: "COVERAGE · WORKMANSHIP & PARTS",
    tag: "GUARANTEED",
    description:
      "We stand by our work. Guaranteed quality and robust warranty protections for total peace of mind.",
    icon: IconWarranty,
    accent: "#fb9522",
  },
  {
    title: "High-Quality Standards",
    spec: "STATUS · PASS / COMPLIANT",
    tag: "CERTIFIED",
    description:
      "Strict safety protocols and industry best practice on every job, from first cable pull to final sign-off.",
    icon: IconQuality,
    accent: "#99c747",
  },
];

function hexToRgba(hex: string, alpha: number) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

export default function CommitmentSection() {
  return (
    <section
      id="commitment"
      className="py-24 relative overflow-hidden"
      style={{ backgroundColor: "#f8f8f9" }}
    >
      {/* Blueprint drafting grid — light-theme echo of the hero */}
      <div
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(#1d94d5 1px, transparent 1px), linear-gradient(90deg, #1d94d5 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />
      {/* soft dual-color glow for depth, not flat white */}
      <div
        className="absolute -top-24 -right-24 w-[420px] h-[420px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(29,148,213,0.10) 0%, transparent 70%)" }}
      />
      <div
        className="absolute -bottom-32 -left-24 w-[380px] h-[380px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(251,149,34,0.08) 0%, transparent 70%)" }}
      />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <ScrollReveal direction="up">
          <div className="mb-16 max-w-2xl">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2.5 h-2.5" style={{ backgroundColor: "#fb9522" }} />
              <span
                className="font-mono text-xs uppercase tracking-[0.25em] font-semibold"
                style={{ color: "#131519" }}
              >
                Rated &amp; Certified
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: "#0b0c0e" }}>
              Our Commitment
            </h2>
            <p className="text-lg" style={{ color: "#4b5058" }}>
              Every job we take on carries the same three guarantees — stamped,
              not implied.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <ScrollReveal key={pillar.title} direction="up" delay={index * 150}>
              <motion.div
                whileHover={{
                  y: -6,
                  boxShadow: `0 4px 6px rgba(11,12,14,0.05), 0 24px 40px ${hexToRgba(pillar.accent, 0.18)}`,
                }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="group relative h-full bg-white rounded-sm border overflow-hidden"
                style={{
                  borderColor: "#e2e5e9",
                  boxShadow: "0 1px 3px rgba(11,12,14,0.06), 0 8px 24px rgba(11,12,14,0.04)",
                }}
              >
                {/* accent bar */}
                <div
                  className="h-1 w-full"
                  style={{
                    background: `linear-gradient(90deg, ${pillar.accent}, ${hexToRgba(pillar.accent, 0.15)})`,
                  }}
                />

                {/* corner rivets — rating-plate detail */}
                {[
                  "top-1 left-1",
                  "top-1 right-1",
                  "bottom-1 left-1",
                  "bottom-1 right-1",
                ].map((pos, i) => (
                  <span
                    key={i}
                    className={`absolute ${pos} w-2 h-2 rounded-full border`}
                    style={{
                      background: "radial-gradient(circle at 35% 35%, #ffffff, #c3c8cf 70%, #9aa1ab 100%)",
                      borderColor: "#e2e5e9",
                    }}
                  />
                ))}

                {/* ghost watermark icon — depth without a photo */}
                <div
                  className="absolute -bottom-4 -right-4 opacity-[0.05] pointer-events-none transition-opacity duration-300 group-hover:opacity-[0.10]"
                  style={{ color: pillar.accent }}
                >
                  <pillar.icon size={120} />
                </div>

                <div className="relative p-8 flex flex-col h-full">
                  <div className="flex items-center justify-between gap-3 mb-6">
                    <motion.div
                      whileHover={{ scale: 1.08 }}
                      transition={{ duration: 0.25 }}
                      className="w-14 h-14 rounded-sm flex items-center justify-center shrink-0"
                      style={{ backgroundColor: hexToRgba(pillar.accent, 0.1), color: pillar.accent }}
                    >
                      <pillar.icon size={28} />
                    </motion.div>
                    <span
                      className="font-mono text-[10px] font-semibold uppercase tracking-[0.15em] px-2.5 py-1 rounded-full whitespace-nowrap"
                      style={{ backgroundColor: hexToRgba(pillar.accent, 0.1), color: pillar.accent }}
                    >
                      {pillar.tag}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold mb-2" style={{ color: "#0b0c0e" }}>
                    {pillar.title}
                  </h3>
                  <p className="text-sm leading-relaxed mb-6" style={{ color: "#4b5058" }}>
                    {pillar.description}
                  </p>

                  <div
                    className="mt-auto flex items-center justify-between gap-3 px-4 py-3 rounded-sm"
                    style={{
                      backgroundColor: "#f8f8f9",
                      boxShadow: "inset 0 1px 2px rgba(11,12,14,0.05)",
                    }}
                  >
                    <span className="font-mono text-[10px] tracking-[0.1em]" style={{ color: "#6b7280" }}>
                      {pillar.spec}
                    </span>
                    <span
                      className="w-1.5 h-1.5 rounded-full shrink-0"
                      style={{ backgroundColor: pillar.accent }}
                    />
                  </div>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}