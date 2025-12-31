
import React from 'react';
import { Mail, Phone, ArrowRight } from 'lucide-react';
import { CONTENT } from '../../constants';
import { useLanguage } from '../../LanguageContext';

const ContactV2: React.FC = () => {
  const { language } = useLanguage();
  const data = CONTENT.contact;

  return (
    <div className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto bg-slate-50 rounded-[3rem] p-12 md:p-20 text-center border border-slate-100 shadow-sm">
           <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-6">{data.title[language]}</h1>
           <p className="text-xl text-slate-500 mb-12">{data.desc[language]}</p>

           <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-16">
              <div className="flex flex-col items-center">
                 <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-orange-600 mb-4 shadow-sm"><Mail size={24} /></div>
                 <a href={`mailto:${data.email}`} className="text-2xl font-black text-slate-900 hover:text-orange-600 transition-colors underline decoration-orange-600 underline-offset-8 decoration-4">{data.email}</a>
              </div>
              <div className="h-20 w-px bg-slate-200 hidden md:block"></div>
              <div className="flex flex-col items-center">
                 <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-orange-600 mb-4 shadow-sm"><Phone size={24} /></div>
                 <div className="text-2xl font-black text-slate-900">{data.phone}</div>
              </div>
           </div>

           <button className="px-12 py-5 bg-orange-600 text-white font-black text-lg rounded-2xl flex items-center gap-4 mx-auto hover:bg-orange-700 transition-all shadow-xl shadow-orange-200">
             Send Request Message <ArrowRight size={24} />
           </button>
        </div>
      </div>
    </div>
  );
};

export default ContactV2;
