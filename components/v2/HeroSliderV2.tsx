
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, ArrowRight, MousePointer2 } from 'lucide-react';
import { useLanguage } from '../../LanguageContext';

const SLIDES = [
  {
    image: '/factory-1.webp',
    label: 'INTELLIGENT MANUFACTURING',
    title: { en: 'Engineered for Performance.', zh: '性能驱动 卓越工程' },
    sub: { en: 'Global manufacturing partner for high-performance functional footwear.', zh: '全球高性能功能鞋类代工的卓越合作伙伴。' }
  },
  {
    image: '/factory-2.webp',
    label: 'GLOBAL LOGISTICS',
    title: { en: 'Supply Chain Mastery.', zh: '供应链 掌控全局' },
    sub: { en: 'Scalable production capacity with precision delivery for elite brands.', zh: '为全球一线品牌提供可扩展的产能与精准交付。' }
  },
  {
    image: '/factory-3.webp',
    label: 'MATERIAL SCIENCE',
    title: { en: 'Material Innovation.', zh: '材料科学 触达未来' },
    sub: { en: 'Pioneering technical textiles and sustainable composite solutions.', zh: '尖端功能性纺织品与环保复合材料的创新应用。' }
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

  const next = () => setCurrent((prev) => (prev + 1) % SLIDES.length);
  const prev = () => setCurrent((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden bg-slate-950">
      {/* 底部装饰大字 */}
      <div className="absolute bottom-[-5%] left-[-2%] text-[20vw] font-black text-white/[0.02] leading-none pointer-events-none select-none z-0">
        ZECOOLA
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0"
        >
          {/* 背景大图 - 带缩放动画 */}
          <motion.div 
            initial={{ scale: 1.15 }}
            animate={{ scale: 1 }}
            transition={{ duration: 10, ease: "linear" }}
            className="absolute inset-0"
          >
             <img src={SLIDES[current].image} alt="Hero" className="h-full w-full object-cover" />
          </motion.div>
          
          {/* 渐变遮罩 */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/40 to-transparent z-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent z-10" />
        </motion.div>
      </AnimatePresence>

      <div className="absolute inset-0 z-20 flex items-center">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            key={`content-${current}`}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="max-w-5xl"
          >
            <div className="flex items-center gap-4 mb-8">
               <div className="w-12 h-[1px] bg-orange-600" />
               <span className="text-orange-600 text-xs font-black uppercase tracking-[0.5em]">
                 {SLIDES[current].label}
               </span>
            </div>

            <h1 className="text-6xl md:text-[7rem] font-black text-white leading-[0.9] mb-10 tracking-tighter">
              {SLIDES[current].title[language].split(' ').map((word, i) => (
                <span key={i} className={i === 1 ? 'text-transparent stroke-text' : ''}>
                   {word}{' '}
                </span>
              ))}
            </h1>

            <p className="text-lg md:text-2xl text-slate-300 font-medium mb-12 max-w-xl leading-relaxed">
              {SLIDES[current].sub[language]}
            </p>

            <div className="flex flex-wrap gap-6">
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="group relative px-12 py-5 bg-orange-600 text-white font-black overflow-hidden transition-all hover:bg-white hover:text-orange-600"
              >
                <div className="relative z-10 flex items-center gap-3">
                   START CONSULTATION <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
                </div>
              </button>
              
              <button 
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                className="group px-12 py-5 border border-white/30 text-white font-black hover:bg-white/10 transition-all flex items-center gap-3"
              >
                VIEW CAPABILITIES <MousePointer2 size={18} />
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* 右侧垂直数字 */}
      <div className="absolute right-12 top-1/2 -translate-y-1/2 z-30 hidden lg:flex flex-col items-center gap-8">
        <div className="h-32 w-[1px] bg-white/10" />
        {SLIDES.map((_, i) => (
          <button 
            key={i} 
            onClick={() => setCurrent(i)}
            className={`text-xs font-black transition-all ${current === i ? 'text-orange-600 scale-150' : 'text-white/20 hover:text-white/50'}`}
          >
            0{i + 1}
          </button>
        ))}
        <div className="h-32 w-[1px] bg-white/10" />
      </div>

      <style>{`
        .stroke-text {
          -webkit-text-stroke: 1px rgba(255,255,255,0.4);
          color: transparent;
        }
      `}</style>
    </section>
  );
};

export default HeroSliderV2;
