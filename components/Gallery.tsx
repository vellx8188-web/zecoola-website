
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

        {/* Brand Ecosystem - High Contrast Organic Layout */}
        <div className="relative py-20 bg-slate-50/50 rounded-[4rem]">
          <div className="text-center mb-24">
            <h2 className="text-4xl font-black text-zecoola-blue mb-4 uppercase tracking-tighter">
                {brandsTitle[language]}
            </h2>
            <div className="w-16 h-1 bg-zecoola-orange mx-auto"></div>
          </div>
          
          <div className="flex flex-wrap justify-center gap-x-4 gap-y-10 md:gap-x-10 md:gap-y-16 max-w-7xl mx-auto px-4">
            {BRANDS.map((brand, i) => {
              // 错落感：根据索引添加上下偏移，营造动感布局
              const verticalOffset = i % 2 === 0 ? "mt-0" : "md:mt-20";
              
              const content = (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  animate={{
                    y: [0, -12, 0],
                  }}
                  transition={{ 
                    y: {
                      duration: 6,
                      repeat: Infinity,
                      delay: i * 0.5,
                      ease: "easeInOut"
                    },
                    default: {
                      delay: i * 0.1,
                      type: "spring",
                      stiffness: 70
                    }
                  }}
                  className={`
                    ${verticalOffset}
                    group relative
                    w-32 h-32 md:w-48 md:h-48 lg:w-60 lg:h-60
                    bg-slate-900
                    rounded-full
                    flex items-center justify-center 
                    p-4 md:p-6 lg:p-8
                    shadow-[0_20px_50px_-15px_rgba(0,0,0,0.3)]
                    hover:shadow-[0_30px_80px_-15px_rgba(255,107,0,0.4)]
                    hover:scale-110
                    border border-white/5
                    transition-all duration-700
                    cursor-pointer
                  `}
                >
                  {/* 
                     核心改进：
                     1. 背景改为 bg-slate-900：深色背景能让白色 Logo 和彩色 Logo（如 UNI 的橙色）完美浮现。
                     2. 减小了 Padding：让 Logo 占据圆圈约 90% 的面积。
                     3. 增加了 drop-shadow-lg：让 Logo 本身也有立体感。
                  */}
                  <div className="w-full h-full flex items-center justify-center overflow-hidden">
                    <img 
                        src={brand.image} 
                        alt={`Partner Brand ${i+1}`}
                        className="max-w-[90%] max-h-[90%] object-contain transition-all duration-700 filter brightness-110 group-hover:scale-110 drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]"
                        loading="lazy"
                    />
                  </div>
                  
                  {/* 悬停时的光圈效果 */}
                  <div className="absolute inset-0 rounded-full border-2 border-zecoola-orange/0 group-hover:border-zecoola-orange/30 scale-110 group-hover:scale-100 transition-all duration-1000"></div>
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

          {/* 背景装饰：增加科技感的柔光 */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl bg-zecoola-orange/5 rounded-full blur-[160px] -z-10"></div>
        </div>

      </div>
    </section>
  );
};

export default Gallery;
