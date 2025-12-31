
import React, { useState, useEffect } from 'react';
import { LanguageProvider } from './LanguageContext';

// V1 组件
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Milestone from './components/Milestone';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';

// V2 旗舰版组件
import NavbarV2 from './components/v2/NavbarV2';
import HeroSliderV2 from './components/v2/HeroSliderV2';
import HomeV2 from './components/v2/HomeV2';
import FooterV2 from './components/v2/FooterV2';

// 维护模式组件
import ComingSoon from './components/ComingSoon';

type ViewMode = 'MAINTENANCE' | 'V1_ADMIN' | 'V2_PREVIEW';

function App() {
  const [viewMode, setViewMode] = useState<ViewMode>('MAINTENANCE');

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get('v') === '2') {
      setViewMode('V2_PREVIEW');
    } else if (params.get('mode') === 'admin') {
      setViewMode('V1_ADMIN');
    }
  }, []);

  // 1. V2 旗舰版预览 (?v=2)
  if (viewMode === 'V2_PREVIEW') {
    return (
      <LanguageProvider>
        <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-orange-100 selection:text-orange-600">
          <NavbarV2 />
          <main>
            <HeroSliderV2 />
            <HomeV2 />
          </main>
          <FooterV2 />
        </div>
      </LanguageProvider>
    );
  }

  // 2. V1 管理模式 (?mode=admin)
  if (viewMode === 'V1_ADMIN') {
    return (
      <LanguageProvider>
        <div className="min-h-screen bg-white">
          <Navbar />
          <main>
            <Hero />
            <About />
            <Milestone />
            <Services />
            <Gallery />
            <Contact />
          </main>
          <Footer />
        </div>
      </LanguageProvider>
    );
  }

  // 3. 默认维护模式 (Coming Soon)
  return (
    <LanguageProvider>
      <ComingSoon />
    </LanguageProvider>
  );
}

export default App;
