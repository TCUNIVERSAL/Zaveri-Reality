"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import CinematicCanvas from "@/components/CinematicCanvas";
import CinematicOverlay from "@/components/CinematicOverlay";
import CubeButton from "@/components/CubeButton";
import RollLink from "@/components/RollLink";
import { projects } from "@/data/projects";
import { services, companyDetails } from "@/data/services";
import { Phone } from "lucide-react";

export default function HomePage() {
  const scrollProgressRef = useRef(0);
  const mousePosRef = useRef({ x: 0, y: 0 });
  const [currentScene, setCurrentScene] = useState(1);
  const [activeServiceIndex, setActiveServiceIndex] = useState(0);
  const [activeValueIndex, setActiveValueIndex] = useState(0);
  const timelineTrackRef = useRef<HTMLDivElement>(null);

  // Compute which scene is active from scroll progress (avoids per-pixel re-renders)
  const computeScene = useCallback((p: number): number => {
    if (p >= 0.90) return 6;
    if (p >= 0.74) return 5;
    if (p >= 0.55) return 4;
    if (p >= 0.35) return 3;
    if (p >= 0.16) return 2;
    return 1;
  }, []);

  // Scroll listener — updates ref continuously, only triggers re-render on scene change
  useEffect(() => {
    const handleScroll = () => {
      const track = timelineTrackRef.current;
      if (!track) return;
      const rect = track.getBoundingClientRect();
      const totalScrollable = track.scrollHeight - window.innerHeight;
      const scrolled = -rect.top;
      const p = Math.max(0, Math.min(1, scrolled / totalScrollable));
      scrollProgressRef.current = p;

      const newScene = computeScene(p);
      setCurrentScene((prev) => (prev !== newScene ? newScene : prev));
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [computeScene]);

  // Mouse move listener — ref only, no state updates needed
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mousePosRef.current = {
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: (e.clientY / window.innerHeight) * 2 - 1,
      };
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Jump to specific scene in 3D timeline
  const handleJumpToScene = useCallback((targetP: number) => {
    const track = timelineTrackRef.current;
    if (!track) return;
    const totalScrollable = track.scrollHeight - window.innerHeight;
    const targetScrollTop = targetP * totalScrollable;
    window.scrollTo({
      top: targetScrollTop,
      behavior: "smooth",
    });
  }, []);

  const values = [
    {
      title: "Longevity",
      desc: "We build homes to outlast trends, with honest materials, earthquake-resistant engineering, and spaces that flourish through generations.",
      image: "/assets/barsana/barsana-02.jpg",
    },
    {
      title: "Sanctuary",
      desc: "Integrating sacred devotion, lush botanical party lawns, tranquil lily ponds, and private gazebos into the fabric of daily living.",
      image: "/assets/barsana/barsana-09.jpg",
    },
    {
      title: "Blessings",
      desc: "Every community is founded on positive energy, 100% renewable solar power, and a lifelong commitment to the families who call it home.",
      image: "/assets/barsana/barsana-07.jpg",
    },
  ];

  return (
    <div className="w-full relative bg-[#080b12] text-white">
      {/* 1. THREE.JS WEBGL 3D INTERACTIVE WORLD */}
      <CinematicCanvas scrollProgressRef={scrollProgressRef} mousePosRef={mousePosRef} />

      {/* 2. SPATIAL CINEMATIC OVERLAY (KINETIC TEXT & 6-SCENE TIMELINE) */}
      <CinematicOverlay currentScene={currentScene} onJumpToScene={handleJumpToScene} />

      {/* 3. 3D SCROLL TIMELINE TRACK (Drives camera choreography through 6 scenes) */}
      <div ref={timelineTrackRef} className="relative w-full h-[600vh] pointer-events-none z-0" />

      {/* 4. GROUNDED DEEP-DIVE EDITORIAL SECTIONS (Continuous seamlessly after 3D film) */}
      <div className="relative z-20 bg-bgColor text-contentColor border-t border-contentColor/15">
        {/* THE PRACTICE MANIFESTO */}
        <section className="py-28 lg:py-36 px-4 lg:px-8 max-w-7xl mx-auto">
          <div className="flex items-center gap-2 mb-8">
            <div className="w-1.5 h-1.5 bg-accent rotate-45" />
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-grey-800">
              The Practice
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-medium leading-[1.15] text-contentColor">
                Zaveri Realty Group crafts landmark luxury residences and sacred master-planned villa communities.
              </h2>
              <p className="font-sans text-lg sm:text-xl text-grey-700 leading-relaxed">
                We believe architecture should be honest to its materials and true to its place. Under one roof, our team guides land acquisition, architectural proportion, sustainable green engineering, and lifetime asset care across Kutch and Gujarat.
              </p>
              <div className="pt-4 flex flex-wrap gap-4">
                <CubeButton href="/works" label="Explore All Works" ariaLabel="Explore All Works" />
                <CubeButton href="/studio" label="Our Studio" ariaLabel="Learn about our studio" />
              </div>
            </div>

            <div className="lg:col-span-5 relative aspect-[4/5] rounded-sm overflow-hidden shadow-2xl">
              <Image
                src="/assets/barsana/barsana-03.jpg"
                alt="Zaveri Realty Architectural Monument"
                fill
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </section>

        {/* FEATURED PROJECTS SHOWCASE */}
        <section className="py-24 bg-[#0e121a] text-white px-4 lg:px-8 border-t border-white/10">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-1.5 h-1.5 bg-accent rotate-45" />
                  <span className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
                    Featured Collection
                  </span>
                </div>
                <h2 className="font-serif text-4xl sm:text-6xl font-bold uppercase tracking-tight">
                  Signature Developments
                </h2>
              </div>
              <RollLink
                href="/works"
                className="font-mono text-xs uppercase tracking-widest text-white/70 hover:text-accent font-semibold"
              >
                View Full Portfolio ({projects.length})
              </RollLink>
            </div>

            {/* Project 1: Barsana Deep Dive Card */}
            <article className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-24 pb-24 border-b border-white/10">
              <div className="lg:col-span-7 relative aspect-[16/9] rounded-sm overflow-hidden shadow-2xl group">
                <Image
                  src="/assets/barsana/barsana-02.jpg"
                  alt="Barsana Grand Classical Entrance"
                  fill
                  sizes="(min-width: 1024px) 60vw, 100vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute top-4 left-4 font-mono text-[11px] uppercase tracking-wider bg-black/75 backdrop-blur-md px-3 py-1.5 text-accent rounded-sm border border-white/10">
                  Featured Active Project
                </div>
              </div>

              <div className="lg:col-span-5 space-y-6">
                <span className="font-mono text-xs uppercase tracking-[0.2em] text-grey-400">
                  Luxury Villa Community • Bhuj
                </span>
                <h3 className="font-serif text-4xl sm:text-5xl font-bold text-white">
                  Barsana
                </h3>
                <p className="font-sans text-grey-300 text-base sm:text-lg leading-relaxed">
                  92 exclusive plots & villas, majestic 10,000+ sq.ft clubhouse, swimming pool, sacred marble temple, 100% solar energy, and dedicated golf cart transport to D-Mart.
                </p>
                <div className="pt-2 flex items-center gap-4">
                  <CubeButton href="/work/barsana" label="View Barsana Experience" ariaLabel="View Barsana Project Details" />
                </div>
              </div>
            </article>

            {/* Project 2: The Woodland Villa Card */}
            <article className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              <div className="lg:col-span-7 lg:order-2 relative aspect-[16/9] rounded-sm overflow-hidden shadow-2xl group">
                <Image
                  src="/assets/barsana/barsana-18.jpg"
                  alt="The Woodland Villa Forest Sanctuary"
                  fill
                  sizes="(min-width: 1024px) 60vw, 100vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute top-4 left-4 font-mono text-[11px] uppercase tracking-wider bg-accent text-black font-bold px-3 py-1.5 rounded-sm">
                  Upcoming Signature Edition
                </div>
              </div>

              <div className="lg:col-span-5 lg:order-1 space-y-6">
                <span className="font-mono text-xs uppercase tracking-[0.2em] text-grey-400">
                  Private Forest Sanctuary • 2026
                </span>
                <h3 className="font-serif text-4xl sm:text-5xl font-bold text-white">
                  The Woodland Villa
                </h3>
                <p className="font-sans text-grey-300 text-base sm:text-lg leading-relaxed">
                  24 limited-edition woodland retreats featuring private heated plunge pools, double-height glass pavilions, and organic spice orchards.
                </p>
                <div className="pt-2 flex items-center gap-4">
                  <CubeButton href="/work/the-woodland-villa" label="Join Pre-Launch Waitlist" ariaLabel="Join Waitlist for The Woodland Villa" />
                </div>
              </div>
            </article>
          </div>
        </section>

        {/* CORE VALUES */}
        <section className="py-24 bg-sand px-4 lg:px-8 text-contentColor">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-2 mb-8">
              <div className="w-1.5 h-1.5 bg-accent rotate-45" />
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-grey-800">
                Guiding Principles
              </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-5 flex flex-col gap-6">
                {values.map((v, idx) => (
                  <button
                    key={v.title}
                    type="button"
                    onClick={() => setActiveValueIndex(idx)}
                    className={`text-left p-6 rounded-sm transition-all duration-300 border ${
                      activeValueIndex === idx
                        ? "bg-white shadow-xl border-accent/40 translate-x-2"
                        : "bg-transparent border-black/10 hover:border-black/30"
                    }`}
                    aria-pressed={activeValueIndex === idx}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-serif text-2xl font-bold text-contentColor">
                        {v.title}
                      </span>
                      <span className="font-mono text-xs text-accent font-semibold">
                        0{idx + 1}
                      </span>
                    </div>
                    <p className="font-sans text-sm text-grey-700 leading-relaxed">
                      {v.desc}
                    </p>
                  </button>
                ))}
              </div>

              <div className="lg:col-span-7 relative aspect-[4/3] rounded-sm overflow-hidden shadow-2xl bg-black">
                <Image
                  src={values[activeValueIndex].image}
                  alt={values[activeValueIndex].title}
                  fill
                  sizes="(min-width: 1024px) 55vw, 100vw"
                  className="object-cover transition-opacity duration-500"
                />
                <div className="absolute inset-0 bg-black/30" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <span className="font-mono text-xs uppercase tracking-widest text-accent">
                    The Value
                  </span>
                  <p className="font-serif text-3xl font-bold mt-1">
                    {values[activeValueIndex].title}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SERVICES ACCORDION & POLYGON MASK */}
        <section className="py-28 bg-[#090d16] text-white px-4 lg:px-8 border-t border-white/10">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-1.5 h-1.5 bg-accent rotate-45" />
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
                Services We Provide
              </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mt-8">
              <div className="lg:col-span-6 flex flex-col divide-y divide-white/10">
                {services.map((service, index) => {
                  const isActive = activeServiceIndex === index;
                  return (
                    <div
                      key={service.id}
                      onMouseEnter={() => setActiveServiceIndex(index)}
                      onClick={() => setActiveServiceIndex(index)}
                      className={`py-8 cursor-pointer transition-all duration-300 ${
                        isActive ? "opacity-100 pl-2" : "opacity-45 hover:opacity-80"
                      }`}
                    >
                      <div className="flex items-baseline justify-between gap-4">
                        <h3 className="font-serif text-2xl sm:text-3xl font-medium text-white">
                          {service.title}
                        </h3>
                        <span className="font-mono text-xs text-accent">
                          [ 0{index + 1} ]
                        </span>
                      </div>
                      {isActive && (
                        <div className="mt-4 space-y-4">
                          <p className="font-sans text-grey-300 text-sm sm:text-base leading-relaxed">
                            {service.fullDesc}
                          </p>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2 border-t border-white/10">
                            {service.features.map((feat) => (
                              <div key={feat} className="flex items-center gap-2 font-mono text-[11px] text-accent">
                                <span>•</span>
                                <span className="text-white/90">{feat}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              <div className="lg:col-span-6 sticky top-28 hidden lg:block">
                <div className="relative aspect-[4/3] rounded-sm overflow-hidden bg-black/40 border border-white/15 p-2">
                  <div className="relative w-full h-full services-clip-shape overflow-hidden">
                    <Image
                      src={services[activeServiceIndex].image}
                      alt={services[activeServiceIndex].title}
                      fill
                      sizes="(min-width: 1024px) 50vw, 100vw"
                      className="object-cover transition-all duration-500 scale-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                    <div className="absolute bottom-6 left-6 right-6 text-white">
                      <span className="font-mono text-[11px] uppercase tracking-widest text-accent">
                        Service Focus
                      </span>
                      <h4 className="font-serif text-2xl font-bold">
                        {services[activeServiceIndex].title}
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* INQUIRE CTA */}
        <section className="py-24 px-4 lg:px-8 max-w-4xl mx-auto text-center">
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-accent font-semibold block mb-3">
            Direct Inquiries
          </span>
          <h2 className="font-serif text-4xl sm:text-6xl font-bold uppercase text-contentColor mb-6">
            Inquire With Zaveri Realty
          </h2>
          <p className="font-sans text-grey-700 text-base sm:text-lg max-w-xl mx-auto mb-10 leading-relaxed">
            Schedule a private walkthrough at Barsana or speak directly with Bhavy Zaveri & Rajesh Zaveri.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <CubeButton href="/contact" label="Open Contact Form" ariaLabel="Open Contact Form" />
            <a
              href={`tel:${companyDetails.phonePrimary}`}
              className="px-6 py-3 rounded-sm bg-black/5 hover:bg-black/10 border border-black/20 font-mono text-xs uppercase tracking-wider font-semibold text-contentColor transition-colors flex items-center gap-2"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Call {companyDetails.phonePrimary}</span>
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
