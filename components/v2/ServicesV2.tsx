
import React from 'react';
import { Settings, PenTool, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../../LanguageContext';

const ServicesV2: React.FC = () => {
  const { language } = useLanguage();

  return (
    <div className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
           <h1 className="text-4xl lg:text-5xl font-black text-slate-900 mb-6">OEM & ODM Solutions</h1>
           <p className="text-slate-500 max-w-2xl mx-auto text-lg">Our structured service models provide clarity and efficiency from initial design to final shipment.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
           {/* OEM */}
           <div className="relative group p-10 bg-slate-50 rounded-3xl border border-slate-100 hover:shadow-2xl transition-all">
              <div className="flex items-center gap-4 mb-8">
                 <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-orange-600 shadow-sm"><Settings size={32} /></div>
                 <h2 className="text-3xl font-black text-slate-900">OEM Manufacturing</h2>
              </div>
              <p className="text-slate-600 mb-8 text-lg leading-relaxed">We manufacture strictly according to your designs, specifications, and brand standards. Our expertise ensures precise execution of even the most complex technical shoe structures.</p>
              <ul className="space-y-4">
                 {['Precise technical blueprint execution', 'Material sourcing & supply chain management', 'Strict adherence to brand quality manuals', 'High-volume production efficiency'].map((li, i) => (
                   <li key={i} className="flex items-center gap-3 font-bold text-slate-800"><CheckCircle2 size={18} className="text-orange-600" /> {li}</li>
                 ))}
              </ul>
           </div>

           {/* ODM */}
           <div className="relative group p-10 bg-slate-900 rounded-3xl text-white hover:shadow-2xl transition-all">
              <div className="flex items-center gap-4 mb-8">
                 <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center text-orange-500 shadow-sm"><PenTool size={32} /></div>
                 <h2 className="text-3xl font-black text-white">ODM Development</h2>
              </div>
              <p className="text-slate-400 mb-8 text-lg leading-relaxed">We support product development with material selection, construction suggestions, and cost optimization. Perfect for brands looking to leverage our 50 years of design expertise.</p>
              <ul className="space-y-4">
                 {['Concept-to-market design support', 'Material innovation & performance consulting', 'Cost-effective construction optimization', 'Proprietary technology integration'].map((li, i) => (
                   <li key={i} className="flex items-center gap-3 font-bold text-white/90"><CheckCircle2 size={18} className="text-orange-500" /> {li}</li>
                 ))}
              </ul>
           </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesV2;
