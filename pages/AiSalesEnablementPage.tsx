import React from 'react';
import {
  Target, PhoneOff, Clock, Users, Filter, Bot, LineChart, Repeat,
} from 'lucide-react';
import OfferLanding, { OfferConfig } from '../components/OfferLanding';

const config: OfferConfig = {
  serviceParam: 'AI Sales Enablement',

  eyebrow: 'AI Sales Enablement',
  titleLead: 'Turn Your Pipeline Into A',
  titleAccent: 'Closing Machine',
  subhead:
    'Your reps spend more time chasing dead leads than closing live ones. We build AI sales systems that score every lead, follow up in seconds, and hand your team only the deals worth their time.',
  heroImage: '/assets/services/intelligent-sales.webp',
  heroLabel: 'Intelligent Sales',
  heroStats: [
    { value: '5 min', label: 'Avg lead response' },
    { value: '3x', label: 'More conversations' },
    { value: '24/7', label: 'Follow-up coverage' },
  ],

  problemEyebrow: 'The leak',
  problemTitle: 'Leads Don’t Go Cold. They Get Ignored.',
  problemIntro:
    'Most sales teams lose revenue in the gaps between steps, not on the call. A lead that waits an hour for a reply is already talking to your competitor. Here is where the money quietly disappears.',
  problems: [
    {
      icon: <Clock className="w-6 h-6" />,
      title: 'Slow first response',
      body: 'The odds of qualifying a lead drop sharply after the first five minutes. Manual inboxes cannot keep that pace, so warm leads go cold before a human ever replies.',
    },
    {
      icon: <PhoneOff className="w-6 h-6" />,
      title: 'Follow-up falls through',
      body: 'It takes several touches to close, yet most reps stop after one or two. The deals that needed a nudge on day four simply never hear from you again.',
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Reps buried in busywork',
      body: 'Data entry, note-taking, and manual outreach eat the hours your closers should spend selling. Your best people are doing your cheapest work.',
    },
  ],

  pillarsEyebrow: 'The build',
  pillarsTitle: 'A Sales Engine That Never Sleeps',
  pillarsIntro:
    'We install a connected system across your CRM, inbox, and messaging channels so every lead is captured, ranked, and worked automatically, while your team stays focused on human conversations that close.',
  pillars: [
    {
      icon: <Filter className="w-7 h-7" />,
      title: 'AI Lead Scoring & Routing',
      body: 'Every inbound lead is scored on fit and intent the moment it lands, then routed to the right rep or sequence. Your team wakes up to a ranked list, not a pile.',
      points: [
        'Real-time fit and intent scoring',
        'Automatic routing by territory, product, or value',
        'Duplicate detection and data enrichment',
        'Hot-lead alerts pushed to reps instantly',
      ],
    },
    {
      icon: <Bot className="w-7 h-7" />,
      title: 'Instant, Human-Sounding Follow-Up',
      body: 'AI drafts and sends the first reply in seconds, on email or WhatsApp, in your brand voice. It books the meeting or warms the lead until a rep steps in.',
      points: [
        'Sub-five-minute first response, day or night',
        'Multi-step nurture across email and WhatsApp',
        'Booking links that fill your calendar automatically',
        'Seamless hand-off to a human at the right moment',
      ],
    },
    {
      icon: <Repeat className="w-7 h-7" />,
      title: 'Automated Outreach Sequences',
      body: 'Persistent, personalised sequences that keep working the pipeline for weeks, so no opportunity dies from silence. Every reply is logged back to the CRM.',
      points: [
        'Behaviour-triggered follow-up cadences',
        'Personalisation pulled from live CRM data',
        'Auto-pause when a lead replies or books',
        'Full activity history synced to your CRM',
      ],
    },
    {
      icon: <LineChart className="w-7 h-7" />,
      title: 'Pipeline Visibility & Forecasting',
      body: 'A live view of where every deal sits and what is likely to close, so you stop guessing at month-end. Bottlenecks surface before they cost you the quarter.',
      points: [
        'Real-time pipeline and stage tracking',
        'AI forecasting on close probability',
        'Rep and source performance dashboards',
        'Weekly summaries delivered to your inbox',
      ],
    },
  ],

  stepsEyebrow: 'How it works',
  stepsTitle: 'Live In Weeks, Not Quarters',
  steps: [
    { title: 'Audit', body: 'We map your current sales flow, tools, and the exact points where leads leak or stall.' },
    { title: 'Design', body: 'We design the scoring rules, sequences, and hand-off logic around how your team actually sells.' },
    { title: 'Build', body: 'We connect your CRM, inbox, and channels and wire up the automations, tested end to end.' },
    { title: 'Optimise', body: 'We watch the numbers, tune the sequences, and keep lifting conversion month after month.' },
  ],

  outcomesEyebrow: 'The payoff',
  outcomesTitle: 'What Changes For You',
  outcomes: [
    { value: '5 min', label: 'Response time', sub: 'From hours to minutes, every lead, every hour.' },
    { value: '3x', label: 'Conversations', sub: 'More qualified conversations from the same lead volume.' },
    { value: '10+ hrs', label: 'Saved per rep', sub: 'Hours a week handed back to your closers, every week.' },
  ],

  includedTitle: 'Everything In The Build',
  included: [
    'Full sales-flow audit and leak analysis',
    'CRM setup, cleanup, and pipeline design',
    'AI lead scoring and routing rules',
    'Instant follow-up across email and WhatsApp',
    'Multi-step nurture and outreach sequences',
    'Calendar booking automation',
    'Live pipeline and forecasting dashboard',
    'Team training and a documented playbook',
  ],
  includedImage: '/assets/services/business-automation.webp',
  includedLabel: 'System Build',

  faqEyebrow: 'Questions',
  faqTitle: 'Before You Ask',
  faqs: [
    {
      q: 'Will this replace my sales team?',
      a: 'No. It removes the busywork that slows them down. The AI handles speed, follow-up, and admin so your reps spend their time on the conversations that actually close deals.',
    },
    {
      q: 'Does it work with my current CRM?',
      a: 'Almost certainly. We build on GoHighLevel and integrate with the major CRMs and inboxes. In the audit we confirm exactly how it plugs into your stack before any work starts.',
    },
    {
      q: 'Will the AI messages sound robotic?',
      a: 'They are trained on your brand voice and reviewed before launch. The goal is replies that feel personal and prompt. A human always takes over at the right moment.',
    },
    {
      q: 'How fast can we go live?',
      a: 'Most builds are live within two to four weeks depending on complexity. You will see the first automations working well before the full system is complete.',
    },
  ],

  ctaEyebrow: 'Ready when you are',
  ctaTitleLead: 'Stop Losing Deals To',
  ctaTitleAccent: 'Silence',
  ctaBody:
    'Book a free strategy call. We will map exactly where your pipeline is leaking and show you the fastest path to more closed deals, with no jargon and no obligation.',
};

const AiSalesEnablementPage: React.FC = () => <OfferLanding config={config} />;

export default AiSalesEnablementPage;
