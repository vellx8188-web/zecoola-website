
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

        {/* Brand Ecosystem - High Contrast Deep Theme */}
        <div className="relative py-28 bg-[#f8fafc] rounded-[5rem] border border-slate-200/50">
          <div className="text-center mb-28">
            <h2 className="text-4xl md:text-5xl font-black text-zecoola-blue mb-4 uppercase tracking-tighter">
                {brandsTitle[language]}
            </h2>
            <div className="w-20 h-1.5 bg-zecoola-orange mx-auto"></div>
          </div>
          
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-12 md:gap-x-12 md:gap-y-24 max-w-7xl mx-auto px-8">
            {BRANDS.map((brand, i) => {
              // 错落有致的布局偏移
              const verticalOffset = i % 2 === 0 ? "mt-0" : "md:mt-24";
              
              const content = (
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  animate={{
                    y: [0, -20, 0],
                  }}
                  transition={{ 
                    y: {
                      duration: 8,
                      repeat: Infinity,
                      delay: i * 0.8,
                      ease: "easeInOut"
                    },
                    default: {
                      delay: i * 0.08,
                      type: "spring",
                      stiffness: 100
                    }
                  }}
                  className={`
                    ${verticalOffset}
                    group relative
                    w-36 h-36 md:w-56 md:h-56 lg:w-64 lg:h-64
                    bg-[#0f172a]
                    rounded-full
                    flex items-center justify-center 
                    p-3 md:p-5 lg:p-6
                    shadow-[0_30px_70px_-15px_rgba(15,23,42,0.4)]
                    hover:shadow-[0_45px_100px_-20px_rgba(255,107,0,0.5)]
                    hover:scale-110
                    border-4 border-white/5
                    hover:border-zecoola-orange/20
                    transition-all duration-700
                    cursor-pointer
                  `}
                >
                  {/* 
                     视觉核心处理：
                     1. 使用 bg-[#0f172a] (深蓝黑)：白色文字、橙色文字在这个底色下亮度最高，最清晰。
                     2. 设置容器溢出隐藏并圆角化。
                     3. 给图片应用 drop-shadow-[0_0_10px_rgba(255,255,255,0.15)]：
                        这个滤镜能确保深色 Logo 在深色背景下依然能被识别出轮廓，同时增强亮色 Logo 的光感。
                  */}
                  <div className="w-full h-full flex items-center justify-center rounded-full overflow-hidden relative">
                    <img 
                        src={brand.image} 
                        alt={`Partner Brand ${i+1}`}
                        className="max-w-[95%] max-h-[95%] w-auto h-auto object-contain transition-all duration-700 drop-shadow-[0_0_20px_rgba(255,255,255,0.2)] group-hover:scale-110 group-hover:drop-shadow-[0_0_30px_rgba(255,107,0,0.3)]"
                        loading="lazy"
                    />
                  </div>
                  
                  {/* 背景装饰光效 */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
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

          {/* 页面装饰元素：提升整体大气感 */}
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-zecoola-orange/5 rounded-full blur-[200px] -z-10 animate-pulse"></div>
          <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-zecoola-blue/5 rounded-full blur-[200px] -z-10"></div>
        </div>

      </div>
    </section>
  );
};

export default Gallery;
