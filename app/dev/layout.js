'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import './globals.css';

const navItems = {
  zh: [
    { label: '首页', href: '/' },
    { label: '关于', href: '/about' },
    { label: '方法论', href: '/methodology' },
    { label: '研究', href: '/research' },
    { label: '样本', href: '/samples' },
    { label: '联系', href: '/contact' },
  ],
  en: [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Methodology', href: '/methodology' },
    { label: 'Research', href: '/research' },
    { label: 'Samples', href: '/samples' },
    { label: 'Contact', href: '/contact' },
  ],
};

const brandText = { zh: '时势量化实验室', en: 'Timingquant Lab' };

export default function DevLayout({ children }) {
  const [lang, setLang] = useState('zh');
  const pathname = usePathname();

  useEffect(() => {
    const savedLang = localStorage.getItem('dev-lang');
    if (savedLang) {
      setLang(savedLang);
    } else {
      const browserLang = navigator.language.toLowerCase();
      if (browserLang.startsWith('en')) {
        setLang('en');
        localStorage.setItem('dev-lang', 'en');
      }
    }
  }, []);

  const handleLangChange = (newLang) => {
    setLang(newLang);
    localStorage.setItem('dev-lang', newLang);
  };

  const nav = navItems[lang];
  const brand = brandText[lang];
  const isHome = pathname === '/';

  return (
    <html lang={lang === 'zh' ? 'zh-CN' : 'en'}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{lang === 'zh' ? 'Timingquant Lab | 时势量化实验室' : 'Timingquant Lab'}</title>
        <meta name="description" content={
          lang === 'zh'
            ? 'Timingquant Lab 是一个围绕市场节奏、结构状态与风险暴露展开的时序量化研究框架。'
            : 'Timingquant Lab is a temporal quantitative framework for studying market rhythm, structural regimes, and risk exposure.'
        } />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body>
        {/* Navigation */}
        <nav className="nav">
          <div className="nav-inner">
            <Link href="/" className="nav-brand">
              <span>Timingquant</span> Lab
            </Link>

            <ul className="nav-links">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`nav-link ${pathname === item.href ? 'active' : ''}`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Language Toggle */}
            <div className="lang-toggle">
              <button
                className={`lang-btn ${lang === 'zh' ? 'active' : ''}`}
                onClick={() => handleLangChange('zh')}
              >
                中文
              </button>
              <button
                className={`lang-btn ${lang === 'en' ? 'active' : ''}`}
                onClick={() => handleLangChange('en')}
              >
                EN
              </button>
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <main>{children}</main>

        {/* Footer */}
        <footer className="footer">
          <div className="footer-inner">
            <div className="footer-brand">
              <span>Timingquant</span> Lab
            </div>
            <p className="footer-desc">
              {lang === 'zh'
                ? '致力于构建一套研究市场节奏、结构状态与风险暴露的时序量化框架。'
                : 'A temporal quantitative framework for studying market rhythm, structural regimes, and risk exposure.'}
            </p>
            <div className="footer-divider" />
            <p className="footer-copy">
              © {new Date().getFullYear()} Timingquant Lab. All rights reserved.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
