import React, { useState, useEffect } from 'react';
import { LanguageProvider } from './LanguageContext.tsx';

// 1. 基础组件
import ComingSoon from './components/ComingSoon.tsx';

// 2. 旧版 V2 组件
import NavbarV2Old from './components/v2/NavbarV2.tsx'; 
import HeroSliderV2Old from './components/v2/HeroSliderV2.tsx';
import HomeV2Old from './components/v2/HomeV2.tsx';
import FooterV2Old from './components/v2/FooterV2.tsx';

// 3. 全新 V2 入口
import AppV2New from './v2_new/AppV2New.tsx';

const detectCurrentViewMode = (): 'maintenance' | 'admin' | 'v2_new' => {
  if (typeof window === 'undefined') return 'maintenance';
  
  const fullUrl = window.location.href.toLowerCase();
  const search = window.location.search.toLowerCase();
  
  if (fullUrl.includes('v=2') || search.includes('v=2')) {
    return 'v2_new';
  }
  
  if (fullUrl.includes('mode=admin') || search.includes('mode=admin')) {
    return 'admin';
  }
  
  return 'maintenance';
};

function App() {
  const [viewMode, setViewMode] = useState<'maintenance' | 'admin' | 'v2_new'>(() => detectCurrentViewMode());

  useEffect(() => {
    const handleLocationChange = () => setViewMode(detectCurrentViewMode());
    window.addEventListener('popstate', handleLocationChange);
    return () => window.removeEventListener('popstate', handleLocationChange);
  }, []);

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-white font-sans text-slate-900">
        {viewMode === 'v2_new' && <AppV2New />}
        {viewMode === 'admin' && (
          <div className="v2-old-wrapper">
            <NavbarV2Old />
            <main>
              <HeroSliderV2Old />
              <HomeV2Old />
            </main>
            <FooterV2Old />
          </div>
        )}
        {viewMode === 'maintenance' && <ComingSoon />}
      </div>
    </LanguageProvider>
  );
}

export default App;