import React from 'react';
import { motion } from 'framer-motion';
import { Aurora } from './react-bits/Aurora';
import { PixelTrail } from './react-bits/PixelTrail';
import { Magnet } from './react-bits/Magnet';

export const CTA: React.FC = () => {
  const trustChips = [
    'Verified Companions',
    'Real-time Ride Tracking',
    'Hospital Paperwork Handled',
    'Safe Return Guarantee',
  ];

  const pathVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: { duration: 0.6, ease: 'easeInOut', delay: 0.3 }
    }
  };

  return (
    <section id="contact" className="relative py-28 overflow-hidden bg-teal-muted/20 text-center">
      {/* Aurora background */}
      <Aurora className="opacity-90" />
      
      {/* PixelTrail cursor effect over the section */}
      <PixelTrail color="#0E7C6A" pixelSize={10} delay={30} />

      <div className="max-w-[1200px] mx-auto px-6 relative z-20">
        
        {/* Heading */}
        <h2 className="font-display text-4xl sm:text-5xl text-navy leading-tight mb-6 max-w-2xl mx-auto">
          Give Your Parents the Support They Deserve
        </h2>
        
        {/* Description */}
        <p className="font-body text-navy/70 text-base sm:text-lg mb-10 max-w-xl mx-auto leading-relaxed">
          No more worrying about outpatient checkups from thousands of miles away. Join hundreds of Kerala families who trust Carryo Care.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap gap-4 justify-center mb-12">
          <Magnet strength={12}>
            <a 
              href="mailto:care@carryo.in?subject=Requesting Carryo Care Ride" 
              className="bg-teal text-white hover:bg-teal-light font-body font-semibold px-8 py-3.5 rounded-full inline-block shadow-md hover:shadow-lg transition-all duration-300"
            >
              Book via Email (care@carryo.in)
            </a>
          </Magnet>
          <Magnet strength={8}>
            <a 
              href="tel:+919876543210" 
              className="bg-transparent border-2 border-navy text-navy hover:bg-navy hover:text-white font-body font-semibold px-8 py-3.5 rounded-full inline-block shadow-sm hover:shadow-md transition-all duration-300"
            >
              Call +91 98765 43210
            </a>
          </Magnet>
        </div>

        {/* Trust Chips */}
        <div className="flex flex-wrap gap-6 justify-center max-w-3xl mx-auto">
          {trustChips.map((chip, idx) => (
            <motion.div 
              key={chip} 
              className="flex items-center gap-2.5 bg-white/80 border border-teal/10 rounded-full px-5 py-2 shadow-sm"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
            >
              <svg className="w-5 h-5 text-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <motion.path 
                  variants={pathVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2.5} 
                  d="M5 13l4 4L19 7" 
                />
              </svg>
              <span className="font-body text-navy text-sm font-semibold">{chip}</span>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
