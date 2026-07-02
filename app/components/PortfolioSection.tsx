"use client";

import { useState } from "react";
import ScrollReveal from "./ScrollReveal";

const categories = ["All", "Industrial", "Commercial", "Educational"];

const projects = [
  {
    id: 1,
    client: "Fast University",
    category: "Educational",
    type: "Full Campus Wiring & Panels",
    image: "/images/portfolio-university.png",
  },
  {
    id: 2,
    client: "Dawlance",
    category: "Industrial",
    type: "Heavy Machinery Power Grid",
    image: "/images/portfolio-factory.png",
  },
  {
    id: 3,
    client: "Korangi Industrial Park",
    category: "Industrial",
    type: "Main Transformer Installation",
    image: "/images/portfolio-industrial.png",
  },
  {
    id: 4,
    client: "Corporate Towers",
    category: "Commercial",
    type: "Complete Electrical Maintenance",
    image: "/images/portfolio-commercial.png",
  },
  {
    id: 5,
    client: "Sindh Govt Facilities",
    category: "Commercial",
    type: "Safety & Testing Compliance",
    image: "/images/portfolio-govt.png",
  },
  {
    id: 6,
    client: "Textile Mills",
    category: "Industrial",
    type: "24/7 Support & Commissioning",
    image: "/images/portfolio-textile.png",
  },
];

export default function PortfolioSection() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="portfolio" className="py-24 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        <ScrollReveal direction="up">
          <div className="text-center mb-12">
            <h2
              className="text-4xl md:text-5xl font-bold text-navy-900 mb-4"
              style={{ color: "#0A1628" }}
            >
              Trusted By
            </h2>
            <div
              className="w-24 h-1 bg-gold-500 mx-auto rounded"
              style={{ backgroundColor: "#D4A843" }}
            ></div>
            <p className="mt-6 text-gray-600 max-w-2xl mx-auto text-lg">
              Showcasing some of our key clients and major projects across
              Sindh.
            </p>
          </div>
        </ScrollReveal>

        {/* Filters */}
        <ScrollReveal direction="up" delay={200}>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-6 py-2 rounded-full font-bold transition-colors duration-300 ${
                  activeFilter === category
                    ? "bg-navy-900 text-white shadow-lg"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
                style={
                  activeFilter === category
                    ? { backgroundColor: "#0A1628" }
                    : {}
                }
              >
                {category}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <ScrollReveal key={project.id} direction="up" delay={index * 100}>
              <div className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 h-72 cursor-pointer">
                {/* Project Image */}
                <img
                  src={project.image}
                  alt={`${project.client} — ${project.type}`}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Overlay */}
                <div
                  className="absolute inset-0 bg-gradient-to-t from-navy-900 via-navy-900/50 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300"
                  style={{
                    backgroundImage:
                      "linear-gradient(to top, #0A1628, rgba(10,22,40,0.5), transparent)",
                  }}
                ></div>

                {/* Content */}
                <div className="absolute inset-0 p-6 flex flex-col justify-end translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <span
                    className="text-gold-500 font-bold text-sm uppercase tracking-wider mb-2"
                    style={{ color: "#D4A843" }}
                  >
                    {project.category}
                  </span>
                  <h3 className="text-2xl font-bold text-white mb-1">
                    {project.client}
                  </h3>
                  <p className="text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
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
