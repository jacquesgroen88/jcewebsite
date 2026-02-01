
import React from 'react';
import { CLIENT_LOGOS } from '../constants';
import Button from './Button';
import Card from './Card';

const SocialIcons = {
  LinkedIn: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
  ),
  Twitter: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
  ),
  Instagram: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
  ),
  Facebook: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
  )
};

const Footer: React.FC = () => {
  return (
    <footer className="pt-24 pb-12 px-6 border-t border-border bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Logo Cloud - Infinite Scroll */}
        <div className="mb-32 overflow-hidden relative">
          <p className="text-center text-xs font-mono uppercase tracking-[0.3em] text-text-secondary mb-12">Global Partnerships & Trusted Brands</p>
          <div className="flex gap-16 whitespace-nowrap animate-infinite-scroll">
            {[...CLIENT_LOGOS, ...CLIENT_LOGOS].map((logo, i) => (
              <img 
                key={i} 
                src={logo} 
                alt="Client Logo" 
                className="h-8 md:h-12 w-auto opacity-40 hover:opacity-100 transition-opacity filter grayscale brightness-200"
              />
            ))}
          </div>
          {/* Gradient Masks for fade effect */}
          <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-background to-transparent z-10" />
          <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-background to-transparent z-10" />
        </div>

        {/* Redesigned CTA Section */}
        <div className="mb-24 relative">
          <Card hasBeam className="bg-surface/50 border-white/10 p-12 md:p-20 overflow-hidden text-center md:text-left backdrop-blur-3xl rounded-[3rem]">
            {/* Immersive mesh glow inside CTA */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/20 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2 -z-10 animate-pulse-glow" />
            <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-purple-500/10 blur-[100px] rounded-full translate-y-1/2 -translate-x-1/2 -z-10" />
            
            <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl md:text-7xl font-bold text-white leading-[1.1] mb-8 tracking-tighter uppercase">
                  READY TO <span className="chrome-text">SCALE</span> YOUR BUSINESS?
                </h2>
                <p className="text-text-secondary text-lg md:text-xl font-body max-w-lg">
                  Let's discuss how AI automation can unlock your team's true potential and drive measurable ROI.
                </p>
              </div>
              <div className="flex flex-col gap-4 items-center md:items-end">
                <Button variant="primary" glow className="px-12 py-6 text-xl w-full md:w-auto shadow-2xl shadow-accent/20">
                  Book a Strategy Call
                </Button>
                <p className="text-xs font-mono text-text-secondary uppercase tracking-widest mt-2">Zero commitment. Total clarity.</p>
              </div>
            </div>
          </Card>
        </div>

        {/* Bottom Links */}
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center font-bold text-2xl shadow-lg shadow-accent/30 text-white">
                J
              </div>
              <span className="font-bold text-2xl uppercase font-mono tracking-tighter">JCE Media</span>
            </div>
            <p className="text-text-secondary max-w-sm leading-relaxed font-body">
              Pioneering AI-driven strategies that deliver measurable ROI and streamline complex business operations. We build the systems that build your future.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold mb-8 uppercase text-xs tracking-[0.3em] text-accent">Solutions</h4>
            <ul className="space-y-4 text-text-secondary text-sm font-medium">
              <li><a href="#" className="hover:text-white transition-colors duration-200">AI Marketing Systems</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200">Sales Flow Automation</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200">Enterprise AI Integration</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200">Creative Content AI</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-8 uppercase text-xs tracking-[0.3em] text-accent">Company</h4>
            <ul className="space-y-4 text-text-secondary text-sm font-medium">
              <li><a href="#" className="hover:text-white transition-colors duration-200">Our Success Stories</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200">The JCE Philosophy</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200">Resources & News</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200">Privacy Policy</a></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-border gap-8">
          <p className="text-text-secondary text-xs uppercase tracking-[0.4em] font-mono">
            © 2026 JCE Media. Engineered for Growth.
          </p>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full bg-surface border border-border flex items-center justify-center text-text-secondary hover:bg-accent hover:text-white hover:border-accent transition-all duration-300">
              {SocialIcons.LinkedIn}
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-surface border border-border flex items-center justify-center text-text-secondary hover:bg-accent hover:text-white hover:border-accent transition-all duration-300">
              {SocialIcons.Twitter}
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-surface border border-border flex items-center justify-center text-text-secondary hover:bg-accent hover:text-white hover:border-accent transition-all duration-300">
              {SocialIcons.Instagram}
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-surface border border-border flex items-center justify-center text-text-secondary hover:bg-accent hover:text-white hover:border-accent transition-all duration-300">
              {SocialIcons.Facebook}
            </a>
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes infinite-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .animate-infinite-scroll {
          animation: infinite-scroll 40s linear infinite;
        }
        .animate-infinite-scroll:hover {
          animation-play-state: paused;
        }
      `}} />
    </footer>
  );
};

export default Footer;
