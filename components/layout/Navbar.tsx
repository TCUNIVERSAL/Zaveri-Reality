"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight, Phone, MessageSquare, Instagram } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import CubeButton from "@/components/ui/CubeButton";
import Logo from "@/components/ui/Logo";
import { companyDetails } from "@/data/services";

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  // Track scroll position for dynamic glass styling
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: "Home", href: "/", isActive: pathname === "/" },
    { label: "Works", href: "/works", isActive: pathname === "/works" || pathname.startsWith("/work") },
    { label: "Studio", href: "/studio", isActive: pathname === "/studio" },
    { label: "Approach", href: "/approach", isActive: pathname === "/approach" },
    { label: "Contact", href: "/contact", isActive: pathname === "/contact" },
  ];

  const isHomepage = pathname === "/";

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${scrolled || !isHomepage
            ? "bg-[#080b12]/90 backdrop-blur-xl border-b border-white/10 shadow-2xl py-3"
            : "bg-gradient-to-b from-black/80 via-black/40 to-transparent py-4"
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 lg:px-8 flex items-center justify-between">
          {/* Brand Logo & Name */}
          <Link
            href="/"
            className="flex items-center gap-3 group py-1 focus:outline-none focus:ring-1 focus:ring-accent rounded-sm"
            aria-label="Zaveri Realty Group — Home"
          >
            <div className="w-8 h-8 flex items-center justify-center text-accent group-hover:scale-105 transition-transform">
              <Logo className="w-full h-full text-accent" size={32} color="#C29B38" />
            </div>
            <div className="flex flex-col">
              <span className="font-serif font-bold text-base sm:text-lg tracking-wider text-white uppercase leading-none">
                Zaveri Realty
              </span>
              <span className="font-mono text-[9px] tracking-[0.25em] text-accent uppercase mt-0.5 font-semibold">
                Group
              </span>
            </div>
          </Link>

          {/* Desktop Center Navigation Links */}
          <nav
            aria-label="Primary Navigation"
            className="hidden lg:flex items-center gap-1 xl:gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 backdrop-blur-md"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative font-mono text-[12px] uppercase tracking-wider font-semibold px-4 py-1.5 rounded-full transition-all duration-200 ${link.isActive
                    ? "text-black bg-accent font-bold shadow-md"
                    : "text-grey-300 hover:text-white hover:bg-white/10"
                  }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop Right CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <CubeButton href="/contact" label="Inquire" ariaLabel="Contact Zaveri Realty Group" />
          </div>

          {/* Mobile Header Hamburger Button */}
          <div className="flex items-center gap-3 lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              className="flex items-center gap-2 px-3 py-2 bg-white/10 hover:bg-white/15 border border-white/15 rounded-sm text-white font-mono text-xs uppercase tracking-wider transition-colors"
            >
              <span>{mobileMenuOpen ? "Close" : "Menu"}</span>
              {mobileMenuOpen ? <X className="w-4 h-4 text-accent" /> : <Menu className="w-4 h-4 text-accent" />}
            </button>
          </div>
        </div>
      </header>

      {/* Full-Screen Animated Mobile Navigation Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-30 bg-[#080b12]/98 backdrop-blur-2xl flex flex-col justify-between pt-24 pb-8 px-6 text-white overflow-y-auto lg:hidden"
          >
            <div className="space-y-6">
              <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-accent font-semibold pb-2 border-b border-white/10">
                Menu & Directory
              </div>

              <nav className="flex flex-col divide-y divide-white/10">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`py-3.5 flex items-center justify-between text-xl font-serif font-bold uppercase tracking-tight ${link.isActive ? "text-accent pl-2" : "text-white"
                      }`}
                  >
                    <span>{link.label}</span>
                    <ArrowUpRight className="w-4 h-4 text-white/40" />
                  </Link>
                ))}
                <Link
                  href="/work/barsana"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`py-3.5 flex items-center justify-between text-lg font-serif ${pathname === "/work/barsana" ? "text-accent pl-2" : "text-grey-300"
                    }`}
                >
                  <span>Barsana (Signature Villas)</span>
                  <ArrowUpRight className="w-4 h-4 text-white/40" />
                </Link>
                <Link
                  href="/work/the-woodland-villa"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`py-3.5 flex items-center justify-between text-lg font-serif ${pathname === "/work/the-woodland-villa" ? "text-accent pl-2" : "text-grey-300"
                    }`}
                >
                  <span>The Woodland Villa (Upcoming)</span>
                  <ArrowUpRight className="w-4 h-4 text-white/40" />
                </Link>
                <Link
                  href="/legal"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`py-3.5 flex items-center justify-between text-sm font-mono uppercase text-grey-400`}
                >
                  <span>Legal & Disclosures</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-white/40" />
                </Link>
              </nav>
            </div>

            {/* Mobile Footer Inquiries & Quick Contact */}
            <div className="pt-6 border-t border-white/10 space-y-4 font-mono text-xs">
              <div className="flex items-center justify-between">
                <span className="text-grey-400">Direct Inquiries:</span>
                <a href={`tel:${companyDetails.phonePrimary}`} className="text-accent font-bold">
                  {companyDetails.phonePrimary}
                </a>
              </div>

              <div className="grid grid-cols-2 gap-3 pt-2">
                <a
                  href={companyDetails.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-3 bg-accent/20 text-accent font-semibold border border-accent/40 rounded-sm"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>WhatsApp</span>
                </a>
                <a
                  href={`tel:${companyDetails.phonePrimary}`}
                  className="flex items-center justify-center gap-2 py-3 bg-white/10 text-white font-semibold border border-white/20 rounded-sm"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call Us</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
