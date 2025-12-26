
// Fix: Added missing React import to resolve "Cannot find namespace 'React'" error
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
          <div className="text-center mb-20">
            <h2 className="text-3xl font-black text-zecoola-blue mb-4 uppercase tracking-tighter">
                {brandsTitle[language]}
            </h2>
            <div className="w-12 h-1 bg-zecoola-orange mx-auto"></div>
          </div>
          
          {/* 
            Visual Strategy:
            Using a staggered flex layout that avoids rigid rows and columns.
            Each logo is wrapped in a soft, circular white bubble with high-end shadow.
          */}
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-12 md:gap-x-12 md:gap-y-16 max-w-6xl mx-auto">
            {BRANDS.map((brand, i) => {
              // 模拟错落感：根据索引添加上下偏移
              const verticalOffset = i % 2 === 0 ? "mt-0" : "md:mt-12";
              
              const content = (
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  animate={{
                    y: [0, -8, 0],
                  }}
                  // Fix: Merged duplicate transition attributes into a single object with property-specific settings
                  transition={{ 
                    y: {
                      duration: 4,
                      repeat: Infinity,
                      delay: i * 0.3,
                      ease: "easeInOut"
                    },
                    default: {
                      delay: i * 0.05,
                      type: "spring",
                      stiffness: 50
                    }
                  }}
                  className={`
                    ${verticalOffset}
                    group relative
                    w-28 h-28 md:w-36 md:h-36 lg:w-44 lg:h-44
                    bg-white
                    rounded-full
                    flex items-center justify-center 
                    p-6 md:p-8
                    shadow-[0_10px_40px_-15px_rgba(0,0,0,0.1)]
                    hover:shadow-[0_20px_60px_-15px_rgba(255,107,0,0.2)]
                    hover:scale-110
                    border border-slate-50
                    transition-all duration-500
                  `}
                >
                  <img 
                    src={brand.image} 
                    alt={`Partner Brand ${i+1}`}
                    className="max-w-full max-h-full object-contain filter grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
                    loading="lazy"
                    onError={(e) => {
                        // 如果图片丢失，显示占位数字或文字
                        e.currentTarget.style.display = 'none';
                        e.currentTarget.parentElement!.innerHTML = `<span class="text-slate-300 font-bold text-xs">PARTNER ${i+1}</span>`;
                    }}
                  />
                  {/* Hover Indicator */}
                  <div className="absolute inset-0 rounded-full border-2 border-transparent group-hover:border-zecoola-orange/20 transition-all duration-500"></div>
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

          {/* Background Decorative Elements - Subtle gradients for a professional vibe */}
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-zecoola-orange/5 rounded-full blur-[100px] -z-10"></div>
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-zecoola-blue/5 rounded-full blur-[120px] -z-10"></div>
        </div>

      </div>
    </section>
  );
};

export default Gallery;
