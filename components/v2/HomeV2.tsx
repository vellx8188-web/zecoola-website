
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

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-white w-full overflow-hidden">
      
      {/* 模块：品牌传承 - 修复文字遮挡，使用响应式字号 */}
      <section id="about" className="relative py-24 lg:py-32 bg-white overflow-hidden">
        <div className="container mx-auto px-6 lg:px-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            
            {/* 左侧文字区：优化字号防止溢出遮挡 */}
            <motion.div {...fadeInUp}>
              <div className="flex items-center gap-4 mb-6">
                 <div className="w-10 h-[2px] bg-orange-600"></div>
                 <span className="text-orange-600 font-black text-[10px] uppercase tracking-[0.5em]">Section 01 / Profile</span>
              </div>
              {/* 关键修复：减小了在中等屏幕下的极限字号 */}
              <h2 className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-slate-950 leading-[0.9] tracking-tighter uppercase italic mb-8">
                THE <br/> <span className="text-orange-600">HERITAGE.</span>
              </h2>
              <div className="text-lg md:text-xl font-bold text-slate-400 leading-tight italic border-l-4 border-orange-600 pl-6 max-w-lg">
                 {CONTENT.aboutPage.whoWeAre.content[language]}
              </div>
            </motion.div>

            {/* 右侧卡片区：保持紧凑不被挤压 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
               <div className="bg-slate-50 p-8 aspect-square flex flex-col justify-between group hover:bg-orange-600 transition-all duration-700 rounded-sm">
                  <div className="flex justify-between items-start">
                    <h3 className="text-[9px] font-black text-orange-600 group-hover:text-white uppercase tracking-widest">Global Mission</h3>
                    <Zap className="text-orange-600 group-hover:text-white opacity-20" size={24} />
                  </div>
                  <p className="text-xl font-black text-slate-950 group-hover:text-white uppercase italic leading-none">{CONTENT.aboutPage.mission.mText[language]}</p>
               </div>
               <div className="bg-slate-950 p-8 aspect-square flex flex-col justify-between group relative overflow-hidden rounded-sm">
                  <Globe size={120} className="absolute -right-8 -bottom-8 opacity-5 group-hover:scale-110 transition-transform duration-[3s]" />
                  <h3 className="text-[9px] font-black text-orange-600 uppercase tracking-widest">Global Vision</h3>
                  <p className="text-xl font-black text-white uppercase italic leading-none relative z-10">{CONTENT.aboutPage.mission.vText[language]}</p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 模块：合作伙伴 & 核心服务 - 补全锚点 ID 以支持导航链接 */}
      <section id="services" className="py-24 bg-slate-50 overflow-hidden border-y border-slate-200/50 relative">
        <div className="container mx-auto px-6 lg:px-20">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
             <div>
                <span className="text-orange-600 font-black text-[10px] uppercase tracking-[0.6em] mb-4 block">Section 02 / Strategic Alliance</span>
                <h2 className="text-5xl lg:text-7xl font-black text-slate-950 tracking-tighter leading-[0.9] uppercase italic">
                  STRATEGIC <br/> <span className="text-slate-300">PARTNERS.</span>
                </h2>
             </div>
             {/* 数据填充区 */}
             <div className="flex items-center gap-10 border-l border-slate-200 pl-8 h-16">
                <div className="flex flex-col">
                   <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1">Status</span>
                   <span className="text-xs font-black text-slate-950 uppercase italic">Verified v2.5</span>
                </div>
                <div className="flex flex-col">
                   <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1">Coverage</span>
                   <span className="text-xs font-black text-slate-950 uppercase italic">Global Supply</span>
                </div>
             </div>
          </div>

          {/* Logo 网格 */}
          <div className="relative w-full">
             <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-12">
                {BRANDS.map((brand, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="flex-shrink-0 flex items-center justify-center min-w-[120px]"
                  >
                     <a href={brand.url || '#'} target={brand.url ? "_blank" : "_self"} className="group opacity-40 hover:opacity-100 transition-all duration-500">
                        <img 
                          src={brand.image} 
                          alt="Partner" 
                          className="h-8 md:h-9 w-auto object-contain grayscale group-hover:grayscale-0 transition-all"
                        />
                     </a>
                  </motion.div>
                ))}
             </div>
          </div>
        </div>
      </section>

      {/* 模块：技术工程 - 补全 ID */}
      <section id="capabilities" className="py-24 bg-white relative">
        <div className="absolute top-0 right-0 w-1/4 h-full bg-slate-50 -z-0"></div>
        <div className="container mx-auto px-6 lg:px-20 relative z-10">
           <div className="grid lg:grid-cols-3 gap-px bg-slate-200 shadow-xl rounded-sm overflow-hidden">
              {[
                { icon: Factory, title: 'ENGINEERING', desc: 'Next-generation industrial workflows for complex tech-shoe production.' },
                { icon: Microscope, title: 'R&D CENTER', desc: 'Material science laboratories focused on technical durability and comfort.' },
                { icon: ShieldCheck, title: 'FIDELITY QC', desc: 'Proprietary quality validation systems exceeding international benchmarks.' }
              ].map((item, i) => (
                <motion.div key={i} {...fadeInUp} className="bg-white p-10 group transition-all duration-700 hover:bg-slate-950">
                   <div className="text-orange-600 mb-8 group-hover:scale-110 transition-transform origin-left">
                     <item.icon size={40} strokeWidth={1} />
                   </div>
                   <h3 className="text-xl font-black mb-4 uppercase italic group-hover:text-white tracking-tighter">{item.title}</h3>
                   <p className="text-slate-500 text-xs font-medium leading-relaxed group-hover:text-white/40 italic">{item.desc}</p>
                </motion.div>
              ))}
           </div>
        </div>
      </section>

      {/* 模块：产品展示 & 智造工厂 - 补全 ID，修复无反应按钮 */}
      <section id="showcase" className="py-24 bg-slate-950 text-white overflow-hidden relative">
        <div id="factory" className="absolute top-0 h-1 w-1"></div> {/* 额外锚点支持 */}
        <div className="container mx-auto px-6 lg:px-20 relative z-10">
           <div className="flex flex-col lg:flex-row items-start justify-between mb-16">
              <div>
                 <span className="text-orange-600 font-black text-[10px] uppercase tracking-[0.6em] mb-4 block">Section 03 / Archive</span>
                 <h2 className="text-5xl lg:text-7xl font-black tracking-tighter leading-[0.8] uppercase italic">TECHNICAL <br/> <span className="text-orange-600">DOSSIER.</span></h2>
              </div>
           </div>

           <div className="grid lg:grid-cols-12 gap-8">
              {/* 大图展示区 */}
              <div className="lg:col-span-7 relative group min-h-[450px] overflow-hidden rounded-sm border border-white/5 bg-slate-900 shadow-2xl">
                 <img 
                   src="/showcase-main.webp" 
                   className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-[10s]" 
                   onError={(e) => { e.currentTarget.style.display = 'none'; }}
                 />
                 <div className="absolute inset-0 flex flex-col items-center justify-center p-10 text-center pointer-events-none bg-gradient-to-br from-slate-900 to-black">
                    <div className="text-[8rem] font-black opacity-[0.02] select-none absolute tracking-tighter">ARCHIVE</div>
                    <Factory className="text-white/5 mb-6" size={48} />
                    <span className="text-orange-600/30 text-[7px] font-black uppercase tracking-[1em] animate-pulse">Engineering Vault</span>
                 </div>

                 <div className="absolute bottom-8 left-8 p-6 bg-black/60 backdrop-blur-xl border-l-4 border-orange-600 z-20">
                    <h4 className="text-xl font-black mb-1 uppercase italic tracking-tighter">Precision Craft v2.0</h4>
                    <p className="text-white/60 mb-6 text-[9px] font-medium uppercase tracking-widest leading-relaxed">System: R&D Reference <br/> Material: Performance Composite</p>
                    {/* 关键修复：点击该按钮滚动到联系表单 */}
                    <button 
                      onClick={scrollToContact}
                      className="px-8 py-3 bg-orange-600 text-white text-[8px] font-black uppercase tracking-[0.3em] hover:bg-white hover:text-orange-600 transition-all shadow-xl"
                    >
                      REQUEST SPEC SHEET
                    </button>
                 </div>
              </div>

              {/* 数据汇总区 */}
              <div className="lg:col-span-5 flex flex-col gap-6">
                 <div className="bg-orange-600 p-10 flex-1 flex flex-col justify-end rounded-sm relative overflow-hidden group">
                    <Zap size={64} className="absolute top-6 right-6 text-white/20" />
                    <h4 className="text-3xl font-black mb-3 uppercase italic leading-[0.85] tracking-tighter">50+ YEARS <br/>EXPERIENCE.</h4>
                    <p className="text-white font-black text-[8px] uppercase tracking-widest opacity-80">Industry Legacy & Intellectual Property</p>
                 </div>
                 <div className="grid grid-cols-2 gap-6">
                    <div className="bg-slate-900 p-8 border border-white/5">
                       <div className="text-3xl font-black mb-2 text-white italic tracking-tighter">100%</div>
                       <div className="text-[7px] font-bold text-slate-500 uppercase tracking-widest">Quality Validation</div>
                    </div>
                    <div className="bg-slate-900 p-8 border border-white/5">
                       <div className="text-3xl font-black mb-2 text-white italic tracking-tighter">24H</div>
                       <div className="text-[7px] font-bold text-slate-500 uppercase tracking-widest">Global Support</div>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* 模块：联系我们 - 最终询盘落脚点 */}
      <section id="contact" className="py-24 bg-white overflow-hidden border-t border-slate-100">
        <div className="container mx-auto px-6 lg:px-20">
           <div className="grid lg:grid-cols-2 gap-16 lg:gap-32">
              <div>
                 <div className="flex items-center gap-4 mb-6">
                    <div className="w-10 h-[2px] bg-orange-600"></div>
                    <span className="text-orange-600 font-black text-[10px] uppercase tracking-[0.5em]">Section 04 / Inquiry</span>
                 </div>
                 <h2 className="text-6xl lg:text-8xl font-black text-slate-950 mb-10 tracking-tighter leading-[0.8] uppercase italic">LET'S <br/> <span className="text-orange-600">TALK.</span></h2>
                 <p className="text-lg text-slate-400 mb-10 leading-relaxed font-medium italic border-l-4 border-slate-100 pl-6">
                   Submit your technical brief for an immediate feasibility evaluation.
                 </p>
                 <div className="space-y-8">
                    <div className="flex gap-5 group">
                       <div className="w-12 h-12 bg-slate-50 rounded-full flex items-center justify-center text-orange-600 group-hover:bg-orange-600 group-hover:text-white transition-all"><Factory size={20} /></div>
                       <div><span className="text-[8px] font-black text-slate-400 uppercase tracking-widest block mb-0.5">Technical HQ</span><div className="text-xl font-black text-slate-950 italic tracking-tighter">{contact.phone}</div></div>
                    </div>
                    <div className="flex gap-5 group">
                       <div className="w-12 h-12 bg-slate-50 rounded-full flex items-center justify-center text-orange-600 group-hover:bg-orange-600 group-hover:text-white transition-all"><Globe size={20} /></div>
                       <div><span className="text-[8px] font-black text-slate-400 uppercase tracking-widest block mb-0.5">Email Office</span><div className="text-xl font-black text-slate-950 underline decoration-orange-600 underline-offset-4 italic tracking-tighter">{contact.email}</div></div>
                    </div>
                 </div>
              </div>
              <div className="bg-slate-50 p-8 lg:p-12 rounded-sm border border-slate-100 shadow-sm">
                 <form className="space-y-8" onSubmit={(e) => { e.preventDefault(); alert('Request Sent.'); }}>
                    <div className="space-y-1">
                       <label className="text-[8px] font-black text-slate-400 uppercase tracking-[0.4em]">Project Identity</label>
                       <input type="text" placeholder="Individual or Brand Name" className="w-full bg-transparent border-b border-slate-200 py-3 outline-none focus:border-orange-600 transition-colors font-bold text-xl tracking-tighter" required />
                    </div>
                    <div className="space-y-1">
                       <label className="text-[8px] font-black text-slate-400 uppercase tracking-[0.4em]">Communication</label>
                       <input type="email" placeholder="official@domain.com" className="w-full bg-transparent border-b border-slate-200 py-3 outline-none focus:border-orange-600 transition-colors font-bold text-xl tracking-tighter" required />
                    </div>
                    <div className="space-y-1">
                       <label className="text-[8px] font-black text-slate-400 uppercase tracking-[0.4em]">Briefing</label>
                       <textarea placeholder="Your requirements..." className="w-full bg-transparent border-b border-slate-200 py-3 outline-none focus:border-orange-600 transition-colors font-bold text-xl tracking-tighter resize-none" rows={2} required />
                    </div>
                    <button className="w-full py-5 bg-orange-600 text-white font-black text-[10px] uppercase tracking-[0.4em] hover:bg-slate-950 transition-all flex items-center justify-center gap-4 shadow-xl transform hover:-translate-y-1">
                       INITIALIZE RFQ <ArrowRight size={18} />
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
