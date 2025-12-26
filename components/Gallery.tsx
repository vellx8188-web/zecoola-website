
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
        
        {/* Factory Showcase - 工厂实景展示 */}
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
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="rounded-2xl overflow-hidden shadow-md relative group aspect-[4/3] bg-slate-100"
                >
                  <img 
                    src={imgSrc} 
                    alt={`Facility View ${index + 1}`} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out" 
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </motion.div>
             ))}
          </div>
        </div>

        {/* Strategic Partnerships - 自适应居中方形网格 */}
        <div className="relative py-20 px-4 md:px-12 bg-slate-50 rounded-[4rem] border border-slate-100">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-zecoola-blue mb-4 uppercase tracking-tighter">
                {brandsTitle[language]}
            </h2>
            <div className="w-16 h-1 bg-zecoola-orange mx-auto"></div>
          </div>
          
          {/* 
            使用 flex 布局替代 grid 以实现“自适应居中”：
            1. justify-center 确保所有项目（包括最后一行）都在中间。
            2. 每个卡片固定宽度或在响应式下调整宽度。
          */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-6 max-w-7xl mx-auto">
            {BRANDS.map((brand, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.03 }}
                className="w-[calc(50%-1rem)] sm:w-[calc(33.33%-1.5rem)] md:w-[calc(25%-1.5rem)] lg:w-[calc(20%-1.5rem)] max-w-[280px]"
              >
                {brand.url ? (
                  <a 
                    href={brand.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group block relative aspect-video bg-[#111827] rounded-xl flex items-center justify-center p-4 md:p-6 border border-slate-800 hover:border-zecoola-orange transition-all duration-300 shadow-sm hover:shadow-xl hover:-translate-y-1"
                  >
                    <img 
                      src={brand.image} 
                      alt={`Partner ${i+1}`}
                      className="max-w-[90%] max-h-[85%] object-contain transition-transform duration-300 group-hover:scale-105"
                      loading="lazy"
                    />
                  </a>
                ) : (
                  <div className="aspect-video bg-[#111827] rounded-xl flex items-center justify-center p-4 md:p-6 border border-slate-800 shadow-sm">
                    <img 
                      src={brand.image} 
                      alt={`Partner ${i+1}`}
                      className="max-w-[90%] max-h-[85%] object-contain"
                      loading="lazy"
                    />
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          <div className="mt-16 text-center">
             <p className="text-slate-400 text-sm font-medium tracking-wide">
               {language === 'en' ? 'TRUSTED BY GLOBAL LEADERS' : '深受全球行业领导者信赖'}
             </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Gallery;
