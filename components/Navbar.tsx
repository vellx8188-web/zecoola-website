
import React, { useState, useEffect } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { CONTENT } from '../constants';
import { useLanguage } from '../LanguageContext';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { language, toggleLanguage } = useLanguage();
  const navItems = CONTENT.nav;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <button 
          onClick={(e) => scrollToSection(e, 'hero')}
          className="flex items-center gap-3 focus:outline-none group"
        >
           {/* Logo Container */}
           <div className="w-12 h-12 rounded-full bg-white p-0.5 flex items-center justify-center shadow-sm overflow-hidden border-2 border-transparent transition-all">
             {/* 
                 Primary: Try to load the image.
                 Fallback: Use the custom SVG that matches the ZECOOLA logo 
             */}
             <img 
               src={CONTENT.logo} 
               alt="Zecoola Logo" 
               className="w-full h-full object-contain"
               onError={(e) => {
                 e.currentTarget.style.display = 'none';
                 e.currentTarget.nextElementSibling!.classList.remove('hidden');
               }}
             />
             
             {/* Custom SVG Logo Fallback (Matches the ZECOOLA ZA Logo) */}
             <div className="hidden w-full h-full flex items-center justify-center bg-white">
                <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full p-1">
                   {/* Orange Ring Segment */}
                   <path d="M85 20 A 45 45 0 1 0 85 80" stroke="#FF6B00" strokeWidth="8" strokeLinecap="round" fill="none" />
                   {/* Z shape */}
                   <path d="M30 35 L 70 35 L 30 65 L 70 65" stroke="#FF6B00" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
                   {/* Crossbar for A feel */}
                   <path d="M45 50 L 55 50" stroke="#FF6B00" strokeWidth="6" />
                </svg>
             </div>
           </div>
           
           <span className={`text-2xl font-extrabold tracking-wide ${isScrolled ? 'text-zecoola-blue' : 'text-white'} font-[Montserrat]`}>
             ZECOOLA
           </span>
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <button
              key={item.href}
              onClick={(e) => scrollToSection(e, item.href)}
              className={`text-sm font-semibold uppercase tracking-wider hover:text-zecoola-orange transition-colors ${isScrolled ? 'text-slate-700' : 'text-white/90'}`}
            >
              {item.label[language]}
            </button>
          ))}
          
          {/* Language Toggle */}
          <button 
            onClick={toggleLanguage}
            className={`flex items-center gap-1 border px-3 py-1 rounded-full transition-all ${isScrolled ? 'border-slate-300 text-slate-700 hover:bg-slate-100' : 'border-white/50 text-white hover:bg-white/20'}`}
          >
            <Globe size={16} />
            <span className="text-xs font-bold">{language === 'en' ? 'EN' : '中文'}</span>
          </button>
        </div>

        {/* Mobile Controls */}
        <div className="md:hidden flex items-center gap-4">
          <button 
            onClick={toggleLanguage}
            className={`flex items-center gap-1 px-2 py-1 rounded transition-all ${isScrolled ? 'text-slate-700' : 'text-white'}`}
          >
             <span className="text-sm font-bold">{language === 'en' ? 'EN' : '中'}</span>
          </button>
          
          <button
            className="text-zecoola-orange focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} color={isScrolled ? '#FF6B00' : '#FFF'} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white absolute w-full shadow-xl border-t z-50">
          <div className="flex flex-col px-6 py-4 space-y-4">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={(e) => scrollToSection(e, item.href)}
                className="text-slate-700 hover:text-zecoola-orange font-semibold text-left w-full py-2 border-b border-slate-100 last:border-0"
              >
                {item.label[language]}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
