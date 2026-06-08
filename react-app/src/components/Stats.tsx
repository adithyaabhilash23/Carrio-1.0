import React from 'react';
import { CountUp } from './react-bits/CountUp';

export const Stats: React.FC = () => {
  const stats = [
    { target: 500, suffix: '+', label: 'Elderly Patients Served' },
    { target: 1800, suffix: '+', label: 'Safe Trips Completed' },
    { target: 12000, suffix: '+', label: 'Companion Hours Logged' },
    { target: 98, suffix: '%', label: 'Satisfaction Rate' },
  ];

  return (
    <section className="relative bg-navy py-20 overflow-hidden text-white">
      {/* Decorative slowly rotating vector art behind the stats */}
      <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none">
        <svg 
          className="w-[400px] h-[400px] animate-spin" 
          style={{ animationDuration: '60s' }}
          viewBox="0 0 200 200" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M100 20C55.8 20 20 55.8 20 100C20 144.2 55.8 180 100 180C144.2 180 180 144.2 180 100" stroke="#0E7C6A" strokeWidth="2" strokeDasharray="5 5" />
          <circle cx="100" cy="100" r="60" stroke="#12A088" strokeWidth="1" />
          <path d="M100 50L110 80H140L115 95L125 125L100 105L75 125L85 95L60 80H90L100 50Z" fill="#F5A623" />
        </svg>
      </div>

      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 md:gap-6 text-center">
          {stats.map((item) => (
            <div key={item.label} className="flex flex-col items-center">
              <span className="font-display text-5xl sm:text-6xl text-gold mb-3 font-normal">
                <CountUp target={item.target} suffix={item.suffix} />
              </span>
              <p className="font-body text-white/70 text-sm sm:text-base font-medium max-w-[180px]">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
