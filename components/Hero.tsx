
import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Button from './Button';
import HeroCanvas from './HeroCanvas';
import Magnetic from './Magnetic';

const REDUCE =
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const Hero: React.FC = () => {
  const navigate = useNavigate();
  const sectionRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const words = ["MARKETING", "SALES", "OPERATIONS"];

  // Parallax: hero content lifts + fades as you scroll past it.
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start start', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], [0, -90]);
  const opacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);

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
    <section ref={sectionRef} className="relative min-h-screen flex items-center overflow-hidden pt-20 px-6">
      {/* Living-system node network — the kinetic signature */}
      <HeroCanvas className="absolute inset-0 w-full h-full z-0" />

      {/* Legibility scrim: darken left/bottom so the headline stays crisp while
          the network breathes on the right and top. */}
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-background via-background/70 to-transparent pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-40 z-0 bg-gradient-to-t from-background to-transparent pointer-events-none" />

      <motion.div ref={containerRef} style={REDUCE ? undefined : { y, opacity }} className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="max-w-3xl space-y-8">
          <div className="reveal opacity-0 translate-y-10 transition-all duration-700 delay-100">
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent text-[10px] sm:text-xs md:text-sm font-bold uppercase tracking-widest mb-6">
              Automate up to 80% of Marketing, Sales & Operations
            </span>
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.12] md:leading-tight tracking-tighter uppercase">
              WE BUILD <span key={currentWordIndex} className="chrome-text animate-pop-in-up inline-block min-w-[120px] sm:min-w-[180px] md:min-w-[240px] text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-accent">{words[currentWordIndex]}</span> SYSTEMS THAT <span className="text-accent">SCALE</span> BUSINESSES.
            </h1>
            <p className="mt-5 text-base sm:text-lg md:text-xl text-text-secondary max-w-lg leading-relaxed font-body">
              282,000+ leads generated. $15M in budgets managed. 416% average ROI. Transforming marketing, sales, and operations with AI-first strategies that deliver measurable results.
            </p>
          </div>

          <div className="reveal opacity-0 translate-y-10 transition-all duration-700 delay-300 flex flex-col sm:flex-row gap-3 sm:gap-4">
            <Magnetic className="w-full sm:w-auto">
              <Button variant="primary" glow className="w-full px-8 py-4 text-base sm:text-lg" onClick={() => navigate('/contact')}>
                Book a Strategy Call
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Magnetic>
            <Magnetic className="w-full sm:w-auto">
              <Button variant="outline" className="w-full px-8 py-4 text-base sm:text-lg" onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>
                View Results
              </Button>
            </Magnetic>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;

