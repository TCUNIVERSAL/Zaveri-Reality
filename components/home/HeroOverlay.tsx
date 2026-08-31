"use client";

import { motion } from "framer-motion";
import CubeButton from "@/components/ui/CubeButton";
import RollLink from "@/components/ui/RollLink";
import { companyDetails } from "@/data/services";
import { ArrowDown, MessageSquare, Phone } from "lucide-react";

interface CinematicOverlayProps {
  currentScene: number; // 1 to 6
  onJumpToScene: (progress: number) => void;
}

export default function HeroOverlay({ currentScene, onJumpToScene }: CinematicOverlayProps) {
  const scenes = [
    { num: "01", title: "Arrival", targetProgress: 0.0 },
    { num: "02", title: "Colonnade", targetProgress: 0.20 },
    { num: "03", title: "Sanctuary", targetProgress: 0.38 },
    { num: "04", title: "Azure Oasis", targetProgress: 0.58 },
    { num: "05", title: "Woodland", targetProgress: 0.76 },
    { num: "06", title: "Inquire", targetProgress: 0.95 },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none z-10 flex flex-col justify-between p-4 lg:p-8 overflow-hidden">
      {/* Spacer to prevent any top overlap with the fixed navbar */}
      <div className="w-full h-16 lg:h-20" aria-hidden="true" />

      {/* CENTER STAGE CHOREOGRAPHY (DYNAMIC TYPOGRAPHY & SCENE NARRATIVE) */}
      <div className="my-auto max-w-6xl mx-auto w-full">
        {/* SCENE 1: THE ARRIVAL */}
        {currentScene === 1 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center text-white space-y-6"
          >
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-accent block">
              A Cinematic Architectural Experience
            </span>
            <h1 className="font-serif font-bold text-6xl sm:text-8xl lg:text-9xl uppercase tracking-tight leading-[0.9] text-white select-none" style={{ textShadow: '0 4px 30px rgba(0,0,0,0.8), 0 0 60px rgba(0,0,0,0.5)' }}>
              Zaveri Realty
            </h1>
            <p className="font-serif italic text-xl sm:text-3xl text-white/90 max-w-2xl mx-auto" style={{ textShadow: '0 2px 20px rgba(0,0,0,0.7)' }}>
              &ldquo;The Signature of luxury living&rdquo;
            </p>
          </motion.div>
        )}

        {/* SCENE 2: THE COLONNADE OF BARSANA */}
        {currentScene === 2 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center text-white"
          >
            <div className="lg:col-span-8 space-y-4">
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-accent block">
                Scene 02 • Master-Planned Enclave
              </span>
              <h2 className="font-serif font-bold text-4xl sm:text-7xl uppercase tracking-tight leading-none text-white">
                Barsana Gates
              </h2>
              <p className="font-sans text-lg sm:text-2xl text-grey-200 max-w-xl leading-relaxed">
                Step through grand classical archways into 92 luxury villa plots engineered with earthquake-resistant foundations and 100% solar renewable energy.
              </p>
              <div className="pt-2 pointer-events-auto flex items-center gap-4">
                <CubeButton href="/work/barsana" label="Explore Barsana" ariaLabel="Explore Barsana Villa Enclave" />
              </div>
            </div>
            <div className="lg:col-span-4 hidden lg:block p-6 bg-black/60 backdrop-blur-xl rounded-sm border border-white/15 font-mono text-xs space-y-3">
              <div className="text-accent uppercase tracking-widest font-bold">Key Highlights:</div>
              <div className="text-white">• 92 Luxury Plots & Villas</div>
              <div className="text-white">• 100% Solar Energy Grid</div>
              <div className="text-white">• Golf Cart Transit to D-Mart</div>
            </div>
          </motion.div>
        )}

        {/* SCENE 3: THE SACRED TEMPLE & GROVE */}
        {currentScene === 3 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center text-white space-y-6 max-w-3xl mx-auto"
          >
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-accent block">
              Scene 03 • Sacred Devotion
            </span>
            <h2 className="font-serif font-bold text-4xl sm:text-7xl uppercase tracking-tight leading-none text-white">
              The Divine Temple
            </h2>
            <p className="font-serif italic text-xl sm:text-2xl text-grey-200 leading-relaxed">
              &ldquo;Where tranquility meets architectural reverence.&rdquo;
            </p>
            <p className="font-sans text-base sm:text-lg text-grey-300 leading-relaxed">
              Carved in pristine stone, surrounded by flowering lily ponds, wooden bridges, and 4 large gazebos with campfire seating for tranquil family gatherings.
            </p>
            <div className="pt-2 pointer-events-auto flex justify-center">
              <CubeButton href="/work/barsana" label="View Temple Grounds" ariaLabel="View Temple Grounds" />
            </div>
          </motion.div>
        )}

        {/* SCENE 4: THE CLUBHOUSE & AZURE POOL */}
        {currentScene === 4 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center text-white"
          >
            <div className="lg:col-span-8 space-y-4">
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-accent block">
                Scene 04 • Leisure & Wellness
              </span>
              <h2 className="font-serif font-bold text-4xl sm:text-7xl uppercase tracking-tight leading-none text-white">
                The Clubhouse Oasis
              </h2>
              <p className="font-sans text-lg sm:text-2xl text-grey-200 max-w-xl leading-relaxed">
                Over 10,000+ sq.ft of recreation featuring an expansive banquet hall, modern fitness gymnasium, billiards lounge, and sunlit azure swimming pool.
              </p>
              <div className="pt-2 pointer-events-auto flex items-center gap-4">
                <CubeButton href="/work/barsana" label="View Club Amenities" ariaLabel="View Club Amenities" />
              </div>
            </div>
            <div className="lg:col-span-4 hidden lg:block p-6 bg-black/60 backdrop-blur-xl rounded-sm border border-white/15 font-mono text-xs space-y-3">
              <div className="text-accent uppercase tracking-widest font-bold">Club Features:</div>
              <div className="text-white">• Adult & Kids Swimming Pool</div>
              <div className="text-white">• Grand Banquet & Party Lawn</div>
              <div className="text-white">• Billiards, Table Tennis & Games</div>
            </div>
          </motion.div>
        )}

        {/* SCENE 5: THE WOODLAND VILLA */}
        {currentScene === 5 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center text-white space-y-6 max-w-3xl mx-auto"
          >
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-accent block">
              Scene 05 • Upcoming Edition
            </span>
            <h2 className="font-serif font-bold text-4xl sm:text-7xl uppercase tracking-tight leading-none text-white">
              The Woodland Villa
            </h2>
            <p className="font-sans text-lg sm:text-2xl text-grey-200 leading-relaxed">
              A private forest sanctuary of 24 bespoke residences with double-height glass pavilions, private heated plunge pools, and organic orchards.
            </p>
            <div className="pt-2 pointer-events-auto flex justify-center gap-4">
              <CubeButton href="/work/the-woodland-villa" label="Priority Waitlist" ariaLabel="Join Priority Waitlist" />
            </div>
          </motion.div>
        )}

        {/* SCENE 6: THE HORIZON & DIRECT INQUIRY */}
        {currentScene === 6 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-black/85 backdrop-blur-2xl p-8 sm:p-12 rounded-sm border border-white/20 text-white max-w-3xl mx-auto text-center space-y-6 shadow-2xl pointer-events-auto"
          >
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-accent font-bold block">
              Scene 06 • Direct Inquiries
            </span>
            <h2 className="font-serif font-bold text-4xl sm:text-6xl uppercase tracking-tight text-white">
              Begin Your Journey
            </h2>
            <p className="font-sans text-base sm:text-lg text-grey-300 max-w-xl mx-auto leading-relaxed">
              Connect directly with our leadership team for private villa bookings at Barsana, property acquisition, or site visits in Bhuj.
            </p>

            {/* Direct Telephone Lines */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left font-mono text-xs pt-4 border-t border-white/10">
              <div className="p-4 bg-white/5 rounded-sm border border-white/10">
                <span className="text-accent uppercase tracking-wider block mb-1">Bhavy Zaveri</span>
                <a href={`tel:${companyDetails.phoneBhavy}`} className="text-white font-bold hover:text-accent text-sm flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-accent" />
                  <span>{companyDetails.phoneBhavy}</span>
                </a>
              </div>
              <div className="p-4 bg-white/5 rounded-sm border border-white/10">
                <span className="text-accent uppercase tracking-wider block mb-1">Rajesh Zaveri</span>
                <a href={`tel:${companyDetails.phoneRajesh}`} className="text-white font-bold hover:text-accent text-sm flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-accent" />
                  <span>{companyDetails.phoneRajesh}</span>
                </a>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <CubeButton href="/contact" label="Inquire Online" ariaLabel="Contact Zaveri Realty Group" />
              <a
                href={companyDetails.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-accent/20 hover:bg-accent/30 text-accent border border-accent/40 font-mono text-xs uppercase tracking-widest font-semibold rounded-sm transition-colors flex items-center gap-2"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp Desk</span>
              </a>
            </div>
          </motion.div>
        )}
      </div>

      {/* SCROLL DOWN TO ENTER THE WORLD PILL */}
      {currentScene === 1 && (
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mx-auto mb-3 pointer-events-auto"
        >
          <button
            type="button"
            onClick={() => onJumpToScene(0.20)}
            className="px-6 py-2.5 bg-black/90 hover:bg-black text-white rounded-full border border-white/30 shadow-2xl backdrop-blur-xl font-mono text-[11px] uppercase tracking-[0.2em] flex items-center gap-2.5 transition-all hover:scale-105 group"
            aria-label="Scroll down to enter the world"
          >
            <ArrowDown className="w-3.5 h-3.5 text-accent animate-bounce" />
            <span className="text-white/90 font-semibold group-hover:text-accent">Scroll down to enter the world</span>
          </button>
        </motion.div>
      )}

      {/* BOTTOM CINEMATIC TIMELINE SCRUB BAR */}
      <div className="pointer-events-auto flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-white/15 pb-4">
        {/* Chapter Scrub Buttons with Active Status Indicator */}
        <div className="flex items-center gap-2 sm:gap-4 overflow-x-auto max-w-full" role="tablist" aria-label="Cinematic Timeline Chapters">
          <div className="flex items-center gap-2 pr-2 border-r border-white/15 font-mono text-[11px] text-accent font-bold uppercase tracking-wider">
            <div className="w-2 h-2 bg-accent rounded-full animate-ping" />
            <span>0{currentScene}/06</span>
          </div>

          {scenes.map((s, index) => {
            const isActive = currentScene === index + 1;
            return (
              <button
                key={s.num}
                type="button"
                role="tab"
                aria-selected={isActive}
                aria-label={`Jump to Scene ${s.num}: ${s.title}`}
                onClick={() => onJumpToScene(s.targetProgress)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-sm font-mono text-[11px] uppercase tracking-wider transition-all ${
                  isActive
                    ? "bg-accent text-black font-bold shadow-lg"
                    : "bg-black/40 text-white/70 hover:text-white hover:bg-black/60 border border-white/10"
                }`}
              >
                <span className="opacity-60">{s.num}</span>
                <span className="hidden sm:inline-block">{s.title}</span>
              </button>
            );
          })}
        </div>

        {/* Explore Full Site Direct Link */}
        <div className="flex items-center gap-4 font-mono text-xs">
          <RollLink href="/works" className="text-white hover:text-accent font-bold uppercase tracking-wider">
            All Works & Portfolio →
          </RollLink>
        </div>
      </div>
    </div>
  );
}
