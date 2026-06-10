import { Suspense } from 'react'

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-[#060b14]">
      <div className="p-4">
        <a href="/" className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition mb-4">
          <span>←</span>
          <span>{typeof window!== 'undefined' && localStorage.getItem('lang') === 'en' ? 'Back to Home' : '返回首頁'}</span>
        </a>
      </div>
      <iframe 
        src="/dashboard.html" 
        className="w-full" 
        style={{ height: 'calc(100vh - 60px)' }}
        title="BTCUSDT Backtest Dashboard"
      />
    </div>
  )
}

export function generateMetadata() {
  return {
    title: 'BTCUSDT 日内预测模型 · 回测能力展示 | TimingQuant',
    description: '基于日内形态分类与ATR自适应阈值的回测展示',
  }
}
