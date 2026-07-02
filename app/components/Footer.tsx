import Link from "next/link";
import { PowerFusionLogo, IconWhatsApp, IconLinkedIn, IconFacebook } from "./icons";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy-900 text-gray-300 border-t-4 border-gold-500 pt-16 pb-8" style={{ backgroundColor: "#0A1628", borderTopColor: "#D4A843" }}>
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand Info */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-6">
              <PowerFusionLogo variant="full" width={180} height={80} />
            </Link>
            <p className="max-w-md text-gray-400 mb-6 leading-relaxed">
              Power Fusion is the premier partner for electrical construction, safety, testing, and commissioning in Sindh. We bring power, safety, and reliability to the top of the heap.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-navy-800 flex items-center justify-center text-white hover:bg-gold-500 hover:text-navy-900 transition-colors duration-300" style={{ backgroundColor: "#0F2240" }} aria-label="WhatsApp">
                <IconWhatsApp size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-navy-800 flex items-center justify-center text-white hover:bg-gold-500 hover:text-navy-900 transition-colors duration-300" style={{ backgroundColor: "#0F2240" }} aria-label="LinkedIn">
                <IconLinkedIn size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-navy-800 flex items-center justify-center text-white hover:bg-gold-500 hover:text-navy-900 transition-colors duration-300" style={{ backgroundColor: "#0F2240" }} aria-label="Facebook">
                <IconFacebook size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6 uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link href="#services" className="hover:text-gold-500 transition-colors">Services</Link></li>
              <li><Link href="#commitment" className="hover:text-gold-500 transition-colors">Our Commitment</Link></li>
              <li><Link href="#portfolio" className="hover:text-gold-500 transition-colors">Portfolio</Link></li>
              <li><Link href="#contact" className="hover:text-gold-500 transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6 uppercase tracking-wider">Services</h4>
            <ul className="space-y-3">
              <li className="text-gray-400">Electrical Construction</li>
              <li className="text-gray-400">Testing & Diagnostics</li>
              <li className="text-gray-400">System Commissioning</li>
              <li className="text-gray-400">Industrial Maintenance</li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-navy-800 flex flex-col md:flex-row justify-between items-center" style={{ borderColor: "#0F2240" }}>
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {currentYear} Power Fusion. All Rights Reserved.
          </p>
          <div className="flex space-x-6 text-sm text-gray-500">
            <span className="font-bold text-gold-500 tracking-widest uppercase" style={{ color: "#D4A843" }}>Always On.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
