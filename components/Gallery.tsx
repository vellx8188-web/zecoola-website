import React from 'react';
import { BRANDS, CONTENT } from '../constants';
import { useLanguage } from '../LanguageContext';

const Gallery: React.FC = () => {
  const { language } = useLanguage();
  const { productionTitle, productionItems, sampleTitle, brandsTitle, sampleImages } = CONTENT.gallery;

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        
        {/* Factory Showcase - Matches Slides 6 & 7 */}
        <div className="mb-24">
          <h2 className="text-3xl font-bold text-zecoola-blue mb-8 border-l-8 border-zecoola-orange pl-4">
            {productionTitle[language]}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
             {productionItems.map((item, index) => (
                <div key={index} className="rounded-xl overflow-hidden shadow-lg relative group h-64">
                  <img src={item.image} alt={item.title[language]} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute bottom-0 left-0 bg-black/70 text-white p-3 w-full font-medium">
                    {item.title[language]}
                  </div>
                </div>
             ))}
          </div>
        </div>

        {/* Samples Showcase - Matches Slide 9 */}
        <div className="mb-24">
          <h2 className="text-3xl font-bold text-zecoola-blue mb-8 border-l-8 border-zecoola-orange pl-4">
            {sampleTitle[language]}
          </h2>
          <div className="bg-slate-50 rounded-3xl p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {sampleImages.map((imgSrc, i) => (
                <div key={i} className="bg-white rounded-xl p-2 shadow-sm hover:shadow-md transition-shadow">
                  <div className="aspect-square bg-white rounded-lg overflow-hidden flex items-center justify-center">
                      <img 
                        src={imgSrc} 
                        alt="Shoe Sample" 
                        className="object-contain h-full w-full" 
                      />
                  </div>
                </div>
              ))}
            </div>
            <p className="text-center text-slate-400 mt-6 text-sm italic">
              {language === 'en' ? 'Selected samples from our collection' : '精选样品展示'}
            </p>
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