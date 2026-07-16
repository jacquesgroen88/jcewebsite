import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Check, ChevronDown, ArrowRight } from 'lucide-react';
import Card from './Card';
import Button from './Button';
import BrandVisual from './BrandVisual';
import Reveal from './Reveal';
import Magnetic from './Magnetic';

/* ============================================================
   Shared landing-page scaffold for JCE Media offer pages.
   Data-driven so each offer (AI Sales Enablement, AI Marketing
   Enablement, Agents Setup) stays visually consistent while
   carrying its own copy. Matches the site design system:
   Space Grotesk headings, accent #3B82F6, Card/Button/Brand-
   Visual/Reveal, gradient-shimmer, mono eyebrows.
   ============================================================ */

export interface Stat {
  value: string;
  label: string;
}

export interface Feature {
  icon: React.ReactNode;
  title: string;
  body: string;
  points: string[];
}

export interface Step {
  title: string;
  body: string;
}

export interface Outcome {
  value: string;
  label: string;
  sub: string;
}

export interface Faq {
  q: string;
  a: string;
}

export interface OfferConfig {
  /** value passed to /contact?service= and used in the pre-filled form */
  serviceParam: string;

  eyebrow: string;
  titleLead: string;
  titleAccent: string;
  titleTail?: string;
  subhead: string;
  heroImage: string;
  heroLabel: string;
  heroStats: Stat[];

  problemEyebrow: string;
  problemTitle: string;
  problemIntro: string;
  problems: { icon: React.ReactNode; title: string; body: string }[];

  pillarsEyebrow: string;
  pillarsTitle: string;
  pillarsIntro: string;
  pillars: Feature[];

  stepsEyebrow: string;
  stepsTitle: string;
  steps: Step[];

  outcomesEyebrow: string;
  outcomesTitle: string;
  outcomes: Outcome[];

  includedTitle: string;
  included: string[];
  includedImage: string;
  includedLabel: string;

  faqEyebrow: string;
  faqTitle: string;
  faqs: Faq[];

  ctaEyebrow: string;
  ctaTitleLead: string;
  ctaTitleAccent: string;
  ctaBody: string;
}

