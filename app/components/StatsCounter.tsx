"use client";

import { useEffect, useRef, useState } from "react";
import ScrollReveal from "./ScrollReveal";

interface CounterProps {
  end: number;
  suffix?: string;
  label: string;
  duration?: number;
}

function Counter({ end, suffix = "", label, duration = 2000 }: CounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let startTimestamp: number | null = null;
          const step = (timestamp: number) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            setCount(Math.floor(progress * end));
            if (progress < 1) {
              window.requestAnimationFrame(step);
            }
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
  }, [end, duration, hasAnimated]);

  return (
    <div ref={ref} className="text-center p-6 bg-navy-800 rounded-lg border border-navy-700 shadow-xl" style={{ backgroundColor: "#0F2240", borderColor: "#162D50" }}>
      <div className="text-4xl md:text-5xl font-bold text-gold-500 mb-2" style={{ color: "#D4A843" }}>
        {count}{suffix}
      </div>
      <div className="text-gray-300 font-medium text-lg uppercase tracking-wider">{label}</div>
    </div>
  );
}

export default function StatsCounter() {
  return (
    <section className="py-20 bg-navy-900 relative z-20 -mt-10" style={{ backgroundColor: "#0A1628" }}>
      <div className="container mx-auto px-6 lg:px-12">
        <ScrollReveal direction="up">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            <Counter end={200} suffix="+" label="Projects Completed" />
            <Counter end={50} suffix="k+" label="KVA Managed" />
            <Counter end={15} suffix="+" label="Years Experience" />
            <Counter end={100} suffix="%" label="Client Satisfaction" />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
