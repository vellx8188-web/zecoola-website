
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

        {/* Brands Section - Flexbox Centered Layout for Perfect Alignment */}
        <div>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-zecoola-blue mb-4">{brandsTitle[language]}</h2>
            <div className="w-16 h-1 bg-zecoola-orange mx-auto opacity-50"></div>
          </div>
          
          {/* 
            Change to Flexbox with wrap and center alignment.
            This ensures that if you have 11 items (odd number), the last row centers itself nicely.
          */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-8 max-w-7xl mx-auto">
            {BRANDS.map((brandImg, i) => (
              <div 
                key={i} 
                className="
                  group 
                  bg-white 
                  border border-slate-100 
                  rounded-xl 
                  /* Fixed dimensions for uniform high-end look */
                  w-[140px] h-[80px] 
                  md:w-[180px] md:h-[100px] 
                  lg:w-[200px] lg:h-[120px]
                  flex items-center justify-center 
                  p-4 md:p-6 
                  shadow-sm hover:shadow-xl hover:border-slate-200 
                  transform hover:-translate-y-1 
                  transition-all duration-300
                "
              >
                {/* 
                  object-contain: Ensures the logo fits within the box without distortion.
                  filter logic: Gray by default, Color on hover.
                */}
                <img 
                  src={brandImg} 
                  alt={`Brand ${i+1}`}
                  className="max-w-full max-h-full object-contain filter grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
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
