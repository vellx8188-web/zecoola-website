
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Layers, Factory, Globe, Award, Microscope, Zap } from 'lucide-react';
import { CONTENT } from '../../constants';
import { useLanguage } from '../../LanguageContext';

const HomeV2: React.FC = () => {
  const { language } = useLanguage();
  const data = CONTENT.home;
  const contact = CONTENT.contact;

  const fadeInUp = {
    initial: { opacity: 0, y: 50 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: "easeOut" as const }
  };

  return (
    <div className="bg-white">
      
      {/* 模块：关于传承 (Heritage) */}
      <section id="about" className="py-32 bg-white">
        <div className="container mx-auto px-6 lg:px-20">
          <div className="grid lg:grid-cols-2 gap-24 items-start">
            <motion.div {...fadeInUp} className="sticky top-32">
              <div className="text-[12rem] font-black text-slate-50 leading-none -ml-8 select-none">01</div>
              <h2 className="text-6xl lg:text-8xl font-black text-slate-950 -mt-20 leading-[1.1] tracking-tighter uppercase">
                THE <br/> <span className="text-orange-600">HERITAGE.</span>
              </h2>
            </motion.div>
            <div className="space-y-12 lg:pt-32">
               <div className="text-3xl font-bold text-slate-400 leading-relaxed border-l-8 border-orange-600 pl-12 py-4">
                 {CONTENT.aboutPage.whoWeAre.content[language]}
               </div>
               <img src="/about-vision.webp" alt="Heritage" className="w-full h-80 object-cover rounded-sm grayscale hover:grayscale-0 transition-all duration-700" />
               <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="bg-slate-50 p-12 rounded-sm border border-slate-100">
                    <h3 className="text-xs font-black text-orange-600 uppercase tracking-widest mb-6">Our Mission</h3>
                    <p className="text-slate-500 text-lg leading-relaxed">{CONTENT.aboutPage.mission.mText[language]}</p>
                  </div>
                  <div className="bg-slate-950 p-12 rounded-sm text-white shadow-2xl">
                    <h3 className="text-xs font-black text-orange-600 uppercase tracking-widest mb-6">Our Vision</h3>
                    <p className="text-slate-400 text-lg leading-relaxed">{CONTENT.aboutPage.mission.vText[language]}</p>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 模块：核心实力 (Engineering) */}
      <section id="capabilities" className="py-32 bg-slate-50 overflow-hidden">
        <div className="container mx-auto px-6 lg:px-20">
           <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
              <div className="max-w-3xl">
                 <span className="text-orange-600 font-black text-xs uppercase tracking-[0.5em] block mb-4">Engineering Capabilities</span>
                 <h2 className="text-6xl lg:text-[7rem] font-black text-slate-950 tracking-tighter leading-none uppercase">STRENGTHS.</h2>
              </div>
              <div className="w-full md:w-1/3 h-[2px] bg-slate-200 mb-4" />
           </div>

           <div className="grid lg:grid-cols-3 gap-px bg-slate-200 shadow-2xl border border-slate-200">
              {[
                { icon: Award, title: 'Manufacturing', items: data.whyUs.items[0].desc[language] },
                { icon: Microscope, title: 'Technical Lab', items: data.whyUs.items[1].desc[language] },
                { icon: Zap, title: 'Efficiency', items: data.whyUs.items[2].desc[language] }
              ].map((item, i) => (
                <motion.div 
                  key={i} 
                  {...fadeInUp}
                  className="bg-white p-20 hover:bg-orange-600 group transition-all duration-700 cursor-default"
                >
                  <div className="text-orange-600 group-hover:text-white transition-colors mb-12"><item.icon size={56} strokeWidth={1} /></div>
                  <h3 className="text-3xl font-black mb-8 uppercase group-hover:text-white transition-colors tracking-tighter">{item.title}</h3>
                  <p className="text-slate-500 group-hover:text-white/70 transition-colors leading-relaxed text-xl font-medium">{item.items}</p>
                </motion.div>
              ))}
           </div>
        </div>
      </section>

      {/* 模块：产品展厅 (Showcase) */}
      <section id="showcase" className="py-32 bg-slate-950 text-white overflow-hidden">
        <div className="container mx-auto px-6 lg:px-20">
          <div className="flex flex-col lg:flex-row items-end justify-between mb-24 gap-8">
            <div className="max-w-2xl">
              <span className="text-orange-600 font-black text-xs uppercase tracking-[0.5em] mb-4 block">Archive Showcase</span>
              <h2 className="text-6xl lg:text-8xl font-black leading-tight tracking-tighter">
                PRODUCTS.
              </h2>
            </div>
            <p className="text-slate-500 max-w-sm text-lg font-medium lg:text-right">
              Precision manufactured functional footwear for high-performance and elite technical brands.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 h-[800px]">
             <motion.div {...fadeInUp} className="md:col-span-8 group relative overflow-hidden rounded-sm bg-slate-900">
                <img src="/showcase-main.webp" alt="Showcase" className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-[2s]" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-90" />
                <div className="absolute bottom-12 left-12">
                   <h3 className="text-4xl font-black mb-4">Functional Technical Series</h3>
                   <div className="flex gap-4"><span className="px-4 py-2 border border-white/20 text-xs font-black uppercase tracking-widest">Alpine Tech</span></div>
                </div>
             </motion.div>
             <div className="md:col-span-4 flex flex-col gap-10">
                <motion.div {...fadeInUp} transition={{ delay: 0.2 }} className="h-1/2 group relative overflow-hidden rounded-sm bg-slate-900">
                   <img src="/showcase-sub1.webp" alt="Showcase" className="w-full h-full object-cover opacity-60" />
                   <div className="absolute bottom-8 left-8"><h4 className="text-xl font-black uppercase">Safety</h4></div>
                </motion.div>
                <motion.div {...fadeInUp} transition={{ delay: 0.4 }} className="h-1/2 group relative overflow-hidden rounded-sm bg-slate-900">
                   <img src="/showcase-sub2.webp" alt="Showcase" className="w-full h-full object-cover opacity-60" />
                   <div className="absolute bottom-8 left-8"><h4 className="text-xl font-black uppercase">Performance</h4></div>
                </motion.div>
             </div>
          </div>
        </div>
      </section>

      {/* 模块：联系我们 (Contact) */}
      <section id="contact" className="py-32 bg-white">
         <div className="container mx-auto px-6 lg:px-20">
            <div className="bg-slate-950 p-12 lg:p-32 relative overflow-hidden">
               <div className="absolute top-0 right-0 w-full h-full opacity-5 pointer-events-none">
                  <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
               </div>
               
               <div className="grid lg:grid-cols-2 gap-32 relative z-10">
                  <div>
                     <h2 className="text-6xl lg:text-[6rem] font-black text-white mb-10 tracking-tighter leading-none uppercase">LET'S <br/> <span className="text-orange-600 text-transparent" style={{ WebkitTextStroke: '1px #FF6B00' }}>TALK.</span></h2>
                     <p className="text-xl text-slate-400 mb-16 leading-relaxed">Our R&D department is ready to evaluate your blueprints. We respond to all professional manufacturing inquiries within 24 hours.</p>
                     
                     <div className="space-y-12">
                        <div className="flex gap-8">
                           <div className="w-16 h-16 bg-white/5 rounded-sm flex items-center justify-center text-orange-600"><Globe size={32} /></div>
                           <div>
                              <span className="text-[10px] font-black text-orange-600 uppercase tracking-widest block mb-2">Direct Mailbox</span>
                              <a href={`mailto:${contact.email}`} className="text-2xl font-black text-white hover:text-orange-600 transition-colors tracking-tight">{contact.email}</a>
                           </div>
                        </div>
                        <div className="flex gap-8">
                           <div className="w-16 h-16 bg-white/5 rounded-sm flex items-center justify-center text-orange-600"><Factory size={32} /></div>
                           <div>
                              <span className="text-[10px] font-black text-orange-600 uppercase tracking-widest block mb-2">Technical Center</span>
                              <div className="text-2xl font-black text-white tracking-tight">{contact.phone}</div>
                           </div>
                        </div>
                     </div>
                  </div>

                  <div className="bg-white p-12 lg:p-16 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)]">
                     <form className="space-y-10" onSubmit={(e) => { e.preventDefault(); alert('Request sent successfully!'); }}>
                        <div className="space-y-4">
                           <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em]">Full Name</label>
                           <input type="text" required className="w-full border-b border-slate-200 py-4 outline-none focus:border-orange-600 transition-colors font-black text-lg" placeholder="e.g. Robert Smith" />
                        </div>
                        <div className="space-y-4">
                           <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em]">Email Address</label>
                           <input type="email" required className="w-full border-b border-slate-200 py-4 outline-none focus:border-orange-600 transition-colors font-black text-lg" placeholder="your@brand.com" />
                        </div>
                        <div className="space-y-4">
                           <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em]">Project Description</label>
                           <textarea rows={4} required className="w-full border-b border-slate-200 py-4 outline-none focus:border-orange-600 transition-colors font-black text-lg resize-none" placeholder="Tell us about your needs..." />
                        </div>
                        <button type="submit" className="w-full py-6 bg-orange-600 text-white font-black text-sm uppercase tracking-[0.2em] hover:bg-slate-900 transition-all flex items-center justify-center gap-3">
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
