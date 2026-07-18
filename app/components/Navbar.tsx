"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { PowerFusionLogo, IconMenu, IconClose } from "./icons";

const navLinks = [
  { name: "Services", href: "#services" },
  { name: "Commitment", href: "#commitment" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white md:bg-transparent"
      style={{

        backdropFilter: isScrolled ? "blur(10px)" : "none",
        borderBottom: isScrolled ? "1px solid rgba(35, 213, 29, 0.2)" : "1px solid transparent",
        paddingTop: isScrolled ? "0.75rem" : "1.25rem",
        paddingBottom: isScrolled ? "0.75rem" : "1.25rem",
      }}
    >
      <div className="container mx-auto px-6 lg:px-12 flex items-center justify-between">
        <Link href="/" className="flex items-center" onClick={() => setIsMobileMenuOpen(false)}>
          <PowerFusionLogo variant="full" height={56} />
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="relative text-black/90 hover:text-white font-medium tracking-wide transition-colors duration-200 text-sm uppercase after:content-[''] after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 hover:after:w-full after:transition-all after:duration-300"
              style={{ letterSpacing: "0.04em" }}
            >
              {link.name}
            </Link>
          ))}
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="font-bold py-2.5 px-6 rounded-sm text-sm uppercase tracking-wide"
            style={{ backgroundColor: "#fb9522", color: "#0b0c0e" }}
          >
            Get a Consultation
          </motion.a>
        </nav>

        <button
          className="md:hidden text-black"
          onClick={() => setIsMobileMenuOpen((v) => !v)}
          aria-label="Toggle mobile menu"
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? <IconClose size={28} /> : <IconMenu size={28} />}
        </button>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden overflow-hidden border-t"
            style={{ backgroundColor: "#ffffff", borderColor: "#ffffff" }}
          >
            <div className="flex flex-col px-6 py-4 gap-1">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 + 0.05 }}
                >
                  <Link
                    href={link.href}
                    className="block text-black text-lg py-3 border-b"
                    style={{ borderColor: "#1d2025" }}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <a
                href="#contact"
                className="text-center font-bold py-3 rounded-sm mt-4 uppercase text-sm tracking-wide"
                style={{ backgroundColor: "#fb9522", color: "#0b0c0e" }}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Get a Consultation
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
