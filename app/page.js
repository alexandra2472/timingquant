'use client';

import { useState, useEffect } from 'react';
import { translations } from '@/lib/i18n';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Products from '@/components/Products';
import Cases from '@/components/Cases';
import Pricing from '@/components/Pricing';
import About from '@/components/About';
import Footer from '@/components/Footer';

export default function Home() {
  const [lang, setLang] = useState('zh');

  useEffect(() => {
    const savedLang = localStorage.getItem('lang');
    if (savedLang) {
      setLang(savedLang);
    }
  }, []);

  const handleLangChange = (newLang) => {
    setLang(newLang);
    localStorage.setItem('lang', newLang);
  };

  const t = translations[lang];

  return (
    <main className="min-h-screen bg-white">
      <Navbar t={t} lang={lang} setLang={handleLangChange} />
      <Hero t={t} lang={lang} />
      <Features t={t} />
      <Products t={t} />
      <Cases t={t} />
      <Pricing t={t} />
      <About t={t} />
      <Footer t={t} />
    </main>
  );
}
