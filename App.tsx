
import React, { useState } from 'react';
import { LanguageProvider } from './LanguageContext';

// 1. 导入维护模式
import ComingSoon from './components/ComingSoon';

// 2. 导入【旧版 V2】(用于 ?mode=admin)
import NavbarV2Old from './components/v2/NavbarV2';
import HeroSliderV2Old from './components/v2/HeroSliderV2';
import HomeV2Old from './components/v2/HomeV2';
import FooterV2Old from './components/v2/FooterV2';

// 3. 导入【全新 V2 开发实验室】(用于 ?v=2)
import AppV2New from './components/v2_new/AppV2New';

/**
 * 路由逻辑解析函数
 * 放在外面确保初始化时立即执行
 */
const getInitialMode = (): 'maintenance' | 'admin' | 'v2_new' => {
  if (typeof window === 'undefined') return 'maintenance';
  
  const params = new URLSearchParams(window.location.search);
  const v = params.get('v');
  const mode = params.get('mode');

  if (v === '2') return 'v2_new';
  if (mode === 'admin') return 'admin';
  return 'maintenance';
};

function App() {
  // 同步初始化状态，避免 useEffect 延迟
  const [viewMode] = useState<'maintenance' | 'admin' | 'v2_new'>(getInitialMode());

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-orange-100 selection:text-orange-600">
        
        {/* 默认维护页 (/) */}
        {viewMode === 'maintenance' && <ComingSoon />}
        
        {/* 已分发给别人的 admin 入口 (?mode=admin) */}
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

        {/* 还原自本地代码的全新 V2 实验室 (?v=2) */}
        {viewMode === 'v2_new' && <AppV2New />}
      </div>
    </LanguageProvider>
  );
}

export default App;
