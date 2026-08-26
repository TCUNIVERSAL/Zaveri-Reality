export interface Service {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  image: string;
  features: string[];
}

export const services: Service[] = [
  {
    id: "property-purchase",
    title: "Property Purchase",
    shortDesc: "End-to-end guidance for acquiring luxury villas, residential plots, and premium commercial estates.",
    fullDesc:
      "We assist private buyers and investors in acquiring prime real estate with transparent documentation, clear title verification, and curated luxury options tailored to your family's future.",
    image: "/assets/barsana/barsana-02.jpg",
    features: [
      "Curated Prime Inventory (Villas, Plots, Estates)",
      "Title Deed & Clear Legal Due Diligence",
      "Tailored Financial & Tax Advisory",
      "Site Inspection & Architectural Walkthroughs",
    ],
  },
  {
    id: "property-sell",
    title: "Property Sell",
    shortDesc: "Strategic valuation, high-impact marketing, and qualified buyer matchmaking for your premier property.",
    fullDesc:
      "Leverage our deep market presence in Kutch and Gujarat to sell your property at true market value with discretion, speed, and seamless legal transfer.",
    image: "/assets/barsana/barsana-15.jpg",
    features: [
      "Rigorous Market Valuation & Positioning",
      "High-Fidelity Architectural Photography & Marketing",
      "Access to Pre-Qualified High-Net-Worth Buyers",
      "End-to-End Negotiation & Closing Management",
    ],
  },
  {
    id: "property-rent",
    title: "Property Rent & Leasing",
    shortDesc: "Premium residential leasing and high-yield commercial rental management.",
    fullDesc:
      "Whether seeking an upscale residence for your family or leasing out high-value property assets, we handle tenant vetting, lease structuring, and asset care.",
    image: "/assets/barsana/barsana-04.jpg",
    features: [
      "Vetted Corporate & Family Tenant Matching",
      "Customized Legal Tenancy Agreements",
      "Periodic Asset Inspection & Maintenance",
      "Timely Rental Yield Collection Support",
    ],
  },
  {
    id: "villa-development",
    title: "Luxury Villa Development",
    shortDesc: "Bespoke architectural design, master planning, and turnkey gated community construction.",
    fullDesc:
      "From landmark projects like Barsana to private custom villas, our team oversees architecture, sustainable engineering, material sourcing, and master landscape design under one roof.",
    image: "/assets/barsana/barsana-18.jpg",
    features: [
      "Comprehensive Master Planning & Landscaping",
      "100% Renewable Energy & Sustainable Systems",
      "Clubhouse & Sacred Temple Architecture",
      "Turnkey Construction & Interior Craftsmanship",
    ],
  },
  {
    id: "estate-advisory",
    title: "Land & Estate Advisory",
    shortDesc: "Strategic land acquisition, zoning feasibility, RERA compliance, and wealth preservation.",
    fullDesc:
      "Guiding families and institutional investors on legacy land parcels, layout optimization, governmental approvals, and long-term capital growth strategies across Gujarat.",
    image: "/assets/barsana/barsana-16.jpg",
    features: [
      "Zoning & NA/NOC Clearances Advisory",
      "RERA Project Registration & Compliance",
      "Master Layout & Yield Optimization",
      "Generational Real Estate Wealth Structuring",
    ],
  },
];

export const companyDetails = {
  name: "Zaveri Realty Group",
  tagline: "There's no place like home.",
  motto: "The Signature of luxury living",
  philosophy: "Live the lifestyle you want, not lifestyle you need.",
  phonePrimary: "8009318009",
  phoneBhavy: "+91 91063 18607",
  phoneRajesh: "+91 81418 10432",
  email: "inquiry@zaverirealty.com",
  instagramUrl: "https://www.instagram.com/zaveri_realty?igsi=MWh5YXczNGk3MzY5bA==",
  instagramHandle: "@zaveri_realty",
  address: "Near Seven Sky, Airport Ring Road, Bhuj - Kutch, Gujarat 370001",
  coordinates: "23.2420° N, 69.6669° E",
  whatsappUrl: "https://wa.me/918009318009?text=Hello%20Zaveri%20Realty%20Group,%20I%20would%20like%20to%20inquire%20about%20your%20properties.",
};
