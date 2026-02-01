
import React from 'react';
import { CASE_STUDIES } from '../constants';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 overflow-hidden bg-surface/30">
      <div className="max-w-7xl mx-auto px-6 mb-12 flex items-end justify-between">
        <div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 uppercase">
            Proven <span className="chrome-text">Case Studies</span>
          </h2>
          <p className="text-text-secondary text-lg font-body">From zero to high-converting marketing engines. Real data, real impact.</p>
        </div>
        <div className="hidden md:flex gap-4">
           <div className="h-[2px] w-24 bg-border relative">
              <div className="absolute h-full bg-accent w-1/3 left-0 animate-pulse" />
           </div>
           <span className="text-[10px] font-mono text-accent uppercase tracking-widest">Scroll to Explore</span>
        </div>
      </div>

      <div className="flex gap-8 overflow-x-auto pb-12 px-6 no-scrollbar snap-x snap-mandatory">
        {CASE_STUDIES.map((project) => (
          <div 
            key={project.id} 
            className="flex-shrink-0 w-[85vw] md:w-[500px] snap-center group cursor-pointer"
          >
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-border shadow-2xl bg-background">
              <img 
                src={project.image} 
                alt={project.client} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-40 group-hover:opacity-70 grayscale group-hover:grayscale-0"
              />
              {/* Overlay content */}
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent p-8 flex flex-col justify-end">
                <div className="mb-4 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <span className="px-3 py-1 rounded-full bg-accent/20 border border-accent/40 text-[10px] font-bold uppercase tracking-widest text-accent">
                    {project.category}
                  </span>
                  <h3 className="text-3xl font-bold mt-2 leading-tight">{project.client}</h3>
                </div>
                
                <div className="flex items-center justify-between border-t border-white/10 pt-6 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100">
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
    </section>
  );
};

export default Projects;
