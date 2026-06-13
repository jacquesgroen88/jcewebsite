
import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Button from './Button';
import HeroCanvas from './HeroCanvas';

const Hero: React.FC = () => {
  const navigate = useNavigate();
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const words = ["MARKETING", "SALES", "OPERATIONS"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % words.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

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

    const children = containerRef.current?.querySelectorAll('.reveal');
    children?.forEach(child => observer.observe(child));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20 px-6">
      {/* Living-system node network — the kinetic signature */}
      <HeroCanvas className="absolute inset-0 w-full h-full z-0" />

      {/* Legibility scrim: darken left/bottom so the headline stays crisp while
          the network breathes on the right and top. */}
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-background via-background/70 to-transparent pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-40 z-0 bg-gradient-to-t from-background to-transparent pointer-events-none" />

      <div ref={containerRef} className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="max-w-3xl space-y-8">
          <div className="reveal opacity-0 translate-y-10 transition-all duration-700 delay-100">
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent text-[10px] sm:text-xs md:text-sm font-bold uppercase tracking-widest mb-6">
              Automate up to 80% of Marketing, Sales & Operations
            </span>
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[1.1] md:leading-tight tracking-tighter uppercase">
              WE BUILD <span key={currentWordIndex} className="chrome-text animate-pop-in-up inline-block min-w-[180px] sm:min-w-[240px] md:min-w-[300px] text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">{words[currentWordIndex]}</span> SYSTEMS THAT <span className="text-accent">SCALE</span> BUSINESSES.
            </h1>
            <p className="mt-6 text-lg md:text-xl text-text-secondary max-w-lg leading-relaxed font-body">
              282,000+ leads generated. $15M in budgets managed. 416% average ROI. Transforming marketing, sales, and operations with AI-first strategies that deliver measurable results.
            </p>
          </div>

          <div className="reveal opacity-0 translate-y-10 transition-all duration-700 delay-300 flex flex-wrap gap-4">
            <Button variant="primary" glow className="px-8 py-4 text-lg" onClick={() => navigate('/contact')}>
              Book a Strategy Call
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" className="px-8 py-4 text-lg" onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>
              View Results
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

