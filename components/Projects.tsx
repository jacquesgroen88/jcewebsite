import React, { useState, useRef } from 'react';
import { CASE_STUDIES } from '../constants';
import { CaseStudy } from '../types';
import CaseStudyModal from './CaseStudyModal';

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<CaseStudy | null>(null);
  const scrollerRef = useRef<HTMLDivElement>(null);

  const scrollByCards = (dir: number) => {
    scrollerRef.current?.scrollBy({ left: dir * 460, behavior: 'smooth' });
  };

  return (
    <section id="projects" className="relative bg-surface/30 py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-12 flex items-end justify-between gap-6">
        <div>
          <span className="inline-block px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-[10px] font-bold uppercase tracking-widest mb-4">
            Proven Results &amp; ROI
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tighter mb-4 uppercase leading-[1.1]">
            CLIENT <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">CASE STUDIES</span>
          </h2>
          <p className="text-text-secondary text-base md:text-xl font-body max-w-2xl leading-relaxed">
            From zero to high-converting marketing engines. We don't just guess—we engineer growth that lasts.
          </p>
        </div>

        <div className="hidden md:flex gap-4 shrink-0">
          <button
            onClick={() => scrollByCards(-1)}
            className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:bg-accent hover:border-accent hover:text-black transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            aria-label="Scroll case studies left"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
          </button>
          <button
            onClick={() => scrollByCards(1)}
            className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:bg-accent hover:border-accent hover:text-black transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            aria-label="Scroll case studies right"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
          </button>
        </div>
      </div>

      {/* Single-row horizontal swipe. Vertical page scroll passes straight through. */}
      <div
        ref={scrollerRef}
        className="flex gap-5 md:gap-6 overflow-x-auto no-scrollbar snap-x snap-mandatory scroll-smooth px-6 pb-4"
      >
        {CASE_STUDIES.map((project) => (
          <div
            key={project.id}
            className="flex-shrink-0 w-[82vw] sm:w-[60vw] md:w-[440px] snap-center group cursor-pointer"
            onClick={() => setSelectedProject(project)}
          >
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-border bg-background shadow-2xl">
              <img
                src={project.thumbnail || project.image}
                alt={project.client}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover grayscale opacity-80 transition-all duration-700 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105"
              />
              {/* Stronger scrim so the stat + label always stay legible */}
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/85 to-background/10" />
              <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end">
                <div className="mb-4">
                  <span className="px-3 py-1 rounded-full bg-accent/20 border border-accent/40 text-[10px] font-bold uppercase tracking-widest text-accent">
                    {project.category}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-bold mt-2 leading-tight">{project.client}</h3>
                </div>

                <div className="flex items-center justify-between border-t border-white/10 pt-4 md:pt-6">
                  <div>
                    <p className="text-3xl md:text-4xl font-bold text-white">{project.stat}</p>
                    <p className="text-[10px] font-mono uppercase text-accent tracking-widest">{project.statLabel}</p>
                  </div>
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-accent group-hover:border-accent transition-all">
                    <svg className="w-5 h-5 md:w-6 md:h-6 rotate-[-45deg] group-hover:rotate-0 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <CaseStudyModal
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
        caseStudy={selectedProject}
      />
    </section>
  );
};

export default Projects;
