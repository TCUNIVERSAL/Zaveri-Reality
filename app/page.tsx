import HeroTimeline from "@/components/home/HeroTimeline";
import PracticeSection from "@/components/home/PracticeSection";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import CoreValues from "@/components/home/CoreValues";
import ServicesAccordion from "@/components/home/ServicesAccordion";
import InquireCTA from "@/components/home/InquireCTA";

/**
 * HomePage — orchestrates all homepage sections.
 * Server component at the top level; interactive sections
 * are client components imported above.
 */
export default function HomePage() {
  return (
    <div className="w-full relative bg-[#080b12] text-white">
      {/* Cinematic 3D Scroll Experience (client) */}
      <HeroTimeline />

      {/* Grounded Editorial Sections (mix of server & client components) */}
      <div className="relative z-20 bg-bgColor text-contentColor border-t border-contentColor/15">
        <PracticeSection />
        <FeaturedProjects />
        <CoreValues />
        <ServicesAccordion />
        <InquireCTA />
      </div>
    </div>
  );
}
