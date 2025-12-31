
import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Award, Microscope, Zap, Globe, ArrowRight, Settings, PenTool, CheckCircle2 } from 'lucide-react';
import { CONTENT, BRANDS } from '../../constants';
import { useLanguage } from '../../LanguageContext';

const HomeV2: React.FC = () => {
  const { language } = useLanguage();
  const data = CONTENT.home;

  const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8 }
  };

  return (
    <div className="bg-white">
      
      {/* 模块：信任背书 (Clients) - 极简国际范 */}
      <section className="py-24 bg-slate-50 border-b border-slate-100">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="max-w-xs">
               <h3 className="text-sm font-black text-slate-400 uppercase tracking-[0.3em] mb-2">Selected Clients</h3>
               <p className="text-slate-600 font-bold leading-tight">Empowering the world's most innovative footwear brands.</p>
            </div>
            <div className="flex-1 flex flex-wrap justify-center md:justify-end gap-x-12 gap-y-8 opacity-60">
              {BRANDS.slice(0, 8).map((brand, i) => (
                <img 
                  key={i} 
                  src={brand.image} 
                  alt="Client" 
                  className="h-8 md:h-10 w-auto object-contain grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500 cursor-pointer" 
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 模块：关于我们 - 深度实力展示 */}
      <section id="about" className="py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div {...fadeInUp}>
              <span className="text-orange-600 font-black text-xs uppercase tracking-[0.4em] mb-6 block underline underline-offset-8">Precision Foundry</span>
              <h2 className="text-4xl lg:text-6xl font-black text-slate-900 mb-10 leading-tight">
                {CONTENT.aboutPage.whoWeAre.title[language]}
              </h2>
              <div className="space-y-8 text-lg text-slate-500 leading-relaxed">
                <p className="font-bold text-slate-800 border-l-8 border-orange-600 pl-8 py-2 text-2xl italic">
                  "{CONTENT.aboutPage.whoWeAre.content[language]}"
                </p>
                <div className="grid grid-cols-2 gap-8 pt-6">
                   <div>
                      <h4 className="text-slate-900 font-black text-xl mb-2">Mission</h4>
                      <p className="text-sm">{CONTENT.aboutPage.mission.mText[language]}</p>
                   </div>
                   <div>
                      <h4 className="text-slate-900 font-black text-xl mb-2">Vision</h4>
                      <p className="text-sm">{CONTENT.aboutPage.mission.vText[language]}</p>
                   </div>
                </div>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="relative rounded-[3rem] overflow-hidden shadow-2xl group"
            >
              <img src="/about.webp" alt="Factory" className="w-full h-[600px] object-cover group-hover:scale-110 transition-transform duration-1000" />
              <div className="absolute inset-0 bg-gradient-to-t from-orange-600/40 to-transparent" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* 模块：核心能力 (Capabilities) - 技术驱动 */}
      <section id="capabilities" className="py-32 bg-slate-900 text-white overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row justify-between items-end mb-24 gap-12">
            <div className="max-w-2xl">
              <h2 className="text-5xl font-black mb-8">MANUFACTURING <br/> <span className="text-orange-600">INTELLIGENCE.</span></h2>
              <p className="text-slate-400 text-xl font-medium">We deploy advanced engineering and rigorous testing to ensure every pair meets world-class industrial benchmarks.</p>
            </div>
            <div className="text-right">
               <div className="text-8xl font-black text-white/5 leading-none">TECH</div>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
             {[
               { icon: Microscope, title: 'R&D Lab', items: CONTENT.capabilities.materials },
               { icon: Settings, title: 'Production', items: CONTENT.capabilities.manufacturing },
               { icon: ShieldCheck, title: 'Quality Assurance', items: CONTENT.capabilities.qc }
             ].map((sec, i) => (
               <motion.div 
                 key={i} 
                 {...fadeInUp}
                 transition={{ delay: i * 0.2 }}
                 className="p-12 bg-white/5 border border-white/10 rounded-[2rem] hover:bg-white/10 transition-all group"
                >
                 <div className="text-orange-500 mb-8 group-hover:scale-110 transition-transform"><sec.icon size={48} /></div>
                 <h3 className="text-2xl font-black mb-8 uppercase tracking-tighter">{sec.title}</h3>
                 <ul className="space-y-4">
                    {sec.items.map((item, j) => (
                      <li key={j} className="flex items-center gap-3 text-slate-400 font-bold">
                        <div className="w-1.5 h-1.5 bg-orange-600 rounded-full" /> {item[language]}
                      </li>
                    ))}
                 </ul>
               </motion.div>
             ))}
          </div>
        </div>
      </section>

      {/* 模块：服务模式 (Services) - OEM/ODM 对比 */}
      <section id="services" className="py-32 bg-white">
         <div className="container mx-auto px-6">
            <div className="text-center mb-24">
               <h2 className="text-4xl lg:text-6xl font-black text-slate-900 mb-6 uppercase tracking-tight">OEM & ODM Solutions</h2>
               <div className="w-20 h-2 bg-orange-600 mx-auto"></div>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
               <div className="group p-16 bg-slate-50 rounded-[3rem] border border-slate-100 hover:shadow-2xl transition-all">
                  <div className="flex items-center gap-6 mb-10">
                     <div className="w-20 h-20 bg-white rounded-3xl flex items-center justify-center text-orange-600 shadow-xl"><Settings size={40} /></div>
                     <h3 className="text-4xl font-black text-slate-900">OEM</h3>
                  </div>
                  <p className="text-xl text-slate-500 mb-12 leading-relaxed">We manufacture strictly according to your designs, specifications, and brand standards. Precision is our DNA.</p>
                  <button className="flex items-center gap-3 text-orange-600 font-black group-hover:gap-6 transition-all">
                    GET TECHNICAL BRIEF <ArrowRight size={20} />
                  </button>
               </div>

               <div className="group p-16 bg-slate-900 rounded-[3rem] text-white hover:shadow-2xl transition-all">
                  <div className="flex items-center gap-6 mb-10">
                     <div className="w-20 h-20 bg-white/10 rounded-3xl flex items-center justify-center text-orange-500 shadow-xl"><PenTool size={40} /></div>
                     <h3 className="text-4xl font-black">ODM</h3>
                  </div>
                  <p className="text-xl text-white/60 mb-12 leading-relaxed">We support product development with material selection, construction suggestions, and cost optimization.</p>
                  <button className="flex items-center gap-3 text-orange-500 font-black group-hover:gap-6 transition-all">
                    CO-DESIGN WITH US <ArrowRight size={20} />
                  </button>
               </div>
            </div>
         </div>
      </section>

      {/* 模块：工艺流程 (Process) - 线性工业流 */}
      <section className="py-32 bg-slate-50">
        <div className="container mx-auto px-6">
           <div className="text-center mb-24">
              <span className="text-slate-400 font-black text-xs uppercase tracking-[0.5em] mb-4 block">Standard Operating Procedure</span>
              <h2 className="text-5xl font-black text-slate-900">OUR DEVELOPMENT PROCESS</h2>
           </div>

           <div className="relative">
              <div className="hidden lg:block absolute top-12 left-[10%] right-[10%] h-[2px] bg-slate-200" />
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
                 {data.howWeWork.steps.map((step, i) => (
                    <motion.div 
                      key={i} 
                      {...fadeInUp}
                      transition={{ delay: i * 0.1 }}
                      className="relative z-10 flex flex-col items-center text-center group"
                    >
                       <div className="w-24 h-24 bg-white border-2 border-slate-200 rounded-full flex items-center justify-center mb-8 shadow-sm group-hover:border-orange-600 group-hover:bg-orange-600 transition-all duration-300">
                          <span className="text-3xl font-black text-slate-200 group-hover:text-white transition-colors">0{step.id}</span>
                       </div>
                       <h4 className="text-xs font-black text-slate-800 uppercase tracking-tighter leading-tight group-hover:text-orange-600 transition-colors">
                          {step.title[language]}
                       </h4>
                    </motion.div>
                 ))}
              </div>
           </div>
        </div>
      </section>

      {/* 模块：联系我们 (Contact) - 询盘功能 */}
      <section id="contact" className="py-32 bg-white">
         <div className="container mx-auto px-6">
            <div className="bg-slate-900 rounded-[4rem] p-12 lg:p-24 text-white relative overflow-hidden shadow-2xl">
               <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-orange-600/5 rounded-full blur-[120px] -mr-64 -mt-64" />
               
               <div className="grid lg:grid-cols-2 gap-20 relative z-10">
                  <div>
                     <h2 className="text-5xl lg:text-7xl font-black mb-10 leading-tight">START YOUR <br/> <span className="text-orange-600">NEXT PROJECT.</span></h2>
                     <p className="text-xl text-slate-400 mb-16 leading-relaxed">Tell us about your requirements. Our engineering team will evaluate your project and respond within 24 hours.</p>
                     
                     <div className="space-y-8">
                        <div className="flex gap-6 items-center">
                           <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-orange-600"><Globe size={24} /></div>
                           <span className="text-xl font-bold">info@zecoola.com</span>
                        </div>
                        <div className="flex gap-6 items-center">
                           <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-orange-600"><Zap size={24} /></div>
                           <span className="text-xl font-bold">+86 (769) 8121-1559</span>
                        </div>
                     </div>
                  </div>

                  <div className="bg-white p-10 rounded-[3rem] text-slate-900 shadow-2xl">
                     <form className="space-y-8">
                        <div className="grid md:grid-cols-2 gap-8">
                           <div className="space-y-2">
                              <label className="text-xs font-black text-slate-400 uppercase tracking-widest">Full Name</label>
                              <input type="text" placeholder="Your Name" className="w-full px-0 py-3 border-b-2 border-slate-100 focus:border-orange-600 outline-none transition-all bg-transparent font-bold" />
                           </div>
                           <div className="space-y-2">
                              <label className="text-xs font-black text-slate-400 uppercase tracking-widest">Official Email</label>
                              <input type="email" placeholder="official@brand.com" className="w-full px-0 py-3 border-b-2 border-slate-100 focus:border-orange-600 outline-none transition-all bg-transparent font-bold" />
                           </div>
                        </div>
                        <div className="space-y-2">
                           <label className="text-xs font-black text-slate-400 uppercase tracking-widest">Project Description</label>
                           <textarea rows={4} placeholder="Describe your needs..." className="w-full px-0 py-3 border-b-2 border-slate-100 focus:border-orange-600 outline-none transition-all bg-transparent font-bold resize-none" />
                        </div>
                        <button className="w-full py-6 bg-orange-600 text-white font-black text-lg rounded-xl shadow-xl hover:bg-slate-900 transition-all flex items-center justify-center gap-4">
                           SUBMIT INQUIRY <ArrowRight />
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
