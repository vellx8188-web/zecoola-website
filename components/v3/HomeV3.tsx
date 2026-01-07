
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Zap, Globe, Factory, Microscope, Layers, ShieldCheck } from 'lucide-react';
import { CONTENT, BRANDS, PARTNER_SHOES } from '../../constants';
import { useLanguage } from '../../LanguageContext';

const HomeV3: React.FC = () => {
  const { language } = useLanguage();
  
  // Define animation variants with explicit casting to avoid Framer Motion TypeScript inference issues
  const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    // Fix: cast ease to any to prevent TypeScript from incorrectly identifying it as an array of easings
    transition: { duration: 0.8, ease: [0.23, 1, 0.32, 1] as any }
  };

  return (
    <div className="bg-[#050505] text-slate-100 bg-grain min-h-screen">
      
      {/* SECTION 01: HERO - 极致视差标题 */}
      <section id="home" className="relative h-[110vh] flex flex-col justify-center items-center px-6 overflow-hidden">
        {/* 背景光晕 */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100vw] h-[100vw] bg-orange-600/10 rounded-full blur-[180px] pointer-events-none animate-pulse"></div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
          className="relative z-10 text-center"
        >
          <div className="flex items-center justify-center gap-4 mb-10">
             <div className="w-12 h-px bg-orange-600"></div>
             <span className="text-orange-600 text-[10px] font-black uppercase tracking-[1em]">EST. 1974 / GLOBAL FOUNDRY</span>
             <div className="w-12 h-px bg-orange-600"></div>
          </div>
          
          <h1 className="text-[18vw] md:text-[14rem] font-black leading-[0.7] tracking-tighter uppercase italic mb-10">
            <span className="block text-white">THE</span>
            <span className="block v3-stroke-text">FUTURE.</span>
          </h1>
          
          <p className="max-w-2xl mx-auto text-slate-400 text-lg md:text-2xl font-bold italic leading-relaxed mb-16 opacity-80">
            {CONTENT.home.hero.h2[language]}
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
             <button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} className="px-16 py-6 bg-orange-600 text-white font-black text-[11px] uppercase tracking-[0.6em] rounded-full hover:bg-white hover:text-orange-600 transition-all shadow-[0_0_40px_rgba(234,88,12,0.3)]">
                START PARTNERSHIP
             </button>
             <button onClick={() => document.getElementById('showcase')?.scrollIntoView({ behavior: 'smooth' })} className="px-16 py-6 border border-white/10 text-white font-black text-[11px] uppercase tracking-[0.6em] rounded-full hover:bg-white/5 transition-all">
                VIEW DOSSIER
             </button>
          </div>
        </motion.div>

        {/* 底部滚动提示 */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-30">
           <span className="text-[8px] font-black uppercase tracking-widest">Scroll to Explore</span>
           <div className="w-px h-16 bg-gradient-to-b from-orange-600 to-transparent"></div>
        </div>
      </section>

      {/* SECTION 02: BENTO SHOWCASE - 图片展示核心优化 */}
      <section id="showcase" className="py-40 relative z-10 bg-[#080808]">
        <div className="container mx-auto px-6 lg:px-24">
           <div className="grid lg:grid-cols-2 gap-20 items-end mb-32">
              {/* Fix: spreading variants onto motion component */}
              <motion.div {...fadeInUp}>
                 <span className="text-orange-600 font-black text-[11px] uppercase tracking-[0.7em] mb-6 block">Archive / 展示</span>
                 <h2 className="text-6xl md:text-9xl font-black tracking-tighter uppercase italic leading-none">
                   TECH <br/> <span className="text-orange-600">GALLERY.</span>
                 </h2>
              </motion.div>
              {/* Fix: Explicitly merging transition to avoid TypeScript errors and prop conflicts */}
              <motion.div 
                initial={fadeInUp.initial}
                whileInView={fadeInUp.whileInView}
                viewport={fadeInUp.viewport}
                transition={{ ...fadeInUp.transition, delay: 0.2 }} 
                className="max-w-md border-l-2 border-orange-600 pl-10"
              >
                 <p className="text-slate-500 font-bold uppercase italic tracking-wider leading-relaxed text-sm">
                   这里展示了我们最前沿的研发成果。通过移除传统遮罩，每一张样品的细节都以 100% 的真实度呈现。
                 </p>
              </motion.div>
           </div>

           {/* 12列 Bento 网格布局 */}
           <div className="grid grid-cols-1 md:grid-cols-12 gap-8 auto-rows-[350px] md:auto-rows-[450px]">
              
              {/* 大主图展示卡片 - 绝对视觉重心 */}
              {/* Fix: spreading variants onto motion component */}
              <motion.div 
                {...fadeInUp}
                className="md:col-span-8 md:row-span-2 relative group overflow-hidden rounded-[3rem] border border-white/5 bg-[#0a0a0a] shadow-[0_0_60px_rgba(0,0,0,0.5)]"
              >
                 <img 
                   src="/showcase-main.webp" 
                   className="absolute inset-0 w-full h-full object-cover transition-all duration-[8s] ease-out group-hover:scale-110" 
                   alt="Main Exhibit"
                   onError={(e) => { e.currentTarget.style.opacity = '0.1'; }}
                 />
                 {/* 极其轻微的底部渐变，仅为衬托文字 */}
                 <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60"></div>
                 
                 <div className="absolute bottom-12 left-12 right-12 flex justify-between items-end z-20">
                    <div>
                       <span className="bg-orange-600 px-3 py-1 text-[8px] font-black uppercase tracking-widest mb-4 inline-block">2024 Reference</span>
                       <h3 className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter">ULTRA PERFORMANCE V3</h3>
                    </div>
                    <div className="hidden md:block text-right">
                       <p className="text-[10px] font-black text-white/40 uppercase tracking-widest">Dongguan R&D Facility</p>
                    </div>
                 </div>
              </motion.div>

              {/* 右侧数据卡片 */}
              {/* Fix: Explicitly merging transition to avoid TypeScript errors and prop conflicts */}
              <motion.div 
                initial={fadeInUp.initial}
                whileInView={fadeInUp.whileInView}
                viewport={fadeInUp.viewport}
                transition={{ ...fadeInUp.transition, delay: 0.2 }}
                className="md:col-span-4 bg-orange-600 rounded-[3rem] p-12 flex flex-col justify-between group overflow-hidden relative shadow-2xl"
              >
                 <Zap className="absolute -right-8 -top-8 text-white/10 w-48 h-48 group-hover:rotate-12 transition-transform" />
                 <h4 className="text-4xl font-black uppercase italic tracking-tighter leading-none relative z-10">50+ YEARS <br/>EXPERTISE.</h4>
                 <div className="relative z-10">
                    <p className="text-white font-bold text-[10px] uppercase tracking-[0.2em] mb-6 opacity-80">我们深耕鞋业五十载，为全球顶级品牌提供智造支持。</p>
                    <button className="flex items-center gap-4 text-white font-black text-[11px] uppercase tracking-widest group-hover:translate-x-3 transition-transform">
                       OUR STORY <ArrowRight size={18} />
                    </button>
                 </div>
              </motion.div>

              {/* 下方详细指标卡片 */}
              {/* Fix: Explicitly merging transition to avoid TypeScript errors and prop conflicts */}
              <motion.div 
                initial={fadeInUp.initial}
                whileInView={fadeInUp.whileInView}
                viewport={fadeInUp.viewport}
                transition={{ ...fadeInUp.transition, delay: 0.3 }}
                className="md:col-span-4 bg-[#111] rounded-[3rem] p-12 border border-white/5 flex flex-col justify-between group hover:bg-white hover:text-black transition-all duration-700"
              >
                 <Microscope className="text-orange-600 mb-8" size={40} />
                 <div>
                    <h4 className="text-2xl font-black uppercase italic tracking-tighter mb-4">PRECISION R&D</h4>
                    <p className="text-sm font-bold opacity-40 uppercase tracking-widest leading-relaxed">内设国家级实验室，确保每一项物理指标均超越行业标准。</p>
                 </div>
              </motion.div>

              {/* 底部全宽轮播组 - Instagram 风格 */}
              {/* Fix: spreading variants onto motion component */}
              <motion.div 
                {...fadeInUp}
                className="md:col-span-12 relative overflow-hidden rounded-[3rem] border border-white/5 bg-[#050505] py-16"
              >
                 <div className="px-12 mb-12 flex justify-between items-center">
                    <span className="text-white/40 font-black text-[10px] uppercase tracking-[0.4em]">Section / Component Series</span>
                    <div className="flex gap-2">
                       <div className="w-1.5 h-1.5 rounded-full bg-orange-600"></div>
                       <div className="w-1.5 h-1.5 rounded-full bg-white/20"></div>
                       <div className="w-1.5 h-1.5 rounded-full bg-white/20"></div>
                    </div>
                 </div>
                 
                 <motion.div 
                   className="flex gap-8 px-12"
                   animate={{ x: [0, -1200] }}
                   transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                   style={{ width: 'max-content' }}
                 >
                    {[...PARTNER_SHOES, ...PARTNER_SHOES].map((shoe, i) => (
                      <div key={i} className="w-[300px] md:w-[400px] aspect-[3/4] rounded-[2rem] overflow-hidden grayscale hover:grayscale-0 transition-all duration-700 group relative bg-slate-900 border border-white/5">
                        <img src={shoe.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[4s]" alt="Shoe Part" />
                        <div className="absolute inset-x-6 bottom-8 p-6 bg-black/60 backdrop-blur-xl rounded-2xl border border-white/10 opacity-0 group-hover:opacity-100 transition-all translate-y-4 group-hover:translate-y-0">
                           <span className="text-orange-500 text-[8px] font-black uppercase tracking-widest block mb-1">Authenticated Exhibit</span>
                           <h5 className="text-white text-lg font-black italic uppercase tracking-tighter">{shoe.tag}</h5>
                        </div>
                      </div>
                    ))}
                 </motion.div>
              </motion.div>
           </div>
        </div>
      </section>

      {/* SECTION 03: INFRASTRUCTURE - 工业动效 */}
      <section id="capabilities" className="py-40 bg-white text-slate-900">
        <div className="container mx-auto px-6 lg:px-24">
           <div className="grid lg:grid-cols-3 gap-16">
              {[
                { icon: Factory, title: 'Smart Factory', desc: '智能化生产线，支持小起订量与柔性生产。' },
                { icon: ShieldCheck, title: 'Quality Shield', desc: '全流程质检闭环，确保 0 缺陷交付。' },
                { icon: Layers, title: 'Advanced IP', desc: '深厚的材料科学储备，提供专利级解决方案。' }
              ].map((item, i) => (
                <motion.div 
                  key={i} 
                  initial={fadeInUp.initial}
                  whileInView={fadeInUp.whileInView}
                  viewport={fadeInUp.viewport}
                  transition={{ ...fadeInUp.transition, delay: i * 0.1 }}
                  className="group"
                >
                   <div className="w-20 h-20 bg-slate-100 rounded-3xl flex items-center justify-center text-orange-600 mb-10 group-hover:bg-orange-600 group-hover:text-white transition-all shadow-sm">
                      <item.icon size={36} />
                   </div>
                   <h3 className="text-3xl font-black uppercase italic tracking-tighter mb-6">{item.title}</h3>
                   <p className="text-slate-500 font-bold leading-relaxed border-l-2 border-slate-200 pl-6">{item.desc}</p>
                </motion.div>
              ))}
           </div>
        </div>
      </section>

      {/* SECTION 04: CONTACT - V3 黑暗沉浸版 */}
      <section id="contact" className="py-40 bg-[#050505] relative overflow-hidden border-t border-white/5">
         <div className="container mx-auto px-6 lg:px-24 relative z-10">
            <div className="grid lg:grid-cols-2 gap-32">
               <div>
                  <h2 className="text-7xl lg:text-[10rem] font-black tracking-tighter uppercase italic leading-[0.75] mb-16">
                    <span className="block text-white">LET'S</span>
                    <span className="block text-orange-600">TALK.</span>
                  </h2>
                  <div className="space-y-16">
                     <div className="flex items-center gap-10 group cursor-pointer">
                        <div className="w-24 h-24 bg-white/5 rounded-[2rem] flex items-center justify-center text-orange-600 border border-white/10 group-hover:bg-orange-600 group-hover:text-white transition-all duration-500">
                           <Globe size={40} />
                        </div>
                        <div>
                           <span className="text-[10px] font-black text-white/30 uppercase tracking-[0.5em] mb-2 block">Global Inquiries</span>
                           <div className="text-3xl font-black italic tracking-tighter group-hover:text-orange-600 transition-colors">info@zecoola.com</div>
                        </div>
                     </div>
                     <div className="flex items-center gap-10 group cursor-pointer">
                        <div className="w-24 h-24 bg-white/5 rounded-[2rem] flex items-center justify-center text-orange-600 border border-white/10 group-hover:bg-orange-600 group-hover:text-white transition-all duration-500">
                           <Factory size={40} />
                        </div>
                        <div>
                           <span className="text-[10px] font-black text-white/30 uppercase tracking-[0.5em] mb-2 block">Technical Support</span>
                           <div className="text-3xl font-black italic tracking-tighter group-hover:text-orange-600 transition-colors">(0769) 8121-1559</div>
                        </div>
                     </div>
                  </div>
               </div>

               <div className="bg-white p-16 rounded-[4rem] shadow-2xl relative">
                  {/* 表单浮窗效果 */}
                  <form className="space-y-10" onSubmit={(e) => { e.preventDefault(); alert('Request Encrypted & Sent.'); }}>
                     <div className="space-y-4">
                        <label className="text-[10px] font-black text-slate-300 uppercase tracking-widest ml-4">Full Identity</label>
                        <input type="text" placeholder="Individual / Organization" className="w-full bg-slate-50 border-b-2 border-slate-200 py-6 px-4 font-black text-2xl text-slate-900 outline-none focus:border-orange-600 transition-all" required />
                     </div>
                     <div className="space-y-4">
                        <label className="text-[10px] font-black text-slate-300 uppercase tracking-widest ml-4">Direct Channel</label>
                        <input type="email" placeholder="official@domain.com" className="w-full bg-slate-50 border-b-2 border-slate-200 py-6 px-4 font-black text-2xl text-slate-900 outline-none focus:border-orange-600 transition-all" required />
                     </div>
                     <div className="space-y-4">
                        <label className="text-[10px] font-black text-slate-300 uppercase tracking-widest ml-4">Briefing</label>
                        <textarea rows={3} placeholder="Tell us about your next big thing..." className="w-full bg-slate-50 border-b-2 border-slate-200 py-6 px-4 font-black text-2xl text-slate-900 outline-none focus:border-orange-600 transition-all resize-none" required></textarea>
                     </div>
                     <button className="w-full py-8 bg-orange-600 text-white font-black text-[12px] uppercase tracking-[0.8em] rounded-full hover:bg-black transition-all shadow-2xl shadow-orange-600/30 group">
                        INITIALIZE CONTRACT <ArrowRight size={20} className="inline-block ml-4 group-hover:translate-x-4 transition-transform" />
                     </button>
                  </form>
               </div>
            </div>
         </div>
         
         <div className="mt-40 border-t border-white/5 py-12 text-center opacity-20">
            <span className="text-[10px] font-black uppercase tracking-[0.6em]">© Zecoola Shoes / Ultimate Edition v3.0</span>
         </div>
      </section>
    </div>
  );
};

export default HomeV3;
