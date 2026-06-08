import React, { Suspense, lazy } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { AnimatedText } from './react-bits/AnimatedText';
import { Magnet } from './react-bits/Magnet';
import { Aurora } from './react-bits/Aurora';

const Spline = lazy(() => import('@splinetool/react-spline'));

const SplineLoader = () => (
  <div className="absolute inset-0 flex items-center justify-center bg-teal-muted/20 animate-pulse rounded-2xl">
    <div className="flex flex-col items-center gap-3">
      <div className="w-8 h-8 border-4 border-teal border-t-transparent rounded-full animate-spin"></div>
      <div className="text-teal font-medium text-sm">Caring 3D world loading...</div>
    </div>
  </div>
);

const FallbackSVG = () => (
  <svg className="w-full h-full max-h-[400px] drop-shadow-xl" viewBox="0 0 500 400" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="250" cy="200" r="160" fill="#E0F5F0" />
    <path d="M250 340C250 340 100 260 100 160C100 110 140 70 190 70C190 70 220 70 250 120C280 70 310 70 310 70C360 70 400 110 400 160C400 260 250 340 250 340Z" fill="#12A088" opacity="0.15" />
    {/* Palms */}
    <path d="M150 260C120 220 135 150 180 150" stroke="#0E7C6A" strokeWidth="4" strokeLinecap="round" />
    <path d="M350 260C380 220 365 150 320 150" stroke="#0E7C6A" strokeWidth="4" strokeLinecap="round" />
    {/* Heart */}
    <path d="M250 140L253 147H260L255 152L257 159L250 155L243 159L245 152L240 147H247L250 140Z" fill="#F5A623" />
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
    <section className="relative min-h-screen flex items-center pt-28 pb-16 overflow-hidden bg-white">
      {/* Background Aurora overlay */}
      <Aurora className="opacity-70" />

      <div className="max-w-[1200px] mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Left Side Content */}
        <motion.div 
          className="lg:col-span-6 flex flex-col items-start"
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

        {/* Right Side 3D Scene / Mockup */}
        <div className="lg:col-span-6 relative w-full h-[400px] lg:h-[500px]">
          {/* Spline 3D Embed */}
          <Suspense fallback={<SplineLoader />}>
            <Spline 
              scene="https://prod.spline.design/6Wq1Q7YGyM-iab9i/scene.splinecode" 
              className="w-full h-full object-cover rounded-2xl"
              style={{ pointerEvents: 'auto' }}
            />
          </Suspense>

          {/* Secondary fallback just in case the scene fails to mount */}
          <div className="absolute inset-0 -z-10 flex items-center justify-center">
            <FallbackSVG />
          </div>

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
