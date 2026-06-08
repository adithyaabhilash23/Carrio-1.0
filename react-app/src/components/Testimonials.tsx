import React from 'react';
import { motion } from 'framer-motion';

export const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: 'Suresh Krishnan',
      location: 'Dubai (NRI)',
      initials: 'SK',
      color: 'bg-teal',
      quote: "Living in Dubai, I used to worry constantly about my mother's monthly heart checkups at Amrita Hospital, Kochi. Carryo Care has changed everything. The companions are incredibly polite and send me updates at every stage. I can focus on my work knowing she's in safe hands.",
    },
    {
      name: 'Priya Menon',
      location: 'Bangalore',
      initials: 'PM',
      color: 'bg-gold',
      quote: "My father is wheelchair-bound and lives alone in Thrissur. Arranging hospital transportation was a nightmare until I found Carryo Care. Their wheelchair-accessible van and dedicated companions are a blessing. Truly hospital visits handled with love!",
    },
    {
      name: 'Dr. Rekha Antony',
      location: 'Kottayam',
      initials: 'RA',
      color: 'bg-navy-light',
      quote: "As a practicing surgeon in Kottayam, I have zero free hours during outpatient days. Carryo Care takes my mother for her ophthalmology consultations. Their documentation and companion care are incredibly professional. Highly recommended!",
    },
  ];

  return (
    <section id="stories" className="py-24 bg-white overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-teal block mb-3">
            Real Stories
          </span>
          <h2 className="font-display text-4xl text-navy leading-tight">
            Loved by Parents, Trusted by Children
          </h2>
        </div>

        {/* Testimonials List */}
        <div className="flex md:grid md:grid-cols-3 gap-8 overflow-x-auto md:overflow-visible snap-x snap-mandatory no-scrollbar pb-6 md:pb-0 -mx-6 px-6 md:mx-0 md:px-0">
          {testimonials.map((testi, idx) => (
            <motion.div
              key={testi.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="min-w-[85vw] sm:min-w-[360px] md:min-w-0 snap-center bg-white border border-gray-100 rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Serif Quote Mark */}
                <span className="font-display text-8xl text-teal/15 block leading-[0.1] -mt-4 -ml-2 select-none">
                  “
                </span>

                {/* Stars */}
                <div className="flex items-center gap-1 mb-4 text-gold text-lg">
                  {'★★★★★'.split('').map((char, i) => (
                    <span key={i}>{char}</span>
                  ))}
                </div>

                <blockquote className="font-body text-navy/75 text-sm sm:text-base leading-relaxed italic mb-8">
                  "{testi.quote}"
                </blockquote>
              </div>

              {/* Author */}
              <div className="flex items-center gap-3.5">
                <div className={`w-11 h-11 rounded-full flex items-center justify-center text-white font-body font-bold text-sm shadow-inner ${testi.color}`}>
                  {testi.initials}
                </div>
                <div>
                  <h4 className="font-body font-bold text-navy text-sm">{testi.name}</h4>
                  <p className="font-body text-navy/50 text-xs">{testi.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
