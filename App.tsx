
import React, { useState } from 'react';
import { LanguageProvider } from './LanguageContext';

// 1. 基础组件
import ComingSoon from './components/ComingSoon';

// 2. 旧版 V2 入口 (路径必须与文件列表中的 components/v2/ 匹配)
import NavbarV2Old from './components/v2/NavbarV2'; 
import HeroSliderV2Old from './components/v2/HeroSliderV2';
import HomeV2Old from './components/v2/HomeV2';
import FooterV2Old from './components/v2/FooterV2';

// 3. 全新 V2 入口 (根据列表，它在根目录的 v2_new 文件夹中)
import AppV2New from './v2_new/AppV2New';

/**
 * 路由解析函数
 * 强制确保在第一帧渲染前拿到 ?v=2 参数
 */
const getInitialMode = (): 'maintenance' | 'admin' | 'v2_new' => {
  if (typeof window === 'undefined') return 'maintenance';
  
  const params = new URLSearchParams(window.location.search);
  const v = params.get('v');
  const mode = params.get('mode');

  console.log('[Zecoola Router] Detect:', { v, mode });

  if (v === '2') return 'v2_new';
  if (mode === 'admin') return 'admin';
  
  return 'maintenance';
};

function App() {
  // 使用函数初始化，确保 viewMode 在渲染前锁定
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
