import React from 'react';
import { motion } from 'framer-motion';
import { CONTENT } from '../constants';
import { useLanguage } from '../LanguageContext';
import { Calendar } from 'lucide-react';

const Milestone: React.FC = () => {
  const { language } = useLanguage();
  const { title, subtitle, items } = CONTENT.milestone;

  return (
    <section id="milestones" className="py-20 bg-slate-50 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-zecoola-blue mb-4 flex items-center justify-center gap-3">
            <Calendar className="text-zecoola-orange" size={32} />
            {title[language]}
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto">
            {subtitle[language]}
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          {/* Mobile: Left aligned. Desktop: Center aligned. */}
          <div className="absolute left-6 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gradient-to-b from-zecoola-orange to-zecoola-blue rounded-full"></div>

          <div className="space-y-12">
            {items.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative flex flex-col md:flex-row items-center justify-between ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              >
                 {/* Mobile Dot (Left aligned on the line) */}
                 <div className="md:hidden absolute left-6 w-4 h-4 bg-white border-4 border-zecoola-orange rounded-full transform -translate-x-1/2 top-8 z-10 shadow-sm"></div>

                 {/* Desktop Dot (Center aligned on the line) */}
                 <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-white border-4 border-zecoola-orange rounded-full items-center justify-center z-10 shadow-md">
                    <div className="w-3 h-3 bg-zecoola-blue rounded-full"></div>
                 </div>

                {/* Content Side */}
                <div className={`w-full md:w-[calc(50%-40px)] pl-16 md:pl-0`}>
                  <div className={`bg-white p-6 rounded-xl shadow-md border-t-4 border-zecoola-orange hover:shadow-xl transition-shadow relative ${index % 2 === 0 ? 'text-left' : 'text-left md:text-right'}`}>
                    
                    <span className="text-4xl font-black text-slate-200 block mb-2 leading-none">{item.year}</span>
                    <h3 className="text-xl font-bold text-zecoola-blue mb-2">{item.title[language]}</h3>
                    <ul className={`space-y-1 text-slate-600 text-sm ${index % 2 === 0 ? 'items-start' : 'items-start md:items-end'} flex flex-col`}>
                        {item.description[language].map((desc, i) => (
                            <li key={i}>{desc}</li>
                        ))}
                    </ul>
                  </div>
                </div>

                {/* Empty Side for Desktop Spacing */}
                <div className="hidden md:block w-[calc(50%-40px)]"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Milestone;