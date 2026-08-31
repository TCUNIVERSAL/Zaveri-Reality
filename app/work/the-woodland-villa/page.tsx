"use client";

import OptimizedImage from "@/components/ui/OptimizedImage";
import Link from "next/link";
import CubeButton from "@/components/ui/CubeButton";
import { companyDetails } from "@/data/services";
import { Trees, Compass, Sun, Shield, Sparkles, MessageSquare, Phone } from "lucide-react";

export default function WoodlandVillaPage() {
  return (
    <div className="w-full bg-bgColor text-contentColor overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative w-full min-h-[85vh] flex flex-col justify-end pt-28 pb-16 px-4 lg:px-8 bg-[#0b120f] text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <OptimizedImage
            src="/images/projects/barsana/barsana-18.jpg"
            alt="The Woodland Villa Aerial Forest Canopy"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center brightness-70 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0b120f] via-black/30 to-black/50" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto w-full">
          {/* Breadcrumb Navigation Trail */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-grey-300 mb-6">
            <Link href="/" className="hover:text-accent transition-colors">
              Home
            </Link>
            <span className="text-grey-500">/</span>
            <Link href="/works" className="hover:text-accent transition-colors">
              Works
            </Link>
            <span className="text-grey-500">/</span>
            <span className="text-accent font-bold">The Woodland Villa</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-8">
              <h1 className="font-serif font-bold text-5xl sm:text-7xl lg:text-8xl uppercase tracking-tight leading-none text-white">
                The Woodland Villa
              </h1>
              <p className="font-serif italic text-xl sm:text-2xl text-accent mt-3">
                &ldquo;A Sanctuary in Harmony with Nature.&rdquo;
              </p>
            </div>

            <div className="lg:col-span-4 bg-black/60 backdrop-blur-md p-6 rounded-sm border border-white/15 font-mono text-xs">
              <div className="flex items-center justify-between py-2 border-b border-white/10">
                <span className="text-grey-400">Status:</span>
                <span className="text-accent font-bold">Pre-Launch Waitlist</span>
              </div>
              <div className="flex items-center justify-between py-2 border-b border-white/10">
                <span className="text-grey-400">Total Parcels:</span>
                <span className="text-white font-semibold">24 Private Retreats</span>
              </div>
              <div className="flex items-center justify-between py-2">
                <span className="text-grey-400">Typology:</span>
                <span className="text-white font-semibold">3 & 4 BHK Forest Villas</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Overview & Concept */}
      <section className="py-24 lg:py-32 px-4 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-accent rotate-45" />
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-grey-800">
                Upcoming Concept
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl font-medium leading-tight text-contentColor">
              Immerse yourself in organic luxury and undisturbed natural tranquility.
            </h2>
            <p className="font-sans text-grey-700 text-base sm:text-lg leading-relaxed">
              Designed as a limited-edition enclave of private woodland retreats, The Woodland Villa pairs natural stone, sunken zen courtyards, private infinity plunge pools, and expansive glass pavilions with indigenous forest flora.
            </p>
            <p className="font-sans text-grey-700 text-base sm:text-lg leading-relaxed">
              Expressions of interest and priority pre-launch site previews are now open.
            </p>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <CubeButton
                href={`https://wa.me/918009318009?text=Hello%20Zaveri%20Realty,%20I%20am%20interested%20in%20The%20Woodland%20Villa%20pre-launch%20waitlist.`}
                label="Join Priority Waitlist"
                ariaLabel="Join Priority Waitlist for The Woodland Villa"
              />
              <a
                href={`tel:${companyDetails.phonePrimary}`}
                className="px-6 py-3 rounded-sm bg-black/5 hover:bg-black/10 border border-black/20 font-mono text-xs uppercase tracking-wider font-semibold text-contentColor transition-colors flex items-center gap-2"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call {companyDetails.phonePrimary}</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-6 relative aspect-[4/3] rounded-sm overflow-hidden shadow-2xl">
            <OptimizedImage
              src="/images/projects/barsana/barsana-15.jpg"
              alt="Villa Architecture Preview"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Key Architectural Features */}
      <section className="py-24 bg-[#0d121c] text-white px-4 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-serif text-3xl sm:text-5xl font-bold uppercase mb-12 text-center">
            Sanctuary Highlights
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-white/5 rounded-sm border border-white/10 space-y-4">
              <Trees className="w-8 h-8 text-accent" />
              <h3 className="font-serif text-2xl font-bold">Private Plunge Pools</h3>
              <p className="font-sans text-grey-300 text-sm leading-relaxed">
                Each villa features a private heated infinity plunge pool facing internal botanical gardens and forested courtyards.
              </p>
            </div>
            <div className="p-8 bg-white/5 rounded-sm border border-white/10 space-y-4">
              <Sun className="w-8 h-8 text-accent" />
              <h3 className="font-serif text-2xl font-bold">Double-Height Glass</h3>
              <p className="font-sans text-grey-300 text-sm leading-relaxed">
                Expansive architectural glass walls draw natural daylight and morning mist directly into living pavilions.
              </p>
            </div>
            <div className="p-8 bg-white/5 rounded-sm border border-white/10 space-y-4">
              <Sparkles className="w-8 h-8 text-accent" />
              <h3 className="font-serif text-2xl font-bold">Orchard Integration</h3>
              <p className="font-sans text-grey-300 text-sm leading-relaxed">
                Surrounded by an organic fruit and spice orchard managed by dedicated horticultural staff.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Next Project Link */}
      <section className="bg-black text-white py-20 px-4 lg:px-8 text-center border-t border-white/10">
        <div className="max-w-4xl mx-auto space-y-4">
          <div className="flex items-center justify-center mb-2">
            <Link
              href="/works"
              className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-grey-400 hover:text-accent transition-colors"
            >
              ← Back to All Works
            </Link>
          </div>
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-accent">
            Featured Active Project
          </span>
          <h2 className="font-serif text-4xl font-bold uppercase">
            Barsana
          </h2>
          <p className="font-sans text-grey-400 text-sm max-w-md mx-auto">
            Explore the flagship luxury villa community currently booking in Bhuj.
          </p>
          <div className="pt-2 flex justify-center">
            <CubeButton href="/work/barsana" label="View Barsana" ariaLabel="View Barsana Project Details" />
          </div>
        </div>
      </section>
    </div>
  );
}
