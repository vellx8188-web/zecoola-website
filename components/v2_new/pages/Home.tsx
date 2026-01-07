
import React from 'react';
import { Link } from 'react-router-dom';
import { PRODUCT_CATEGORIES, IMAGES, WORK_PROCESS } from '../constants';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col">
      <section className="relative h-[85vh] flex items-center bg-[#1A1A1A] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={IMAGES.home.hero} className="w-full h-full object-cover grayscale opacity-50" alt="Hero" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent"></div>
        </div>
        <div className="container mx-auto px-4 md:px-8 relative z-10 text-white">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter leading-[1.05] uppercase italic">OEM Footwear <br/><span className="text-[#FF6A00] not-italic">R&D & Manufacturing</span> <br/>Partner</h1>
            <p className="text-lg md:text-xl text-gray-300 mb-12 leading-relaxed max-w-2xl bg-white/5 backdrop-blur-sm p-6 border-l-4 border-[#FF6A00]">ZECOOLA is a trusted manufacturing partner with 50+ years of collective expertise.</p>
            <Link to="/contact" className="inline-flex items-center px-10 py-5 bg-[#FF6A00] rounded-sm text-white font-black uppercase tracking-widest text-sm hover:bg-[#FF9B33] transition-all">Request a Quote</Link>
          </div>
        </div>
      </section>
      <section className="py-24 bg-white text-center">
        <h2 className="text-[#FF6A00] font-black tracking-[0.3em] text-xs uppercase mb-4">Functional Footwear Solutions</h2>
        <div className="container mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PRODUCT_CATEGORIES.map((cat, i) => (
            <div key={i} className="group relative aspect-[4/5] overflow-hidden bg-[#F5F5F5]">
              <img src={cat.imageUrl} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" alt={cat.title} />
              <div className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-black/80 to-transparent text-white">
                <h4 className="text-lg font-black uppercase mb-2">{cat.title}</h4>
                <p className="text-[11px] uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">{cat.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="py-24 bg-[#F5F5F5]">
        <div className="container mx-auto px-4 md:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {WORK_PROCESS.map((step) => (
            <div key={step.id} className="bg-white p-6 shadow-sm">
              <div className="aspect-video mb-6 overflow-hidden grayscale"><img src={step.img} className="w-full h-full object-cover" alt={step.title} /></div>
              <div className="flex items-center space-x-4 mb-4"><span className="text-3xl font-black text-[#FF6A00] italic">0{step.id}</span><h4 className="font-black text-[#333333] uppercase text-sm">{step.title}</h4></div>
              <p className="text-xs text-gray-400 uppercase tracking-wider">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
