"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu as MenuIcon, X, Phone, Instagram, MessageSquare, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import RollLink from "@/components/ui/RollLink";
import { companyDetails } from "@/data/services";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const triggerButtonRef = useRef<HTMLButtonElement>(null);

  // Close on ESC key and trap focus
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
        triggerButtonRef.current?.focus();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  // Lock body scroll on small screens when drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const pathname = usePathname();

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Works & Portfolio", href: "/works" },
    { label: "Barsana (Signature)", href: "/work/barsana" },
    { label: "The Woodland Villa (Upcoming)", href: "/work/the-woodland-villa" },
    { label: "Royal Palms Estate", href: "/work/royal-palms-estate" },
    { label: "The Oasis Residences", href: "/work/the-oasis-residences" },
    { label: "Vrindavan Greens", href: "/work/vrindavan-greens" },
    { label: "Our Studio", href: "/studio" },
    { label: "Our Approach", href: "/approach" },
    { label: "Contact & Inquiries", href: "/contact" },
  ];

  return (
    <>
      {/* Fixed Floating Bottom-Right Menu Trigger */}
      <div className="fixed bottom-4 lg:bottom-8 right-4 lg:right-8 z-50">
        <div className="relative">
          <div className="absolute inset-0 backdrop-blur-xl bg-black/85 rounded-sm shadow-2xl border border-white/10" />
          <button
            ref={triggerButtonRef}
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-controls="nav-menu"
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            className="relative flex items-center h-11 px-4 text-white font-mono text-[12px] uppercase tracking-widest focus:outline-none focus:ring-2 focus:ring-accent rounded-sm"
          >
            <span className="mr-3 font-semibold">{isOpen ? "Close" : "Menu"}</span>
            <div className="w-5 h-5 flex items-center justify-center">
              {isOpen ? <X className="w-4 h-4 text-white" /> : <MenuIcon className="w-4 h-4 text-white" />}
            </div>
          </button>
        </div>
      </div>

      {/* Expandable Navigation Drawer Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop Dimmer */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
              aria-hidden="true"
            />

            {/* Menu Container */}
            <motion.div
              ref={menuRef}
              id="nav-menu"
              role="dialog"
              aria-modal="true"
              aria-label="Main Navigation Menu"
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="fixed bottom-16 lg:bottom-22 right-4 lg:right-8 w-[calc(100vw-2rem)] sm:w-96 max-h-[85vh] overflow-y-auto bg-black/95 backdrop-blur-2xl border border-white/15 rounded-sm p-6 sm:p-8 text-white z-50 shadow-2xl"
            >
              {/* Menu Header */}
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent">
                  Navigation
                </span>
                <span className="font-mono text-[10px] uppercase text-grey-400">
                  Bhuj, Kutch
                </span>
              </div>

              {/* Main Nav Links */}
              <nav aria-label="Menu Links" className="flex flex-col gap-1.5 mt-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="group flex items-center justify-between py-2 text-base sm:text-lg font-medium text-white/90 hover:text-white transition-colors focus:outline-none focus:ring-1 focus:ring-accent px-1 rounded-sm"
                  >
                    <span>{link.label}</span>
                    <ArrowUpRight className="w-4 h-4 text-white/30 group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </Link>
                ))}
              </nav>

              {/* Direct Inquiries & Contact Lines */}
              <div className="mt-6 pt-6 border-t border-white/10 flex flex-col gap-3 font-mono text-[12px]">
                <div className="text-accent text-[10px] uppercase tracking-widest font-semibold">
                  Direct Inquiries
                </div>

                <div className="flex items-center justify-between text-grey-300">
                  <span>Main Office:</span>
                  <RollLink
                    href={`tel:${companyDetails.phonePrimary}`}
                    className="text-white hover:text-accent font-bold"
                  >
                    {companyDetails.phonePrimary}
                  </RollLink>
                </div>

                <div className="flex items-center justify-between text-grey-300">
                  <span>Bhavy Zaveri:</span>
                  <RollLink
                    href={`tel:${companyDetails.phoneBhavy}`}
                    className="text-white hover:text-accent font-bold"
                  >
                    {companyDetails.phoneBhavy}
                  </RollLink>
                </div>

                <div className="flex items-center justify-between text-grey-300">
                  <span>Rajesh Zaveri:</span>
                  <RollLink
                    href={`tel:${companyDetails.phoneRajesh}`}
                    className="text-white hover:text-accent font-bold"
                  >
                    {companyDetails.phoneRajesh}
                  </RollLink>
                </div>

                <div className="flex items-center justify-between text-grey-300">
                  <span>Email:</span>
                  <RollLink
                    href={`mailto:${companyDetails.email}`}
                    className="text-white hover:text-accent lowercase"
                  >
                    {companyDetails.email}
                  </RollLink>
                </div>

                {/* Social & WhatsApp Buttons */}
                <div className="flex items-center gap-3 pt-3 mt-1">
                  <a
                    href={companyDetails.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-2.5 bg-accent/20 hover:bg-accent/30 text-accent rounded-sm text-[11px] uppercase tracking-wider font-semibold border border-accent/30 transition-colors"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    WhatsApp
                  </a>
                  <a
                    href={companyDetails.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-2.5 bg-white/10 hover:bg-white/20 text-white rounded-sm text-[11px] uppercase tracking-wider font-semibold border border-white/20 transition-colors"
                  >
                    <Instagram className="w-3.5 h-3.5" />
                    Instagram
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
