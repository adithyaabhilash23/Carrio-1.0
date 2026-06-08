import React, { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { ScrollReveal } from './react-bits/ScrollReveal';

export const HowItWorks: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start center', 'end center']
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const steps = [
    {
      step: 1,
      title: 'Book a Companion',
      desc: 'Request a ride online or call our helper desk. We pair your parent with a verified, background-checked Care Companion.',
      icon: '📞',
    },
    {
      step: 2,
      title: 'Doorstep Welcome',
      desc: 'The companion arrives at their home, greets them warmly, helps them to the vehicle, and secures them comfortably.',
      icon: '🚪',
    },
    {
      step: 3,
      title: 'Guided Hospital Visit',
      desc: 'The companion handles registrations, guides them to doctor consultations, collects prescriptions, and waits with them.',
      icon: '🏥',
    },
    {
      step: 4,
      title: 'Safe Return Home',
      desc: 'We drive them safely back home, settle them in, and send you a detailed update on doctor instructions and next steps.',
      icon: '🏡',
    },
  ];

  return (
    <section id="how-it-works" ref={containerRef} className="relative bg-gray-50 py-24 overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-teal block mb-3">
            Simple &amp; Safe
          </span>
          <h2 className="font-display text-4xl text-navy leading-tight">
            How Carryo Care Works
          </h2>
        </div>

        {/* Timeline Container */}
        <div className="relative max-w-4xl mx-auto">
          {/* Animated Connecting Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-[3px] bg-teal-muted -translate-x-1/2 hidden md:block">
            <motion.div 
              style={{ scaleY, originY: 0 }}
              className="w-full h-full bg-teal"
            />
          </div>

          {/* Mobile Connecting Line */}
          <div className="absolute left-[24px] top-0 bottom-0 w-[3px] bg-teal-muted md:hidden">
            <motion.div 
              style={{ scaleY, originY: 0 }}
              className="w-full h-full bg-teal"
            />
          </div>

          {/* Steps */}
          <div className="flex flex-col gap-16 relative">
            {steps.map((item, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div 
                  key={item.step} 
                  className={`flex flex-col md:flex-row items-center md:justify-between relative w-full ${
                    isEven ? '' : 'md:flex-row-reverse'
                  }`}
                >
                  
                  {/* Left/Right Card Wrapper */}
                  <div className="w-full md:w-[45%] pl-14 md:pl-0">
                    <ScrollReveal 
                      direction={isEven ? 'left' : 'right'} 
                      delay={0.1}
                      className={`w-full flex ${isEven ? 'md:justify-end' : 'md:justify-start'}`}
                    >
                      <div className="bg-white border border-gray-100 rounded-2xl p-7 shadow-md max-w-md w-full relative">
                        <div className="text-2xl mb-3">{item.icon}</div>
                        <h3 className="font-display text-xl text-navy mb-2 font-normal">{item.title}</h3>
                        <p className="font-body text-navy/60 text-sm leading-relaxed">{item.desc}</p>
                      </div>
                    </ScrollReveal>
                  </div>

                  {/* Circular Node */}
                  <div className="absolute left-0 md:left-1/2 top-5 md:-translate-x-1/2 z-10 flex items-center justify-center">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true, margin: '-40px' }}
                      transition={{ 
                        type: 'spring', 
                        stiffness: 150, 
                        damping: 15,
                        delay: 0.2
                      }}
                      className="w-12 h-12 rounded-full bg-white border-[3px] border-teal flex items-center justify-center font-display text-sm font-bold text-teal shadow-md"
                    >
                      {item.step}
                    </motion.div>
                  </div>

                  {/* Empty Spacer Column for Desktop alignment */}
                  <div className="hidden md:block w-[45%]" />

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
