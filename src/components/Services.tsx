import React from 'react';
import { motion } from 'framer-motion';
import { TiltCard } from './react-bits/TiltCard';

export const Services: React.FC = () => {
  const services = [
    {
      title: 'Pickup & Drop',
      desc: 'Round-trip transportation in sanitized, comfortable vehicles. Professional drivers who assist them in and out of the car.',
      tag: 'Most Popular',
      icon: '🚗',
    },
    {
      title: 'Hospital Companion',
      desc: 'A trained companion stays with them throughout, coordinates appointments, manages paper registration, and handles pharmacy bills.',
      tag: 'Highly Trusted',
      icon: '👤',
    },
    {
      title: 'Appointment Assistance',
      desc: 'We handle booking the hospital tokens, specialists, and diagnostic scans beforehand so your parents don\'t have to stand in line.',
      tag: 'Care Coordination',
      icon: '📅',
    },
    {
      title: 'Own Vehicle Option',
      desc: 'If you prefer using your family car, our trained driver-companions will chauffeur them and assist them just the same.',
      tag: 'Comfort First',
      icon: '🚙',
    },
    {
      title: 'Accessible Van Service',
      desc: 'Hydraulic lift-equipped vans for wheelchair users. Complete door-to-hospital bed transfer assistance.',
      tag: 'Special Care',
      icon: '♿',
    },
  ];

  return (
    <section id="services" className="py-24 bg-white overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div className="max-w-xl">
            <span className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-teal block mb-3">
              Our Services
            </span>
            <h2 className="font-display text-4xl text-navy leading-tight">
              Care Tailored for Every Need
            </h2>
          </div>
          <p className="font-body text-navy/60 text-sm max-w-sm mt-4 md:mt-0 leading-relaxed">
            Whether it\'s a routine checkup or specialized clinical treatments, we make sure they reach safely and with full emotional support.
          </p>
        </div>

        {/* Services Layout: snap carousel on mobile, Grid on desktop */}
        <div className="flex md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 overflow-x-auto md:overflow-visible snap-x snap-mandatory no-scrollbar pb-6 md:pb-0 -mx-6 px-6 md:mx-0 md:px-0">
          {services.map((service, idx) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="min-w-[85vw] sm:min-w-[450px] md:min-w-0 snap-center"
            >
              <TiltCard className="h-full bg-white border border-gray-100 rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between group relative overflow-hidden">
                <div>
                  {/* Top Tag & Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="text-3xl">{service.icon}</div>
                    <span className="backdrop-blur-md bg-teal/5 border border-teal/10 rounded-full px-3.5 py-1 text-xs font-semibold text-teal font-body">
                      {service.tag}
                    </span>
                  </div>

                  <h3 className="font-display text-2xl text-navy mb-3 font-normal group-hover:text-teal transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="font-body text-navy/65 text-sm leading-relaxed mb-6">
                    {service.desc}
                  </p>
                </div>

                {/* Bottom accent slide line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-teal to-teal-light transform scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100" />
              </TiltCard>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
