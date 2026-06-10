'use client'

import { Suspense } from 'react'
import { useEffect, useState } from 'react'

function DashboardContent() {
  const [lang, setLang] = useState('zh')
  const [mounted, setMounted] = useState(false)
  
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search)
      const langParam = params.get('lang')
      
      if (langParam && (langParam === 'en' || langParam === 'zh')) {
        setLang(langParam)
        localStorage.setItem('lang', langParam)
      } else {
        const saved = localStorage.getItem('lang')
        if (saved && (saved === 'en' || saved === 'zh')) {
          setLang(saved)
        }
      }
      setMounted(true)
    }
  }, [])
  
  if (!mounted) {
    return <div className="min-h-screen bg-[#060b14] flex items-center justify-center text-gray-400">Loading...</div>
  }
  
  const src = lang === 'en' ? '/dashboard-en.html' : '/dashboard.html'
  
  return (
    <div className="min-h-screen bg-[#060b14]">
      <div className="p-4">
        <a href={`/?lang=${lang}`} className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition mb-4">
          <span>←</span>
          <span>{lang === 'en' ? 'Back to Home' : '返回首頁'}</span>
        </a>
      </div>
      <iframe 
        key={lang}
        src={src} 
        className="w-full" 
        style={{ height: 'calc(100vh - 60px)' }}
        title="BTCUSDT Backtest Dashboard"
      />
    </div>
  )
}

export default function DashboardPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#060b14] flex items-center justify-center text-gray-400">Loading...</div>}>
      <DashboardContent />
    </Suspense>
  )
}
