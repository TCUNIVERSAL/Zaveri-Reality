import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import CubeButton from "@/components/CubeButton";
import { projects } from "@/data/projects";
import { companyDetails } from "@/data/services";

interface ProjectPageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return projects.map((p) => ({
    slug: p.slug,
  }));
}

export default function GenericProjectPage({ params }: ProjectPageProps) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  // Find next project
  const currentIndex = projects.findIndex((p) => p.id === project.id);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  return (
    <div className="w-full bg-bgColor text-contentColor">
      {/* Project Hero */}
      <section className="relative w-full min-h-[85vh] flex flex-col justify-end pt-28 pb-16 px-4 lg:px-8 bg-[#0e1118] text-white">
        <div className="absolute inset-0 z-0">
          <Image
            src={project.heroImage}
            alt={project.title}
            fill
            priority
            sizes="100vw"
            className="object-cover object-center brightness-75 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0e1118] via-black/30 to-black/50" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-accent mb-6">
            <Link href="/works" className="hover:underline">
              Portfolio
            </Link>
            <span>/</span>
            <span>{project.category}</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-8">
              <h1 className="font-serif font-bold text-5xl sm:text-7xl lg:text-8xl uppercase tracking-tight leading-none text-white">
                {project.title}
              </h1>
              <p className="font-serif italic text-lg sm:text-xl text-accent mt-3">
                &ldquo;{project.subtitle}&rdquo;
              </p>
            </div>

            <div className="lg:col-span-4 bg-black/60 backdrop-blur-md p-6 rounded-sm border border-white/15 font-mono text-xs">
              <div className="flex items-center justify-between py-2 border-b border-white/10">
                <span className="text-grey-400">Location:</span>
                <span className="text-white font-semibold">{project.location}</span>
              </div>
              <div className="flex items-center justify-between py-2 border-b border-white/10">
                <span className="text-grey-400">Year:</span>
                <span className="text-white font-semibold">{project.year}</span>
              </div>
              <div className="flex items-center justify-between py-2">
                <span className="text-grey-400">Status:</span>
                <span className="text-accent font-bold">{project.status}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Narrative Section */}
      <section className="py-24 lg:py-32 px-4 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-accent rotate-45" />
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-grey-800">
                About the Development
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl font-medium leading-tight text-contentColor">
              {project.description}
            </h2>
            <p className="font-sans text-grey-700 text-base sm:text-lg leading-relaxed">
              {project.longDescription}
            </p>
            <div className="pt-4">
              <CubeButton
                href={`https://wa.me/918009318009?text=Hello%20Zaveri%20Realty,%20I%20want%20to%20inquire%20about%20${encodeURIComponent(project.title)}.`}
                label="Inquire About Property"
                ariaLabel={`Inquire about ${project.title}`}
              />
            </div>
          </div>

          <div className="lg:col-span-6 relative aspect-[4/3] rounded-sm overflow-hidden shadow-2xl">
            <Image
              src={project.galleryImages[0] || project.heroImage}
              alt={project.title}
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      {project.galleryImages.length > 1 && (
        <section className="py-20 bg-[#0f121a] text-white px-4 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h3 className="font-serif text-3xl sm:text-4xl font-bold uppercase mb-12 text-center">
              Visual Documentation
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {project.galleryImages.slice(1).map((img, idx) => (
                <div key={idx} className="relative aspect-[4/3] rounded-sm overflow-hidden shadow-lg group">
                  <Image
                    src={img}
                    alt={`${project.title} gallery photo ${idx + 1}`}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Next Project Footer Transition */}
      <section className="bg-black text-white py-20 px-4 lg:px-8 text-center border-t border-white/10">
        <div className="max-w-4xl mx-auto space-y-4">
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-accent">
            Next Project
          </span>
          <h2 className="font-serif text-4xl font-bold uppercase">
            {nextProject.title}
          </h2>
          <div className="pt-2 flex justify-center">
            <CubeButton
              href={`/work/${nextProject.slug}`}
              label="View Next Project"
              ariaLabel={`View next project ${nextProject.title}`}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
