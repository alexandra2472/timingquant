'use client';

import { useState } from 'react';
import { TrendingUp, TrendingDown, Target, BarChart3, Award, Zap } from 'lucide-react';

// 月度复盘数据配置
const reviewData = {
  month: '三月',
  title: '实战复盘：六爻剧本+策略的组合力量',
  subtitle: '做空胜率100% | 六爻剧本准确率80% | 捕捉假希望插针-11.41%',
  metrics: [
    { value: '100%', label: '做空胜率', icon: TrendingDown, color: 'from-green-500 to-emerald-600' },
    { value: '80%', label: '六爻剧本准确率', icon: Target, color: 'from-blue-500 to-indigo-600' },
    { value: '+1.56R', label: '关键交易R值', icon: Award, color: 'from-purple-500 to-violet-600' },
    { value: '+5.70R', label: '做空总收益', icon: TrendingUp, color: 'from-orange-500 to-red-600' },
  ],
  keyTrade: {
    title: '段4回光区完美捕捉',
    date: '3/18',
    type: '做空',
    profit: '+3.12%',
    rValue: '+1.56R',
    description: '六爻剧本提示"突然上插针，像情绪回光"，策略在插针后做空，吃到完整回落',
  },
  comparison: {
    short: { count: 3, winRate: '100%', avgR: '+1.90R', totalR: '+5.70R', stops: '零止损' },
    long: { count: 8, winRate: '50%', avgR: '+0.25R', totalR: '+2.00R', stops: '3笔止损' },
  },
  advantages: [
    { title: '情绪转折点精准判断', desc: '六爻剧本在段4回光区的假希望插针判断准确，完美预警了-11.41%的暴跌' },
    { title: '做空信号100%胜率', desc: '数据证明，在情绪主导型行情中，做空信号质量明显高于做多' },
    { title: '结构段动态仓位', desc: '根据六爻剧本的6个结构段，每个阶段使用不同的风险参数' },
    { title: '情绪主导型结构适应', desc: '策略正在从"趋势流畅型"向"情绪适应型"进化' },
  ],
  chartImage: '/images/ethusdt_analysis.png', // 需要替换为实际图片路径
};

export default function MonthlyReview({ t }) {
  const [activeTab, setActiveTab] = useState('short');

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

        {/* 核心数据卡片 */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-16">
          {reviewData.metrics.map((metric, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-2xl p-6 text-center hover:border-slate-600 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${metric.color} mb-4`}>
                <metric.icon size={24} className="text-white" />
              </div>
              <div className="text-3xl lg:text-4xl font-bold text-white mb-2">
                {metric.value}
              </div>
              <div className="text-sm text-gray-400">{metric.label}</div>
            </div>
          ))}
        </div>

        {/* 关键交易展示 */}
        <div className="bg-gradient-to-br from-red-500/20 to-orange-500/20 border border-red-500/30 rounded-2xl p-8 mb-12">
          <div className="flex items-center gap-3 mb-6">
            <Award className="text-red-400" size={28} />
            <h3 className="text-2xl font-bold text-white">🏆 {reviewData.keyTrade.title}</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <span className="text-gray-400">交易时间：</span>
                <span className="text-white font-semibold">{reviewData.keyTrade.date}</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-gray-400">交易方向：</span>
                <span className="text-green-400 font-semibold">{reviewData.keyTrade.type}</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-gray-400">收益率：</span>
                <span className="text-green-400 font-bold text-xl">{reviewData.keyTrade.profit}</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-gray-400">R值：</span>
                <span className="text-orange-400 font-bold text-xl">{reviewData.keyTrade.rValue}</span>
              </div>
            </div>
            <div className="bg-slate-900/50 rounded-xl p-6">
              <p className="text-gray-300 leading-relaxed">
                <span className="text-red-400 font-semibold">背景：</span>
                {reviewData.keyTrade.description}
              </p>
            </div>
          </div>
        </div>

        {/* 做空 vs 做多对比 */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-white text-center mb-8">⚖️ 做空 vs 做多：数据说话</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {/* 做空信号 */}
            <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 border-2 border-green-500/30 rounded-2xl p-6">
              <h4 className="text-xl font-bold text-green-400 mb-4 flex items-center gap-2">
                <TrendingDown size={24} />
                做空信号（{reviewData.comparison.short.count}笔）
              </h4>
              <ul className="space-y-3">
                <li className="flex justify-between items-center py-2 border-b border-slate-700">
                  <span className="text-gray-400">胜率</span>
                  <span className="text-green-400 font-bold">{reviewData.comparison.short.winRate}</span>
                </li>
                <li className="flex justify-between items-center py-2 border-b border-slate-700">
                  <span className="text-gray-400">平均R值</span>
                  <span className="text-green-400 font-bold">{reviewData.comparison.short.avgR}</span>
                </li>
                <li className="flex justify-between items-center py-2 border-b border-slate-700">
                  <span className="text-gray-400">总收益</span>
                  <span className="text-green-400 font-bold">{reviewData.comparison.short.totalR}</span>
                </li>
                <li className="flex justify-between items-center py-2">
                  <span className="text-gray-400">止损情况</span>
                  <span className="text-green-400 font-bold">{reviewData.comparison.short.stops}</span>
                </li>
              </ul>
            </div>

            {/* 做多信号 */}
            <div className="bg-gradient-to-br from-slate-700/30 to-slate-800/30 border border-slate-600 rounded-2xl p-6">
              <h4 className="text-xl font-bold text-gray-300 mb-4 flex items-center gap-2">
                <TrendingUp size={24} />
                做多信号（{reviewData.comparison.long.count}笔）
              </h4>
              <ul className="space-y-3">
                <li className="flex justify-between items-center py-2 border-b border-slate-700">
                  <span className="text-gray-400">胜率</span>
                  <span className="text-gray-300 font-bold">{reviewData.comparison.long.winRate}</span>
                </li>
                <li className="flex justify-between items-center py-2 border-b border-slate-700">
                  <span className="text-gray-400">平均R值</span>
                  <span className="text-gray-300 font-bold">{reviewData.comparison.long.avgR}</span>
                </li>
                <li className="flex justify-between items-center py-2 border-b border-slate-700">
                  <span className="text-gray-400">总收益</span>
                  <span className="text-gray-300 font-bold">{reviewData.comparison.long.totalR}</span>
                </li>
                <li className="flex justify-between items-center py-2">
                  <span className="text-gray-400">止损情况</span>
                  <span className="text-red-400 font-bold">{reviewData.comparison.long.stops}</span>
                </li>
              </ul>
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

        {/* CTA */}
        <div className="text-center bg-gradient-to-r from-red-500 to-orange-500 rounded-2xl p-8 lg:p-12">
          <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
            🚀 准备好盈利了吗？
          </h3>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            三月复盘证明：六爻剧本+策略的组合能带来更高收益、更低风险。四月我们将继续优化，帮你更稳健地盈利！
          </p>
          <a
            href="#pricing"
            className="inline-block bg-white text-red-500 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            📩 立即加入实战营
          </a>
          <p className="text-white/70 mt-4 text-sm">限量招募中，扫码或联系QQ了解更多</p>
        </div>
      </div>
    </section>
  );
}
