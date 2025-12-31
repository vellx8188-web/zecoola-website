
import React, { useState, useEffect } from 'react';
import { LanguageProvider } from './LanguageContext';

// V1 组件 (现有版本)
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Milestone from './components/Milestone';
import Services from './components/Services';
import Products from './components/Products';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';

// V2 组件 (新开发的专业 B2B 版)
import NavbarV2 from './components/v2/NavbarV2';
import HomeV2 from './components/v2/HomeV2';
import AboutV2 from './components/v2/AboutV2';
import CapabilitiesV2 from './components/v2/CapabilitiesV2';
import ServicesV2 from './components/v2/ServicesV2';
import ContactV2 from './components/v2/ContactV2';
import FooterV2 from './components/v2/FooterV2';

function App() {
  const [isV2, setIsV2] = useState(false);
  const [activePageV2, setActivePageV2] = useState('home');

  useEffect(() => {
    // 检查 URL 参数是否包含 v=2
    const params = new URLSearchParams(window.location.search);
    if (params.get('v') === '2') {
      setIsV2(true);
    }
  }, []);

  // 处理 V2 的平滑滚动到顶
  useEffect(() => {
    if (isV2) {
      window.scrollTo(0, 0);
    }
  }, [activePageV2, isV2]);

  // V2 页面路由逻辑
  const renderV2Page = () => {
    switch(activePageV2) {
      case 'home': return <HomeV2 onNavigate={setActivePageV2} />;
      case 'about': return <AboutV2 />;
      case 'capabilities': return <CapabilitiesV2 />;
      case 'services': return <ServicesV2 />;
      case 'contact': return <ContactV2 />;
      default: return <HomeV2 onNavigate={setActivePageV2} />;
    }
  };

  return (
    <LanguageProvider>
      {isV2 ? (
        /* ================= V2: 全新专业 B2B 版 ================= */
        <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-orange-100 selection:text-orange-600">
          <NavbarV2 activePage={activePageV2} onNavigate={setActivePageV2} />
          <main className="pt-20">
            {renderV2Page()}
          </main>
          <FooterV2 />
          
          {/* 版本切换悬浮提示 (仅预览用，生产环境可删除) */}
          <div className="fixed bottom-6 right-6 z-[60]">
            <a href="/" className="bg-slate-900 text-white text-xs font-bold px-4 py-2 rounded-full shadow-xl hover:bg-orange-600 transition-colors">
              返回原版 V1
            </a>
          </div>
        </div>
      ) : (
        /* ================= V1: 您目前的橙色版本 ================= */
        <div className="min-h-screen bg-white">
          <Navbar />
          <Hero />
          <About />
          <Milestone />
          <Services />
          <Products />
          <Gallery />
          <Contact />
          <Footer />
          
          {/* 版本切换悬浮提示 */}
          <div className="fixed bottom-6 right-6 z-[60]">
            <a href="/?v=2" className="bg-orange-600 text-white text-xs font-bold px-4 py-2 rounded-full shadow-xl hover:bg-slate-900 transition-colors">
              预览新版 V2 (B2B模式)
            </a>
          </div>
        </div>
      )}
    </LanguageProvider>
  );
}

export default App;
