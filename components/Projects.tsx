
import React, { useState } from 'react';
import { CASE_STUDIES } from '../constants';
import { CaseStudy } from '../types';
import CaseStudyModal from './CaseStudyModal';

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<CaseStudy | null>(null);

  return (
    <section id="projects" className="py-24 overflow-hidden bg-surface/30">
      <div className="max-w-7xl mx-auto px-6 mb-12 flex items-end justify-between">
        <div className="reveal opacity-0 translate-y-10 transition-all duration-700">
          <h2 className="text-4xl md:text-7xl font-bold tracking-tighter mb-4 uppercase leading-[1.1]">
            CLIENT <span className="chrome-text">CASE</span> STUDIES
          </h2>
          <p className="text-text-secondary text-lg md:text-xl font-body max-w-2xl">From zero to high-converting marketing engines. We don't just guess—we engineer growth.</p>
        </div>
        <div className="hidden md:flex gap-4">
          <button
            onClick={() => {
              const el = document.getElementById('projects-scroll-container');
              if (el) el.scrollBy({ left: -400, behavior: 'smooth' });
            }}
            className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:bg-accent hover:border-accent hover:text-black transition-all cursor-pointer"
            aria-label="Scroll left"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
          </button>
          <button
            onClick={() => {
              const el = document.getElementById('projects-scroll-container');
              if (el) el.scrollBy({ left: 400, behavior: 'smooth' });
            }}
            className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:bg-accent hover:border-accent hover:text-black transition-all cursor-pointer"
            aria-label="Scroll right"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
          </button>
        </div>
      </div>

      <div id="projects-scroll-container" className="grid grid-rows-2 grid-flow-col gap-6 overflow-x-auto pb-12 px-6 no-scrollbar snap-x snap-mandatory scroll-smooth">
        {CASE_STUDIES.map((project) => (
          <div
            key={project.id}
            className="flex-shrink-0 w-[85vw] md:w-[480px] snap-center group cursor-pointer"
            onClick={() => setSelectedProject(project)}
          >
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-border shadow-2xl bg-background">
              <img
                src={project.thumbnail || project.image}
                alt={project.client}
                className="w-full h-full object-cover transition-all duration-700 opacity-60 group-hover:opacity-100 grayscale group-hover:grayscale-0 group-hover:scale-105"
              />
              {/* Overlay content - now persistent */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent p-8 flex flex-col justify-end">
                <div className="mb-4 transition-all duration-500">
                  <span className="px-3 py-1 rounded-full bg-accent/20 border border-accent/40 text-[10px] font-bold uppercase tracking-widest text-accent">
                    {project.category}
                  </span>
                  <h3 className="text-3xl font-bold mt-2 leading-tight">{project.client}</h3>
                </div>

                <div className="flex items-center justify-between border-t border-white/10 pt-6 transition-all duration-500">
                  <div>
                    <p className="text-4xl font-bold text-white">{project.stat}</p>
                    <p className="text-[10px] font-mono uppercase text-accent tracking-widest">{project.statLabel}</p>
                  </div>
                  <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-accent group-hover:border-accent transition-all">
                    <svg className="w-6 h-6 rotate-[-45deg] group-hover:rotate-0 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
