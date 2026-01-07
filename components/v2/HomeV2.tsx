
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Globe, Factory, Microscope, ShieldCheck, Zap } from 'lucide-react';
import { CONTENT, BRANDS, PARTNER_SHOES } from '../../constants';
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

  // 无限轮播逻辑：将数组加倍以实现无缝对接
  const extendedShoes = [...PARTNER_SHOES, ...PARTNER_SHOES];

  return (
    <div className="bg-white w-full overflow-hidden">
      
      {/* 模块 01：品牌传承 (Heritage) */}
      <section id="about" className="relative py-24 lg:py-40 bg-white overflow-hidden">
        <div className="container mx-auto px-6 lg:px-24 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-32 items-center">
            <motion.div {...fadeInUp}>
              <div className="flex items-center gap-4 mb-8">
                 <div className="w-12 h-[2px] bg-orange-600"></div>
                 <span className="text-orange-600 font-black text-[10px] uppercase tracking-[0.6em]">Section 01 / Heritage</span>
              </div>
              <h2 className="text-5xl md:text-7xl lg:text-8xl font-black text-slate-950 leading-[0.85] tracking-tighter uppercase italic mb-10">
                THE <br/> <span className="text-orange-600">HERITAGE.</span>
              </h2>
              <div className="text-lg md:text-xl font-bold text-slate-400 leading-relaxed italic border-l-4 border-orange-600 pl-8 max-w-xl">
                 {CONTENT.aboutPage.whoWeAre.content[language]}
              </div>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
               <div className="bg-slate-50 p-10 aspect-square flex flex-col justify-between group hover:bg-orange-600 transition-all duration-700 rounded-sm shadow-sm border border-slate-100">
                  <div className="flex justify-between items-start">
                    <h3 className="text-[10px] font-black text-orange-600 group-hover:text-white uppercase tracking-widest">Global Mission</h3>
                    <Zap className="text-orange-600 group-hover:text-white opacity-20" size={28} />
                  </div>
                  <p className="text-2xl font-black text-slate-950 group-hover:text-white uppercase italic leading-tight">{CONTENT.aboutPage.mission.mText[language]}</p>
               </div>
               <div className="bg-slate-950 p-10 aspect-square flex flex-col justify-between group relative overflow-hidden rounded-sm shadow-2xl">
                  <Globe size={140} className="absolute -right-10 -bottom-10 opacity-5 group-hover:scale-110 transition-transform duration-[3s]" />
                  <h3 className="text-[10px] font-black text-orange-600 uppercase tracking-widest relative z-10">Global Vision</h3>
                  <p className="text-2xl font-black text-white uppercase italic leading-tight relative z-10">{CONTENT.aboutPage.mission.vText[language]}</p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 模块 02：技术工程 (ENGINEERING) */}
      <section id="capabilities" className="py-32 bg-slate-50 relative border-y border-slate-100">
        <div className="container mx-auto px-6 lg:px-24 relative z-10">
           <div className="mb-20 text-center lg:text-left">
              <span className="text-orange-600 font-black text-[11px] uppercase tracking-[0.7em] mb-6 block">Section 02 / Tech Infrastructure</span>
              <h2 className="text-5xl lg:text-8xl font-black text-slate-950 tracking-tighter leading-[0.85] uppercase italic">ENGINEERING <br/> <span className="text-slate-200">EXCELLENCE.</span></h2>
           </div>
           <div className="grid lg:grid-cols-3 gap-px bg-slate-200 shadow-2xl rounded-sm overflow-hidden border border-slate-200">
              {[
                { icon: Factory, title: 'INDUSTRIAL FLOW', desc: 'Optimized high-precision assembly lines for complex functional footwear.' },
                { icon: Microscope, title: 'R&D FACILITY', desc: 'In-house laboratory for advanced material testing and durability validation.' },
                { icon: ShieldCheck, title: 'QUALITY SHIELD', desc: 'Zero-tolerance quality protocols integrated at every production stage.' }
              ].map((item, i) => (
                <motion.div key={i} {...fadeInUp} className="bg-white p-12 group transition-all duration-700 hover:bg-slate-950">
                   <div className="text-orange-600 mb-10 group-hover:scale-110 transition-transform origin-left">
                     <item.icon size={44} strokeWidth={1} />
                   </div>
                   <h3 className="text-2xl font-black mb-6 uppercase italic group-hover:text-white tracking-tighter">{item.title}</h3>
                   <p className="text-slate-500 text-sm font-medium leading-relaxed group-hover:text-white/40 italic">{item.desc}</p>
                </motion.div>
              ))}
           </div>
        </div>
      </section>

      {/* 模块 03：合作伙伴产品自动轮播 */}
      <section id="services" className="py-32 bg-white overflow-hidden relative">
        <div className="container mx-auto px-6 lg:px-24 mb-20">
           <div className="flex flex-col md:flex-row md:items-end justify-between gap-10">
              <div>
                 <span className="text-orange-600 font-black text-[11px] uppercase tracking-[0.7em] mb-6 block">Section 03 / Partner Showcase</span>
                 <h2 className="text-5xl lg:text-8xl font-black text-slate-950 tracking-tighter leading-[0.85] uppercase italic">
                   COLLECTION <br/> <span className="text-orange-600">ARCHIVE.</span>
                 </h2>
              </div>
              <div className="max-w-md border-l-4 border-slate-950 pl-8 py-2">
                 <p className="text-sm font-bold text-slate-400 italic uppercase tracking-wider">Showcasing high-performance footwear developed in collaboration with leading global brands.</p>
              </div>
           </div>
        </div>

        <div className="relative w-full overflow-hidden">
           <motion.div 
             className="flex gap-6 px-3"
             animate={{ x: ["0%", "-50%"] }}
             transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
             style={{ width: "fit-content" }}
           >
              {extendedShoes.map((shoe, i) => (
                <div key={i} className="w-[280px] md:w-[350px] flex-shrink-0 group">
                   <div className="aspect-[3/4] bg-slate-100 overflow-hidden rounded-sm relative shadow-lg">
                      <img 
                        src={shoe.image} 
                        alt="Product Exhibit" 
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                        onError={(e) => { e.currentTarget.style.display = 'none'; }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-8">
                         <span className="text-orange-500 text-[9px] font-black uppercase tracking-widest mb-1">Authenticated</span>
                         <h4 className="text-white text-xl font-black uppercase italic tracking-tighter">TECHNICAL SPEC v2.5</h4>
                      </div>
                   </div>
                   <div className="mt-6 flex justify-between items-center px-2">
                      <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{shoe.tag}</span>
                      <ArrowRight size={14} className="text-orange-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                   </div>
                </div>
              ))}
           </motion.div>
        </div>

        <div className="container mx-auto px-6 lg:px-24 mt-32">
           <div className="pt-16 border-t border-slate-100 flex flex-wrap justify-center items-center gap-x-16 gap-y-12">
              {BRANDS.map((brand, i) => (
                <motion.div key={i} className="flex-shrink-0 group">
                   <a href={brand.url || '#'} target="_blank" className="opacity-30 hover:opacity-100 transition-all duration-500">
                      <img src={brand.image} alt="Logo" className="h-7 md:h-9 w-auto object-contain grayscale group-hover:grayscale-0 transition-all" />
                   </a>
                </motion.div>
              ))}
           </div>
        </div>
      </section>

      {/* 模块 04：产品展厅 (SHOWCASE) - 优化图片明显度 */}
      <section id="showcase" className="py-32 bg-slate-950 text-white overflow-hidden relative">
        <div className="container mx-auto px-6 lg:px-24 relative z-10">
           <div className="flex flex-col lg:flex-row items-start justify-between mb-20">
              <div>
                 <span className="text-orange-600 font-black text-[11px] uppercase tracking-[0.7em] mb-6 block">Section 04 / Dossier</span>
                 <h2 className="text-5xl lg:text-8xl font-black tracking-tighter leading-[0.85] uppercase italic">TECHNICAL <br/> <span className="text-orange-600">DOSSIER.</span></h2>
              </div>
           </div>

           <div className="grid lg:grid-cols-12 gap-10">
              <div className="lg:col-span-7 relative group min-h-[500px] overflow-hidden rounded-sm border border-white/10 bg-slate-900 shadow-2xl transition-all duration-500 hover:border-orange-600/50">
                 {/* 显著提升图片可见度：基础不透明度 90%，悬停 100% */}
                 <img 
                   src="/showcase-main.webp" 
                   alt="Technical Reference" 
                   className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-[10s] ease-out filter brightness-110"
                   onError={(e) => { e.currentTarget.style.opacity = '0'; }}
                 />
                 
                 {/* 渐变遮罩优化：仅保留底部和侧边的轻微阴影，中心区域完全通透 */}
                 <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity pointer-events-none"></div>
                 <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-transparent pointer-events-none"></div>

                 {/* 信息卡片：增加背景模糊感，减少对图片的干扰 */}
                 <div className="absolute bottom-8 left-8 p-10 bg-black/40 backdrop-blur-3xl border-l-4 border-orange-600 z-20 max-w-sm transform group-hover:-translate-y-2 transition-transform duration-500">
                    <div className="flex items-center gap-3 mb-3">
                       <span className="w-6 h-[1px] bg-orange-600"></span>
                       <span className="text-orange-500 text-[8px] font-black uppercase tracking-[0.5em]">Live Prototype</span>
                    </div>
                    <h4 className="text-2xl font-black mb-2 uppercase italic tracking-tighter text-white">Precision Craft v2.0</h4>
                    <p className="text-white/60 mb-8 text-[10px] font-bold uppercase tracking-widest leading-relaxed">System: R&D Reference <br/> Environment: Industrial Performance</p>
                    <button onClick={scrollToContact} className="px-10 py-4 bg-orange-600 text-white text-[9px] font-black uppercase tracking-[0.4em] hover:bg-white hover:text-orange-600 transition-all shadow-2xl">
                      REQUEST DATA SHEET
                    </button>
                 </div>
              </div>

              <div className="lg:col-span-5 flex flex-col gap-10">
                 <div className="bg-orange-600 p-12 flex-1 flex flex-col justify-end rounded-sm relative overflow-hidden group shadow-2xl">
                    <Zap size={80} className="absolute top-8 right-8 text-white/10 group-hover:rotate-12 transition-transform" />
                    <h4 className="text-4xl lg:text-5xl font-black mb-4 uppercase italic leading-[0.8] tracking-tighter">50+ YEARS <br/>EXPERIENCE.</h4>
                    <p className="text-white font-black text-[9px] uppercase tracking-[0.3em] opacity-80">Industrial Legacy & Advanced IP Portfolio</p>
                 </div>
                 <div className="grid grid-cols-2 gap-10">
                    <div className="bg-slate-900 p-10 border border-white/5 hover:border-orange-600/30 transition-colors">
                       <div className="text-4xl font-black mb-3 text-white italic tracking-tighter">100%</div>
                       <div className="text-[8px] font-bold text-slate-500 uppercase tracking-widest">Quality Validation</div>
                    </div>
                    <div className="bg-slate-900 p-10 border border-white/5 hover:border-orange-600/30 transition-colors">
                       <div className="text-4xl font-black mb-3 text-white italic tracking-tighter">24H</div>
                       <div className="text-[8px] font-bold text-slate-500 uppercase tracking-widest">Global Support</div>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* 模块 05：智造工厂 (FACTORY) */}
      <section id="factory" className="py-32 bg-white">
        <div className="container mx-auto px-6 lg:px-24">
           <div className="grid lg:grid-cols-2 gap-20 items-center">
              <div>
                 <span className="text-orange-600 font-black text-[11px] uppercase tracking-[0.7em] mb-6 block">Section 05 / Manufacturing</span>
                 <h2 className="text-5xl lg:text-8xl font-black text-slate-950 mb-10 tracking-tighter leading-[0.85] uppercase italic">SMART <br/> <span className="text-orange-600">FACTORY.</span></h2>
                 <p className="text-xl text-slate-400 font-bold italic mb-10 border-l-4 border-orange-600 pl-8 leading-relaxed max-w-lg">Deployment of high-precision assembly lines and zero-defect quality protocols for global markets.</p>
                 <button onClick={scrollToContact} className="px-12 py-6 bg-slate-950 text-white font-black text-[11px] uppercase tracking-[0.5em] flex items-center gap-6 hover:bg-orange-600 transition-all shadow-2xl">
                    EXPLORE FACILITY <ArrowRight size={20} />
                 </button>
              </div>
              <motion.div {...fadeInUp} className="relative aspect-video rounded-sm border border-slate-100 overflow-hidden shadow-2xl group bg-slate-50">
                 <img 
                   src="/factory-main.webp" 
                   alt="Factory Infrastructure" 
                   className="w-full h-full object-cover transition-transform duration-[12s] group-hover:scale-105"
                   onError={(e) => { e.currentTarget.style.display = 'none'; }}
                 />
                 <div className="absolute inset-0 bg-slate-50 flex items-center justify-center -z-10">
                    <Factory size={80} className="text-slate-100" />
                 </div>
              </motion.div>
           </div>
        </div>
      </section>

      {/* 模块 06：联系我们 (CONTACT) */}
      <section id="contact" className="py-32 bg-white overflow-hidden border-t border-slate-50">
        <div className="container mx-auto px-6 lg:px-24">
           <div className="grid lg:grid-cols-2 gap-20 lg:gap-40">
              <div>
                 <div className="flex items-center gap-6 mb-10">
                    <div className="w-12 h-[2px] bg-orange-600"></div>
                    <span className="text-orange-600 font-black text-[11px] uppercase tracking-[0.6em]">Section 06 / Connect</span>
                 </div>
                 <h2 className="text-6xl lg:text-9xl font-black text-slate-950 mb-12 tracking-tighter leading-[0.8] uppercase italic">LET'S <br/> <span className="text-orange-600">TALK.</span></h2>
                 <div className="space-y-10">
                    <div className="flex gap-8 group">
                       <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center text-orange-600 group-hover:bg-orange-600 group-hover:text-white transition-all shadow-sm border border-slate-100"><Factory size={24} /></div>
                       <div><span className="text-[10px] font-black text-slate-300 uppercase tracking-widest block mb-1">Technical HQ</span><div className="text-2xl font-black text-slate-950 italic tracking-tighter">{contact.phone}</div></div>
                    </div>
                    <div className="flex gap-8 group">
                       <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center text-orange-600 group-hover:bg-orange-600 group-hover:text-white transition-all shadow-sm border border-slate-100"><Globe size={24} /></div>
                       <div><span className="text-[10px] font-black text-slate-300 uppercase tracking-widest block mb-1">Email Office</span><div className="text-2xl font-black text-slate-950 underline decoration-orange-600 decoration-4 underline-offset-8 italic tracking-tighter">{contact.email}</div></div>
                    </div>
                 </div>
              </div>
              <div className="bg-slate-50 p-12 lg:p-16 rounded-sm border border-slate-100 shadow-2xl">
                 <form className="space-y-10" onSubmit={(e) => { e.preventDefault(); alert('Request Received.'); }}>
                    <div className="space-y-4">
                       <label className="text-[10px] font-black text-slate-300 uppercase tracking-widest">Your Identity</label>
                       <input type="text" placeholder="Individual or Brand Name" className="w-full bg-transparent border-b-2 border-slate-200 py-4 outline-none focus:border-orange-600 transition-colors font-black text-2xl tracking-tighter" required />
                    </div>
                    <div className="space-y-4">
                       <label className="text-[10px] font-black text-slate-300 uppercase tracking-widest">Official Email</label>
                       <input type="email" placeholder="official@domain.com" className="w-full bg-transparent border-b-2 border-slate-200 py-4 outline-none focus:border-orange-600 transition-colors font-black text-2xl tracking-tighter" required />
                    </div>
                    <div className="space-y-4">
                       <label className="text-[10px] font-black text-slate-300 uppercase tracking-widest">Message Content</label>
                       <textarea placeholder="Describe requirements..." className="w-full bg-transparent border-b-2 border-slate-200 py-4 outline-none focus:border-orange-600 transition-colors font-black text-2xl tracking-tighter resize-none" rows={2} required />
                    </div>
                    <button className="w-full py-6 bg-orange-600 text-white font-black text-[11px] uppercase tracking-[0.5em] hover:bg-slate-950 transition-all flex items-center justify-center gap-6 shadow-2xl shadow-orange-100 group">
                       INITIALIZE RFQ <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
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
