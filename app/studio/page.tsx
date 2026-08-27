"use client";

import { useState } from "react";
import OptimizedImage from "@/components/OptimizedImage";
import Link from "next/link";
import CubeButton from "@/components/CubeButton";
import RollLink from "@/components/RollLink";
import { companyDetails } from "@/data/services";

export default function StudioPage() {
  const [activeTeamIndex, setActiveTeamIndex] = useState(0);

  const team = [
    {
      name: "Rajesh Zaveri",
      role: "Founder & Managing Director",
      phone: "+91 81418 10432",
      bio: "With over two decades of leadership in Gujarat real estate, Rajesh Zaveri anchors the group's vision for transformative luxury master planning, ethical governance, and enduring community creation.",
      image: "/assets/barsana/barsana-03.jpg",
    },
    {
      name: "Bhavy Zaveri",
      role: "Director of Development & Strategy",
      phone: "+91 91063 18607",
      bio: "Spearheading modern architectural innovation, sustainable solar infrastructure, and high-touch client advisory across all signature residential developments.",
      image: "/assets/barsana/barsana-04.jpg",
    },
    {
      name: "Aarav Mehta",
      role: "Principal Architectural Consultant",
      phone: "8009318009",
      bio: "Specializing in classical proportion, courtyard microclimates, and earthquake-resilient luxury residential engineering.",
      image: "/assets/barsana/barsana-05.jpg",
    },
    {
      name: "Pooja Solanki",
      role: "Interior Architecture Lead",
      phone: "8009318009",
      bio: "Crafting bespoke living spaces with natural stone, brass trims, bespoke lighting schemes, and ergonomic modern modular kitchens.",
      image: "/assets/barsana/barsana-12.jpg",
    },
    {
      name: "Rohan Kothari",
      role: "Landscape & Horticultural Director",
      phone: "8009318009",
      bio: "Designing botanical ecosystems, sacred temple landscapes, lily ponds, and medicinal Ayurvedic flora across our gated estates.",
      image: "/assets/barsana/barsana-07.jpg",
    },
  ];

  const recognitions = [
    {
      project: "Barsana",
      award: "Gujarat Real Estate Leadership Awards",
      accolade: "Winner — Best Luxury Gated Villa Enclave",
      year: "2025",
    },
    {
      project: "The Woodland Villa",
      award: "Western India Sustainable Architecture Conclave",
      accolade: "Honourable Mention — Eco-Luxury Design",
      year: "2025",
    },
    {
      project: "Royal Palms Estate",
      award: "Kutch Infrastructure & Builders Forum",
      accolade: "Winner — Excellence in Gated Community Planning",
      year: "2024",
    },
    {
      project: "Vrindavan Greens",
      award: "Gujarat Urban Development Forum",
      accolade: "Winner — Best Farmstay Development",
      year: "2023",
    },
  ];

  return (
    <div className="w-full bg-bgColor text-contentColor">
      {/* 1. STUDIO HEADER */}
      <section className="pt-28 pb-20 px-4 lg:px-8 max-w-7xl mx-auto text-center">
        <div className="flex items-center justify-center gap-2 mb-4">
          <div className="w-1.5 h-1.5 bg-accent rotate-45" />
          <h1 className="font-mono text-xs uppercase tracking-[0.2em] text-grey-800">
            Our Studio
          </h1>
        </div>
        <p className="font-serif text-3xl sm:text-5xl lg:text-6xl font-medium leading-[1.15] max-w-4xl mx-auto text-contentColor">
          We believe luxury real estate should be honest to its material and true to its place.
        </p>
      </section>

      {/* 2. PHILOSOPHY & IMAGE STORY */}
      <section className="py-16 px-4 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 space-y-8">
            <p className="font-serif text-2xl sm:text-3xl text-contentColor leading-snug">
              Zaveri Realty Group is a premier real estate, architecture, and lifestyle development group operating across Kutch and Gujarat.
            </p>
            <p className="font-sans text-grey-700 text-base leading-relaxed">
              We approach every development not merely as construction, but as the creation of sacred lifestyle sanctuaries. Our integrated practice spans land acquisition, master planning, sustainable solar design, civil craftsmanship, and lifetime estate management.
            </p>
            <div className="pt-2">
              <CubeButton href="/contact" label="Inquire With Us" ariaLabel="Contact our team" />
            </div>
          </div>

          <div className="lg:col-span-7 relative aspect-[4/3] rounded-sm overflow-hidden shadow-2xl">
            <OptimizedImage
              src="/assets/barsana/barsana-03.jpg"
              alt="Zaveri Realty Architecture"
              fill
              sizes="(min-width: 1024px) 58vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* 3. CORE BELIEF BANNER */}
      <section className="py-24 bg-sand px-4 lg:px-8 text-center my-16">
        <div className="max-w-4xl mx-auto space-y-4">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-accent font-semibold">
            Our Central Belief
          </p>
          <h2 className="font-serif text-3xl sm:text-5xl font-medium leading-tight text-contentColor">
            &ldquo;Live the lifestyle you want, not lifestyle you need.&rdquo;
          </h2>
          <p className="font-sans text-grey-700 text-base max-w-2xl mx-auto">
            Spaces designed to foster health, family harmony, and sacred peace, equipped with modern clubhouse leisure and green energy.
          </p>
        </div>
      </section>

      {/* 4. MEET THE TEAM & LEADERSHIP */}
      <section className="py-24 px-4 lg:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-1.5 h-1.5 bg-accent rotate-45" />
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-grey-800">
                Leadership & Vision
              </span>
            </div>
            <h2 className="font-serif text-4xl sm:text-6xl font-bold uppercase">
              Meet the Team
            </h2>
          </div>
          <p className="font-sans text-grey-600 text-sm max-w-sm">
            Hover or select each leader to view their focus and architectural biography.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Team Member List */}
          <div className="lg:col-span-7 divide-y divide-contentColor/15">
            {team.map((member, idx) => {
              const isSelected = activeTeamIndex === idx;
              return (
                <div
                  key={member.name}
                  onMouseEnter={() => setActiveTeamIndex(idx)}
                  onClick={() => setActiveTeamIndex(idx)}
                  className={`py-6 cursor-pointer transition-all duration-300 ${
                    isSelected ? "opacity-100 pl-4 border-l-2 border-accent" : "opacity-50 hover:opacity-85"
                  }`}
                >
                  <div className="flex items-baseline justify-between">
                    <h3 className="font-serif text-2xl sm:text-3xl font-bold text-contentColor">
                      {member.name}
                    </h3>
                    <span className="font-mono text-xs text-accent font-semibold">
                      [ 0{idx + 1} ]
                    </span>
                  </div>
                  <div className="font-mono text-xs uppercase tracking-wider text-grey-600 mt-1">
                    {member.role}
                  </div>
                  {isSelected && (
                    <div className="mt-4 pt-3 border-t border-contentColor/10 space-y-2">
                      <p className="font-sans text-sm text-grey-700 leading-relaxed">
                        {member.bio}
                      </p>
                      <div className="font-mono text-xs text-black font-semibold">
                        Direct Line: <a href={`tel:${member.phone}`} className="text-accent hover:underline">{member.phone}</a>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Dynamic Image Display */}
          <div className="lg:col-span-5 sticky top-28 hidden lg:block">
            <div className="relative aspect-[4/5] rounded-sm overflow-hidden shadow-2xl bg-black">
              <OptimizedImage
                src={team[activeTeamIndex].image}
                alt={team[activeTeamIndex].name}
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="font-mono text-xs uppercase tracking-widest text-accent">
                  {team[activeTeamIndex].role}
                </span>
                <h4 className="font-serif text-2xl font-bold mt-1">
                  {team[activeTeamIndex].name}
                </h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. RECOGNITION & AWARDS */}
      <section className="py-24 bg-[#0e1118] text-white px-4 lg:px-8 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-1.5 h-1.5 bg-accent rotate-45" />
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
              Recognition & Milestones
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold uppercase mb-12">
            Honors & Accolades
          </h2>

          <div className="w-full overflow-x-auto">
            <table className="w-full text-left font-mono text-xs uppercase tracking-wider border-collapse">
              <thead>
                <tr className="border-b border-white/20 text-grey-400 h-12">
                  <th className="py-3 px-4 font-normal">Project</th>
                  <th className="py-3 px-4 font-normal hidden md:table-cell">Organization</th>
                  <th className="py-3 px-4 font-normal">Award / Honor</th>
                  <th className="py-3 px-4 font-normal text-right">Year</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10">
                {recognitions.map((r, i) => (
                  <tr key={i} className="hover:bg-white/5 transition-colors">
                    <td className="py-5 px-4 font-serif text-lg font-bold text-white lowercase capitalize">
                      {r.project}
                    </td>
                    <td className="py-5 px-4 text-grey-300 hidden md:table-cell">
                      {r.award}
                    </td>
                    <td className="py-5 px-4 text-accent font-semibold">
                      {r.accolade}
                    </td>
                    <td className="py-5 px-4 text-right text-grey-400 font-bold">
                      {r.year}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
}
