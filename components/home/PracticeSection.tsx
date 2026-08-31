import Image from "next/image";
import CubeButton from "@/components/ui/CubeButton";

/**
 * PracticeSection — "The Practice" manifesto introducing Zaveri Realty.
 * Server component — no client interactivity needed.
 */
export default function PracticeSection() {
  return (
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
            Zaveri Realty Group crafts landmark luxury residences and sacred
            master-planned villa communities.
          </h2>
          <p className="font-sans text-lg sm:text-xl text-grey-700 leading-relaxed">
            We believe architecture should be honest to its materials and true
            to its place. Under one roof, our team guides land acquisition,
            architectural proportion, sustainable green engineering, and lifetime
            asset care across Kutch and Gujarat.
          </p>
          <div className="pt-4 flex flex-wrap gap-4">
            <CubeButton
              href="/works"
              label="Explore All Works"
              ariaLabel="Explore All Works"
            />
            <CubeButton
              href="/studio"
              label="Our Studio"
              ariaLabel="Learn about our studio"
            />
          </div>
        </div>

        <div className="lg:col-span-5 relative aspect-[4/5] rounded-sm overflow-hidden shadow-2xl">
          <Image
            src="/images/projects/barsana/barsana-03.jpg"
            alt="Zaveri Realty Architectural Monument"
            fill
            sizes="(min-width: 1024px) 45vw, 100vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
