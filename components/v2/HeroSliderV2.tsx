
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { useLanguage } from '../../LanguageContext';

const SLIDES = [
  {
    image: '/factory-1.webp',
    title: { en: 'Precision Engineering.', zh: '精密工程 卓越制造' },
    sub: { en: '50+ Years of Footwear R&D Excellence', zh: '五十余载鞋类研发深厚积淀' }
  },
  {
    image: '/factory-2.webp',
    title: { en: 'Global Supply Chain.', zh: '全球供应链 稳定交付' },
    sub: { en: 'Scalable Production for World-Leading Brands', zh: '为全球领先品牌提供规模化生产方案' }
  },
  {
    image: '/factory-3.webp',
    title: { en: 'Innovative Materials.', zh: '创新材料 科技领航' },
    sub: { en: 'Advanced Functional Textiles & Compounds', zh: '尖端功能性纺织品与复合材料应用' }
  }
];

const HeroSliderV2: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const { language } = useLanguage();

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const next = () => setCurrent((prev) => (prev + 1) % SLIDES.length);
  const prev = () => setCurrent((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden bg-slate-900">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <div className="absolute inset-0 bg-slate-900/40 z-10" />
          <img src={SLIDES[current].image} alt="Hero" className="h-full w-full object-cover" />
        </motion.div>
      </AnimatePresence>

      <div className="absolute inset-0 z-20 flex items-center justify-center">
        <div className="container mx-auto px-6">
          <motion.div
            key={`text-${current}`}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-4xl"
          >
            <div className="inline-block px-4 py-1 bg-orange-600 text-white text-xs font-black uppercase tracking-[0.3em] mb-6">
              Industrial Excellence
            </div>
            <h1 className="text-5xl md:text-8xl font-black text-white leading-none mb-8 drop-shadow-2xl">
              {SLIDES[current].title[language]}
            </h1>
            <p className="text-xl md:text-2xl text-white/80 font-medium mb-10 max-w-2xl backdrop-blur-md bg-black/10 p-4 border-l-4 border-orange-600">
              {SLIDES[current].sub[language]}
            </p>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="group flex items-center gap-4 px-10 py-5 bg-white text-slate-900 font-black rounded-sm hover:bg-orange-600 hover:text-white transition-all shadow-2xl"
            >
              START PROJECT <ArrowRight className="group-hover:translate-x-2 transition-transform" />
            </button>
          </motion.div>
        </div>
      </div>

      {/* 控件 */}
      <div className="absolute bottom-12 right-12 z-30 flex gap-4">
        <button onClick={prev} className="p-4 border border-white/20 text-white hover:bg-white hover:text-slate-900 transition-all">
          <ChevronLeft size={24} />
        </button>
        <button onClick={next} className="p-4 border border-white/20 text-white hover:bg-white hover:text-slate-900 transition-all">
          <ChevronRight size={24} />
        </button>
      </div>

      {/* 指示器 */}
      <div className="absolute bottom-12 left-12 z-30 flex gap-2">
        {SLIDES.map((_, i) => (
          <div 
            key={i} 
            className={`h-1 transition-all duration-500 ${i === current ? 'w-12 bg-orange-600' : 'w-4 bg-white/30'}`} 
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSliderV2;
