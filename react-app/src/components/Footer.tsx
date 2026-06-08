import React from 'react';
import { motion } from 'framer-motion';
import { GlassIcons } from './react-bits/GlassIcons';

export const Footer: React.FC = () => {
  const serviceAreas = ['Ernakulam', 'Thrissur', 'Kottayam', 'Alappuzha', 'Kollam'];
  const quickLinks = ['How It Works', 'Services', 'Stories', 'Contact'];

  return (
    <footer className="bg-navy text-white/80 pt-20 pb-8 border-t border-white/5 relative z-10">
      <div className="max-w-[1200px] mx-auto px-6">
        
        {/* Footer Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 mb-16">
          
          {/* Col 1: Brand */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <a href="#" className="flex items-center gap-3 mb-6">
              <svg className="w-10 h-10" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M24 44C24 44 6 34 6 22C6 16 10 10 16 10C16 10 20 10 24 16C28 10 32 10 32 10C38 10 42 16 42 22C42 34 24 44 24 44Z" fill="#E0F5F0" stroke="#0E7C6A" strokeWidth="2"/>
                <circle cx="18" cy="26" r="4" fill="#0E7C6A" opacity="0.6"/>
                <circle cx="30" cy="26" r="4" fill="#0E7C6A" opacity="0.6"/>
                <path d="M14 32C14 32 18 38 24 38C30 38 34 32 34 32" stroke="#0E7C6A" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
                <path d="M24 6L25 9L28 9L26 11L27 14L24 12L21 14L22 11L20 9L23 9Z" fill="#F5A623"/>
              </svg>
              <span className="font-display text-2xl text-white font-normal">Carryo Care</span>
            </a>
            <p className="font-body text-white/70 text-sm leading-relaxed mb-6 max-w-sm">
              Providing safe hospital transportation and empathetic companion support for elderly parents in Kerala. Outpatient visits, handled with love.
            </p>
            {/* Social Icons with GlassIcons component */}
            <div className="flex gap-3">
              {['FB', 'IG', 'TW', 'LI'].map((social) => (
                <a key={social} href="#" aria-label={`Follow us on ${social}`}>
                  <GlassIcons className="w-9 h-9 text-xs text-white/90 font-body font-semibold">
                    {social}
                  </GlassIcons>
                </a>
              ))}
            </div>
          </div>

          {/* Col 2: Services */}
          <div className="lg:col-span-2 flex flex-col items-start">
            <h4 className="font-body font-bold text-white text-sm uppercase tracking-wider mb-6">Quick Links</h4>
            <ul className="flex flex-col gap-3">
              {quickLinks.map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase().replace(/\s+/g, '-')}`} className="font-body text-white/70 hover:text-teal text-sm transition-colors duration-300">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Service Areas */}
          <div className="lg:col-span-2 flex flex-col items-start">
            <h4 className="font-body font-bold text-white text-sm uppercase tracking-wider mb-6">Service Areas</h4>
            <ul className="flex flex-col gap-3">
              {serviceAreas.map((area) => (
                <li key={area} className="font-body text-white/70 text-sm">
                  {area}, Kerala
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact */}
          <div className="lg:col-span-3 flex flex-col items-start">
            <h4 className="font-body font-bold text-white text-sm uppercase tracking-wider mb-6">Contact</h4>
            <ul className="flex flex-col gap-4 font-body text-white/70 text-sm">
              <li className="flex items-start gap-2.5">
                <span>📍</span>
                <span>MG Road, Ernakulam, Kerala 682035</span>
              </li>
              <li className="flex items-center gap-2.5">
                <span>📞</span>
                <a href="tel:+919876543210" className="hover:text-teal transition-colors duration-300">+91 98765 43210</a>
              </li>
              <li className="flex items-center gap-2.5">
                <span>✉️</span>
                <a href="mailto:care@carryo.in" className="hover:text-teal transition-colors duration-300">care@carryo.in</a>
              </li>
              <li className="flex items-center gap-2.5 text-xs text-white/50">
                <span>⏰</span>
                <span>6:00 AM – 9:00 PM (All Days)</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Divider Line with scroll-triggered width animation */}
        <div className="relative w-full h-[1px] bg-white/10 mb-8 overflow-hidden">
          <motion.div 
            className="absolute top-0 left-0 bottom-0 bg-teal"
            initial={{ width: 0 }}
            whileInView={{ width: '100%' }}
            viewport={{ once: true }}
            transition={{ duration: 1.0, ease: 'easeInOut' }}
          />
        </div>

        {/* Footer Bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between text-white/50 text-xs gap-4">
          <p>© {new Date().getFullYear()} Carryo Care. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white transition-colors duration-300">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors duration-300">Terms of Service</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
