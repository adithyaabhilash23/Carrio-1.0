import React, { useState } from 'react';
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion';
import { Magnet } from './react-bits/Magnet';

export const Navbar: React.FC = () => {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useMotionValueEvent(scrollY, 'change', (latest) => {
    if (latest > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  });

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navLinks = [
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Services', href: '#services' },
    { label: 'Stories', href: '#stories' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
          isScrolled 
            ? 'py-3 bg-white/90 backdrop-blur-md shadow-md border-b border-teal/10' 
            : 'py-6 bg-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-[1200px] mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <svg className="w-11 h-11 transition-transform duration-300 group-hover:scale-105" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M24 44C24 44 6 34 6 22C6 16 10 10 16 10C16 10 20 10 24 16C28 10 32 10 32 10C38 10 42 16 42 22C42 34 24 44 24 44Z" fill="#E0F5F0" stroke="#0E7C6A" strokeWidth="2"/>
              <circle cx="18" cy="26" r="4" fill="#0E7C6A" opacity="0.6"/>
              <circle cx="30" cy="26" r="4" fill="#0E7C6A" opacity="0.6"/>
              <path d="M14 32C14 32 18 38 24 38C30 38 34 32 34 32" stroke="#0E7C6A" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
              <path d="M10 24C6 20 8 14 14 14" stroke="#0E7C6A" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
              <path d="M38 24C42 20 40 14 34 14" stroke="#0E7C6A" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
              <path d="M24 6L25 9L28 9L26 11L27 14L24 12L21 14L22 11L20 9L23 9Z" fill="#F5A623"/>
            </svg>
            <span className="font-display text-2xl text-teal font-normal tracking-wide">Carryo Care</span>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="font-body text-[0.95rem] font-medium text-navy/80 hover:text-teal relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:width-0 after:height-[2px] after:bg-teal hover:after:w-full after:transition-all after:duration-300"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden md:block">
            <Magnet strength={15}>
              <a
                href="#contact"
                className="bg-teal text-white hover:bg-teal-light font-body font-semibold px-6 py-2.5 rounded-full inline-block shadow-md hover:shadow-lg transition-all duration-300"
              >
                Book a Ride
              </a>
            </Magnet>
          </div>

          {/* Mobile Hamburger Menu button */}
          <button 
            className="md:hidden flex flex-col gap-1.5 p-2" 
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            <span className={`w-6 h-0.5 bg-navy transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`w-6 h-0.5 bg-navy transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`w-6 h-0.5 bg-navy transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu Slide-in Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Overlay */}
            <motion.div
              className="fixed inset-0 bg-black/40 z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={toggleMobileMenu}
            />

            {/* Menu Drawer */}
            <motion.div
              className="fixed top-0 right-0 w-[260px] h-full bg-white z-50 shadow-2xl p-6 flex flex-col gap-6"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            >
              <div className="flex items-center justify-between mb-4">
                <span className="font-display text-xl text-teal">Carryo Care</span>
                <button 
                  className="text-3xl text-navy cursor-pointer focus:outline-none focus:ring-2 focus:ring-teal rounded p-1 leading-none" 
                  onClick={toggleMobileMenu}
                  aria-label="Close menu"
                >
                  &times;
                </button>
              </div>

              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="font-body text-lg font-medium text-navy/90 py-2 border-b border-gray-100"
                  onClick={toggleMobileMenu}
                >
                  {link.label}
                </a>
              ))}

              <div className="mt-4">
                <a
                  href="#contact"
                  className="w-full text-center bg-teal text-white hover:bg-teal-light font-body font-semibold py-3 rounded-full inline-block shadow-md"
                  onClick={toggleMobileMenu}
                >
                  Book a Ride
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};
