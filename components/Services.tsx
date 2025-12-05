import React from 'react';
import { motion } from 'framer-motion';
import { Settings, PenTool } from 'lucide-react';
import { CONTENT } from '../constants';
import { useLanguage } from '../LanguageContext';

const Services: React.FC = () => {
  const { language } = useLanguage();
  const { title, subtitle, oem, odm } = CONTENT.services;

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-zecoola-blue mb-4">{title[language]}</h2>
          <div className="w-24 h-1 bg-zecoola-orange mx-auto mb-6"></div>
          <p className="text-slate-600 max-w-2xl mx-auto">
            {subtitle[language]}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* OEM Card */}
          <motion.div 
            whileHover={{ y: -10 }}
            className="group relative overflow-hidden rounded-3xl shadow-xl h-96"
          >
            {/* Matches Slide 5 Left Image (Worker/Hands) */}
            <img 
                src={oem.image}
                alt="OEM Manufacturing" 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-zecoola-orange/90 via-zecoola-orange/40 to-transparent z-10"></div>
            
            <div className="relative z-20 p-8 h-full flex flex-col justify-end text-white">
                <div className="bg-white/20 w-14 h-14 rounded-xl flex items-center justify-center mb-4 backdrop-blur-sm">
                    <Settings size={28} className="text-white" />
                </div>
                <h3 className="text-3xl font-bold mb-3">{oem.title}</h3>
                <p className="text-white/95 leading-relaxed font-light text-sm md:text-base">
                    {oem.desc[language]}
                </p>
            </div>
          </motion.div>

          {/* ODM Card */}
          <motion.div 
            whileHover={{ y: -10 }}
            className="group relative overflow-hidden rounded-3xl shadow-xl h-96"
          >
             {/* Matches Slide 5 Right Image (CAD/Computer) */}
            <img 
                src={odm.image}
                alt="ODM Design" 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-zecoola-blue/90 via-zecoola-blue/40 to-transparent z-10"></div>
            
            <div className="relative z-20 p-8 h-full flex flex-col justify-end text-white">
                <div className="bg-white/20 w-14 h-14 rounded-xl flex items-center justify-center mb-4 backdrop-blur-sm">
                    <PenTool size={28} className="text-white" />
                </div>
                <h3 className="text-3xl font-bold mb-3">{odm.title}</h3>
                <p className="text-white/95 leading-relaxed font-light text-sm md:text-base">
                    {odm.desc[language]}
                </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;