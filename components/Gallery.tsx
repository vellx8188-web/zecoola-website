
import React from 'react';
import { BRANDS, CONTENT } from '../constants';
import { useLanguage } from '../LanguageContext';

const Gallery: React.FC = () => {
  const { language } = useLanguage();
  const { title, images, brandsTitle } = CONTENT.gallery;

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        
        {/* Factory Showcase - 7 Images */}
        <div className="mb-24">
          <h2 className="text-3xl font-bold text-zecoola-blue mb-8 border-l-8 border-zecoola-orange pl-4">
            {title[language]}
          </h2>
          
          {/* Updated to a tidy, uniform grid as requested */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
             {images.map((imgSrc, index) => (
                <div 
                  key={index} 
                  className="rounded-xl overflow-hidden shadow-lg relative group h-64 md:h-72"
                >
                  <img src={imgSrc} alt={`Factory View ${index + 1}`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
             ))}
          </div>
        </div>

        {/* Brands - Now using Images */}
        <div>
          <h2 className="text-3xl font-bold text-center text-zecoola-blue mb-12">{brandsTitle[language]}</h2>
          <div className="flex flex-wrap justify-center gap-8 items-center">
            {BRANDS.map((brandImg, i) => (
              <div key={i} className="group relative w-32 h-16 md:w-40 md:h-20 flex items-center justify-center p-2 grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100">
                <img 
                  src={brandImg} 
                  alt={`Brand ${i+1}`}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Gallery;
