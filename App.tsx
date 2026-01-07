
import React, { useEffect, useState } from 'react';
import { LanguageProvider } from './LanguageContext';

// 1. 导入维护模式
import ComingSoon from './components/ComingSoon';

// 2. 导入【旧版 V2】(用于 ?mode=admin)
import NavbarV2Old from './components/v2/NavbarV2';
import HeroSliderV2Old from './components/v2/HeroSliderV2';
import HomeV2Old from './components/v2/HomeV2';
import FooterV2Old from './components/v2/FooterV2';

// 3. 导入【全新 V2 开发实验室】(用于 ?v=2) - 还原自本地代码
import AppV2New from './components/v2_new/AppV2New';

function App() {
  const [viewMode, setViewMode] = useState<'maintenance' | 'admin' | 'v2_new'>('maintenance');

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const v = params.get('v');
    const mode = params.get('mode');

    if (v === '2') {
      setViewMode('v2_new');
    } else if (mode === 'admin') {
      setViewMode('admin');
    } else {
      setViewMode('maintenance');
    }
  }, []);

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-orange-100 selection:text-orange-600">
        
        {/* 默认维护页 */}
        {viewMode === 'maintenance' && <ComingSoon />}
        
        {/* 已分发给别人的 admin 入口 (旧版 V2) */}
        {viewMode === 'admin' && (
          <>
            <NavbarV2Old />
            <main>
              <HeroSliderV2Old />
              <HomeV2Old />
            </main>
            <FooterV2Old />
          </>
        )}

        {/* 还原自本地代码的全新 V2 (?v=2) */}
        {viewMode === 'v2_new' && <AppV2New />}
      </div>
    </LanguageProvider>
  );
}

export default App;
