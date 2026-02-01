
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
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
  ),
  Sales: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg>
  ),
  Automation: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20v-6M6 20V10M18 20V4"/></svg>
  ),
  Content: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 1 1-7.6-11.7 8.5 8.5 0 0 1 7.6 11.7Z"/><path d="m15.5 5.5 3 3-3 3"/></svg>
  )
};

export const SERVICES: ServiceItem[] = [
  {
    id: 's1',
    title: 'AI-Powered Marketing',
    description: 'Unify and automate your entire marketing strategy with adaptive AI algorithms.',
    icon: 'marketing', // Key for component map in Services.tsx
  },
  {
    id: 's2',
    title: 'Intelligent Sales',
    description: 'Bridge the gap between marketing and sales with AI-driven CRM integrations.',
    icon: 'sales',
  },
  {
    id: 's3',
    title: 'Business Automation',
    description: 'Revolutionize your workflow by automating repetitive cross-department tasks.',
    icon: 'automation',
  },
  {
    id: 's4',
    title: 'Content Automation',
    description: 'Blend AI efficiency with human creativity to drive consistent brand messaging.',
    icon: 'content',
  },
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'c1',
    client: 'Lead Generation',
    category: 'Facebook Ads & Funding',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80',
    stat: '949',
    statLabel: 'Leads & $300K Funding',
  },
  {
    id: 'c2',
    client: 'Strategic Outreach',
    category: 'Email Marketing',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80',
    stat: '54%',
    statLabel: 'Demo Conversion Rate',
  },
  {
    id: 'c3',
    client: 'Pipeline Acceleration',
    category: 'B2B Email Strategy',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80',
    stat: '70K',
    statLabel: 'Prospects to Pipeline',
  },
  {
    id: 'c4',
    client: 'Event Marketing',
    category: 'New York & LA Events',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80',
    stat: '435',
    statLabel: 'Registrations from Email',
  },
  {
    id: 'c5',
    client: 'Public Speaking Coach',
    category: 'Chatbot Innovation',
    image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd05a?auto=format&fit=crop&q=80',
    stat: '£2.26',
    statLabel: 'Lead Cost Slashed',
  },
  {
    id: 'c6',
    client: 'B2B High-Value',
    category: 'LinkedIn Ads',
    image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&q=80',
    stat: '43',
    statLabel: 'Leads in 30 Days',
  },
];

export const STATS: Stat[] = [
  { id: 'st1', value: '340', label: 'Event Regs', suffix: '+' },
  { id: 'st2', value: '949', label: 'FB Leads', suffix: '+' },
  { id: 'st3', value: '70', label: 'Prospects Engaged', suffix: 'K+' },
  { id: 'st4', value: '54', label: 'Demo Conv. Rate', suffix: '%' },
];

export const CLIENT_LOGOS = [
  'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg',
  'https://upload.wikimedia.org/wikipedia/commons/f/ff/Netflix_logo.svg',
  'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg',
  'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg',
  'https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg',
  'https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg',
  'https://upload.wikimedia.org/wikipedia/commons/b/b9/Slack_Technologies_Logo.svg',
  'https://upload.wikimedia.org/wikipedia/commons/e/e8/Tesla_logo.png'
];
