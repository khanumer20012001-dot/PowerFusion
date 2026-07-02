"use client";

import ScrollReveal from "./ScrollReveal";
import { IconConstruction, IconTesting, IconCommissioning, IconMaintenance } from "./icons";

const services = [
  {
    title: "Electrical Construction",
    description: "End-to-end installation of industrial power panels, wiring systems, and complex electrical infrastructure.",
    icon: IconConstruction,
    tags: ["Industrial", "Commercial"],
    image: "/images/service-construction.png",
  },
  {
    title: "Testing & Diagnostics",
    description: "Comprehensive testing to ensure safety, efficiency, and compliance with high-quality standards.",
    icon: IconTesting,
    tags: ["Safety", "Compliance"],
    image: "/images/service-testing.png",
  },
  {
    title: "Commissioning",
    description: "Systematic commissioning processes to verify that all electrical components operate according to design.",
    icon: IconCommissioning,
    tags: ["Verification", "Handover"],
    image: "/images/service-commissioning.png",
  },
  {
    title: "Maintenance & Support",
    description: "Proactive and reactive maintenance services keeping your operations running smoothly 24/7.",
    icon: IconMaintenance,
    tags: ["24/7 Support", "Reliability"],
    image: "/images/service-maintenance.png",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-gray-100" style={{ backgroundColor: "#F5F5F5" }}>
      <div className="container mx-auto px-6 lg:px-12">
        <ScrollReveal direction="up">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-4" style={{ color: "#0A1628" }}>
              Our Services
            </h2>
            <div className="w-24 h-1 bg-gold-500 mx-auto rounded" style={{ backgroundColor: "#D4A843" }}></div>
            <p className="mt-6 text-gray-600 max-w-2xl mx-auto text-lg">
              Delivering top-tier electrical solutions tailored for industrial, commercial, and residential sectors.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ScrollReveal key={service.title} direction="up" delay={index * 150}>
              <div className="group h-full bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-default">
                {/* Service Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  {/* Icon overlay */}
                  <div className="absolute bottom-4 left-4 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-lg flex items-center justify-center text-navy-900 shadow-lg"
                       style={{ color: "#0A1628" }}>
                    <service.icon size={24} />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-navy-900 mb-3" style={{ color: "#0A1628" }}>{service.title}</h3>
                  <p className="text-gray-600 mb-5 text-sm leading-relaxed">{service.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {service.tags.map(tag => (
                      <span key={tag} className="text-xs font-bold px-3 py-1 rounded-full"
                            style={{ backgroundColor: "#E8C468", color: "#0A1628" }}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
