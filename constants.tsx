
import React from 'react';
import { ServiceItem, CaseStudy, Stat, WorkItem, SocialLink } from './types';

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
  ),
  Gtm: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" /></svg>
  ),
  Strategy: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" /></svg>
  ),
  Ecommerce: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="21" r="1" /><circle cx="20" cy="21" r="1" /><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" /></svg>
  ),
  Globe: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>
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
  {
    id: 's5',
    title: 'Go To Market Strategy',
    description: 'Data-driven launch strategies and market mapping to ensure your product segments and scales profitably from day one.',
    icon: 'gtm',
  },
  {
    id: 's6',
    title: 'Digital Marketing Strategy',
    description: 'Customized full-funnel marketing roadmaps that align your brand with market intent and drive sustainable growth.',
    icon: 'strategy',
  },
  {
    id: 's8',
    title: 'Ecommerce Systems',
    description: 'High-converting online storefronts integrated with AI inventory management and personalized shopping experiences.',
    icon: 'ecommerce',
  },
  {
    id: 's9',
    title: 'International Scaling Strategy',
    description: 'Blueprint for global expansion, managing cross-border logistics, localization, and multi-market penetration.',
    icon: 'globe',
  },
];

/**
 * Every entry below is written from the evidence in its own screenshot.
 *
 * Rewritten 2026-08-05 after a prospect audited the site in detail. The
 * previous set had been generated over these images without reading them:
 * the aviation client's story described qualifying mortgage leads, the
 * plastics manufacturer was credited with ARR growth and churn prediction,
 * and categories, tags and results were shuffled between unrelated entries.
 *
 * The rule going forward: the number in `stat` must be readable in `image`,
 * or sourced from a specific reporting session named in a comment. If a
 * claim cannot be evidenced, the entry does not ship. Four earlier entries
 * were removed rather than rewritten because their images showed a forecast
 * model, a bare creative, a 2018 analytics chart with no context, and a
 * third party's CRM with other clients' names visible on screen.
 */
