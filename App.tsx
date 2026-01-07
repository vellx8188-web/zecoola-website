
import React, { useEffect, useState } from 'react';
import { LanguageProvider } from './LanguageContext';

// 导入维护模式组件
import ComingSoon from './components/ComingSoon';

// 导入 V2 旗舰版组件
import NavbarV2 from './components/v2/NavbarV2';
import HeroSliderV2 from './components/v2/HeroSliderV2';
import HomeV2 from './components/v2/HomeV2';
import FooterV2 from './components/v2/FooterV2';

/**
 * 访问控制逻辑：
 * 1. 默认状态：显示 ComingSoon 维护页面
 * 2. 授权状态：URL 携带 ?mode=admin 时，显示 V2 旗舰版
 */
function App() {
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    // 检测 URL 参数
    const params = new URLSearchParams(window.location.search);
    if (params.get('mode') === 'admin') {
      setIsAdmin(true);
    }
  }, []);

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-orange-100 selection:text-orange-600">
        {isAdmin ? (
          <>
            <NavbarV2 />
            <main>
              {/* V2 旗舰版核心流程 */}
              <HeroSliderV2 />
              <HomeV2 />
            </main>
            <FooterV2 />
          </>
        ) : (
          /* 默认维护模式 */
          <ComingSoon />
        )}
      </div>
    </LanguageProvider>
  );
}

export default App;
