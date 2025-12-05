
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
             {/* First image spans full width on larger screens to break grid monotony, or keep simple grid. 
                 Using simple grid for 7 items means last row has 1 item if 3 cols. 
                 Let's make the first one featured (large).
             */}
             {images.map((imgSrc, index) => (
                <div 
                  key={index} 
                  className={`rounded-xl overflow-hidden shadow-lg relative group h-64 ${index === 0 ? 'md:col-span-2 lg:col-span-2 md:h-80' : 'md:h-80'}`}
                >
                  <img src={imgSrc} alt={`Factory View ${index + 1}`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
             ))}
          </div>
        </div>

        {/* Brands - Matches Slide 10 */}
        <div>
          <h2 className="text-3xl font-bold text-center text-zecoola-blue mb-12">{brandsTitle[language]}</h2>
          <div className="flex flex-wrap justify-center gap-6 items-center">
            {BRANDS.map((brand, i) => (
              <div key={brand} className="group relative">
                {/* Brand Placeholder Logo */}
                <div className="w-40 h-20 bg-white border border-slate-200 rounded-lg flex items-center justify-center shadow-sm hover:shadow-md hover:border-zecoola-orange transition-all p-2">
                   {/* We use text here, but user should replace with logos from Slide 10 */}
                   <span className="font-bold text-slate-500 group-hover:text-zecoola-orange">{brand}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Gallery;
