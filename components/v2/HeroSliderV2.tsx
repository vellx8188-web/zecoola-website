
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
    const timer = setInterval(nextSlide, 8000);
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
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          {/* 背景图：移除 grayscale，提升亮度，增加清晰感 */}
          <div className="absolute inset-0 z-0">
            <img 
              src={SLIDER_DATA[current].image} 
              alt="Industrial Hero" 
              className="h-full w-full object-cover brightness-[0.45] transition-transform duration-[10s] ease-linear scale-100 group-hover:scale-105"
              onError={(e) => { e.currentTarget.src = "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070"; }}
            />
            {/* 渐变遮罩：左侧加深以保证文字识别，右侧透出图片细节 */}
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-slate-950/40 to-transparent" />
          </div>

          <div className="relative z-10 h-full container mx-auto px-6 lg:px-20 flex items-center">
            <div className="max-w-[1600px] w-full">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="flex items-center gap-6 mb-8">
                   <motion.div 
                     initial={{ width: 0 }}
                     animate={{ width: 40 }}
                     transition={{ duration: 0.8, delay: 0.6 }}
                     className="h-[2px] bg-orange-600" 
                   />
                   <span className="text-orange-600 text-[10px] md:text-xs font-black uppercase tracking-[0.6em] drop-shadow-sm">
                     {SLIDER_DATA[current].tag}
                   </span>
                </div>

                <h1 className="flex flex-col text-[12vw] lg:text-[10rem] xl:text-[12rem] font-black leading-[0.8] tracking-tighter uppercase italic select-none">
                   <motion.span 
                     initial={{ opacity: 0, y: 20 }}
                     animate={{ opacity: 1, y: 0 }}
                     transition={{ duration: 0.6, delay: 0.4 }}
                     className="text-white drop-shadow-2xl"
                   >
                     {SLIDER_DATA[current].titleLine1[language]}
                   </motion.span>
                   <motion.span 
                     initial={{ opacity: 0, y: 20 }}
                     animate={{ opacity: 1, y: 0 }}
                     transition={{ duration: 0.6, delay: 0.5 }}
                     className="text-white drop-shadow-2xl"
                   >
                     {SLIDER_DATA[current].titleLine2[language]}
                   </motion.span>
                   <motion.span 
                     initial={{ opacity: 0, y: 20 }}
                     animate={{ opacity: 1, y: 0 }}
                     transition={{ duration: 0.6, delay: 0.6 }}
                     className="text-orange-600 drop-shadow-xl"
                   >
                     {SLIDER_DATA[current].titleLine3[language]}
                   </motion.span>
                </h1>

                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 0.8 }}
                  className="mt-12 flex flex-col md:flex-row md:items-end gap-10"
                >
                   <p className="text-base md:text-xl text-slate-200 font-medium max-w-md leading-relaxed italic drop-shadow-md">
                     {SLIDER_DATA[current].sub[language]}
                   </p>
                   <button 
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                    className="group px-12 py-6 bg-white text-slate-950 font-black text-[10px] uppercase tracking-[0.5em] flex items-center gap-6 hover:bg-orange-600 hover:text-white transition-all shadow-2xl transform hover:-translate-y-1"
                  >
                    INQUIRE NOW <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
                  </button>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* 底部信息栏 */}
      <div className="absolute bottom-10 left-6 lg:left-20 z-20 flex flex-col md:flex-row md:items-center gap-8">
         <div className="flex gap-3">
           {SLIDER_DATA.map((_, i) => (
             <button 
               key={i} 
               onClick={() => setCurrent(i)}
               className={`h-[3px] rounded-full transition-all duration-500 ${current === i ? 'w-16 bg-orange-600' : 'w-8 bg-white/20'}`} 
             />
           ))}
         </div>
         <div className="text-[8px] font-black text-white/40 tracking-[0.5em] uppercase hidden lg:block border-l border-white/10 pl-8">
           EST. 2016 / DONGGUAN CHINA
         </div>
      </div>

      {/* 左右导航 */}
      <div className="absolute bottom-10 right-6 lg:right-20 z-20 flex gap-4">
         <button onClick={prevSlide} className="w-14 h-14 border border-white/10 rounded-full flex items-center justify-center text-white/40 hover:text-white hover:bg-white/5 transition-all">
           <ChevronLeft size={20} />
         </button>
         <button onClick={nextSlide} className="w-14 h-14 border border-white/10 rounded-full flex items-center justify-center text-white/40 hover:text-white hover:bg-white/5 transition-all">
           <ChevronRight size={20} />
         </button>
      </div>
    </section>
  );
};

export default HeroSliderV2;
