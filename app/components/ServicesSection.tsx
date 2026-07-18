"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "./ScrollReveal";
import { IconConstruction, IconTesting, IconCommissioning, IconMaintenance, IconPlus } from "./icons";

const services = [
  {
    code: "CKT-01",
    title: "Electrical Construction",
    description:
      "End-to-end installation of power panels, cable routing, and distribution infrastructure, built to load.",
    icon: IconConstruction,
    tags: ["Industrial", "Commercial"],
    scope: [
      "LV & MV panel installation",
      "Cable tray, conduit & containment",
      "Load-bank and busbar sizing",
    ],
  },
  {
    code: "CKT-02",
    title: "Testing & Diagnostics",
    description:
      "Insulation resistance, load, and continuity testing to confirm every circuit performs to spec before it's trusted with live load.",
    icon: IconTesting,
    tags: ["Safety", "Compliance"],
    scope: [
      "Insulation resistance (IR) testing",
      "Thermal imaging & load analysis",
      "Earthing & bonding verification",
    ],
  },
  {
    code: "CKT-03",
    title: "Commissioning",
    description:
      "Systematic sign-off that confirms every component performs against design intent before handover.",
    icon: IconCommissioning,
    tags: ["Verification", "Handover"],
    scope: [
      "Functional & performance testing",
      "Protection relay coordination",
      "As-built documentation & sign-off",
    ],
  },
  {
    code: "CKT-04",
    title: "Maintenance & Support",
    description:
      "Scheduled and reactive maintenance that keeps your operation running — with a 24-hour call-out on standby.",
    icon: IconMaintenance,
    tags: ["24/7 Support", "Reliability"],
    scope: [
      "Preventive maintenance schedules",
      "24-hour emergency call-out",
      "Panel & switchgear servicing",
    ],
  },
];

export default function ServicesSection() {
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        <ScrollReveal direction="up">
          <div className="mb-16 max-w-2xl">
            <span
              className="font-mono text-xs uppercase tracking-[0.25em]"
              style={{ color: "#1d94d5" }}
            >
              Panel Schedule
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-4" style={{ color: "#0b0c0e" }}>
              Our Services
            </h2>
            <p className="text-lg" style={{ color: "#4b5058" }}>
              Four disciplines, one accountable contractor — from first cable pull
              to the 2am call-out. Select a circuit to see its full scope.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {services.map((service, index) => {
            const isOpen = expanded === service.code;
            return (
              <ScrollReveal key={service.code} direction="up" delay={index * 100}>
                <motion.div
                  layout
                  className="border rounded-sm overflow-hidden cursor-pointer bg-white"
                  style={{ borderColor: isOpen ? "#1d94d5" : "#e2e5e9" }}
                  onClick={() => setExpanded(isOpen ? null : service.code)}
                >
                  <div className="flex items-start gap-5 p-6">
                    <div
                      className="w-14 h-14 shrink-0 rounded-sm flex items-center justify-center"
                      style={{ backgroundColor: "#f0f1f3", color: "#1d94d5" }}
                    >
                      <service.icon size={26} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-3">
                        <span
                          className="font-mono text-[11px] tracking-[0.15em]"
                          style={{ color: "#9aa1ab" }}
                        >
                          {service.code}
                        </span>
                        <motion.span
                          animate={{ rotate: isOpen ? 45 : 0 }}
                          transition={{ duration: 0.25 }}
                          className="shrink-0"
                          style={{ color: "#1d94d5" }}
                        >
                          <IconPlus size={18} />
                        </motion.span>
                      </div>
                      <h3 className="text-xl font-bold mt-1 mb-2" style={{ color: "#0b0c0e" }}>
                        {service.title}
                      </h3>
                      <p className="text-sm leading-relaxed mb-4" style={{ color: "#4b5058" }}>
                        {service.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {service.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-[11px] font-semibold px-2.5 py-1 rounded-sm uppercase tracking-wide"
                            style={{ backgroundColor: "#f0f1f3", color: "#131519" }}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <div
                          className="px-6 pb-6 pt-2 ml-[4.75rem] border-t"
                          style={{ borderColor: "#e2e5e9" }}
                        >
                          <span
                            className="font-mono text-[10px] uppercase tracking-[0.25em] block mb-3 mt-3"
                            style={{ color: "#9aa1ab" }}
                          >
                            Scope of Work
                          </span>
                          <ul className="space-y-2">
                            {service.scope.map((item) => (
                              <li key={item} className="flex items-start gap-2 text-sm" style={{ color: "#2b2f36" }}>
                                <span
                                  className="w-1 h-1 rounded-full mt-2 shrink-0"
                                  style={{ backgroundColor: "#fb9522" }}
                                />
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
