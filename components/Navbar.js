'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Navbar() {
  const [lang, setLang] = useState('zh-Hant')
  
  useEffect(() => {
    const saved = localStorage.getItem('lang')
    if (saved) setLang(saved)
  }, [])
  
  const toggleLang = () => {
    const newLang = lang === 'zh-Hant' ? 'en' : 'zh-Hant'
    setLang(newLang)
    localStorage.setItem('lang', newLang)
    window.dispatchEvent(new Event('lang-change'))
  }
  
  const isZh = lang === 'zh-Hant'
  
  return (
    <nav className="flex justify-between items-center px-10 py-6 border-b border-white/10 sticky top-0 bg-black/50 backdrop-blur-md z-50">
      <div className="text-xl font-bold tracking-tighter italic">
        TIMING<span className="text-blue-500 underline decoration-2 underline-offset-4">QUANT</span>
      </div>
      
      <div className="hidden md:flex space-x-8 text-sm text-gray-400 font-tracking">
        <a href="#philosophy" className="hover:text-white transition">{isZh ? '核心方法論' : 'Philosophy'}</a>
        <a href="#solutions" className="hover:text-white transition">{isZh ? '解決方案' : 'Solutions'}</a>
        <a href="#lab" className="hover:text-white transition">{isZh ? 'TQ 實驗室' : 'TQ Lab'}</a>
        <a href="#horizon" className="hover:text-white transition">{isZh ? '未來版圖' : 'Horizon'}</a>
      </div>
      
      <div className="flex items-center gap-4">
        <button onClick={toggleLang} className="px-3 py-1 border border-white/20 rounded text-xs hover:border-white/40 transition">
          {isZh ? 'EN' : '中文'}
        </button>
        <button
          onClick={() => window.dispatchEvent(new Event('open-contact-modal'))}
          className="px-5 py-2 bg-white text-black text-sm font-semibold rounded-full hover:bg-gray-200 transition"
        >
          {isZh ? 'Shadow Evaluation 申請' : 'Shadow Evaluation Access'}
        </button>
      </div>
    </nav>
  )
}
