"use client";

import Link from "next/link";
import RollLink from "@/components/ui/RollLink";
import Logo from "@/components/ui/Logo";
import { companyDetails } from "@/data/services";
import { ArrowUpRight, Instagram, Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-[#0d0f12] text-white z-10 border-t border-white/10 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        {/* Upper Footer: Brand Manifesto & Navigation Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-16 border-b border-white/10">
          {/* Brand Column */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 flex items-center justify-center text-accent">
                  <Logo className="w-full h-full text-accent" size={38} color="#C29B38" />
                </div>
                <div className="flex flex-col">
                  <span className="font-serif font-bold text-xl tracking-widest uppercase">
                    Zaveri Realty Group
                  </span>
                  <span className="font-mono text-[10px] tracking-[0.25em] text-accent uppercase">
                    The Signature of Luxury Living
                  </span>
                </div>
              </div>
              <p className="font-serif italic text-grey-300 text-lg sm:text-xl max-w-md leading-relaxed mb-6">
                &ldquo;Live the lifestyle you want, not lifestyle you need.&rdquo;
              </p>
              <p className="font-sans text-grey-400 text-sm max-w-md leading-relaxed">
                Pioneering master-planned gated villa sanctuaries, sacred architectural landscapes, and prime property advisory in Kutch, Gujarat.
              </p>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 mt-8">
              <a
                href={companyDetails.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-sm bg-white/5 hover:bg-white/10 border border-white/15 text-xs font-mono uppercase tracking-wider text-white transition-colors"
                aria-label="Visit Zaveri Realty Instagram profile"
              >
                <Instagram className="w-4 h-4 text-accent" />
                <span>Instagram</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-white/50" />
              </a>
              <a
                href={companyDetails.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-sm bg-accent/15 hover:bg-accent/25 border border-accent/30 text-xs font-mono uppercase tracking-wider text-accent transition-colors"
                aria-label="Direct WhatsApp message"
              >
                <span>WhatsApp Direct</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Navigation Links Column */}
          <div className="lg:col-span-3 lg:col-start-7">
            <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-accent mb-6 font-semibold">
              Portfolio & Studio
            </h3>
            <ul className="flex flex-col gap-3 font-sans text-sm">
              <li>
                <RollLink href="/" className="text-grey-300 hover:text-white py-1">
                  Home
                </RollLink>
              </li>
              <li>
                <RollLink href="/works" className="text-grey-300 hover:text-white py-1">
                  Our Works & Inventory
                </RollLink>
              </li>
              <li>
                <RollLink href="/work/barsana" className="text-grey-300 hover:text-white py-1">
                  Barsana Signature Villas
                </RollLink>
              </li>
              <li>
                <RollLink href="/work/the-woodland-villa" className="text-grey-300 hover:text-white py-1">
                  The Woodland Villa (Upcoming)
                </RollLink>
              </li>
              <li>
                <RollLink href="/studio" className="text-grey-300 hover:text-white py-1">
                  Our Studio & Leadership
                </RollLink>
              </li>
              <li>
                <RollLink href="/approach" className="text-grey-300 hover:text-white py-1">
                  Development Approach
                </RollLink>
              </li>
            </ul>
          </div>

          {/* Contact Direct Lines Column */}
          <div className="lg:col-span-3">
            <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-accent mb-6 font-semibold">
              Executive Contacts
            </h3>
            <div className="flex flex-col gap-4 font-mono text-xs">
              <div>
                <span className="text-grey-400 block text-[10px] uppercase tracking-wider">Primary Desk</span>
                <RollLink href={`tel:${companyDetails.phonePrimary}`} className="text-white hover:text-accent font-bold text-sm">
                  {companyDetails.phonePrimary}
                </RollLink>
              </div>

              <div>
                <span className="text-grey-400 block text-[10px] uppercase tracking-wider">Bhavy Zaveri</span>
                <RollLink href={`tel:${companyDetails.phoneBhavy}`} className="text-white hover:text-accent font-bold text-sm">
                  {companyDetails.phoneBhavy}
                </RollLink>
              </div>

              <div>
                <span className="text-grey-400 block text-[10px] uppercase tracking-wider">Rajesh Zaveri</span>
                <RollLink href={`tel:${companyDetails.phoneRajesh}`} className="text-white hover:text-accent font-bold text-sm">
                  {companyDetails.phoneRajesh}
                </RollLink>
              </div>

              <div className="pt-2">
                <span className="text-grey-400 block text-[10px] uppercase tracking-wider">Location</span>
                <p className="text-grey-300 text-xs font-sans mt-0.5 leading-relaxed">
                  {companyDetails.address}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Lower Sub-Footer: Copyright, Legal & Made By */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-grey-400 uppercase tracking-wider">
          <p>© {new Date().getFullYear()} Zaveri Realty Group. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <RollLink href="/legal" className="text-grey-400 hover:text-white">
              Legal & Disclosures
            </RollLink>
            <span className="text-grey-600">•</span>
            <span className="text-grey-400">Bhuj, Gujarat, India</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
