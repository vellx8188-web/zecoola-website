
import React from 'react';
import { Link } from 'react-router-dom';
import { COLORS, NAV_ITEMS } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer style={{ backgroundColor: COLORS.darkGray }} className="text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 rounded-full bg-[#FF6A00] flex items-center justify-center">
                <span className="text-white font-bold text-xl italic">Z</span>
              </div>
              <span className="text-2xl font-bold tracking-tighter">ZECOOLA</span>
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed mb-6">
              A trusted footwear R&D and manufacturing partner with over 50 years of collective expertise.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-6 border-l-4 border-[#FF6A00] pl-3">Quick Links</h4>
            <ul className="space-y-3">
              {NAV_ITEMS.map((item) => (
                <li key={item.path}><Link to={item.path} className="text-sm text-gray-400 hover:text-white">{item.label}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-6 border-l-4 border-[#FF6A00] pl-3">Our Expertise</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>OEM & ODM Production</li>
              <li>Functional Materials</li>
              <li>Waterproof Construction</li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-6 border-l-4 border-[#FF6A00] pl-3">Get in Touch</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex items-start space-x-3"><span className="text-[#FF6A00]">Email:</span><span>info@zecoola.com</span></li>
              <li><Link to="/contact" className="inline-block mt-4 text-[#FF6A00] font-bold border-b border-[#FF6A00]">Contact Us</Link></li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>© {new Date().getFullYear()} ZECOOLA. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
