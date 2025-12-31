
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Globe, Award, Microscope, Factory, ShieldCheck } from 'lucide-react';
import { CONTENT, BRANDS } from '../../constants';
import { useLanguage } from '../../LanguageContext';

const HomeV2: React.FC = () => {
  const { language } = useLanguage();
  const contact = CONTENT.contact;

  const fadeInUp = {
    initial: { opacity: 0, y: 50 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8 }
  };

  return (
    <div className="bg-white">
      
      {/* Heritage Section */}
      <section id="about" className="py-40 bg-white">
        <div className="container mx-auto px-6 lg:px-20">
          <div className="grid lg:grid-cols-2 gap-32 items-start">
            <motion.div {...fadeInUp} className="sticky top-40">
              <span className="text-orange-600 font-black text-sm uppercase tracking-[0.6em] mb-6 block">Legacy of Excellence</span>
              <h2 className="text-8xl lg:text-[12rem] font-black text-slate-950 leading-[0.8] tracking-tighter uppercase italic">
                THE <br/> <span className="text-orange-600">HERITAGE.</span>
              </h2>
            </motion.div>
            <div className="space-y-20 lg:pt-40">
               <div className="text-4xl font-bold text-slate-400 leading-tight border-l-12 border-orange-600 pl-12 italic">
                 {CONTENT.aboutPage.whoWeAre.content[language]}
               </div>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div className="bg-slate-50 p-16 aspect-square flex flex-col justify-between group hover:bg-orange-600 transition-colors duration-700">
                    <h3 className="text-xs font-black text-orange-600 group-hover:text-white uppercase tracking-widest">01 / Mission</h3>
                    <p className="text-slate-950 group-hover:text-white text-4xl font-black uppercase leading-tight italic tracking-tighter">{CONTENT.aboutPage.mission.mText[language]}</p>
                  </div>
                  <div className="bg-slate-950 p-16 aspect-square text-white flex flex-col justify-between relative overflow-hidden group">
                    <Globe size={180} className="absolute -right-20 -bottom-20 opacity-5 group-hover:scale-110 transition-transform duration-1000" />
                    <h3 className="text-xs font-black text-orange-600 uppercase tracking-widest">02 / Vision</h3>
                    <p className="text-white text-4xl font-black uppercase leading-tight italic tracking-tighter relative z-10">{CONTENT.aboutPage.mission.vText[language]}</p>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Partners Logo Wall */}
      <section className="py-32 bg-slate-50 border-y border-slate-100 overflow-hidden">
        <div className="container mx-auto px-6 lg:px-20">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-10">
             <div className="max-w-3xl">
                <span className="text-orange-600 font-black text-xs uppercase tracking-[0.6em] mb-4 block">Trusted Archive 2016-2025</span>
                <h2 className="text-6xl lg:text-8xl font-black text-slate-950 tracking-tighter uppercase italic leading-none">STRATEGIC <br/>PARTNERSHIPS.</h2>
             </div>
             <p className="text-slate-400 font-medium text-xl lg:text-right max-w-sm">Built on 50 years of collective footwear intelligence and global supply chain excellence.</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-px bg-slate-200 border border-slate-200">
             {BRANDS.map((brand, i) => (
                <div key={i} className="bg-white p-12 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-700 aspect-[3/2] group relative">
                   <img src={brand.image} alt="Partner" className="max-h-full max-w-full object-contain opacity-30 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500" />
                </div>
             ))}
          </div>
        </div>
      </section>

      {/* Technical Capabilities */}
      <section id="capabilities" className="py-40 bg-white">
        <div className="container mx-auto px-6 lg:px-20">
           <div className="grid lg:grid-cols-3 gap-px bg-slate-100 shadow-2xl border border-slate-100">
              {[
                { icon: Factory, title: 'ENGINEERING', desc: 'Precision industrial assembly lines adhering to global ISO protocols.' },
                { icon: Microscope, title: 'R&D FACILITY', desc: 'Advanced material science and technical prototyping laboratory.' },
                { icon: ShieldCheck, title: 'FIDELITY QC', desc: 'Multi-stage validation testing ensuring 100% production fidelity.' }
              ].map((item, i) => (
                <motion.div key={i} {...fadeInUp} className="bg-white p-20 hover:bg-slate-950 group transition-all duration-700 cursor-default">
                   <div className="text-orange-600 mb-16 group-hover:scale-110 transition-transform duration-500"><item.icon size={80} strokeWidth={1} /></div>
                   <h3 className="text-4xl font-black mb-8 uppercase tracking-tighter group-hover:text-white transition-colors italic">{item.title}</h3>
                   <p className="text-slate-500 text-xl leading-relaxed group-hover:text-white/40 transition-colors font-medium">{item.desc}</p>
                </motion.div>
              ))}
           </div>
        </div>
      </section>

      {/* Technical Showcase */}
      <section id="showcase" className="py-40 bg-slate-950 text-white relative">
        <div className="container mx-auto px-6 lg:px-20">
           <div className="mb-32">
              <span className="text-orange-600 font-black text-xs uppercase tracking-[0.6em] mb-6 block">Project Archive</span>
              <h2 className="text-[12rem] lg:text-[18rem] font-black tracking-tighter leading-[0.7] uppercase text-white/5 select-none -ml-10 italic">PRODUCTS.</h2>
           </div>

           <div className="grid lg:grid-cols-12 gap-12 items-center">
              <motion.div {...fadeInUp} className="lg:col-span-8 group relative overflow-hidden rounded-sm aspect-[16/10] shadow-2xl">
                 <img src="/showcase-main.webp" className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-[4s]" />
                 <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
                 <div className="absolute bottom-20 left-20">
                    <h3 className="text-6xl font-black mb-10 uppercase italic tracking-tighter leading-none">HIGH-PERFORMANCE <br/>TECHNICAL GEAR</h3>
                    <button className="px-12 py-6 border-2 border-white/20 text-[11px] font-black uppercase tracking-widest hover:bg-white hover:text-slate-950 transition-all">VIEW SPECIFICATIONS</button>
                 </div>
              </motion.div>
              <div className="lg:col-span-4 space-y-20 p-12 bg-slate-900/50 border border-white/5 backdrop-blur-sm">
                 <div className="space-y-10">
                    <div className="w-20 h-1 bg-orange-600" />
                    <p className="text-4xl font-black leading-tight text-white uppercase italic tracking-tighter">"Extreme precision at the intersection of tech and style."</p>
                 </div>
                 <div className="grid grid-cols-1 gap-10">
                    <div className="border-l-4 border-white/10 pl-10">
                       <div className="text-6xl font-black text-white mb-2 tracking-tighter italic">50+</div>
                       <div className="text-[11px] font-black text-slate-500 uppercase tracking-widest">Years Industry Expertise</div>
                    </div>
                    <div className="border-l-4 border-white/10 pl-10">
                       <div className="text-6xl font-black text-white mb-2 tracking-tighter italic">100%</div>
                       <div className="text-[11px] font-black text-slate-500 uppercase tracking-widest">Quality Fidelity Rate</div>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-40 bg-white">
        <div className="container mx-auto px-6 lg:px-20">
           <div className="grid lg:grid-cols-2 gap-32">
              <div>
                 <h2 className="text-8xl lg:text-[11rem] font-black text-slate-950 mb-16 tracking-tighter leading-[0.8] uppercase italic">LET'S <br/> <span className="text-orange-600 underline underline-offset-[20px] decoration-12">TALK.</span></h2>
                 <p className="text-2xl text-slate-400 mb-20 leading-relaxed font-medium italic">Our technical headquarters in Dongguan responds to all RFQs within 24 hours.</p>
                 <div className="space-y-12">
                    <div className="flex gap-10 group cursor-pointer">
                       <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center text-orange-600 group-hover:bg-orange-600 group-hover:text-white transition-all duration-500 shadow-sm"><Factory size={36} /></div>
                       <div><span className="text-[11px] font-black text-slate-400 uppercase tracking-widest block mb-2">Technical HQ</span><div className="text-3xl font-black text-slate-950 tracking-tighter italic">{contact.phone}</div></div>
                    </div>
                    <div className="flex gap-10 group cursor-pointer">
                       <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center text-orange-600 group-hover:bg-orange-600 group-hover:text-white transition-all duration-500 shadow-sm"><Globe size={36} /></div>
                       <div><span className="text-[11px] font-black text-slate-400 uppercase tracking-widest block mb-2">Global Inquiry</span><div className="text-3xl font-black text-slate-950 underline decoration-orange-600/30 group-hover:decoration-orange-600 transition-all tracking-tighter italic">{contact.email}</div></div>
                    </div>
                 </div>
              </div>
              <div className="bg-slate-950 p-16 lg:p-24 shadow-2xl relative overflow-hidden">
                 <div className="absolute top-0 right-0 w-full h-full opacity-5 pointer-events-none bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:40px_40px]" />
                 <form className="space-y-12 relative z-10" onSubmit={(e) => { e.preventDefault(); alert('Inquiry Sent!'); }}>
                    <div className="space-y-4">
                       <label className="text-[11px] font-black text-slate-500 uppercase tracking-[0.5em]">Project Identity</label>
                       <input type="text" placeholder="Full Name / Brand" className="w-full bg-transparent border-b-2 border-slate-800 py-6 outline-none focus:border-orange-600 transition-colors font-black text-2xl text-white placeholder:text-slate-800" required />
                    </div>
                    <div className="space-y-4">
                       <label className="text-[11px] font-black text-slate-500 uppercase tracking-[0.5em]">Communication</label>
                       <input type="email" placeholder="email@brand.com" className="w-full bg-transparent border-b-2 border-slate-800 py-6 outline-none focus:border-orange-600 transition-colors font-black text-2xl text-white placeholder:text-slate-800" required />
                    </div>
                    <div className="space-y-4">
                       <label className="text-[11px] font-black text-slate-500 uppercase tracking-[0.5em]">Engineering Brief</label>
                       <textarea placeholder="Technical details..." className="w-full bg-transparent border-b-2 border-slate-800 py-6 outline-none focus:border-orange-600 transition-colors font-black text-2xl text-white placeholder:text-slate-800 resize-none" rows={3} required />
                    </div>
                    <button className="w-full py-8 bg-orange-600 text-white font-black text-sm uppercase tracking-[0.5em] hover:bg-white hover:text-slate-950 transition-all flex items-center justify-center gap-6 shadow-2xl">
                       SUBMIT INQUIRY <ArrowRight size={22} />
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
