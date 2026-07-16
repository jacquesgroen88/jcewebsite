import React from 'react';
import {
  PenTool, Megaphone, TrendingDown, EyeOff, Layers, Sparkles, BarChart3, Gauge,
} from 'lucide-react';
import OfferLanding, { OfferConfig } from '../components/OfferLanding';

const config: OfferConfig = {
  serviceParam: 'AI Marketing Enablement',

  eyebrow: 'AI Marketing Enablement',
  titleLead: 'Market Like A Team Of',
  titleAccent: 'Fifty',
  titleTail: 'With The Team You Have',
  subhead:
    'Great marketing dies from inconsistency, not bad ideas. We build AI content and campaign systems that produce months of on-brand work in minutes, optimise spend in real time, and keep you visible everywhere your customers look.',
  heroImage: '/assets/services/ai-powered-marketing.webp',
  heroLabel: 'AI-Powered Marketing',
  heroStats: [
    { value: '10x', label: 'Content output' },
    { value: '<1 day', label: 'Idea to published' },
    { value: '100%', label: 'On-brand voice' },
  ],

  problemEyebrow: 'The gap',
  problemTitle: 'You’re Not Short On Ideas. You’re Short On Output.',
  problemIntro:
    'Every business knows it should post more, test more, and stay top of mind. Then the week fills up and marketing is the first thing to slip. That gap between intent and output is exactly where growth stalls.',
  problems: [
    {
      icon: <TrendingDown className="w-6 h-6" />,
      title: 'Content that goes quiet',
      body: 'You start strong, then the calendar empties out. Inconsistent posting kills momentum and quietly tells your audience you have gone dark.',
    },
    {
      icon: <EyeOff className="w-6 h-6" />,
      title: 'Invisible where it counts',
      body: 'Your competitors show up in search, in feeds, and in inboxes. If you are not consistently present across channels, you are handing them the attention.',
    },
    {
      icon: <Megaphone className="w-6 h-6" />,
      title: 'Ad spend on guesswork',
      body: 'Budget goes out the door before anyone knows what is working. Without fast feedback and optimisation, you are paying to learn the same lesson twice.',
    },
  ],

  pillarsEyebrow: 'The build',
  pillarsTitle: 'A Marketing Engine On Autopilot',
  pillarsIntro:
    'We install AI-driven workflows that turn one idea into a full week of content, keep every channel fed, and steer your ad spend toward what actually converts, all in your voice and under your control.',
  pillars: [
    {
      icon: <Sparkles className="w-7 h-7" />,
      title: 'AI Content Production',
      body: 'Trained on your brand voice, the system turns a single brief into posts, emails, captions, and video scripts, ready to review and publish. Months of content in an afternoon.',
      points: [
        'Brand voice trained and locked in',
        'Blogs, social, email, and video scripts',
        'Repurposing from one asset into many',
        'Human review before anything ships',
      ],
    },
    {
      icon: <Layers className="w-7 h-7" />,
      title: 'Multi-Channel Scheduling',
      body: 'One calendar that feeds every channel automatically, so you stay consistently visible without living inside a scheduler. Set the rhythm once and it runs.',
      points: [
        'Auto-scheduling across social and email',
        'A single content calendar you actually keep',
        'Best-time posting per channel',
        'Evergreen recycling of top performers',
      ],
    },
    {
      icon: <Gauge className="w-7 h-7" />,
      title: 'Ad Optimisation In Real Time',
      body: 'Your Meta and Google spend is watched daily and steered toward the creative and audiences that convert, so budget compounds instead of leaking.',
      points: [
        'Daily performance monitoring',
        'Budget shifted to winning creative',
        'Audience and creative testing built in',
        'Clear reporting on cost per result',
      ],
    },
    {
      icon: <BarChart3 className="w-7 h-7" />,
      title: 'Attribution & Reporting',
      body: 'One dashboard shows what is driving leads and revenue across every channel, so you invest in what works and cut what does not, with confidence.',
      points: [
        'Cross-channel attribution in one view',
        'Lead and revenue tracking end to end',
        'Automated weekly and monthly reports',
        'Plain-English insight, not vanity metrics',
      ],
    },
  ],

  stepsEyebrow: 'How it works',
  stepsTitle: 'From Silent To Everywhere',
  steps: [
    { title: 'Audit', body: 'We review your brand, channels, and current output to find the fastest wins.' },
    { title: 'Voice', body: 'We train the system on your tone, offers, and audience so every asset sounds like you.' },
    { title: 'Build', body: 'We wire up the content, scheduling, and ad workflows and load your first calendar.' },
    { title: 'Scale', body: 'We track performance, double down on what converts, and keep the engine improving.' },
  ],

  outcomesEyebrow: 'The payoff',
  outcomesTitle: 'What Changes For You',
  outcomes: [
    { value: '10x', label: 'More output', sub: 'A full content calendar produced in a fraction of the time.' },
    { value: 'Always on', label: 'Visibility', sub: 'Consistent presence across every channel that matters.' },
    { value: 'Lower', label: 'Cost per lead', sub: 'Ad spend steered toward what actually converts.' },
  ],

  includedTitle: 'Everything In The Build',
  included: [
    'Brand and channel audit',
    'AI brand-voice training and guardrails',
    'Content engine for social, email, and blog',
    'Multi-channel scheduling and calendar',
    'Meta and Google ad optimisation workflows',
    'Cross-channel attribution dashboard',
    'Automated weekly and monthly reporting',
    'Team training and a content playbook',
  ],
  includedImage: '/assets/services/content-automation.webp',
  includedLabel: 'Content Engine',

  faqEyebrow: 'Questions',
  faqTitle: 'Before You Ask',
  faqs: [
    {
      q: 'Will AI content sound generic?',
      a: 'Not when it is trained properly. We lock in your brand voice, offers, and audience up front, and every asset is reviewed before it publishes. The output reads like your best work, produced faster.',
    },
    {
      q: 'Do I lose control over what gets posted?',
      a: 'No. You approve the calendar and can review anything before it ships. The system removes the manual grind, not your judgement.',
    },
    {
      q: 'Does this include managing my ads?',
      a: 'Yes. We build and optimise your Meta and Google campaigns as part of the engine, with daily monitoring and clear reporting on cost per result.',
    },
    {
      q: 'How quickly will I see results?',
      a: 'Content output jumps immediately once the engine is live. Reach and lead metrics build over the first several weeks as consistency compounds and the ad optimisation kicks in.',
    },
  ],

  ctaEyebrow: 'Ready when you are',
  ctaTitleLead: 'Never Go',
  ctaTitleAccent: 'Quiet Again',
  ctaBody:
    'Book a free strategy call. We will show you the exact content and campaign system that keeps you visible, on-brand, and generating leads, without adding headcount.',
};

const AiMarketingEnablementPage: React.FC = () => <OfferLanding config={config} />;

export default AiMarketingEnablementPage;
