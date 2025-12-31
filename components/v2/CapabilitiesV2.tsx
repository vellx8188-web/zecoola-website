
import React from 'react';
import { ShieldCheck, Layers, Factory, Microscope } from 'lucide-react';
import { CONTENT } from '../../constants';
import { useLanguage } from '../../LanguageContext';

const CapabilitiesV2: React.FC = () => {
  const { language } = useLanguage();
  const data = CONTENT.capabilities;

  const sections = [
    { title: { en: 'Manufacturing Capabilities', zh: '制造实力' }, items: data.manufacturing, icon: Factory },
    { title: { en: 'Materials Expertise', zh: '材料专长' }, items: data.materials, icon: Layers },
    { title: { en: 'Quality Control', zh: '品质保障' }, items: data.qc, icon: ShieldCheck },
  ];

  return (
    <div className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h1 className="text-5xl font-black text-slate-900 mb-6 uppercase tracking-tight">Capabilities <span className="text-orange-600">&</span> Tech</h1>
          <p className="text-lg text-slate-500">
            {language === 'en' 
              ? 'We deploy advanced engineering and rigorous testing to ensure every pair of shoes meets world-class industrial benchmarks.'
              : '我们运用先进的工程技术和严苛的测试，确保每一双鞋都符合世界级工业基准。'}
          </p>
        </div>

        <div className="space-y-12">
           {sections.map((sec, i) => (
             <div key={i} className="group p-10 bg-slate-50 rounded-3xl border border-slate-100 hover:border-orange-200 transition-all">
                <div className="flex flex-col md:flex-row md:items-center gap-8">
                   <div className="w-20 h-20 bg-white rounded-2xl shadow-sm flex items-center justify-center text-orange-600 border border-slate-100">
                      <sec.icon size={40} />
                   </div>
                   <div className="flex-1">
                      <h3 className="text-2xl font-black text-slate-900 mb-6">{sec.title[language]}</h3>
                      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {sec.items.map((item, j) => (
                          <div key={j} className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-sm">
                             <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
                             <span className="font-bold text-slate-700 text-sm">{item[language]}</span>
                          </div>
                        ))}
                      </div>
                   </div>
                </div>
             </div>
           ))}
        </div>

        <div className="mt-20 p-12 bg-orange-600 rounded-3xl text-white text-center">
           <h4 className="text-3xl font-black mb-4">Need Technical Specifications?</h4>
           <p className="text-white/80 mb-8 max-w-lg mx-auto font-medium">Connect with our R&D engineers to discuss material configurations and performance requirements.</p>
           <button className="px-10 py-4 bg-white text-orange-600 font-black rounded-xl hover:bg-slate-50 transition-colors">Contact Our Engineering Team</button>
        </div>
      </div>
    </div>
  );
};

export default CapabilitiesV2;
