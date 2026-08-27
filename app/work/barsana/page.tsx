"use client";

import OptimizedImage from "@/components/OptimizedImage";
import Link from "next/link";
import { useState } from "react";
import CubeButton from "@/components/CubeButton";
import RollLink from "@/components/RollLink";
import { projects } from "@/data/projects";
import { companyDetails } from "@/data/services";
import {
  MapPin,
  Sparkles,
  Sun,
  ShieldCheck,
  CheckCircle2,
  Calendar,
  Building,
  Maximize2,
  Phone,
  MessageSquare,
} from "lucide-react";

export default function BarsanaProjectPage() {
  const [selectedPlanTab, setSelectedPlanTab] = useState<"ground" | "first" | "master">("ground");
  const project = projects.find((p) => p.id === "barsana")!;

  return (
    <div className="w-full bg-bgColor text-contentColor">
      {/* 1. PROJECT HERO */}
      <section className="relative w-full min-h-[90vh] flex flex-col justify-end pt-28 pb-16 px-4 lg:px-8 bg-[#090e18] text-white">
        <div className="absolute inset-0 z-0">
          <OptimizedImage
            src="/assets/barsana/barsana-02.jpg"
            alt="Barsana Grand Classical Entrance at Night"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center brightness-70 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#090e18] via-black/30 to-black/50" />
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
            <span className="text-accent font-bold">Barsana</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-8">
              <h1 className="font-serif font-bold text-6xl sm:text-8xl lg:text-9xl uppercase tracking-tight leading-none text-white">
                Barsana
              </h1>
              <p className="font-serif italic text-xl sm:text-2xl text-accent mt-3">
                &ldquo;There&apos;s no place like home.&rdquo;
              </p>
            </div>

            {/* Meta Grid */}
            <div className="lg:col-span-4 bg-black/60 backdrop-blur-md p-6 rounded-sm border border-white/15 font-mono text-xs">
              <div className="flex items-center justify-between py-2 border-b border-white/10">
                <span className="text-grey-400">Location:</span>
                <span className="text-white font-semibold">Bhuj, Kutch (Gujarat)</span>
              </div>
              <div className="flex items-center justify-between py-2 border-b border-white/10">
                <span className="text-grey-400">Typology:</span>
                <span className="text-white font-semibold">Gated Luxury Villa Community</span>
              </div>
              <div className="flex items-center justify-between py-2 border-b border-white/10">
                <span className="text-grey-400">Total Units:</span>
                <span className="text-white font-semibold">92 Exclusive Plots & Villas</span>
              </div>
              <div className="flex items-center justify-between py-2">
                <span className="text-grey-400">Status:</span>
                <span className="text-accent font-bold">Booking & Development</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. PHILOSOPHY & ARCHITECTURAL MANIFESTO */}
      <section className="py-24 lg:py-32 px-4 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-accent rotate-45" />
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-grey-800">
                The Signature of luxury living
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl font-medium leading-tight text-contentColor">
              Experience the true essence of luxurious living with Barsana.
            </h2>
            <p className="font-sans text-grey-700 text-base sm:text-lg leading-relaxed">
              We believe that life is not just about existing, but about savoring every moment with comfort and indulgence. Our project is designed to offer you a blissful lifestyle, where every step is a celebration of opulence and contentment.
            </p>
            <p className="font-sans text-grey-700 text-base sm:text-lg leading-relaxed">
              Come, join us and revel in the pleasures of upscale living with Barsana.
            </p>

            {/* Quick Action Button */}
            <div className="pt-4 flex items-center gap-4">
              <CubeButton
                href={`https://wa.me/918009318009?text=Hello%20Zaveri%20Realty,%20I%20want%20to%20inquire%20about%20Barsana%20Villas.`}
                label="Inquire for Barsana"
                ariaLabel="Inquire for Barsana Villa Plots"
              />
            </div>
          </div>

          <div className="lg:col-span-6 relative aspect-[4/3] rounded-sm overflow-hidden shadow-2xl">
            <OptimizedImage
              src="/assets/barsana/barsana-03.jpg"
              alt="Barsana State of Happiness Entrance Pavilion"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* 3. THE CLUBHOUSE & RESORT AMENITIES */}
      <section className="py-24 bg-[#0d121c] text-white px-4 lg:px-8 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <div className="w-1.5 h-1.5 bg-accent rotate-45" />
                <span className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
                  Club Amenities
                </span>
              </div>
              <h2 className="font-serif text-4xl sm:text-6xl font-bold tracking-tight uppercase">
                The Clubhouse
              </h2>
            </div>
            <p className="font-sans text-grey-300 text-sm sm:text-base max-w-md">
              A thoughtfully designed space that prioritizes privacy, comfort, and breathtaking aesthetic appeal.
            </p>
          </div>

          {/* Photo Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
            <div className="md:col-span-8 relative min-h-[360px] md:min-h-[480px] rounded-sm overflow-hidden shadow-xl group">
              <OptimizedImage
                src="/assets/barsana/barsana-05.jpg"
                alt="Barsana Swimming Pool & Clubhouse at Dusk"
                fill
                sizes="(min-width: 768px) 66vw, 100vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <span className="font-mono text-xs uppercase tracking-widest text-accent">
                  Resort Leisure
                </span>
                <h3 className="font-serif text-2xl font-bold mt-1">
                  Grand Swimming Pool & Sunken Chaise Deck
                </h3>
              </div>
            </div>

            <div className="md:col-span-4 flex flex-col gap-6">
              <div className="relative h-56 rounded-sm overflow-hidden shadow-md group">
                <OptimizedImage
                  src="/assets/barsana/barsana-04.jpg"
                  alt="Clubhouse Grand Elevation"
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-black/30" />
                <div className="absolute bottom-4 left-4 font-serif text-lg font-bold">
                  Clubhouse Facade
                </div>
              </div>

              <div className="relative h-56 rounded-sm overflow-hidden shadow-md group">
                <OptimizedImage
                  src="/assets/barsana/barsana-06.jpg"
                  alt="Gym, Banquet Hall & Indoor Games"
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-black/30" />
                <div className="absolute bottom-4 left-4 font-serif text-lg font-bold">
                  Banquet, Gym & Games
                </div>
              </div>
            </div>
          </div>

          {/* Amenities Feature Highlights */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mt-12 pt-12 border-t border-white/10 font-mono text-xs uppercase tracking-wider text-grey-300">
            <div className="flex flex-col gap-1 p-3 bg-white/5 rounded-sm">
              <span className="text-accent font-bold">01</span>
              <span>Banquet Hall</span>
            </div>
            <div className="flex flex-col gap-1 p-3 bg-white/5 rounded-sm">
              <span className="text-accent font-bold">02</span>
              <span>Modern Gym</span>
            </div>
            <div className="flex flex-col gap-1 p-3 bg-white/5 rounded-sm">
              <span className="text-accent font-bold">03</span>
              <span>Billiards & TT</span>
            </div>
            <div className="flex flex-col gap-1 p-3 bg-white/5 rounded-sm">
              <span className="text-accent font-bold">04</span>
              <span>Kids Pool</span>
            </div>
            <div className="flex flex-col gap-1 p-3 bg-white/5 rounded-sm">
              <span className="text-accent font-bold">05</span>
              <span>Terrace Lounge</span>
            </div>
            <div className="flex flex-col gap-1 p-3 bg-white/5 rounded-sm">
              <span className="text-accent font-bold">06</span>
              <span>Party Lawn</span>
            </div>
          </div>
        </div>
      </section>

      {/* 4. THE SACRED TEMPLE & BOTANICAL GARDENS */}
      <section className="py-24 lg:py-32 px-4 lg:px-8 max-w-7xl mx-auto">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-1.5 h-1.5 bg-accent rotate-45" />
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-grey-800">
            Sacred Devotion & Nature
          </span>
        </div>
        <h2 className="font-serif text-4xl sm:text-6xl font-bold uppercase tracking-tight text-contentColor mb-12">
          Temple, Garden & Gazebo
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Temple Feature */}
          <div className="lg:col-span-6 relative min-h-[400px] rounded-sm overflow-hidden shadow-2xl group">
            <OptimizedImage
              src="/assets/barsana/barsana-09.jpg"
              alt="Barsana Sacred Temple at Night"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <span className="font-mono text-xs uppercase tracking-widest text-accent">
                Divine Devotion
              </span>
              <h3 className="font-serif text-3xl font-bold mt-1">
                Sacred Temple Sanctuary
              </h3>
              <p className="font-sans text-xs text-white/80 mt-1 max-w-md">
                Spiritual tranquility carved in classical stone, offering a peaceful morning and evening reflection haven for residents.
              </p>
            </div>
          </div>

          {/* Garden & Gazebo Feature */}
          <div className="lg:col-span-6 flex flex-col justify-between gap-6">
            <div className="relative aspect-[16/9] rounded-sm overflow-hidden shadow-xl group">
              <OptimizedImage
                src="/assets/barsana/barsana-07.jpg"
                alt="Barsana Botanical Garden with Lily Pond & Bridge"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-black/20" />
              <div className="absolute bottom-4 left-4 text-white font-serif text-xl font-bold">
                Lush Gardens, Lily Pond & Wooden Bridge
              </div>
            </div>

            <div className="relative aspect-[16/9] rounded-sm overflow-hidden shadow-xl group">
              <OptimizedImage
                src="/assets/barsana/barsana-11.jpg"
                alt="Barsana Gazebo & Campfire Lounge"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-black/20" />
              <div className="absolute bottom-4 left-4 text-white font-serif text-xl font-bold">
                4 Large Gazebos & Firepit Swings
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. VILLA INTERIORS & LIVING */}
      <section className="py-24 bg-[#0e1117] text-white px-4 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-1.5 h-1.5 bg-accent rotate-45" />
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
              Premier Ideal Living
            </span>
          </div>
          <h2 className="font-serif text-4xl sm:text-6xl font-bold uppercase tracking-tight mb-12">
            The Living & Bedrooms
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="relative aspect-[4/5] rounded-sm overflow-hidden shadow-xl group">
              <OptimizedImage
                src="/assets/barsana/barsana-12.jpg"
                alt="Luxury Living Room & Kitchen"
                fill
                sizes="(min-width: 768px) 33vw, 100vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-black/30" />
              <div className="absolute bottom-4 left-4 font-serif text-xl font-bold">
                Expansive Living & Modular Kitchen
              </div>
            </div>

            <div className="relative aspect-[4/5] rounded-sm overflow-hidden shadow-xl group">
              <OptimizedImage
                src="/assets/barsana/barsana-13.jpg"
                alt="Master Bedroom & Balcony"
                fill
                sizes="(min-width: 768px) 33vw, 100vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-black/30" />
              <div className="absolute bottom-4 left-4 font-serif text-xl font-bold">
                Master Suite & Private Balcony
              </div>
            </div>

            <div className="relative aspect-[4/5] rounded-sm overflow-hidden shadow-xl group">
              <OptimizedImage
                src="/assets/barsana/barsana-15.jpg"
                alt="Villa Night Elevation"
                fill
                sizes="(min-width: 768px) 33vw, 100vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-black/30" />
              <div className="absolute bottom-4 left-4 font-serif text-xl font-bold">
                Twilight Villa Elevation
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. GREEN ENERGY & CONVENIENCE */}
      <section className="py-20 px-4 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-white p-8 sm:p-12 rounded-sm border border-contentColor/10 shadow-lg">
          <div className="relative aspect-[16/10] rounded-sm overflow-hidden shadow-md">
            <OptimizedImage
              src="/assets/barsana/barsana-14.jpg"
              alt="100% Renewable Energy and Golf Carts"
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
          </div>

          <div className="space-y-6">
            <div>
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-accent font-semibold block mb-1">
                Eco-Conscious Living
              </span>
              <h3 className="font-serif text-3xl font-bold text-contentColor">
                100% Renewable Energy & Transit
              </h3>
            </div>
            <p className="font-sans text-grey-700 text-sm sm:text-base leading-relaxed">
              Barsana relies solely on solar renewable energy, creating an environmentally sustainable luxury community.
            </p>
            <div className="pt-2 border-t border-contentColor/10 space-y-3 font-mono text-xs text-grey-800">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0" />
                <span>Complimentary Golf Cart Transportation till nearby D-Mart</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0" />
                <span>Solar Rooftop Net-Metering & Hot Water Infrastructure</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0" />
                <span>EV Charging Points for Electric Vehicles</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. FLOOR PLANS & TECHNICAL SPECIFICATIONS */}
      <section className="py-24 bg-sand px-4 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-accent font-semibold block mb-2">
              Architectural Blueprints
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl font-bold uppercase text-contentColor">
              Layouts & Specifications
            </h2>
          </div>

          {/* Tab Selector */}
          <div className="flex justify-center mb-10">
            <div className="inline-flex p-1 bg-black/10 rounded-sm font-mono text-xs uppercase tracking-wider">
              <button
                type="button"
                onClick={() => setSelectedPlanTab("ground")}
                className={`px-6 py-2.5 rounded-sm transition-colors ${
                  selectedPlanTab === "ground" ? "bg-black text-white font-bold" : "text-grey-800 hover:text-black"
                }`}
              >
                Villa Floor Plan
              </button>
              <button
                type="button"
                onClick={() => setSelectedPlanTab("master")}
                className={`px-6 py-2.5 rounded-sm transition-colors ${
                  selectedPlanTab === "master" ? "bg-black text-white font-bold" : "text-grey-800 hover:text-black"
                }`}
              >
                Master Plot Layout
              </button>
            </div>
          </div>

          {/* Plan Display */}
          <div className="bg-white p-6 sm:p-10 rounded-sm border border-contentColor/10 shadow-xl">
            {selectedPlanTab === "ground" && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-8 relative aspect-[16/10] rounded-sm overflow-hidden bg-[#1a233a]">
                  <OptimizedImage
                    src="/assets/barsana/barsana-10.jpg"
                    alt="Ground Floor and First Floor Layout Plan"
                    fill
                    sizes="(min-width: 1024px) 66vw, 100vw"
                    className="object-contain"
                  />
                </div>
                <div className="lg:col-span-4 space-y-4 font-mono text-xs">
                  <h4 className="font-serif text-2xl font-bold text-contentColor">
                    Ground & First Floor
                  </h4>
                  <p className="font-sans text-grey-700 text-sm leading-relaxed">
                    Designed for maximum natural daylight and privacy:
                  </p>
                  <ul className="space-y-2 text-grey-800 pt-2 border-t border-contentColor/10">
                    <li>• Living Room (14&apos;6&quot; x 16&apos;1&quot;)</li>
                    <li>• Dining (9&apos;3&quot; x 10&apos;7&quot;)</li>
                    <li>• Kitchen (9&apos;0&quot; x 12&apos;4&quot;) + Wash Area</li>
                    <li>• Master Bedroom (14&apos;4&quot; x 16&apos;1&quot;) with Dressing</li>
                    <li>• Children Bedroom (14&apos;0&quot; x 11&apos;7&quot;)</li>
                    <li>• Front Garden & Courtyard</li>
                  </ul>
                </div>
              </div>
            )}

            {selectedPlanTab === "master" && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-8 relative aspect-[16/10] rounded-sm overflow-hidden bg-[#1a233a]">
                  <OptimizedImage
                    src="/assets/barsana/barsana-16.jpg"
                    alt="Barsana Master Layout Plot Inventory"
                    fill
                    sizes="(min-width: 1024px) 66vw, 100vw"
                    className="object-contain"
                  />
                </div>
                <div className="lg:col-span-4 space-y-4 font-mono text-xs">
                  <h4 className="font-serif text-2xl font-bold text-contentColor">
                    Master Site Plan
                  </h4>
                  <p className="font-sans text-grey-700 text-sm leading-relaxed">
                    92 residential plot units with dedicated community zones:
                  </p>
                  <ul className="space-y-2 text-grey-800 pt-2 border-t border-contentColor/10">
                    <li>• Plots ranging from 125.5 to 280.6 Sq.M</li>
                    <li>• Central Avenue & Security Gates</li>
                    <li>• Clubhouse, Pool & Party Lawn Zone</li>
                    <li>• Temple & Ayurvedic Garden Park</li>
                    <li>• Sports Court & Oxygen Park</li>
                  </ul>
                </div>
              </div>
            )}
          </div>

          {/* Technical Specs Breakdown */}
          <div className="mt-16 pt-16 border-t border-contentColor/15">
            <h3 className="font-serif text-3xl font-bold text-contentColor mb-8 text-center">
              Construction Specifications
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-mono text-xs">
              {project.specs?.map((spec) => (
                <div key={spec.category} className="bg-white p-6 rounded-sm border border-contentColor/10 shadow-sm">
                  <h5 className="font-bold text-accent text-sm uppercase tracking-wider mb-3">
                    {spec.category}
                  </h5>
                  <ul className="space-y-2 text-grey-700 font-sans text-xs leading-relaxed">
                    {spec.items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-accent font-mono">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 8. LOCATION MAP & CONNECTIVITY */}
      <section className="py-24 px-4 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 space-y-6">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-accent font-semibold block">
              Strategic Location
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-contentColor uppercase">
              Prime Connectivity in Bhuj
            </h2>
            <p className="font-sans text-grey-700 leading-relaxed">
              Situated in the fastest-growing upscale residential corridor of Bhuj, with direct access to landmark retail, hospitality, and spiritual hubs.
            </p>
            <div className="space-y-3 font-mono text-xs text-grey-800 pt-2 border-t border-contentColor/10">
              <div className="flex items-center justify-between py-1.5 border-b border-contentColor/5">
                <span>D-Mart & Seven Sky:</span>
                <span className="font-bold">2 Mins (Golf Cart Route)</span>
              </div>
              <div className="flex items-center justify-between py-1.5 border-b border-contentColor/5">
                <span>Trimandir & Sharad Baug:</span>
                <span className="font-bold">5 Mins Drive</span>
              </div>
              <div className="flex items-center justify-between py-1.5 border-b border-contentColor/5">
                <span>Regenta Resort & Hill View:</span>
                <span className="font-bold">5 Mins Drive</span>
              </div>
              <div className="flex items-center justify-between py-1.5 border-b border-contentColor/5">
                <span>Jubilee Ground & City Center:</span>
                <span className="font-bold">8 Mins Drive</span>
              </div>
            </div>

            {/* Direct Phone Lines */}
            <div className="pt-4 flex flex-col gap-2 font-mono text-xs">
              <span className="text-accent uppercase tracking-widest font-bold">Direct Sales Contacts:</span>
              <div className="flex flex-wrap gap-4">
                <a href={`tel:${companyDetails.phoneBhavy}`} className="text-black font-bold hover:text-accent">
                  Bhavy Zaveri: {companyDetails.phoneBhavy}
                </a>
                <a href={`tel:${companyDetails.phoneRajesh}`} className="text-black font-bold hover:text-accent">
                  Rajesh Zaveri: {companyDetails.phoneRajesh}
                </a>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 relative aspect-[4/3] rounded-sm overflow-hidden shadow-2xl bg-[#201c18]">
            <OptimizedImage
              src="/assets/barsana/barsana-19.jpg"
              alt="Barsana Location Map & Key Landmarks"
              fill
              sizes="(min-width: 1024px) 58vw, 100vw"
              className="object-contain"
            />
          </div>
        </div>
      </section>

      {/* 9. NEXT PROJECT TRANSITION */}
      <section className="bg-black text-white py-24 px-4 lg:px-8 text-center border-t border-white/10">
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="flex items-center justify-center">
            <Link
              href="/works"
              className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-grey-400 hover:text-accent transition-colors"
            >
              ← Back to All Works
            </Link>
          </div>
          <div className="pt-2">
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-accent font-semibold block">
              Next Project
            </span>
          </div>
          <h2 className="font-serif text-4xl sm:text-6xl font-bold uppercase">
            The Woodland Villa
          </h2>
          <p className="font-sans text-grey-400 text-sm sm:text-base max-w-lg mx-auto">
            Upcoming private woodland retreat series in the Kutch foothills.
          </p>
          <div className="pt-4 flex justify-center">
            <CubeButton
              href="/work/the-woodland-villa"
              label="View Next Project"
              ariaLabel="View The Woodland Villa Details"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
