"use client";

import { useState } from "react";
import Image from "next/image";

const values = [
  {
    title: "Longevity",
    desc: "We build homes to outlast trends, with honest materials, earthquake-resistant engineering, and spaces that flourish through generations.",
    image: "/images/projects/barsana/barsana-02.jpg",
  },
  {
    title: "Sanctuary",
    desc: "Integrating sacred devotion, lush botanical party lawns, tranquil lily ponds, and private gazebos into the fabric of daily living.",
    image: "/images/projects/barsana/barsana-09.jpg",
  },
  {
    title: "Blessings",
    desc: "Every community is founded on positive energy, 100% renewable solar power, and a lifelong commitment to the families who call it home.",
    image: "/images/projects/barsana/barsana-07.jpg",
  },
];

/**
 * CoreValues — interactive value selector with image reveal.
 * Client component — requires activeValueIndex state.
 */
export default function CoreValues() {
  const [activeValueIndex, setActiveValueIndex] = useState(0);

  return (
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
  );
}
