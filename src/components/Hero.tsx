import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { AnimatedText } from './react-bits/AnimatedText';
import { Magnet } from './react-bits/Magnet';
import { Aurora } from './react-bits/Aurora';

const BrandIllustration = () => (
  <svg className="w-full h-full max-h-[420px] drop-shadow-2xl select-none" viewBox="0 0 500 400" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <radialGradient id="bgGlow" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="rgba(14, 124, 106, 0.18)" />
        <stop offset="100%" stopColor="rgba(14, 124, 106, 0)" />
      </radialGradient>
      <linearGradient id="palmGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#0E7C6A" />
        <stop offset="100%" stopColor="#0B5D50" />
      </linearGradient>
      <linearGradient id="goldGrad" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#F5A623" />
        <stop offset="100%" stopColor="#D98A18" />
      </linearGradient>
    </defs>

    {/* Background Glow */}
    <circle cx="250" cy="200" r="180" fill="url(#bgGlow)" />

    {/* Heart Floating above */}
    <motion.path
      d="M250 85 C250 85, 238 72, 225 72 C210 72, 200 84, 200 100 C200 120, 222 138, 250 152 C278 138, 300 120, 300 100 C300 84, 290 72, 275 72 C262 72, 250 85, 250 85 Z"
      fill="url(#goldGrad)"
      animate={{
        y: [0, -10, 0],
        scale: [1, 1.08, 1],
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
      }}
    />

    {/* Elderly Couple */}
    <g transform="translate(195, 120)">
      {/* Father (Grey hair, walking cane) */}
      <circle cx="40" cy="50" r="12" fill="#F1F5F9" stroke="#0B1F3A" strokeWidth="2" />
      <path d="M38 38 Q40 44 48 44" stroke="#E2E8F0" strokeWidth="3" strokeLinecap="round" /> {/* Hair */}
      <path d="M25 65 C25 65, 30 95, 45 95 C60 95, 60 65, 60 65" fill="#0B1F3A" /> {/* Torso */}
      <path d="M32 95 L32 125" stroke="#0B1F3A" strokeWidth="3" strokeLinecap="round" /> {/* Legs */}
      <path d="M48 95 L48 125" stroke="#0B1F3A" strokeWidth="3" strokeLinecap="round" />
      <path d="M22 105 L26 128 L20 128" stroke="#F5A623" strokeWidth="3.5" strokeLinecap="round" fill="none" /> {/* Cane */}

      {/* Mother (Saree, Hair Bun) */}
      <circle cx="85" cy="55" r="11" fill="#F1F5F9" stroke="#0B1F3A" strokeWidth="2" />
      <circle cx="96" cy="55" r="4" fill="#94A3B8" /> {/* Hair Bun */}
      <path d="M70 68 C70 68, 75 98, 90 98 C105 98, 102 68, 102 68" fill="#0E7C6A" /> {/* Torso/Saree */}
      <path d="M78 98 L78 125" stroke="#0E7C6A" strokeWidth="3" /> {/* Legs */}
      <path d="M92 98 L92 125" stroke="#0E7C6A" strokeWidth="3" />
      <path d="M72 75 Q62 72 58 75" stroke="#F1F5F9" strokeWidth="3" strokeLinecap="round" fill="none" /> {/* Arm */}
    </g>

    {/* Cupped Palms cradling the couple */}
    <g>
      {/* Left Palm */}
      <path
        d="M130 300 C150 330, 200 340, 235 320 C235 320, 200 280, 175 250 C155 225, 140 240, 140 240 C140 240, 120 280, 130 300 Z"
        fill="url(#palmGrad)"
        opacity="0.95"
      />
      
      {/* Right Palm */}
      <path
        d="M370 300 C350 330, 300 340, 265 320 C265 320, 300 280, 325 250 C345 225, 360 240, 360 240 C360 240, 380 280, 370 300 Z"
        fill="url(#palmGrad)"
        opacity="0.95"
      />
    </g>
  </svg>
);

