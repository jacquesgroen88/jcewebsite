
import React, { useEffect, useRef } from 'react';
import { SERVICES } from '../constants';
import Card from './Card';

interface ServicesProps {
  onDetailClick?: () => void;
}

const IconMap: Record<string, React.ReactNode> = {
  marketing: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="m16 12-4-4-4 4M12 8v8"/></svg>,
  sales: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="20" x2="12" y2="10"/><line x1="18" y1="20" x2="18" y2="4"/><line x1="6" y1="20" x2="6" y2="16"/></svg>,
  automation: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/></svg>,
  content: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>,
};

const Services: React.FC<ServicesProps> = ({ onDetailClick }) => {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
            entry.target.classList.remove('opacity-0', 'translate-y-10');
          }
        });
      },
      { threshold: 0.1 }
    );

    const children = gridRef.current?.querySelectorAll('.stagger');
    children?.forEach((child, i) => {
      (child as HTMLElement).style.transitionDelay = `${i * 100}ms`;
      observer.observe(child);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="services" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 uppercase">
            OUR <span className="text-accent">CORE</span> SOLUTIONS
          </h2>
          <p className="text-text-secondary max-w-xl text-lg font-body">
            We leverage cutting-edge AI technology to transform how modern businesses operate and communicate.
          </p>
        </div>

        <div ref={gridRef} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service) => (
            <Card key={service.id} hasBeam className="stagger opacity-0 translate-y-10 h-full flex flex-col justify-between">
              <div>
                <div className="w-14 h-14 bg-accent/10 border border-accent/20 rounded-xl flex items-center justify-center text-accent mb-6 shadow-inner group-hover:scale-110 group-hover:bg-accent group-hover:text-white transition-all duration-300">
                  {IconMap[service.icon] || service.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-accent transition-colors uppercase tracking-tight">{service.title}</h3>
                <p className="text-text-secondary leading-relaxed text-sm font-body">
                  {service.description}
                </p>
              </div>
              <button 
                onClick={onDetailClick}
                className="mt-8 text-xs font-bold uppercase tracking-widest text-accent flex items-center gap-2 group-hover:gap-3 transition-all text-left"
              >
                Learn More
                <span>→</span>
              </button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
