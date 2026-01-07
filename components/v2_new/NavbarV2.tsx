
import React from 'react';

const NavbarV2: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 w-full h-24 bg-white/80 backdrop-blur-md z-[100] border-b border-slate-100 flex items-center px-12 justify-between">
      <div className="flex items-center gap-4">
        <div className="w-10 h-10 bg-orange-600 rounded-lg"></div>
        <span className="font-black text-2xl tracking-tighter italic">ZECOOLA <span className="text-orange-600">v2.new</span></span>
      </div>
      <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
        Private Lab Mode Enabled
      </div>
    </nav>
  );
};

export default NavbarV2;
