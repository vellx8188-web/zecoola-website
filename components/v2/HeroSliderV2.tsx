
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from '../../LanguageContext';

const SLIDES = [
  {
    image: '/hero-1.webp',
    tag: 'STRATEGIC MANUFACTURING PARTNER',
    titleLine1: { en: 'WORLD-', zh: '世界级' },
    titleLine2: { en: 'CLASS', zh: '智造' },
    titleLine3: { en: 'PARTNER', zh: '合作伙伴' },
    sub: { en: 'Empowering global footwear brands with precision engineering and industrial intelligence.', zh: '以精密工程和工业智慧助力全球鞋类品牌。' }
  }
];

const HeroSliderV2: React.FC = () => {
  const [current] = useState(0);
  const { language } = useLanguage();

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden bg-slate-900">
      {/* Background with Protection */}
      <div className="absolute inset-0 z-0">
         <img 
           src={SLIDES[current].image} 
           alt="Hero" 
           className="h-full w-full object-cover grayscale brightness-[0.35] transition-all duration-1000"
           onError={(e) => { e.currentTarget.src = "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070"; }}
         />
         <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/40 to-transparent" />
      </div>

      <div className="relative z-10 h-full container mx-auto px-6 lg:px-20 flex items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="max-w-5xl"
        >
          <div className="flex items-center gap-4 mb-8">
             <div className="w-12 h-0.5 bg-orange-600" />
             <span className="text-orange-600 text-xs font-black uppercase tracking-[0.5em]">
               {SLIDES[current].tag}
             </span>
          </div>

          <h1 className="flex flex-col text-[15vw] lg:text-[13rem] font-black leading-[0.8] tracking-tighter uppercase italic select-none">
             <span className="text-white">{SLIDES[current].titleLine1[language]}</span>
             <span className="text-white">{SLIDES[current].titleLine2[language]}</span>
             <span className="text-orange-600">{SLIDES[current].titleLine3[language]}</span>
          </h1>

          <div className="mt-12 flex flex-col md:flex-row md:items-end gap-10">
             <p className="text-xl md:text-2xl text-slate-400 font-medium max-w-lg leading-relaxed italic">
               {SLIDES[current].sub[language]}
             </p>
             <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="group px-12 py-6 bg-white text-slate-950 font-black text-xs uppercase tracking-[0.4em] flex items-center gap-6 hover:bg-orange-600 hover:text-white transition-all shadow-2xl"
            >
              REQUEST RFQ <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
            </button>
          </div>
        </motion.div>
      </div>

      {/* Industrial Decorative Elements */}
      <div className="absolute bottom-12 left-6 lg:left-20 z-20 flex items-center gap-12">
         <div className="hidden sm:block text-[10px] font-black text-white/20 tracking-[0.6em] uppercase">
           TECH SPEC: Z-2025 / HQ: DONGGUAN
         </div>
         <div className="flex gap-3">
           <div className="w-16 h-1 bg-orange-600 rounded-full" />
           <div className="w-16 h-1 bg-white/10 rounded-full" />
           <div className="w-16 h-1 bg-white/10 rounded-full" />
         </div>
      </div>

      <div className="absolute bottom-12 right-6 lg:right-20 z-20 flex gap-1">
         <button className="w-14 h-14 border border-white/10 flex items-center justify-center text-white/20 hover:bg-white/5 transition-all">
           <ChevronLeft size={20} />
         </button>
         <button className="w-14 h-14 border border-white/10 flex items-center justify-center text-white/20 hover:bg-white/5 transition-all">
           <ChevronRight size={20} />
         </button>
      </div>
    </section>
  );
};

export default HeroSliderV2;
