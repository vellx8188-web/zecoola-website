
import React from 'react';
import { IMAGES } from '../constants';

const Capabilities: React.FC = () => {
  return (
    <div className="flex flex-col bg-white">
      <section className="bg-[#1A1A1A] py-32 text-white relative overflow-hidden">
        <img src={IMAGES.capabilities.tech_bg} className="absolute inset-0 w-full h-full object-cover opacity-30 grayscale" alt="Tech" />
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <h1 className="text-5xl md:text-8xl font-black italic tracking-tighter uppercase mb-4 leading-none">Proven <span className="text-[#FF6A00] not-italic">Technical</span> Mastery</h1>
        </div>
      </section>
      <section className="py-24 bg-[#F5F5F5]"><div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-white p-2"><img src={IMAGES.capabilities.material_macro} className="w-full aspect-[4/3] object-cover grayscale" alt="Material" /><div className="p-8"><h4 className="text-xl font-black uppercase mb-4">Functional Compounds</h4></div></div>
          <div className="bg-white p-2"><img src={IMAGES.capabilities.waterproof_tech} className="w-full aspect-[4/3] object-cover grayscale" alt="Waterproof" /><div className="p-8"><h4 className="text-xl font-black uppercase mb-4">Waterproof Technology</h4></div></div>
        </div>
      </div></section>
    </div>
  );
};

export default Capabilities;
