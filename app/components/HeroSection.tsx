import { IconArrowRight } from "./icons";
import ScrollReveal from "./ScrollReveal";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-navy-900" style={{ backgroundColor: "#0A1628" }}>
      {/* Background Image */}
      <img
        src="/images/hero-bg.png"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-50"
      />
      {/* Fallback gradient behind the image */}
      <div
        className="absolute inset-0 z-0"
        style={{ background: "linear-gradient(to bottom right, #0A1628, #162D50)" }}
      ></div>
      
      {/* Dark gradient overlay for text readability */}
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-navy-900 via-navy-900/80 to-transparent"
           style={{ background: "linear-gradient(to right, #0A1628 20%, rgba(10,22,40,0.7) 60%, transparent)" }}
      ></div>

      {/* Decorative Grid Lines */}
      <div className="absolute inset-0 z-0 opacity-10"
           style={{
             backgroundImage: "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
             backgroundSize: "40px 40px"
           }}
      ></div>

      <div className="container relative z-10 mx-auto px-6 lg:px-12 py-12 lg:py-24">
        <div className="max-w-3xl">
          <ScrollReveal direction="up" delay={100}>
            <div className="inline-block px-3 py-1 mb-6 border border-gold-500 rounded text-gold-500 text-sm font-bold tracking-widest uppercase"
                 style={{ borderColor: "#D4A843", color: "#D4A843" }}
            >
              Power Fusion
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={300}>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-6">
              The Top of <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-gold-600"
                    style={{ backgroundImage: "linear-gradient(to right, #E8C468, #B8922F)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}
              >
                The Heap.
              </span>
            </h1>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={500}>
            <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl leading-relaxed">
              Your trusted partner in electrical construction, safety, and security solutions in Sindh. Delivering industrial excellence, always on.
            </p>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={700}>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-gold-500 text-navy-900 font-bold rounded hover:bg-gold-400 transition-colors duration-300 animate-pulse-glow"
                style={{ backgroundColor: "#D4A843", color: "#0A1628" }}
              >
                Get a Consultation
                <IconArrowRight size={20} className="ml-2" />
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-bold rounded hover:bg-white hover:text-navy-900 transition-colors duration-300"
              >
                Explore Services
              </a>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
