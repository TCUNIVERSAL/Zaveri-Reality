import Link from "next/link";
import { companyDetails } from "@/data/services";

export default function LegalPage() {
  return (
    <div className="w-full bg-bgColor text-contentColor pt-28 pb-32 px-4 lg:px-8 max-w-5xl mx-auto">
      <div className="flex items-center gap-2 mb-4">
        <div className="w-1.5 h-1.5 bg-accent rotate-45" />
        <span className="font-mono text-xs uppercase tracking-[0.2em] text-grey-800">
          Legal & Compliance
        </span>
      </div>

      <h1 className="font-serif font-bold text-4xl sm:text-6xl uppercase tracking-tight text-contentColor mb-8">
        Legal Disclosures & Policy
      </h1>

      <div className="space-y-8 font-sans text-sm sm:text-base text-grey-800 leading-relaxed">
        <section className="space-y-3">
          <h2 className="font-serif text-2xl font-bold text-contentColor">
            1. Statutory Real Estate Disclosures
          </h2>
          <p>
            Stamp duty, registration fees, legal documentation charges, GST, municipal service charges (including water, PGVCL charges, drainage, and maintenance deposits) are applicable as per governmental norms and shall be borne by the purchaser.
          </p>
          <p>
            Any additional levies or taxes introduced by governmental or local municipal authorities during or post completion of the scheme shall be payable by the purchaser. Dimensions and areas shown in marketing materials and layout plans are approximate.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-serif text-2xl font-bold text-contentColor">
            2. Architectural & Plan Modifications
          </h2>
          <p>
            The developer reserves the unconditional right to modify, revise, or make alterations in the layout, elevations, landscaping, specifications, or scheme details as a whole or in part at its sole discretion for overall project enhancement or regulatory compliance.
          </p>
          <p>
            Marketing brochures, artistic renderings, and visual walkthroughs are strictly for illustrative intent and do not constitute a legal contract or warranty. Subject to Bhuj jurisdiction.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-serif text-2xl font-bold text-contentColor">
            3. Privacy & Data Handling
          </h2>
          <p>
            Zaveri Realty Group respects your privacy. Any personal contact information submitted through this website, WhatsApp, or phone inquiries is strictly utilized by our internal executive team to respond to your real estate requirements and is never sold to third parties.
          </p>
        </section>

        <section className="space-y-3 pt-6 border-t border-contentColor/15 font-mono text-xs text-grey-600">
          <p>
            Direct Inquiries: <a href={`tel:${companyDetails.phonePrimary}`} className="text-black font-bold">{companyDetails.phonePrimary}</a> | Bhavy Zaveri: <a href={`tel:${companyDetails.phoneBhavy}`} className="text-black font-bold">{companyDetails.phoneBhavy}</a> | Rajesh Zaveri: <a href={`tel:${companyDetails.phoneRajesh}`} className="text-black font-bold">{companyDetails.phoneRajesh}</a>
          </p>
          <p>
            Office Address: {companyDetails.address}
          </p>
        </section>
      </div>
    </div>
  );
}
