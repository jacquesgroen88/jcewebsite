
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Projects from './components/Projects';
import Stats from './components/Stats';
import Footer from './components/Footer';
import AnimatedBackground from './components/AnimatedBackground';
import ServicesPage from './pages/ServicesPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<'home' | 'services' | 'about' | 'contact'>('home');

  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash;
      if (hash === '#services-detail') {
        setCurrentPage('services');
        window.scrollTo(0, 0);
      } else if (hash === '#about') {
        setCurrentPage('about');
        window.scrollTo(0, 0);
      } else if (hash === '#contact') {
        setCurrentPage('contact');
        window.scrollTo(0, 0);
      } else {
        setCurrentPage('home');
      }
    };
    
    window.addEventListener('hashchange', handleHash);
    handleHash(); 
    
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const navigateTo = (page: 'home' | 'services' | 'about' | 'contact') => {
    setCurrentPage(page);
    if (page === 'services') window.location.hash = 'services-detail';
    else if (page === 'about') window.location.hash = 'about';
    else if (page === 'contact') window.location.hash = 'contact';
    else window.location.hash = '';
    window.scrollTo(0, 0);
  };

  return (
    <div className="relative min-h-screen">
      <AnimatedBackground />
      
      <div className="fixed top-0 left-0 w-full h-[2px] z-[60]">
        <div id="scroll-bar" className="h-full bg-accent transition-all duration-100 w-0" />
      </div>

      <Navbar onNavigate={navigateTo} />

      <main className="transition-opacity duration-500">
        {currentPage === 'home' && (
          <>
            <Hero />
            <Services onDetailClick={() => navigateTo('services')} />
            <Stats />
            <Projects />
          </>
        )}
        {currentPage === 'services' && <ServicesPage />}
        {currentPage === 'about' && <AboutPage />}
        {currentPage === 'contact' && <ContactPage />}
      </main>

      <Footer />

      <script dangerouslySetInnerHTML={{ __html: `
        window.onscroll = function() {
          var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
          var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
          var scrolled = (winScroll / height) * 100;
          var bar = document.getElementById("scroll-bar");
          if(bar) bar.style.width = scrolled + "%";
        };
      `}} />
    </div>
  );
};

export default App;
