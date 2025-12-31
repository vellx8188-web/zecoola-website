
import React, { useState } from 'react';
import { Mail, Phone, ArrowRight, MessageSquare, ShieldCheck, CheckCircle2, Send } from 'lucide-react';
import { CONTENT } from '../../constants';
import { useLanguage } from '../../LanguageContext';

const ContactV2: React.FC = () => {
  const { language } = useLanguage();
  const data = CONTENT.contact;
  const [status, setStatus] = useState<'idle' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('success');
  };

  return (
    <div className="bg-white min-h-screen">
      {/* 头部装饰 */}
      <div className="bg-slate-900 py-24 text-center">
         <div className="container mx-auto px-6">
            <h1 className="text-5xl lg:text-7xl font-black text-white mb-6 tracking-tight">{data.title[language]}</h1>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">{data.desc[language]}</p>
         </div>
      </div>

      <div className="container mx-auto px-6 -mt-16 pb-32">
        <div className="grid lg:grid-cols-12 gap-8">
           {/* 左侧：联系信息 */}
           <div className="lg:col-span-5 space-y-6">
              <div className="bg-white p-10 rounded-[2rem] shadow-xl border border-slate-50 h-full">
                 <div className="flex items-center gap-3 mb-12 text-[#FF6B00]">
                    <ShieldCheck size={28} />
                    <span className="font-black text-sm uppercase tracking-widest">Global Service Response</span>
                 </div>

                 <div className="space-y-12">
                    <div className="flex gap-6">
                       <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center text-[#FF6B00] flex-shrink-0 shadow-sm"><Mail size={28} /></div>
                       <div>
                          <p className="text-xs font-black text-slate-400 uppercase mb-1">Official Email</p>
                          <a href={`mailto:${data.email}`} className="text-2xl font-black text-slate-900 hover:text-[#FF6B00] transition-colors">{data.email}</a>
                       </div>
                    </div>

                    <div className="flex gap-6">
                       <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center text-[#FF6B00] flex-shrink-0 shadow-sm"><MessageSquare size={28} /></div>
                       <div>
                          <p className="text-xs font-black text-slate-400 uppercase mb-1">WhatsApp / Messenger</p>
                          <div className="text-2xl font-black text-slate-900">+86 138-XXXX-XXXX</div>
                       </div>
                    </div>

                    <div className="flex gap-6">
                       <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center text-[#FF6B00] flex-shrink-0 shadow-sm"><Phone size={28} /></div>
                       <div>
                          <p className="text-xs font-black text-slate-400 uppercase mb-1">Direct Call</p>
                          <div className="text-2xl font-black text-slate-900">{data.phone}</div>
                       </div>
                    </div>
                 </div>

                 <div className="mt-20 p-8 bg-slate-50 rounded-2xl border border-dashed border-slate-200">
                    <h4 className="font-black text-slate-800 mb-2 uppercase tracking-tight">Response Guarantee</h4>
                    <p className="text-sm text-slate-500 font-medium">Our sales engineering team will review your project brief and respond with a preliminary evaluation within 24 hours.</p>
                 </div>
              </div>
           </div>

           {/* 右侧：询盘表单 */}
           <div className="lg:col-span-7">
              <div className="bg-white p-10 lg:p-16 rounded-[2rem] shadow-2xl border border-slate-50">
                {status === 'success' ? (
                   <div className="text-center py-20 animate-in zoom-in duration-500">
                      <div className="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-8">
                         <CheckCircle2 size={48} />
                      </div>
                      <h2 className="text-3xl font-black text-slate-900 mb-4">{data.form.successMessage[language]}</h2>
                      <p className="text-slate-500 font-medium">Our project manager has been notified.</p>
                   </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-8">
                    <div className="grid md:grid-cols-2 gap-8">
                       <div className="space-y-2">
                          <label className="text-xs font-black text-slate-500 uppercase tracking-widest">{data.form.name[language]}</label>
                          <input type="text" required placeholder="Your full name" className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-xl focus:ring-2 focus:ring-orange-600 outline-none transition-all" />
                       </div>
                       <div className="space-y-2">
                          <label className="text-xs font-black text-slate-500 uppercase tracking-widest">{data.form.email[language]}</label>
                          <input type="email" required placeholder="contact@brand.com" className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-xl focus:ring-2 focus:ring-orange-600 outline-none transition-all" />
                       </div>
                    </div>

                    <div className="space-y-2">
                       <label className="text-xs font-black text-slate-500 uppercase tracking-widest">{data.form.phone[language]}</label>
                       <input type="tel" placeholder="+ (Country Code) Number" className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-xl focus:ring-2 focus:ring-orange-600 outline-none transition-all" />
                    </div>

                    <div className="space-y-2">
                       <label className="text-xs font-black text-slate-500 uppercase tracking-widest">{data.form.message[language]}</label>
                       <textarea rows={6} required placeholder="Describe your project requirements (Quantity, Materials, Target Market...)" className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-xl focus:ring-2 focus:ring-orange-600 outline-none transition-all resize-none"></textarea>
                    </div>

                    <button type="submit" className="w-full py-5 bg-[#FF6B00] text-white font-black text-lg rounded-xl shadow-xl shadow-orange-100 flex items-center justify-center gap-3 hover:bg-slate-900 transition-all group">
                       {data.form.submit[language]}
                       <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </button>
                  </form>
                )}
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default ContactV2;
