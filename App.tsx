import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate, useLocation, useNavigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Projects from './components/Projects';
import Stats from './components/Stats';
import TestimonialVideo from './components/TestimonialVideo';
import Footer from './components/Footer';
import AnimatedBackground from './components/AnimatedBackground';
import ServicesPage from './pages/ServicesPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import GtmOnboardingPage from './pages/GtmOnboardingPage';
import GtmThankYouPage from './pages/GtmThankYouPage';

const PAGE_TITLES: Record<string, string> = {
  '/': 'JCE Media | AI-Powered Marketing & Business Automation',
  '/services': 'Our Services | JCE Media',
  '/about': 'About Us | JCE Media',
  '/contact': 'Contact Us | JCE Media',
  '/gtm-onboarding': 'GTM Onboarding | JCE Media',
  '/gtm-thank-you': 'Thank You | JCE Media',
};

// Map legacy hash routes (#about, #services-detail, …) to their new paths so
// old links and bookmarks keep working after the move to path-based routing.
const LEGACY_HASH_ROUTES: Record<string, string> = {
  '#about': '/about',
  '#services-detail': '/services',
  '#contact': '/contact',
  '#gtm-onboarding': '/gtm-onboarding',
  '#gtm-thank-you': '/gtm-thank-you',
};

const HomePage: React.FC = () => {
  const navigate = useNavigate();
  return (
    <>
      <Hero />
      <Services onDetailClick={() => navigate('/services')} />
      <Stats />
      <TestimonialVideo />
      <Projects />
    </>
  );
};

const Layout: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Redirect any legacy hash URL to its new path (runs once on initial load).
  useEffect(() => {
    const hash = window.location.hash;
    if (!hash) return;
    const base = hash.split('?')[0];
    const target = LEGACY_HASH_ROUTES[base];
    if (target) {
      const query = hash.includes('?') ? '?' + hash.split('?').slice(1).join('?') : '';
      navigate(target + query, { replace: true });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Per-route document title.
  useEffect(() => {
    document.title = PAGE_TITLES[location.pathname] ?? 'JCE Media';
  }, [location.pathname]);

  // Scroll to top on route change, unless there's an in-page anchor to honor.
  useEffect(() => {
    if (!location.hash) window.scrollTo(0, 0);
  }, [location.pathname, location.hash]);

  // Respect prefers-reduced-motion.
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mq.matches) {
      document.documentElement.style.setProperty('--animation-duration', '0.01ms');
    }
  }, []);

  // Scroll-progress bar.
  useEffect(() => {
    const onScroll = () => {
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const bar = document.getElementById('scroll-bar');
      if (bar) bar.style.width = (height > 0 ? (winScroll / height) * 100 : 0) + '%';
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="relative min-h-screen">
      <AnimatedBackground />

      <div className="fixed top-0 left-0 w-full h-[2px] z-[60]">
        <div id="scroll-bar" className="h-full bg-accent transition-all duration-100 w-0" />
      </div>

      <Navbar />

      <main className="transition-opacity duration-500">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/gtm-onboarding" element={<GtmOnboardingPage />} />
          <Route path="/gtm-thank-you" element={<GtmThankYouPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
};

const App: React.FC = () => (
  <BrowserRouter>
    <Layout />
  </BrowserRouter>
);

export default App;
