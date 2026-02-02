
export interface NavItem {
  label: string;
  href: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface CaseStudy {
  id: string;
  client: string;
  category: string;
  image: string;
  thumbnail?: string;
  tags?: string[];
  description?: string;
  stat: string;
  statLabel: string;
  testimonial?: string;
  gallery?: string[];
  video?: string;
  challenge?: string;
  solution?: string;
  features?: string[];
  results?: string;
}

export interface Stat {
  id: string;
  value: string;
  label: string;
  suffix?: string;
}
