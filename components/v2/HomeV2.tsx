
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronRight, ShieldCheck, Award } from 'lucide-react';
import { CONTENT } from '../../constants';
import { useLanguage } from '../../LanguageContext';

const HomeV2: React.FC<{ onNavigate: (id: string) => void }> = ({ onNavigate }) => {
  const { language } = useLanguage();
  const data = CONTENT.home;

  return (
    <div className="overflow-hidden bg-white">
      {/* 模块 1: Hero Section */}
      <section className="relative min-h-[85vh] flex items-center bg-slate-50 border-b">
        <div className="container mx-auto px-6 py-20 grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -40 }} 
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-xs font-black uppercase tracking-widest mb-6">
              <ShieldCheck size={14} /> Global Manufacturing Intelligence
            </div>
            <h1 className="text-4xl lg:text-7xl font-black text-slate-900 leading-[1.05] mb-8">
              {data.hero.h1[language]}
            </h1>
            <p className="text-xl text-slate-500 mb-12 leading-relaxed border-l-4 border-orange-600 pl-6">
              {data.hero.h2[language]}
            </p>
            
            <div className="flex flex-wrap gap-4">
              <button 
                onClick={() => onNavigate('contact')}
                className="group px-10 py-5 bg-orange-600 text-white font-black rounded-xl flex items-center gap-3 hover:bg-slate-900 transition-all shadow-2xl shadow-orange-100"
              >
                {data.hero.cta[language]}
                <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative"
          >
            <div className="rounded-[2.5rem] overflow-hidden shadow-2xl border-[12px] border-white bg-slate-200">
               <img src="/factory-1.webp" alt="ZECOOLA Production" className="w-full h-[600px] object-cover" />
            </div>
            <div className="absolute -bottom-10 -left-10 bg-white p-10 rounded-[2rem] shadow-2xl border border-slate-100 hidden md:block">
               <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-orange-600 rounded-2xl flex items-center justify-center text-white shadow-lg">
                     <Award size={32} />
                  </div>
                  <div>
                    <div className="text-4xl font-black text-slate-900 leading-none">50+</div>
                    <div className="text-xs font-black text-slate-400 uppercase tracking-widest mt-1">Years History</div>
                  </div>
               </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 核心优势横条 */}
      <section className="bg-slate-900 py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {data.hero.strengths.map((item, i) => (
              <div key={i} className="flex flex-col items-center lg:items-start text-center lg:text-left gap-4">
                 <div className="p-3 bg-white/10 text-orange-500 rounded-xl">
                    <item.icon size={28} />
                 </div>
                 <h4 className="text-white font-bold text-sm leading-snug uppercase tracking-tight">
                    {item.text[language]}
                 </h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 模块 2: What We Do */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6">
           <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-20 gap-8">
              <div className="max-w-3xl">
                <span className="text-orange-600 font-black text-sm uppercase tracking-[0.3em] mb-4 block">Product Vertical</span>
                <h2 className="text-4xl lg:text-5xl font-black text-slate-900 mb-6">{data.whatWeDo.title[language]}</h2>
                <p className="text-slate-500 text-xl leading-relaxed">{data.whatWeDo.desc[language]}</p>
              </div>
           </div>

           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {data.whatWeDo.categories.map((cat, i) => (
                <motion.div 
                  key={i}
                  whileHover={{ y: -10 }}
                  className="group relative h-[450px] rounded-[2rem] overflow-hidden shadow-xl cursor-pointer"
                  onClick={() => onNavigate('capabilities')}
                >
                   <img src={cat.image} alt={cat.title[language]} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                   <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent"></div>
                   <div className="absolute bottom-10 left-10 right-10">
                      <div className="w-10 h-1 bg-orange-600 mb-4 group-hover:w-full transition-all duration-500"></div>
                      <h4 className="text-white font-black text-2xl leading-tight">{cat.title[language]}</h4>
                   </div>
                </motion.div>
              ))}
           </div>
        </div>
      </section>

      {/* 模块 4: How We Work */}
      <section className="py-32 bg-white border-t">
         <div className="container mx-auto px-6">
            <div className="text-center mb-24">
               <span className="text-slate-400 font-black text-xs uppercase tracking-[0.4em] mb-4 block">Standard Operating Procedure</span>
               <h2 className="text-4xl font-black text-slate-900 uppercase tracking-tighter">
                  {data.howWeWork.title[language]}
               </h2>
            </div>

            <div className="relative">
               <div className="hidden lg:block absolute top-10 left-[10%] right-[10%] h-px bg-slate-200 -z-10"></div>
               <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-y-16 gap-x-8">
                  {data.howWeWork.steps.map((step, i) => (
                    <div key={i} className="flex flex-col items-center text-center group">
                       <div className="w-20 h-20 rounded-[1.5rem] bg-white border-2 border-slate-100 flex items-center justify-center mb-8 shadow-sm group-hover:border-orange-600 group-hover:bg-orange-600 group-hover:text-white transition-all duration-300">
                          <span className="text-2xl font-black text-slate-300 group-hover:text-white">0{step.id}</span>
                       </div>
                       <h4 className="text-sm font-black text-slate-800 uppercase px-2 leading-tight group-hover:text-orange-600 transition-colors">
                          {step.title[language]}
                       </h4>
                    </div>
                  ))}
               </div>
            </div>
         </div>
      </section>
    </div>
  );
};

export default HomeV2;
