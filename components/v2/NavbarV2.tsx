
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { CONTENT } from '../../constants';
import { useLanguage } from '../../LanguageContext';

const NavbarV2: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { language, toggleLanguage } = useLanguage();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 100; // 导航栏高度补给
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;

      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth'
      });
    } else {
      console.warn(`Anchor #${id} not found.`);
    }
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-[100] transition-all duration-700 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-2xl h-20' : 'bg-transparent h-28'}`}>
      <div className="max-w-[1800px] mx-auto px-8 lg:px-12 h-full flex justify-between items-center">
        
        {/* Logo Area */}
        <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="flex items-center group">
           <div className="h-10 md:h-12 w-10 md:w-12 flex items-center justify-center transition-all duration-500">
             <img src="/logo-icon.png" alt="ZA" className={`max-h-full max-w-full object-contain ${!isScrolled ? 'drop-shadow-[0_0_15px_rgba(255,107,0,0.4)]' : ''}`} />
           </div>
           <div className={`flex flex-col items-start border-l h-8 md:h-10 ml-6 pl-6 transition-colors duration-500 ${isScrolled ? 'border-slate-200' : 'border-white/10'}`}>
              <div className={`h-4 md:h-5 transition-all duration-500 ${!isScrolled ? 'brightness-0 invert' : ''}`}>
                <img src="/logo-text.png" alt="ZECOOLA" className="h-full w-auto object-contain" />
              </div>
              <span className={`text-[9px] font-black uppercase tracking-[0.5em] mt-1.5 whitespace-nowrap ${isScrolled ? 'text-slate-400' : 'text-white/40'}`}>
                Precision Manufacturing
              </span>
           </div>
        </button>

        {/* Desktop Menu */}
        <div className="hidden xl:flex items-center gap-10">
          {CONTENT.nav.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className={`text-[9px] font-black uppercase tracking-[0.3em] transition-all duration-300 relative group py-2 ${isScrolled ? 'text-slate-900' : 'text-white/80 hover:text-white'}`}
            >
              {item.label[language]}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-600 transition-all duration-500 group-hover:w-full"></span>
            </button>
          ))}
          <div className="flex items-center gap-6 ml-4">
            <button onClick={toggleLanguage} className={`text-[8px] font-black w-9 h-9 border rounded-full transition-all duration-500 flex items-center justify-center ${isScrolled ? 'border-slate-200 text-slate-900 hover:bg-slate-950 hover:text-white' : 'border-white/10 text-white hover:bg-white/10'}`}>
               {language === 'en' ? 'CH' : 'EN'}
            </button>
            <button onClick={() => scrollTo('contact')} className="px-8 py-3 bg-orange-600 text-white text-[9px] font-black uppercase tracking-[0.4em] hover:bg-slate-950 transition-all shadow-xl">
              START PROJECT
            </button>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button className={`xl:hidden p-3 rounded-full transition-all ${isScrolled ? 'text-slate-950 bg-slate-100' : 'text-white bg-white/10'}`} onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="xl:hidden fixed inset-0 z-[110] bg-slate-950 p-10 flex flex-col justify-center gap-8">
          <button onClick={() => setIsOpen(false)} className="absolute top-10 right-10 text-white/30 hover:text-white"><X size={40}/></button>
          {CONTENT.nav.map((item) => (
            <button key={item.id} onClick={() => scrollTo(item.id)} className="text-4xl font-black text-white/20 hover:text-orange-600 transition-all text-left uppercase italic tracking-tighter">
              {item.label[language]}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default NavbarV2;
