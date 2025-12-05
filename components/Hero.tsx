import React from 'react';
import { motion } from 'framer-motion';
import { CONTENT } from '../constants';
import { useLanguage } from '../LanguageContext';

const Hero: React.FC = () => {
  const { language } = useLanguage();
  const { title, slogan, cta } = CONTENT.hero;

  const scrollToAbout = (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden bg-[#FF6B00]">
      {/* Background elements to match Slide 1 */}
      {/* Main Orange Background is set on the section */}
      
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
        {/* ZECOOLA Title - Slide 1 puts this top right, but for web we keep it centered or in navbar. 
            We will emphasize the Slogan here as per Slide 1 center text */}
        
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-6xl md:text-9xl font-black text-white mb-2 tracking-tighter drop-shadow-md font-[Montserrat]"
        >
          {title}
        </motion.h1>
        
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-2xl md:text-4xl font-bold text-white tracking-wide uppercase mt-4 mb-12 drop-shadow-sm"
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