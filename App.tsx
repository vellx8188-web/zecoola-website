
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Milestone from './components/Milestone';
import Services from './components/Services';
import Products from './components/Products';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ComingSoon from './components/ComingSoon'; // Import the new page
import { LanguageProvider } from './LanguageContext';

// ==============================================================================
// 网站状态控制 / WEBSITE STATUS CONTROL
// ==============================================================================
// true  = 显示 "Coming Soon" 页面 (维护模式)
// false = 显示正式的完整网站
const IS_MAINTENANCE_MODE = true; 

function App() {
  // 如果开启了维护模式，直接显示 ComingSoon 页面
  if (IS_MAINTENANCE_MODE) {
    return <ComingSoon />;
  }

  // 否则显示正式网站
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-slate-50 font-sans">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Milestone />
          <Services />
          <Products />
          <Gallery />
          <Contact />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;
