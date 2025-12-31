
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
    <nav className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-white shadow-sm h-20' : 'bg-transparent h-24'}`}>
      <div className="container mx-auto px-6 h-full flex justify-between items-center">
        
        {/* Logo Area - 完全使用图片 */}
        <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="flex items-center gap-3 md:gap-4 group">
           {/* 圆形图标 - logo-icon.png */}
           <img 
             src="/logo-icon.png" 
             alt="Zecoola Icon" 
             className={`h-8 md:h-10 w-auto transition-all duration-300 ${!isScrolled ? 'brightness-0 invert' : ''}`} 
             onError={(e) => (e.currentTarget.src = 'https://placehold.co/100x100?text=ICON')}
           />
           {/* 英文文字部分 - logo-text.png */}
           <img 
             src="/logo-text.png" 
             alt="ZECOOLA" 
             className={`h-4 md:h-5 w-auto transition-all duration-300 ${!isScrolled ? 'brightness-0 invert' : ''}`} 
             onError={(e) => (e.currentTarget.src = 'https://placehold.co/200x40?text=ZECOOLA')}
           />
        </button>

        {/* Links */}
        <div className="hidden xl:flex items-center gap-8">
          {CONTENT.nav.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className={`text-[10px] font-black uppercase tracking-[0.2em] transition-all hover:text-orange-600 ${isScrolled ? 'text-slate-700' : 'text-white/90'}`}
            >
              {item.label[language]}
            </button>
          ))}
          
          <div className={`h-4 w-[1px] transition-colors ${isScrolled ? 'bg-slate-200' : 'bg-white/20'}`} />

          <button 
            onClick={toggleLanguage}
            className={`flex items-center gap-2 text-[10px] font-black border-2 px-3 py-1 rounded-sm transition-all ${isScrolled ? 'border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white' : 'border-white/50 text-white hover:bg-white hover:text-slate-900'}`}
          >
            {language === 'en' ? 'CH' : 'EN'}
          </button>
          
          <button 
            onClick={() => scrollTo('contact')}
            className="px-6 py-3 bg-orange-600 text-white text-[10px] font-black uppercase tracking-widest hover:bg-slate-900 transition-all shadow-lg"
          >
            CONTACT US
          </button>
        </div>

        {/* Mobile Toggle */}
        <button className={`xl:hidden transition-colors ${isScrolled ? 'text-slate-900' : 'text-white'}`} onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="xl:hidden bg-slate-950 fixed inset-0 z-[100] p-12 flex flex-col gap-8">
          <div className="flex justify-between items-center mb-12">
            <div className="flex items-center gap-3">
               <img src="/logo-icon.png" alt="Icon" className="h-8 w-auto brightness-0 invert" />
               <img src="/logo-text.png" alt="ZECOOLA" className="h-4 w-auto brightness-0 invert" />
            </div>
            <button onClick={() => setIsOpen(false)} className="text-white"><X size={32}/></button>
          </div>
          {CONTENT.nav.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="text-4xl font-black text-left text-white/40 hover:text-orange-600 transition-colors uppercase tracking-tighter"
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
