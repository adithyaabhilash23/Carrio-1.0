import React from 'react';
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
