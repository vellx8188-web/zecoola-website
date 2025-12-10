
import React from 'react';
import { motion } from 'framer-motion';
import { CONTENT } from '../constants';
import { useLanguage } from '../LanguageContext';

const Products: React.FC = () => {
  const { language } = useLanguage();
  const { title, subtitle, image } = CONTENT.products;

  return (
    <section id="products" className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-zecoola-blue mb-4">{title[language]}</h2>
          <div className="w-24 h-1 bg-zecoola-orange mx-auto mb-6"></div>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            {subtitle[language]}
          </p>
        </div>

        {/* Unified Product Showcase Image */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative bg-white rounded-3xl shadow-2xl p-4 md:p-8 overflow-hidden"
        >
           {/* 
             Display the single composite image.
             This matches the user's request to "fuse" everything into one image 
             instead of displaying individual cards.
           */}
           <div className="relative rounded-2xl overflow-hidden">
             <img 
               src={image} 
               alt="Zecoola Product Sample Display" 
               className="w-full h-auto object-cover"
             />
           </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Products;
