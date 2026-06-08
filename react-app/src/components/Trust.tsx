import React from 'react';
import { motion } from 'framer-motion';
import { ScrollReveal } from './react-bits/ScrollReveal';

export const Trust: React.FC = () => {
  const trustItems = [
    {
      title: 'Verified Companions',
      desc: 'Medically trained, background-checked, and empathetic helpers who treat your parents like family.',
      icon: (
        <svg className="w-6 h-6 text-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
    {
      title: 'Live Updates',
      desc: 'Track their departure, hospital entry, prescription collection, and safe return home in real-time.',
      icon: (
        <svg className="w-6 h-6 text-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
        </svg>
      ),
    },
    {
      title: 'Doctor Notes',
      desc: 'Receive digital updates summary with precise doctor advice, next follow-ups, and medicines.',
      icon: (
        <svg className="w-6 h-6 text-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 01-2-2h4l2 2h4l2-2h4a2 2 0 012 2v14a2 2 0 01-2 2z" />
        </svg>
      ),
    },
    {
      title: 'Emergency SOS',
      desc: 'Direct dispatch link and alert connection with all major multi-specialty hospitals in Kerala.',
      icon: (
        <svg className="w-6 h-6 text-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
      ),
    },
    {
      title: 'Transparent Flat Rates',
      desc: 'Know your ride charges beforehand. Fixed hourly companionship pricing. No surge, no surprises.',
      icon: (
        <svg className="w-6 h-6 text-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 8h6m-5 0a3 3 0 110 6H9l3 3m-3-6h6m6 1a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
  ];

  return (
    <section className="bg-teal-muted/40 py-24 overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-teal block mb-3">
            Peace of Mind
          </span>
          <h2 className="font-display text-4xl text-navy leading-tight">
            Why Kerala Families Trust Carryo Care
          </h2>
        </div>

        {/* Grid of 5 Items */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {trustItems.map((item, idx) => (
            <ScrollReveal
              key={item.title}
              direction="up"
              delay={idx * 0.1}
              className="bg-white rounded-2xl p-6 shadow-sm border border-teal/5 flex flex-col items-center text-center justify-between"
            >
              <div className="flex flex-col items-center">
                {/* Pulsing Icon Wrapper */}
                <motion.div
                  className="w-12 h-12 rounded-full bg-teal/10 flex items-center justify-center mb-5"
                  animate={{
                    scale: [1, 1.08, 1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: idx * 0.4,
                  }}
                >
                  {item.icon}
                </motion.div>
                <h3 className="font-body font-bold text-navy text-base mb-2">{item.title}</h3>
                <p className="font-body text-navy/60 text-xs leading-relaxed">{item.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
};
