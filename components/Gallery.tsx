
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

        {/* Brands Section - Premium Grid Design */}
        <div>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-zecoola-blue mb-4">{brandsTitle[language]}</h2>
            <div className="w-16 h-1 bg-zecoola-orange mx-auto opacity-50"></div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 md:gap-6">
            {BRANDS.map((brandImg, i) => (
              <div 
                key={i} 
                className="group bg-slate-50 border border-slate-100 rounded-xl h-32 flex items-center justify-center p-6 hover:shadow-xl hover:border-slate-200 hover:-translate-y-1 transition-all duration-300"
              >
                {/* 
                  object-contain: Ensures the logo fits within the box without distortion.
                  grayscale & opacity: Unifies different logo styles/colors into a cohesive look.
                */}
                <img 
                  src={brandImg} 
                  alt={`Brand ${i+1}`}
                  className="max-w-full max-h-full object-contain filter grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
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
