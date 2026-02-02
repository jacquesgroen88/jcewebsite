
import React, { useState, useEffect } from 'react';
import { NAV_ITEMS } from '../constants';
import Button from './Button';

interface NavbarProps {
  onNavigate?: (page: 'home' | 'services' | 'about' | 'contact') => void;
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate }) => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu when route changes
  const handleNavigate = (page: 'home' | 'services' | 'about' | 'contact') => {
    setIsOpen(false);
    onNavigate?.(page);
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-[background-color,padding] duration-300 ${scrolled || isOpen ? 'bg-black/90 backdrop-blur-md py-4 border-b border-border' : 'bg-transparent py-6'
      }`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <button
          onClick={() => handleNavigate('home')}
          className="flex items-center gap-3 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-lg z-50 relative"
          aria-label="Go to home page"
        >
          <div className="h-10 w-auto overflow-hidden rounded-lg">
            <img
              src="/assets/case-studies/jcemedialogomain.png"
              alt="JCE Media Main Logo"
              className="h-full w-auto object-contain bg-black/50 rounded-lg p-1"
            />
          </div>
        </button>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          <button
            onClick={() => handleNavigate('home')}
            className="text-text-secondary hover:text-white transition-colors duration-200 text-sm font-medium cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm px-2 py-1"
          >
            Home
          </button>
          <button
            onClick={() => handleNavigate('about')}
            className="text-text-secondary hover:text-white transition-colors duration-200 text-sm font-medium cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm px-2 py-1"
          >
            About
          </button>
          <button
            onClick={() => handleNavigate('services')}
            className="text-text-secondary hover:text-white transition-colors duration-200 text-sm font-medium cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm px-2 py-1"
          >
            Services
          </button>
          <button
            onClick={() => handleNavigate('contact')}
            className="text-text-secondary hover:text-white transition-colors duration-200 text-sm font-medium cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm px-2 py-1"
          >
            Contact
          </button>
          <Button variant="primary" glow className="px-5 py-2 text-sm" onClick={() => handleNavigate('contact')}>
            Get Started
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white p-2 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-md z-[60] relative"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation menu"
        >
          {isOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" /></svg>
          )}
        </button>

        {/* Mobile Overlay */}
        <div className={`fixed inset-0 bg-background/95 backdrop-blur-xl z-50 flex flex-col items-center justify-center space-y-6 transition-transform duration-300 md:hidden ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <button onClick={() => handleNavigate('home')} className="text-lg font-bold uppercase tracking-widest hover:text-accent transition-colors">Home</button>
          <button onClick={() => handleNavigate('services')} className="text-lg font-bold uppercase tracking-widest hover:text-accent transition-colors">Services</button>
          <button onClick={() => handleNavigate('about')} className="text-lg font-bold uppercase tracking-widest hover:text-accent transition-colors">About</button>
          <button onClick={() => handleNavigate('contact')} className="text-lg font-bold uppercase tracking-widest hover:text-accent transition-colors">Contact</button>
          <Button variant="primary" glow className="px-8 py-3 text-lg mt-8" onClick={() => handleNavigate('contact')}>
            Initialize
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
