
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
      
      {/* 模块：品牌传承 - 修复文字遮挡，优化空间平衡 */}
      <section id="about" className="relative py-24 lg:py-32 bg-white overflow-hidden">
        <div className="container mx-auto px-6 lg:px-20 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            
            {/* 左侧文字区：缩减占位比例，防止遮挡 */}
            <motion.div {...fadeInUp} className="lg:col-span-7">
              <div className="flex items-center gap-4 mb-6">
                 <div className="w-10 h-[2px] bg-orange-600"></div>
                 <span className="text-orange-600 font-black text-[10px] uppercase tracking-[0.5em]">Section 01 / Profile</span>
              </div>
              <h2 className="text-5xl md:text-7xl lg:text-[7.5rem] xl:text-[9rem] font-black text-slate-950 leading-[0.8] tracking-tighter uppercase italic mb-10">
                THE <br/> <span className="text-orange-600">HERITAGE.</span>
              </h2>
              <div className="text-xl md:text-2xl font-bold text-slate-400 leading-tight italic border-l-4 border-orange-600 pl-6 max-w-xl">
                 {CONTENT.aboutPage.whoWeAre.content[language]}
              </div>
            </motion.div>

            {/* 右侧卡片区：保持紧凑 */}
            <div className="lg:col-span-5 grid grid-cols-1 md:grid-cols-2 gap-4">
               <div className="bg-slate-50 p-10 aspect-square flex flex-col justify-between group hover:bg-orange-600 transition-all duration-700 rounded-sm">
                  <div className="flex justify-between items-start">
                    <h3 className="text-[9px] font-black text-orange-600 group-hover:text-white uppercase tracking-widest">Global Mission</h3>
                    <Zap className="text-orange-600 group-hover:text-white opacity-20" size={24} />
                  </div>
                  <p className="text-2xl font-black text-slate-950 group-hover:text-white uppercase italic leading-none">{CONTENT.aboutPage.mission.mText[language]}</p>
               </div>
               <div className="bg-slate-950 p-10 aspect-square flex flex-col justify-between group relative overflow-hidden rounded-sm">
                  <Globe size={140} className="absolute -right-12 -bottom-12 opacity-5 group-hover:scale-110 transition-transform duration-[3s]" />
                  <h3 className="text-[9px] font-black text-orange-600 uppercase tracking-widest">Global Vision</h3>
                  <p className="text-2xl font-black text-white uppercase italic leading-none relative z-10">{CONTENT.aboutPage.mission.vText[language]}</p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 模块：合作伙伴 - 填补“太空”区域，移除无效按钮 */}
      <section className="py-24 bg-slate-50 overflow-hidden border-y border-slate-200/50 relative">
        <div className="container mx-auto px-6 lg:px-20">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
             <div>
                <span className="text-orange-600 font-black text-[10px] uppercase tracking-[0.6em] mb-4 block">Section 02 / Strategic Alliance</span>
                <h2 className="text-6xl lg:text-8xl font-black text-slate-950 tracking-tighter leading-[0.9] uppercase italic">
                  STRATEGIC <br/> <span className="text-slate-300">PARTNERS.</span>
                </h2>
             </div>
             {/* 填充红框所示的空缺位置：增加认证与数据信息 */}
             <div className="flex items-center gap-12 border-l border-slate-200 pl-10 h-20">
                <div className="flex flex-col">
                   <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1">Standard</span>
                   <span className="text-sm font-black text-slate-950 uppercase italic">ISO 9001:2024</span>
                </div>
                <div className="flex flex-col">
                   <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1">Global Reach</span>
                   <span className="text-sm font-black text-slate-950 uppercase italic">Europe / USA / Asia</span>
                </div>
             </div>
          </div>

          <div className="relative w-full">
             <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-16">
                {BRANDS.map((brand, i) => {
                  const yOffset = [0, -15, 20, -5, 10, -20, 10, -5, 15, -10, 0][i % 11];
                  return (
                    <motion.div 
                      key={i}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1, y: yOffset }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6 }}
                      className="flex-shrink-0 flex items-center justify-center min-w-[140px]"
                    >
                       <a 
                         href={brand.url || '#'} 
                         target={brand.url ? "_blank" : "_self"}
                         rel="noopener noreferrer" 
                         className="group relative"
                       >
                          <img 
                            src={brand.image} 
                            alt="Partner" 
                            className="h-8 md:h-10 w-auto object-contain transition-all duration-500 grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105"
                            style={{ filter: 'drop-shadow(0px 2px 4px rgba(0,0,0,0.05))' }}
                          />
                       </a>
                    </motion.div>
                  );
                })}
             </div>
          </div>

          {/* 底部装饰清理：去除了无效的点位按钮 */}
          <div className="mt-24 flex items-center gap-4 border-t border-slate-200 pt-8">
             <ShieldCheck size={14} className="text-orange-600" />
             <span className="text-slate-400 font-black text-[8px] uppercase tracking-[0.4em]">Proprietary Manufacturing Network v2.5</span>
          </div>
        </div>
      </section>

      {/* 模块：技术核心 */}
      <section id="capabilities" className="py-24 bg-white relative">
        <div className="absolute top-0 right-0 w-1/4 h-full bg-slate-50 -z-0"></div>
        <div className="container mx-auto px-6 lg:px-20 relative z-10">
           <div className="grid lg:grid-cols-3 gap-px bg-slate-200 shadow-xl">
              {[
                { icon: Factory, title: 'ENGINEERING', desc: 'Next-generation industrial workflows for complex tech-shoe production.' },
                { icon: Microscope, title: 'R&D CENTER', desc: 'Material science laboratories focused on technical durability and comfort.' },
                { icon: ShieldCheck, title: 'FIDELITY QC', desc: 'Proprietary quality validation systems exceeding international benchmarks.' }
              ].map((item, i) => (
                <motion.div key={i} {...fadeInUp} className="bg-white p-12 group transition-all duration-700 hover:bg-slate-950">
                   <div className="text-orange-600 mb-10 group-hover:scale-110 transition-transform origin-left">
                     <item.icon size={44} strokeWidth={1} />
                   </div>
                   <h3 className="text-2xl font-black mb-4 uppercase italic group-hover:text-white tracking-tighter">{item.title}</h3>
                   <p className="text-slate-500 text-sm font-medium leading-relaxed group-hover:text-white/40 italic">{item.desc}</p>
                </motion.div>
              ))}
           </div>
        </div>
      </section>

      {/* 模块：档案/展示 - 优化了占位框的视觉平衡 */}
      <section id="showcase" className="py-24 bg-slate-950 text-white overflow-hidden relative">
        <div className="container mx-auto px-6 lg:px-20 relative z-10">
           <div className="flex flex-col lg:flex-row items-start justify-between mb-20">
              <div>
                 <span className="text-orange-600 font-black text-[10px] uppercase tracking-[0.6em] mb-4 block">Section 03 / Archive</span>
                 <h2 className="text-6xl lg:text-8xl font-black tracking-tighter leading-[0.8] uppercase italic">TECHNICAL <br/> <span className="text-orange-600">DOSSIER.</span></h2>
              </div>
           </div>

           <div className="grid lg:grid-cols-12 gap-6 lg:gap-10">
              <div className="lg:col-span-7 relative group min-h-[500px] overflow-hidden rounded-sm border border-white/5 bg-slate-900 shadow-2xl">
                 <img 
                   src="/showcase-main.webp" 
                   className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-[10s]" 
                   onError={(e) => { e.currentTarget.style.display = 'none'; }}
                 />
                 {/* 占位符优化 */}
                 <div className="absolute inset-0 flex flex-col items-center justify-center p-10 text-center pointer-events-none bg-gradient-to-br from-slate-900 to-black">
                    <div className="text-[10rem] font-black opacity-[0.02] select-none absolute tracking-tighter">ARCHIVE</div>
                    <Factory className="text-white/5 mb-6" size={56} />
                    <span className="text-orange-600/30 text-[8px] font-black uppercase tracking-[1em] animate-pulse">Asset Visualization</span>
                 </div>

                 <div className="absolute bottom-8 left-8 p-6 bg-black/60 backdrop-blur-xl border-l-4 border-orange-600 z-20">
                    <h4 className="text-2xl font-black mb-2 uppercase italic tracking-tighter">Precision Craft v2.0</h4>
                    <p className="text-white/60 mb-6 text-[10px] font-medium uppercase tracking-widest leading-relaxed">System: Reference Model <br/> Material: Thermal Bonded Synth</p>
                    <button className="px-10 py-4 border border-white/20 text-[8px] font-black uppercase tracking-[0.3em] hover:bg-orange-600 hover:border-orange-600 transition-all">Request Spec Sheet</button>
                 </div>
              </div>

              <div className="lg:col-span-5 flex flex-col gap-6">
                 <div className="bg-orange-600 p-12 flex-1 flex flex-col justify-end rounded-sm relative overflow-hidden group shadow-lg">
                    <Zap size={80} className="absolute top-8 right-8 text-white/20" />
                    <h4 className="text-4xl font-black mb-4 uppercase italic leading-[0.85] tracking-tighter">50+ YEARS <br/>EXPERIENCE.</h4>
                    <p className="text-white font-black text-[9px] uppercase tracking-widest opacity-80">Industry Legacy & Intellectual Property</p>
                 </div>
                 <div className="grid grid-cols-2 gap-6">
                    <div className="bg-slate-900 p-8 border border-white/5 group hover:border-orange-600/50 transition-colors">
                       <div className="text-4xl font-black mb-3 tracking-tighter text-white italic group-hover:text-orange-600 transition-colors">100%</div>
                       <div className="text-[8px] font-bold text-slate-500 uppercase tracking-widest leading-relaxed">Automated Quality</div>
                    </div>
                    <div className="bg-slate-900 p-8 border border-white/5 group hover:border-orange-600/50 transition-colors">
                       <div className="text-4xl font-black mb-3 tracking-tighter text-white italic group-hover:text-orange-600 transition-colors">24H</div>
                       <div className="text-[8px] font-bold text-slate-500 uppercase tracking-widest leading-relaxed">Strategic Response</div>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* 模块：联系我们 */}
      <section id="contact" className="py-24 bg-white overflow-hidden border-t border-slate-100">
        <div className="container mx-auto px-6 lg:px-20">
           <div className="grid lg:grid-cols-2 gap-16 lg:gap-32">
              <div>
                 <div className="flex items-center gap-4 mb-6">
                    <div className="w-10 h-[2px] bg-orange-600"></div>
                    <span className="text-orange-600 font-black text-[10px] uppercase tracking-[0.5em]">Section 04 / Inquiry</span>
                 </div>
                 <h2 className="text-7xl lg:text-9xl font-black text-slate-950 mb-10 tracking-tighter leading-[0.8] uppercase italic">LET'S <br/> <span className="text-orange-600">TALK.</span></h2>
                 <p className="text-xl text-slate-400 mb-12 leading-relaxed font-medium italic border-l-4 border-slate-100 pl-6">
                   Submit your technical brief for an immediate feasibility evaluation.
                 </p>
                 <div className="space-y-10">
                    <div className="flex gap-6 group cursor-pointer">
                       <div className="w-14 h-14 bg-slate-50 rounded-full flex items-center justify-center text-orange-600 group-hover:bg-orange-600 group-hover:text-white transition-all shadow-sm"><Factory size={24} /></div>
                       <div><span className="text-[9px] font-black text-slate-400 uppercase tracking-widest block mb-1">Technical HQ Dongguan</span><div className="text-2xl font-black text-slate-950 italic tracking-tighter">{contact.phone}</div></div>
                    </div>
                    <div className="flex gap-6 group cursor-pointer">
                       <div className="w-14 h-14 bg-slate-50 rounded-full flex items-center justify-center text-orange-600 group-hover:bg-orange-600 group-hover:text-white transition-all shadow-sm"><Globe size={24} /></div>
                       <div><span className="text-[9px] font-black text-slate-400 uppercase tracking-widest block mb-1">Strategic Relations Email</span><div className="text-2xl font-black text-slate-950 underline decoration-orange-600 underline-offset-8 italic tracking-tighter">{contact.email}</div></div>
                    </div>
                 </div>
              </div>
              <div className="bg-slate-50 p-10 lg:p-14 rounded-sm border border-slate-100 shadow-sm">
                 <form className="space-y-10" onSubmit={(e) => { e.preventDefault(); alert('Inquiry Sent to Engineering Team.'); }}>
                    <div className="space-y-2">
                       <label className="text-[9px] font-black text-slate-400 uppercase tracking-[0.4em]">Project Identity</label>
                       <input type="text" placeholder="Individual or Brand Name" className="w-full bg-transparent border-b-2 border-slate-200 py-4 outline-none focus:border-orange-600 transition-colors font-black text-2xl tracking-tighter" required />
                    </div>
                    <div className="space-y-2">
                       <label className="text-[9px] font-black text-slate-400 uppercase tracking-[0.4em]">Direct Communication</label>
                       <input type="email" placeholder="official@domain.com" className="w-full bg-transparent border-b-2 border-slate-200 py-4 outline-none focus:border-orange-600 transition-colors font-black text-2xl tracking-tighter" required />
                    </div>
                    <div className="space-y-2">
                       <label className="text-[9px] font-black text-slate-400 uppercase tracking-[0.4em]">Project Scope</label>
                       <textarea placeholder="Tell us about your requirements..." className="w-full bg-transparent border-b-2 border-slate-200 py-4 outline-none focus:border-orange-600 transition-colors font-black text-2xl tracking-tighter resize-none" rows={2} required />
                    </div>
                    <button className="w-full py-6 bg-orange-600 text-white font-black text-[11px] uppercase tracking-[0.4em] hover:bg-slate-950 transition-all flex items-center justify-center gap-4 shadow-2xl transform hover:-translate-y-1">
                       INITIALIZE RFQ <ArrowRight size={20} />
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
