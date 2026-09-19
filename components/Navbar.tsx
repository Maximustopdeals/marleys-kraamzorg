"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Over mij", href: "/over-mij/" },
  { label: "Kraamzorg", href: "/kraamzorg/" },
  { label: "Reviews", href: "/reviews/" },
  { label: "Werkgebied", href: "/werkgebied/" },
  { label: "Contact", href: "/contact/" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-[900] bg-white/95 backdrop-blur-xl shadow-[0_1px_0_rgba(74,26,61,0.08)]">
        <div className="max-w-[1440px] mx-auto flex items-center justify-between h-[72px] px-4 md:px-6 lg:px-8">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 z-10 relative h-10 md:h-12 w-[120px] md:w-[145px]">
            <Image
              src="/images/logo.webp"
              alt="Marley's Kraamzorg"
              fill
              priority
              className="object-contain"
              sizes="145px"
            />
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`font-cinzel text-sm uppercase tracking-[0.04em] transition-colors duration-150 ${
                  isActive(link.href)
                    ? "text-primary"
                    : "text-berry-dark"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <a
            href="https://marleyskraamzorg.mijngeboortezorg.nl/Aanvragen/kraamzorg?mode=frame"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center justify-center font-cinzel uppercase tracking-[0.06em] text-xs rounded-full transition-all duration-300 h-11 px-6 bg-primary text-cream shadow-glow hover:bg-primary-hover hover:shadow-glow-hover hover:-translate-y-0.5"
          >
            Meld je aan
          </a>

          {/* Hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden relative z-10 w-12 h-12 flex items-center justify-center"
            aria-label={mobileOpen ? "Sluit menu" : "Open menu"}
          >
            <div className="relative w-6 h-4">
              <span
                className={`absolute left-0 w-6 h-0.5 bg-berry-dark transition-all duration-300 ${mobileOpen ? "top-1/2 -translate-y-1/2 rotate-45" : "top-0"}`}
              />
              <span
                className={`absolute left-0 w-6 h-0.5 bg-berry-dark transition-all duration-300 ${mobileOpen ? "top-1/2 -translate-y-1/2 -rotate-45" : "bottom-0"}`}
              />
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-[850] bg-[#F5EDE3] transition-transform duration-400 md:hidden ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          onClick={() => setMobileOpen(false)}
          className="absolute top-4 right-4 w-12 h-12 flex items-center justify-center z-10"
          aria-label="Sluit menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#4A1A3D" strokeWidth="2" strokeLinecap="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        <div className="flex flex-col items-center justify-center h-full gap-8 px-8">
          <Link href="/" onClick={() => setMobileOpen(false)} className="mb-4 relative h-14 w-[160px]">
            <Image src="/images/logo.webp" alt="Marley's Kraamzorg" fill className="object-contain" sizes="160px" />
          </Link>

          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className={`font-cinzel text-2xl uppercase tracking-wider transition-colors duration-150 ${
                isActive(link.href) ? "text-primary" : "text-berry-dark"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="https://marleyskraamzorg.mijngeboortezorg.nl/Aanvragen/kraamzorg?mode=frame"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary mt-8 w-full max-w-xs"
          >
            Meld je aan
          </a>
        </div>
      </div>
    </>
  );
}
