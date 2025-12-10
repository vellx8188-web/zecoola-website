
import React, { useState, useRef } from 'react';
import { MapPin, Phone, Mail, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import * as emailjs from '@emailjs/browser';
import { CONTENT } from '../constants';
import { useLanguage } from '../LanguageContext';

const Contact: React.FC = () => {
  const { language } = useLanguage();
  const { title, desc, addressLabel, address, callLabel, emailLabel, emailAddress, mapLabel, mapSub, form } = CONTENT.contact;

  // Form State
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [validationError, setValidationError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear validation error when user types in email or phone
    if ((name === 'email' || name === 'phone') && validationError) {
      setValidationError(null);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setValidationError(null);

    // Custom Validation: Require either Email OR Phone
    if (!formData.email.trim() && !formData.phone.trim()) {
      setValidationError(form.validationContact[language]);
      return;
    }

    setStatus('submitting');

    const config = CONTENT.emailJS;

    // Check if user has configured the keys
    if (config.serviceId === 'YOUR_SERVICE_ID_HERE' || config.publicKey === 'YOUR_PUBLIC_KEY_HERE') {
      console.warn("EmailJS is not configured. Please update constants.ts with your keys.");
      // Fallback to simulation so UI doesn't break for demo
      setTimeout(() => {
        setStatus('success');
        setFormData({ name: '', email: '', phone: '', message: '' });
        setTimeout(() => setStatus('idle'), 5000);
      }, 1500);
      return;
    }

    try {
      // Send email using EmailJS
      await emailjs.send(
        config.serviceId,
        config.templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone,
          message: formData.message,
          to_email: emailAddress // Using the configured email address
        },
        config.publicKey
      );

      setStatus('success');
      setFormData({ name: '', email: '', phone: '', message: '' });
      setTimeout(() => setStatus('idle'), 8000);
    } catch (error) {
      console.error('FAILED...', error);
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-20 bg-slate-900 text-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          
          {/* LEFT COLUMN: Contact Info */}
          <div className="flex flex-col">
            <h2 className="text-4xl font-bold mb-8 text-zecoola-orange">{title[language]}</h2>
            <p className="text-slate-300 mb-12 text-lg border-l-4 border-zecoola-orange pl-4">
              {desc[language]}
            </p>

            <div className="space-y-10">
              <div className="flex items-start gap-5">
                <div className="bg-slate-800 p-3 rounded-lg text-zecoola-orange">
                   <MapPin size={28} />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2 text-white">{addressLabel[language]}</h4>
                  <p className="text-slate-400 whitespace-pre-line leading-relaxed text-base">
                    {address[language]}
                  </p>
                  <div className="mt-2 text-sm text-slate-500 bg-slate-800/50 p-2 rounded inline-block">
                    {mapLabel[language]} - {mapSub[language]}
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="bg-slate-800 p-3 rounded-lg text-zecoola-orange">
                   <Phone size={28} />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2 text-white">{callLabel[language]}</h4>
                  {/* Phone number updated to plain text as requested */}
                  <div className="text-slate-300 font-mono text-xl">
                    +86 135-2722-6226
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="bg-slate-800 p-3 rounded-lg text-zecoola-orange">
                   <Mail size={28} />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2 text-white">{emailLabel[language]}</h4>
                  <div className="flex flex-col gap-1">
                    <a href={`mailto:${emailAddress}`} className="text-slate-300 text-lg hover:text-zecoola-orange transition-colors">{emailAddress}</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Contact Form */}
          <div className="bg-white rounded-3xl p-8 lg:p-10 shadow-2xl text-slate-800">
             <h3 className="text-2xl font-bold text-zecoola-blue mb-6">
               {language === 'en' ? 'Drop us a line' : '给我们留言'}
             </h3>
             
             {status === 'success' ? (
                <div className="flex flex-col items-center justify-center h-80 text-center animate-fade-in">
                   <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                      <CheckCircle2 size={40} />
                   </div>
                   <h4 className="text-2xl font-bold text-slate-800 mb-2">{language === 'en' ? 'Sent!' : '已发送！'}</h4>
                   <p className="text-slate-500 max-w-xs">{form.successMessage[language]}</p>
                   <button 
                     onClick={() => setStatus('idle')}
                     className="mt-8 text-zecoola-orange font-semibold hover:underline"
                   >
                     {language === 'en' ? 'Send another message' : '发送另一条'}
                   </button>
                </div>
             ) : (
                <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-sm font-semibold text-slate-600 mb-1 ml-1">{form.name[language]}</label>
                    <input 
                      type="text" 
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder={language === 'en' ? "John Doe" : "张三"}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-zecoola-orange focus:border-transparent transition-all"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-semibold text-slate-600 mb-1 ml-1">{form.email[language]}</label>
                      <input 
                        type="email" 
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="name@example.com"
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-zecoola-orange focus:border-transparent transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-slate-600 mb-1 ml-1">{form.phone[language]}</label>
                      <input 
                        type="tel" 
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+X-XXXXXXX" 
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-zecoola-orange focus:border-transparent transition-all"
                      />
                    </div>
                  </div>

                  {/* Validation Error Display */}
                  {validationError && (
                    <div className="bg-red-50 text-red-600 px-4 py-2 rounded-lg text-sm flex items-center gap-2">
                      <AlertCircle size={16} />
                      {validationError}
                    </div>
                  )}

                  <div>
                    <label className="block text-sm font-semibold text-slate-600 mb-1 ml-1">{form.message[language]}</label>
                    <textarea 
                      name="message"
                      rows={4}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="..."
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-zecoola-orange focus:border-transparent transition-all resize-none"
                    ></textarea>
                  </div>

                  <button 
                    type="submit" 
                    disabled={status === 'submitting'}
                    className="w-full bg-zecoola-orange text-white font-bold py-4 rounded-xl hover:bg-orange-600 transition-colors shadow-lg shadow-orange-200 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {status === 'submitting' ? (
                       <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    ) : (
                       <Send size={18} />
                    )}
                    {status === 'submitting' ? form.submitting[language] : form.submit[language]}
                  </button>

                  {status === 'error' && (
                     <div className="flex items-center gap-2 text-red-500 text-sm justify-center mt-2">
                        <AlertCircle size={16} />
                        {form.errorMessage[language]}
                     </div>
                  )}
                </form>
             )}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;