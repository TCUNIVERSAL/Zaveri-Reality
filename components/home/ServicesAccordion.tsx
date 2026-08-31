"use client";

import { useState } from "react";
import Image from "next/image";
import { services } from "@/data/services";

/**
 * ServicesAccordion — interactive service selector with polygon-masked image.
 * Client component — requires activeServiceIndex state.
 */
export default function ServicesAccordion() {
  const [activeServiceIndex, setActiveServiceIndex] = useState(0);

  return (
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
                    isActive
                      ? "opacity-100 pl-2"
                      : "opacity-45 hover:opacity-80"
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
                          <div
                            key={feat}
                            className="flex items-center gap-2 font-mono text-[11px] text-accent"
                          >
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
  );
}
