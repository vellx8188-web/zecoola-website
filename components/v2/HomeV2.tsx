
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Globe, Factory, Microscope, ShieldCheck, Zap, Layers } from 'lucide-react';
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
    const element = document.getElementById('contact');
    if (element) {
      const offset = 100;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="bg-white w-full overflow-hidden">
      
      {/* 模块 01：品牌传承 (Heritage) */}
      <section id="about" className="relative py-24 lg:py-32 bg-white overflow-hidden">
        <div className="container mx-auto px-6 lg:px-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div {...fadeInUp}>
              <div className="flex items-center gap-4 mb-6">
                 <div className="w-10 h-[2px] bg-orange-600"></div>
                 <span className="text-orange-600 font-black text-[10px] uppercase tracking-[0.5em]">Section 01 / Profile</span>
              </div>
              <h2 className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-slate-950 leading-[0.9] tracking-tighter uppercase italic mb-8">
                THE <br/> <span className="text-orange-600">HERITAGE.</span>
              </h2>
              <div className="text-lg md:text-xl font-bold text-slate-400 leading-tight italic border-l-4 border-orange-600 pl-6 max-w-lg">
                 {CONTENT.aboutPage.whoWeAre.content[language]}
              </div>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
               <div className="bg-slate-50 p-8 aspect-square flex flex-col justify-between group hover:bg-orange-600 transition-all duration-700 rounded-sm shadow-sm">
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

      {/* 模块 02：技术工程 (ENGINEERING) */}
      <section id="capabilities" className="py-24 bg-white relative">
        <div className="absolute top-0 right-0 w-1/4 h-full bg-slate-50 -z-0"></div>
        <div className="container mx-auto px-6 lg:px-20 relative z-10">
           <div className="mb-16">
              <span className="text-orange-600 font-black text-[10px] uppercase tracking-[0.6em] mb-4 block">Section 02 / Tech Core</span>
              <h2 className="text-5xl lg:text-7xl font-black text-slate-950 tracking-tighter leading-[0.9] uppercase italic">ENGINEERING <br/> <span className="text-slate-300">EXCELLENCE.</span></h2>
           </div>
           <div className="grid lg:grid-cols-3 gap-px bg-slate-200 shadow-xl rounded-sm overflow-hidden border border-slate-200">
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

      {/* 模块 03：服务项目/合作伙伴 (COMPETENCIES) */}
      <section id="services" className="py-24 bg-slate-50 overflow-hidden border-y border-slate-200/50 relative">
        <div className="container mx-auto px-6 lg:px-20">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
             <div>
                <span className="text-orange-600 font-black text-[10px] uppercase tracking-[0.6em] mb-4 block">Section 03 / Strategic Alliance</span>
                <h2 className="text-5xl lg:text-7xl font-black text-slate-950 tracking-tighter leading-[0.9] uppercase italic">
                  STRATEGIC <br/> <span className="text-slate-300">PARTNERS.</span>
                </h2>
             </div>
             <div className="flex items-center gap-10 border-l border-slate-200 pl-8 h-16">
                <div className="flex flex-col">
                   <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1">Status</span>
                   <span className="text-xs font-black text-slate-950 uppercase italic">Verified v2.5</span>
                </div>
                <div className="flex flex-col">
                   <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1">Capacity</span>
                   <span className="text-xs font-black text-slate-950 uppercase italic">High Volume</span>
                </div>
             </div>
          </div>

          {/* Logo 墙 */}
          <div className="relative w-full mb-20">
             <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-12">
                {BRANDS.map((brand, i) => (
                  <motion.div key={i} className="flex-shrink-0 flex items-center justify-center min-w-[120px]">
                     <a href={brand.url || '#'} target={brand.url ? "_blank" : "_self"} className="group opacity-40 hover:opacity-100 transition-all duration-500">
                        <img src={brand.image} alt="Partner" className="h-8 md:h-9 w-auto object-contain grayscale group-hover:grayscale-0 transition-all" />
                     </a>
                  </motion.div>
                ))}
             </div>
          </div>

          {/* 新增：合作伙伴产品展示图 (partner-products.webp) */}
          <motion.div {...fadeInUp} className="relative group rounded-sm overflow-hidden border border-slate-200 shadow-2xl bg-white">
             <div className="absolute top-8 left-8 z-20 pointer-events-none">
                <div className="flex items-center gap-3 mb-2">
                   <div className="w-8 h-[1px] bg-orange-600"></div>
                   <span className="text-[8px] font-black text-orange-600 uppercase tracking-[0.4em]">Portfolio Highlight</span>
                </div>
                <h3 className="text-3xl font-black text-slate-950 uppercase italic tracking-tighter">PARTNER COLLECTIONS.</h3>
             </div>
             <div className="aspect-[21/9] w-full relative overflow-hidden bg-slate-100">
                <img 
                  src="/partner-products.webp" 
                  alt="Partner Shoes Collection" 
                  className="w-full h-full object-cover transition-transform duration-[15s] group-hover:scale-110"
                  onError={(e) => { e.currentTarget.style.display = 'none'; }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent"></div>
             </div>
          </motion.div>
        </div>
      </section>

      {/* 模块 04：产品展厅 (SHOWCASE) - 图片：showcase-main.webp */}
      <section id="showcase" className="py-24 bg-slate-950 text-white overflow-hidden relative">
        <div className="container mx-auto px-6 lg:px-20 relative z-10">
           <div className="flex flex-col lg:flex-row items-start justify-between mb-16">
              <div>
                 <span className="text-orange-600 font-black text-[10px] uppercase tracking-[0.6em] mb-4 block">Section 04 / Archive</span>
                 <h2 className="text-5xl lg:text-7xl font-black tracking-tighter leading-[0.8] uppercase italic">TECHNICAL <br/> <span className="text-orange-600">DOSSIER.</span></h2>
              </div>
           </div>

           <div className="grid lg:grid-cols-12 gap-8">
              <div className="lg:col-span-7 relative group min-h-[450px] overflow-hidden rounded-sm border border-white/5 bg-slate-900 shadow-2xl">
                 {/* 核心展厅图：showcase-main.webp */}
                 <img 
                   src="/showcase-main.webp" 
                   alt="Technical Showcase" 
                   className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:scale-105 transition-transform duration-[10s]"
                   onError={(e) => { e.currentTarget.style.opacity = '0'; }}
                 />
                 <div className="absolute inset-0 flex flex-col items-center justify-center p-10 text-center pointer-events-none bg-gradient-to-br from-slate-900/40 to-black/80">
                    <div className="text-[8rem] font-black opacity-[0.02] select-none absolute tracking-tighter">ARCHIVE</div>
                    <Factory className="text-white/5 mb-6" size={48} />
                    <span className="text-orange-600/30 text-[7px] font-black uppercase tracking-[1em] animate-pulse">Engineering Vault</span>
                 </div>
                 <div className="absolute bottom-8 left-8 p-6 bg-black/60 backdrop-blur-xl border-l-4 border-orange-600 z-20">
                    <h4 className="text-xl font-black mb-1 uppercase italic tracking-tighter">Precision Craft v2.0</h4>
                    <p className="text-white/60 mb-6 text-[9px] font-medium uppercase tracking-widest leading-relaxed">System: R&D Reference <br/> Material: Performance Composite</p>
                    <button onClick={scrollToContact} className="px-8 py-3 bg-orange-600 text-white text-[8px] font-black uppercase tracking-[0.3em] hover:bg-white hover:text-orange-600 transition-all shadow-xl">
                      REQUEST SPEC SHEET
                    </button>
                 </div>
              </div>

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

      {/* 模块 05：智造工厂 (FACTORY) - 图片：factory-main.webp */}
      <section id="factory" className="py-24 bg-white border-t border-slate-100">
        <div className="container mx-auto px-6 lg:px-20">
           <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                 <span className="text-orange-600 font-black text-[10px] uppercase tracking-[0.6em] mb-4 block">Section 05 / Manufacturing</span>
                 <h2 className="text-5xl lg:text-7xl font-black text-slate-950 mb-8 tracking-tighter leading-[0.9] uppercase italic">SMART <br/> <span className="text-orange-600">FACTORY.</span></h2>
                 <p className="text-lg text-slate-500 font-medium italic mb-8 border-l-4 border-orange-600 pl-6">Deployment of high-precision assembly lines and zero-defect quality protocols.</p>
                 <button onClick={scrollToContact} className="px-10 py-5 bg-slate-950 text-white font-black text-[10px] uppercase tracking-[0.4em] flex items-center gap-4 hover:bg-orange-600 transition-colors">
                    EXPLORE FACILITY <ArrowRight size={18} />
                 </button>
              </div>
              {/* 核心工厂图：factory-main.webp (替换了原本的灰色图标盒) */}
              <motion.div {...fadeInUp} className="relative aspect-video rounded-sm border border-slate-200 overflow-hidden shadow-2xl group">
                 <img 
                   src="/factory-main.webp" 
                   alt="Factory Infrastructure" 
                   className="w-full h-full object-cover transition-transform duration-[10s] group-hover:scale-105"
                   onError={(e) => { e.currentTarget.style.display = 'none'; }}
                 />
                 <div className="absolute inset-0 bg-slate-100 flex items-center justify-center -z-10">
                    <Factory size={64} className="text-slate-200" />
                 </div>
              </motion.div>
           </div>
        </div>
      </section>

      {/* 模块 06：联系我们 (CONTACT) */}
      <section id="contact" className="py-24 bg-white overflow-hidden border-t border-slate-100">
        <div className="container mx-auto px-6 lg:px-20">
           <div className="grid lg:grid-cols-2 gap-16 lg:gap-32">
              <div>
                 <div className="flex items-center gap-4 mb-6">
                    <div className="w-10 h-[2px] bg-orange-600"></div>
                    <span className="text-orange-600 font-black text-[10px] uppercase tracking-[0.5em]">Section 06 / Inquiry</span>
                 </div>
                 <h2 className="text-6xl lg:text-8xl font-black text-slate-950 mb-10 tracking-tighter leading-[0.8] uppercase italic">LET'S <br/> <span className="text-orange-600">TALK.</span></h2>
                 <div className="space-y-8">
                    <div className="flex gap-5 group">
                       <div className="w-12 h-12 bg-slate-50 rounded-full flex items-center justify-center text-orange-600 group-hover:bg-orange-600 group-hover:text-white transition-all shadow-sm"><Factory size={20} /></div>
                       <div><span className="text-[8px] font-black text-slate-400 uppercase tracking-widest block mb-0.5">Technical HQ</span><div className="text-xl font-black text-slate-950 italic tracking-tighter">{contact.phone}</div></div>
                    </div>
                    <div className="flex gap-5 group">
                       <div className="w-12 h-12 bg-slate-50 rounded-full flex items-center justify-center text-orange-600 group-hover:bg-orange-600 group-hover:text-white transition-all shadow-sm"><Globe size={20} /></div>
                       <div><span className="text-[8px] font-black text-slate-400 uppercase tracking-widest block mb-0.5">Email Office</span><div className="text-xl font-black text-slate-950 underline decoration-orange-600 underline-offset-4 italic tracking-tighter">{contact.email}</div></div>
                    </div>
                 </div>
              </div>
              <div className="bg-slate-50 p-8 lg:p-12 rounded-sm border border-slate-100 shadow-sm">
                 <form className="space-y-8" onSubmit={(e) => { e.preventDefault(); alert('Request Sent.'); }}>
                    <input type="text" placeholder="Individual or Brand Name" className="w-full bg-transparent border-b border-slate-200 py-3 outline-none focus:border-orange-600 transition-colors font-bold text-xl tracking-tighter" required />
                    <input type="email" placeholder="official@domain.com" className="w-full bg-transparent border-b border-slate-200 py-3 outline-none focus:border-orange-600 transition-colors font-bold text-xl tracking-tighter" required />
                    <textarea placeholder="Your requirements..." className="w-full bg-transparent border-b border-slate-200 py-3 outline-none focus:border-orange-600 transition-colors font-bold text-xl tracking-tighter resize-none" rows={2} required />
                    <button className="w-full py-5 bg-orange-600 text-white font-black text-[10px] uppercase tracking-[0.4em] hover:bg-slate-950 transition-all flex items-center justify-center gap-4 shadow-xl">
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