const OfferLanding: React.FC<{ config: OfferConfig }> = ({ config: c }) => {
  const navigate = useNavigate();
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const goContact = () =>
    navigate(`/contact?service=${encodeURIComponent(c.serviceParam)}`);

  return (
    <div className="pt-32 pb-24 px-6 animate-fade-in overflow-hidden">
      <div className="max-w-7xl mx-auto">

        {/* ============================ HERO ============================ */}
        <section className="grid lg:grid-cols-2 gap-16 items-center mb-32">
          <div className="space-y-8">
            <span className="text-accent font-mono text-sm uppercase tracking-[0.3em] block">
              {c.eyebrow}
            </span>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter uppercase leading-[0.95]">
              {c.titleLead}{' '}
              <span className="gradient-shimmer">{c.titleAccent}</span>
              {c.titleTail ? <> {c.titleTail}</> : null}
            </h1>
            <p className="text-xl text-text-secondary max-w-xl font-body leading-relaxed">
              {c.subhead}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Magnetic className="inline-block">
                <Button
                  variant="primary"
                  glow
                  className="px-9 py-5 text-lg shadow-[0_0_30px_rgba(59,130,246,0.2)]"
                  onClick={goContact}
                >
                  Book a Strategy Call
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Magnetic>
              <Button
                variant="outline"
                className="px-9 py-5 text-lg"
                onClick={() => navigate('/services')}
              >
                See all services
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border">
              {c.heroStats.map((s) => (
                <div key={s.label}>
                  <p className="text-3xl md:text-4xl font-bold text-white tracking-tight">
                    {s.value}
                  </p>
                  <p className="text-xs text-text-secondary font-mono uppercase tracking-widest mt-1">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <BrandVisual
              image={c.heroImage}
              alt={c.serviceParam}
              label={c.heroLabel}
              className="aspect-[4/5] shadow-2xl"
            />
            <div className="absolute -z-10 -inset-6 bg-accent/10 blur-[80px] rounded-full" />
          </div>
        </section>

        {/* ============================ PROBLEM ============================ */}
        <Reveal>
          <section className="mb-32">
            <div className="max-w-3xl mb-14">
              <span className="text-accent font-mono text-sm uppercase tracking-[0.3em] mb-4 block">
                {c.problemEyebrow}
              </span>
              <h2 className="text-4xl md:text-6xl font-bold tracking-tighter uppercase mb-6">
                {c.problemTitle}
              </h2>
              <p className="text-lg text-text-secondary font-body leading-relaxed">
                {c.problemIntro}
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {c.problems.map((p) => (
                <Card key={p.title} className="p-8">
                  <div className="w-12 h-12 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 flex items-center justify-center mb-5">
                    {p.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{p.title}</h3>
                  <p className="text-text-secondary text-sm leading-relaxed font-body">
                    {p.body}
                  </p>
                </Card>
              ))}
            </div>
          </section>
        </Reveal>

        {/* ============================ PILLARS ============================ */}
        <Reveal>
          <section className="mb-32">
            <div className="max-w-3xl mb-14">
              <span className="text-accent font-mono text-sm uppercase tracking-[0.3em] mb-4 block">
                {c.pillarsEyebrow}
              </span>
              <h2 className="text-4xl md:text-6xl font-bold tracking-tighter uppercase mb-6">
                {c.pillarsTitle}
              </h2>
              <p className="text-lg text-text-secondary font-body leading-relaxed">
                {c.pillarsIntro}
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {c.pillars.map((p) => (
                <Card key={p.title} hasBeam className="p-8">
                  <div className="w-14 h-14 rounded-2xl bg-accent/10 border border-accent/20 text-accent flex items-center justify-center mb-6">
                    {p.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{p.title}</h3>
                  <p className="text-text-secondary leading-relaxed font-body mb-6">
                    {p.body}
                  </p>
                  <ul className="space-y-3">
                    {p.points.map((pt) => (
                      <li key={pt} className="flex items-start gap-3 text-sm text-white/80">
                        <Check className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              ))}
            </div>
          </section>
        </Reveal>

        {/* ============================ STEPS ============================ */}
        <Reveal>
          <section className="mb-32">
            <div className="max-w-3xl mb-14">
              <span className="text-accent font-mono text-sm uppercase tracking-[0.3em] mb-4 block">
                {c.stepsEyebrow}
              </span>
              <h2 className="text-4xl md:text-6xl font-bold tracking-tighter uppercase">
                {c.stepsTitle}
              </h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {c.steps.map((s, i) => (
                <div
                  key={s.title}
                  className="relative bg-surface border border-border rounded-2xl p-7 hover:border-accent/40 transition-colors duration-500"
                >
                  <span className="font-mono text-5xl font-bold text-accent/20 leading-none">
                    0{i + 1}
                  </span>
                  <h3 className="text-lg font-bold mt-4 mb-2 uppercase tracking-tight">
                    {s.title}
                  </h3>
                  <p className="text-text-secondary text-sm leading-relaxed font-body">
                    {s.body}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </Reveal>

        {/* ============================ OUTCOMES ============================ */}
        <Reveal>
          <section className="mb-32">
            <div className="max-w-3xl mb-14">
              <span className="text-accent font-mono text-sm uppercase tracking-[0.3em] mb-4 block">
                {c.outcomesEyebrow}
              </span>
              <h2 className="text-4xl md:text-6xl font-bold tracking-tighter uppercase">
                {c.outcomesTitle}
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {c.outcomes.map((o) => (
                <Card key={o.label} className="p-10 text-center bg-accent/5 border-accent/20">
                  <p className="text-5xl md:text-6xl font-bold gradient-shimmer leading-none mb-4">
                    {o.value}
                  </p>
                  <p className="text-white font-semibold uppercase tracking-widest text-sm mb-2">
                    {o.label}
                  </p>
                  <p className="text-text-secondary text-sm font-body">{o.sub}</p>
                </Card>
              ))}
            </div>
          </section>
        </Reveal>

        {/* ============================ INCLUDED ============================ */}
        <Reveal>
          <section className="mb-32 grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative order-2 lg:order-1">
              <BrandVisual
                image={c.includedImage}
                alt={c.includedTitle}
                label={c.includedLabel}
                className="aspect-video shadow-2xl"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tighter uppercase mb-8">
                {c.includedTitle}
              </h2>
              <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-4">
                {c.included.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-white/85">
                    <div className="w-5 h-5 rounded-full bg-accent/15 border border-accent/30 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-accent" />
                    </div>
                    <span className="text-sm leading-relaxed font-body">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        </Reveal>

        {/* ============================ FAQ ============================ */}
        <Reveal>
          <section className="mb-32 max-w-3xl mx-auto">
            <div className="text-center mb-14">
              <span className="text-accent font-mono text-sm uppercase tracking-[0.3em] mb-4 block">
                {c.faqEyebrow}
              </span>
              <h2 className="text-4xl md:text-6xl font-bold tracking-tighter uppercase">
                {c.faqTitle}
              </h2>
            </div>
            <div className="space-y-4">
              {c.faqs.map((f, i) => {
                const open = openFaq === i;
                return (
                  <div
                    key={f.q}
                    className="border border-border rounded-2xl bg-surface/60 overflow-hidden transition-colors hover:border-accent/30"
                  >
                    <button
                      onClick={() => setOpenFaq(open ? null : i)}
                      className="w-full flex items-center justify-between gap-4 text-left px-6 py-5 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-2xl"
                      aria-expanded={open}
                    >
                      <span className="text-base md:text-lg font-semibold text-white">
                        {f.q}
                      </span>
                      <ChevronDown
                        className={`w-5 h-5 text-accent shrink-0 transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
                      />
                    </button>
                    <div
                      className={`grid transition-all duration-300 ease-out ${open ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
                    >
                      <div className="overflow-hidden">
                        <p className="px-6 pb-6 text-text-secondary leading-relaxed font-body">
                          {f.a}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        </Reveal>

        {/* ============================ CTA ============================ */}
        <Card hasBeam className="text-center p-16 md:p-24 bg-accent/5 border-accent/20 overflow-hidden backdrop-blur-3xl rounded-[3rem]">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-accent/10 to-transparent opacity-40" />
          <div className="relative z-10 space-y-8">
            <span className="inline-block py-1 px-3 border border-accent/30 rounded-full bg-accent/5 text-accent font-mono text-xs uppercase tracking-[0.2em]">
              {c.ctaEyebrow}
            </span>
            <h2 className="text-4xl md:text-7xl font-bold text-white tracking-tighter uppercase leading-none">
              {c.ctaTitleLead} <span className="text-accent">{c.ctaTitleAccent}</span>
            </h2>
            <p className="text-text-secondary text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-light">
              {c.ctaBody}
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 pt-2">
              <Magnetic className="inline-block">
                <Button
                  variant="primary"
                  glow
                  className="px-10 py-5 text-lg shadow-[0_0_30px_rgba(59,130,246,0.2)]"
                  onClick={goContact}
                >
                  Book a Strategy Call
                </Button>
              </Magnetic>
              <a href="https://wa.me/27795124292" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="px-10 py-5 text-lg w-full">
                  Chat on WhatsApp
                </Button>
              </a>
            </div>
            <p className="text-xs font-mono text-text-secondary uppercase tracking-widest">
              Zero commitment. Total clarity.
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default OfferLanding;
