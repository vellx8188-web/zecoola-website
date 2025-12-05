import React from 'react';
import { CONTENT } from '../constants';
import { useLanguage } from '../LanguageContext';

const Footer: React.FC = () => {
  const { language } = useLanguage();
  const { thankYou, rights } = CONTENT.footer;

  return (
    <footer className="bg-black text-white py-8 border-t border-slate-800">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-black text-white/20 mb-4 tracking-widest uppercase">{thankYou[language]}</h2>
        <p className="text-slate-500 text-sm">
          &copy; {new Date().getFullYear()} {rights[language]}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
