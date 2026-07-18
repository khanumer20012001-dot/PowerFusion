"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

interface ReadoutProps {
  end: number;
  suffix?: string;
  label: string;
  duration?: number;
  index: number;
  accent: string;
}

function Readout({ end, suffix = "", label, duration = 1800, index, accent }: ReadoutProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      setCount(end);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let start: number | null = null;
          const step = (ts: number) => {
            if (!start) start = ts;
            const progress = Math.min((ts - start) / duration, 1);
            setCount(Math.floor(progress * end));
            if (progress < 1) window.requestAnimationFrame(step);
          };
          window.requestAnimationFrame(step);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [end, duration, hasAnimated, prefersReducedMotion]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="flex-1 p-6 lg:p-8"
    >
      <div className="stat-value text-4xl lg:text-5xl font-semibold mb-2" style={{ color: "#0b0c0e" }}>
        {count}
        {suffix}
      </div>
      <div className="text-sm uppercase tracking-wider mb-4" style={{ color: "#6b7280" }}>
        {label}
      </div>
      <div className="h-[3px] w-10" style={{ backgroundColor: accent }} />
    </motion.div>
  );
}

/**
 * Presented as a single bordered "status ledger" strip rather than
 * separate cards — a dashboard readout, not four repeated tiles.
 */
export default function StatsCounter() {
  return (
    <section className="relative z-20 py-20 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex items-center gap-3 mb-10">
          <span className="w-2.5 h-2.5 shrink-0" style={{ backgroundColor: "#1d94d5" }} />
          <span
            className="font-mono text-xs uppercase tracking-[0.25em] font-semibold"
            style={{ color: "#131519" }}
          >
            System Status
          </span>
          <div className="flex-1 h-px" style={{ backgroundColor: "#e2e5e9" }} />
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full led-pulse" style={{ backgroundColor: "#99c747" }} />
            <span className="font-mono text-[10px] uppercase tracking-[0.2em]" style={{ color: "#9aa1ab" }}>
              Live
            </span>
          </div>
        </div>

        <div className="rounded-sm border" style={{ borderColor: "#e2e5e9" }}>
          <div className="flex flex-col sm:flex-row divide-y sm:divide-y-0 sm:divide-x divide-neutral-200">
            <Readout index={0} end={200} suffix="+" label="Projects Completed" accent="#1d94d5" />
            <Readout index={1} end={50} suffix="k+" label="KVA Managed" accent="#fb9522" />
            <Readout index={2} end={15} suffix="+" label="Years Experience" accent="#99c747" />
            <Readout index={3} end={100} suffix="%" label="Client Satisfaction" accent="#1d94d5" />
          </div>
        </div>
      </div>
    </section>
  );
}