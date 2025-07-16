export interface Hero {
  _id: string;
  title: string;
  subtitle: string;
  backgroundImage: any;
  ctaText: string;
  ctaLink: string;
}

export interface Program {
  _id: string;
  title: string;
  description: string;
  image: any;
  category: string;
  impact: string;
}

export interface Event {
  _id: string;
  title: string;
  description: string;
  date: string;
  location: string;
  image: any;
  category: string;
}

export interface Testimonial {
  _id: string;
  name: string;
  role: string;
  content: string;
  image: any;
}

export interface GalleryImage {
  _id: string;
  alt: string;
  image: any;
  category: string;
}

export interface BlogPost {
  _id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  publishedAt: string;
  author: string;
  image: any;
}