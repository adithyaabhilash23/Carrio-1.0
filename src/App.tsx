import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Problem } from './components/Problem';
import { HowItWorks } from './components/HowItWorks';
import { Services } from './components/Services';
import { Trust } from './components/Trust';
import { Testimonials } from './components/Testimonials';
import { Stats } from './components/Stats';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';
import { ScrollReveal } from './components/react-bits/ScrollReveal';

function App() {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [cursorVariant, setCursorVariant] = useState('default');
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    // Detect if desktop
    const checkIsDesktop = () => {
      const isMobileDevice = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      );
      setIsDesktop(!isMobileDevice && window.innerWidth > 768);
    };

    checkIsDesktop();
    window.addEventListener('resize', checkIsDesktop);

    const mouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', mouseMove);

    return () => {
      window.removeEventListener('resize', checkIsDesktop);
      window.removeEventListener('mousemove', mouseMove);
    };
  }, []);

  // Update cursor hover handlers whenever DOM elements change
  useEffect(() => {
    const handleMouseEnter = () => setCursorVariant('hover');
    const handleMouseLeave = () => setCursorVariant('default');

    const addHoverListeners = () => {
      const interactiveElements = document.querySelectorAll('button, a, input, select, textarea, [role="button"]');
      interactiveElements.forEach((el) => {
        el.addEventListener('mouseenter', handleMouseEnter);
        el.addEventListener('mouseleave', handleMouseLeave);
      });
    };

    addHoverListeners();

    // Re-bind when elements might change
    const observer = new MutationObserver(addHoverListeners);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
    };
  }, []);

  const cursorVariants = {
    default: {
      height: 12,
      width: 12,
      backgroundColor: '#0E7C6A',
    },
    hover: {
      height: 40,
      width: 40,
      backgroundColor: 'rgba(14, 124, 106, 0.15)',
      border: '2px solid #0E7C6A',
    },
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key="landing-page"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.6 }}
        className="min-h-screen relative flex flex-col w-full overflow-x-hidden"
      >
        {/* Custom Dot Cursor for Desktop */}
        {isDesktop && (
          <motion.div
            variants={cursorVariants}
            animate={cursorVariant}
            style={{
              left: mousePosition.x,
              top: mousePosition.y,
              translateX: '-50%',
              translateY: '-50%',
            }}
            transition={{ type: 'spring', damping: 30, stiffness: 300, mass: 0.1 }}
            className="fixed top-0 left-0 rounded-full pointer-events-none z-50 shadow-sm"
          />
        )}

        {/* Navigation bar */}
        <Navbar />

        {/* Landing Page Sections with base reveals */}
        <main className="flex-grow">
          
          <Hero />

          <ScrollReveal direction="up" delay={0.1}>
            <Problem />
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.1}>
            <HowItWorks />
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.1}>
            <Services />
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.1}>
            <Trust />
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.1}>
            <Testimonials />
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.1}>
            <Stats />
          </ScrollReveal>

          <CTA />

        </main>

        {/* Footer */}
        <ScrollReveal direction="up" delay={0.1}>
          <Footer />
        </ScrollReveal>
      </motion.div>
    </AnimatePresence>
  );
}

export default App;