export const Hero: React.FC = () => {
  const { scrollY } = useScroll();
  const yParallax = useTransform(scrollY, [0, 500], [0, 100]);
  const opacityParallax = useTransform(scrollY, [0, 400], [1, 0]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.4,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.215, 0.61, 0.355, 1] },
    },
  };

  const statusCardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.8 + index * 0.2,
        duration: 0.6,
        ease: 'easeOut',
      },
    }),
  };

  return (
    <section className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden bg-white">
      {/* Background Aurora overlay */}
      <Aurora className="opacity-70" />

      <div className="max-w-[1200px] mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Left Side Content */}
        <motion.div 
          className="lg:col-span-6 flex flex-col items-start text-left"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          style={{ y: yParallax, opacity: opacityParallax }}
        >
          {/* Animated badge */}
          <motion.div 
            className="inline-flex items-center gap-2 bg-teal-muted text-teal font-body text-xs font-semibold px-4 py-2 rounded-full mb-6 border border-teal/10"
            variants={itemVariants}
          >
            <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-ping"></span>
            Now serving Ernakulam &amp; Thrissur
          </motion.div>

          {/* Headline */}
          <AnimatedText 
            text="Hospital Visits Made Simple for Your Loved Ones" 
            className="font-display text-4xl sm:text-5xl lg:text-5xl text-navy leading-tight mb-6"
            delay={0.1}
          />

          {/* Paragraph */}
          <motion.p 
            className="font-body text-navy/70 text-base sm:text-lg mb-8 max-w-xl leading-relaxed"
            variants={itemVariants}
          >
            From door-to-hospital and back — with a trained, caring companion by their side every step of the way. Because your parents deserve more than just a ride.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-wrap gap-4 mb-8"
            variants={itemVariants}
          >
            <Magnet strength={12}>
              <a 
                href="#contact" 
                className="bg-teal text-white hover:bg-teal-light font-body font-semibold px-8 py-3.5 rounded-full inline-block shadow-md hover:shadow-lg transition-all duration-300"
              >
                Book a Ride
              </a>
            </Magnet>
            <Magnet strength={8}>
              <a 
                href="#contact" 
                className="bg-transparent border-2 border-teal text-teal hover:bg-teal hover:text-white font-body font-semibold px-8 py-3.5 rounded-full inline-block shadow-sm hover:shadow-md transition-all duration-300"
              >
                Become a Care Companion
              </a>
            </Magnet>
          </motion.div>

          {/* Trust Row */}
          <motion.div 
            className="flex items-center gap-3"
            variants={itemVariants}
          >
            <div className="flex -space-x-2.5">
              <div className="w-9 h-9 rounded-full border-2 border-white bg-teal text-white flex items-center justify-center text-[0.7rem] font-bold">RS</div>
              <div className="w-9 h-9 rounded-full border-2 border-white bg-gold text-white flex items-center justify-center text-[0.7rem] font-bold">MK</div>
              <div className="w-9 h-9 rounded-full border-2 border-white bg-navy-light text-white flex items-center justify-center text-[0.7rem] font-bold">AL</div>
              <div className="w-9 h-9 rounded-full border-2 border-white bg-pink-500 text-white flex items-center justify-center text-[0.7rem] font-bold">PN</div>
            </div>
            <span className="font-body text-navy/60 text-sm font-medium">500+ families trust Carryo Care</span>
          </motion.div>
        </motion.div>

        {/* Right Side Brand Illustration & Floating Cards */}
        <div className="lg:col-span-6 relative w-full h-[400px] lg:h-[480px] flex items-center justify-center">
          
          <BrandIllustration />

          {/* Status Cards floating overlay */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 flex flex-col gap-4 z-20 w-[240px] sm:w-[260px] pointer-events-none">
            {[
              { title: 'Pickup Confirmed', desc: '8:30 AM · Driver en route', icon: '🚗', color: 'bg-[#e8f6f3]' },
              { title: 'Companion Assigned', desc: 'Verified · 4.9★ rating', icon: '👤', color: 'bg-[#e8f0fe]' },
              { title: 'Safe Return', desc: 'Family Notified · Complete', icon: '✅', color: 'bg-[#fef3e2]' },
            ].map((card, idx) => (
              <motion.div
                key={card.title}
                custom={idx}
                variants={statusCardVariants}
                initial="hidden"
                animate="visible"
              >
                <motion.div
                  className="bg-white/95 backdrop-blur-sm border border-gray-100 rounded-2xl p-4 shadow-lg flex items-center gap-3.5"
                  style={{
                    y: idx === 0 ? 0 : idx === 1 ? 5 : 10,
                  }}
                  animate={{
                    y: [0, -6, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    repeatType: 'reverse',
                    delay: idx * 0.4,
                    ease: 'easeInOut',
                  }}
                >
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-lg ${card.color}`}>
                    {card.icon}
                  </div>
                  <div>
                    <h4 className="font-body font-semibold text-navy text-sm leading-tight">{card.title}</h4>
                    <p className="font-body text-navy/50 text-[0.75rem] mt-0.5">{card.desc}</p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
