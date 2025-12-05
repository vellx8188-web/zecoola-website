import React from 'react';
import { motion } from 'framer-motion';
import { CONTENT } from '../constants';
import { useLanguage } from '../LanguageContext';

const FeatureItem = ({ number, title, desc, icon: Icon }: any) => (
  <div className="flex items-start gap-4 mb-8">
    <div className="flex-shrink-0 w-12 h-12 bg-zecoola-orange rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
      {number}
    </div>
    <div>
      <h4 className="text-xl font-bold text-slate-800 mb-1 flex items-center gap-2">
        {title}
      </h4>
      <p className="text-slate-600 leading-relaxed text-sm md:text-base">
        {desc}
      </p>
    </div>
  </div>
);

const About: React.FC = () => {
  const { language } = useLanguage();
  const { title, mainText, features, image } = CONTENT.about;

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-zecoola-blue mb-4">{title[language]}</h2>
          <div className="w-24 h-1 bg-zecoola-orange mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column: Image/Main Text */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* Image corresponding to Slide 3 - Reception Area */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl mb-8 border-4 border-slate-50">
                <img 
                    src={image}
                    alt="Zecoola Office Reception" 
                    className="w-full h-auto object-cover"
                />
            </div>
            
            <p className="text-slate-600 text-lg leading-relaxed border-l-4 border-zecoola-orange pl-4">
               {mainText.p1[language]}
            </p>
            <p className="text-slate-600 text-lg leading-relaxed">
               {mainText.p2[language]}
            </p>
          </motion.div>

          {/* Right Column: Features - Matches Slide 2 structure */}
          <motion.div 
             initial={{ opacity: 0, x: 50 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.6 }}
             className="bg-slate-50 p-8 rounded-3xl border border-slate-100 shadow-sm"
          >
            {features.map((feature) => (
                <FeatureItem 
                  key={feature.number}
                  number={feature.number}
                  title={feature.title[language]}
                  desc={feature.desc[language]}
                  icon={feature.icon}
                />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;