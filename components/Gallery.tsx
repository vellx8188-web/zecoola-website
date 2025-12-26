
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
        
        {/* Factory Showcase - 保持原有的工厂展示 */}
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
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="rounded-2xl overflow-hidden shadow-lg relative group aspect-[4/3] bg-slate-100"
                >
                  <img 
                    src={imgSrc} 
                    alt={`Facility View ${index + 1}`} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" 
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </motion.div>
             ))}
          </div>
        </div>

        {/* Brand Ecosystem - Classic Industrial Grid */}
        <div className="bg-slate-50 rounded-[3rem] py-20 px-6 md:px-12 border border-slate-100">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-zecoola-blue mb-4 uppercase tracking-tight">
                {brandsTitle[language]}
            </h2>
            <div className="w-16 h-1 bg-zecoola-orange mx-auto"></div>
          </div>
          
          {/* 
            方形网格布局：
            - 使用 bg-slate-900 (深色) 容器确保白色 Logo 可见。
            - grid-cols 分布确保在各种屏幕下都整齐。
            - 移除复杂动画，仅保留简单的悬停放大，提升加载性能。
          */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6 max-w-6xl mx-auto">
            {BRANDS.map((brand, i) => {
              const cardContent = (
                <div 
                  className="group relative aspect-square md:aspect-video bg-slate-900 rounded-xl flex items-center justify-center p-4 md:p-6 border border-slate-800 hover:border-zecoola-orange/50 transition-all duration-300 shadow-sm hover:shadow-xl hover:-translate-y-1"
                >
                  <img 
                    src={brand.image} 
                    alt={`Partner ${i+1}`}
                    className="max-w-full max-h-full object-contain filter transition-all duration-300 group-hover:scale-110"
                    loading="lazy"
                  />
                </div>
              );

              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                >
                  {brand.url ? (
                    <a href={brand.url} target="_blank" rel="noopener noreferrer">
                      {cardContent}
                    </a>
                  ) : (
                    cardContent
                  )}
                </motion.div>
              );
            })}
          </div>

          <p className="text-center text-slate-400 mt-12 text-sm font-medium italic">
            {language === 'en' ? 'Collaborating with industry leaders worldwide' : '与全球行业领导者深度合作'}
          </p>
        </div>

      </div>
    </section>
  );
};

export default Gallery;
