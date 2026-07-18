"use client";

import { motion } from "framer-motion";
import { IconArrowRight } from "./icons";
import CircuitLine from "./CircuitLine";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.14, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    // brackets ke bahar 'as const' add kar dein
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const } 
  }
};

export default function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex flex-col justify-center pt-28 pb-16 overflow-hidden"
      style={{ backgroundColor: "#fff0c7" }}
    >
      {/* Blueprint drafting grid — engineering-drawing texture, not a decorative dot grid */}
      <div
        className="absolute inset-0 z-0 opacity-[0.08]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(29,148,213,0.7) 1px, transparent 1px), linear-gradient(90deg, rgba(29,148,213,0.7) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />
      {/* Background photo, if supplied by the client */}
      <img
        src="/images/hero-bg.png"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-30"
        onError={(e) => {
          (e.currentTarget as HTMLImageElement).style.display = "none";
        }}
      />
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "linear-gradient(to right, #ffffff 30%, rgba(255, 255, 255, 0.6) 65%, rgba(199, 199, 199, 0.66))",
        }}
      />
      <div
        className="absolute -top-40 right-0 w-[560px] h-[560px] rounded-full z-0 opacity-[0.10] pointer-events-none"
        style={{ background: "radial-gradient(circle, #1d94d5 0%, transparent 70%)" }}
      />

      <div className="container relative z-10 mx-auto px-6 lg:px-12 flex-1 flex flex-col justify-center">
        <motion.div variants={container} initial="hidden" animate="show" className="max-w-3xl">
          <motion.div
            variants={item}
            className="inline-flex items-center gap-2 mb-6 px-3 py-1.5 border rounded-sm"
            style={{ borderColor: "rgba(251,149,34,0.5)" }}
          >
            <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "#99c747" }} />
            <span
              className="font-mono text-xs tracking-[0.2em] uppercase"
              style={{ color: "#fb9522" }}
            >
              Electrical Contractor · Karachi, Sindh
            </span>
          </motion.div>

          <motion.h1
            variants={item}
            className="text-5xl md:text-6xl lg:text-[5.25rem] font-bold text-black/80 leading-[1.03] mb-6"
          >
            Built to carry
            <br />
            the <span style={{ color: "#fb9522" }}>load.</span>
          </motion.h1>

          <motion.p
            variants={item}
            className="text-lg md:text-xl mb-10 max-w-2xl leading-relaxed"
            style={{ color: "#000000d0" }}
          >
            We design, build, test, and maintain the electrical backbone behind
            Sindh&rsquo;s industrial and commercial sites — engineered for uptime,
            verified before handover, supported around the clock.
          </motion.p>

          <motion.div variants={item} className="flex flex-col sm:flex-row gap-4 mb-16 lg:mb-20">
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="animate-soft-glow inline-flex items-center justify-center px-8 py-4 font-bold rounded-sm transition-colors duration-300"
              style={{ backgroundColor: "#fb9522", color: "#0b0c0e" }}
            >
              Get a Consultation
              <IconArrowRight size={20} className="ml-2" />
            </motion.a>
            <motion.a
              href="#portfolio"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center justify-center px-8 py-4 border-2 font-bold rounded-sm transition-colors duration-300 text-[#fb9522] hover:bg-white"
              style={{ borderColor: "#fb952233" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#000000")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#fb9522")}
            >
              View Our Work
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="max-w-5xl"
        >
          <CircuitLine />
        </motion.div>
      </div>
    </section>
  );
}
