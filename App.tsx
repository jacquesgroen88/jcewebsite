import React, { Suspense, lazy, useEffect, useLayoutEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Lenis from 'lenis';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Projects from './components/Projects';
import Stats from './components/Stats';
import TestimonialVideo from './components/TestimonialVideo';
import Footer from './components/Footer';
import AnimatedBackground from './components/AnimatedBackground';
import Reveal from './components/Reveal';

// Secondary pages are code-split so the landing bundle stays lean.
const ServicesPage = lazy(() => import('./pages/ServicesPage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const GtmOnboardingPage = lazy(() => import('./pages/GtmOnboardingPage'));
const GtmThankYouPage = lazy(() => import('./pages/GtmThankYouPage'));

const REDUCE = typeof window !== 'undefined'
  && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const PAGE_TITLES: Record<string, string> = {
  '/': 'JCE Media | AI-Powered Marketing & Business Automation',
  '/services': 'Our Services | JCE Media',
  '/about': 'About Us | JCE Media',
  '/contact': 'Contact Us | JCE Media',
  '/gtm-onboarding': 'GTM Onboarding | JCE Media',
  '/gtm-thank-you': 'Thank You | JCE Media',
};

const LEGACY_HASH_ROUTES: Record<string, string> = {
  '#about': '/about',
  '#services-detail': '/services',
  '#contact': '/contact',
  '#gtm-onboarding': '/gtm-onboarding',
  '#gtm-thank-you': '/gtm-thank-you',
};

const pageVariants = REDUCE
  ? { initial: { opacity: 1 }, animate: { opacity: 1 }, exit: { opacity: 1 } }
  : { initial: { opacity: 0, y: 14 }, animate: { opacity: 1, y: 0 }, exit: { opacity: 0, y: -10 } };
const pageTransition = REDUCE ? { duration: 0 } : { duration: 0.4, ease: [0.16, 1, 0.3, 1] as const };

const HomePage: React.FC = () => {
  const navigate = useNavigate();
  return (
    <>
      <Hero />
      <Services onDetailClick={() => navigate('/services')} />
      <Reveal><Stats /></Reveal>
      <Reveal><TestimonialVideo /></Reveal>
      <Reveal><Projects /></Reveal>
    </>
  );
};

const scrollTop = () => {
  const lenis = (window as unknown as { __lenis?: Lenis }).__lenis;
  if (lenis) lenis.scrollTo(0, { immediate: true });
  else window.scrollTo(0, 0);
};

const RouteView: React.FC<{ location: ReturnType<typeof useLocation> }> = ({ location }) => {
  // Reset scroll + recalc triggers when this page instance mounts (after the
  // previous page's exit, thanks to AnimatePresence mode="wait").
  useLayoutEffect(() => {
    scrollTop();
  }, []);

  return (
    <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit" transition={pageTransition}>
      <Suspense fallback={<div className="min-h-screen" />}>
        <Routes location={location}>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/gtm-onboarding" element={<GtmOnboardingPage />} />
          <Route path="/gtm-thank-you" element={<GtmThankYouPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Suspense>
    </motion.div>
  );
};

const Layout: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Smooth scroll (Lenis), driven by its own rAF loop.
  useEffect(() => {
    if (REDUCE) return;
    const lenis = new Lenis({ duration: 1.1, smoothWheel: true });
    (window as unknown as { __lenis?: Lenis }).__lenis = lenis;
    let raf = 0;
    const loop = (time: number) => {
      lenis.raf(time);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => {
      cancelAnimationFrame(raf);
      lenis.destroy();
      (window as unknown as { __lenis?: Lenis }).__lenis = undefined;
    };
  }, []);

  // Redirect legacy hash URLs once on initial load.
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

  // Scroll-progress bar.
  useEffect(() => {
    const onScroll = () => {
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const bar = document.getElementById('scroll-bar');
      if (bar) bar.style.width = (height > 0 ? (winScroll / height) * 100 : 0) + '%';
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="relative min-h-screen">
      <AnimatedBackground />
      <div className="grain-overlay" aria-hidden="true" />

      <div className="fixed top-0 left-0 w-full h-[2px] z-[60]" aria-hidden="true">
        <div id="scroll-bar" className="h-full bg-accent transition-all duration-100 w-0" />
      </div>

      <Navbar />

      <main className="transition-opacity duration-500">
        <AnimatePresence mode="wait">
          <RouteView key={location.pathname} location={location} />
        </AnimatePresence>
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
