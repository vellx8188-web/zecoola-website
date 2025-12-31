
import React, { useState, useEffect } from 'react';
import { LanguageProvider } from './LanguageContext';

// 维护页面
import ComingSoon from './components/ComingSoon';

// V1 原始版本组件
import NavbarV1 from './components/Navbar';
import HeroV1 from './components/Hero';
import AboutV1 from './components/About';
import ServicesV1 from './components/Services';
import GalleryV1 from './components/Gallery';
import ContactV1 from './components/Contact';
import FooterV1 from './components/Footer';

// V2 旗舰版组件 (正在开发中)
import NavbarV2 from './components/v2/NavbarV2';
import HeroSliderV2 from './components/v2/HeroSliderV2';
import HomeV2 from './components/v2/HomeV2';
import FooterV2 from './components/v2/FooterV2';

type ViewMode = 'MAINTENANCE' | 'V1_ADMIN' | 'V2_PREVIEW';

function App() {
  const [viewMode, setViewMode] = useState<ViewMode>('MAINTENANCE');

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    
    if (params.get('v') === '2') {
      setViewMode('V2_PREVIEW');
    } else if (params.get('mode') === 'admin') {
      setViewMode('V1_ADMIN');
    } else {
      setViewMode('MAINTENANCE');
    }
  }, []);

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-orange-100 selection:text-orange-600">
        {/* 情况 1: 默认维护模式 - 给普通客户看 */}
        {viewMode === 'MAINTENANCE' && <ComingSoon />}

        {/* 情况 2: V1 管理模式 - 只有 ?mode=admin 能看，不带任何 V2 按钮 */}
        {viewMode === 'V1_ADMIN' && (
          <>
            <NavbarV1 />
            <main>
              <HeroV1 />
              <AboutV1 />
              <ServicesV1 />
              <GalleryV1 />
              <ContactV1 />
            </main>
            <FooterV1 />
          </>
        )}

        {/* 情况 3: V2 预览模式 - 只有 ?v=2 能看，用于我们调整新版 */}
        {viewMode === 'V2_PREVIEW' && (
          <>
            <NavbarV2 />
            <main>
              <HeroSliderV2 />
              <HomeV2 />
            </main>
            <FooterV2 />
          </>
        )}
      </div>
    </LanguageProvider>
  );
}

export default App;
