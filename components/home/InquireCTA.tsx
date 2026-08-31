import { Phone } from "lucide-react";
import CubeButton from "@/components/ui/CubeButton";
import { companyDetails } from "@/data/services";

/**
 * InquireCTA — bottom call-to-action section with contact links.
 * Server component — no client interactivity needed.
 */
export default function InquireCTA() {
  return (
    <section className="py-24 px-4 lg:px-8 max-w-4xl mx-auto text-center">
      <span className="font-mono text-xs uppercase tracking-[0.25em] text-accent font-semibold block mb-3">
        Direct Inquiries
      </span>
      <h2 className="font-serif text-4xl sm:text-6xl font-bold uppercase text-contentColor mb-6">
        Inquire With Zaveri Realty
      </h2>
      <p className="font-sans text-grey-700 text-base sm:text-lg max-w-xl mx-auto mb-10 leading-relaxed">
        Schedule a private walkthrough at Barsana or speak directly with Bhavy
        Zaveri &amp; Rajesh Zaveri.
      </p>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <CubeButton
          href="/contact"
          label="Open Contact Form"
          ariaLabel="Open Contact Form"
        />
        <a
          href={`tel:${companyDetails.phonePrimary}`}
          className="px-6 py-3 rounded-sm bg-black/5 hover:bg-black/10 border border-black/20 font-mono text-xs uppercase tracking-wider font-semibold text-contentColor transition-colors flex items-center gap-2"
        >
          <Phone className="w-3.5 h-3.5" />
          <span>Call {companyDetails.phonePrimary}</span>
        </a>
      </div>
    </section>
  );
}
