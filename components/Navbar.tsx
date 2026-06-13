
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Button from './Button';
import Magnetic from './Magnetic';

const NAV_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Contact', to: '/contact' },
];

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock background scroll while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);
  const goTo = (to: string) => {
    setIsOpen(false);
    navigate(to);
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 w-full z-50 transition-[background-color,padding] duration-300 ${scrolled ? 'bg-black/90 backdrop-blur-md py-4 border-b border-border' : 'bg-transparent py-5'}`}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <Link
            to="/"
            onClick={closeMenu}
            className="flex items-center gap-3 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-lg"
            aria-label="Go to home page"
          >
            <div className="h-9 md:h-10 w-auto overflow-hidden rounded-lg">
              <img
                src="/assets/case-studies/jcemedialogomain.png"
                alt="JCE Media Main Logo"
                className="h-full w-auto object-contain bg-black/50 rounded-lg p-1"
              />
            </div>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="group relative text-text-secondary hover:text-white transition-colors duration-200 text-sm font-medium cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm px-2 py-1"
              >
                {link.label}
                <span className="absolute left-2 right-2 -bottom-0.5 h-px bg-accent origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
              </Link>
            ))}
            <Magnetic className="inline-block">
              <Button variant="primary" glow className="px-5 py-2 text-sm" onClick={() => goTo('/contact')}>
                Get Started
              </Button>
            </Magnetic>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(true)}
            className="md:hidden flex items-center justify-center w-11 h-11 rounded-xl border border-white/10 bg-white/5 text-white transition-colors hover:bg-white/10 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            aria-label="Open navigation menu"
            aria-expanded={isOpen}
          >
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </nav>

      {/* Mobile Overlay — rendered OUTSIDE <nav> so the nav's backdrop-filter
          doesn't trap this fixed element in a tiny containing block. */}
      <div
        className={`fixed inset-0 z-[60] md:hidden bg-background/95 backdrop-blur-xl transition-opacity duration-300 ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        aria-hidden={!isOpen}
        inert={!isOpen}
      >
        <button
          onClick={closeMenu}
          className="absolute top-5 right-6 flex items-center justify-center w-11 h-11 rounded-xl border border-white/10 bg-white/5 text-white transition-colors hover:bg-white/10 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          aria-label="Close navigation menu"
        >
          <X className="w-5 h-5" />
        </button>

        <nav className="flex flex-col items-center justify-center gap-7 h-full">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={closeMenu}
              className="text-2xl font-bold uppercase tracking-widest text-white/90 hover:text-accent transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Button variant="primary" glow className="px-8 py-3 text-base mt-4" onClick={() => goTo('/contact')}>
            Get Started
          </Button>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
