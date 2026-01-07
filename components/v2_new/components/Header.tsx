
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { NAV_ITEMS } from '../constants';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isMenuOpen]);

  return (
    <header className="sticky top-0 z-[999] bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm">
      <div className="container mx-auto px-4 md:px-8 py-4 flex justify-between items-center h-20 relative z-[1001]">
        <Link to="/" className="flex items-center space-x-2 shrink-0">
          <div className="w-10 h-10 rounded-lg bg-[#FF6A00] flex items-center justify-center shadow-lg">
            <span className="text-white font-black text-xl italic">Z</span>
          </div>
          <span className="text-2xl font-black tracking-tighter text-[#1A1A1A]">ZECOOLA</span>
        </Link>
        <nav className="hidden md:flex space-x-8 lg:space-x-12 items-center">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`text-[13px] font-extrabold tracking-widest uppercase transition-colors hover:text-[#FF6A00] relative py-2 ${
                location.pathname === item.path ? 'text-[#FF6A00]' : 'text-gray-500'
              }`}
            >
              {item.label}
              {location.pathname === item.path && (
                <span className="absolute bottom-0 left-0 w-full h-[3px] bg-[#FF6A00] rounded-full"></span>
              )}
            </Link>
          ))}
          <Link
            to="/contact"
            className="px-8 py-3.5 rounded-lg text-[12px] font-black text-white bg-[#FF6A00] hover:bg-[#E55F00] shadow-md hover:shadow-xl active:scale-95 transition-all uppercase tracking-[0.15em]"
          >
            Request a Quote
          </Link>
        </nav>
        <button 
          className="md:hidden flex flex-col items-center justify-center w-10 h-10 space-y-1.5 focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className={`block w-6 h-[3px] bg-[#1A1A1A] rounded-full transition-transform duration-300 ${isMenuOpen ? 'rotate-45 translate-y-[9px]' : ''}`}></span>
          <span className={`block w-6 h-[3px] bg-[#1A1A1A] rounded-full transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
          <span className={`block w-6 h-[3px] bg-[#1A1A1A] rounded-full transition-transform duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-[9px]' : ''}`}></span>
        </button>
      </div>
      <div className={`md:hidden fixed inset-x-0 top-0 transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] z-[1000] ${isMenuOpen ? 'translate-y-20 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'}`}>
        {/* Fix: changed setIsOpen to setIsMenuOpen to fix the reference error */}
        <div className={`fixed inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-500 ${isMenuOpen ? 'opacity-100' : 'opacity-0'}`} onClick={() => setIsMenuOpen(false)}></div>
        <div className="relative mx-4 mt-2 bg-white rounded-[2.5rem] shadow-2xl overflow-hidden border border-gray-50">
          <div className="flex flex-col p-6 space-y-2">
            {NAV_ITEMS.map((item, index) => (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center justify-between p-5 rounded-2xl transition-all active:scale-[0.97] ${location.pathname === item.path ? 'bg-[#F5F5F5] text-[#FF6A00]' : 'bg-white text-[#1A1A1A] hover:bg-gray-50'}`}
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                <span className="text-lg font-black uppercase tracking-widest">{item.label}</span>
              </Link>
            ))}
            <div className="pt-4 pb-2">
              <Link to="/contact" className="flex items-center justify-center w-full py-6 rounded-2xl text-center font-black text-white bg-[#FF6A00] shadow-[0_15px_30px_rgba(255,106,0,0.3)] uppercase tracking-widest text-lg">
                Request a Quote
              </Link>
            </div>
          </div>
          <div className="h-2 w-full bg-gradient-to-r from-[#FF6A00] to-[#FF9B33]"></div>
        </div>
      </div>
    </header>
  );
};

export default Header;
