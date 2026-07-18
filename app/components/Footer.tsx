import Link from "next/link";
import CircuitLine from "./CircuitLine";
import {
  PowerFusionLogo,
  IconWhatsApp,
  IconLinkedIn,
  IconFacebook,
  IconPhone,
  IconEmail,
  IconLocation,
} from "./icons";

const quickLinks = [
  { label: "Services", href: "#services" },
  { label: "Our Commitment", href: "#commitment" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Contact Us", href: "#contact" },
];

const services = [
  "Electrical Construction",
  "Testing & Diagnostics",
  "Commissioning",
  "Maintenance & Support",
];

const socials = [
  { Icon: IconWhatsApp, label: "WhatsApp", href: "#" },
  { Icon: IconLinkedIn, label: "LinkedIn", href: "#" },
  { Icon: IconFacebook, label: "Facebook", href: "#" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      {/* Closing statement — a real invitation to act, not a fade-out */}
      <div className="relative overflow-hidden" style={{ backgroundColor: "#0b0c0e" }}>
        <div className="absolute -bottom-6 left-0 right-0 opacity-[0.14] pointer-events-none">
          <CircuitLine />
        </div>

        <div className="container mx-auto px-6 lg:px-12 py-16 relative z-10">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            <div className="max-w-xl">
              <div className="flex items-center gap-2 mb-4">
                <span className="w-1.5 h-1.5 rounded-full led-pulse" style={{ backgroundColor: "#99c747" }} />
                <span className="font-mono text-xs uppercase tracking-[0.25em]" style={{ color: "#9aa1ab" }}>
                  Accepting New Projects
                </span>
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-3 leading-tight">
                Ready to power your next project?
              </h3>
              <p className="text-base" style={{ color: "#9aa1ab" }}>
                Tell us the scope, the site, and the timeline — we&rsquo;ll take it
                from there.
              </p>
            </div>
            <a
              href="#contact"
              className="w-full sm:w-auto shrink-0 inline-flex items-center justify-center px-8 py-4 font-bold rounded-sm transition-opacity duration-300 hover:opacity-90"
              style={{ backgroundColor: "#fb9522", color: "#0b0c0e" }}
            >
              Get a Consultation
            </a>
          </div>
        </div>
      </div>

      {/* Sitemap */}
      <div style={{ backgroundColor: "#f5f6f7" }}>
        <div className="container mx-auto px-6 lg:px-12 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-x-8 gap-y-12 mb-12">
            {/* Brand */}
            <div className="lg:col-span-4">
              <Link href="/" className="inline-block mb-6">
                <PowerFusionLogo height={52} />
              </Link>
              <p className="max-w-sm mb-6 leading-relaxed text-sm" style={{ color: "#4b5058" }}>
                The premier partner for electrical construction, safety,
                testing, and commissioning across Sindh — engineered for
                uptime, verified before handover.
              </p>
              <div className="flex gap-3">
                {socials.map(({ Icon, label, href }) => (
                  <a
                    key={label}
                    href={href}
                    className="w-10 h-10 rounded-sm flex items-center justify-center transition-colors duration-300 hover:bg-[#fb9522] hover:text-[#0b0c0e]"
                    style={{ backgroundColor: "#e2e5e9", color: "#131519" }}
                    aria-label={label}
                  >
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="lg:col-span-2">
              <h4
                className="font-mono font-semibold text-xs mb-6 uppercase tracking-[0.2em]"
                style={{ color: "#0b0c0e" }}
              >
                Quick Links
              </h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm transition-colors duration-200 hover:text-[#fb9522]"
                      style={{ color: "#4b5058" }}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div className="lg:col-span-3">
              <h4
                className="font-mono font-semibold text-xs mb-6 uppercase tracking-[0.2em]"
                style={{ color: "#0b0c0e" }}
              >
                Services
              </h4>
              <ul className="space-y-3">
                {services.map((s) => (
                  <li key={s} className="text-sm" style={{ color: "#6b7280" }}>
                    {s}
                  </li>
                ))}
              </ul>
            </div>

            {/* Get in Touch */}
            <div className="lg:col-span-3">
              <h4
                className="font-mono font-semibold text-xs mb-6 uppercase tracking-[0.2em]"
                style={{ color: "#0b0c0e" }}
              >
                Get in Touch
              </h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <IconLocation size={16} className="mt-0.5 shrink-0" style={{ color: "#9aa1ab" }} />
                  <span className="text-sm" style={{ color: "#4b5058" }}>
                    Karachi, Sindh, Pakistan
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <IconPhone size={16} className="shrink-0" style={{ color: "#9aa1ab" }} />
                  <a
                    href="tel:+923433027779"
                    className="text-sm transition-colors duration-200 hover:text-[#fb9522]"
                    style={{ color: "#4b5058" }}
                  >
                    +92 3433027779
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <IconEmail size={16} className="shrink-0" style={{ color: "#9aa1ab" }} />
                  <a
                    href="mailto:powerfusion.nc@gmail.com"
                    className="text-sm transition-colors duration-200 hover:text-[#fb9522] break-all"
                    style={{ color: "#4b5058" }}
                  >
                    powerfusion.nc@gmail.com
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div
            className="pt-8 border-t flex flex-col-reverse sm:flex-row justify-between items-center gap-4"
            style={{ borderColor: "#e2e5e9" }}
          >
            <p className="text-sm" style={{ color: "#6b7280" }}>
              &copy; {currentYear} Power Fusion. All Rights Reserved.
            </p>
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-4 text-xs" style={{ color: "#9aa1ab" }}>
                <a href="#" className="transition-colors duration-200 hover:text-[#0b0c0e] hover:underline">
                  Privacy Policy
                </a>
                <a href="#" className="transition-colors duration-200 hover:text-[#0b0c0e] hover:underline">
                  Terms of Service
                </a>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full led-pulse" style={{ backgroundColor: "#99c747" }} />
                <span
                  className="font-mono text-xs font-semibold tracking-[0.2em] uppercase"
                  style={{ color: "#131519" }}
                >
                  Always On.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}