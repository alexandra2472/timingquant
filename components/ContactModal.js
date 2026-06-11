'use client'

import { useState, useEffect } from 'react'

export default function ContactModal() {
  const [isOpen, setIsOpen] = useState(false)
  const [lang, setLang] = useState('zh-Hant')

  useEffect(() => {
    const saved = localStorage.getItem('lang')
    if (saved) setLang(saved)

    const handleLangChange = () => {
      const saved = localStorage.getItem('lang')
      if (saved) setLang(saved)
    }
    const handleOpenModal = () => {
      setIsOpen(true)
      document.body.style.overflow = 'hidden'
    }

    window.addEventListener('lang-change', handleLangChange)
    window.addEventListener('open-contact-modal', handleOpenModal)
    return () => {
      window.removeEventListener('lang-change', handleLangChange)
      window.removeEventListener('open-contact-modal', handleOpenModal)
    }
  }, [])

  const closeModal = () => {
    setIsOpen(false)
    document.body.style.overflow = 'auto'
  }

  const isZh = lang === 'zh-Hant'

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/90 backdrop-blur-md" onClick={closeModal}></div>

      {/* Modal Content */}
      <div
        className="relative w-full max-w-2xl p-8 md:p-12 rounded-3xl border border-blue-500/30 shadow-2xl overflow-y-auto max-h-[90vh]"
        style={{
          background: '#0a0a0a',
          backdropFilter: 'blur(10px)',
        }}
      >
        {/* Close Button */}
        <button
          onClick={closeModal}
          className="absolute top-6 right-6 text-gray-500 hover:text-white text-2xl transition"
        >
          &times;
        </button>

        {/* Header */}
        <div className="mb-8">
          <h3 className="text-3xl font-bold mb-2 text-white italic tracking-tight uppercase">
            {isZh ? (
              <>聯繫 <span className="text-blue-500">TimingQuant</span></>
            ) : (
              <>Contact <span className="text-blue-500">TimingQuant</span></>
            )}
          </h3>
          <p className="text-gray-400 text-sm font-light">
            {isZh
              ? '開啟關於市場狀態與正交因子的對話 / Open Collaboration'
              : 'Start a conversation about market states and orthogonal factors / Open Collaboration'
            }
          </p>
        </div>

        {/* Body */}
        <div className="space-y-8">
          {/* Open Collaboration */}
          <div>
            <h4 className="text-blue-400 text-[10px] uppercase tracking-[0.2em] font-bold mb-3">
              {isZh ? '開放對接 / Open Collaboration' : 'Open Collaboration'}
            </h4>
            <p className="text-gray-300 text-[13px] leading-relaxed font-light">
              {isZh
                ? '無論您是量化團隊、機構投資者、或具備深度思考的個人投資者，我們都隨時歡迎對接交流。'
                : 'Whether you are a quant team, institutional investor, or a deeply thoughtful individual investor, we are always open to connect.'
              }
            </p>
          </div>

          {/* Two Cards */}
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-5 bg-white/5 rounded-2xl border border-white/5">
              <span className="text-xs font-bold text-blue-400 block mb-2 uppercase">Shadow Evaluation</span>
              <p className="text-[11px] text-gray-500 leading-normal">
                {isZh
                  ? '驗證 TQ 狀態層對回撤控制的真實價值。'
                  : 'Validate the real value of the TQ state layer for drawdown control.'
                }
              </p>
            </div>
            <div className="p-5 bg-white/5 rounded-2xl border border-white/5">
              <span className="text-xs font-bold text-blue-400 block mb-2 uppercase">Strategy Synergies</span>
              <p className="text-[11px] text-gray-500 leading-normal">
                {isZh
                  ? '將 TQ 正交因子嵌入現有系統。'
                  : 'Embed TQ orthogonal factors into your existing systems.'
                }
              </p>
            </div>
          </div>

          {/* Email CTA */}
          <div className="bg-blue-600/10 p-8 rounded-3xl border border-blue-600/20 text-center">
            <p className="text-sm text-gray-300 mb-2 italic">
              {isZh
                ? '請隨意發送電子郵件交流您的想法'
                : 'Feel free to email us with your thoughts'
              }
            </p>
            <p className="text-[11px] text-gray-500 mb-6">
              {isZh ? 'Feel free to email us.' : '隨時歡迎來信。'}
            </p>
            <div className="text-blue-400 text-sm font-bold mb-6 tracking-wide">
              info@timingquant.com
            </div>
            <a
              href="mailto:info@timingquant.com?subject=TimingQuant Collaboration&body=Name/Institution:%0D%0AAsset Class:%0D%0AInquiry:"
              className="block w-full bg-blue-600 hover:bg-blue-500 text-white py-4 rounded-full font-bold transition shadow-lg text-xs uppercase tracking-widest"
            >
              {isZh ? '發送郵件 / Send Email' : 'Send Email / 發送郵件'}
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
