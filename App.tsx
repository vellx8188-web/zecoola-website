
import React, { useState } from 'react';
import { LanguageProvider } from './LanguageContext';

// 1. 基础组件
import ComingSoon from './components/ComingSoon';

// 2. 旧版 V2 组件 (修正路径：必须包含 components/ 前缀)
import NavbarV2Old from './components/v2/NavbarV2'; 
import HeroSliderV2Old from './components/v2/HeroSliderV2';
import HomeV2Old from './components/v2/HomeV2';
import FooterV2Old from './components/v2/FooterV2';

// 3. 全新 V2 入口 (位于根目录的 v2_new 文件夹)
import AppV2New from './v2_new/AppV2New';

/**
 * 强化版路由识别
 * 支持 ?v=2 以及 ?mode=admin
 */
const getInitialMode = (): 'maintenance' | 'admin' | 'v2_new' => {
  if (typeof window === 'undefined') return 'maintenance';
  
  const params = new URLSearchParams(window.location.search);
  const v = params.get('v');
  const mode = params.get('mode');

  // 调试诊断
  console.log('[Zecoola Router] Detect Mode:', { v, mode });

  if (v === '2') return 'v2_new';
  if (mode === 'admin') return 'admin';
  
  return 'maintenance';
};

function App() {
  const [viewMode] = useState<'maintenance' | 'admin' | 'v2_new'>(() => getInitialMode());

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-white font-sans text-slate-900">
        
        {/* 模式 A: 全新 V2 实验室 (?v=2) */}
        {viewMode === 'v2_new' && <AppV2New />}

        {/* 模式 B: 已分发的管理入口 (?mode=admin) */}
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

        {/* 模式 C: 默认维护模式 (/) */}
        {viewMode === 'maintenance' && <ComingSoon />}
        
      </div>
    </LanguageProvider>
  );
}

export default App;
