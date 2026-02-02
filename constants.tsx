
import React from 'react';
import { NavItem, ServiceItem, CaseStudy, Stat } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#contact' },
];

// Modern SVG Icons for Services
const Icons = {
  Marketing: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>
  ),
  Sales: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17" /><polyline points="16 7 22 7 22 13" /></svg>
  ),
  Automation: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20v-6M6 20V10M18 20V4" /></svg>
  ),
  Content: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 1 1-7.6-11.7 8.5 8.5 0 0 1 7.6 11.7Z" /><path d="m15.5 5.5 3 3-3 3" /></svg>
  )
};

export const SERVICES: ServiceItem[] = [
  {
    id: 's1',
    title: 'AI-Powered Marketing',
    description: 'Automate campaigns with AI optimization to reduce costs, increase lead volume, and deliver proven ROI.',
    icon: 'marketing',
  },
  {
    id: 's2',
    title: 'Intelligent Sales Acceleration',
    description: 'AI-driven CRM and sales sequences that bridge marketing and sales teams to increase conversions.',
    icon: 'sales',
  },
  {
    id: 's3',
    title: 'Streamlined Operations',
    description: 'AI-based process improvement delivering 50% efficiency boost, 75% error reduction, and 30% cost cuts.',
    icon: 'automation',
  },
  {
    id: 's4',
    title: 'Full-Funnel Lead Generation',
    description: 'Data analytics combined with targeted outreach to deliver high-quality leads across industries.',
    icon: 'content',
  },
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'c1',
    client: 'Financial Services',
    image: '/assets/case-studies/financial-services/main.png',
    thumbnail: '/assets/case-studies/financial-services/main.png',
    category: '340+ Event Registrations',
    stat: '416%',
    statLabel: 'ROI Increase',
    tags: ['AI-Driven Ads', 'HubSpot Integration', 'Lead Scoring'],
    description: "A financial services company needed to fill investor events. We implemented an AI-driven ad strategy that autonomously optimized bids and creatives.",
    challenge: "High cost per acquisition (CPA) and poor lead quality were draining marketing budget with little return.",
    solution: "Implemented an autonomous AI ad buying system integrated with HubSpot for closed-loop attribution.",
    features: ["Real-time Bid Optimization", "Dynamic Creative Testing", "CRM Data Sync"],
    results: "Reduced CPA by 65% while increasing overall capabilities by 4x within 90 days."
  },
  {
    id: 'c2',
    client: 'Investor Funding',
    image: '/assets/case-studies/investor-funding/main.png',
    thumbnail: '/assets/case-studies/investor-funding/graphic1.png',
    category: 'Facebook Ads & AI Email',
    stat: '$4.2M',
    statLabel: 'Revenue Generated',
    tags: ['Predictive Analytics', 'CRMA', 'Email Automation'],
    description: "The client lacked consistent, high-quality investor leads. Our predictive model scored leads based on 50+ data points, feeding a personalized email nurture sequence.",
    challenge: "Sales team was wasting time on unqualified leads, missing out on high-value opportunities.",
    solution: "Deployed predictive lead scoring models and automated personalized outreach sequences.",
    features: ["Predictive Lead Scoring", "Automated Nurture Sequences", "Salesforce Integration"],
    results: "Generated $4.2M in new pipeline revenue and increased sales team efficiency by 40%.",
    gallery: [
      '/assets/case-studies/investor-funding/graphic1.png',
      '/assets/case-studies/investor-funding/testimonial.png'
    ]
  },
  {
    id: 'c3',
    client: 'B2B Services',
    image: '/assets/case-studies/b2b-services/main.png',
    thumbnail: '/assets/case-studies/b2b-services/main.png',
    category: 'LinkedIn Ads Optimization',
    stat: '28k+',
    statLabel: 'Patient Appointments',
    tags: ['Local SEO', 'Review Automation', 'Booking System'],
    description: "We scaled their local presence across 40 locations using AI to manage GMB profiles and automate review requests, driving record appointment bookings.",
    challenge: "Fragmented digital presence across multiple locations led to low local visibility.",
    solution: "Unified local SEO management and automated review generation campaigns.",
    features: ["Multi-location SEO", "Automated Review Management", "Unified Booking Interface"],
    results: "Achieved #1 ranking for key terms in 35/40 locations and booked 28k+ new appointments."
  },
  {
    id: 'c4',
    client: 'AeroCRS Aviation',
    image: '/assets/case-studies/aerocrs-aviation/main.png',
    thumbnail: '/assets/case-studies/aerocrs-aviation/thumbnail.png',
    category: 'Hyper-Personalized Outreach',
    stat: '300%',
    statLabel: 'Lead Volume',
    tags: ['Facebook Ads', 'Chatbot', 'Instant Qualify'],
    description: "AeroCRS needed to reach senior aviation professionals. We built a Messenger bot that qualified mortgage leads 24/7 and booked calls directly.",
    challenge: "Slow response times were causing high lead drop-off rates.",
    solution: "Built an AI surveyor chatbot to instantly qualify and book leads 24/7.",
    features: ["Messenger Chatbot", "Instant Qualification", "Calendar Sync"],
    results: "Tripled lead volume and reduced cost per booking by 50%",
    gallery: [
      '/assets/case-studies/aerocrs-aviation/thumbnail.png'
    ]
  },
  {
    id: 'c5',
    client: 'Tech/Aerospace',
    image: '/assets/case-studies/tech-aerospace/main.png',
    thumbnail: '/assets/case-studies/tech-aerospace/main.png',
    category: 'Precision LinkedIn Campaign',
    stat: '8.5x',
    statLabel: 'ROAS',
    tags: ['Google Shopping', 'Inventory Sync', 'Dynamic Pricing'],
    description: "By syncing inventory data with Google Shopping ads, we ensured they never paid for clicks on out-of-stock items, maximizing their ad spend efficiency.",
    challenge: "Ad spend was being wasted on out-of-stock products.",
    solution: "Connected inventory feed to Google Ads for real-time campaign management.",
    features: ["Real-time Inventory Sync", "Dynamic Pricing AI", "Smart Bidding"],
    results: "Reached 8.5x ROAS and increased average order value by 25%."
  },
  {
    id: 'c6',
    client: 'Public Speaking Coach',
    image: '/assets/case-studies/public-speaking-coach/main.png',
    thumbnail: '/assets/case-studies/public-speaking-coach/graphic1.png',
    category: 'Chatbot Innovation',
    stat: '65%',
    statLabel: 'Lower CPL',
    tags: ['LinkedIn Ads', 'ABM', 'Content Syndication'],
    description: "A public-speaking coach needed to generate new leads. We targeted specific decision-makers at Fortune 500 companies, delivering high-value whitepapers.",
    challenge: "General targeting was failing to reach key decision makers in enterprise accounts.",
    solution: "Executed a precision Account-Based Marketing (ABM) campaign on LinkedIn.",
    features: ["ABM Targeting", "LinkedIn Lead Gen Forms", "Content Syndication"],
    results: "lowered Cost Per Lead by 65% while increasing deal size by 2x.",
    gallery: [
      '/assets/case-studies/public-speaking-coach/graphic1.png',
      '/assets/case-studies/public-speaking-coach/graphic3.png'
    ]
  },
  {
    id: 'c7',
    client: 'Engineering Plastics B2B',
    image: '/assets/case-studies/engineering-plastics/main.png',
    thumbnail: '/assets/case-studies/engineering-plastics/graphic1.png',
    category: 'Social Media Strategy',
    stat: '120%',
    statLabel: 'ARR Growth',
    tags: ['PLG', 'Onboarding AI', 'Churn Prediction'],
    description: "We implemented an AI-driven onboarding flow that personalized the user journey based on intent data, significantly reducing churn and boosting conversion.",
    challenge: "High churn rate during the trial period.",
    solution: "Developed an adaptive onboarding experience driven by user behavior data.",
    features: ["Behavioral Triggers", "Churn Prediction Model", "In-app Guidance"],
    results: "Doubled Annual Recurring Revenue (ARR) growth year-over-year.",
    gallery: [
      '/assets/case-studies/engineering-plastics/graphic1.png'
    ]
  },
  {
    id: 'c8',
    client: 'Multi-Industry',
    image: '/assets/case-studies/multi-industry/main.png',
    thumbnail: '/assets/case-studies/multi-industry/graphic1.png',
    category: 'Automated LinkedIn Outreach',
    stat: '$12M',
    statLabel: 'Pipeline Added',
    tags: ['Intent Data', 'Cold Email', 'Sales Enablement'],
    description: "We combined 3rd party intent data with automated cold email outreach to identify companies actively searching for logistics solutions.",
    challenge: "Cold outreach was yielding low response rates.",
    solution: "Leveraged intent data to trigger timely, relevant outreach sequences.",
    features: ["Intent Data Integration", "Cold Email Automation", "Sales Enablement Tools"],
    results: "Added $12M to the sales pipeline in 6 months.",
    gallery: [
      '/assets/case-studies/multi-industry/graphic1.png',
      '/assets/case-studies/multi-industry/graphic2.png',
      '/assets/case-studies/multi-industry/graphic4.png'
    ]
  },
  {
    id: 'c9',
    client: 'America Outbound Summit',
    image: '/assets/case-studies/america-outbound/main.png',
    thumbnail: '/assets/case-studies/america-outbound/graphic1.png',
    category: 'Targeted Email Marketing',
    stat: '55%',
    statLabel: 'Repeat Rate',
    tags: ['Retention', 'SMS Marketing', 'Loyalty Program'],
    description: "The summit sought high-net-worth attendees. We built an SMS marketing engine that sent timely reminders and exclusive offers.",
    challenge: "Low customer lifetime value (LTV) and repeat purchase rate.",
    solution: "Launched a comprehensive SMS retention and loyalty program.",
    features: ["SMS Flows", "Loyalty Rewards", "Win-back Campaigns"],
    results: "Increased repeat customer rate by 55%.",
    gallery: [
      '/assets/case-studies/america-outbound/graphic1.png'
    ]
  },
  {
    id: 'c10',
    client: 'Real Estate Services',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop',
    thumbnail: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop',
    category: 'Automated Email Workflows',
    stat: '400',
    statLabel: 'New Members',
    tags: ['Geo-Fencing', 'Instagram Ads', 'Offer Testing'],
    description: "We used hyper-local geo-fencing ads around competitor gyms and local health processing centers to drive highly aware traffic to an irresistible offer page.",
    challenge: 'Struggling to attract members in a competitive local market.',
    solution: 'Deployed hyper-local geo-fencing campaigns with aggressive offer testing.',
    features: ["Geo-fencing", "Instagram Reels Ads", "Landing Page Optimization"],
    results: 'Signed up 400 new members in a single quarter.'
  },
  {
    id: 'c11',
    client: 'Legal Services',
    image: '/assets/case-studies/legal-services/main.png',
    thumbnail: '/assets/case-studies/legal-services/graphic1.png',
    category: 'Workflow Automation',
    stat: '90%',
    statLabel: 'Admin Saved',
    tags: ['Legal Automation', 'Document AI', 'Lead Intake'],
    description: "We automated the client intake and document collection process using AI, allowing lawyers to spend 90% less time on admin.",
    challenge: "Lawyers were buried in paperwork and manual intake processes.",
    solution: "Automated client intake and document processing with AI.",
    features: ["Document AI", "Automated Intake Forms", "Case Management Sync"],
    results: "Reduced non-billable administrative hours by 90%.",
    gallery: [
      '/assets/case-studies/legal-services/graphic1.png',
      '/assets/case-studies/legal-services/graphic2.png'
    ]
  },
  {
    id: 'c12',
    client: 'Summit Education',
    image: '/assets/case-studies/summit-education/main.jpg',
    thumbnail: '/assets/case-studies/summit-education/graphic2.png',
    category: 'Education Funnel',
    stat: '200%',
    statLabel: 'Enrollment',
    tags: ['Webinar Funnel', 'YouTube Ads', 'Email Nurture'],
    description: "To boost course enrollments, we built an automated webinar funnel driven by YouTube ads, nurturing prospects who didn't buy immediately.",
    challenge: "High cost per student enrollment and low webinar attendance.",
    solution: "Optimized webinar funnel with YouTube ads and automated follow-up.",
    features: ["YouTube Ad Scale", "Evergreen Webinar", "Behavioral Email Nurture"],
    results: "Increased course enrollment by 200% year-over-year.",
    gallery: [
      '/assets/case-studies/summit-education/graphic1.jpg',
      '/assets/case-studies/summit-education/graphic2.png',
      '/assets/case-studies/summit-education/graphic3.png'
    ]
  }
];

export const STATS: Stat[] = [
  { id: 'st1', value: '282', label: 'Leads Generated', suffix: 'K+' },
  { id: 'st2', value: '20', label: 'Emails Sent', suffix: 'M' },
  { id: 'st3', value: '15', label: 'Budget Managed', suffix: 'M' },
  { id: 'st4', value: '416', label: 'Average ROI', suffix: '%' },
];

export const CLIENT_LOGOS = [
  '/assets/brands/Ensinger_GmbH_Logo.svg-768x204.png',
  '/assets/brands/Ensinger_GmbH_Logo.svg-768x204.png',
  '/assets/brands/Ensinger_GmbH_Logo.svg-768x204.png',
  '/assets/brands/Ensinger_GmbH_Logo.svg-768x204.png',
  '/assets/brands/Ensinger_GmbH_Logo.svg-768x204.png',
  '/assets/brands/Ensinger_GmbH_Logo.svg-768x204.png',
];
