import type { Metadata } from "next";
import { Playfair_Display, Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import MobileMenu from "@/components/layout/MobileMenu";
import Footer from "@/components/layout/Footer";
import SmoothScroll from "@/components/layout/SmoothScroll";

const serifFont = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const sansFont = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const monoFont = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://zaverirealty.com"),
  title: "Zaveri Realty Group — Luxury Real Estate & Villa Communities in Bhuj, Gujarat",
  description:
    "Zaveri Realty Group crafts landmark luxury residences and master-planned villa communities in Bhuj, Kutch. Discover Barsana and The Woodland Villa.",
  keywords: [
    "Zaveri Realty Group",
    "Barsana Bhuj",
    "The Woodland Villa",
    "Luxury Villas Bhuj",
    "Real Estate Kutch",
    "Property Purchase Bhuj",
    "Property Rent Bhuj",
    "Bhavy Zaveri",
    "Rajesh Zaveri",
  ],
  authors: [{ name: "Zaveri Realty Group" }],
  openGraph: {
    title: "Zaveri Realty Group — Luxury Real Estate & Villa Communities",
    description:
      "The Signature of luxury living. Discover Barsana luxury gated villas and prime property advisory in Bhuj, Kutch.",
    url: "https://zaverirealty.com",
    siteName: "Zaveri Realty Group",
    images: [
      {
        url: "/images/projects/barsana/barsana-02.jpg",
        width: 1200,
        height: 630,
        alt: "Barsana by Zaveri Realty Group",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["Organization", "RealEstateAgent"],
        "@id": "https://zaverirealty.com/#organization",
        name: "Zaveri Realty Group",
        url: "https://zaverirealty.com",
        description:
          "Zaveri Realty Group creates considered, enduring luxury homes and gated communities across Kutch, Gujarat.",
        telephone: "+918009318009",
        email: "inquiry@zaverirealty.com",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Bhuj",
          addressRegion: "Gujarat",
          postalCode: "370001",
          addressCountry: "IN",
        },
        founder: [
          { "@type": "Person", name: "Rajesh Zaveri" },
          { "@type": "Person", name: "Bhavy Zaveri" },
        ],
      },
    ],
  };

  return (
    <html
      lang="en"
      className={`${serifFont.variable} ${sansFont.variable} ${monoFont.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-bgColor text-contentColor font-sans selection:bg-black selection:text-white min-h-screen flex flex-col antialiased">
        {/* Skip to Content for Keyboard Accessibility */}
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>

        {/* Smooth Scroll Container */}
        <SmoothScroll>
          <Navbar />
          <main id="main-content" className="flex-grow">
            {children}
          </main>
          <Footer />
          <MobileMenu />
        </SmoothScroll>
      </body>
    </html>
  );
}
