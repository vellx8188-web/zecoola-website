
import React from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';
import { CONTENT } from '../constants';

const ComingSoon: React.FC = () => {
  const contact = CONTENT.contact;

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-6 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-2 bg-zecoola-orange"></div>
      
      <div className="max-w-2xl w-full text-center relative z-10">
        <div className="flex flex-col items-center mb-12">
            <div className="text-4xl md:text-5xl font-black tracking-widest font-montserrat flex items-baseline text-zecoola-orange">
                <span>ZECOOL</span>
                <span className="transform -skew-x-12 inline-block ml-1">A</span>
            </div>
        </div>

        <h1 className="text-5xl md:text-7xl font-black text-slate-800 mb-6 font-montserrat">
          COMING <span className="text-zecoola-orange">SOON</span>
        </h1>
        <p className="text-xl text-slate-500 mb-12 leading-relaxed max-w-lg mx-auto">
          We are currently working hard to build a new digital experience for you. 
          Our professional footwear manufacturing website is launching shortly.
          <br/>
          <span className="text-sm mt-2 block opacity-75">系统已准备就绪，正在尝试渲染核心组件...</span>
        </p>

        <div className="w-16 h-1 bg-slate-200 mx-auto mb-12"></div>

        <div className="bg-white p-8 rounded-2xl shadow-xl border border-slate-100">
          <h3 className="text-lg font-bold text-slate-800 mb-6 uppercase tracking-wider">Get in Touch</h3>
          <div className="flex flex-col gap-6 items-center md:items-start text-left">
            <div className="flex items-center gap-4 w-full">
              <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center text-zecoola-orange flex-shrink-0">
                <Mail size={20} />
              </div>
              <div>
                <p className="text-xs text-slate-400 font-bold uppercase">Email</p>
                <a href={`mailto:${contact.emailAddress}`} className="text-slate-700 font-medium hover:text-zecoola-orange transition-colors">
                  {contact.emailAddress}
                </a>
              </div>
            </div>
            <div className="flex items-center gap-4 w-full">
              <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center text-zecoola-orange flex-shrink-0">
                <Phone size={20} />
              </div>
              <div>
                <p className="text-xs text-slate-400 font-bold uppercase">Phone</p>
                <p className="text-slate-700 font-medium font-mono">{contact.phoneNumber}</p>
              </div>
            </div>
             <div className="flex items-center gap-4 w-full">
              <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center text-zecoola-orange flex-shrink-0">
                <MapPin size={20} />
              </div>
              <div>
                <p className="text-xs text-slate-400 font-bold uppercase">Location</p>
                <p className="text-slate-700 font-medium text-sm leading-snug max-w-xs">
                  Houjie Town, Dongguan City, China
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;
