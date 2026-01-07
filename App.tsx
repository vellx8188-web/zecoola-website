
import React, { useState, useEffect } from 'react';
import { LanguageProvider } from './LanguageContext';

// 1. 基础组件
import ComingSoon from './components/ComingSoon';

// 2. 旧版 V2 组件 (确保路径与 components/v2/ 文件夹匹配)
import NavbarV2Old from './components/v2/NavbarV2'; 
import HeroSliderV2Old from './components/v2/HeroSliderV2';
import HomeV2Old from './components/v2/HomeV2';
import FooterV2Old from './components/v2/FooterV2';

// 3. 全新 V2 入口
import AppV2New from './v2_new/AppV2New';

/**
 * 路由解析逻辑
 * 使用最稳健的字符串搜索，确保在任何浏览器环境下都能捕捉到 v=2
 */
const detectCurrentViewMode = (): 'maintenance' | 'admin' | 'v2_new' => {
  if (typeof window === 'undefined') return 'maintenance';
  
  const fullUrl = window.location.href.toLowerCase();
  const search = window.location.search.toLowerCase();
  const hash = window.location.hash.toLowerCase();
  
  // 打印诊断日志，你可以在控制台查看
  console.log('[Zecoola Router] Scanning URL for parameters...', { fullUrl, search, hash });

  // 优先级最高：V2 实验室模式
  if (fullUrl.includes('v=2') || search.includes('v=2') || hash.includes('v=2')) {
    console.log('[Zecoola Router] Success: V2 New mode activated.');
    return 'v2_new';
  }
  
  // 优先级中等：管理员预览模式
  if (fullUrl.includes('mode=admin') || search.includes('mode=admin') || hash.includes('mode=admin')) {
    console.log('[Zecoola Router] Success: Admin mode activated.');
    return 'admin';
  }
  
  console.log('[Zecoola Router] Default: Maintenance mode active.');
  return 'maintenance';
};

function App() {
  // 初始状态检测
  const [viewMode, setViewMode] = useState<'maintenance' | 'admin' | 'v2_new'>(() => detectCurrentViewMode());

  // 挂载后的二次检测，防止某些环境下的异步 URL 注入
  useEffect(() => {
    const finalMode = detectCurrentViewMode();
    if (finalMode !== viewMode) {
      setViewMode(finalMode);
    }
    
    // 监听地址栏变化
    const onUrlChange = () => setViewMode(detectCurrentViewMode());
    window.addEventListener('popstate', onUrlChange);
    return () => window.removeEventListener('popstate', onUrlChange);
  }, [viewMode]);

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-white font-sans text-slate-900">
        
        {/* 全新 V2 实验室 (?v=2) */}
        {viewMode === 'v2_new' && <AppV2New />}

        {/* 管理预览模式 (?mode=admin) */}
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

        {/* 维护模式 (默认) */}
        {viewMode === 'maintenance' && <ComingSoon />}
        
      </div>
    </LanguageProvider>
  );
}

export default App;