export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'c1',
    client: 'Dubai Off-Plan Property',
    image: '/assets/case-studies/investor-funding/main.png',
    thumbnail: '/assets/case-studies/investor-funding/main.png',
    category: 'Meta Lead Generation',
    stat: '949',
    statLabel: 'Leads in 60 Days',
    tags: ['Meta Lead Ads', 'Video Creative', 'Lead Forms'],
    description: "A Dubai off-plan property brand needed qualified buyer enquiries at a workable cost. We built a video-led lead campaign on Facebook running to instant forms rather than a landing page.",
    challenge: "Property lead costs were high and the volume was not there to keep a sales team busy.",
    solution: "Video creative into native lead forms, with the campaign structured so the cheapest audiences could scale independently.",
    features: ["Video Lead Ads", "Native Lead Forms", "Audience Segmentation"],
    // 949 leads / $4.78 CPL / 607,843 reach are all readable in main.png.
    // Cost per conversion falling from £69 to £16 is readable in the gallery image.
    results: "949 leads in the first 60 days at $4.78 per lead, from 607,843 people reached. On the same account, cost per conversion came down from £69 to £16.",
    gallery: [
      '/assets/case-studies/b2b-services/main.png'
    ]
  },
  {
    id: 'c2',
    client: 'AeroCRS',
    image: '/assets/case-studies/aerocrs-aviation/main.png',
    thumbnail: '/assets/case-studies/aerocrs-aviation/thumbnail.png',
    category: 'LinkedIn Outreach',
    stat: '54%',
    statLabel: 'Of Replies Became Demos',
    tags: ['LinkedIn Outreach', 'Airline Sector', 'Demo Booking'],
    description: "AeroCRS sells reservation software to airlines, so the buyer list is small, senior and hard to reach through advertising. We ran targeted LinkedIn outreach to senior members of SME airlines instead.",
    challenge: "A narrow, senior audience that paid channels could not reach efficiently.",
    solution: "Sequenced LinkedIn connection and message campaigns aimed at named roles inside SME airlines, measured on replies rather than impressions.",
    features: ["Role-Level Targeting", "Sequenced Messaging", "Reply-Based Reporting"],
    // 54% of replies converting to demos, 583 profile views, 163 connections,
    // 88 replies are all readable in main.png.
    results: "54% of everyone who replied converted into a sales demo, from 583 profile views and 163 accepted connections.",
  },
  {
    id: 'c3',
    client: 'Izi Travel',
    image: '/assets/case-studies/izi-travel/main.png',
    thumbnail: '/assets/case-studies/izi-travel/main.png',
    category: 'Enquiry to Booking System',
    stat: 'R322k',
    statLabel: 'Travel Booked in 30 Days',
    tags: ['Google Ads', 'WhatsApp Automation', 'CRM Pipeline'],
    description: "A South African travel agency with a working enquiry flow but no system behind it. We built the pipeline from ad click through to quote and follow-up, then found the real bottleneck was not lead volume at all.",
    challenge: "Quotes were going out quickly but almost none were closing. Fifty-four warm quoted leads had produced a single booking, because nothing followed up after the quote was sent.",
    solution: "Google Ads and a WhatsApp enquiry assistant feeding a CRM pipeline, a custom quote tool for the consultants, and a follow-up engine triggered on pipeline stage rather than on anyone remembering.",
    features: ["WhatsApp Enquiry Assistant", "Custom Quote Tool", "Stage-Triggered Follow-Up"],
    // Figures from the 2026-07-10 monthly review with the client:
    // 230 enquiries, 219 quotes, 6 bookings, R322k booked, 250 leads at ~R32.
    results: "In one 30 day period: 230 enquiries and 219 quotes produced across 16 destinations, six bookings, and R322,000 in travel booked. Leads came in at roughly R32 each.",
  },
  {
    id: 'c4',
    client: 'America Outbound Summit',
    image: '/assets/case-studies/america-outbound/main.png',
    thumbnail: '/assets/case-studies/america-outbound/graphic1.png',
    category: 'Event Registration',
    stat: '435',
    statLabel: 'Event Registrations',
    tags: ['Event Marketing', 'Landing Pages', 'Multi-City Campaign'],
    description: "An in-person summit running across multiple US cities needed attendees in seats, not just page views. We built and ran the registration funnel for each city separately.",
    challenge: "Filling an in-person event across several cities, where a soft registration number means an empty room.",
    solution: "Separate registration paths per city plus a general and a sponsor track, so each could be measured and optimised on its own submission rate.",
    features: ["Per-City Landing Pages", "Sponsor Registration Track", "Submission Rate Optimisation"],
    // 71 + 95 + 116 + 153 = 435, with 42.41% and 45.67% submission rates
    // for Los Angeles and New York, all readable in main.png.
    results: "435 registrations in total, with the Los Angeles and New York pages converting at 42% and 46% of everyone who landed on them.",
  },
  {
    id: 'c5',
    client: 'UK Public Speaking Coach',
    image: '/assets/case-studies/public-speaking-coach/main.png',
    thumbnail: '/assets/case-studies/public-speaking-coach/graphic1.png',
    category: 'Conversational Funnel',
    stat: '83%',
    statLabel: 'Clicked Through',
    tags: ['Messenger Automation', 'Lead Magnet', 'Application Flow'],
    description: "A public speaking coach was delivering a free training guide by email and losing most people before they read it. We moved the whole delivery and qualification flow into Messenger.",
    challenge: "Email delivery of the lead magnet meant low open rates and no way to qualify who was actually worth a conversation.",
    solution: "A conversational sequence that delivered the guide, qualified interest in the same thread, and handed warm applicants to the coach's assistant.",
    features: ["Guide Delivery in Thread", "Inline Qualification", "Assistant Handoff"],
    // 909 sent, 909 delivered (100%), 906 opened (99.7%), 755 clicked (83.1%)
    // readable in main.png. 36% interest CTR readable in graphic1.png.
    results: "Of 909 people sent the guide, 99.7% opened it and 83.1% clicked through. On the qualifying step, 36% put themselves forward as interested.",
    gallery: [
      '/assets/case-studies/public-speaking-coach/graphic1.png'
    ]
  },
  {
    id: 'c6',
    client: 'Ensinger Plastics',
    image: '/assets/case-studies/engineering-plastics/main.png',
    thumbnail: '/assets/case-studies/engineering-plastics/graphic1.png',
    category: 'Social Media Strategy',
    stat: '35%',
    statLabel: 'Engagement Rate Lift',
    tags: ['B2B Social', 'LinkedIn', 'Content Programme'],
    description: "Ensinger is a high-performance engineering plastics manufacturer. We ran their UK social presence for roughly two years, treating a technical product line as something people would actually engage with.",
    challenge: "Technical industrial content that historically got posted and ignored.",
    solution: "A consistent content programme across their social platforms, written with the technical audience in mind rather than around it.",
    features: ["Technical Content Programme", "Platform Management", "Engagement Reporting"],
    // 35% engagement rate increase, 31.9 engagement rate, 6.3k total
    // engagements, 197 messages sent, all readable in main.png.
    results: "A 35% increase in engagement rate across their social platforms, reaching a 31.9 engagement rate over 6,300 total engagements. The team brought the function in house in late 2025.",
  },
  {
    id: 'c7',
    client: 'Google Ads Lead Generation',
    image: '/assets/case-studies/financial-services/main.png',
    thumbnail: '/assets/case-studies/financial-services/main.png',
    category: 'Paid Search',
    stat: '43',
    statLabel: 'Conversions in 30 Days',
    tags: ['Google Ads', 'Search', 'Conversion Tracking'],
    description: "A twenty campaign Google Ads account where spend was going out but the conversion picture was unclear. We rebuilt the tracking first, then optimised against what it showed.",
    challenge: "Spend was being judged on clicks because the conversion data underneath it could not be trusted.",
    solution: "Conversion tracking corrected across the account, then budget consolidated into the campaigns that were actually producing at a sensible cost.",
    features: ["Conversion Tracking Rebuild", "Campaign Consolidation", "Cost Per Conversion Control"],
    // 5,005 clicks, 43 conversions, $93.54 cost per conversion across 20
    // campaigns, all readable in main.png.
    results: "43 conversions in 30 days at $93.54 each, from 5,005 clicks across twenty campaigns.",
  },
  {
    id: 'c8',
    client: 'B2B Precision Outreach',
    image: '/assets/case-studies/tech-aerospace/main.png',
    thumbnail: '/assets/case-studies/tech-aerospace/main.png',
    category: 'LinkedIn Outreach',
    stat: '19',
    statLabel: 'High-Value Leads, Month One',
    tags: ['LinkedIn Outreach', 'ABM', 'Sales Enablement'],
    description: "A high-ticket B2B offer where a handful of the right conversations is worth more than a pipeline full of the wrong ones. We ran precision outreach to a tightly defined list.",
    challenge: "Broad targeting was filling the funnel with people who would never buy at the price point.",
    solution: "A narrow target list worked through profile visits, connection requests and direct messages, measured on qualified interest rather than volume.",
    features: ["Tight List Building", "Multi-Step Touch Sequence", "Interest-Based Qualification"],
    // 2,227 profile visits, 1,880 invites, 403 messages sent, 19 interested,
    // all readable in main.png.
    results: "19 high-value leads in the first month, worked out of 2,227 profile visits and 403 direct messages.",
  }
];

