
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { useLanguage } from '../../LanguageContext';

const SLIDES = [
  {
    image: '/hero-1.webp',
    tag: 'STRATEGIC MANUFACTURING PARTNER',
    title: { en: 'WORLD-\nCLASS\nPARTNER', zh: '世界级\n合作伙伴' },
    sub: { en: 'Empowering global footwear brands with 50+ years of industrial intelligence.', zh: '以50多年的工业智慧助力全球鞋类品牌。' }
  },
  {
    image: '/hero-2.webp',
    tag: 'PRECISION R&D & ENGINEERING',
    title: { en: 'INNOVATION\nLAB', zh: '创新\n实验室' },
    sub: { en: 'Transforming complex design visions into high-performance technical products.', zh: '将复杂的设计愿景转化为高性能的技术产品。' }
  }
];

const HeroSliderV2: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const { language } = useLanguage();

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % SLIDES.length);
    }, 10000);
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
          transition={{ duration: 1.5 }}
          className="absolute inset-0"
        >
          <motion.div 
            initial={{ scale: 1.2 }}
            animate={{ scale: 1 }}
            transition={{ duration: 15, ease: "linear" }}
            className="absolute inset-0"
          >
             <img src={SLIDES[current].image} alt="Hero" className="h-full w-full object-cover grayscale brightness-[0.4]" />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-transparent to-transparent z-10" />
        </motion.div>
      </AnimatePresence>

      <div className="absolute inset-0 z-20 flex items-center">
        <div className="container mx-auto px-6 lg:px-20">
          <motion.div
            key={`content-${current}`}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="max-w-6xl"
          >
            <div className="flex items-center gap-6 mb-10">
               <div className="w-16 h-[2px] bg-orange-600" />
               <span className="text-orange-600 text-sm font-black uppercase tracking-[0.4em]">
                 {SLIDES[current].tag}
               </span>
            </div>

            <h1 className="text-[10rem] md:text-[14rem] font-black text-white leading-[0.75] mb-12 tracking-tighter uppercase whitespace-pre-line">
              {SLIDES[current].title[language].split('\n').map((line, i) => (
                <div key={i} className={i === (SLIDES[current].title[language].split('\n').length - 1) ? 'text-orange-600' : ''}>
                  {line}
                </div>
              ))}
            </h1>

            <p className="text-2xl text-slate-400 font-medium mb-16 max-w-2xl leading-relaxed">
              {SLIDES[current].sub[language]}
            </p>

            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="group px-12 py-6 bg-white text-slate-950 font-black text-xs uppercase tracking-[0.3em] flex items-center gap-4 hover:bg-orange-600 hover:text-white transition-all"
            >
              INQUIRE NOW <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
            </button>
          </motion.div>
        </div>
      </div>

      {/* 底部控制台与装饰字 */}
      <div className="absolute bottom-12 left-6 lg:left-20 z-30 flex items-center gap-16">
         <div className="text-[10px] font-black text-white/30 tracking-[0.5em] uppercase">
           EST. 2016 / DONGGUAN CHINA
         </div>
         <div className="flex items-center gap-2">
           {SLIDES.map((_, i) => (
             <div key={i} className="relative w-16 h-1 bg-white/10 rounded-full overflow-hidden">
                {current === i && (
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 10, ease: "linear" }}
                    className="absolute inset-0 bg-orange-600"
                  />
                )}
             </div>
           ))}
         </div>
      </div>

      <div className="absolute bottom-12 right-6 lg:right-20 z-30 flex gap-1">
         <button onClick={() => setCurrent(prev => (prev - 1 + SLIDES.length) % SLIDES.length)} className="w-16 h-16 border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:bg-white/5 transition-all">
           <ChevronLeft size={24} strokeWidth={1} />
         </button>
         <button onClick={() => setCurrent(prev => (prev + 1) % SLIDES.length)} className="w-16 h-16 border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:bg-white/5 transition-all">
           <ChevronRight size={24} strokeWidth={1} />
         </button>
      </div>
    </section>
  );
};

export default HeroSliderV2;
