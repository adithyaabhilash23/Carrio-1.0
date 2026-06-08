import React from 'react';
import { motion } from 'framer-motion';
import { TiltCard } from './react-bits/TiltCard';
import { Aurora } from './react-bits/Aurora';

export const Problem: React.FC = () => {
  const problems = [
    {
      title: 'Children Living Abroad',
      desc: "You're thousands of miles away and Amma has an appointment tomorrow. Who will take her? Who will explain to the doctor?",
      icon: (
        <svg className="w-10 h-10 text-gold mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-.778.099-1.533.284-2.253" />
        </svg>
      ),
    },
    {
      title: 'Parents Living Alone',
      desc: 'With children settled in other cities or countries, elderly parents face hospital visits alone — confused, exhausted, and anxious.',
      icon: (
        <svg className="w-10 h-10 text-gold mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
        </svg>
      ),
    },
    {
      title: 'Ride Apps Are Confusing',
      desc: "Booking an Uber or Ola is stressful enough for the young. For your 70-year-old parent, it's nearly impossible.",
      icon: (
        <svg className="w-10 h-10 text-gold mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
        </svg>
      ),
    },
    {
      title: 'Hospitals Are Overwhelming',
      desc: 'Long queues, endless counters, confusing corridors — navigating a hospital alone is exhausting and frightening for seniors.',
      icon: (
        <svg className="w-10 h-10 text-gold mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.053.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
        </svg>
      ),
    },
  ];

  return (
    <section className="relative bg-navy py-24 overflow-hidden text-white">
      {/* Subtle Aurora inside dark background */}
      <Aurora 
        color1="rgba(14, 124, 106, 0.08)" 
        color2="rgba(15, 52, 96, 0.2)" 
        color3="rgba(245, 166, 35, 0.02)"
      />

      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.span 
            className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-gold block mb-3"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            The Challenge
          </motion.span>
          <motion.h2 
            className="font-display text-4xl text-white leading-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Why Families Worry
          </motion.h2>
        </div>

        {/* Problems Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((problem, idx) => (
            <motion.div
              key={problem.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: idx * 0.1, ease: 'easeOut' }}
            >
              <TiltCard className="h-full bg-white/5 border border-white/10 rounded-2xl p-7 hover:border-white/20 hover:bg-white/10 flex flex-col items-start transition-all duration-300">
                {problem.icon}
                <h3 className="font-display text-xl mb-3 text-white font-normal">{problem.title}</h3>
                <p className="font-body text-white/70 text-sm leading-relaxed">{problem.desc}</p>
              </TiltCard>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
