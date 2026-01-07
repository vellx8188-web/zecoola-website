
import React from 'react';
import { IMAGES } from '../constants';

const About: React.FC = () => {
  return (
    <div className="flex flex-col bg-white">
      <section className="py-24"><div className="container mx-auto px-4 md:px-8 flex flex-col lg:flex-row gap-20 items-center">
        <div className="lg:w-1/2">
          <span className="text-[#FF6A00] font-black tracking-[0.3em] text-xs uppercase mb-8 block">Company Identity</span>
          <h1 className="text-5xl md:text-7xl font-black text-[#333333] tracking-tighter uppercase italic leading-none mb-12">ZECOOLA is <br/><span className="text-gray-200">not just a factory.</span></h1>
          <p className="text-gray-500 font-medium leading-relaxed uppercase text-xs tracking-widest">We are a footwear R&D and manufacturing partner committed to supporting our clients’ long-term growth.</p>
        </div>
        <div className="lg:w-1/2 relative"><img src={IMAGES.about.factory_scene} className="rounded shadow-2xl grayscale" alt="Factory" /></div>
      </div></section>
      <section className="py-32 bg-[#1A1A1A] text-white">
        <div className="container mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-32">
          <div><h3 className="text-[#FF6A00] font-black uppercase tracking-[0.4em] text-xs">Our Mission</h3><p className="text-3xl md:text-5xl font-black italic">To create <span className="text-[#FF6A00] not-italic">value</span> through reliable manufacturing.</p></div>
          <div><h3 className="text-[#FF6A00] font-black uppercase tracking-[0.4em] text-xs">Our Vision</h3><p className="text-3xl md:text-5xl font-black italic">To enable global brands to <span className="text-[#FF6A00] not-italic">compete</span> with confidence.</p></div>
        </div>
      </section>
    </div>
  );
};

export default About;
