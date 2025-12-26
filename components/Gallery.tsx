
import React from 'react';
import { motion } from 'framer-motion';
import { BRANDS, CONTENT } from '../constants';
import { useLanguage } from '../LanguageContext';

const Gallery: React.FC = () => {
  const { language } = useLanguage();
  const { title, images, brandsTitle } = CONTENT.gallery;

  return (
    <section id="gallery" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        
        {/* Factory Showcase */}
        <div className="mb-32">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <h2 className="text-4xl font-black text-zecoola-blue mb-2">
                {title[language]}
              </h2>
              <div className="w-20 h-2 bg-zecoola-orange"></div>
            </div>
            <p className="text-slate-500 font-medium uppercase tracking-widest text-sm">
              Advanced Production Facilities
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
             {images.map((imgSrc, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="rounded-2xl overflow-hidden shadow-xl relative group aspect-[4/3] bg-slate-100"
                >
                  <img 
                    src={imgSrc} 
                    alt={`Facility View ${index + 1}`} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 ease-out" 
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </motion.div>
             ))}
          </div>
        </div>

        {/* Brand Ecosystem - Improved for 11 logos and white backgrounds */}
        <div className="relative">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-zecoola-blue mb-4 uppercase tracking-tight">{brandsTitle[language]}</h2>
            <p className="text-slate-400 text-sm max-w-lg mx-auto italic">
              Empowering industry leaders through manufacturing excellence and reliable supply chains.
            </p>
          </div>
          
          {/* 
            Visual Strategy:
            1. Use 'flex-wrap' with 'justify-center' to handle the 11th logo naturally.
            2. Add a subtle 'bg-slate-900' or 'bg-slate-50' with borders to make white logos pop.
            3. Apply a grayscale filter by default for a premium "B2B Wall" look.
          */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-6 lg:gap-8 max-w-6xl mx-auto">
            {BRANDS.map((brand, i) => {
              const cardBaseStyles = `
                group 
                relative
                bg-slate-900
                border border-slate-800
                rounded-2xl
                w-[130px] h-[70px] 
                md:w-[170px] md:h-[90px] 
                lg:w-[200px] lg:h-[110px]
                flex items-center justify-center 
                p-4 md:p-6 
                shadow-lg hover:shadow-orange-900/10
                hover:border-zecoola-orange/50
                transform hover:-translate-y-2 
                transition-all duration-500
              `;

              const content = (
                <img 
                  src={brand.image} 
                  alt={`Partner Brand ${i+1}`}
                  className="max-w-[85%] max-h-[85%] object-contain filter brightness-125 grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 group-hover:brightness-100 transition-all duration-700 ease-in-out"
                  loading="lazy"
                />
              );

              return brand.url ? (
                <motion.a 
                  key={i}
                  href={brand.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className={`${cardBaseStyles} cursor-pointer`}
                >
                  {content}
                  <div className="absolute top-2 right-2 w-1.5 h-1.5 bg-zecoola-orange rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </motion.a>
              ) : (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className={`${cardBaseStyles} cursor-default`}
                >
                  {content}
                </motion.div>
              );
            })}
          </div>

          {/* Background Decorative Element */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-zecoola-orange/[0.02] -z-10 rounded-full blur-3xl pointer-events-none"></div>
        </div>

      </div>
    </section>
  );
};

export default Gallery;
