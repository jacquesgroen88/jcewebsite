
import React, { useEffect, useRef, useState } from 'react';
import { STATS } from '../constants';

const CountUp: React.FC<{ value: string; suffix?: string }> = ({ value, suffix }) => {
  const target = parseFloat(value);
  const isNumeric = !Number.isNaN(target);
  const [display, setDisplay] = useState(isNumeric ? '0' : value);
  const ref = useRef<HTMLDivElement>(null);
  const done = useRef(false);

  useEffect(() => {
    if (!isNumeric) return;
    const el = ref.current;
    if (!el) return;

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) {
      setDisplay(value);
      return;
    }

    const decimals = (value.split('.')[1] || '').length;
    const run = () => {
      if (done.current) return;
      done.current = true;
      const duration = 1600;
      const start = performance.now();
      const step = (now: number) => {
        const t = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - t, 3); // easeOutCubic
        const current = target * eased;
        setDisplay(current.toFixed(decimals));
        if (t < 1) requestAnimationFrame(step);
        else setDisplay(value);
      };
      requestAnimationFrame(step);
    };

    const io = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) run(); },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [isNumeric, target, value]);

  return (
    <div ref={ref} className="text-5xl md:text-7xl font-bold mb-2 chrome-text group-hover:scale-110 transition-transform duration-500 tabular-nums">
      {display}{suffix}
    </div>
  );
};

const Stats: React.FC = () => {
  return (
    <section className="py-24 px-6 border-y border-border bg-background">
      <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-12">
        {STATS.map((stat) => (
          <div key={stat.id} className="text-center group">
            <CountUp value={stat.value} suffix={stat.suffix} />
            <div className="text-sm font-mono uppercase tracking-[0.2em] text-text-secondary group-hover:text-accent transition-colors">
              {stat.label}
            </div>
            {/* Minimalist animated bar */}
            <div className="mt-4 w-12 h-[1px] bg-border mx-auto relative overflow-hidden">
               <div className="absolute inset-0 bg-accent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stats;
