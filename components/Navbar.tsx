
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
        {/* Logo Area */}
        <button 
          onClick={(e) => scrollToSection(e, 'hero')}
          className="flex items-center gap-3 focus:outline-none group"
        >
           {/* Logo Icon */}
           <img 
             src={CONTENT.logo} 
             alt="Zecoola" 
             className="h-10 md:h-12 w-auto object-contain transition-all duration-300"
           />
           {/* 
             Fix: Increased left margin for 'A' (ml-2) to prevent overlap with 'L' 
             due to the -skew-x-12 transform.
           */}
           <div className={`text-2xl md:text-3xl font-black tracking-widest font-montserrat flex items-baseline ${isScrolled ? 'text-zecoola-orange' : 'text-white'}`}>
             <span>ZECOOL</span>
             <span className="transform -skew-x-12 inline-block ml-2">A</span>
           </div>
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
