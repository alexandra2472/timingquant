import { headers } from 'next/headers'

export function generateMetadata({ searchParams }) {
  const lang = searchParams?.lang || 'zh'
  return {
    title: lang === 'en' 
      ? 'BTCUSDT Intraday Prediction Model · Backtest Showcase | TimingQuant'
      : 'BTCUSDT 日内预测模型 · 回测能力展示 | TimingQuant',
    description: lang === 'en'
      ? 'Backtest showcase based on intraday pattern classification and ATR adaptive threshold'
      : '基于日内形态分类与ATR自适应阈值的回测展示',
  }
}
