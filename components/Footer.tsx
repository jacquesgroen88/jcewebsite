
import React from 'react';
import { Linkedin, Twitter, Instagram, Facebook } from 'lucide-react';
import { CLIENT_LOGOS } from '../constants';
import Button from './Button';
import Card from './Card';

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
                <Button variant="primary" glow className="px-12 py-6 text-xl w-full md:w-auto shadow-2xl shadow-accent/20" onClick={() => window.location.hash = '#contact'}>
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
              <li><a href="#" className="hover:text-white transition-colors duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm">AI Marketing Systems</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm">Sales Flow Automation</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm">Enterprise AI Integration</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm">Creative Content AI</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-8 uppercase text-xs tracking-[0.3em] text-accent">Company</h4>
            <ul className="space-y-4 text-text-secondary text-sm font-medium">
              <li><a href="#" className="hover:text-white transition-colors duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm">Our Success Stories</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm">The JCE Philosophy</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm">Resources & News</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm">Privacy Policy</a></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-border gap-8">
          <p className="text-text-secondary text-xs uppercase tracking-[0.4em] font-mono">
            © 2026 JCE Media. Engineered for Growth.
          </p>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full bg-surface border border-border flex items-center justify-center text-text-secondary hover:bg-accent hover:text-white hover:border-accent transition-all duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background" aria-label="Follow us on LinkedIn">
              <Linkedin size={20} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-surface border border-border flex items-center justify-center text-text-secondary hover:bg-accent hover:text-white hover:border-accent transition-all duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background" aria-label="Follow us on Twitter">
              <Twitter size={20} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-surface border border-border flex items-center justify-center text-text-secondary hover:bg-accent hover:text-white hover:border-accent transition-all duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background" aria-label="Follow us on Instagram">
              <Instagram size={20} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-surface border border-border flex items-center justify-center text-text-secondary hover:bg-accent hover:text-white hover:border-accent transition-all duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background" aria-label="Follow us on Facebook">
              <Facebook size={20} />
            </a>
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
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
