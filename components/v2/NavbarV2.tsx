
import React, { useState, useEffect } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { CONTENT } from '../../constants';
import { useLanguage } from '../../LanguageContext';

interface NavbarV2Props {
  activePage: string;
  onNavigate: (id: string) => void;
}

const NavbarV2: React.FC<NavbarV2Props> = ({ activePage, onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { language, toggleLanguage } = useLanguage();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-sm border-b' : 'bg-white/95 backdrop-blur-sm'}`}>
      <div className="container mx-auto px-6 h-20 flex justify-between items-center">
        {/* Logo */}
        <button onClick={() => onNavigate('home')} className="flex items-center gap-2">
           <img src={CONTENT.logo} alt="Zecoola" className="h-10 w-auto" />
           <div className="text-2xl font-black tracking-tighter text-slate-900">
             ZECOOLA<span className="text-orange-600">.</span>
           </div>
        </button>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-10">
          {CONTENT.nav.map((item) => (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={`text-sm font-bold uppercase tracking-tight transition-colors hover:text-orange-600 ${activePage === item.id ? 'text-orange-600' : 'text-slate-600'}`}
            >
              {item.label[language]}
            </button>
          ))}
          
          <div className="h-6 w-px bg-slate-200"></div>

          <button 
            onClick={toggleLanguage}
            className="flex items-center gap-1.5 text-xs font-black text-slate-800 border-2 border-slate-900 px-3 py-1 rounded-md hover:bg-slate-900 hover:text-white transition-all"
          >
            <Globe size={14} />
            {language === 'en' ? 'EN' : 'ZH'}
          </button>
        </div>

        {/* Mobile Toggle */}
        <button className="lg:hidden text-slate-900" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white fixed inset-0 top-20 z-40 p-6 flex flex-col gap-6 animate-in slide-in-from-right">
          {CONTENT.nav.map((item) => (
            <button
              key={item.id}
              onClick={() => { onNavigate(item.id); setIsOpen(false); }}
              className={`text-2xl font-black text-left border-b pb-4 ${activePage === item.id ? 'text-orange-600 border-orange-100' : 'text-slate-800 border-slate-50'}`}
            >
              {item.label[language]}
            </button>
          ))}
          <button onClick={toggleLanguage} className="mt-auto flex items-center justify-center gap-2 p-4 bg-slate-100 rounded-xl font-bold">
            <Globe size={20} /> {language === 'en' ? 'Switch to Chinese' : '切换至英文'}
          </button>
        </div>
      )}
    </nav>
  );
};

export default NavbarV2;
