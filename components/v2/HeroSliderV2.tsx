
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { useLanguage } from '../../LanguageContext';

const SLIDES = [
  {
    image: '/factory-4.webp',
    tag: 'PRECISION R&D & ENGINEERING',
    title: { en: 'INNOVATION\nLAB', zh: '创新\n实验室' },
    sub: { en: 'Transforming complex design visions into high-performance technical products.', zh: '将复杂的设计愿景转化为高性能的技术产品。' }
  },
  {
    image: '/factory-5.webp',
    tag: 'GLOBAL MANUFACTURING',
    title: { en: 'SMART\nFACTORY', zh: '智能\n工厂' },
    sub: { en: 'Scaling production with industrial precision and global standards.', zh: '以工业精度和国际标准实现规模化生产。' }
  }
];

const HeroSliderV2: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const { language } = useLanguage();

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % SLIDES.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden bg-slate-950">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          <motion.div 
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 10, ease: "linear" }}
            className="absolute inset-0"
          >
             <img src={SLIDES[current].image} alt="Hero" className="h-full w-full object-cover grayscale brightness-[0.3]" />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/20 to-transparent z-10" />
        </motion.div>
      </AnimatePresence>

      <div className="absolute inset-0 z-20 flex items-center">
        <div className="container mx-auto px-6 lg:px-20">
          <motion.div
            key={`content-${current}`}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-5xl"
          >
            <div className="flex items-center gap-6 mb-8">
               <div className="w-16 h-[2px] bg-orange-600" />
               <span className="text-orange-600 text-sm font-black uppercase tracking-[0.5em]">
                 {SLIDES[current].tag}
               </span>
            </div>

            <h1 className="text-8xl md:text-[12rem] font-black text-white leading-[0.8] mb-12 tracking-tighter uppercase whitespace-pre-line">
              {SLIDES[current].title[language].split('\n').map((line, i) => (
                <div key={i} className={i === 1 ? 'text-orange-600' : ''}>
                  {line}
                </div>
              ))}
            </h1>

            <p className="text-xl md:text-2xl text-slate-400 font-medium mb-16 max-w-2xl leading-relaxed">
              {SLIDES[current].sub[language]}
            </p>

            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="group relative px-12 py-6 bg-white text-slate-950 font-black text-sm uppercase tracking-widest flex items-center gap-4 transition-all hover:bg-orange-600 hover:text-white"
            >
              INQUIRE NOW <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
            </button>
          </motion.div>
        </div>
      </div>

      {/* 底部装饰控制台 */}
      <div className="absolute bottom-12 left-6 lg:left-20 z-30 flex items-end gap-16">
         <div className="text-[10px] font-black text-white/30 tracking-[0.5em] uppercase hidden xl:block">
           EST. 2016 / DONGGUAN CHINA
         </div>
         <div className="flex items-center gap-4">
           {SLIDES.map((_, i) => (
             <button 
               key={i} 
               onClick={() => setCurrent(i)}
               className={`h-1.5 transition-all duration-500 rounded-full ${current === i ? 'w-20 bg-orange-600' : 'w-6 bg-white/20'}`} 
             />
           ))}
         </div>
      </div>

      {/* 切换控制器 */}
      <div className="absolute bottom-12 right-6 lg:right-20 z-30 flex gap-1">
         <button onClick={() => setCurrent(prev => (prev - 1 + SLIDES.length) % SLIDES.length)} className="w-14 h-14 border border-white/10 text-white/50 flex items-center justify-center hover:text-white hover:bg-white/10 transition-all">
           <ChevronLeft size={24} strokeWidth={1} />
         </button>
         <button onClick={() => setCurrent(prev => (prev + 1) % SLIDES.length)} className="w-14 h-14 border border-white/10 text-white/50 flex items-center justify-center hover:text-white hover:bg-white/10 transition-all">
           <ChevronRight size={24} strokeWidth={1} />
         </button>
      </div>
    </section>
  );
};

export default HeroSliderV2;
