'use client';

import { useState } from 'react';
import { TrendingUp, TrendingDown, Target, Award, Zap, X } from 'lucide-react';

// 月度复盘数据配置 - 三月完整数据更新
const reviewData = {
  month: '三月',
  title: '实战复盘：六爻剧本+策略的组合力量',
  subtitle: '累计收益 +154.57% | 多空双向捕捉 | 精准预判转折点',
  metrics: [
    { value: '+154.57%', label: '累计收益率', icon: TrendingUp, color: 'from-green-500 to-emerald-600' },
    { value: '154K+', label: '累计收益 USDT', icon: Target, color: 'from-blue-500 to-indigo-600' },
    { value: '100%', label: '做空胜率', icon: TrendingDown, color: 'from-orange-500 to-red-600' },
  ],
  // 最新关键交易展示
  highlightTrade: {
    title: '多空双向精准捕捉',
    profit: '+3.12% / +4.99%',
    desc: '3月18日做空ETH吃到+3.12%，3月16日做多ETH吃到+4.99%，多空双向均有斩获',
  },
  // 三月整体战绩
  shortStats: {
    title: '三月整体战绩',
    count: '7笔',
    winRate: '71%',
    avgR: '+2.21R',
    totalR: '+15.45R',
    highlight: '多空双杀',
  },
  advantages: [
    { title: '多空双向精准判断', desc: '三月7笔交易中，做空100%胜率，做多也有不错表现，多空双向均有斩获' },
    { title: '累计收益154.57%', desc: '从年初到3月30日，策略累计收益达154,565 USDT，收益率154.57%' },
    { title: '结构段动态仓位', desc: '根据六爻剧本的6个结构段，每个阶段使用不同的风险参数，灵活应对' },
    { title: '情绪主导型结构适应', desc: '策略正在从"趋势流畅型"向"情绪适应型"进化，适应市场变化' },
  ],
};

export default function MonthlyReview({ t }) {
  const [showQRCode, setShowQRCode] = useState(false);

  return (
    <section id="review" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 标题区域 */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-black text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Zap size={16} />
            {reviewData.month}实战成果
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            {reviewData.title}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {reviewData.subtitle}
          </p>
        </div>

        {/* 核心数据卡片 - 只保留3个最亮眼的 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {reviewData.metrics.map((metric, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-2xl p-8 text-center hover:border-gray-300 hover:shadow-lg transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${metric.color} mb-4`}>
                <metric.icon size={28} className="text-white" />
              </div>
              <div className="text-4xl lg:text-5xl font-bold text-gray-900 mb-2">
                {metric.value}
              </div>
              <div className="text-base text-gray-600">{metric.label}</div>
            </div>
          ))}
        </div>

        {/* 简化的关键交易展示 - 只说最牛的战绩 */}
        <div className="bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200 rounded-2xl p-8 mb-12">
          <div className="flex items-center gap-3 mb-4">
            <Award className="text-green-600" size={32} />
            <h3 className="text-2xl font-bold text-gray-900">🏆 {reviewData.highlightTrade.title}</h3>
          </div>
          <div className="flex flex-col md:flex-row md:items-center gap-6">
            <div className="text-5xl font-bold text-green-600">
              {reviewData.highlightTrade.profit}
            </div>
            <p className="text-gray-700 text-lg flex-1">
              {reviewData.highlightTrade.desc}
            </p>
          </div>
        </div>

        {/* 只展示做空的亮眼数据 */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">📊 {reviewData.shortStats.title}</h3>
          <div className="bg-white border-2 border-green-200 rounded-2xl p-8 max-w-2xl mx-auto shadow-sm">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-green-600 mb-1">{reviewData.shortStats.count}</div>
                <div className="text-sm text-gray-600">交易笔数</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-600 mb-1">{reviewData.shortStats.winRate}</div>
                <div className="text-sm text-gray-600">胜率</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-orange-500 mb-1">{reviewData.shortStats.totalR}</div>
                <div className="text-sm text-gray-600">总收益</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-600 mb-1">{reviewData.shortStats.highlight}</div>
                <div className="text-sm text-gray-600">止损情况</div>
              </div>
            </div>
          </div>
        </div>

        {/* 核心优势 */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">💎 为什么我们比别人强？</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {reviewData.advantages.map((adv, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow">
                <h4 className="text-lg font-bold text-gray-900 mb-3">{adv.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{adv.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA - 点击弹出QQ二维码 */}
        <div className="text-center bg-black rounded-2xl p-8 lg:p-12">
          <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
            🚀 准备好盈利了吗？
          </h3>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            三月复盘证明：六爻剧本+策略的组合能带来更高收益、更低风险。四月我们将继续优化，帮你更稳健地盈利！
          </p>
          <button
            onClick={() => setShowQRCode(true)}
            className="inline-block bg-white text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            📩 立即加入实战营
          </button>
          <p className="text-gray-400 mt-4 text-sm">限量招募中，扫码或联系QQ了解更多</p>
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
              {/* QQ直接扫码添加好友的二维码 - 需要替换为实际图片 */}
              <img
                src="/images/qq-add-friend-qr.png"
                alt="QQ扫码添加好友"
                className="w-48 h-48 mx-auto object-contain"
                onError={(e) => {
                  // 如果图片加载失败，显示占位符
                  e.target.src = 'https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=3822532541';
                }}
              />
            </div>
            <p className="text-gray-500 text-sm">或搜索QQ号：3822532541</p>
          </div>
        </div>
      )}
    </section>
  );
}
