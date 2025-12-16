
import React, { useState, useEffect, Suspense } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';
import ComingSoon from './components/ComingSoon';
import { LanguageProvider } from './LanguageContext';
import { CONTENT } from './constants';

// ----------------------------------------------------------------------
// 性能优化：懒加载 (Lazy Loading)
// 只有当需要显示这些组件时，浏览器才会去下载它们的代码。
// 这能显著提升网站打开速度。
// ----------------------------------------------------------------------
const About = React.lazy(() => import('./components/About'));
const Milestone = React.lazy(() => import('./components/Milestone'));
const Services = React.lazy(() => import('./components/Services'));
const Products = React.lazy(() => import('./components/Products'));
const Gallery = React.lazy(() => import('./components/Gallery'));
const Contact = React.lazy(() => import('./components/Contact'));

// 简单的加载占位符
const LoadingFallback = () => (
  <div className="py-20 flex justify-center items-center">
    <div className="w-8 h-8 border-4 border-zecoola-orange border-t-transparent rounded-full animate-spin"></div>
  </div>
);

// ==============================================================================
// 网站状态控制 / WEBSITE STATUS CONTROL
// ==============================================================================
// true  = 默认显示 "Coming Soon"
// false = 默认显示正式网站 (上线时改为 false)
const DEFAULT_MAINTENANCE_MODE = true; 

function App() {
  const [isMaintenance, setIsMaintenance] = useState(DEFAULT_MAINTENANCE_MODE);
  const [isChecking, setIsChecking] = useState(true);

  // ------------------------------------------------
  // 强制修复 Favicon (浏览器标签页 Logo)
  // Fix: Force browser to recognize the favicon by removing old links and adding a new one
  // ------------------------------------------------
  useEffect(() => {
    const updateFavicon = () => {
      // 1. 移除所有旧的 icon 标签
      const oldLinks = document.querySelectorAll("link[rel*='icon']");
      oldLinks.forEach(link => link.remove());

      // 2. 创建一个新的 link 标签
      const link = document.createElement('link');
      link.type = 'image/png';
      link.rel = 'icon';
      // 3. 添加时间戳参数，强制浏览器不使用缓存 (?v=timestamp)
      link.href = `/logo.png?v=${new Date().getTime()}`;
      
      document.getElementsByTagName('head')[0].appendChild(link);
    };

    updateFavicon();
  }, [isMaintenance]); // 当维护模式切换时，再次执行以防丢失

  useEffect(() => {
    // 1. 检查 URL 是否包含秘密钥匙 (?mode=admin)
    const params = new URLSearchParams(window.location.search);
    const mode = params.get('mode');

    // 2. 检查 SessionStorage 是否已经解锁过
    const isUnlocked = sessionStorage.getItem('site_unlocked') === 'true';

    if (mode === 'admin' || isUnlocked) {
      // 如果有钥匙，或者之前解锁过 -> 关闭维护模式，显示正式网站
      setIsMaintenance(false);
      sessionStorage.setItem('site_unlocked', 'true'); // 记住解锁状态
    } else {
      // 否则 -> 保持默认状态
      setIsMaintenance(DEFAULT_MAINTENANCE_MODE);
    }
    
    setIsChecking(false);
  }, []);

  // 在检查完身份前，暂时显示空白或Loading，避免闪烁
  if (isChecking) return null;

  // 如果处于维护模式，显示 Coming Soon 页面
  if (isMaintenance) {
    return <ComingSoon />;
  }

  // 否则显示正式网站
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-slate-50 font-sans">
        <Navbar />
        <main>
          {/* Hero 部分通常是首屏，为了SEO和体验最好不要懒加载，或者保持原样 */}
          <Hero />
          
          {/* 以下部分开启懒加载，提升首屏速度 */}
          <Suspense fallback={<LoadingFallback />}>
            <About />
          </Suspense>
          
          <Suspense fallback={<LoadingFallback />}>
            <Milestone />
          </Suspense>
          
          <Suspense fallback={<LoadingFallback />}>
            <Services />
          </Suspense>
          
          <Suspense fallback={<LoadingFallback />}>
            <Products />
          </Suspense>
          
          <Suspense fallback={<LoadingFallback />}>
            <Gallery />
          </Suspense>
          
          <Suspense fallback={<LoadingFallback />}>
            <Contact />
          </Suspense>
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;