export const STATS: Stat[] = [
  { id: 'st1', value: '282', label: 'Leads Generated', suffix: 'K+' },
  { id: 'st2', value: '20', label: 'Emails Sent', suffix: 'M' },
  { id: 'st3', value: '15', label: 'Budget Managed', suffix: 'M' },
  { id: 'st4', value: '416', label: 'Average ROI', suffix: '%' },
];

/**
 * Live work, openable in a new tab. Every URL here was verified as returning 200
 * on 2026-08-05. If a link dies, pull the entry — an agency page full of dead
 * links is worse than a short page.
 *
 * `kind` is not decoration. Ventures we own are labelled as ours; passing them
 * off as client work is the kind of thing prospects check and catch.
 */
export const WORK: WorkItem[] = [
  {
    id: 'w-threezero',
    name: 'ThreeZero Cape Quarter',
    kind: 'client',
    sector: 'Hospitality — Cape Town',
    summary: 'Website redesign plus the ads and reputation systems running behind it.',
    scope: [
      'WordPress site redesign and rebuild',
      'Google Ads account rebuilt from Smart to Standard campaigns',
      'Conversion tracking repaired end to end',
      'Review collection system integrated',
      'Ongoing monthly management',
    ],
    url: 'https://threezero.co.za',
    urlLabel: 'threezero.co.za',
    status: 'Active',
    region: 'ZA',
  },
  {
    id: 'w-izitravel',
    name: 'Izi Travel',
    kind: 'client',
    sector: 'Travel — South Africa',
    summary: 'A full enquiry-to-quote pipeline, from the ad click through to the follow-up.',
    scope: [
      'Lead capture forms and CRM pipeline build',
      'WhatsApp booking assistant, live and handling enquiries',
      'Custom quote tool built for their consultants',
      'Google Ads management and CRO',
      'Automated follow-up sequences',
    ],
    url: 'https://izitravel.co.za',
    urlLabel: 'izitravel.co.za',
    status: 'Active',
    region: 'ZA',
  },
  {
    id: 'w-dotcom',
    name: 'DotCom Cafe',
    kind: 'client',
    sector: 'Restaurant — South Africa',
    summary: 'New restaurant website and an AI booking assistant that takes reservations on WhatsApp.',
    scope: [
      'Full website design and build',
      'AI WhatsApp booking system',
      'Review collection built into the guest journey',
    ],
    url: 'https://jcereports.netlify.app/dotcom-cafe/',
    urlLabel: 'View the site',
    status: 'Delivered',
    region: 'ZA',
  },
  {
    id: 'w-vaalriver',
    name: 'Vaal River Cruises',
    kind: 'client',
    sector: 'Hospitality — Vaal',
    summary: 'Website and the CRM, bot and reporting layer for a river cruise and venue operator.',
    scope: [
      'Client website build',
      'CRM audit and rebuild',
      'Conversational AI booking strategy',
      'Meta Ads management and monthly reporting',
    ],
    url: 'https://vaalrivercruises.co.za',
    urlLabel: 'vaalrivercruises.co.za',
    status: 'Completed engagement',
    region: 'ZA',
  },
  {
    id: 'w-reviewtap',
    name: 'ReviewTap',
    kind: 'in-house',
    sector: 'Our own product — NFC review collection',
    summary: 'A product we built, sell and run ourselves: tap-to-review hardware with the software behind it.',
    scope: [
      'Shopify storefront and full ecommerce funnel',
      'Custom card design studio built in React',
      'Link and destination management platform',
      'Meta and Google Ads run in-house',
      'Subscription billing and customer onboarding',
    ],
    url: 'https://reviewtap.co.za',
    urlLabel: 'reviewtap.co.za',
    status: 'Active',
    region: 'ZA',
  },
  {
    id: 'w-mfb',
    name: 'MyForeverBaby',
    kind: 'in-house',
    sector: 'Our own store — ecommerce',
    summary: 'An ecommerce brand we own outright, so the funnel work is run on our own money.',
    scope: [
      'Shopify store and conversion-focused homepage rebuild',
      'Meta Ads managed in-house on live budget',
      'Creative production pipeline',
      'CRO programme with tracked before and after',
    ],
    url: 'https://myforeverbaby.co.za',
    urlLabel: 'myforeverbaby.co.za',
    status: 'Active',
    region: 'ZA',
  },
  {
    id: 'w-inspiringwomen',
    name: 'Inspiring Women',
    kind: 'in-house',
    sector: 'Our own content site — organic search',
    summary: 'A content property we own, used to prove the SEO and content playbook before selling it.',
    scope: [
      'Content site build and information architecture',
      'Search-led content clusters',
      'GA4 and Search Console measurement',
    ],
    url: 'https://inspiringwomen.co.za',
    urlLabel: 'inspiringwomen.co.za',
    status: 'Active',
    region: 'ZA',
  },
];

/**
 * Only platforms with a real, working profile belong here. A social icon that
 * goes to "#" reads as neglect on a marketing agency's own site — which is
 * exactly the read we got from a prospect in Aug 2026.
 */
export const SOCIAL_LINKS: SocialLink[] = [
  { label: 'Connect with Jacques on LinkedIn', href: 'https://www.linkedin.com/in/jacquesgroenewald/', icon: 'linkedin' },
];

export const CLIENT_LOGOS = [
  '/assets/brands/Ensinger_GmbH_Logo.svg-768x204.png',
  '/assets/brands/Ensinger_GmbH_Logo.svg-768x204.png',
  '/assets/brands/Ensinger_GmbH_Logo.svg-768x204.png',
  '/assets/brands/Ensinger_GmbH_Logo.svg-768x204.png',
  '/assets/brands/Ensinger_GmbH_Logo.svg-768x204.png',
  '/assets/brands/Ensinger_GmbH_Logo.svg-768x204.png',
];
