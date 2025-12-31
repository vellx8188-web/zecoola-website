
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
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-white/95 backdrop-blur-xl shadow-sm h-20' : 'bg-transparent h-24'}`}>
      <div className="container mx-auto px-6 h-full flex justify-between items-center">
        {/* Logo - 使用图片而不是文字 */}
        <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="flex items-center gap-2 group">
           <img 
             src={CONTENT.logo} 
             alt="ZECOOLA" 
             className={`h-8 md:h-10 w-auto object-contain transition-all duration-300 ${!isScrolled ? 'brightness-0 invert' : ''}`} 
           />
        </button>

        {/* Links */}
        <div className="hidden lg:flex items-center gap-10">
          {CONTENT.nav.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className={`text-[11px] font-black uppercase tracking-[0.2em] transition-all hover:text-orange-600 ${isScrolled ? 'text-slate-700' : 'text-white/90'}`}
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
          
          <button 
            onClick={() => scrollTo('contact')}
            className={`px-6 py-2 text-[11px] font-black uppercase tracking-widest transition-all ${isScrolled ? 'bg-orange-600 text-white' : 'bg-white text-slate-950 hover:bg-orange-600 hover:text-white'}`}
          >
            Contact
          </button>
        </div>

        {/* Mobile Toggle */}
        <button className={`lg:hidden transition-colors ${isScrolled ? 'text-slate-900' : 'text-white'}`} onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-slate-950 fixed inset-0 z-[100] p-12 flex flex-col gap-8">
          <div className="flex justify-between items-center mb-12">
            <img src={CONTENT.logo} alt="ZECOOLA" className="h-8 w-auto brightness-0 invert" />
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
        </div>
      )}
    </nav>
  );
};

export default NavbarV2;
