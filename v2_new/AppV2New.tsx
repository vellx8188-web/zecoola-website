
import React, { useEffect } from 'react';
import { MemoryRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

// 根据提供的文件列表，组件位于 components/v2_new/ 目录下
import Header from '../components/v2_new/components/Header';
import Footer from '../components/v2_new/components/Footer';
import Home from '../components/v2_new/pages/Home';
import About from '../components/v2_new/pages/About';
import Capabilities from '../components/v2_new/pages/Capabilities';
import Services from '../components/v2_new/pages/Services';
import Contact from '../components/v2_new/pages/Contact';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const AppV2New: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col relative bg-white">
        <Header />
        <main className="flex-grow relative z-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/capabilities" element={<Capabilities />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default AppV2New;
