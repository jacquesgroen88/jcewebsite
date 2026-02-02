
import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import Button from './Button';

const Hero: React.FC = () => {
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
    <section className="relative min-h-screen flex items-center justify-center pt-20 px-6 overflow-hidden">
      <div ref={containerRef} className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">

        <div className="space-y-8 z-10">
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
            <Button variant="primary" glow className="px-8 py-4 text-lg" onClick={() => window.location.hash = '#contact'}>
              Book a Strategy Call
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" className="px-8 py-4 text-lg" onClick={() => window.location.hash = '#projects'}>
              View Results
            </Button>
          </div>
        </div>

        <div className="reveal opacity-0 translate-y-10 transition-all duration-1000 delay-500 relative hidden lg:flex justify-center items-center">
          <div className="relative w-full aspect-square max-w-lg">
            <div className="absolute inset-0 bg-accent/20 blur-[100px] animate-pulse-glow" />
            <div className="relative z-10 w-full h-full rounded-3xl overflow-hidden border border-white/10 shadow-2xl backdrop-blur-sm group">
              <img
                src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop"
                alt="High-tech scale automation systems"
                className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />

              {/* Floating Elements (Y2K Geometric) */}
              <div className="absolute top-8 right-8 w-24 h-24 border-2 border-accent rounded-full opacity-20 animate-spin" style={{ animationDuration: '10s' }} />
              <div className="absolute bottom-12 left-8 p-4 bg-white/5 backdrop-blur-md rounded-xl border border-white/10 space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-accent-green rounded-full animate-pulse" />
                  <span className="text-[10px] font-mono text-white/60">LIVE SYSTEM PERFORMANCE</span>
                </div>
                <div className="w-32 h-2 bg-accent rounded-full" />
                <div className="w-24 h-2 bg-white/20 rounded-full" />
                <div className="w-40 h-2 bg-white/10 rounded-full" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

