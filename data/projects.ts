export interface Project {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  category: "Residential" | "Luxury Villa" | "Upcoming" | "Commercial";
  year: string;
  status: "Completed" | "Under Construction" | "Upcoming" | "Ready to Move";
  location: string;
  client?: string;
  heroImage: string;
  galleryImages: string[];
  description: string;
  longDescription: string;
  amenities?: string[];
  specs?: {
    category: string;
    items: string[];
  }[];
  stats?: {
    label: string;
    value: string;
  }[];
  floorPlans?: {
    title: string;
    image: string;
    details: string;
  }[];
}

export const projects: Project[] = [
  {
    id: "barsana",
    slug: "barsana",
    title: "Barsana",
    subtitle: "There's no place like home — The Signature of luxury living",
    category: "Luxury Villa",
    year: "2025",
    status: "Under Construction",
    location: "Bhuj, Gujarat",
    client: "Zaveri Realty Signature Collection",
    heroImage: "/assets/barsana/barsana-02.jpg",
    galleryImages: [
      "/assets/barsana/barsana-03.jpg",
      "/assets/barsana/barsana-04.jpg",
      "/assets/barsana/barsana-05.jpg",
      "/assets/barsana/barsana-06.jpg",
      "/assets/barsana/barsana-07.jpg",
      "/assets/barsana/barsana-08.jpg",
      "/assets/barsana/barsana-09.jpg",
      "/assets/barsana/barsana-10.jpg",
      "/assets/barsana/barsana-11.jpg",
      "/assets/barsana/barsana-12.jpg",
      "/assets/barsana/barsana-13.jpg",
      "/assets/barsana/barsana-14.jpg",
      "/assets/barsana/barsana-15.jpg",
      "/assets/barsana/barsana-18.jpg",
    ],
    description:
      "Experience the true essence of luxurious living with Barsana. A master-planned gated enclave combining sacred serenity, world-class clubhouse leisure, and architectural distinction.",
    longDescription:
      "We believe that life is not just about existing, but about savoring every moment with comfort and indulgence. Barsana is thoughtfully designed to offer you a blissful lifestyle, where every step is a celebration of opulence and contentment. From the grand classical archways to the divine marble temple, manicured party lawns, swimming pool, and private gazebos, Barsana sets a new benchmark for upscale living in Kutch.",
    amenities: [
      "Grand Classical Entrance Gate with 24/7 Security",
      "Elegant Clubhouse with Banquet Hall & Open Air Terrace Lounge",
      "Divine Marble Temple surrounded by lush sacred flora",
      "Swimming Pool for Adults & Kids with Sunken Deck & Chaise Lounges",
      "Fully Equipped Modern Gym & Fitness Center",
      "Indoor Games Lounge (Billiards, Table Tennis, Board Games)",
      "Lush Garden with Jogging Track, Lily Pond & Wooden Bridge",
      "4 Large Gazebos & Firepit Circle with Wooden Swing Seating",
      "Children's Themed Play Park with Safety Surfacing",
      "Box Cricket Pitch & Multi-Purpose Sports Court",
      "100% Renewable Solar Energy Integration",
      "Complimentary Golf Cart Transportation to Nearby D-Mart",
      "EV Fast Charging Stations & Dedicated Car Wash Bay",
      "Ayurvedic Herbal Garden with 20+ Medicinal Plant Species",
    ],
    stats: [
      { label: "Total Units", value: "92 Luxury Plots & Villas" },
      { label: "Plot Sizes", value: "125.5 - 280.6 Sq.M" },
      { label: "Clubhouse Area", value: "10,000+ Sq.Ft" },
      { label: "Green Cover", value: "45% Landscaped Open Space" },
    ],
    specs: [
      {
        category: "Structure & Walls",
        items: [
          "Earthquake resistant R.C.C. frame and load-bearing foundation",
          "Single coat plaster inside, double coat sand-faced weather shield plaster externally",
          "Water-resistant smooth acrylic based lapi finish with premium luster paint",
        ],
      },
      {
        category: "Flooring & Tiling",
        items: [
          "Premium vitrified tiles across entire villa (min 600x1200mm)",
          "8ft high designer ceramic dado in all bathrooms",
          "Full body anti-skid heavy-duty tiles in compound, courtyards & wash areas",
        ],
      },
      {
        category: "Doors & Windows",
        items: [
          "Decorative teak veneer main entrance door with multi-point safety lock",
          "Flush internal doors with laminated sheets on both sides & brass fittings",
          "Fully double-glazed powder-coated aluminum section windows with mosquito net & granite sills",
        ],
      },
      {
        category: "Electrical & Green Power",
        items: [
          "Concealed ISI grade copper wiring with branded modular touch switches",
          "MCB distribution panel & inverter backup ready provisioning",
          "Solar rooftop grid wiring to net meter + LED false ceiling illumination",
        ],
      },
      {
        category: "Plumbing & Sanitaryware",
        items: [
          "Designer sanitary fixtures (Jaquar / Kohler or equivalent)",
          "Corrosion-free & leak-proof CPVC / UPVC plumbing lines",
          "Solar hot water system & instant electric geyser connectivity",
        ],
      },
    ],
    floorPlans: [
      {
        title: "Ground Floor Plan",
        image: "/assets/barsana/barsana-10.jpg",
        details: "Living room (14'6\" x 16'1\"), Dining (9'3\" x 10'7\"), Kitchen (9'0\" x 12'4\"), Courtyard, Open Space & Garden Area.",
      },
      {
        title: "First Floor Plan",
        image: "/assets/barsana/barsana-10.jpg",
        details: "Master Bedroom (14'4\" x 16'1\") with attached dressing & bath, Children's Bedroom (14'0\" x 11'7\"), Passage & Balcony.",
      },
      {
        title: "Master Site Layout",
        image: "/assets/barsana/barsana-16.jpg",
        details: "Plot division from Plot 1 to Plot 92, central avenue, clubhouse zone, sports arena, temple & party lawn.",
      },
    ],
  },
  {
    id: "the-woodland-villa",
    slug: "the-woodland-villa",
    title: "The Woodland Villa",
    subtitle: "A Sanctuary in Harmony with Nature — Upcoming Signature Estate",
    category: "Upcoming",
    year: "2026",
    status: "Upcoming",
    location: "Kutch Foothills, Gujarat",
    client: "Zaveri Realty Private Reserve",
    heroImage: "/assets/barsana/barsana-18.jpg",
    galleryImages: [
      "/assets/barsana/barsana-15.jpg",
      "/assets/barsana/barsana-07.jpg",
      "/assets/barsana/barsana-08.jpg",
      "/assets/barsana/barsana-11.jpg",
    ],
    description:
      "A limited-edition enclave of private woodland retreats designed with tactile stone, sunken courtyards, private infinity plunge pools, and expansive glass pavilions.",
    longDescription:
      "Set amidst undisturbed natural contours, The Woodland Villa is designed for those who seek tranquility without compromising on contemporary luxury. Each villa is oriented to maximize cross ventilation and natural daylight while framing views of private groves. Registrations for private preview and pre-launch allocations are now open.",
    amenities: [
      "Private Plunge Pool & Sun Deck with each villa",
      "Double-height Glass Living Pavilions",
      "Internal Zen Courtyards with indigenous flora",
      "Private Organic Fruit & Spice Orchard",
      "Concierge Estate Management & Housekeeping",
      "Solar Off-Grid Capability & Rainwater Harvesting",
    ],
    stats: [
      { label: "Edition", value: "24 Exclusive Woodland Estates" },
      { label: "Configuration", value: "3 & 4 BHK Luxury Residences" },
      { label: "Plot Sizes", value: "350 - 600 Sq.Yards" },
      { label: "Status", value: "Pre-Launch Registrations Open" },
    ],
  },
  {
    id: "royal-palms-estate",
    slug: "royal-palms-estate",
    title: "Royal Palms Estate",
    subtitle: "Stately Architecture & Palm-Lined Avenues",
    category: "Residential",
    year: "2024",
    status: "Ready to Move",
    location: "Airport Ring Road, Bhuj",
    client: "Zaveri Realty Group",
    heroImage: "/assets/barsana/barsana-15.jpg",
    galleryImages: [
      "/assets/barsana/barsana-04.jpg",
      "/assets/barsana/barsana-05.jpg",
      "/assets/barsana/barsana-12.jpg",
    ],
    description:
      "An established luxury residential community characterized by Mediterranean facade styling, wide concrete avenues, and a vibrant community atmosphere.",
    longDescription:
      "Royal Palms Estate delivers timeless architectural proportion and thoughtful space planning. Designed for discerning families who prioritize quiet sophistication and connectivity.",
    amenities: [
      "Grand Gated Gateway",
      "Clubhouse & Indoor Recreation",
      "Children's Play Zone",
      "Dedicated Walking Trails",
    ],
    stats: [
      { label: "Delivered", value: "48 Luxury Homes" },
      { label: "Occupancy", value: "95% Occupied" },
      { label: "Location", value: "Prime Airport Road" },
    ],
  },
  {
    id: "the-oasis-residences",
    slug: "the-oasis-residences",
    title: "The Oasis Residences",
    subtitle: "Modern Urban Living with Resort-Grade Amenities",
    category: "Residential",
    year: "2024",
    status: "Completed",
    location: "Seven Sky Zone, Bhuj",
    client: "Zaveri Realty Group",
    heroImage: "/assets/barsana/barsana-05.jpg",
    galleryImages: [
      "/assets/barsana/barsana-06.jpg",
      "/assets/barsana/barsana-13.jpg",
    ],
    description:
      "Contemporary luxury townhomes and villas featuring expansive balconies, Italian marble finishes, and private terrace gardens.",
    longDescription:
      "An oasis in the heart of the city, perfectly positioned near premium hospitality and retail centers while maintaining complete residential privacy.",
    amenities: [
      "Infinity Edge Swimming Pool",
      "Sky Lounge & Yoga Deck",
      "24/7 Monitored Multi-Tier Security",
    ],
    stats: [
      { label: "Units", value: "32 Boutique Townhomes" },
      { label: "Handover", value: "2024" },
    ],
  },
  {
    id: "vrindavan-greens",
    slug: "vrindavan-greens",
    title: "Vrindavan Greens",
    subtitle: "Sprawling Farmstay & Agricultural Estates",
    category: "Luxury Villa",
    year: "2023",
    status: "Completed",
    location: "Mirzapar Highway, Kutch",
    client: "Zaveri Realty Group",
    heroImage: "/assets/barsana/barsana-07.jpg",
    galleryImages: [
      "/assets/barsana/barsana-08.jpg",
      "/assets/barsana/barsana-11.jpg",
    ],
    description:
      "Expansive weekend farmhouse plots and finished luxury villas with mature organic plantations and private recreational clubs.",
    longDescription:
      "A tribute to verdant landscapes and open skies. Vrindavan Greens offers private estate parcels for bespoke retreat construction.",
    amenities: [
      "Private Lake & Boating Deck",
      "Equestrian & Cycling Trails",
      "Organic Farm Management",
    ],
    stats: [
      { label: "Parcel Size", value: "1 to 3 Acres" },
      { label: "Total Land", value: "50+ Acres" },
    ],
  },
];
