
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
                  className="rounded-3xl overflow-hidden shadow-xl relative group aspect-[4/3] bg-slate-100"
                >
                  <img 
                    src={imgSrc} 
                    alt={`Facility View ${index + 1}`} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 ease-out" 
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </motion.div>
             ))}
          </div>
        </div>

        {/* Brand Ecosystem - Reimagined Organic Layout */}
        <div className="relative py-16">
          <div className="text-center mb-24">
            <h2 className="text-4xl font-black text-zecoola-blue mb-4 uppercase tracking-tighter">
                {brandsTitle[language]}
            </h2>
            <div className="w-16 h-1 bg-zecoola-orange mx-auto"></div>
          </div>
          
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-10 md:gap-x-12 md:gap-y-16 max-w-7xl mx-auto">
            {BRANDS.map((brand, i) => {
              // 错落感：根据索引添加上下偏移
              const verticalOffset = i % 2 === 0 ? "mt-0" : "md:mt-14";
              
              const content = (
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  animate={{
                    y: [0, -10, 0],
                  }}
                  transition={{ 
                    y: {
                      duration: 5,
                      repeat: Infinity,
                      delay: i * 0.4,
                      ease: "easeInOut"
                    },
                    default: {
                      delay: i * 0.08,
                      type: "spring",
                      stiffness: 60
                    }
                  }}
                  className={`
                    ${verticalOffset}
                    group relative
                    w-32 h-32 md:w-44 md:h-44 lg:w-52 lg:h-52
                    bg-white
                    rounded-full
                    flex items-center justify-center 
                    p-5 md:p-8 lg:p-10
                    shadow-[0_15px_50px_-15px_rgba(0,0,0,0.08)]
                    hover:shadow-[0_25px_70px_-15px_rgba(255,107,0,0.25)]
                    hover:scale-105
                    border border-slate-100/50
                    transition-all duration-700
                  `}
                >
                  {/* 
                     Key Improvements here:
                     1. Removed 'grayscale' and 'opacity-60' to show full color.
                     2. Using 'object-contain' and 'w-full h-full' to ensure proper scaling.
                     3. The padding (p-5/8/10) handles the "too small" issue by giving more room to the image.
                  */}
                  <img 
                    src={brand.image} 
                    alt={`Partner Brand ${i+1}`}
                    className="w-full h-full object-contain transition-all duration-700 brightness-100 group-hover:brightness-110"
                    loading="lazy"
                  />
                  
                  {/* Subtle decorative ring on hover */}
                  <div className="absolute inset-0 rounded-full border border-zecoola-orange/0 group-hover:border-zecoola-orange/10 scale-90 group-hover:scale-100 transition-all duration-700"></div>
                </motion.div>
              );

              return brand.url ? (
                <a 
                  key={i}
                  href={brand.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block no-underline"
                >
                  {content}
                </a>
              ) : (
                <div key={i}>{content}</div>
              );
            })}
          </div>

          {/* Decorative Background Blooms */}
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-zecoola-orange/5 rounded-full blur-[120px] -z-10 animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-zecoola-blue/5 rounded-full blur-[150px] -z-10"></div>
        </div>

      </div>
    </section>
  );
};

export default Gallery;
