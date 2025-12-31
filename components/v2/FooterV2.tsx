
import React from 'react';
import { CONTENT } from '../../constants';
import { useLanguage } from '../../LanguageContext';

const FooterV2: React.FC = () => {
  const { language } = useLanguage();

  return (
    <footer className="bg-white border-t py-20">
      <div className="container mx-auto px-6 lg:px-20">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-20">
          <div className="flex items-center gap-4">
             <img src="/logo.png" alt="Zecoola Icon" className="h-10 w-auto" />
             <div className="flex flex-col">
                <div className="text-3xl font-black text-slate-900 tracking-tighter">ZECOOLA<span className="text-orange-600">.</span></div>
                <div className="text-[8px] font-black text-slate-300 uppercase tracking-widest">Global Manufacturing</div>
             </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-16">
             <div>
                <h5 className="text-[10px] font-black text-slate-300 uppercase tracking-widest mb-6">HQ Address</h5>
                <p className="text-xs font-bold text-slate-500 leading-relaxed max-w-[150px]">
                   Dongguan, Houjie Town, Guangdong, China
                </p>
             </div>
             <div>
                <h5 className="text-[10px] font-black text-slate-300 uppercase tracking-widest mb-6">Contact</h5>
                <p className="text-xs font-bold text-slate-500">info@zecoola.com</p>
                <p className="text-xs font-bold text-slate-500">+86 769 8121 1559</p>
             </div>
             <div className="hidden md:block">
                <h5 className="text-[10px] font-black text-slate-300 uppercase tracking-widest mb-6">Philosophy</h5>
                <p className="text-xs font-bold text-slate-500 italic">"Precision in every stitch."</p>
             </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-8 border-t border-slate-100 pt-12">
          <p className="text-slate-300 text-[10px] font-black uppercase tracking-[0.2em]">
            {CONTENT.footer.rights[language]}
          </p>
          <div className="flex gap-8">
             <a href="#" className="text-[10px] font-black text-slate-400 hover:text-orange-600 transition-colors uppercase tracking-widest">Privacy Policy</a>
             <a href="#" className="text-[10px] font-black text-slate-400 hover:text-orange-600 transition-colors uppercase tracking-widest">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterV2;
