"use client";

import ScrollReveal from "./ScrollReveal";
import { Icon24Hour, IconWarranty, IconQuality } from "./icons";

const pillars = [
  {
    title: "24-Hour Call-Out",
    description: "Always available. Our rapid response team ensures your electrical systems are restored promptly, day or night.",
    icon: Icon24Hour,
  },
  {
    title: "Warranty on Workmanship",
    description: "We stand by our work. Guaranteed quality and robust warranty protections for total peace of mind.",
    icon: IconWarranty,
  },
  {
    title: "High-Quality Standards",
    description: "Adhering to strict safety protocols and industry best practices on every project we undertake.",
    icon: IconQuality,
  },
];

export default function CommitmentSection() {
  return (
    <section id="commitment" className="py-24 bg-navy-900 text-white relative overflow-hidden" style={{ backgroundColor: "#0A1628" }}>
      {/* Background image — electric sparks */}
      <img
        src="/images/commitment-bg.png"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover opacity-15 pointer-events-none"
      />
      {/* Decorative gold glow */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-5 pointer-events-none"
           style={{
             backgroundImage: "radial-gradient(circle at 70% 50%, #D4A843 0%, transparent 60%)"
           }}>
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <ScrollReveal direction="up">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Commitment</h2>
            <div className="w-24 h-1 bg-gold-500 mx-auto rounded" style={{ backgroundColor: "#D4A843" }}></div>
            <p className="mt-6 text-gray-300 max-w-2xl mx-auto text-lg">
              Built on trust and reliability. We ensure your electrical infrastructure is safe, efficient, and compliant.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {pillars.map((pillar, index) => (
            <ScrollReveal key={pillar.title} direction="up" delay={index * 200}>
              <div className="flex flex-col items-center text-center p-8 bg-navy-800 rounded-xl border border-navy-700 hover:border-gold-500 transition-colors duration-300 group"
                   style={{ backgroundColor: "#0F2240", borderColor: "#162D50" }}>
                <div className="w-20 h-20 bg-navy-700 rounded-full flex items-center justify-center mb-6 text-gold-500 group-hover:scale-110 transition-transform duration-300"
                     style={{ backgroundColor: "#162D50", color: "#D4A843" }}>
                  <pillar.icon size={40} />
                </div>
                <h3 className="text-2xl font-bold mb-4">{pillar.title}</h3>
                <p className="text-gray-400 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
