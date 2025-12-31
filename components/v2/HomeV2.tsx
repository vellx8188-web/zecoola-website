
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Globe, Award, Microscope, Zap, Factory } from 'lucide-react';
import { CONTENT, BRANDS } from '../../constants';
import { useLanguage } from '../../LanguageContext';

const HomeV2: React.FC = () => {
  const { language } = useLanguage();
  const data = CONTENT.home;
  const contact = CONTENT.contact;

  const fadeInUp = {
    initial: { opacity: 0, y: 50 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8 }
  };

  return (
    <div className="bg-white">
      
      {/* 模块：品牌传承 (Heritage) */}
      <section id="about" className="py-32 bg-white">
        <div className="container mx-auto px-6 lg:px-20">
          <div className="grid lg:grid-cols-2 gap-24 items-start">
            <motion.div {...fadeInUp} className="sticky top-32">
              <div className="text-[14rem] font-black text-slate-50 leading-none -ml-12 select-none">01</div>
              <h2 className="text-6xl lg:text-[7rem] font-black text-slate-950 -mt-24 leading-none tracking-tighter uppercase">
                THE <br/> <span className="text-orange-600">HERITAGE.</span>
              </h2>
            </motion.div>
            <div className="space-y-12 lg:pt-32">
               <div className="text-4xl font-bold text-slate-400 leading-[1.4] border-l-8 border-orange-600 pl-12 py-4">
                 {CONTENT.aboutPage.whoWeAre.content[language]}
               </div>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="bg-slate-50 p-12 rounded-sm border border-slate-100">
                    <h3 className="text-[10px] font-black text-orange-600 uppercase tracking-widest mb-8">Global Mission</h3>
                    <p className="text-slate-600 text-xl font-medium leading-relaxed">{CONTENT.aboutPage.mission.mText[language]}</p>
                  </div>
                  <div className="bg-slate-950 p-12 rounded-sm text-white shadow-2xl relative overflow-hidden group">
                    <div className="absolute top-0 right-0 p-8 text-white/5 group-hover:text-orange-600/10 transition-colors"><Globe size={150} /></div>
                    <h3 className="text-[10px] font-black text-orange-600 uppercase tracking-widest mb-8">Brand Vision</h3>
                    <p className="text-slate-400 text-xl font-medium leading-relaxed relative z-10">{CONTENT.aboutPage.mission.vText[language]}</p>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 模块：合作伙伴 (Brands) - 找回的模块 */}
      <section className="py-32 bg-slate-50 border-y border-slate-100">
        <div className="container mx-auto px-6 lg:px-20">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
             <div className="max-w-xl">
                <span className="text-orange-600 font-black text-[10px] uppercase tracking-[0.5em] mb-4 block">Strategic Partnerships</span>
                <h2 className="text-4xl lg:text-5xl font-black text-slate-950 tracking-tighter uppercase">TRUSTED BY LEADERS.</h2>
             </div>
             <p className="text-slate-400 font-medium text-sm lg:text-right max-w-xs">Serving the most demanding technical and lifestyle brands across the globe.</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-px bg-slate-200 border border-slate-200">
             {BRANDS.map((brand, i) => (
                <div key={i} className="bg-white p-12 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-500 aspect-video group">
                   <img src={brand.image} alt="Partner" className="max-h-full max-w-full object-contain opacity-40 group-hover:opacity-100 transition-opacity" />
                </div>
             ))}
          </div>
        </div>
      </section>

      {/* 模块：技术工程 (Capabilities) */}
      <section id="capabilities" className="py-32 bg-white">
        <div className="container mx-auto px-6 lg:px-20">
           <div className="grid lg:grid-cols-3 gap-px bg-slate-200 shadow-2xl">
              {[
                { icon: Award, title: 'Manufacturing', desc: 'Precise industrial assembly with ISO standards.' },
                { icon: Microscope, title: 'Engineering', desc: 'Material innovation and blueprint translation.' },
                { icon: Zap, title: 'Performance', desc: 'Scaling high-tech solutions for elite brands.' }
              ].map((item, i) => (
                <motion.div key={i} {...fadeInUp} className="bg-white p-20 hover:bg-slate-950 group transition-all duration-700">
                   <div className="text-orange-600 mb-12 group-hover:scale-110 transition-transform"><item.icon size={64} strokeWidth={1} /></div>
                   <h3 className="text-4xl font-black mb-6 uppercase tracking-tighter group-hover:text-white transition-colors">{item.title}</h3>
                   <p className="text-slate-500 text-lg leading-relaxed group-hover:text-white/50 transition-colors">{item.desc}</p>
                </motion.div>
              ))}
           </div>
        </div>
      </section>

      {/* 模块：产品展厅 (Showcase) */}
      <section id="showcase" className="py-32 bg-slate-950 text-white">
        <div className="container mx-auto px-6 lg:px-20">
           <div className="flex flex-col lg:flex-row items-end justify-between mb-24 gap-12">
              <div className="max-w-3xl">
                 <span className="text-orange-600 font-black text-[10px] uppercase tracking-[0.5em] mb-4 block">Archive Showcase</span>
                 <h2 className="text-7xl lg:text-[10rem] font-black tracking-tighter leading-none uppercase">PRODUCTS.</h2>
              </div>
           </div>

           <div className="grid lg:grid-cols-12 gap-10">
              <div className="lg:col-span-8 group relative overflow-hidden rounded-sm aspect-[16/9]">
                 <img src="/showcase-main.webp" className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-[2s]" />
                 <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
                 <div className="absolute bottom-12 left-12">
                    <h3 className="text-5xl font-black mb-6 uppercase italic">Technical Innovation Series</h3>
                    <button className="px-8 py-4 border border-white/20 text-[10px] font-black uppercase tracking-widest hover:bg-white hover:text-slate-950 transition-all">View Specifications</button>
                 </div>
              </div>
              <div className="lg:col-span-4 flex flex-col justify-center gap-12 p-12 border-l border-white/10">
                 <div className="space-y-6">
                    <h4 className="text-orange-600 font-black text-xs uppercase tracking-widest">R&D Focus</h4>
                    <p className="text-2xl font-bold leading-relaxed text-slate-400 italic">"Engineering comfort and safety through material science and anatomical precision."</p>
                 </div>
                 <div className="grid grid-cols-2 gap-8">
                    <div><div className="text-4xl font-black text-white mb-2 tracking-tighter">50+</div><div className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Years Expertise</div></div>
                    <div><div className="text-4xl font-black text-white mb-2 tracking-tighter">100%</div><div className="text-[10px] font-black text-slate-500 uppercase tracking-widest">QC Fidelity</div></div>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* 模块：联系我们 (Contact) */}
      <section id="contact" className="py-32 bg-white">
        <div className="container mx-auto px-6 lg:px-20">
           <div className="bg-slate-950 p-12 lg:p-32 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-full h-full opacity-[0.03] pointer-events-none">
                 <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
              </div>
              
              <div className="grid lg:grid-cols-2 gap-32 relative z-10">
                 <div>
                    <h2 className="text-6xl lg:text-[8rem] font-black text-white mb-10 tracking-tighter leading-none uppercase">LET'S <br/> <span className="text-orange-600">TALK.</span></h2>
                    <p className="text-xl text-slate-500 mb-16 leading-relaxed max-w-md">Our sales engineering team provides full technical evaluations for all global RFQs within 24 hours.</p>
                    <div className="space-y-10">
                       <div className="flex gap-8">
                          <div className="w-16 h-16 bg-white/5 flex items-center justify-center text-orange-600"><Factory size={32} /></div>
                          <div><span className="text-[10px] font-black text-slate-500 uppercase tracking-widest block mb-2">Technical HQ</span><div className="text-2xl font-black text-white">{contact.phone}</div></div>
                       </div>
                       <div className="flex gap-8">
                          <div className="w-16 h-16 bg-white/5 flex items-center justify-center text-orange-600"><Globe size={32} /></div>
                          <div><span className="text-[10px] font-black text-slate-500 uppercase tracking-widest block mb-2">Email Desk</span><div className="text-2xl font-black text-white underline underline-offset-8 decoration-orange-600">{contact.email}</div></div>
                       </div>
                    </div>
                 </div>

                 <div className="bg-white p-12 lg:p-20 shadow-2xl">
                    <form className="space-y-12" onSubmit={(e) => { e.preventDefault(); alert('Request sent!'); }}>
                       <div className="space-y-4">
                          <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em]">Project Identity</label>
                          <input type="text" placeholder="Your Name / Company" className="w-full border-b-2 border-slate-100 py-4 outline-none focus:border-orange-600 transition-colors font-black text-xl" required />
                       </div>
                       <div className="space-y-4">
                          <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em]">Communication</label>
                          <input type="email" placeholder="email@brand.com" className="w-full border-b-2 border-slate-100 py-4 outline-none focus:border-orange-600 transition-colors font-black text-xl" required />
                       </div>
                       <div className="space-y-4">
                          <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em]">Project Details</label>
                          <textarea placeholder="Describe your technical requirements..." className="w-full border-b-2 border-slate-100 py-4 outline-none focus:border-orange-600 transition-colors font-black text-xl resize-none" rows={3} required />
                       </div>
                       <button className="w-full py-6 bg-orange-600 text-white font-black text-sm uppercase tracking-widest hover:bg-slate-950 transition-all flex items-center justify-center gap-4">
                          SUBMIT PROJECT RFQ <ArrowRight size={20} />
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
