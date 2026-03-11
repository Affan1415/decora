export interface Service {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
  icon?: string;
  features: string[];
  benefits?: string[];
  relatedProjects?: string[];
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  category: 'residential' | 'hospitality' | 'commercial';
  images: string[];
  thumbnail: string;
  shortDescription: string;
  fullDescription: string;
  client?: string;
  year?: number;
  testimonial?: Testimonial;
  relatedProjects?: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role?: string;
  content: string;
  image?: string;
  company?: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  bio?: string;
  specialties?: string[];
}

export interface NavigationItem {
  name: string;
  href: string;
  submenu?: NavigationItem[];
}

export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
}
