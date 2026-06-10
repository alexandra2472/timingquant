'use client'

import { useState, useEffect } from 'react'

export default function HomePage() {
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
    <div>
      {/* Hero Section */}
      <section className="hero-gradient h-screen flex flex-col justify-center items-center text-center px-4">
        <div className="mb-6 inline-block px-4 py-1 border border-blue-500/30 rounded-full text-blue-400 text-xs tracking-widest uppercase">
          Institutional Risk Exposure Layer
        </div>
        <h1 className="text-4xl md:text-6xl font-light mb-8 leading-tight letter-spacing-wide">
          {isZh ? (
            <>
              承擔風險之前，<br />
              <span className="font-semibold text-blue-500 underline decoration-blue-500/30">先識別市場狀態。</span>
            </>
          ) : (
            <>
              Before taking risk,<br />
              <span className="font-semibold text-blue-500 underline decoration-blue-500/30">know the market state.</span>
            </>
          )}
        </h1>
        <p className="max-w-2xl text-gray-400 text-lg md:text-xl font-light leading-relaxed">
          {isZh 
            ? 'TimingQuant 將時間結構下的市場行為轉譯為系統化風險暴露層。我們為機構決策提供獨立於價格與宏觀之外的「Z軸」情報。'
            : 'TimingQuant translates time-structured market behavior into a systematic risk exposure layer. We provide independent "Z-Axis" Intelligence for institutional decision-making.'
          }
        </p>
        <div className="mt-12 w-64 opacity-50" style={{ background: 'linear-gradient(90deg, transparent, #3b82f6, transparent)', height: '1px' }}></div>
      </section>

      {/* Philosophy Section */}
      <section id="philosophy" className="py-24 px-10">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-semibold mb-6 text-blue-500 uppercase tracking-tight">
              {isZh ? '正交因子 (The Orthogonal Factor)' : 'The Orthogonal Factor'}
            </h2>
            <p className="text-gray-400 leading-relaxed mb-6 font-light text-sm">
              {isZh
                ? '我們的核心邏輯具備根本性的差異化。當主流指標分析價格行為（X軸）或宏觀資訊（Y軸）時，TimingQuant 識別的是時間狀態（Z軸）。'
                : 'Our core methodology is fundamentally different. While most indicators analyze price action (X-axis) or macro news (Y-axis), TimingQuant identifies the Time-State (Z-axis).'
              }
            </p>
            <ul className="space-y-4">
              <li className="flex items-center text-sm text-gray-300">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                {isZh ? '與 RSI / MACD / 均線系統保持零相關性' : 'Zero correlation with RSI / MACD / Moving Average systems'}
              </li>
              <li className="flex items-center text-sm text-gray-300">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                {isZh ? '符號邏輯數字化 (Symbolic Logic Digitization)' : 'Symbolic Logic Digitization'}
              </li>
              <li className="flex items-center text-sm text-gray-300">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                {isZh ? '非共識風險識別與回撤控制' : 'Non-consensus risk identification and drawdown control'}
              </li>
            </ul>
          </div>
          <div className="p-12 rounded-2xl flex flex-col justify-center items-center relative overflow-hidden" style={{
            background: 'rgba(255, 255, 255, 0.03)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.1)'
          }}>
            <div className="text-center">
              <div className="text-7xl mb-4 font-thin text-blue-500">Z</div>
              <div className="text-[10px] tracking-[0.4em] text-gray-500 uppercase font-bold">State Intelligence Dimension</div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section id="solutions" className="py-24 bg-zinc-950 px-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-xs tracking-[0.3em] text-gray-500 uppercase mb-12 font-bold">
            {isZh ? '核心解決方案' : 'Core Solutions'}
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-10 rounded-2xl hover:border-blue-500/50 transition group" style={{
              background: 'rgba(255, 255, 255, 0.03)',
              border: '1px solid rgba(255, 255, 255, 0.1)'
            }}>
              <h3 className="text-2xl font-semibold mb-4 group-hover:text-blue-400 transition">TQ Risk Overlay</h3>
              <p className="text-gray-400 text-sm mb-6 leading-relaxed font-light">
                {isZh
                  ? '前置於交易系統的獨立風險閘門。在決策前識別環境處於「友好、敵對、不穩定或切換中」，幫助機構在錯誤環境中減少暴露。'
                  : 'An independent risk gate sitting beside your execution system. Identifies if the environment is Favorable, Hostile, Unstable, or Transitioning, helping institutions reduce exposure during hostile windows.'
                }
              </p>
              <div className="text-[10px] text-blue-500/70 font-mono uppercase tracking-widest">Active Module: BTC/ETH Macro-State</div>
            </div>
            <div className="p-10 rounded-2xl hover:border-blue-500/50 transition group" style={{
              background: 'rgba(255, 255, 255, 0.03)',
              border: '1px solid rgba(255, 255, 255, 0.1)'
            }}>
              <h3 className="text-2xl font-semibold mb-4 group-hover:text-blue-400 transition">TQ State API</h3>
              <p className="text-gray-400 text-sm mb-6 leading-relaxed font-light">
                {isZh
                  ? '為量化基金與自動化交易提供的符號化狀態數據流。輸出高精度風險評分，用於系統化倉位管理與風險對沖。'
                  : 'Symbolic state data streams for quantitative funds and algorithmic traders. Outputs high-precision risk scores for systematic exposure control and hedging.'
                }
              </p>
              <div className="text-[10px] text-blue-500/70 font-mono uppercase tracking-widest">Output: TQ-State-ID v1.2 (JSON)</div>
            </div>
          </div>
        </div>
      </section>

      {/* Lab Section */}
      <section id="lab" className="py-24 px-10">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-end mb-12 border-l-2 border-blue-500 pl-6">
            <div>
              <h2 className="text-3xl font-semibold mb-2 uppercase tracking-tight">
                {isZh ? 'TQ 研究實驗室 (Lab)' : 'TQ Research Lab'}
              </h2>
              <p className="text-gray-500 text-sm font-light">
                {isZh ? '實驗性研發管線與實時壓力測試。' : 'Experimental R&D pipelines and live stress testing.'}
              </p>
            </div>
            <div className="text-xs text-green-500 flex items-center bg-green-500/10 px-3 py-1 rounded-full">
              <span className="relative flex h-2 w-2 mr-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              {isZh ? '實時儀錶盤運作中' : 'Live Dashboard Active'}
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Research 1 */}
            <div className="p-8 border border-white/5 rounded-xl bg-white/[0.02] hover:bg-white/[0.05] transition flex flex-col justify-between">
              <div>
                <div className="flex justify-between mb-6">
                  <span className="text-[10px] bg-white/10 px-2 py-1 rounded text-gray-400 uppercase">Boundary Research</span>
                  <span className="text-xs text-blue-400">{isZh ? '85% 進度' : '85% Complete'}</span>
                </div>
                <h4 className="font-semibold mb-3 text-sm">
                  {isZh ? '月度趨勢有效性邊界' : 'Monthly Trend Boundary'}
                </h4>
                <p className="text-xs text-gray-500 leading-relaxed font-light">
                  {isZh
                    ? '正在對 TQ 狀態邏輯與傳統 RSI 指標的適配度進行深度回測，界定算法的「失效區」與「高勝率區」。'
                    : 'Stress-testing TQ-State logic against traditional RSI to define "Model Exhaustion Zones" and "High-Probability Regimes."'
                  }
                </p>
              </div>
            </div>
            
            {/* Research 2 - AI Model */}
            <div className="p-8 border border-blue-500/30 rounded-xl bg-blue-500/[0.03] hover:bg-blue-500/[0.08] transition flex flex-col justify-between shadow-[0_0_15px_rgba(59,130,246,0.1)]">
              <div>
                <div className="flex justify-between mb-6">
                  <span className="text-[10px] bg-blue-500/20 px-2 py-1 rounded text-blue-400 uppercase font-bold">AI Model</span>
                  <span className="text-[10px] text-green-400 font-bold uppercase">Live Stats</span>
                </div>
                <h4 className="font-semibold mb-3 text-sm">
                  {isZh ? 'AI 驅動時間狀態引擎 v2.0' : 'AI-Driven Engine v2.0'}
                </h4>
                <p className="text-xs text-gray-300 leading-relaxed font-light mb-4">
                  {isZh
                    ? <>將人工符號邏輯遷移至深度學習模型。BTC 日內行情回測準確率達 <span className="text-blue-400 font-bold">64.7%</span>，王牌信號命中率 <span className="text-green-400 font-bold">91.7%</span>。</>
                    : <>Migrating manual symbolic logic to deep learning. BTC Intraday backtest accuracy reached <span className="text-blue-400 font-bold">64.7%</span>, Alpha Signal accuracy <span className="text-green-400 font-bold">91.7%</span>.</>
                  }
                </p>
              </div>
              <a href={`/dashboard?lang=${lang === 'zh-Hant' ? 'zh' : 'en'}`} className="block w-full py-2 border border-blue-500/40 rounded text-center text-[10px] text-blue-400 hover:bg-blue-600 hover:text-white transition uppercase font-bold tracking-widest">
                {isZh ? '完整回測儀錶盤 →' : 'Full Backtest Dashboard →'}
              </a>
            </div>
            
            {/* Research 3 */}
            <div className="p-8 border border-blue-500/20 rounded-xl bg-blue-500/5 relative overflow-hidden flex flex-col justify-between transition hover:bg-blue-500/10">
              <div className="absolute top-0 right-0 p-2 opacity-10 text-4xl italic font-bold">ALPHA</div>
              <div>
                <div className="flex justify-between mb-6">
                  <span className="text-[10px] bg-blue-500/20 px-2 py-1 rounded text-blue-400 uppercase font-bold">{isZh ? '實戰演練' : 'Stress Testing'}</span>
                  <span className="text-xs text-green-400 font-bold italic">D+25 Data</span>
                </div>
                <h4 className="font-semibold mb-3 text-sm text-blue-300">
                  {isZh ? '山寨幣 Alpha 實時看板' : 'Altcoin Alpha Dashboard'}
                </h4>
                <p className="text-xs text-gray-500 leading-relaxed mb-6 font-light">
                  {isZh
                    ? '基於 TQ 狀態邏輯的山寨幣合約紙上實盤。點擊下方進入實時動態監測終端。'
                    : 'Live paper trading across 20+ volatile altcoin futures based on TQ-State logic. Real-time stress testing of risk identification limits.'
                  }
                </p>
              </div>
              <a href="http://84.247.154.162:8088/monitor_dashboard.html" target="_blank" className="flex items-center justify-between text-[10px] text-blue-400 hover:text-white transition font-bold uppercase tracking-widest">
                <span>{isZh ? '進入實時終端' : 'Access Live Terminal'}</span>
                <span>→</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Horizon Section */}
      <section id="horizon" className="py-24 bg-white text-black px-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold mb-8 letter-spacing-wide uppercase font-bold">
            {isZh ? '普適哲學，精準調優。' : 'Universal Philosophy,'}<br />
            <span className="text-gray-400 font-light italic">{isZh ? 'Universal Philosophy, Calibrated Engines.' : 'Calibrated Engines.'}</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <h4 className="font-bold mb-4 uppercase text-[10px] tracking-widest text-blue-600">{isZh ? '資產類別：加密貨幣' : 'Asset Class: Crypto'}</h4>
              <p className="text-sm leading-relaxed italic text-gray-700 font-light">
                {isZh ? '最具「生命力」的高頻實驗室。我們識別極端波動中隱藏的時間結構。' : 'The most "vital" high-frequency laboratory. We identify time structures hidden within extreme volatility.'}
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4 uppercase text-[10px] tracking-widest text-gray-400">{isZh ? '資產類別：A 股市場' : 'Asset Class: A-Shares'}</h4>
              <p className="text-sm leading-relaxed text-gray-500 font-light">
                {isZh ? '針對中國市場特有的結構性壓力，開發專屬的宏觀狀態模組，服務於長期資本保全。' : 'Developing macro-state modules optimized for the structural dynamics of the mainland market, serving long-term capital preservation.'}
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4 uppercase text-[10px] tracking-widest text-gray-400">{isZh ? '資產類別：美股證券' : 'Asset Class: US Equities'}</h4>
              <p className="text-sm leading-relaxed text-gray-500 font-light">
                {isZh ? '將 Z 軸框架適配至高流動性指數（如 NASDAQ 100），識別全球風險資產的狀態切換窗口。' : 'Adapting the Z-axis framework for high-liquidity indices like NASDAQ 100 to identify global risk asset state-transition windows.'}
              </p>
            </div>
          </div>
          <div className="mt-16 p-8 border border-black/10 rounded-2xl bg-zinc-50 text-center">
            <p className="text-sm font-medium text-zinc-500 italic">
              {isZh ? '"我們不使用一套代碼跑通所有市場，而是用同一套哲學，為每個市場調優專屬引擎。"' : '"We do not use one code to run every market. We use one philosophy to build a unique calibrated engine for each market."'}
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
