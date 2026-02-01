
import React, { useState, useEffect } from 'react';
import { NAV_ITEMS } from '../constants';
import Button from './Button';

interface NavbarProps {
  onNavigate?: (page: 'home' | 'services' | 'about' | 'contact') => void;
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-background/80 backdrop-blur-md py-4 border-b border-border' : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <button onClick={() => onNavigate?.('home')} className="flex items-center gap-2">
          <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center font-bold text-xl overflow-hidden shadow-lg shadow-accent/20">
            J
          </div>
          <span className="font-bold text-xl tracking-tighter uppercase font-mono">JCE Media</span>
        </button>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          <button 
            onClick={() => onNavigate?.('home')}
            className="text-text-secondary hover:text-white transition-colors duration-200 text-sm font-medium"
          >
            Home
          </button>
          <button 
            onClick={() => onNavigate?.('about')}
            className="text-text-secondary hover:text-white transition-colors duration-200 text-sm font-medium"
          >
            About
          </button>
          <button 
            onClick={() => onNavigate?.('services')}
            className="text-text-secondary hover:text-white transition-colors duration-200 text-sm font-medium"
          >
            Services
          </button>
          <button 
            onClick={() => onNavigate?.('contact')}
            className="text-text-secondary hover:text-white transition-colors duration-200 text-sm font-medium"
          >
            Contact
          </button>
          <Button variant="primary" glow className="px-5 py-2 text-sm" onClick={() => onNavigate?.('contact')}>
            Get Started
          </Button>
        </div>

        {/* Mobile Menu Toggle (Simplified) */}
        <button className="md:hidden text-white p-2">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
