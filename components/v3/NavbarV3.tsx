
import React, { useState, useEffect } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { CONTENT } from '../../constants';
import { useLanguage } from '../../LanguageContext';

const NavbarV3: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { language, toggleLanguage } = useLanguage();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className={`fixed top-6 left-1/2 -translate-x-1/2 w-[90%] max-w-[1400px] z-[100] transition-all duration-500 rounded-full border ${isScrolled ? 'bg-black/60 backdrop-blur-xl border-white/10 py-3 shadow-2xl' : 'bg-transparent border-transparent py-6'}`}>
      <div className="px-8 flex justify-between items-center">
        {/* Logo */}
        <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="flex items-center gap-3">
          <img src="/logo-icon.png" alt="ZA" className="h-8 md:h-10 w-auto" />
          <img src="/logo-text.png" alt="ZECOOLA" className="h-4 md:h-5 w-auto brightness-0 invert" />
        </button>

        {/* Links */}
        <div className="hidden lg:flex items-center gap-8">
          {CONTENT.nav.slice(0, 5).map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="text-[10px] font-black uppercase tracking-[0.4em] text-white/60 hover:text-orange-600 transition-colors"
            >
              {item.label[language]}
            </button>
          ))}
        </div>

        {/* Action */}
        <div className="flex items-center gap-6">
          <button onClick={toggleLanguage} className="text-white/40 hover:text-white transition-colors">
            <Globe size={18} />
          </button>
          <button onClick={() => scrollTo('contact')} className="hidden md:block px-6 py-2.5 bg-orange-600 text-white text-[9px] font-black uppercase tracking-[0.3em] rounded-full hover:bg-white hover:text-orange-600 transition-all">
            GET IN TOUCH
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavbarV3;
