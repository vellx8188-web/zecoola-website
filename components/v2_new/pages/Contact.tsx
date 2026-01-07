
import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="flex flex-col bg-white py-24">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          <div>
            <h2 className="text-[#FF6A00] font-black text-sm uppercase tracking-[0.3em] mb-8">Contact Us</h2>
            <h1 className="text-4xl md:text-6xl font-black mb-8 text-[#333333] uppercase italic">Let’s Build Your <br/><span className="text-[#FF6A00]">Next Footwear Project</span></h1>
            <p className="text-xl text-[#666666] mb-12 font-medium">info@zecoola.com</p>
          </div>
          <div className="bg-white p-8 lg:p-12 rounded-[2.5rem] shadow-2xl border border-[#F5F5F5]">
            <form className="space-y-8" onSubmit={(e) => { e.preventDefault(); alert('Sent.'); }}>
              <input type="text" placeholder="Full Name" className="w-full bg-[#F5F5F5] rounded-2xl px-6 py-4 outline-none" required />
              <input type="email" placeholder="Email Address" className="w-full bg-[#F5F5F5] rounded-2xl px-6 py-4 outline-none" required />
              <textarea rows={4} placeholder="Project Brief" className="w-full bg-[#F5F5F5] rounded-2xl px-6 py-4 outline-none resize-none" required />
              <button className="w-full py-5 bg-[#FF6A00] text-white font-black uppercase rounded-2xl shadow-xl">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
