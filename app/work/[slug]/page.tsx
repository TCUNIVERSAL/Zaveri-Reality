import OptimizedImage from "@/components/ui/OptimizedImage";
import Link from "next/link";
import { notFound } from "next/navigation";
import CubeButton from "@/components/ui/CubeButton";
import RollLink from "@/components/ui/RollLink";
import { projects } from "@/data/projects";
import { companyDetails } from "@/data/services";
import { ArrowLeft, CheckCircle2, Phone, MessageSquare, MapPin, Calendar, Building, Sparkles } from "lucide-react";

interface ProjectPageProps {
  params: {
    slug: string;
  };
}

// Slugs that have dedicated bespoke pages
const DEDICATED_SLUGS = ["barsana", "the-woodland-villa"];

export function generateStaticParams() {
  return projects
    .filter((p) => !DEDICATED_SLUGS.includes(p.slug))
    .map((p) => ({
      slug: p.slug,
    }));
}

export default function GenericProjectPage({ params }: ProjectPageProps) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  // Find next project in circular list
  const currentIndex = projects.findIndex((p) => p.id === project.id);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  return (
    <div className="w-full bg-bgColor text-contentColor">
      {/* 1. PROJECT HERO */}
      <section className="relative w-full min-h-[90vh] flex flex-col justify-end pt-32 pb-16 px-4 lg:px-8 bg-[#090e18] text-white">
        <div className="absolute inset-0 z-0">
          <OptimizedImage
            src={project.heroImage}
            alt={project.title}
            fill
            priority
            sizes="100vw"
            className="object-cover object-center brightness-75 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#090e18] via-black/40 to-black/60" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto w-full">
          {/* Breadcrumb Navigation Trail */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-grey-300 mb-6">
            <Link href="/" className="hover:text-accent transition-colors">
              Home
            </Link>
            <span className="text-grey-500">/</span>
            <Link href="/works" className="hover:text-accent transition-colors">
              Works
            </Link>
            <span className="text-grey-500">/</span>
            <span className="text-accent font-bold">{project.title}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-8 space-y-4">
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-accent block font-semibold">
                {project.category} • {project.location}
              </span>
              <h1 className="font-serif font-bold text-5xl sm:text-7xl lg:text-8xl uppercase tracking-tight leading-[0.95] text-white">
                {project.title}
              </h1>
              <p className="font-serif italic text-lg sm:text-2xl text-grey-200">
                &ldquo;{project.subtitle}&rdquo;
              </p>
            </div>

            {/* Quick Specs Pill */}
            <div className="lg:col-span-4 bg-black/75 backdrop-blur-xl p-6 rounded-sm border border-white/15 font-mono text-xs space-y-3 shadow-2xl">
              <div className="flex items-center justify-between py-1.5 border-b border-white/10">
                <span className="text-grey-400 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-accent" /> Location:
                </span>
                <span className="text-white font-semibold">{project.location}</span>
              </div>
              <div className="flex items-center justify-between py-1.5 border-b border-white/10">
                <span className="text-grey-400 flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-accent" /> Year:
                </span>
                <span className="text-white font-semibold">{project.year}</span>
              </div>
              <div className="flex items-center justify-between py-1.5">
                <span className="text-grey-400 flex items-center gap-1.5">
                  <Building className="w-3.5 h-3.5 text-accent" /> Status:
                </span>
                <span className="text-accent font-bold uppercase">{project.status}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. OVERVIEW & INQUIRY BAR */}
      <section className="py-20 lg:py-28 px-4 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-accent rotate-45" />
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-grey-800 font-semibold">
                About the Estate
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl font-medium leading-tight text-contentColor">
              {project.description}
            </h2>
            <p className="font-sans text-grey-700 text-base sm:text-lg leading-relaxed">
              {project.longDescription}
            </p>

            {/* Inquire Direct CTA Button Group */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <CubeButton
                href={`https://wa.me/918009318009?text=Hello%20Zaveri%20Realty,%20I%20want%20to%20inquire%20about%20${encodeURIComponent(project.title)}.`}
                label="WhatsApp Inquiry"
                ariaLabel={`Inquire about ${project.title} on WhatsApp`}
              />
              <a
                href={`tel:${companyDetails.phonePrimary}`}
                className="px-6 py-3 rounded-sm bg-black/5 hover:bg-black/10 border border-black/20 font-mono text-xs uppercase tracking-wider font-semibold text-contentColor transition-colors flex items-center gap-2"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call {companyDetails.phonePrimary}</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-6 relative aspect-[4/3] rounded-sm overflow-hidden shadow-2xl">
            <OptimizedImage
              src={project.galleryImages[0] || project.heroImage}
              alt={project.title}
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* 3. AMENITIES & FEATURES */}
      {project.amenities && project.amenities.length > 0 && (
        <section className="py-20 bg-sand px-4 lg:px-8 border-y border-contentColor/10">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-2 mb-3">
              <Sparkles className="w-4 h-4 text-accent" />
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-grey-800 font-semibold">
                Highlights & Inclusions
              </span>
            </div>
            <h3 className="font-serif text-3xl sm:text-5xl font-bold uppercase mb-12 text-contentColor">
              Community Amenities
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {project.amenities.map((amenity, idx) => (
                <div key={idx} className="p-6 bg-white rounded-sm border border-contentColor/10 flex items-start gap-4 shadow-sm">
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="font-sans text-sm sm:text-base text-contentColor font-medium leading-relaxed">
                    {amenity}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 4. GALLERY SHOWCASE */}
      {project.galleryImages.length > 1 && (
        <section className="py-24 bg-[#090e18] text-white px-4 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16 space-y-3">
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-accent font-semibold">
                Visual Documentation
              </span>
              <h3 className="font-serif text-4xl sm:text-6xl font-bold uppercase">
                Architectural Imagery
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {project.galleryImages.map((img, idx) => (
                <div key={idx} className="relative aspect-[4/3] rounded-sm overflow-hidden shadow-xl group bg-black">
                  <OptimizedImage
                    src={img}
                    alt={`${project.title} gallery view ${idx + 1}`}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out brightness-90 group-hover:brightness-100"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 5. NEXT PROJECT SEAMLESS FOOTER TRANSITION */}
      <section className="bg-black text-white py-24 px-4 lg:px-8 text-center border-t border-white/10">
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="flex items-center justify-center gap-4">
            <Link
              href="/works"
              className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-grey-400 hover:text-accent transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to All Works</span>
            </Link>
          </div>

          <div className="pt-4 space-y-2">
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-accent font-semibold block">
              Next in Portfolio
            </span>
            <h2 className="font-serif text-4xl sm:text-6xl font-bold uppercase tracking-tight">
              {nextProject.title}
            </h2>
            <p className="font-sans text-grey-400 text-sm max-w-md mx-auto">
              {nextProject.subtitle}
            </p>
          </div>

          <div className="pt-4 flex justify-center">
            <CubeButton
              href={`/work/${nextProject.slug}`}
              label={`View ${nextProject.title}`}
              ariaLabel={`View next project ${nextProject.title}`}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
