"use client";

import { useState, useEffect } from "react";
import { PowerFusionLogo, IconMenu, IconClose } from "./icons";
import Link from "next/link";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Services", href: "#services" },
    { name: "Commitment", href: "#commitment" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-navy-900/90 backdrop-blur-md shadow-lg py-3"
          : "bg-transparent py-5"
      }`}
      style={{
        backgroundColor: isScrolled ? "rgba(10, 22, 40, 0.9)" : "transparent",
      }}
    >
      <div className="container mx-auto px-6 lg:px-12 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center" onClick={() => setIsMobileMenuOpen(false)}>
          <PowerFusionLogo variant="full" width={160} height={70} className="text-gold-500" />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-white hover:text-gold-500 font-medium tracking-wide transition-colors duration-200"
            >
              {link.name}
            </Link>
          ))}
          <a
            href="#contact"
            className="bg-gold-500 hover:bg-gold-400 text-navy-900 font-bold py-2.5 px-6 rounded transition-colors duration-200 shadow-[0_0_15px_rgba(212,168,67,0.3)] hover:shadow-[0_0_20px_rgba(212,168,67,0.6)]"
            style={{ backgroundColor: "#D4A843", color: "#0A1628" }}
          >
            Get a Consultation
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white hover:text-gold-500"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? <IconClose size={32} /> : <IconMenu size={32} />}
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="md:hidden absolute top-full left-0 w-full bg-navy-900 shadow-xl border-t border-navy-800"
          style={{ backgroundColor: "#0A1628" }}
        >
          <div className="flex flex-col px-6 py-4 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-white hover:text-gold-500 text-lg py-2 border-b border-navy-800"
                style={{ borderColor: "#0F2240" }}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <a
              href="#contact"
              className="bg-gold-500 text-navy-900 text-center font-bold py-3 rounded mt-4"
              style={{ backgroundColor: "#D4A843", color: "#0A1628" }}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Get a Consultation
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
