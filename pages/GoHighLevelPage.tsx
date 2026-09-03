import React from 'react';
import {
  Users, Zap, CalendarCheck, Star, Snowflake, LayoutDashboard, Unplug,
} from 'lucide-react';
import OfferLanding, { OfferConfig } from '../components/OfferLanding';

const config: OfferConfig = {
  serviceParam: 'GoHighLevel Setup',

  eyebrow: 'GoHighLevel Setup & Support',
  titleLead: 'You Paid For GoHighLevel. Now Make It',
  titleAccent: 'Actually Work',
  subhead:
    'Most people buy GoHighLevel, get overwhelmed by the blank dashboard, and quietly go back to doing everything by hand. We set it up properly, wire the automations, and support you so it books, follows up, and closes on autopilot.',
  heroImage: '/assets/services/intelligent-sales.webp',
  heroLabel: 'System Buildout',
  heroStats: [
    { value: 'Days', label: 'To go live' },
    { value: '100+', label: 'Automations built' },
    { value: '24/7', label: 'Follow-up running' },
  ],

  problemEyebrow: 'The real problem',
  problemTitle: 'The Platform Is Powerful. An Empty Account Is Useless.',
  problemIntro:
    'You did not buy a premium platform to log in, stare at it, and feel behind. But that is where most people land. The software is not the problem. An un-configured account is, and that is exactly what we fix.',
  problems: [
    {
      icon: <Snowflake className="w-6 h-6" />,
      title: 'Hot leads go cold',
      body: 'Enquiries come in and nothing happens automatically. With no instant follow-up, the lead cools off and buys from whoever replied first.',
    },
    {
      icon: <LayoutDashboard className="w-6 h-6" />,
      title: 'A dashboard you never use',
      body: 'You are paying every month for a platform you barely touch, using ten percent of it and doing the other ninety by hand.',
    },
    {
      icon: <Unplug className="w-6 h-6" />,
      title: 'Nothing is connected',
      body: 'Calendars, pipelines, forms, and follow-ups sit in separate boxes that were never wired together, so the system never actually runs.',
    },
  ],

  pillarsEyebrow: 'The build',
  pillarsTitle: 'We Turn Your Empty Account Into A Growth Machine',
  pillarsIntro:
    'Everything below, done for you and done right, so the system handles the boring, revenue-critical work while you run the business. No jargon, no manuals, no being left alone with a login.',
  pillars: [
    {
      icon: <Users className="w-7 h-7" />,
      title: 'Lead Capture & CRM',
      body: 'Every lead lands in one clean pipeline instead of scattered across your inbox, phone, and DMs, so nothing ever slips.',
      points: [
        'Forms and funnels that capture every enquiry',
        'A clean, organised sales pipeline',
        'Contacts tagged and sorted automatically',
        'One place to see every lead and its status',
      ],
    },
    {
      icon: <Zap className="w-7 h-7" />,
      title: 'Instant Follow-Up',
      body: 'The second a lead comes in, automated email and SMS fire on your behalf, so you are first, you look sharp, and you win.',
      points: [
        'Email and SMS sequences that fire instantly',
        'Missed-call text-back on every missed call',
        'Long-term nurture so old leads stay warm',
        'Personalised in your brand voice',
      ],
    },
    {
      icon: <CalendarCheck className="w-7 h-7" />,
      title: 'Booking & Calendars',
      body: 'Connected calendars and automated reminders turn interest into booked appointments while cutting no-shows.',
      points: [
        'Online booking wired to your calendar',
        'Automatic confirmations and reminders',
        'No-show reduction built in',
        'Round-robin routing for teams',
      ],
    },
    {
      icon: <Star className="w-7 h-7" />,
      title: 'Reviews & Reactivation',
      body: 'Grow your reputation on autopilot and turn your old contact list back into fresh bookings and revenue.',
      points: [
        'Automated Google review requests',
        'Reputation monitoring and responses',
        'Database reactivation win-back campaigns',
        'Recurring revenue from past customers',
      ],
    },
  ],

  stepsEyebrow: 'How it works',
  stepsTitle: 'From Overwhelmed To Fully Operational',
  steps: [
    { title: 'Free Setup Call', body: 'We look at your business, your goals, and your account. You leave with a clear plan, whether you work with us or not.' },
    { title: 'We Build It', body: 'We configure your account, wire the automations, and connect your calendars, forms, and pipelines end to end.' },
    { title: 'You Review Live', body: 'We walk you through the system live and explain it in plain English before anything goes on.' },
    { title: 'We Support You', body: 'Ongoing help and optimisation so it keeps working and grows with you, long after go-live.' },
  ],

  outcomesEyebrow: 'The payoff',
  outcomesTitle: 'What Changes For You',
  outcomes: [
    { value: 'Instant', label: 'Follow-up', sub: 'Every lead gets a reply the moment it lands, day or night.' },
    { value: 'Days', label: 'To live', sub: 'Core systems switched on in days, not the months it takes alone.' },
    { value: 'Zero', label: 'Leads lost', sub: 'Nothing slips through nights, weekends, or missed calls.' },
  ],

  includedTitle: 'Everything In The Build',
  included: [
    'Discovery and goals setup call',
    'Full account configuration',
    'Lead capture forms and funnels',
    'Clean sales pipeline setup',
    'Email and SMS follow-up automations',
    'Missed-call text-back',
    'Calendar and booking integration',
    'Review requests and reputation setup',
    'Database reactivation campaign',
    'Live walkthrough in plain English',
    'CRM migration if you are switching',
    'Ongoing support and optimisation',
  ],
  includedImage: '/assets/services/business-automation.webp',
  includedLabel: 'System Architecture',

  faqEyebrow: 'Questions',
  faqTitle: 'Straight Answers',
  faqs: [
    {
      q: 'Do I need to already have a GoHighLevel account?',
      a: 'No. We can set you up with one, or work inside your existing account. Either way you leave the call knowing exactly what happens next.',
    },
    {
      q: 'How long does setup take?',
      a: 'Core systems are usually live within a few days of our call. More complex builds take a little longer, and we tell you the exact timeline upfront.',
    },
    {
      q: 'Do you offer ongoing support?',
      a: 'Yes. Setup is the start, not the end. We support and optimise the system so it keeps producing as your business grows.',
    },
    {
      q: 'What if I am not technical at all?',
      a: 'Perfect. That is exactly who this is for. You never touch the back end unless you want to. We handle the build and explain it in plain English.',
    },
    {
      q: 'Can you migrate me from another CRM?',
      a: 'Yes. We handle the migration and make sure nothing is lost, so you switch over cleanly without losing contacts or history.',
    },
  ],

  ctaEyebrow: 'Ready when you are',
  ctaTitleLead: 'Put GoHighLevel',
  ctaTitleAccent: 'To Work',
  ctaBody:
    'Book a free setup call. We will look at your account, map the highest-value automations for your business, and give you a clear plan to turn GoHighLevel into your most valuable employee.',
};

const GoHighLevelPage: React.FC = () => <OfferLanding config={config} />;

export default GoHighLevelPage;
