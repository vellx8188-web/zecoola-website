
import React from 'react';
import { motion } from 'framer-motion';
import { CONTENT } from '../../constants';
import { useLanguage } from '../../LanguageContext';

const AboutV2: React.FC = () => {
  const { language } = useLanguage();
  const data = CONTENT.aboutPage;

  return (
    <div className="py-24 animate-in fade-in duration-700">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <div className="rounded-3xl overflow-hidden shadow-2xl">
             <img src="/about.webp" alt="Who we are" className="w-full h-auto object-cover" />
          </div>
          <div>
            <span className="text-orange-600 font-black text-sm uppercase tracking-widest mb-4 block">Corporate Profile</span>
            <h1 className="text-4xl lg:text-5xl font-black text-slate-900 mb-8">{data.whoWeAre.title[language]}</h1>
            <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
               <p className="font-bold text-slate-900 border-l-4 border-orange-600 pl-6 py-2">
                 {data.whoWeAre.content[language]}
               </p>
               <p>
                 {language === 'en' 
                  ? 'Our core strength lies in translating complex engineering requirements into high-performance footwear that meets international safety and athletic standards.'
                  : '我们的核心实力在于将复杂的工程需求转化为符合国际安全和运动标准的高性能鞋类产品。'}
               </p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
           <div className="bg-slate-50 p-12 rounded-3xl border border-slate-100">
              <h3 className="text-2xl font-black text-orange-600 mb-4">Our Mission</h3>
              <p className="text-xl text-slate-800 font-bold leading-relaxed">{data.mission.mText[language]}</p>
           </div>
           <div className="bg-slate-900 p-12 rounded-3xl text-white">
              <h3 className="text-2xl font-black text-orange-500 mb-4">Our Vision</h3>
              <p className="text-xl text-white font-bold leading-relaxed">{data.mission.vText[language]}</p>
           </div>
        </div>
      </div>
    </div>
  );
};

export default AboutV2;
