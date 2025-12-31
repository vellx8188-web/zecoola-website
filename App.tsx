
import React, { useState, useEffect } from 'react';
import { LanguageProvider } from './LanguageContext';

// 统一使用 V2 的高级组件
import NavbarV2 from './components/v2/NavbarV2';
import HeroSliderV2 from './components/v2/HeroSliderV2';
import HomeV2 from './components/v2/HomeV2';
import FooterV2 from './components/v2/FooterV2';

function App() {
  const [isV2, setIsV2] = useState(false);

  useEffect(() => {
    // 默认依然可以通过 ?v=2 预览新版，或者直接设为默认
    const params = new URLSearchParams(window.location.search);
    if (params.get('v') === '2' || window.location.hostname === 'localhost') {
      setIsV2(true);
    }
  }, []);

  // 这里的单页面逻辑：所有导航都在 HomeV2 内部通过 ID 滚动
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-orange-100 selection:text-orange-600">
        <NavbarV2 />
        <main>
          <HeroSliderV2 />
          <HomeV2 />
        </main>
        <FooterV2 />
        
        {/* 仅预览环境显示的切换按钮 */}
        {!isV2 && (
          <div className="fixed bottom-6 right-6 z-[60]">
            <a href="/?v=2" className="bg-orange-600 text-white text-xs font-bold px-6 py-3 rounded-full shadow-2xl hover:bg-slate-900 transition-all">
              进入 V2 高级版体验
            </a>
          </div>
        )}
      </div>
    </LanguageProvider>
  );
}

export default App;
