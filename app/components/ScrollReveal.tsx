"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  delay?: number; // milliseconds, for backward-compatible call sites
  direction?: "up" | "left" | "right" | "none";
  className?: string;
}

const OFFSETS: Record<string, { x: number; y: number }> = {
  up: { y: 26, x: 0 },
  left: { y: 0, x: -26 },
  right: { y: 0, x: 26 },
  none: { y: 0, x: 0 },
};

export default function ScrollReveal({
  children,
  delay = 0,
  direction = "up",
  className = "",
}: ScrollRevealProps) {
  const prefersReducedMotion = useReducedMotion();
  const offset = OFFSETS[direction];

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, x: offset.x, y: offset.y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay: delay / 1000, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}
