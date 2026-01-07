
import React, { useState, useEffect } from 'react';
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
 * 使用最稳健的字符串搜索，确保在任何浏览器环境下都能捕捉到 v=2
 */
const detectCurrentViewMode = (): 'maintenance' | 'admin' | 'v2_new' => {
  if (typeof window === 'undefined') return 'maintenance';
  
  const fullUrl = window.location.href.toLowerCase();
  const search = window.location.search.toLowerCase();
  const hash = window.location.hash.toLowerCase();
  
  // 打印诊断日志，你可以在控制台查看
  console.log('%c[ZECOOLA DEBUG] Current URL:', 'color: #FF6B00; font-weight: bold', fullUrl);

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
  const [viewMode, setViewMode] = useState<'maintenance' | 'admin' | 'v2_new'>(() => detectCurrentViewMode());

  useEffect(() => {
    const handleLocationChange = () => setViewMode(detectCurrentViewMode());
    window.addEventListener('popstate', handleLocationChange);
    return () => window.removeEventListener('popstate', handleLocationChange);
  }, []);

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
