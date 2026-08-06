
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

/**
 * A real, shippable piece of work with a URL a prospect can open right now.
 * Distinct from CaseStudy, which is narrative. Every entry here must be live
 * and verified — this page exists to be scrutinised, so a dead link costs more
 * than a missing entry.
 */
export interface WorkItem {
  id: string;
  name: string;
  /** Client work we were paid for, vs. ventures we own and operate ourselves. */
  kind: 'client' | 'in-house';
  sector: string;
  /** One line on what we actually built. No adjectives. */
  summary: string;
  /** Concrete scope items — the things that exist because we built them. */
  scope: string[];
  url: string;
  /** Shown on the card so the link's destination is never a surprise. */
  urlLabel: string;
  /** Present tense for live retainers, past for finished engagements. */
  status: 'Active' | 'Delivered' | 'Completed engagement';
  region: 'ZA' | 'UK' | 'US';
  /**
   * Public social profiles for ventures we run ourselves. Shown so a prospect
   * asking "do you actually do social?" can go and look, rather than take our
   * word for it. Client work never carries these — those channels are theirs.
   */
  socials?: { label: string; href: string }[];
}

export interface SocialLink {
  label: string;
  href: string;
  icon: 'linkedin' | 'facebook' | 'instagram' | 'twitter';
}
