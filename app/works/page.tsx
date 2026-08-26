"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { LayoutGrid, List as ListIcon, ArrowUpRight } from "lucide-react";
import { projects, Project } from "@/data/projects";

const categories = ["All", "Luxury Villa", "Residential", "Upcoming"];

export default function WorksPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  const filteredProjects = selectedCategory === "All"
    ? projects
    : projects.filter((p) => p.category === selectedCategory);

  return (
    <div className="w-full pt-28 pb-32 px-4 lg:px-8 max-w-7xl mx-auto">
      {/* Page Header */}
      <div className="flex flex-col items-center text-center mb-16">
        <div className="flex items-center gap-2 mb-3">
          <div className="w-1.5 h-1.5 bg-accent rotate-45" />
          <h1 className="font-mono text-xs uppercase tracking-[0.2em] text-grey-800">
            Our Works
          </h1>
        </div>
        <p className="font-serif text-3xl sm:text-5xl font-medium leading-tight max-w-2xl text-contentColor">
          A collection of bespoke gated villa communities & residences designed with enduring intent.
        </p>
      </div>

      {/* Controls Bar: Category Filters & View Toggle */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pb-8 border-b border-contentColor/15 mb-12">
        {/* Category Filters */}
        <div className="flex items-center flex-wrap gap-2" role="tablist" aria-label="Project Category Filter">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                role="tab"
                aria-selected={isActive}
                aria-pressed={isActive}
                onClick={() => setSelectedCategory(cat)}
                className={`font-mono text-xs uppercase tracking-wider px-5 py-2.5 rounded-sm transition-all duration-200 border ${
                  isActive
                    ? "bg-black text-white border-black font-bold shadow-sm"
                    : "bg-transparent text-grey-800 border-contentColor/20 hover:border-black"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Grid vs List View Switcher */}
        <div className="flex items-center gap-1 bg-black/5 p-1 rounded-sm border border-contentColor/10">
          <button
            type="button"
            onClick={() => setViewMode("grid")}
            aria-label="Switch to Grid View"
            aria-pressed={viewMode === "grid"}
            className={`flex items-center gap-2 px-3 py-1.5 rounded-sm font-mono text-xs uppercase tracking-wider transition-colors ${
              viewMode === "grid"
                ? "bg-black text-white font-bold"
                : "text-grey-700 hover:text-black"
            }`}
          >
            <LayoutGrid className="w-3.5 h-3.5" />
            <span>Grid</span>
          </button>
          <button
            type="button"
            onClick={() => setViewMode("list")}
            aria-label="Switch to List View"
            aria-pressed={viewMode === "list"}
            className={`flex items-center gap-2 px-3 py-1.5 rounded-sm font-mono text-xs uppercase tracking-wider transition-colors ${
              viewMode === "list"
                ? "bg-black text-white font-bold"
                : "text-grey-700 hover:text-black"
            }`}
          >
            <ListIcon className="w-3.5 h-3.5" />
            <span>List</span>
          </button>
        </div>
      </div>

      {/* GRID VIEW */}
      {viewMode === "grid" && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">
          {filteredProjects.map((project) => (
            <article key={project.id} className="group flex flex-col gap-3">
              <Link
                href={`/work/${project.slug}`}
                className="block relative aspect-[4/3] rounded-sm overflow-hidden bg-black/10 shadow-md focus:outline-none focus:ring-2 focus:ring-accent"
              >
                <Image
                  src={project.heroImage}
                  alt={project.title}
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors" />
                <div className="absolute top-4 left-4 font-mono text-[10px] uppercase tracking-wider bg-black/75 backdrop-blur-md px-3 py-1 text-white rounded-sm">
                  {project.category}
                </div>
                {project.status === "Upcoming" && (
                  <div className="absolute top-4 right-4 font-mono text-[10px] uppercase tracking-wider bg-accent text-black font-bold px-3 py-1 rounded-sm">
                    Upcoming
                  </div>
                )}
              </Link>

              {/* Title & Metadata */}
              <div className="flex items-baseline justify-between pt-2">
                <div>
                  <h2 className="font-serif text-2xl font-bold uppercase tracking-tight text-contentColor group-hover:text-accent transition-colors">
                    <Link href={`/work/${project.slug}`}>
                      {project.title}
                    </Link>
                  </h2>
                  <p className="font-mono text-xs text-grey-600 uppercase tracking-wider mt-0.5">
                    {project.location}
                  </p>
                </div>
                <div className="flex items-center gap-2 font-mono text-xs text-grey-700">
                  <span>{project.year}</span>
                  <Link
                    href={`/work/${project.slug}`}
                    className="w-7 h-7 rounded-full bg-black/5 group-hover:bg-black group-hover:text-white flex items-center justify-center transition-colors"
                    aria-label={`View details for ${project.title}`}
                  >
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      )}

      {/* LIST VIEW */}
      {viewMode === "list" && (
        <div className="w-full overflow-x-auto">
          <table className="w-full text-left font-mono text-xs uppercase tracking-wider border-collapse">
            <thead>
              <tr className="border-b border-contentColor/20 text-grey-600 h-12">
                <th className="py-3 px-4 font-normal">Project</th>
                <th className="py-3 px-4 font-normal hidden md:table-cell">Category</th>
                <th className="py-3 px-4 font-normal hidden sm:table-cell">Location</th>
                <th className="py-3 px-4 font-normal">Status</th>
                <th className="py-3 px-4 font-normal text-right">Year</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-contentColor/10">
              {filteredProjects.map((project) => (
                <tr
                  key={project.id}
                  className="group hover:bg-black/5 transition-colors cursor-pointer"
                >
                  <td className="py-5 px-4">
                    <Link
                      href={`/work/${project.slug}`}
                      className="font-serif text-lg font-bold lowercase capitalize text-contentColor group-hover:text-accent flex items-center gap-2"
                    >
                      <span>{project.title}</span>
                      <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  </td>
                  <td className="py-5 px-4 text-grey-700 hidden md:table-cell">
                    {project.category}
                  </td>
                  <td className="py-5 px-4 text-grey-700 hidden sm:table-cell">
                    {project.location}
                  </td>
                  <td className="py-5 px-4">
                    <span
                      className={`inline-block px-2.5 py-0.5 rounded-sm text-[10px] ${
                        project.status === "Upcoming"
                          ? "bg-accent/20 text-accent font-bold"
                          : "bg-black/10 text-grey-800"
                      }`}
                    >
                      {project.status}
                    </span>
                  </td>
                  <td className="py-5 px-4 text-right text-grey-700 font-semibold">
                    {project.year}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
