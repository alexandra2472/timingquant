'use client';

import { useState } from 'react';
import { TrendingUp, TrendingDown, Target, Award, Zap, X } from 'lucide-react';

// 月度复盘数据配置 - 三月完整交易数据（按收益率统计，共14笔）
const reviewData = {
  month: '三月',
  title: '实战复盘：六爻剧本+策略的组合力量',
  subtitle: '做空胜率100% | 整体胜率71% | 14笔交易多空双杀',
  metrics: [
    { value: '100%', label: '做空胜率', icon: TrendingDown, color: 'from-red-500 to-red-600' },
    { value: '71%', label: '整体胜率', icon: Target, color: 'from-blue-500 to-indigo-600' },
    { value: '14笔', label: '本月交易', icon: TrendingUp, color: 'from-green-500 to-emerald-600' },
  ],
  // 最新关键交易展示（按收益率）
  highlightTrade: {
    title: '单笔最高收益率',
    profit: '+4.99%',
    desc: '3月16日做多ETH单笔+4.99%；做空最高+3.12%，多空双向均有亮眼表现',
  },
  // 三月整体战绩（按收益率统计）
  shortStats: {
    title: '三月完整战绩',
    count: '14笔',
    winRate: '71%',
    shortWinRate: '100%',
    longWinRate: '60%',
    highlight: '4笔做空全胜',
  },
  // 详细战绩分析
  detailedAnalysis: {
    summary: '三月共执行14笔交易，整体胜率71.4%，其中做空4笔全胜，做多10笔胜率60%。盈利交易最高达+4.99%，亏损交易严格控制在-2.60%。',
    shortTrades: {
      count: 4,
      winRate: '100%',
      trades: [
        { date: '3月18日', return: '+3.12%', type: '做空' },
        { date: '3月9日', return: '+1.74%', type: '做空' },
        { date: '3月30日', return: '+1.45%', type: '做空' },
        { date: '3月1日', return: '+0.02%', type: '做空' },
      ],
      analysis: '做空信号质量极高，4笔全部盈利。最大单笔+3.12%，最小+0.02%，平均收益率约+1.58%。',
    },
    longTrades: {
      count: 10,
      winRate: '60%',
      wins: [
        { date: '3月16日', return: '+4.99%' },
        { date: '3月30日', return: '+1.07%' },
        { date: '3月14日', return: '+0.02%' },
        { date: '3月12日', return: '+0.02%' },
        { date: '3月10日', return: '+0.02%' },
        { date: '3月2日', return: '+0.02%' },
      ],
      losses: [
        { date: '3月26日', return: '-2.60%' },
        { date: '3月25日', return: '-2.60%' },
        { date: '3月5日', return: '-2.60%' },
        { date: '3月1日', return: '-2.60%' },
      ],
      analysis: '做多10笔中6笔盈利，胜率60%。盈利交易以小额止盈为主，最高单笔+4.99%为全月最佳。亏损4笔均为-2.60%止损，风控严格执行。',
    },
    riskControl: {
      maxProfit: '+4.99%',
      maxLoss: '-2.60%',
      profitLossRatio: '1.92:1',
      analysis: '盈亏比约1.92:1，盈利上限高于亏损上限，符合正向期望系统。所有亏损严格控制在-2.60%，无大额回撤。',
    },
    timeDistribution: {
      earlyMonth: '3月1-10日：6笔交易，多空各半，磨合期',
      midMonth: '3月11-20日：4笔交易，出现全月最高收益+4.99%',
      lateMonth: '3月21-30日：4笔交易，做空全胜收尾',
    },
  },
  advantages: [
    { title: '做空100%胜率', desc: '3月4笔做空全部盈利（+3.12%、+1.74%、+1.45%、+0.02%），做空信号质量极高' },
    { title: '多空双向盈利', desc: '做多10笔中6笔盈利，最高+4.99%，多空均有斩获' },
    { title: '严格风险控制', desc: '亏损交易控制在-2.60%，盈利交易最高达+4.99%，盈亏比健康' },
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

        {/* 详细战绩分析 */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">📈 全月战绩深度分析</h3>
          
          {/* 总体概述 */}
          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-xl mb-8">
            <p className="text-gray-800 leading-relaxed">{reviewData.detailedAnalysis.summary}</p>
          </div>

          {/* 做空战绩 */}
          <div className="bg-red-50 rounded-2xl p-6 mb-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center text-white font-bold">空</div>
              <h4 className="text-xl font-bold text-gray-900">做空战绩（全胜）</h4>
              <span className="px-3 py-1 bg-red-600 text-white text-sm font-bold rounded-full">100% 胜率</span>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
              {reviewData.detailedAnalysis.shortTrades.trades.map((trade, idx) => (
                <div key={idx} className="bg-white rounded-lg p-4 text-center">
                  <div className="text-sm text-gray-500 mb-1">{trade.date}</div>
                  <div className="text-xl font-bold text-red-600">{trade.return}</div>
                </div>
              ))}
            </div>
            <p className="text-gray-700 text-sm">{reviewData.detailedAnalysis.shortTrades.analysis}</p>
          </div>

          {/* 做多战绩 */}
          <div className="bg-green-50 rounded-2xl p-6 mb-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center text-white font-bold">多</div>
              <h4 className="text-xl font-bold text-gray-900">做多战绩</h4>
              <span className="px-3 py-1 bg-green-600 text-white text-sm font-bold rounded-full">60% 胜率</span>
            </div>
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div>
                <p className="text-sm text-gray-500 mb-2">✅ 盈利交易（6笔）</p>
                <div className="flex flex-wrap gap-2">
                  {reviewData.detailedAnalysis.longTrades.wins.map((trade, idx) => (
                    <span key={idx} className="px-3 py-1 bg-green-200 text-green-800 text-sm rounded-full">
                      {trade.date} {trade.return}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-2">❌ 止损交易（4笔）</p>
                <div className="flex flex-wrap gap-2">
                  {reviewData.detailedAnalysis.longTrades.losses.map((trade, idx) => (
                    <span key={idx} className="px-3 py-1 bg-gray-200 text-gray-700 text-sm rounded-full">
                      {trade.date} {trade.return}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <p className="text-gray-700 text-sm">{reviewData.detailedAnalysis.longTrades.analysis}</p>
          </div>

          {/* 风控分析 */}
          <div className="bg-amber-50 rounded-2xl p-6 mb-6">
            <h4 className="text-xl font-bold text-gray-900 mb-4">🛡️ 风险控制分析</h4>
            <div className="grid grid-cols-3 gap-4 mb-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">{reviewData.detailedAnalysis.riskControl.maxProfit}</div>
                <div className="text-sm text-gray-600">最大盈利</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-red-600">{reviewData.detailedAnalysis.riskControl.maxLoss}</div>
                <div className="text-sm text-gray-600">最大亏损</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">{reviewData.detailedAnalysis.riskControl.profitLossRatio}</div>
                <div className="text-sm text-gray-600">盈亏比</div>
              </div>
            </div>
            <p className="text-gray-700 text-sm">{reviewData.detailedAnalysis.riskControl.analysis}</p>
          </div>

          {/* 时间分布 */}
          <div className="bg-slate-100 rounded-2xl p-6">
            <h4 className="text-xl font-bold text-gray-900 mb-4">📅 交易时间分布</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <span className="px-2 py-1 bg-blue-200 text-blue-800 text-xs font-bold rounded">月初</span>
                <p className="text-gray-700 text-sm">{reviewData.detailedAnalysis.timeDistribution.earlyMonth}</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="px-2 py-1 bg-purple-200 text-purple-800 text-xs font-bold rounded">月中</span>
                <p className="text-gray-700 text-sm">{reviewData.detailedAnalysis.timeDistribution.midMonth}</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="px-2 py-1 bg-orange-200 text-orange-800 text-xs font-bold rounded">月末</span>
                <p className="text-gray-700 text-sm">{reviewData.detailedAnalysis.timeDistribution.lateMonth}</p>
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
