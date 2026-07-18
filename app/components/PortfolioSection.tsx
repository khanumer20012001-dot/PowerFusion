"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

const categories = ["All", "Industrial", "Commercial", "Educational"];

const projects = [
  {
    id: "PRJ-01",
    client: "Fast University",
    category: "Educational",
    type: "Full Campus Wiring & Panels",
    image: "/images/portfolio-university.png",
  },
  {
    id: "PRJ-02",
    client: "Dawlance",
    category: "Industrial",
    type: "Heavy Machinery Power Grid",
    image: "/images/portfolio-factory.png",
  },
  {
    id: "PRJ-03",
    client: "Korangi Industrial Park",
    category: "Industrial",
    type: "Main Transformer Installation",
    image: "/images/portfolio-industrial.png",
  },
  {
    id: "PRJ-04",
    client: "Corporate Towers",
    category: "Commercial",
    type: "Complete Electrical Maintenance",
    image: "/images/portfolio-commercial.png",
  },
  {
    id: "PRJ-05",
    client: "Sindh Govt Facilities",
    category: "Commercial",
    type: "Safety & Testing Compliance",
    image: "/images/portfolio-govt.png",
  },
  {
    id: "PRJ-06",
    client: "Textile Mills",
    category: "Industrial",
    type: "24/7 Support & Commissioning",
    image: "/images/portfolio-textile.png",
  },
];

export default function PortfolioSection() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects =
    activeFilter === "All" ? projects : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="portfolio" className="py-24 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        <ScrollReveal direction="up">
          <div className="mb-12 max-w-2xl">
            <span className="font-mono text-xs uppercase tracking-[0.25em]" style={{ color: "#1d94d5" }}>
              Site Log
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-4" style={{ color: "#0b0c0e" }}>
              Trusted By
            </h2>
            <p className="text-lg" style={{ color: "#4b5058" }}>
              A sample of the clients and major projects we&rsquo;ve powered across
              Sindh.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={150}>
          <div className="flex flex-wrap gap-3 mb-12">
            {categories.map((category) => {
              const active = activeFilter === category;
              return (
                <motion.button
                  key={category}
                  onClick={() => setActiveFilter(category)}
                  whileTap={{ scale: 0.96 }}
                  className="px-5 py-2 rounded-sm font-semibold text-sm uppercase tracking-wide transition-colors duration-300"
                  style={
                    active
                      ? { backgroundColor: "#0b0c0e", color: "#ffffff" }
                      : { backgroundColor: "#f0f1f3", color: "#4b5058" }
                  }
                >
                  {category}
                </motion.button>
              );
            })}
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <ScrollReveal key={project.id} direction="up" delay={index * 90}>
              <div className="group relative overflow-hidden rounded-sm h-72 cursor-pointer">
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(135deg, #131519 0%, #1d2025 60%, #0b0c0e 100%)",
                  }}
                />
                <img
                  src={project.image}
                  alt={`${project.client} — ${project.type}`}
                  className="absolute inset-0 w-full h-full object-cover opacity-70 transition-transform duration-500 group-hover:scale-110"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).style.display = "none";
                  }}
                />
                <div
                  className="absolute inset-0 opacity-80 group-hover:opacity-95 transition-opacity duration-300"
                  style={{
                    backgroundImage:
                      "linear-gradient(to top, #0b0c0e, rgba(11,12,14,0.55), transparent)",
                  }}
                />
                <div className="absolute top-4 left-4">
                  <span
                    className="font-mono text-[10px] tracking-[0.15em] px-2 py-1 rounded-sm"
                    style={{ backgroundColor: "rgba(11,12,14,0.6)", color: "#9aa1ab" }}
                  >
                    {project.id}
                  </span>
                </div>
                <div className="absolute inset-0 p-6 flex flex-col justify-end translate-y-3 group-hover:translate-y-0 transition-transform duration-300">
                  <span
                    className="font-semibold text-xs uppercase tracking-wider mb-2"
                    style={{ color: "#fb9522" }}
                  >
                    {project.category}
                  </span>
                  <h3 className="text-2xl font-bold text-white mb-1">{project.client}</h3>
                  <p
                    className="text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100"
                    style={{ color: "#c3c8cf" }}
                  >
                    {project.type}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
