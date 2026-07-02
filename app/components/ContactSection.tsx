import { IconPhone, IconEmail, IconLocation } from "./icons";
import ScrollReveal from "./ScrollReveal";

export default function ContactSection() {
  return (
    <section id="contact" className="py-24 bg-gray-100 relative" style={{ backgroundColor: "#F5F5F5" }}>
      <div className="container mx-auto px-6 lg:px-12">
        <ScrollReveal direction="up">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-4" style={{ color: "#0A1628" }}>
              Get In Touch
            </h2>
            <div className="w-24 h-1 bg-gold-500 mx-auto rounded" style={{ backgroundColor: "#D4A843" }}></div>
            <p className="mt-6 text-gray-600 max-w-2xl mx-auto text-lg">
              Ready to start your next electrical project? Contact our leadership team directly for a consultation.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Details */}
          <div className="space-y-8">
            <ScrollReveal direction="left" delay={100}>
              <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-gold-500" style={{ borderLeftColor: "#D4A843" }}>
                <h3 className="text-2xl font-bold text-navy-900 mb-2" style={{ color: "#0A1628" }}>Ali Mohsin Lodhi</h3>
                <p className="text-gold-500 font-bold uppercase tracking-wider text-sm mb-6" style={{ color: "#D4A843" }}>Director</p>
                <ul className="space-y-4">
                  <li className="flex items-center text-gray-700">
                    <div className="w-10 h-10 bg-navy-100 rounded-full flex items-center justify-center text-navy-900 mr-4" style={{ backgroundColor: "#E5E5E5", color: "#0A1628" }}>
                      <IconPhone size={20} />
                    </div>
                    <a href="tel:+923000000000" className="hover:text-gold-500 font-medium text-lg">+92 300 0000000</a>
                  </li>
                  <li className="flex items-center text-gray-700">
                    <div className="w-10 h-10 bg-navy-100 rounded-full flex items-center justify-center text-navy-900 mr-4" style={{ backgroundColor: "#E5E5E5", color: "#0A1628" }}>
                      <IconEmail size={20} />
                    </div>
                    <a href="mailto:powerfusion.nc@gmail.com" className="hover:text-gold-500 font-medium text-lg break-all">powerfusion.nc@gmail.com</a>
                  </li>
                </ul>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="left" delay={300}>
              <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-gold-500" style={{ borderLeftColor: "#D4A843" }}>
                <h3 className="text-2xl font-bold text-navy-900 mb-2" style={{ color: "#0A1628" }}>Umair Ashfaque</h3>
                <p className="text-gold-500 font-bold uppercase tracking-wider text-sm mb-6" style={{ color: "#D4A843" }}>Manager</p>
                <ul className="space-y-4">
                  <li className="flex items-center text-gray-700">
                    <div className="w-10 h-10 bg-navy-100 rounded-full flex items-center justify-center text-navy-900 mr-4" style={{ backgroundColor: "#E5E5E5", color: "#0A1628" }}>
                      <IconPhone size={20} />
                    </div>
                    <a href="tel:+923000000000" className="hover:text-gold-500 font-medium text-lg">+92 300 0000000</a>
                  </li>
                  <li className="flex items-center text-gray-700">
                    <div className="w-10 h-10 bg-navy-100 rounded-full flex items-center justify-center text-navy-900 mr-4" style={{ backgroundColor: "#E5E5E5", color: "#0A1628" }}>
                      <IconLocation size={20} />
                    </div>
                    <span className="font-medium text-lg">Karachi, Sindh, Pakistan</span>
                  </li>
                </ul>
              </div>
            </ScrollReveal>
          </div>

          {/* Map / Image Placeholder */}
          <ScrollReveal direction="right" delay={200} className="h-full">
            <div className="bg-navy-900 rounded-xl overflow-hidden shadow-2xl h-full min-h-[400px] flex flex-col justify-center items-center p-12 text-center border border-navy-800" style={{ backgroundColor: "#0A1628", borderColor: "#0F2240" }}>
              <div className="w-24 h-24 rounded-full bg-navy-800 flex items-center justify-center text-gold-500 mb-8 border-2 border-gold-500/30 shadow-[0_0_30px_rgba(212,168,67,0.2)]" style={{ backgroundColor: "#0F2240", color: "#D4A843" }}>
                <IconLocation size={40} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Visit Our Headquarters</h3>
              <p className="text-gray-400 mb-8 text-lg">
                Operating out of Karachi, we serve industrial and commercial clients across the entire Sindh region.
              </p>
              <a
                href="mailto:powerfusion.nc@gmail.com"
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-gold-500 text-navy-900 font-bold rounded hover:bg-gold-400 transition-colors duration-300"
                style={{ backgroundColor: "#D4A843", color: "#0A1628" }}
              >
                Send us an Email
              </a>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
