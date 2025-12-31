
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck, Award, Microscope, Zap, Globe, ChevronRight } from 'lucide-react';
import { CONTENT, BRANDS } from '../../constants';
import { useLanguage } from '../../LanguageContext';

const HomeV2: React.FC<{ onNavigate: (id: string) => void }> = ({ onNavigate }) => {
  const { language } = useLanguage();
  const data = CONTENT.home;

  return (
    <div className="bg-white">
      {/* 模块 1: Hero Section - 极致专业感 */}
      <section className="relative min-h-[90vh] flex items-center bg-[#F8FAFC]">
        <div className="container mx-auto px-6 py-20 grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }} 
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-orange-50 text-[#FF6B00] rounded-lg text-xs font-black uppercase tracking-widest mb-8 border border-orange-100">
               <ShieldCheck size={14} /> Trust Built on Performance
            </div>
            <h1 className="text-4xl lg:text-7xl font-black text-slate-900 leading-[1.1] mb-8">
              {data.hero.h1[language]}
            </h1>
            <p className="text-xl text-slate-500 mb-12 leading-relaxed border-l-4 border-[#FF6B00] pl-6">
              {data.hero.h2[language]}
            </p>
            
            <div className="grid grid-cols-2 gap-6 mb-12">
               {data.hero.strengths.map((s, i) => (
                 <div key={i} className="flex items-center gap-3">
                    <div className="text-[#FF6B00]"><s.icon size={20} /></div>
                    <span className="text-sm font-bold text-slate-700">{s.text[language]}</span>
                 </div>
               ))}
            </div>

            <button 
              onClick={() => onNavigate('contact')}
              className="group px-10 py-5 bg-[#FF6B00] text-white font-black rounded-xl flex items-center gap-3 hover:bg-slate-900 transition-all shadow-xl shadow-orange-100"
            >
              {data.hero.cta[language]}
              <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative"
          >
            <div className="rounded-[2rem] overflow-hidden shadow-2xl border-[12px] border-white">
               <img src="/factory-1.webp" alt="ZECOOLA Production" className="w-full h-[650px] object-cover" />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white p-8 rounded-2xl shadow-xl border border-slate-50 flex items-center gap-4">
                <div className="w-12 h-12 bg-orange-600 rounded-xl flex items-center justify-center text-white"><Award size={28} /></div>
                <div>
                  <div className="text-3xl font-black text-slate-900">50+</div>
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">Years Expertise</div>
                </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 合作客户展示 - 参考用户截图优化 */}
      <section className="py-24 bg-white border-b border-slate-50">
         <div className="container mx-auto px-6">
            <div className="text-center mb-16">
               <span className="text-slate-400 font-black text-xs uppercase tracking-[0.3em] mb-4 block">Strategic Global Partnerships</span>
               <h2 className="text-2xl font-black text-slate-900">TRUSTED BY INDUSTRY LEADERS</h2>
            </div>
            <div className="flex flex-wrap justify-center gap-4 md:gap-8 max-w-6xl mx-auto">
               {BRANDS.map((brand, i) => (
                 <div key={i} className="w-[calc(50%-1rem)] md:w-[calc(25%-2rem)] lg:w-[calc(20%-2rem)] aspect-video bg-white rounded-xl flex items-center justify-center p-6 border border-slate-50 hover:shadow-lg hover:-translate-y-1 transition-all">
                    <img src={brand.image} alt="Partner" className="max-w-full max-h-full object-contain grayscale hover:grayscale-0 transition-all opacity-60 hover:opacity-100" />
                 </div>
               ))}
            </div>
         </div>
      </section>

      {/* 模块 2: What We Do - 专业产品线 */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6">
           <div className="max-w-4xl mx-auto text-center mb-24">
              <span className="text-[#FF6B00] font-black text-sm uppercase tracking-[0.4em] mb-4 block underline underline-offset-8">What We Do</span>
              <h2 className="text-4xl lg:text-5xl font-black text-slate-900 mb-8">{data.whatWeDo.title[language]}</h2>
              <p className="text-xl text-slate-500 leading-relaxed mb-10">{data.whatWeDo.desc[language]}</p>
              <button 
                onClick={() => onNavigate('capabilities')}
                className="inline-flex items-center gap-2 text-slate-900 font-black border-b-2 border-[#FF6B00] pb-2 hover:text-[#FF6B00] transition-all"
              >
                Learn More <ChevronRight size={20} />
              </button>
           </div>

           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {data.whatWeDo.categories.map((cat, i) => (
                <div key={i} className="group relative h-[500px] rounded-[2rem] overflow-hidden shadow-xl cursor-pointer" onClick={() => onNavigate('services')}>
                   <img src={cat.image} alt={cat.title[language]} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                   <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/10 to-transparent"></div>
                   <div className="absolute bottom-10 left-10 right-10">
                      <h4 className="text-white font-black text-2xl mb-2">{cat.title[language]}</h4>
                      <div className="h-1 w-12 bg-[#FF6B00] group-hover:w-full transition-all duration-500"></div>
                   </div>
                </div>
              ))}
           </div>
           <p className="mt-16 text-center text-slate-400 font-medium max-w-2xl mx-auto italic">"{data.whatWeDo.note[language]}"</p>
        </div>
      </section>

      {/* 模块 3: Why ZECOOLA - 深度对比卡片 */}
      <section className="py-32 bg-slate-50">
         <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-12 gap-16 items-start">
               <div className="lg:col-span-5">
                  <h2 className="text-4xl lg:text-5xl font-black text-slate-900 mb-10 leading-tight">
                    {data.whyUs.title[language]}
                  </h2>
                  <div className="grid gap-6">
                     <div className="p-8 bg-[#FF6B00] rounded-3xl text-white shadow-xl shadow-orange-100">
                        <h4 className="text-xl font-black mb-2 uppercase tracking-tight">Our Mindset</h4>
                        <p className="font-bold">Building long-term value for brands through technical excellence and trust.</p>
                     </div>
                  </div>
               </div>
               <div className="lg:col-span-7 grid md:grid-cols-2 gap-8">
                  {data.whyUs.items.map((item, i) => (
                    <div key={i} className="p-10 bg-white rounded-3xl border border-slate-100 hover:shadow-2xl transition-all group">
                       <h3 className="text-xl font-black mb-4 text-[#FF6B00] uppercase tracking-tight group-hover:translate-x-1 transition-transform">{item.title[language]}</h3>
                       <p className="text-slate-500 font-medium leading-relaxed">{item.desc[language]}</p>
                    </div>
                  ))}
               </div>
            </div>
         </div>
      </section>

      {/* 模块 4: How We Work - 专业 SOP 流程 */}
      <section className="py-32 bg-white">
         <div className="container mx-auto px-6">
            <div className="text-center mb-24">
               <span className="text-slate-400 font-black text-xs uppercase tracking-[0.5em] mb-4 block">Standard Operating Procedure</span>
               <h2 className="text-4xl font-black text-slate-900">{data.howWeWork.title[language]}</h2>
            </div>

            <div className="relative">
               {/* 连接线 */}
               <div className="hidden lg:block absolute top-12 left-[10%] right-[10%] h-px bg-slate-200 -z-0"></div>
               
               <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-y-16 gap-x-8">
                  {data.howWeWork.steps.map((step, i) => (
                    <div key={i} className="flex flex-col items-center text-center group relative z-10">
                       <div className="w-24 h-24 rounded-3xl bg-white border-2 border-slate-100 flex items-center justify-center mb-8 shadow-sm group-hover:border-[#FF6B00] group-hover:bg-[#FF6B00] transition-all duration-300">
                          <span className="text-3xl font-black text-slate-200 group-hover:text-white">0{step.id}</span>
                       </div>
                       <h4 className="text-sm font-black text-slate-800 uppercase px-2 leading-tight group-hover:text-[#FF6B00] transition-colors">
                          {step.title[language]}
                       </h4>
                    </div>
                  ))}
               </div>
               <p className="text-center mt-20 text-slate-400 max-w-2xl mx-auto font-medium">
                  Our structured process ensures transparency, efficiency, and reduced development risk.
               </p>
            </div>
         </div>
      </section>

      {/* 底部悬浮 CTA */}
      <section className="py-24 bg-white">
         <div className="container mx-auto px-6 text-center">
            <div className="bg-slate-900 rounded-[3rem] p-16 text-white relative overflow-hidden shadow-2xl">
               <div className="absolute top-0 right-0 w-96 h-96 bg-[#FF6B00]/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
               <h2 className="text-4xl md:text-5xl font-black mb-8">Ready to Build Your <br/> Next Project?</h2>
               <button 
                  onClick={() => onNavigate('contact')}
                  className="px-12 py-5 bg-[#FF6B00] text-white font-black rounded-xl hover:bg-white hover:text-[#FF6B00] transition-all shadow-xl"
               >
                  Send Inquiry / Request Quote
               </button>
            </div>
         </div>
      </section>
    </div>
  );
};

export default HomeV2;
