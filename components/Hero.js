'use client';

import { useState } from 'react';
import { ArrowRight, X } from 'lucide-react';

export default function Hero({ t, lang }) {
  const [showQRCode, setShowQRCode] = useState(false);

  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            {t.hero.title}
          </h1>
          <p className="text-xl sm:text-2xl text-gray-600 mb-4">
            {t.hero.subtitle}
          </p>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto mb-8">
            {t.hero.description}
          </p>
          <button
            onClick={() => setShowQRCode(true)}
            className="inline-flex items-center space-x-2 bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors"
          >
            <span>{t.hero.cta}</span>
            <ArrowRight size={20} />
          </button>
        </div>
      </div>

      {/* QQ二维码弹窗 */}
      {showQRCode && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4" onClick={() => setShowQRCode(false)}>
          <div className="bg-white rounded-2xl p-8 max-w-sm w-full text-center relative" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setShowQRCode(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
            >
              <X size={24} />
            </button>
            <h3 className="text-xl font-bold text-gray-900 mb-2">扫码添加QQ好友</h3>
            <p className="text-gray-500 text-sm mb-4">QQ号: 3822532541</p>
            <div className="bg-gray-100 rounded-xl p-4 mb-4">
              <img
                src="/images/qq-add-friend-qr.png"
                alt="QQ扫码添加好友"
                className="w-48 h-48 mx-auto object-contain"
              />
            </div>
            <p className="text-gray-500 text-sm">或搜索QQ号：3822532541</p>
          </div>
        </div>
      )}
    </section>
  );
}
