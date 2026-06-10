'use client'

import { Suspense } from 'react'
import { useEffect, useState } from 'react'

function DashboardContent() {
  const [lang, setLang] = useState('zh')
  const [src, setSrc] = useState('')
  const [mounted, setMounted] = useState(false)
  
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search)
      const langParam = params.get('lang')
      
      let finalLang = 'zh'
      if (langParam && (langParam === 'en' || langParam === 'zh')) {
        finalLang = langParam
        localStorage.setItem('lang', langParam)
      } else {
        const saved = localStorage.getItem('lang')
        if (saved && (saved === 'en' || saved === 'zh')) {
          finalLang = saved
        }
      }
      
      setLang(finalLang)
      // 加时间戳彻底绕过缓存
      const cacheBuster = Date.now()
      const fileName = finalLang === 'en' ? 'dashboard-en.html' : 'dashboard.html'
      setSrc(`/${fileName}?v=3&t=${cacheBuster}`)
      setMounted(true)
    }
  }, [])
  
  if (!mounted) {
    return <div className="min-h-screen bg-[#060b14] flex items-center justify-center text-gray-400">Loading...</div>
  }
  
  return (
    <div className="min-h-screen bg-[#060b14]">
      <div className="p-4">
        <a href={`/?lang=${lang}`} className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition mb-4">
          <span>←</span>
          <span>{lang === 'en' ? 'Back to Home' : '返回首頁'}</span>
        </a>
      </div>
      <iframe 
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
