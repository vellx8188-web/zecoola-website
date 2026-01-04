
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Globe, Factory, Microscope, ShieldCheck, Zap } from 'lucide-react';
import { CONTENT, BRANDS } from '../../constants';
import { useLanguage } from '../../LanguageContext';

const HomeV2: React.FC = () => {
  const { language } = useLanguage();
  const contact = CONTENT.contact;

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <div className="bg-white w-full overflow-hidden">
      
      {/* 模块：品牌传承 - 优化了字号适配和视觉丰满度 */}
      <section id="about" className="relative py-32 lg:py-48 bg-white overflow-hidden">
        {/* 背景装饰水印：填补“空”的感觉 */}
        <div className="absolute top-20 left-10 pointer-events-none select-none opacity-[0.03] rotate-90 origin-top-left">
           <span className="text-[20rem] font-black tracking-tighter uppercase italic">LEACY_REF</span>
        </div>

        <div className="container mx-auto px-6 lg:px-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-32 items-center">
            <motion.div {...fadeInUp}>
              <div className="flex items-center gap-4 mb-8">
                 <div className="w-12 h-[2px] bg-orange-600"></div>
                 <span className="text-orange-600 font-black text-xs uppercase tracking-[0.6em]">Section 01 / Profile</span>
              </div>
              <h2 className="text-6xl md:text-8xl lg:text-[9rem] xl:text-[11rem] font-black text-slate-950 leading-[0.8] tracking-tighter uppercase italic mb-12">
                THE <br/> <span className="text-orange-600">HERITAGE.</span>
              </h2>
              <div className="text-2xl md:text-3xl font-bold text-slate-400 leading-tight italic border-l-8 border-orange-600 pl-8 max-w-xl">
                 {CONTENT.aboutPage.whoWeAre.content[language]}
              </div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:mt-0">
               <div className="bg-slate-50 p-12 aspect-square flex flex-col justify-between group hover:bg-orange-600 transition-all duration-700 rounded-sm">
                  <div className="flex justify-between items-start">
                    <h3 className="text-[10px] font-black text-orange-600 group-hover:text-white uppercase tracking-widest">Global Mission</h3>
                    <Zap className="text-orange-600 group-hover:text-white opacity-20" size={32} />
                  </div>
                  <p className="text-3xl font-black text-slate-950 group-hover:text-white uppercase italic leading-none">{CONTENT.aboutPage.mission.mText[language]}</p>
               </div>
               <div className="bg-slate-950 p-12 aspect-square flex flex-col justify-between group relative overflow-hidden rounded-sm">
                  <Globe size={180} className="absolute -right-16 -bottom-16 opacity-5 group-hover:scale-110 transition-transform duration-[3s]" />
                  <h3 className="text-[10px] font-black text-orange-600 uppercase tracking-widest">Global Vision</h3>
                  <p className="text-3xl font-black text-white uppercase italic leading-none relative z-10">{CONTENT.aboutPage.mission.vText[language]}</p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 模块：合作伙伴 - 解决了图片显示不清和排版太空的问题 */}
      <section className="py-32 lg:py-48 bg-slate-50 overflow-hidden border-y border-slate-200/50 relative">
        <div className="container mx-auto px-6 lg:px-20">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-32">
             <div>
                <span className="text-orange-600 font-black text-[11px] uppercase tracking-[0.8em] mb-6 block">Section 02 / Strategic Alliance</span>
                <h2 className="text-7xl lg:text-[9rem] font-black text-slate-950 tracking-tighter leading-[0.8] uppercase italic">
                  STRATEGIC <br/> <span className="text-slate-300">PARTNERS.</span>
                </h2>
             </div>
             <div className="hidden lg:block text-right max-w-xs pb-4">
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] leading-relaxed">
                  Supporting world-class technical brands through optimized supply chains and zero-defect manufacturing.
                </p>
             </div>
          </div>

          <div className="relative w-full">
             <div className="flex flex-wrap justify-between items-center gap-x-12 gap-y-24 lg:gap-x-20 lg:gap-y-32">
                {BRANDS.map((brand, i) => {
                  const yOffset = [0, -30, 40, -15, 25, -40, 20, -10, 35, -25, 0][i % 11];
                  return (
                    <motion.div 
                      key={i}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1, y: yOffset }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: (i % 5) * 0.1 }}
                      className="flex-shrink-0 flex items-center justify-center min-w-[120px] md:min-w-[180px]"
                    >
                       <a 
                         href={brand.url || '#'} 
                         target={brand.url ? "_blank" : "_self"}
                         rel="noopener noreferrer" 
                         className="group relative block"
                       >
                          <img 
                            src={brand.image} 
                            alt="Partner" 
                            className="h-8 md:h-12 lg:h-14 w-auto object-contain transition-all duration-700 grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110"
                            style={{ 
                              // 增加细微阴影，防止白色LOGO在浅背景上“隐身”
                              filter: 'drop-shadow(0px 4px 8px rgba(0,0,0,0.08))' 
                            }}
                          />
                          <div className="absolute -bottom-4 left-0 w-0 h-[1px] bg-orange-600 transition-all duration-500 group-hover:w-full"></div>
                       </a>
                    </motion.div>
                  );
                })}
             </div>
          </div>

          {/* 底部装饰：增加行业标准标识，填补排版 */}
          <div className="mt-48 flex items-center justify-between border-t border-slate-200 pt-10">
             <div className="flex items-center gap-4">
                <ShieldCheck size={16} className="text-orange-600" />
                <span className="text-slate-400 font-black text-[9px] uppercase tracking-[0.5em]">Industry standard compliance verified</span>
             </div>
             <div className="flex gap-2">
                {[1, 2, 3].map(dot => (
                  <div key={dot} className={`w-2 h-2 rounded-full ${dot === 3 ? 'bg-orange-600' : 'bg-slate-200'}`}></div>
                ))}
             </div>
          </div>
        </div>
      </section>

      {/* 模块：技术核心 */}
      <section id="capabilities" className="py-32 lg:py-56 bg-white relative">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50 -z-0"></div>
        <div className="container mx-auto px-6 lg:px-20 relative z-10">
           <div className="grid lg:grid-cols-3 gap-1px bg-slate-200">
              {[
                { icon: Factory, title: 'ENGINEERING', desc: 'Next-generation industrial workflows for complex tech-shoe production.' },
                { icon: Microscope, title: 'R&D CENTER', desc: 'Material science laboratories focused on technical durability and comfort.' },
                { icon: ShieldCheck, title: 'FIDELITY QC', desc: 'Proprietary quality validation systems exceeding international benchmarks.' }
              ].map((item, i) => (
                <motion.div key={i} {...fadeInUp} className="bg-white p-16 lg:p-20 group transition-all duration-700 hover:bg-slate-950">
                   <div className="text-orange-600 mb-16 group-hover:scale-110 transition-transform origin-left">
                     <item.icon size={64} strokeWidth={1} />
                   </div>
                   <h3 className="text-3xl font-black mb-6 uppercase italic group-hover:text-white transition-colors tracking-tighter">{item.title}</h3>
                   <p className="text-slate-500 text-lg font-medium leading-relaxed group-hover:text-white/40 transition-colors italic">{item.desc}</p>
                </motion.div>
              ))}
           </div>
        </div>
      </section>

      {/* 模块：档案/展示 (Screenshot 3 对应位置) */}
      <section id="showcase" className="py-32 lg:py-56 bg-slate-950 text-white overflow-hidden relative">
        <div className="container mx-auto px-6 lg:px-20 relative z-10">
           <div className="flex flex-col lg:flex-row items-start justify-between mb-32">
              <div>
                 <span className="text-orange-600 font-black text-[11px] uppercase tracking-[0.8em] mb-6 block">Section 03 / Archive</span>
                 <h2 className="text-7xl lg:text-9xl font-black tracking-tighter leading-[0.8] uppercase italic">TECHNICAL <br/> <span className="text-orange-600">DOSSIER.</span></h2>
              </div>
              <div className="mt-12 lg:mt-0 text-left lg:text-right max-w-md">
                 <p className="text-slate-500 text-xl font-medium italic leading-relaxed">
                   A curated collection of technical footwear engineering. Every prototype reflects our obsession with precision.
                 </p>
              </div>
           </div>

           <div className="grid lg:grid-cols-12 gap-10">
              {/* 大图区域：请在此放置 showcase-main.webp (产品全家福) */}
              <div className="lg:col-span-7 relative group aspect-video lg:aspect-auto lg:h-[700px] overflow-hidden rounded-sm border border-white/5 bg-slate-900">
                 <img 
                   src="/showcase-main.webp" 
                   className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-[10s]" 
                   onError={(e) => { e.currentTarget.style.display = 'none'; }}
                 />
                 {/* 缺图时的视觉补偿 */}
                 <div className="absolute inset-0 flex flex-col items-center justify-center p-20 text-center pointer-events-none">
                    <div className="text-[12rem] font-black opacity-[0.03] select-none absolute">ARCHIVE</div>
                    <Factory className="text-white/5 mb-6" size={80} />
                    <span className="text-white/20 text-[10px] font-black uppercase tracking-[1em]">Vault Content Loading</span>
                 </div>

                 <div className="absolute bottom-12 left-12 p-8 bg-black/40 backdrop-blur-xl border-l-4 border-orange-600">
                    <h4 className="text-3xl font-black mb-4 uppercase italic tracking-tighter">Precision Craft v2.0</h4>
                    <p className="text-white/60 mb-8 text-sm max-w-xs font-medium uppercase tracking-widest">Material: Reinforced Polymers / Thermal Bonded</p>
                    <button className="px-12 py-5 border border-white/20 text-[10px] font-black uppercase tracking-widest hover:bg-orange-600 hover:border-orange-600 transition-all">Request Spec Sheet</button>
                 </div>
              </div>

              {/* 右侧数据卡片区 */}
              <div className="lg:col-span-5 flex flex-col gap-10">
                 <div className="bg-orange-600 p-16 flex-1 flex flex-col justify-end rounded-sm shadow-2xl relative overflow-hidden group">
                    <div className="absolute top-10 right-10 text-white/20 group-hover:rotate-12 transition-transform duration-700">
                       <Zap size={120} strokeWidth={3} />
                    </div>
                    <h4 className="text-5xl font-black mb-6 uppercase italic leading-[0.8] tracking-tighter">50+ YEARS <br/>EXPERIENCE.</h4>
                    <p className="text-white font-black text-xs uppercase tracking-widest opacity-80">Industry Legacy & Intellectual Property</p>
                 </div>
                 <div className="grid grid-cols-2 gap-10">
                    <div className="bg-slate-900 p-12 border border-white/5 group hover:border-orange-600/50 transition-colors">
                       <div className="text-6xl font-black mb-4 tracking-tighter text-white italic group-hover:text-orange-600 transition-colors">100%</div>
                       <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest leading-relaxed">Automated Quality Verification</div>
                    </div>
                    <div className="bg-slate-900 p-12 border border-white/5 group hover:border-orange-600/50 transition-colors">
                       <div className="text-6xl font-black mb-4 tracking-tighter text-white italic group-hover:text-orange-600 transition-colors">24H</div>
                       <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest leading-relaxed">Strategic Response Protocol</div>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* 模块：联系我们 - 保持简洁但增强了质感 */}
      <section id="contact" className="py-32 lg:py-56 bg-white overflow-hidden">
        <div className="container mx-auto px-6 lg:px-20">
           <div className="grid lg:grid-cols-2 gap-20 lg:gap-32">
              <div>
                 <div className="flex items-center gap-4 mb-8">
                    <div className="w-12 h-[2px] bg-orange-600"></div>
                    <span className="text-orange-600 font-black text-xs uppercase tracking-[0.6em]">Section 04 / Inquiry</span>
                 </div>
                 <h2 className="text-8xl lg:text-[11rem] font-black text-slate-950 mb-12 tracking-tighter leading-[0.8] uppercase italic">LET'S <br/> <span className="text-orange-600">TALK.</span></h2>
                 <p className="text-2xl text-slate-400 mb-16 leading-relaxed font-medium italic border-l-4 border-slate-100 pl-8">
                   Submit your technical brief for an immediate feasibility evaluation.
                 </p>
                 <div className="space-y-12">
                    <div className="flex gap-8 group cursor-pointer">
                       <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center text-orange-600 group-hover:bg-orange-600 group-hover:text-white transition-all shadow-sm"><Factory size={32} /></div>
                       <div><span className="text-[10px] font-black text-slate-400 uppercase tracking-widest block mb-2">Technical HQ Dongguan</span><div className="text-3xl font-black text-slate-950 italic tracking-tighter">{contact.phone}</div></div>
                    </div>
                    <div className="flex gap-8 group cursor-pointer">
                       <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center text-orange-600 group-hover:bg-orange-600 group-hover:text-white transition-all shadow-sm"><Globe size={32} /></div>
                       <div><span className="text-[10px] font-black text-slate-400 uppercase tracking-widest block mb-2">Strategic Relations Email</span><div className="text-3xl font-black text-slate-950 underline decoration-orange-600 underline-offset-[12px] italic tracking-tighter">{contact.email}</div></div>
                    </div>
                 </div>
              </div>
              <div className="bg-slate-50 p-12 lg:p-20 rounded-sm border border-slate-100">
                 <form className="space-y-12" onSubmit={(e) => { e.preventDefault(); alert('Inquiry Sent to Engineering Team.'); }}>
                    <div className="space-y-4">
                       <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.4em]">Project Identity</label>
                       <input type="text" placeholder="Individual or Brand Name" className="w-full bg-transparent border-b-2 border-slate-200 py-6 outline-none focus:border-orange-600 transition-colors font-black text-3xl tracking-tighter" required />
                    </div>
                    <div className="space-y-4">
                       <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.4em]">Direct Communication</label>
                       <input type="email" placeholder="official@domain.com" className="w-full bg-transparent border-b-2 border-slate-200 py-6 outline-none focus:border-orange-600 transition-colors font-black text-3xl tracking-tighter" required />
                    </div>
                    <div className="space-y-4">
                       <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.4em]">Project Scope</label>
                       <textarea placeholder="Tell us about your materials, volume, and timeline..." className="w-full bg-transparent border-b-2 border-slate-200 py-6 outline-none focus:border-orange-600 transition-colors font-black text-3xl tracking-tighter resize-none" rows={3} required />
                    </div>
                    <button className="w-full py-8 bg-orange-600 text-white font-black text-sm uppercase tracking-[0.4em] hover:bg-slate-950 transition-all flex items-center justify-center gap-6 shadow-2xl transform hover:-translate-y-1">
                       INITIALIZE RFQ <ArrowRight size={24} />
                    </button>
                 </form>
              </div>
           </div>
        </div>
      </section>
    </div>
  );
};

export default HomeV2;
