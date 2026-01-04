
import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from '../../LanguageContext';
import { SLIDER_DATA } from '../../constants';

const HeroSliderV2: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const { language } = useLanguage();

  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev === SLIDER_DATA.length - 1 ? 0 : prev + 1));
  }, []);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? SLIDER_DATA.length - 1 : prev - 1));
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 6000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden bg-slate-950">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <img 
              src={SLIDER_DATA[current].image} 
              alt="Industrial Hero" 
              className="h-full w-full object-cover grayscale brightness-[0.25] scale-105"
              onError={(e) => { e.currentTarget.src = "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070"; }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/30 to-transparent" />
          </div>

          <div className="relative z-10 h-full container mx-auto px-6 lg:px-20 flex items-center">
            <div className="max-w-[1440px] w-full">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="max-w-5xl"
              >
                <div className="flex items-center gap-6 mb-10 overflow-hidden">
                   <motion.div 
                     initial={{ width: 0 }}
                     animate={{ width: 48 }}
                     transition={{ duration: 0.8, delay: 0.8 }}
                     className="h-0.5 bg-orange-600" 
                   />
                   <span className="text-orange-600 text-[10px] md:text-xs font-black uppercase tracking-[0.8em]">
                     {SLIDER_DATA[current].tag}
                   </span>
                </div>

                <h1 className="flex flex-col text-[14vw] lg:text-[14rem] font-black leading-[0.75] tracking-tighter uppercase italic select-none">
                   <motion.span 
                     initial={{ opacity: 0, y: 30 }}
                     animate={{ opacity: 1, y: 0 }}
                     transition={{ duration: 0.6, delay: 0.5 }}
                     className="text-white"
                   >
                     {SLIDER_DATA[current].titleLine1[language]}
                   </motion.span>
                   <motion.span 
                     initial={{ opacity: 0, y: 30 }}
                     animate={{ opacity: 1, y: 0 }}
                     transition={{ duration: 0.6, delay: 0.6 }}
                     className="text-white"
                   >
                     {SLIDER_DATA[current].titleLine2[language]}
                   </motion.span>
                   <motion.span 
                     initial={{ opacity: 0, y: 30 }}
                     animate={{ opacity: 1, y: 0 }}
                     transition={{ duration: 0.6, delay: 0.7 }}
                     className="text-orange-600"
                   >
                     {SLIDER_DATA[current].titleLine3[language]}
                   </motion.span>
                </h1>

                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 1 }}
                  className="mt-16 flex flex-col md:flex-row md:items-end gap-12"
                >
                   <p className="text-lg md:text-2xl text-slate-400 font-medium max-w-lg leading-relaxed italic">
                     {SLIDER_DATA[current].sub[language]}
                   </p>
                   <button 
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                    className="group px-14 py-7 bg-white text-slate-950 font-black text-[10px] uppercase tracking-[0.6em] flex items-center gap-8 hover:bg-orange-600 hover:text-white transition-all shadow-3xl transform hover:-translate-y-1"
                  >
                    START INQUIRY <ArrowRight size={18} className="group-hover:translate-x-3 transition-transform" />
                  </button>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Industrial Meta Info & Pagination Dots */}
      <div className="absolute bottom-12 left-6 lg:left-20 z-20 flex flex-col md:flex-row md:items-center gap-10">
         <div className="flex gap-4">
           {SLIDER_DATA.map((_, i) => (
             <button 
               key={i} 
               onClick={() => setCurrent(i)}
               className={`h-1 rounded-full transition-all duration-500 ${current === i ? 'w-24 bg-orange-600' : 'w-12 bg-white/10 hover:bg-white/30'}`} 
             />
           ))}
         </div>
         <div className="text-[9px] font-black text-white/30 tracking-[0.8em] uppercase hidden xl:block">
           DEPLOYMENT REF: Z-2025-V2 / FOOTWEAR R&D CENTER
         </div>
      </div>

      {/* Manual Controls */}
      <div className="absolute bottom-12 right-6 lg:right-20 z-20 flex gap-2">
         <button 
           onClick={prevSlide}
           className="w-16 h-16 border border-white/10 rounded-full flex items-center justify-center text-white/20 hover:text-white hover:bg-white/5 hover:border-white/30 transition-all"
         >
           <ChevronLeft size={24} />
         </button>
         <button 
           onClick={nextSlide}
           className="w-16 h-16 border border-white/10 rounded-full flex items-center justify-center text-white/20 hover:text-white hover:bg-white/5 hover:border-white/30 transition-all"
         >
           <ChevronRight size={24} />
         </button>
      </div>
    </section>
  );
};

export default HeroSliderV2;
