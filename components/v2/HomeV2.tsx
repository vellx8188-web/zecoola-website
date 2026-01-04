
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Globe, Factory, Microscope, ShieldCheck } from 'lucide-react';
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
      
      {/* 模块：品牌传承 */}
      <section id="about" className="py-32 lg:py-48 bg-white overflow-hidden">
        <div className="container mx-auto px-6 lg:px-20">
          <div className="grid lg:grid-cols-2 gap-20 items-start">
            <motion.div {...fadeInUp}>
              <span className="text-orange-600 font-black text-xs uppercase tracking-[0.6em] mb-6 block">Section 01 / Profile</span>
              <h2 className="text-7xl md:text-[10rem] font-black text-slate-950 leading-[0.8] tracking-tighter uppercase italic mb-12">
                THE <br/> <span className="text-orange-600">HERITAGE.</span>
              </h2>
              <div className="text-3xl font-bold text-slate-400 leading-tight italic border-l-8 border-orange-600 pl-8 max-w-xl">
                 {CONTENT.aboutPage.whoWeAre.content[language]}
              </div>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:mt-32">
               <div className="bg-slate-50 p-12 aspect-square flex flex-col justify-between group hover:bg-orange-600 transition-all duration-500">
                  <h3 className="text-[10px] font-black text-orange-600 group-hover:text-white uppercase tracking-widest">Global Mission</h3>
                  <p className="text-3xl font-black text-slate-950 group-hover:text-white uppercase italic leading-none">{CONTENT.aboutPage.mission.mText[language]}</p>
               </div>
               <div className="bg-slate-950 p-12 aspect-square flex flex-col justify-between group relative overflow-hidden">
                  <Globe size={150} className="absolute -right-10 -bottom-10 opacity-5" />
                  <h3 className="text-[10px] font-black text-orange-600 uppercase tracking-widest">Global Vision</h3>
                  <p className="text-3xl font-black text-white uppercase italic leading-none relative z-10">{CONTENT.aboutPage.mission.vText[language]}</p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 模块：合作伙伴 (错落、紧凑、微灰背景增强白色可见度) */}
      <section className="py-24 lg:py-40 bg-[#F9F9F9] overflow-hidden border-y border-slate-100">
        <div className="container mx-auto px-6 lg:px-20">
          
          {/* Section Heading */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-24 gap-8">
             <div className="max-w-4xl">
               <span className="text-orange-600 font-black text-[10px] uppercase tracking-[0.6em] mb-6 block">Section 02 / Partnerships</span>
               <h2 className="text-7xl lg:text-[8rem] font-black text-slate-950 tracking-tighter leading-[0.85] uppercase italic">
                 STRATEGIC <br/> PARTNERS.
               </h2>
             </div>
             <div className="lg:text-right max-w-xs pb-4">
                <div className="w-12 h-1 bg-orange-600 mb-6 lg:ml-auto"></div>
                <p className="text-slate-400 font-bold text-sm leading-relaxed italic uppercase tracking-wider">
                  Trusted by industry leaders for over 50 years of excellence.
                </p>
             </div>
          </div>

          {/* Staggered Grid - 紧凑型错落布局 */}
          <div className="relative max-w-6xl mx-auto">
             <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-16 lg:gap-x-20 lg:gap-y-24">
                {BRANDS.map((brand, i) => {
                  // 计算错落：更小的偏移值让排版更紧凑
                  const offset = i % 2 === 0 ? 'mt-0' : 'mt-8 lg:mt-12';
                  const delay = (i % 5) * 0.1;

                  return (
                    <motion.div 
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: delay }}
                      className={`relative flex items-center justify-center transition-all duration-500 ${offset}`}
                    >
                       {brand.url ? (
                          <a 
                            href={brand.url} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="group relative flex items-center justify-center h-16 md:h-20 lg:h-24 px-4"
                          >
                            <img 
                              src={brand.image} 
                              alt={`Brand ${i}`} 
                              className="max-h-full w-auto object-contain filter grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700"
                              style={{ 
                                // 添加细微投影，确保在极亮背景下白色边缘依旧清晰
                                filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.05)) grayscale(1)' 
                              }}
                            />
                            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-orange-600 group-hover:w-full transition-all duration-500 opacity-50"></div>
                          </a>
                       ) : (
                          <div className="h-16 md:h-20 flex items-center justify-center px-4 opacity-20 grayscale">
                             <img 
                              src={brand.image} 
                              alt={`Brand ${i}`} 
                              className="max-h-full w-auto object-contain"
                            />
                          </div>
                       )}
                    </motion.div>
                  );
                })}
             </div>
          </div>

          {/* Footer Recognition */}
          <div className="mt-32 flex flex-col items-center">
             <div className="flex items-center gap-6">
                <div className="w-8 h-px bg-slate-200"></div>
                <span className="text-[10px] font-black text-slate-300 uppercase tracking-[0.5em]">Global Industry Leaders Recognition</span>
                <div className="w-8 h-px bg-slate-200"></div>
             </div>
          </div>
        </div>
      </section>

      {/* 模块：技术核心 */}
      <section id="capabilities" className="py-32 bg-white">
        <div className="container mx-auto px-6 lg:px-20">
           <div className="grid lg:grid-cols-3 gap-8">
              {[
                { icon: Factory, title: 'ENGINEERING', desc: 'State-of-the-art production lines optimized for high-performance output.' },
                { icon: Microscope, title: 'R&D CENTER', desc: 'Dedicated facility for material innovation and technical prototyping.' },
                { icon: ShieldCheck, title: 'FIDELITY QC', desc: 'Comprehensive testing protocols ensuring zero-defect production cycles.' }
              ].map((item, i) => (
                <motion.div key={i} {...fadeInUp} className="bg-slate-50 p-16 hover:bg-slate-950 group transition-all duration-700 cursor-default border border-slate-100 shadow-sm">
                   <div className="text-orange-600 mb-12 group-hover:scale-110 transition-transform"><item.icon size={60} strokeWidth={1} /></div>
                   <h3 className="text-3xl font-black mb-6 uppercase italic group-hover:text-white transition-colors">{item.title}</h3>
                   <p className="text-slate-500 text-lg font-medium leading-relaxed group-hover:text-white/40 transition-colors">{item.desc}</p>
                </motion.div>
              ))}
           </div>
        </div>
      </section>

      {/* 模块：产品展示区 */}
      <section id="showcase" className="py-32 bg-slate-950 text-white overflow-hidden relative">
        <div className="container mx-auto px-6 lg:px-20">
           <div className="flex flex-col lg:flex-row items-end justify-between mb-24 gap-12">
              <h2 className="text-[10rem] md:text-[18rem] font-black tracking-tighter leading-none uppercase text-white/5 select-none -ml-12 italic">ARCHIVE.</h2>
              <div className="max-w-md text-right relative z-10">
                 <h3 className="text-5xl font-black mb-6 uppercase italic">PRODUCT SHOWCASE.</h3>
                 <p className="text-slate-500 text-lg font-medium italic">High-performance technical gear engineered for global standards.</p>
              </div>
           </div>

           <div className="grid lg:grid-cols-12 gap-10">
              <div className="lg:col-span-7 relative overflow-hidden bg-slate-900 aspect-video rounded-sm border border-white/5 group">
                 <img src="/showcase-main.webp" className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-[5s]" />
                 <div className="absolute bottom-10 left-10">
                    <h4 className="text-3xl font-black mb-4 uppercase italic">Precision Craft</h4>
                    <button className="px-8 py-4 border border-white/20 text-[10px] font-black uppercase tracking-widest hover:bg-orange-600 hover:border-orange-600 transition-all">Details</button>
                 </div>
              </div>
              <div className="lg:col-span-5 flex flex-col gap-10">
                 <div className="bg-orange-600 p-12 flex-1 flex flex-col justify-end rounded-sm shadow-2xl">
                    <h4 className="text-4xl font-black mb-4 uppercase italic leading-none">50+ YEARS EXPERIENCE.</h4>
                    <p className="text-white/80 text-lg font-medium italic">Legacy of footwear excellence.</p>
                 </div>
                 <div className="grid grid-cols-2 gap-10">
                    <div className="bg-slate-900 p-10 border border-white/5 text-center">
                       <div className="text-5xl font-black mb-2 tracking-tighter text-white italic">100%</div>
                       <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">QC PASS</div>
                    </div>
                    <div className="bg-slate-900 p-10 border border-white/5 text-center">
                       <div className="text-5xl font-black mb-2 tracking-tighter text-white italic">24H</div>
                       <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">RESPONSE</div>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* 模块：联系我们 */}
      <section id="contact" className="py-32 lg:py-48 bg-white overflow-hidden">
        <div className="container mx-auto px-6 lg:px-20">
           <div className="grid lg:grid-cols-2 gap-32">
              <div>
                 <h2 className="text-8xl lg:text-[11rem] font-black text-slate-950 mb-12 tracking-tighter leading-[0.8] uppercase italic">LET'S <br/> <span className="text-orange-600">TALK.</span></h2>
                 <p className="text-2xl text-slate-400 mb-16 leading-relaxed font-medium italic">Technical headquarters in Dongguan. Response within 24 hours.</p>
                 <div className="space-y-12">
                    <div className="flex gap-8 group cursor-pointer">
                       <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center text-orange-600 group-hover:bg-orange-600 group-hover:text-white transition-all"><Factory size={30} /></div>
                       <div><span className="text-[10px] font-black text-slate-400 uppercase tracking-widest block mb-1">Direct Line</span><div className="text-2xl font-black text-slate-950 italic">{contact.phone}</div></div>
                    </div>
                    <div className="flex gap-8 group cursor-pointer">
                       <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center text-orange-600 group-hover:bg-orange-600 group-hover:text-white transition-all"><Globe size={30} /></div>
                       <div><span className="text-[10px] font-black text-slate-400 uppercase tracking-widest block mb-1">Email Office</span><div className="text-2xl font-black text-slate-950 underline decoration-orange-600 underline-offset-8 italic">{contact.email}</div></div>
                    </div>
                 </div>
              </div>
              <div className="bg-slate-50 p-12 lg:p-20 shadow-2xl rounded-sm">
                 <form className="space-y-10" onSubmit={(e) => { e.preventDefault(); alert('Sent!'); }}>
                    <div className="space-y-2">
                       <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.4em]">Identity</label>
                       <input type="text" placeholder="Full Name / Brand" className="w-full bg-transparent border-b-2 border-slate-200 py-4 outline-none focus:border-orange-600 transition-colors font-black text-2xl" required />
                    </div>
                    <div className="space-y-2">
                       <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.4em]">Contact</label>
                       <input type="email" placeholder="email@example.com" className="w-full bg-transparent border-b-2 border-slate-200 py-4 outline-none focus:border-orange-600 transition-colors font-black text-2xl" required />
                    </div>
                    <div className="space-y-2">
                       <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.4em]">Details</label>
                       <textarea placeholder="Technical brief..." className="w-full bg-transparent border-b-2 border-slate-200 py-4 outline-none focus:border-orange-600 transition-colors font-black text-2xl resize-none" rows={3} required />
                    </div>
                    <button className="w-full py-6 bg-orange-600 text-white font-black text-sm uppercase tracking-[0.4em] hover:bg-slate-950 transition-all flex items-center justify-center gap-4 shadow-xl">
                       SUBMIT RFQ <ArrowRight size={20} />
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
