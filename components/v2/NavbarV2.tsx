
import React, { useState, useEffect } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { CONTENT } from '../../constants';
import { useLanguage } from '../../LanguageContext';

const NavbarV2: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { language, toggleLanguage } = useLanguage();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-white/90 backdrop-blur-xl shadow-sm h-20' : 'bg-transparent h-24'}`}>
      <div className="container mx-auto px-6 h-full flex justify-between items-center">
        {/* Logo */}
        <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="flex items-center gap-2 group">
           <div className={`text-2xl font-black tracking-tighter transition-colors ${isScrolled ? 'text-slate-900' : 'text-white'}`}>
             ZECOOLA<span className="text-orange-600">.</span>
           </div>
        </button>

        {/* Links */}
        <div className="hidden lg:flex items-center gap-12">
          {CONTENT.nav.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className={`text-xs font-black uppercase tracking-widest transition-all hover:text-orange-600 ${isScrolled ? 'text-slate-600' : 'text-white/80'}`}
            >
              {item.label[language]}
            </button>
          ))}
          
          <button 
            onClick={toggleLanguage}
            className={`flex items-center gap-2 text-[10px] font-black border-2 px-3 py-1 rounded-sm transition-all ${isScrolled ? 'border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white' : 'border-white/50 text-white hover:bg-white hover:text-slate-900'}`}
          >
            <Globe size={12} />
            {language === 'en' ? 'EN' : 'ZH'}
          </button>
        </div>

        {/* Mobile Toggle */}
        <button className={`lg:hidden transition-colors ${isScrolled ? 'text-slate-900' : 'text-white'}`} onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-slate-900 fixed inset-0 z-40 p-12 flex flex-col gap-8 animate-in slide-in-from-top duration-500">
          <div className="flex justify-between items-center mb-12">
            <div className="text-2xl font-black text-white">ZECOOLA<span className="text-orange-600">.</span></div>
            <button onClick={() => setIsOpen(false)} className="text-white"><X size={32}/></button>
          </div>
          {CONTENT.nav.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="text-4xl font-black text-left text-white/40 hover:text-orange-600 transition-colors"
            >
              {item.label[language]}
            </button>
          ))}
          <button onClick={toggleLanguage} className="mt-auto flex items-center justify-center gap-2 p-6 bg-white/5 text-white rounded-xl font-bold uppercase tracking-widest text-xs">
            <Globe size={16} /> {language === 'en' ? 'Switch to Chinese' : '切换至中文'}
          </button>
        </div>
      )}
    </nav>
  );
};

export default NavbarV2;
