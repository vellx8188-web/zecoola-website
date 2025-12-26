
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

        {/* Brand Ecosystem - Reimagined for Maximum Clarity & Size */}
        <div className="relative py-24 bg-[#f8fafc] rounded-[4rem] border border-slate-100">
          <div className="text-center mb-24">
            <h2 className="text-4xl font-black text-zecoola-blue mb-4 uppercase tracking-tighter">
                {brandsTitle[language]}
            </h2>
            <div className="w-16 h-1 bg-zecoola-orange mx-auto"></div>
          </div>
          
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-12 md:gap-x-14 md:gap-y-20 max-w-7xl mx-auto px-6">
            {BRANDS.map((brand, i) => {
              // 错落布局
              const verticalOffset = i % 2 === 0 ? "mt-0" : "md:mt-16";
              
              const content = (
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  animate={{
                    y: [0, -15, 0],
                  }}
                  transition={{ 
                    y: {
                      duration: 7,
                      repeat: Infinity,
                      delay: i * 0.6,
                      ease: "easeInOut"
                    },
                    default: {
                      delay: i * 0.05,
                      type: "spring",
                      stiffness: 80
                    }
                  }}
                  className={`
                    ${verticalOffset}
                    group relative
                    w-36 h-36 md:w-56 md:h-56 lg:w-64 lg:h-64
                    bg-white
                    rounded-full
                    flex items-center justify-center 
                    p-2 md:p-3 lg:p-4
                    shadow-[0_25px_60px_-15px_rgba(0,0,0,0.06),0_10px_20px_-5px_rgba(0,0,0,0.04)]
                    hover:shadow-[0_40px_90px_-20px_rgba(255,107,0,0.2)]
                    hover:scale-110
                    border border-white
                    transition-all duration-700
                    cursor-pointer
                  `}
                >
                  {/* 
                     核心视觉改进：
                     1. 容器为纯白 (bg-white)，背景为浅灰 (#f8fafc)，这样 Logo 原本带的白色底色会自动消失。
                     2. 极小的内边距 (p-2/3/4)，配合 max-w-[95%]，让 Logo 填满整个圆圈。
                     3. 给图片加上 drop-shadow-[0_2px_10px_rgba(0,0,0,0.1)]：
                        这层极薄的阴影会让白色文字即使在白底上也清晰可见。
                  */}
                  <div className="w-full h-full flex items-center justify-center rounded-full overflow-hidden bg-white">
                    <img 
                        src={brand.image} 
                        alt={`Partner Brand ${i+1}`}
                        className="max-w-[92%] max-h-[92%] object-contain transition-all duration-700 drop-shadow-[0_4px_12px_rgba(0,0,0,0.08)] group-hover:drop-shadow-[0_8px_24px_rgba(255,107,0,0.15)]"
                        loading="lazy"
                    />
                  </div>
                  
                  {/* 悬停时的精致光影 */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/0 to-slate-100/30 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
                  <div className="absolute -inset-[2px] rounded-full border border-zecoola-orange/0 group-hover:border-zecoola-orange/10 scale-105 group-hover:scale-100 transition-all duration-1000"></div>
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

          {/* 背景装饰：更有层次感的柔光 */}
          <div className="absolute top-1/2 left-1/4 w-[600px] h-[600px] bg-zecoola-orange/5 rounded-full blur-[180px] -z-10 animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-zecoola-blue/5 rounded-full blur-[180px] -z-10"></div>
        </div>

      </div>
    </section>
  );
};

export default Gallery;
