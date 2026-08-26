import Image from "next/image";
import CubeButton from "@/components/CubeButton";

export default function ApproachPage() {
  const steps = [
    {
      num: "[ 01 ]",
      title: "Consultation & Discovery",
      desc: "Every development starts with attentive listening. We understand how your family wants to live, what lifestyle amenities matter most, and your timeline and investment aspirations. From the first meeting, we align expectations with clear feasibility.",
    },
    {
      num: "[ 02 ]",
      title: "Site Selection & Master Planning",
      desc: "We analyze orientation, microclimates, road connectivity, and natural soil contours. For our gated enclaves like Barsana, master layout planning organizes privacy, broad central boulevards, children zones, and green recreational party lawns.",
    },
    {
      num: "[ 03 ]",
      title: "Architectural Craft & Space Planning",
      desc: "Classical proportion meets modern daylight optimization. We sculpt generous double-height ceilings, seamless courtyard connections, private balconies, and ergonomic kitchen workflows with meticulous scale models and 3D architectural renders.",
    },
    {
      num: "[ 04 ]",
      title: "Sustainable Systems & Solar Engineering",
      desc: "We engineer 100% renewable solar power systems, rainwater harvesting infrastructure, underground water drainage, and electric vehicle charging bays into the fabric of the community to ensure energy independence and minimal ecological footprint.",
    },
    {
      num: "[ 05 ]",
      title: "Legal Transparency & RERA Documentation",
      desc: "We provide complete title clarity, NA/NOC clearances, RERA compliant agreements, and transparent payment schedules. Every legal document is prepared with rigorous diligence to give purchasers absolute peace of mind.",
    },
    {
      num: "[ 06 ]",
      title: "Precision Construction & Civil QA",
      desc: "We stay hands-on on-site through every pour of earthquake-resistant RCC foundation, vitrified tile laying, double-glazed window installation, and water-resistant acrylic exterior plastering. Quality is verified at every milestone.",
    },
    {
      num: "[ 07 ]",
      title: "Handover & Lifetime Asset Care",
      desc: "This is the moment your keys are handed over. Beyond completion, Zaveri Realty Group continues to manage community amenities, clubhouse maintenance, golf cart transit, 24/7 security, and landscape care for years to come.",
    },
  ];

  return (
    <div className="w-full bg-bgColor text-contentColor">
      {/* Page Header */}
      <section className="pt-28 pb-16 px-4 lg:px-8 max-w-7xl mx-auto text-center">
        <div className="flex items-center justify-center gap-2 mb-4">
          <div className="w-1.5 h-1.5 bg-accent rotate-45" />
          <h1 className="font-mono text-xs uppercase tracking-[0.2em] text-grey-800">
            Our Approach
          </h1>
        </div>
        <p className="font-serif text-3xl sm:text-5xl lg:text-6xl font-medium leading-[1.15] max-w-4xl mx-auto text-contentColor">
          Development is never a solo craft. The best of it is cast from experience, integrity, and enduring relationships.
        </p>
      </section>

      {/* Hero Architectural Image */}
      <section className="px-4 lg:px-8 max-w-7xl mx-auto mb-24">
        <div className="relative aspect-[16/9] rounded-sm overflow-hidden shadow-2xl">
          <Image
            src="/assets/barsana/barsana-18.jpg"
            alt="Zaveri Realty Master Layout View"
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 px-4 lg:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-20">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-1.5 h-1.5 bg-accent rotate-45" />
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-grey-800">
                Step-by-Step
              </span>
            </div>
            <h2 className="font-serif text-4xl sm:text-6xl font-bold uppercase">
              The 7-Stage Process
            </h2>
          </div>
          <p className="font-sans text-grey-600 text-sm max-w-md">
            Our structured methodology for turning raw land and architectural visions into finished, thriving luxury communities.
          </p>
        </div>

        {/* 7 Process Cards */}
        <div className="flex flex-col divide-y divide-contentColor/15">
          {steps.map((step) => (
            <div
              key={step.num}
              className="py-12 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-start"
            >
              <div className="lg:col-span-2 font-mono text-xs uppercase tracking-widest text-accent font-bold">
                {step.num}
              </div>
              <div className="lg:col-span-4 font-serif text-2xl sm:text-3xl font-bold text-contentColor">
                {step.title}
              </div>
              <div className="lg:col-span-6 font-sans text-grey-700 text-base leading-relaxed">
                {step.desc}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-24 bg-sand text-center px-4 lg:px-8">
        <div className="max-w-3xl mx-auto space-y-6">
          <h3 className="font-serif text-3xl sm:text-5xl font-bold text-contentColor">
            Ready to build your family sanctuary?
          </h3>
          <p className="font-sans text-grey-700 text-base">
            Consult directly with our leadership team regarding available plots at Barsana or custom villa development.
          </p>
          <div className="pt-2 flex justify-center">
            <CubeButton href="/contact" label="Inquire Today" ariaLabel="Contact our advisory team" />
          </div>
        </div>
      </section>
    </div>
  );
}
