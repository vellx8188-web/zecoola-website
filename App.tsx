import React, { useState, useEffect } from 'react';
import { LanguageProvider } from './LanguageContext.tsx';

// 基础组件 - 补齐 .tsx
import ComingSoon from './components/ComingSoon.tsx';

// V2 旧版组件 - 补齐 .tsx
import NavbarV2Old from './components/v2/NavbarV2.tsx'; 
import HeroSliderV2Old from './components/v2/HeroSliderV2.tsx';
import HomeV2Old from './components/v2/HomeV2.tsx';
import FooterV2Old from './components/v2/FooterV2.tsx';

// V2 全新入口 - 补齐 .tsx 并加版本号
import AppV2New from './v2_new/AppV2New.tsx?v=final_v2';

const detectViewMode = (): 'maintenance' | 'admin' | 'v2_new' => {
  if (typeof window === 'undefined') return 'maintenance';
  
  const url = window.location.href.toLowerCase();
  
  // 1. 如果 URL 包含 v=2，强制开启并保存状态
  if (url.includes('v=2')) {
    localStorage.setItem('zecoola_lab_mode', 'v2');
    return 'v2_new';
  }

  // 2. 如果之前保存过状态，维持状态
  if (localStorage.getItem('zecoola_lab_mode') === 'v2') {
    return 'v2_new';
  }
  
  // 3. 其他模式检测
  if (url.includes('mode=admin')) return 'admin';
  
  return 'maintenance';
};

function App() {
  const [viewMode, setViewMode] = useState<'maintenance' | 'admin' | 'v2_new'>(() => detectViewMode());

  useEffect(() => {
    // 每秒检测一次 URL，防止 hash 改变但组件不刷新的情况
    const timer = setInterval(() => {
      const current = detectViewMode();
      if (current !== viewMode) setViewMode(current);
    }, 1000);
    return () => clearInterval(timer);
  }, [viewMode]);

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-white font-sans text-slate-900 overflow-x-hidden">
        {viewMode === 'v2_new' && <AppV2New />}
        
        {viewMode === 'admin' && (
          <div className="v2-admin-layout">
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