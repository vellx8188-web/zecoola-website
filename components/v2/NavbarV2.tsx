
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
    <nav className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${isScrolled ? 'bg-white shadow-xl h-20' : 'bg-transparent h-28'}`}>
      <div className="max-w-[1440px] mx-auto px-6 h-full flex justify-between items-center">
        
        {/* Logo Area - 严格保护容器，防止布局错乱 */}
        <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="flex items-center h-full">
           <div className={`h-10 md:h-12 w-10 md:w-12 flex items-center justify-center transition-all duration-300 ${!isScrolled ? 'brightness-0 invert' : ''}`}>
             <img 
               src="/logo-icon.png" 
               alt="ZA" 
               className="max-h-full max-w-full object-contain"
               onError={(e) => {
                 e.currentTarget.style.display = 'none';
               }}
             />
           </div>
           
           <div className={`flex flex-col items-start border-l h-8 md:h-10 ml-4 pl-4 transition-colors duration-300 ${isScrolled ? 'border-slate-200' : 'border-white/20'}`}>
              <div className={`h-4 md:h-5 transition-all duration-300 ${!isScrolled ? 'brightness-0 invert' : ''}`}>
                <img 
                  src="/logo-text.png" 
                  alt="ZECOOLA" 
                  className="h-full w-auto object-contain"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
              </div>
              <span className={`text-[8px] font-black uppercase tracking-[0.4em] mt-1 whitespace-nowrap ${isScrolled ? 'text-slate-400' : 'text-white/60'}`}>
                Footwear Excellence
              </span>
           </div>
        </button>

        {/* Desktop Menu */}
        <div className="hidden xl:flex items-center gap-10">
          {CONTENT.nav.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className={`text-[11px] font-black uppercase tracking-[0.2em] transition-all hover:text-orange-600 ${isScrolled ? 'text-slate-950' : 'text-white'}`}
            >
              {item.label[language]}
            </button>
          ))}
          
          <div className="flex items-center gap-6">
            <button 
              onClick={toggleLanguage}
              className={`text-[10px] font-black w-10 h-10 border rounded-full transition-all flex items-center justify-center ${isScrolled ? 'border-slate-200 text-slate-900 hover:bg-slate-50' : 'border-white/20 text-white hover:bg-white/10'}`}
            >
               {language === 'en' ? 'CH' : 'EN'}
            </button>
            <button 
              onClick={() => scrollTo('contact')}
              className="px-8 py-3.5 bg-orange-600 text-white text-[11px] font-black uppercase tracking-[0.3em] hover:bg-slate-950 transition-all shadow-lg"
            >
              START PROJECT
            </button>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button className={`xl:hidden p-2 rounded-lg transition-colors ${isScrolled ? 'text-slate-900 bg-slate-100' : 'text-white bg-white/10'}`} onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="xl:hidden fixed inset-0 z-[110] bg-slate-950 p-10 flex flex-col justify-center gap-6">
          <button onClick={() => setIsOpen(false)} className="absolute top-8 right-8 text-white/50"><X size={40}/></button>
          {CONTENT.nav.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="text-4xl font-black text-white/30 hover:text-orange-600 transition-all text-left uppercase italic tracking-tighter"
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
