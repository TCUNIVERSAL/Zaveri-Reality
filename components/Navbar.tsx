"use client";

import Link from "next/link";
import RollLink from "./RollLink";
import CubeButton from "./CubeButton";
import Logo from "./Logo";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-40 pointer-events-none">
      {/* Upper Navigation Layer (Mix Blend Difference for contrast across dark & light backdrops) */}
      <div className="absolute top-0 left-0 w-full h-16 lg:h-20 px-4 lg:px-8 grid grid-cols-2 lg:grid-cols-24 items-center mix-blend-difference z-10">
        {/* Official Geometric Logo & Name */}
        <div className="flex items-center gap-3 invert lg:col-span-6 pointer-events-auto">
          <Link
            href="/"
            className="flex items-center gap-3 group py-2 focus:outline-none focus:ring-1 focus:ring-accent"
            aria-label="Zaveri Realty Group — Home"
          >
            {/* Official Geometric Logo Emblem */}
            <div className="w-8 h-8 flex items-center justify-center text-black group-hover:scale-105 transition-transform">
              <Logo className="w-full h-full text-black" size={32} color="#000000" />
            </div>
            <div className="flex flex-col">
              <span className="font-serif font-bold text-base sm:text-lg tracking-wider text-black uppercase leading-none">
                Zaveri Realty
              </span>
              <span className="font-mono text-[9px] tracking-[0.25em] text-black/70 uppercase mt-0.5">
                Group
              </span>
            </div>
          </Link>
        </div>

        {/* Center Primary Nav Routes */}
        <nav
          aria-label="Primary Navigation"
          className="hidden lg:flex lg:items-center invert lg:col-span-12 lg:col-start-8 gap-8 pointer-events-auto justify-center"
        >
          <RollLink
            href="/works"
            className="font-mono text-[13px] uppercase tracking-wider font-semibold text-black px-2 py-1 focus:outline-none focus:ring-1 focus:ring-accent"
          >
            Works
          </RollLink>
          <RollLink
            href="/studio"
            className="font-mono text-[13px] uppercase tracking-wider font-semibold text-black px-2 py-1 focus:outline-none focus:ring-1 focus:ring-accent"
          >
            Studio
          </RollLink>
          <RollLink
            href="/approach"
            className="font-mono text-[13px] uppercase tracking-wider font-semibold text-black px-2 py-1 focus:outline-none focus:ring-1 focus:ring-accent"
          >
            Approach
          </RollLink>
          <RollLink
            href="/contact"
            className="font-mono text-[13px] uppercase tracking-wider font-semibold text-black px-2 py-1 focus:outline-none focus:ring-1 focus:ring-accent"
          >
            Inquire
          </RollLink>
        </nav>
      </div>

      {/* Top Right Desktop CTA Button */}
      <div className="absolute top-0 right-0 h-16 lg:h-20 px-4 lg:px-8 flex items-center justify-end pointer-events-auto z-20 hidden lg:flex">
        <CubeButton href="/contact" label="Contact" ariaLabel="Contact Zaveri Realty Group" />
      </div>
    </header>
  );
}
