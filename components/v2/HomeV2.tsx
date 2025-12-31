
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Layers, Factory, Box } from 'lucide-react';
import { CONTENT, BRANDS } from '../../constants';
import { useLanguage } from '../../LanguageContext';

const HomeV2: React.FC = () => {
  const { language } = useLanguage();
  const data = CONTENT.home;

  const fadeInUp = {
    initial: { opacity: 0, y: 50 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: "easeOut" as const }
  };

  const getTransition = (delay?: number) => ({
    ...fadeInUp.transition,
    delay
  });

  return (
    <div className="bg-white">
      
      {/* 模块：合作伙伴 (您截图中显示 Client 的地方) */}
      <section className="py-20 bg-white border-b border-slate-50 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center lg:justify-between items-center gap-10 opacity-40 grayscale hover:grayscale-0 transition-all duration-700">
            {BRANDS.slice(0, 8).map((brand, i) => (
              <div key={i} className="h-8 w-32 flex items-center justify-center">
                 {/* 如果图片路径正确，它会显示 Logo；否则会显示占位边框 */}
                 <img 
                    src={brand.image} 
                    alt="Strategic Partner" 
                    className="max-h-full max-w-full object-contain"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = 'none';
                      (e.target as HTMLImageElement).parentElement!.innerHTML = `<span class="text-[10px] font-black text-slate-300">PARTNER 0${i+1}</span>`;
                    }}
                 />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 模块：产品陈列室 (Showcase) */}
      <section id="showcase" className="py-32 bg-slate-950 text-white">
        <div className="container mx-auto px-6 lg:px-20">
          <div className="flex flex-col lg:flex-row items-end justify-between mb-24 gap-8">
            <div className="max-w-2xl">
              <span className="text-orange-600 font-black text-xs uppercase tracking-[0.5em] mb-4 block">Product Showcase</span>
              <h2 className="text-6xl lg:text-8xl font-black leading-none tracking-tighter">
                CRAFTED BY <br/> <span className="text-transparent" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.3)' }}>EXPERTISE.</span>
              </h2>
            </div>
            <p className="text-slate-500 max-w-xs text-lg font-medium leading-relaxed">
              We specialize in the R&D and manufacturing of elite technical footwear for global market leaders.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
             {/* 核心产品展示图 */}
             <motion.div 
               {...fadeInUp}
               className="md:col-span-7 group relative overflow-hidden aspect-[4/5] md:aspect-auto md:h-[700px] bg-slate-900"
             >
                <img src="/factory-5.webp" alt="Showcase" className="w-full h-full object-cover opacity-70 group-hover:scale-105 transition-transform duration-[2s]" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-90" />
                <div className="absolute bottom-16 left-16">
                   <div className="text-orange-600 font-black text-xs tracking-widest mb-4">ENGINEERING DEPOT</div>
                   <h3 className="text-4xl font-black mb-4">Functional Alpine <br/> Tech Series</h3>
                   <div className="flex gap-4">
                      <span className="px-3 py-1 border border-white/20 text-[10px] font-black">VIBRAM®</span>
                      <span className="px-3 py-1 border border-white/20 text-[10px] font-black">GORE-TEX®</span>
                   </div>
                </div>
             </motion.div>

             <div className="md:col-span-5 flex flex-col gap-10">
                <motion.div 
                  {...fadeInUp} 
                  transition={getTransition(0.2)} 
                  className="flex-1 group relative overflow-hidden bg-slate-900 aspect-square md:aspect-auto"
                >
                   <img src="/factory-6.webp" alt="Showcase" className="w-full h-full object-cover opacity-50 group-hover:scale-105 transition-transform duration-[2s]" />
                   <div className="absolute bottom-10 left-10">
                      <h4 className="text-2xl font-black">Industrial Safety</h4>
                      <p className="text-slate-400 text-sm font-bold">Reinforced Construction</p>
                   </div>
                </motion.div>
                <motion.div 
                  {...fadeInUp} 
                  transition={getTransition(0.4)} 
                  className="flex-1 group relative overflow-hidden bg-slate-900 aspect-square md:aspect-auto"
                >
                   <img src="/factory-1.webp" alt="Showcase" className="w-full h-full object-cover opacity-50 group-hover:scale-105 transition-transform duration-[2s]" />
                   <div className="absolute bottom-10 left-10">
                      <h4 className="text-2xl font-black">Performance Lifestyle</h4>
                      <p className="text-slate-400 text-sm font-bold">Ergonomic R&D</p>
                   </div>
                </motion.div>
             </div>
          </div>
        </div>
      </section>

      {/* 模块：核心能力 */}
      <section id="capabilities" className="py-32 bg-slate-50">
        <div className="container mx-auto px-6 lg:px-20">
           <div className="text-center mb-32">
              <h2 className="text-7xl lg:text-[10rem] font-black text-slate-950 mb-4 opacity-[0.03] leading-none select-none">ZECOOLA</h2>
              <h2 className="text-4xl lg:text-6xl font-black text-slate-950 -mt-16 relative z-10">OUR STRENGTHS</h2>
           </div>

           <div className="grid lg:grid-cols-3 gap-px bg-slate-200 border border-slate-200">
              {[
                { icon: Layers, title: 'Technical Lab', items: data.whyUs.items[1].desc[language] },
                { icon: Factory, title: 'Smart Factory', items: data.whyUs.items[0].desc[language] },
                { icon: Box, title: 'Supply Chain', items: data.whyUs.items[2].desc[language] }
              ].map((item, i) => (
                <motion.div 
                  key={i} 
                  {...fadeInUp}
                  className="bg-white p-20 hover:bg-orange-600 group transition-all duration-700"
                >
                  <div className="text-orange-600 group-hover:text-white transition-colors mb-10"><item.icon size={56} strokeWidth={1} /></div>
                  <h3 className="text-2xl font-black mb-6 uppercase group-hover:text-white transition-colors tracking-tight">{item.title}</h3>
                  <p className="text-slate-500 group-hover:text-white/70 transition-colors leading-relaxed text-lg font-medium">{item.items}</p>
                </motion.div>
              ))}
           </div>
        </div>
      </section>

      {/* 模块：页脚前的号召 */}
      <section id="contact" className="py-32 bg-white">
         <div className="container mx-auto px-6 lg:px-20">
            <div className="bg-slate-950 p-12 lg:p-32 flex flex-col items-center text-center relative overflow-hidden">
               <div className="absolute top-0 left-0 w-full h-1 bg-orange-600" />
               <h2 className="text-5xl lg:text-7xl font-black text-white mb-10 tracking-tighter">READY TO INNOVATE?</h2>
               <p className="text-xl text-slate-400 mb-16 max-w-2xl font-medium leading-relaxed">Join forces with ZECOOLA to elevate your brand's footwear lineup through advanced engineering and professional manufacturing.</p>
               <button 
                 onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                 className="px-16 py-6 bg-orange-600 text-white font-black hover:bg-white hover:text-orange-600 transition-all text-xl"
               >
                 GET A QUOTE
               </button>
            </div>
         </div>
      </section>
    </div>
  );
};

export default HomeV2;
