
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
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
  const [current, setCurrent] = useState(0);
  const { language } = useLanguage();

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden bg-slate-950">
      <div className="absolute inset-0">
         <img 
           src={SLIDES[current].image} 
           alt="Industrial Heritage" 
           className="h-full w-full object-cover grayscale brightness-[0.4] scale-105"
           onError={(e) => { e.currentTarget.src = "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070"; }}
         />
         {/* 侧向渐变，确保左侧文字极高可读性 */}
         <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/20 to-transparent z-10" />
      </div>

      <div className="absolute inset-0 z-20 flex items-center">
        <div className="container mx-auto px-6 lg:px-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="max-w-7xl"
          >
            {/* 顶部的橙色标记对标截图 */}
            <div className="flex items-center gap-6 mb-12">
               <div className="w-16 h-[3px] bg-orange-600" />
               <span className="text-orange-600 text-xs md:text-sm font-black uppercase tracking-[0.5em] flex items-center gap-3">
                 FOOTWEAR EXCELLENCE <span className="text-white/40 tracking-normal text-[10px]">/</span> <span className="text-white">STRATEGIC</span>
               </span>
            </div>

            {/* 巨型分层标题 */}
            <h1 className="flex flex-col text-[10rem] md:text-[14rem] font-black leading-[0.75] tracking-tighter uppercase select-none italic">
               <span className="text-white">{SLIDES[current].titleLine1[language]}</span>
               <span className="text-white">{SLIDES[current].titleLine2[language]}</span>
               <span className="text-orange-600">{SLIDES[current].titleLine3[language]}</span>
            </h1>

            {/* 副标题与操作按钮 */}
            <div className="mt-16 flex flex-col md:flex-row md:items-end gap-12">
               <p className="text-2xl text-slate-400 font-medium max-w-xl leading-relaxed">
                 {SLIDES[current].sub[language]}
               </p>
               <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="group px-14 py-7 bg-white text-slate-950 font-black text-xs uppercase tracking-[0.4em] flex items-center gap-6 hover:bg-orange-600 hover:text-white transition-all shadow-2xl"
              >
                REQUEST RFQ <ArrowRight size={22} className="group-hover:translate-x-3 transition-transform duration-500" />
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* 底部控制中心 */}
      <div className="absolute bottom-12 left-6 lg:left-20 z-30 flex items-center gap-16">
         <div className="text-[10px] font-black text-white/20 tracking-[0.6em] uppercase hidden sm:block">
           CORE TECH / EST. 2016
         </div>
         <div className="flex items-center gap-4">
           {[0, 1, 2].map((i) => (
             <div key={i} className={`w-20 h-1.5 rounded-full transition-all duration-500 ${i === 0 ? 'bg-orange-600' : 'bg-white/10'}`} />
           ))}
         </div>
      </div>

      {/* 导航按钮 */}
      <div className="absolute bottom-12 right-6 lg:right-20 z-30 flex gap-1">
         <button className="w-16 h-16 border border-white/10 flex items-center justify-center text-white/20 hover:bg-white/5 hover:text-white transition-all">
           <ChevronLeft size={24} />
         </button>
         <button className="w-16 h-16 border border-white/10 flex items-center justify-center text-white/20 hover:bg-white/5 hover:text-white transition-all">
           <ChevronRight size={24} />
         </button>
      </div>
    </section>
  );
};

export default HeroSliderV2;
