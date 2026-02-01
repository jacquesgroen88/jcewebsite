
import React from 'react';
import { STATS } from '../constants';

const Stats: React.FC = () => {
  return (
    <section className="py-24 px-6 border-y border-border bg-background">
      <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-12">
        {STATS.map((stat) => (
          <div key={stat.id} className="text-center group">
            <div className="text-5xl md:text-7xl font-bold mb-2 chrome-text group-hover:scale-110 transition-transform duration-500">
              {stat.value}{stat.suffix}
            </div>
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
