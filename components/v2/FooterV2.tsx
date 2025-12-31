
import React from 'react';
import { CONTENT } from '../../constants';
import { useLanguage } from '../../LanguageContext';

const FooterV2: React.FC = () => {
  const { language } = useLanguage();

  return (
    <footer className="bg-white border-t py-12">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-2">
           <div className="text-2xl font-black text-slate-900">ZECOOLA<span className="text-orange-600">.</span></div>
        </div>
        <p className="text-slate-400 text-sm font-bold uppercase tracking-widest text-center">
          {CONTENT.footer.rights[language]}
        </p>
        <div className="text-xs text-slate-300 font-bold">
           GLOBAL HEADQUARTERS: DONGGUAN, CHINA
        </div>
      </div>
    </footer>
  );
};

export default FooterV2;
