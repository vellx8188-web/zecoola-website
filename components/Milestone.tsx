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
          {/* Central Line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-zecoola-orange to-zecoola-blue rounded-full"></div>

          <div className="space-y-12">
            {items.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Content Side */}
                <div className="w-full md:w-1/2 px-6">
                  <div className={`bg-white p-6 rounded-xl shadow-md border-t-4 border-zecoola-orange hover:shadow-xl transition-shadow ${index % 2 === 0 ? 'md:text-left' : 'md:text-right text-left'}`}>
                    <span className="text-4xl font-black text-slate-200 block mb-2">{item.year}</span>
                    <h3 className="text-xl font-bold text-zecoola-blue mb-2">{item.title[language]}</h3>
                    <ul className={`space-y-1 text-slate-600 text-sm ${index % 2 === 0 ? 'md:items-start' : 'md:items-end'} flex flex-col`}>
                        {item.description[language].map((desc, i) => (
                            <li key={i}>{desc}</li>
                        ))}
                    </ul>
                  </div>
                </div>

                {/* Dot on Line */}
                <div className="relative z-10 w-8 h-8 rounded-full bg-white border-4 border-zecoola-orange flex items-center justify-center shadow-lg my-4 md:my-0">
                    <div className="w-3 h-3 bg-zecoola-blue rounded-full"></div>
                </div>

                {/* Empty Side for Spacing */}
                <div className="w-full md:w-1/2 px-6 hidden md:block"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Milestone;
