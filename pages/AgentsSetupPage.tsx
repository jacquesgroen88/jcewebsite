import React from 'react';
import {
  Bot, Workflow, Puzzle, ShieldCheck, MessageSquare, Cog, Boxes, AlarmClock,
} from 'lucide-react';
import OfferLanding, { OfferConfig } from '../components/OfferLanding';

const config: OfferConfig = {
  serviceParam: 'Agents Setup',

  eyebrow: 'AI Agents Setup',
  titleLead: 'Hire A Digital Worker That',
  titleAccent: 'Never Clocks Out',
  subhead:
    'An AI agent is a tireless team member that answers customers, books appointments, chases leads, and runs your workflows around the clock. We design, build, and deploy custom agents wired straight into the tools you already use.',
  heroImage: '/assets/services/business-automation.webp',
  heroLabel: 'Agent Deployment',
  heroStats: [
    { value: '24/7', label: 'Always working' },
    { value: '<10 sec', label: 'Reply time' },
    { value: '0', label: 'Sick days' },
  ],

  problemEyebrow: 'The bottleneck',
  problemTitle: 'You Are The Bottleneck. Every Business Owner Is.',
  problemIntro:
    'There are only so many hours in your day, and the tasks that keep the business running do not wait for you to be free. Growth stalls the moment everything has to pass through a human. An agent removes that ceiling.',
  problems: [
    {
      icon: <AlarmClock className="w-6 h-6" />,
      title: 'After-hours enquiries lost',
      body: 'Customers message at night and on weekends. If nobody answers until Monday, most have already moved on to whoever replied first.',
    },
    {
      icon: <Cog className="w-6 h-6" />,
      title: 'Repetitive tasks eat your day',
      body: 'Answering the same questions, booking, quoting, and data entry consume hours that should go to the work only you can do.',
    },
    {
      icon: <Boxes className="w-6 h-6" />,
      title: 'Tools that don’t talk',
      body: 'Your CRM, calendar, inbox, and store all live in separate boxes. Moving information between them by hand is slow and quietly full of errors.',
    },
  ],

  pillarsEyebrow: 'The build',
  pillarsTitle: 'Custom Agents, Built Around Your Business',
  pillarsIntro:
    'We do not hand you a generic chatbot. We build agents trained on your business, connected to your systems, and scoped to do real work, from the first conversation to the completed action.',
  pillars: [
    {
      icon: <MessageSquare className="w-7 h-7" />,
      title: 'Customer-Facing Agents',
      body: 'A WhatsApp or website agent that answers questions, qualifies leads, and books appointments in seconds, day or night, in your brand voice.',
      points: [
        'WhatsApp, website, and social channels',
        'Instant answers trained on your business',
        'Lead qualification and booking built in',
        'Smooth escalation to a human when needed',
      ],
    },
    {
      icon: <Workflow className="w-7 h-7" />,
      title: 'Internal Workflow Agents',
      body: 'Agents that run your back office: routing leads, updating records, sending follow-ups, and moving data between tools so your team stops copy-pasting.',
      points: [
        'Lead routing and CRM updates',
        'Automated follow-up and reminders',
        'Document and quote generation',
        'Data synced across every tool',
      ],
    },
    {
      icon: <Puzzle className="w-7 h-7" />,
      title: 'Deep Tool Integration',
      body: 'We wire your agent into the systems you already run, so it acts inside your real workflow instead of sitting in a silo that nobody checks.',
      points: [
        'GoHighLevel, CRM, and calendar',
        'Email, WhatsApp, and messaging',
        'Shopify and e-commerce platforms',
        'Custom connections via API',
      ],
    },
    {
      icon: <ShieldCheck className="w-7 h-7" />,
      title: 'Guardrails & Control',
      body: 'Agents deployed with clear boundaries, human-in-the-loop checkpoints, and full logging, so you get the speed of automation without losing oversight.',
      points: [
        'Defined scope and safe boundaries',
        'Human approval on sensitive actions',
        'Full conversation and action logs',
        'Ongoing tuning and monitoring',
      ],
    },
  ],

  stepsEyebrow: 'How it works',
  stepsTitle: 'From Idea To Deployed Agent',
  steps: [
    { title: 'Scope', body: 'We pin down exactly what the agent should do, where it lives, and what a good outcome looks like.' },
    { title: 'Train', body: 'We feed it your business knowledge, tone, and rules so it responds accurately and on-brand.' },
    { title: 'Connect', body: 'We integrate it with your CRM, calendar, and channels so it takes real action, not just chats.' },
    { title: 'Deploy', body: 'We launch, monitor the first conversations closely, and refine until it runs reliably on its own.' },
  ],

  outcomesEyebrow: 'The payoff',
  outcomesTitle: 'What Changes For You',
  outcomes: [
    { value: '24/7', label: 'Coverage', sub: 'Every enquiry answered instantly, at any hour.' },
    { value: '15+ hrs', label: 'Reclaimed weekly', sub: 'Routine work handled without touching your team.' },
    { value: 'Zero', label: 'Missed leads', sub: 'Nothing slips through nights, weekends, or busy spells.' },
  ],

  includedTitle: 'Everything In The Build',
  included: [
    'Discovery and use-case scoping',
    'Custom agent trained on your business',
    'WhatsApp, website, or internal deployment',
    'CRM, calendar, and channel integration',
    'Booking, qualification, and follow-up logic',
    'Guardrails, logging, and human hand-off',
    'Launch, monitoring, and tuning period',
    'Documentation and team handover',
  ],
  includedImage: '/assets/services/digital-marketing-strategy.webp',
  includedLabel: 'Agent Architecture',

  faqEyebrow: 'Questions',
  faqTitle: 'Before You Ask',
  faqs: [
    {
      q: 'What exactly is an AI agent?',
      a: 'Think of it as a digital worker. Unlike a basic chatbot that only answers, an agent takes action: it books the meeting, updates the CRM, sends the follow-up, and moves work forward inside your real systems.',
    },
    {
      q: 'Is this just a chatbot?',
      a: 'No. A chatbot talks. An agent does. We connect it to your tools so it completes tasks end to end, with the guardrails to keep it safe and on-scope.',
    },
    {
      q: 'What can I actually automate?',
      a: 'Customer support, lead qualification, appointment booking, follow-up sequences, quoting, data entry, and cross-tool workflows are all common. In the scoping call we identify the highest-value agent to build first.',
    },
    {
      q: 'How do I stay in control?',
      a: 'Every agent ships with defined boundaries, human approval on sensitive actions, and full logging. You decide what it can do on its own and what needs a person to sign off.',
    },
  ],

  ctaEyebrow: 'Ready when you are',
  ctaTitleLead: 'Put An Agent',
  ctaTitleAccent: 'To Work',
  ctaBody:
    'Book a free strategy call. We will find the single highest-leverage agent for your business and show you exactly what it would handle, what it would save you, and how fast we can have it live.',
};

const AgentsSetupPage: React.FC = () => <OfferLanding config={config} />;

export default AgentsSetupPage;
