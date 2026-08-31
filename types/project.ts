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
