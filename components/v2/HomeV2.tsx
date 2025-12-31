
import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Award, Microscope, Zap, Globe, ArrowRight, Settings, PenTool, CheckCircle2, Factory, Layers, Box } from 'lucide-react';
import { CONTENT, BRANDS } from '../../constants';
import { useLanguage } from '../../LanguageContext';

const HomeV2: React.FC = () => {
  const { language } = useLanguage();
  const data = CONTENT.home;

  // Added 'as const' to prevent the easing string from widening to 'string', 
  // which causes type incompatibility with Framer Motion's Transition type.
  const fadeInUp = {
    initial: { opacity: 0, y: 50 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: "easeOut" as const }
  };

  // Helper to merge the base transition with an optional delay
  const getTransition = (delay?: number) => ({
    ...fadeInUp.transition,
    delay
  });

  return (
    <div className="bg-white">
      
      {/* 模块：精简信任背书 */}
      <section className="py-16 bg-white border-b border-slate-50">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center lg:justify-between items-center gap-12 opacity-40 grayscale hover:grayscale-0 transition-all duration-700">
            {BRANDS.slice(0, 7).map((brand, i) => (
              <img key={i} src={brand.image} alt="Client" className="h-7 w-auto object-contain" />
            ))}
          </div>
        </div>
      </section>

      {/* 模块：大厂核心展厅 (Digital Showroom) - 新增大图展示区 */}
      <section id="showcase" className="py-32 bg-slate-950 text-white overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-end justify-between mb-24 gap-8">
            <div className="max-w-2xl">
              <span className="text-orange-600 font-black text-xs uppercase tracking-[0.5em] mb-4 block">Archive Showcase</span>
              <h2 className="text-5xl lg:text-7xl font-black leading-tight tracking-tighter">
                PRODUCT <br/> <span className="text-transparent" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.3)' }}>CRAFTSMANSHIP.</span>
              </h2>
            </div>
            <p className="text-slate-500 max-w-sm text-lg font-medium lg:text-right">
              Explore our diverse range of functional footwear, from alpine tech-boots to ergonomic urban lifestyle essentials.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-[800px]">
             {/* 大图位 */}
             <motion.div 
               {...fadeInUp}
               className="md:col-span-8 group relative overflow-hidden rounded-sm bg-slate-900"
             >
                <img src="/factory-4.webp" alt="Showcase" className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-1000" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60" />
                <div className="absolute bottom-12 left-12">
                   <h3 className="text-3xl font-black mb-2">Technical Alpine Series</h3>
                   <p className="text-slate-400 font-bold tracking-widest text-xs">VIBRAM® SOLE | GORE-TEX® COMPATIBLE</p>
                </div>
             </motion.div>
             {/* 侧边两张中图 */}
             <div className="md:col-span-4 flex flex-col gap-6">
                <motion.div 
                  {...fadeInUp} 
                  transition={getTransition(0.2)} 
                  className="h-1/2 group relative overflow-hidden rounded-sm bg-slate-900"
                >
                   <img src="/factory-5.webp" alt="Showcase" className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-1000" />
                   <div className="absolute bottom-8 left-8">
                      <h4 className="text-xl font-black">Industrial Safety</h4>
                   </div>
                </motion.div>
                <motion.div 
                  {...fadeInUp} 
                  transition={getTransition(0.4)} 
                  className="h-1/2 group relative overflow-hidden rounded-sm bg-slate-900"
                >
                   <img src="/factory-6.webp" alt="Showcase" className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-1000" />
                   <div className="absolute bottom-8 left-8">
                      <h4 className="text-xl font-black">Performance Lifestyle</h4>
                   </div>
                </motion.div>
             </div>
          </div>
        </div>
      </section>

      {/* 模块：关于我们 (极简高级版) */}
      <section id="about" className="py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-24 items-start">
            <motion.div {...fadeInUp} className="sticky top-32">
              <div className="text-8xl font-black text-slate-100 leading-none mb-8">01</div>
              <h2 className="text-5xl lg:text-7xl font-black text-slate-950 mb-12 leading-[1.1] tracking-tighter">
                {CONTENT.aboutPage.whoWeAre.title[language]}
              </h2>
              <div className="text-2xl font-bold text-slate-400 leading-relaxed border-l-4 border-orange-600 pl-10">
                {CONTENT.aboutPage.whoWeAre.content[language]}
              </div>
            </motion.div>
            <div className="space-y-12 pt-12">
               <motion.div 
                 {...fadeInUp} 
                 transition={getTransition(0.2)} 
                 className="bg-slate-50 p-12 rounded-sm border border-slate-100"
               >
                  <h3 className="text-2xl font-black mb-4 uppercase">Reliability</h3>
                  <p className="text-slate-500 text-lg">{CONTENT.aboutPage.mission.mText[language]}</p>
               </motion.div>
               <motion.div 
                 {...fadeInUp} 
                 transition={getTransition(0.4)} 
                 className="bg-slate-950 p-12 rounded-sm text-white"
               >
                  <h3 className="text-2xl font-black mb-4 uppercase text-orange-600">Vision</h3>
                  <p className="text-slate-400 text-lg">{CONTENT.aboutPage.mission.vText[language]}</p>
               </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* 模块：核心实力 - 采用大排版布局 */}
      <section id="capabilities" className="py-32 bg-slate-50">
        <div className="container mx-auto px-6">
           <div className="text-center mb-32">
              <h2 className="text-6xl lg:text-8xl font-black text-slate-950 mb-4 opacity-5">ENGINEERING</h2>
              <h2 className="text-4xl lg:text-6xl font-black text-slate-950 -mt-16 relative z-10">CORE CAPABILITIES</h2>
           </div>

           <div className="grid lg:grid-cols-3 gap-px bg-slate-200 border border-slate-200 shadow-2xl">
              {[
                { icon: Layers, title: 'Material Lab', items: data.whyUs.items[1].desc[language] },
                { icon: Factory, title: 'Smart Factory', items: data.whyUs.items[0].desc[language] },
                { icon: Box, title: 'Global Delivery', items: data.whyUs.items[2].desc[language] }
              ].map((item, i) => (
                <motion.div 
                  key={i} 
                  {...fadeInUp}
                  className="bg-white p-16 hover:bg-orange-600 group transition-all duration-500"
                >
                  <div className="text-orange-600 group-hover:text-white transition-colors mb-8"><item.icon size={48} strokeWidth={1} /></div>
                  <h3 className="text-2xl font-black mb-6 uppercase group-hover:text-white transition-colors">{item.title}</h3>
                  <p className="text-slate-500 group-hover:text-white/80 transition-colors leading-relaxed text-lg">{item.items}</p>
                </motion.div>
              ))}
           </div>
        </div>
      </section>

      {/* 模块：联系我们 - 增强视觉深度 */}
      <section id="contact" className="py-32 bg-white">
         <div className="container mx-auto px-6">
            <div className="bg-slate-950 p-12 lg:p-32 relative overflow-hidden">
               <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none">
                  <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
               </div>
               
               <div className="grid lg:grid-cols-2 gap-24 relative z-10">
                  <div>
                     <h2 className="text-5xl lg:text-7xl font-black text-white mb-8 tracking-tighter">LET'S START <br/> <span className="text-orange-600">PRODUCTION.</span></h2>
                     <p className="text-xl text-slate-400 mb-16 leading-relaxed">Our technical team is ready to review your blueprints and provide a full manufacturing feasibility study.</p>
                     
                     <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
                        <div>
                           <span className="text-xs font-black text-orange-600 uppercase tracking-widest block mb-4">Direct Email</span>
                           <a href="mailto:info@zecoola.com" className="text-xl font-bold text-white hover:text-orange-600 transition-colors">info@zecoola.com</a>
                        </div>
                        <div>
                           <span className="text-xs font-black text-orange-600 uppercase tracking-widest block mb-4">Industrial Line</span>
                           <span className="text-xl font-bold text-white">+86 (769) 8121-1559</span>
                        </div>
                     </div>
                  </div>

                  <div className="bg-white p-12 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)]">
                     <form className="space-y-8">
                        <div className="space-y-2">
                           <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Contact Name</label>
                           <input type="text" className="w-full border-b border-slate-200 py-3 outline-none focus:border-orange-600 transition-colors font-bold" placeholder="Your Name" />
                        </div>
                        <div className="space-y-2">
                           <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Enterprise Email</label>
                           <input type="email" className="w-full border-b border-slate-200 py-3 outline-none focus:border-orange-600 transition-colors font-bold" placeholder="your@brand.com" />
                        </div>
                        <div className="space-y-2">
                           <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Project Scope</label>
                           <textarea rows={3} className="w-full border-b border-slate-200 py-3 outline-none focus:border-orange-600 transition-colors font-bold resize-none" placeholder="Tell us about your needs..." />
                        </div>
                        <button className="w-full py-6 bg-orange-600 text-white font-black hover:bg-slate-900 transition-all flex items-center justify-center gap-3">
                           SUBMIT RFQ <ArrowRight size={20} />
                        </button>
                     </form>
                  </div>
               </div>
            </div>
         </div>
      </section>
    </div>
  );
};

export default HomeV2;
