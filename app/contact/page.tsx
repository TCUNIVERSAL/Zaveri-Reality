"use client";

import { useState } from "react";
import OptimizedImage from "@/components/ui/OptimizedImage";
import { Phone, Mail, Instagram, MessageSquare, MapPin, Send, CheckCircle } from "lucide-react";
import CubeButton from "@/components/ui/CubeButton";
import RollLink from "@/components/ui/RollLink";
import { companyDetails } from "@/data/services";

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    phone: "",
    email: "",
    service: "Barsana Luxury Villa Plot",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate submission
    setIsSubmitted(true);
  };

  return (
    <div className="w-full bg-bgColor text-contentColor pt-28 pb-32 px-4 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Massive Studio Foundry Contact Headline */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-3">
            <div className="w-1.5 h-1.5 bg-accent rotate-45" />
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-grey-800">
              Get in Touch
            </span>
          </div>
          <h1 className="font-serif font-bold text-6xl sm:text-8xl lg:text-9xl uppercase tracking-tight leading-none text-contentColor">
            Contact
          </h1>
          <p className="font-serif italic text-lg sm:text-2xl text-grey-700 max-w-xl mx-auto mt-4">
            &ldquo;Every home we build begins with understanding.&rdquo;
          </p>
        </div>

        {/* Dual Floating Preview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20 max-w-4xl mx-auto">
          <div className="relative aspect-[4/3] rounded-sm overflow-hidden shadow-xl -rotate-1 hover:rotate-0 transition-transform duration-500">
            <OptimizedImage
              src="/images/projects/barsana/barsana-02.jpg"
              alt="Barsana Main Entrance"
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
            <div className="absolute bottom-4 left-4 font-mono text-xs uppercase bg-black/80 backdrop-blur-md px-3 py-1.5 text-white rounded-sm">
              Barsana Gated Enclave
            </div>
          </div>

          <div className="relative aspect-[4/3] rounded-sm overflow-hidden shadow-xl rotate-1 hover:rotate-0 transition-transform duration-500">
            <OptimizedImage
              src="/images/projects/barsana/barsana-09.jpg"
              alt="Barsana Sacred Temple"
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
            <div className="absolute bottom-4 left-4 font-mono text-xs uppercase bg-black/80 backdrop-blur-md px-3 py-1.5 text-white rounded-sm">
              Temple & Botanical Grounds
            </div>
          </div>
        </div>

        {/* Contact Information & Inquiry Form Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Direct Lines & Executive Directory */}
          <div className="lg:col-span-5 space-y-8 font-mono text-xs">
            <div className="p-8 bg-sand rounded-sm border border-contentColor/10 space-y-6">
              <h2 className="font-serif text-2xl font-bold uppercase text-contentColor tracking-tight">
                Executive Direct Directory
              </h2>

              <div className="space-y-4 pt-2 border-t border-contentColor/10">
                <div>
                  <span className="text-grey-600 block uppercase tracking-wider mb-1 text-[10px]">
                    Main Contact Center
                  </span>
                  <a
                    href={`tel:${companyDetails.phonePrimary}`}
                    className="font-serif text-2xl font-bold text-contentColor hover:text-accent flex items-center gap-2"
                  >
                    <Phone className="w-4 h-4 text-accent" />
                    <span>{companyDetails.phonePrimary}</span>
                  </a>
                </div>

                <div className="pt-2 border-t border-contentColor/10">
                  <span className="text-grey-600 block uppercase tracking-wider mb-1 text-[10px]">
                    Bhavy Zaveri (Director of Development)
                  </span>
                  <a
                    href={`tel:${companyDetails.phoneBhavy}`}
                    className="font-bold text-sm text-contentColor hover:text-accent"
                  >
                    {companyDetails.phoneBhavy}
                  </a>
                </div>

                <div className="pt-2 border-t border-contentColor/10">
                  <span className="text-grey-600 block uppercase tracking-wider mb-1 text-[10px]">
                    Rajesh Zaveri (Managing Director)
                  </span>
                  <a
                    href={`tel:${companyDetails.phoneRajesh}`}
                    className="font-bold text-sm text-contentColor hover:text-accent"
                  >
                    {companyDetails.phoneRajesh}
                  </a>
                </div>

                <div className="pt-2 border-t border-contentColor/10">
                  <span className="text-grey-600 block uppercase tracking-wider mb-1 text-[10px]">
                    Official Instagram
                  </span>
                  <a
                    href={companyDetails.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold text-sm text-contentColor hover:text-accent flex items-center gap-2"
                  >
                    <Instagram className="w-4 h-4 text-accent" />
                    <span>{companyDetails.instagramHandle}</span>
                  </a>
                </div>

                <div className="pt-2 border-t border-contentColor/10">
                  <span className="text-grey-600 block uppercase tracking-wider mb-1 text-[10px]">
                    Regional Office
                  </span>
                  <p className="font-sans text-xs text-grey-700 leading-relaxed font-normal">
                    {companyDetails.address}
                  </p>
                </div>
              </div>

              {/* Direct WhatsApp Action Button */}
              <div className="pt-2">
                <a
                  href={companyDetails.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3.5 bg-black hover:bg-black/85 text-white font-mono text-xs uppercase tracking-widest font-semibold rounded-sm transition-colors"
                >
                  <MessageSquare className="w-4 h-4 text-accent" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>

          {/* Interactive Inquiry Form */}
          <div className="lg:col-span-7 bg-white p-8 sm:p-12 rounded-sm border border-contentColor/10 shadow-xl">
            <h3 className="font-serif text-3xl font-bold uppercase text-contentColor mb-2">
              Send an Inquiry
            </h3>
            <p className="font-sans text-grey-600 text-sm mb-8 leading-relaxed">
              Fill out the form below to schedule a private site visit to Barsana, inquire about villa inventory, or consult on property purchase/selling.
            </p>

            {isSubmitted ? (
              <div className="p-8 bg-sand rounded-sm border border-accent/30 text-center space-y-4">
                <CheckCircle className="w-12 h-12 text-accent mx-auto" />
                <h4 className="font-serif text-2xl font-bold text-contentColor">
                  Inquiry Received
                </h4>
                <p className="font-sans text-grey-700 text-sm">
                  Thank you for reaching out to Zaveri Realty Group. Our executive team will contact you shortly via phone or WhatsApp.
                </p>
                <button
                  type="button"
                  onClick={() => setIsSubmitted(false)}
                  className="font-mono text-xs uppercase tracking-wider text-black underline font-semibold mt-4"
                >
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block font-mono text-xs uppercase tracking-wider text-grey-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    id="name"
                    required
                    type="text"
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    placeholder="Enter your name"
                    className="w-full px-4 py-3 bg-bgColor border border-contentColor/20 rounded-sm font-sans text-sm focus:outline-none focus:ring-2 focus:ring-accent"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block font-mono text-xs uppercase tracking-wider text-grey-700 mb-2">
                      Phone / Mobile *
                    </label>
                    <input
                      id="phone"
                      required
                      type="tel"
                      value={formState.phone}
                      onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                      placeholder="e.g. 9876543210"
                      className="w-full px-4 py-3 bg-bgColor border border-contentColor/20 rounded-sm font-sans text-sm focus:outline-none focus:ring-2 focus:ring-accent"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block font-mono text-xs uppercase tracking-wider text-grey-700 mb-2">
                      Email Address
                    </label>
                    <input
                      id="email"
                      type="email"
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      placeholder="name@example.com"
                      className="w-full px-4 py-3 bg-bgColor border border-contentColor/20 rounded-sm font-sans text-sm focus:outline-none focus:ring-2 focus:ring-accent"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="service" className="block font-mono text-xs uppercase tracking-wider text-grey-700 mb-2">
                    Nature of Inquiry *
                  </label>
                  <select
                    id="service"
                    value={formState.service}
                    onChange={(e) => setFormState({ ...formState, service: e.target.value })}
                    className="w-full px-4 py-3 bg-bgColor border border-contentColor/20 rounded-sm font-sans text-sm focus:outline-none focus:ring-2 focus:ring-accent cursor-pointer"
                  >
                    <option value="Barsana Luxury Villa Plot">Barsana — Luxury Villa & Plot Purchase</option>
                    <option value="Schedule Site Visit">Schedule a Private Site Visit (Bhuj)</option>
                    <option value="The Woodland Villa Waitlist">The Woodland Villa — Pre-Launch Waitlist</option>
                    <option value="Property Purchase">General Property Purchase</option>
                    <option value="Property Sell">Property Valuation & Selling</option>
                    <option value="Property Rent">Property Rent & Leasing</option>
                    <option value="Estate Advisory">Land & Estate Advisory</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block font-mono text-xs uppercase tracking-wider text-grey-700 mb-2">
                    Message / Preferred Specifications
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    placeholder="Tell us about your requirements or preferred time for a callback..."
                    className="w-full px-4 py-3 bg-bgColor border border-contentColor/20 rounded-sm font-sans text-sm focus:outline-none focus:ring-2 focus:ring-accent resize-none"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-4 bg-black hover:bg-black/90 text-white font-mono text-xs uppercase tracking-[0.2em] font-bold rounded-sm transition-colors shadow-lg flex items-center justify-center gap-2"
                  >
                    <Send className="w-3.5 h-3.5 text-accent" />
                    <span>Submit Inquiry</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
