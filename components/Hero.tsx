
import React from 'react';
import { motion } from 'framer-motion';
import { CONTENT } from '../constants';
import { useLanguage } from '../LanguageContext';

const Hero: React.FC = () => {
  const { language } = useLanguage();
  const { slogan, cta } = CONTENT.hero;

  const scrollToAbout = (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden bg-[#FF6B00]">
      {/* Background elements to match Slide 1 */}
      
      {/* Large Blue Circle - Bottom Left */}
      <motion.div 
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="absolute -bottom-[20%] -left-[10%] w-[70vh] h-[70vh] bg-[#1d4ed8] rounded-full z-0"
      ></motion.div>

      {/* Subtle Gradient Overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-orange-400/20 to-orange-300/30 pointer-events-none z-0"></div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        {/* ZECOOLA Title - Styled to match Navbar Logo */}
        {/* 
           Fix: Increased margins for 'A' (ml-4 md:ml-8) significantly
           Since text is huge (text-9xl), the skew kicks the bottom of 'A' very far left.
           We need a large margin to prevent it from touching 'L'.
        */}
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-6xl md:text-9xl font-black text-white mb-2 tracking-tight drop-shadow-md font-montserrat flex items-baseline justify-center"
        >
          <span>ZECOOL</span>
          <span className="transform -skew-x-12 inline-block ml-4 md:ml-8">A</span>
        </motion.h1>
        
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-2xl md:text-4xl font-bold text-white tracking-wide uppercase mt-4 mb-12 drop-shadow-sm font-montserrat"
        >
          {slogan[language]}
        </motion.h2>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <button 
            onClick={scrollToAbout}
            className="px-10 py-4 bg-white text-[#FF6B00] font-bold text-lg rounded-full hover:bg-slate-50 transition-all shadow-xl hover:shadow-2xl transform hover:-translate-y-1 cursor-pointer"
          >
            {cta[language]}
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
