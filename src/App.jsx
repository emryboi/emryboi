import React, { useState, useEffect, useRef, Suspense, lazy } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import Footer from './components/Footer';

const Projects = lazy(() => import('./components/Projects'));
const Details = lazy(() => import('./components/Details'));
const Highlights = lazy(() => import('./components/Highlights'));
const Contact = lazy(() => import('./components/Contact'));

function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const sectionRefs = useRef({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { root: null, rootMargin: '0px', threshold: 0.4 }
    );

    // Observe all sections that have a ref
    const currentRefs = Object.values(sectionRefs.current);
    currentRefs.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      currentRefs.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);


  return (
    <div className="bg-dark text-light font-sans">
      <Header activeSection={activeSection} />

      <main className="relative z-10 lg:ml-24 px-4 sm:px-8">
        <div id="hero" ref={(el) => (sectionRefs.current['hero'] = el)}>
          <Hero />
        </div>

        <Suspense fallback={<div className="h-screen w-full flex items-center justify-center"><div className="text-primary">Loading...</div></div>}>
          <div id="projects" ref={(el) => (sectionRefs.current['projects'] = el)}>
            <Projects />
          </div>
          <div id="details" ref={(el) => (sectionRefs.current['details'] = el)}>
            <Details />
          </div>
          <div id="highlights" ref={(el) => (sectionRefs.current['highlights'] = el)}>
            <Highlights />
          </div>
          <div id="contact" ref={(el) => (sectionRefs.current['contact'] = el)}>
            <Contact />
          </div>
        </Suspense>
        <Footer />
      </main>
    </div>
  );
}

export default App; 