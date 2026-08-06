
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import Card from '../components/Card';
import Button from '../components/Button';
import Reveal from '../components/Reveal';
import Magnetic from '../components/Magnetic';
import { WORK } from '../constants';
import { WorkItem } from '../types';

const STATUS_STYLES: Record<WorkItem['status'], string> = {
  'Active': 'text-emerald-300 border-emerald-400/30 bg-emerald-400/10',
  'Delivered': 'text-accent border-accent/30 bg-accent/10',
  'Completed engagement': 'text-text-secondary border-border bg-white/5',
};

const WorkCard: React.FC<{ item: WorkItem }> = ({ item }) => (
  <Card className="p-8 md:p-10 h-full flex flex-col bg-surface/40 border-white/10 hover:border-accent/40 transition-colors duration-300">
    <div className="flex items-start justify-between gap-4 mb-6">
      <div>
        <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-white">{item.name}</h3>
        <p className="text-sm text-text-secondary font-body mt-1">{item.sector}</p>
      </div>
      <span
        className={`shrink-0 text-[10px] font-mono uppercase tracking-[0.15em] px-3 py-1.5 rounded-full border ${STATUS_STYLES[item.status]}`}
      >
        {item.status}
      </span>
    </div>

    <p className="text-text-secondary font-body leading-relaxed mb-6">{item.summary}</p>

    <ul className="space-y-2.5 mb-8 flex-1">
      {item.scope.map((line) => (
        <li key={line} className="flex gap-3 text-sm text-white/70 font-body">
          <span className="text-accent mt-1.5 shrink-0 w-1 h-1 rounded-full bg-accent" aria-hidden="true" />
          {line}
        </li>
      ))}
    </ul>

    <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
      <a
        href={item.url}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:text-white transition-colors duration-200 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm"
      >
        {item.urlLabel}
        <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
      </a>

      {/* Only our own ventures carry these — a client's channels are theirs. */}
      {item.socials?.map((s) => (
        <a
          key={s.href}
          href={s.href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs font-mono uppercase tracking-widest text-text-secondary hover:text-accent transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm"
        >
          {s.label}
        </a>
      ))}
    </div>
  </Card>
);

const WorkPage: React.FC = () => {
  const navigate = useNavigate();
  const clientWork = WORK.filter((w) => w.kind === 'client');
  const inHouse = WORK.filter((w) => w.kind === 'in-house');

  return (
    <div className="pt-32 pb-24 px-6 animate-fade-in relative overflow-hidden">
      <div className="max-w-7xl mx-auto">

        <div className="max-w-3xl mb-20">
          <span className="text-accent font-mono text-sm uppercase tracking-[0.3em]">Our Work</span>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter uppercase leading-none mt-6 mb-8">
            WORK YOU CAN <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-accent">OPEN</span>
          </h1>
          <div className="space-y-5 text-xl text-text-secondary font-body leading-relaxed">
            <p>
              Every project below is live right now. Click any of them and you land on the real thing, not a
              screenshot in a slide deck.
            </p>
            <p>
              We have split them honestly. <span className="text-white font-semibold">Client work</span> is what
              businesses paid us to build. <span className="text-white font-semibold">In-house</span> are the
              ventures we own and operate ourselves, on our own budget. Both are real. Only one of them is a
              reference you can phone, so we do not blur the line.
            </p>
          </div>
        </div>

        <section className="mb-24" aria-labelledby="client-work-heading">
          <div className="flex items-center gap-4 mb-10">
            <h2 id="client-work-heading" className="text-xs font-mono uppercase tracking-[0.3em] text-accent">
              Client Work
            </h2>
            <div className="h-px flex-1 bg-border" />
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {clientWork.map((item, i) => (
              <Reveal key={item.id} delay={i * 0.06} className="h-full">
                <WorkCard item={item} />
              </Reveal>
            ))}
          </div>
        </section>

        <section className="mb-24" aria-labelledby="in-house-heading">
          <div className="flex items-center gap-4 mb-4">
            <h2 id="in-house-heading" className="text-xs font-mono uppercase tracking-[0.3em] text-accent">
              Ventures We Own
            </h2>
            <div className="h-px flex-1 bg-border" />
          </div>
          <p className="text-text-secondary font-body max-w-2xl mb-10">
            We run our own businesses on the same systems we sell. When a tactic costs us money, we find out
            first.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            {inHouse.map((item, i) => (
              <Reveal key={item.id} delay={i * 0.06} className="h-full">
                <WorkCard item={item} />
              </Reveal>
            ))}
          </div>
        </section>

        <Card className="p-10 md:p-16 bg-surface/50 border-white/10 text-center">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter uppercase mb-6">
            WANT TO SPEAK TO ONE OF THEM?
          </h2>
          <p className="text-text-secondary font-body text-lg max-w-2xl mx-auto mb-10">
            We will put you directly in touch with a client on this page, in your market, doing something close
            enough to your business to be worth your time. Ask on the call and we will arrange it.
          </p>
          <Magnetic className="inline-block">
            <Button variant="primary" glow className="px-12 py-5 text-lg" onClick={() => navigate('/contact')}>
              Book a Strategy Call
            </Button>
          </Magnetic>
        </Card>

      </div>
    </div>
  );
};

export default WorkPage;
