'use client'

import { useState, useEffect } from 'react'

export default function Footer() {
  const [lang, setLang] = useState('zh-Hant')
  
  useEffect(() => {
    const handleLangChange = () => {
      const saved = localStorage.getItem('lang')
      if (saved) setLang(saved)
    }
    window.addEventListener('lang-change', handleLangChange)
    return () => window.removeEventListener('lang-change', handleLangChange)
  }, [])
  
  const isZh = lang === 'zh-Hant'
  
  return (
    <footer id="contact" className="py-24 px-10 border-t border-white/10 text-center">
      <h2 className="text-2xl mb-8 font-tracking uppercase tracking-widest">
        {isZh ? '準備好開始影子評估 (Shadow Evaluation) 嗎？' : 'Ready for a Shadow Evaluation?'}
      </h2>
      <p className="text-gray-500 mb-12 max-w-lg mx-auto text-sm font-light italic leading-relaxed">
        {isZh 
          ? '在您的現有流程中嵌入一層智能狀態判定，而非替代它。為合資格機構提供 30-45 天的影子評估服務。'
          : 'Add a layer of intelligent state identification to your existing process, rather than replacing it. 30-45 day Shadow Evaluation available for qualified institutions.'
        }
      </p>
      <button
        onClick={() => window.dispatchEvent(new Event('open-contact-modal'))}
        className="bg-blue-600 hover:bg-blue-500 text-white px-10 py-4 rounded-full text-sm font-semibold transition shadow-lg shadow-blue-500/20 uppercase tracking-widest"
      >
        {isZh ? '申請 Access 入口' : 'Request Access'}
      </button>
      <p className="mt-6 text-gray-500 text-sm">
        {isZh ? '聯繫郵箱：' : 'Email: '}
        <a href="mailto:info@timingquant.com" className="text-blue-400 hover:text-blue-300 transition">info@timingquant.com</a>
      </p>
      
      <div className="mt-32 flex flex-col items-center">
        <div className="text-[10px] text-gray-600 space-y-2 max-w-2xl font-light">
          <p className="font-bold uppercase tracking-widest">TimingQuant 是專業級「時間狀態情報層」基礎設施。</p>
          <p className="opacity-50 uppercase tracking-tighter">Disclaimer: Not investment advice. For institutional research purposes only. Risk Intelligence only.</p>
        </div>
        <div className="mt-10 text-[10px] uppercase tracking-widest text-gray-800">
          © 2026 TimingQuant. Current Date: 06/10/2026.
        </div>
      </div>
    </footer>
  )
}
