'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Globe } from 'lucide-react';

export default function Navbar({ t, lang, setLang }) {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { key: 'home', href: '#' },
    { key: 'features', href: '#features' },
    { key: 'products', href: '#products' },
    { key: 'cases', href: '#cases' },
    { key: 'pricing', href: '#pricing' },
    { key: 'about', href: '#about' },
  ];

  const toggleLang = () => {
    const newLang = lang === 'en' ? 'zh' : 'en';
    setLang(newLang);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-xl font-semibold text-gray-900">
            {t.hero.title}
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.key}
                href={item.href}
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                {t.nav[item.key]}
              </Link>
            ))}
            <button
              onClick={toggleLang}
              className="flex items-center space-x-1 text-gray-600 hover:text-gray-900 transition-colors"
            >
              <Globe size={18} />
              <span className="text-sm">{lang === 'en' ? '中文' : 'EN'}</span>
            </button>
            <Link
              href="#pricing"
              className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors"
            >
              {t.nav.joinNow}
            </Link>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="px-4 py-4 space-y-3">
            {navItems.map((item) => (
              <Link
                key={item.key}
                href={item.href}
                className="block text-gray-600 hover:text-gray-900 py-2"
                onClick={() => setIsOpen(false)}
              >
                {t.nav[item.key]}
              </Link>
            ))}
            <button
              onClick={toggleLang}
              className="flex items-center space-x-1 text-gray-600 py-2"
            >
              <Globe size={18} />
              <span>{lang === 'en' ? '切换中文' : 'Switch to English'}</span>
            </button>
            <Link
              href="#pricing"
              className="block bg-black text-white px-4 py-2 rounded-lg text-center"
              onClick={() => setIsOpen(false)}
            >
              {t.nav.joinNow}
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
