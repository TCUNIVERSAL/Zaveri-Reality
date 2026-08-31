import Image from "next/image";
import CubeButton from "@/components/ui/CubeButton";
import RollLink from "@/components/ui/RollLink";
import { projects } from "@/data/projects";

/**
 * FeaturedProjects — Barsana & Woodland Villa showcase cards.
 * Server component — no client interactivity needed.
 */
export default function FeaturedProjects() {
  return (
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
              src="/images/projects/barsana/barsana-02.jpg"
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
              92 exclusive plots &amp; villas, majestic 10,000+ sq.ft clubhouse,
              swimming pool, sacred marble temple, 100% solar energy, and
              dedicated golf cart transport to D-Mart.
            </p>
            <div className="pt-2 flex items-center gap-4">
              <CubeButton
                href="/work/barsana"
                label="View Barsana Experience"
                ariaLabel="View Barsana Project Details"
              />
            </div>
          </div>
        </article>

        {/* Project 2: The Woodland Villa Card */}
        <article className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-7 lg:order-2 relative aspect-[16/9] rounded-sm overflow-hidden shadow-2xl group">
            <Image
              src="/images/projects/barsana/barsana-18.jpg"
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
              24 limited-edition woodland retreats featuring private heated
              plunge pools, double-height glass pavilions, and organic spice
              orchards.
            </p>
            <div className="pt-2 flex items-center gap-4">
              <CubeButton
                href="/work/the-woodland-villa"
                label="Join Pre-Launch Waitlist"
                ariaLabel="Join Waitlist for The Woodland Villa"
              />
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
