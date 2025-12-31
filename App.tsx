
import React, { useState, useEffect } from 'react';
import { LanguageProvider } from './LanguageContext';

// V2 旗舰版组件
import NavbarV2 from './components/v2/NavbarV2';
import HeroSliderV2 from './components/v2/HeroSliderV2';
import HomeV2 from './components/v2/HomeV2';
import FooterV2 from './components/v2/FooterV2';
import ComingSoon from './components/ComingSoon';

type ViewMode = 'V1_ADMIN' | 'V2_PRODUCTION';

function App() {
  const [viewMode, setViewMode] = useState<ViewMode>('V2_PRODUCTION');

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get('mode') === 'admin') {
      setViewMode('V1_ADMIN');
    }
  }, []);

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-orange-100 selection:text-orange-600">
        <NavbarV2 />
        <main>
          <HeroSliderV2 />
          <HomeV2 />
        </main>
        <FooterV2 />
      </div>
    </LanguageProvider>
  );
}

export default App;
