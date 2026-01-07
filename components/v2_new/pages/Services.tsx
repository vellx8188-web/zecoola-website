
import React from 'react';
import { IMAGES } from '../constants';

const Services: React.FC = () => {
  return (
    <div className="flex flex-col bg-white">
      <section className="bg-[#F5F5F5] py-24 border-b border-gray-100">
        <div className="container mx-auto px-4 md:px-8">
          <h1 className="text-6xl md:text-8xl font-black italic tracking-tighter uppercase text-[#333333] leading-none mb-6">Core <br/><span className="text-[#FF6A00] not-italic">Service</span> <br/>Architecture</h1>
        </div>
      </section>
      <section className="py-24"><div className="container mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="border border-gray-100 p-2 group"><img src={IMAGES.services.blueprint} className="w-full aspect-video object-cover grayscale" alt="OEM" /><div className="p-12"><h3 className="text-3xl font-black mb-6 uppercase tracking-tight italic">OEM Manufacturing</h3></div></div>
        <div className="border border-gray-100 p-2 group"><img src={IMAGES.services.sketch} className="w-full aspect-video object-cover grayscale" alt="ODM" /><div className="p-12"><h3 className="text-3xl font-black mb-6 uppercase tracking-tight italic">ODM Development</h3></div></div>
      </div></section>
    </div>
  );
};

export default Services;
