
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CONTENT } from '../constants';
import { useLanguage } from '../LanguageContext';

const Products: React.FC = () => {
  const { language } = useLanguage();
  const { title, subtitle, categories, items } = CONTENT.products;
  const [activeCategory, setActiveCategory] = useState<'all' | 'outdoor' | 'sports' | 'casual'>('all');

  // Filter items based on active category
  const filteredItems = items.filter(
    item => activeCategory === 'all' || item.category === activeCategory
  );

  return (
    <section id="products" className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-zecoola-blue mb-4">{title[language]}</h2>
          <div className="w-24 h-1 bg-zecoola-orange mx-auto mb-6"></div>
          <p className="text-slate-600 max-w-2xl mx-auto">
            {subtitle[language]}
          </p>
        </div>

        {/* Filter Controls */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
           {['all', 'outdoor', 'sports', 'casual'].map((cat) => (
             <button
               key={cat}
               onClick={() => setActiveCategory(cat as any)}
               className={`px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wider transition-all duration-300 ${
                 activeCategory === cat 
                   ? 'bg-zecoola-orange text-white shadow-lg transform -translate-y-1' 
                   : 'bg-white text-slate-500 hover:bg-slate-100 border border-slate-200'
               }`}
             >
               {categories[cat as keyof typeof categories][language]}
             </button>
           ))}
        </div>

        {/* Product Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          <AnimatePresence>
            {filteredItems.map((item) => (
              <motion.div
                layout
                key={item.id}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
                className="group relative bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-500 border border-slate-100 overflow-hidden"
              >
                {/* Image Container with Hover Zoom */}
                <div className="relative aspect-square mb-4 overflow-hidden rounded-xl bg-slate-50/50 flex items-center justify-center">
                   <img 
                     src={item.image} 
                     alt={item.title[language]} 
                     className="w-full h-full object-contain mix-blend-multiply group-hover:scale-110 transition-transform duration-500"
                   />
                   
                   {/* Overlay on hover (Optional, subtle gradient) */}
                   <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                </div>

                {/* Content */}
                <div className="text-center relative z-10">
                   <h3 className="text-lg font-bold text-slate-800 mb-1 group-hover:text-zecoola-orange transition-colors">
                     {item.title[language]}
                   </h3>
                   <p className="text-sm text-slate-500">
                     {item.desc?.[language]}
                   </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Products;
