import Link from "next/link";
import {
  PowerFusionLogo,
  IconWhatsApp,
  IconLinkedIn,
  IconFacebook,
} from "./icons";

const socials = [
  { Icon: IconWhatsApp, label: "WhatsApp", href: "#" },
  { Icon: IconLinkedIn, label: "LinkedIn", href: "#" },
  { Icon: IconFacebook, label: "Facebook", href: "#" },
];

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

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="relative pt-16 pb-8"
      style={{ backgroundColor: "#f0f1f3" }}
    >
      {/* Brand Accent Line */}
      <div
        className="absolute top-0 left-0 w-full h-[3px]"
        style={{
          background:
            "linear-gradient(90deg,#1d94d5 0%,#fb9522 100%)",
        }}
      />

      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Logo */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-6">
              <PowerFusionLogo variant="full" height={64} />
            </Link>

            <p
              className="max-w-md mb-6 leading-relaxed"
              style={{ color: "#4b5058" }}
            >
              Power Fusion is the premier partner for electrical
              construction, safety, testing, and commissioning across
              Sindh — engineered for uptime, verified before handover.
            </p>

            <div className="flex gap-3">
              {socials.map(({ Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-10 h-10 rounded-sm flex items-center justify-center transition-all duration-300 hover:bg-[#fb9522] hover:text-[#0b0c0e]"
                  style={{
                    backgroundColor: "#ffffff",
                    color: "#0b0c0e",
                    border: "1px solid #e2e5e9",
                  }}
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <span
                className="w-2 h-2 shrink-0"
                style={{ backgroundColor: "#1d94d5" }}
              />
              <h4
                className="font-mono font-semibold text-xs uppercase tracking-[0.2em]"
                style={{ color: "#0b0c0e" }}
              >
                Quick Links
              </h4>
            </div>

            <ul className="space-y-3">
              {quickLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="transition-colors duration-200 hover:text-[#1d94d5]"
                    style={{ color: "#4b5058" }}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <span
                className="w-2 h-2 shrink-0"
                style={{ backgroundColor: "#fb9522" }}
              />
              <h4
                className="font-mono font-semibold text-xs uppercase tracking-[0.2em]"
                style={{ color: "#0b0c0e" }}
              >
                Services
              </h4>
            </div>

            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service} style={{ color: "#6b7280" }}>
                  {service}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div
          className="pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-4"
          style={{ borderColor: "#e2e5e9" }}
        >
          <p className="text-sm" style={{ color: "#6b7280" }}>
            &copy; {currentYear} Power Fusion. All Rights Reserved.
          </p>

          <div className="flex items-center gap-2">
            <span
              className="w-1.5 h-1.5 rounded-full led-pulse"
              style={{ backgroundColor: "#99c747" }}
            />
            <span
              className="font-mono text-xs font-semibold tracking-[0.2em] uppercase"
              style={{ color: "#131519" }}
            >
              Always On.
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}