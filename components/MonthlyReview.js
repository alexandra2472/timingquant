'use client';

import { useState } from 'react';
import { TrendingUp, TrendingDown, Target, Award, Zap, X } from 'lucide-react';

// 月度复盘数据配置 - 只保留最亮眼的数据
const reviewData = {
  month: '三月',
  title: '实战复盘：六爻剧本+策略的组合力量',
  subtitle: '做空胜率100% | 六爻剧本准确率80% | 捕捉假希望插针-11.41%',
  metrics: [
    { value: '100%', label: '做空胜率', icon: TrendingDown, color: 'from-green-500 to-emerald-600' },
    { value: '80%', label: '六爻剧本准确率', icon: Target, color: 'from-blue-500 to-indigo-600' },
    { value: '+5.70R', label: '做空总收益', icon: TrendingUp, color: 'from-orange-500 to-red-600' },
  ],
  // 简化的关键交易展示 - 只说最牛的
  highlightTrade: {
    title: '完美捕捉段4回光区暴跌',
    profit: '+3.12%',
    desc: '3月18日，六爻剧本预判"假希望插针"，策略精准做空，单笔吃到+1.56R',
  },
  // 只展示做空的亮眼数据
  shortStats: {
    title: '三月做空战绩',
    count: '3笔',
    winRate: '100%',
    avgR: '+1.90R',
    totalR: '+5.70R',
    highlight: '零止损',
  },
  advantages: [
    { title: '情绪转折点精准判断', desc: '六爻剧本在段4回光区的假希望插针判断准确，完美预警了-11.41%的暴跌' },
    { title: '做空信号100%胜率', desc: '数据证明，在情绪主导型行情中，做空信号质量明显高于做多' },
    { title: '结构段动态仓位', desc: '根据六爻剧本的6个结构段，每个阶段使用不同的风险参数' },
    { title: '情绪主导型结构适应', desc: '策略正在从"趋势流畅型"向"情绪适应型"进化' },
  ],
  // QQ二维码图片路径
  qqQRCode: '/images/qq-qr-code.png',
};

export default function MonthlyReview({ t }) {
  const [showQRCode, setShowQRCode] = useState(false);

  return (
    <section id="review" className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 标题区域 */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-red-500 to-orange-500 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Zap size={16} />
            {reviewData.month}实战成果
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            {reviewData.title}
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            {reviewData.subtitle}
          </p>
        </div>

        {/* 核心数据卡片 - 只保留3个最亮眼的 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {reviewData.metrics.map((metric, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-2xl p-8 text-center hover:border-slate-600 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${metric.color} mb-4`}>
                <metric.icon size={28} className="text-white" />
              </div>
              <div className="text-4xl lg:text-5xl font-bold text-white mb-2">
                {metric.value}
              </div>
              <div className="text-base text-gray-400">{metric.label}</div>
            </div>
          ))}
        </div>

        {/* 简化的关键交易展示 - 只说最牛的战绩 */}
        <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 border-2 border-green-500/40 rounded-2xl p-8 mb-12">
          <div className="flex items-center gap-3 mb-4">
            <Award className="text-green-400" size={32} />
            <h3 className="text-2xl font-bold text-white">🏆 {reviewData.highlightTrade.title}</h3>
          </div>
          <div className="flex flex-col md:flex-row md:items-center gap-6">
            <div className="text-5xl font-bold text-green-400">
              {reviewData.highlightTrade.profit}
            </div>
            <p className="text-gray-300 text-lg flex-1">
              {reviewData.highlightTrade.desc}
            </p>
          </div>
        </div>

        {/* 只展示做空的亮眼数据 */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-white text-center mb-8">📊 {reviewData.shortStats.title}</h3>
          <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 border-2 border-green-500/30 rounded-2xl p-8 max-w-2xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-green-400 mb-1">{reviewData.shortStats.count}</div>
                <div className="text-sm text-gray-400">交易笔数</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-400 mb-1">{reviewData.shortStats.winRate}</div>
                <div className="text-sm text-gray-400">胜率</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-orange-400 mb-1">{reviewData.shortStats.totalR}</div>
                <div className="text-sm text-gray-400">总收益</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-400 mb-1">{reviewData.shortStats.highlight}</div>
                <div className="text-sm text-gray-400">止损情况</div>
              </div>
            </div>
          </div>
        </div>

        {/* 核心优势 */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-white text-center mb-8">💎 为什么我们比别人强？</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {reviewData.advantages.map((adv, index) => (
              <div key={index} className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-xl p-6">
                <h4 className="text-lg font-bold text-white mb-3">{adv.title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed">{adv.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA - 点击弹出QQ二维码 */}
        <div className="text-center bg-gradient-to-r from-red-500 to-orange-500 rounded-2xl p-8 lg:p-12">
          <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
            🚀 准备好盈利了吗？
          </h3>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            三月复盘证明：六爻剧本+策略的组合能带来更高收益、更低风险。四月我们将继续优化，帮你更稳健地盈利！
          </p>
          <button
            onClick={() => setShowQRCode(true)}
            className="inline-block bg-white text-red-500 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            📩 立即加入实战营
          </button>
          <p className="text-white/70 mt-4 text-sm">限量招募中，扫码或联系QQ了解更多</p>
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
              {/* 这里显示QQ二维码图片 */}
              <img
                src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=3822532541"
                alt="QQ二维码"
                className="w-48 h-48 mx-auto"
              />
            </div>
            <p className="text-gray-500 text-sm">或搜索QQ号：3822532541</p>
          </div>
        </div>
      )}
    </section>
  );
}
