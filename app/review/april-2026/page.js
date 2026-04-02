'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function AprilReviewPage() {
  const [activeTab, setActiveTab] = useState('liuyao');

  // 四月六爻剧本多空系数
  const liuyaoCoefficients = [
    { 
      segment: '阶段1', 
      period: '4/1-2日', 
      name: '月初轻微涨幅', 
      long: 0.5, 
      short: 0.2, 
      desc: '月初两天轻微涨幅波动，能量不强',
      note: '观望为主，轻仓参与'
    },
    { 
      segment: '阶段2', 
      period: '4/3-5日', 
      name: '明显下跌开始', 
      long: 0.2, 
      short: 1.0, 
      desc: '从3号开始明显下跌，空头主导',
      note: '极轻仓多，正常做空'
    },
    { 
      segment: '阶段3', 
      period: '4/6-8日', 
      name: '月初低点+弱反弹', 
      long: 0.5, 
      short: 0.5, 
      desc: '6号明显低点，7-8号短时间反弹但能量不强',
      note: '方向不明，多空均轻仓'
    },
    { 
      segment: '阶段4', 
      period: '4/9-11日', 
      name: '下插针+震荡', 
      long: 0.5, 
      short: 0.5, 
      desc: '9号下插针，10-11号震荡或横盘',
      note: '方向不明，多空均轻仓'
    },
    { 
      segment: '阶段5', 
      period: '4/12-13日', 
      name: '剧烈波动+震荡', 
      long: 0.5, 
      short: 0.5, 
      desc: '12号开始波动剧烈，上插针后回落更像回踩',
      note: '方向不明，多空均轻仓'
    },
    { 
      segment: '阶段6', 
      period: '4/14日', 
      name: '诱多上插', 
      long: 0.2, 
      short: 1.2, 
      desc: '14号可能明显上插，诱多陷阱',
      note: '⚠️ 极轻仓多，重仓做空',
      warning: true
    },
    { 
      segment: '阶段7', 
      period: '4/15-18日', 
      name: '持续下跌', 
      long: 0.2, 
      short: 1.0, 
      desc: '14号上插后跌至17-18号',
      note: '单边下跌，极轻仓多，正常做空'
    },
    { 
      segment: '阶段8', 
      period: '4/19-20日', 
      name: '最低点弱反弹', 
      long: 0.3, 
      short: 0.5, 
      desc: '17-18号最低点后弱反弹',
      note: '力度弱，谨慎参与'
    },
    { 
      segment: '阶段9', 
      period: '4/21-22日', 
      name: '突然上插针', 
      long: 0.2, 
      short: 0.8, 
      desc: '21-22号可能突然上插针',
      note: '⚠️ 不易做多，小心假突破',
      warning: true
    },
    { 
      segment: '阶段10', 
      period: '4/23-24日', 
      name: '震荡过渡', 
      long: 0.3, 
      short: 0.6, 
      desc: '波动过渡，等待方向',
      note: '降低仓位，观望为主'
    },
    { 
      segment: '阶段11', 
      period: '4/25-26日', 
      name: '再次上插针', 
      long: 0.2, 
      short: 0.8, 
      desc: '25-26号再次出现上插针反弹',
      note: '诱多性质，空为主'
    },
    { 
      segment: '阶段12', 
      period: '4/27-30日', 
      name: '回落到月低点', 
      long: 0.3, 
      short: 1.0, 
      desc: '27号后回落，29-30号本月低点',
      note: '月末持续弱势，做空为主'
    },
  ];

  // 关键节点
  const keyPoints = {
    lowest: ['4月17-18日', '4月29-30日'],
    highest: ['4月2日', '4月11日', '4月14日'],
    pattern: '先涨后跌，涨幅不多，跌的较多',
  };

  return (
    <main className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-slate-900 text-white py-6 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold">四月实战复盘</h1>
              <p className="text-slate-400 text-sm mt-1">量化策略 × 六爻剧本 结合效果分析</p>
            </div>
            <Link href="/" className="text-sm px-4 py-2 bg-slate-800 rounded-lg hover:bg-slate-700 transition">
              返回首页
            </Link>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <div className="bg-white border-b border-slate-200 sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex gap-1 py-2">
            {[
              { id: 'liuyao', label: '六爻剧本' },
              { id: 'quant', label: '量化表现', disabled: true },
              { id: 'combined', label: '结合效果', disabled: true },
              { id: 'conclusion', label: '关键结论', disabled: true },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => !tab.disabled && setActiveTab(tab.id)}
                disabled={tab.disabled}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
                  activeTab === tab.id
                    ? 'bg-blue-600 text-white'
                    : tab.disabled
                    ? 'text-slate-300 cursor-not-allowed'
                    : 'text-slate-600 hover:bg-slate-100'
                }`}
              >
                {tab.label}
                {tab.disabled && <span className="ml-1 text-xs">(待更新)</span>}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-8">
        {/* Liuyao Tab */}
        {activeTab === 'liuyao' && (
          <div className="space-y-6">
            {/* 核心判断 */}
            <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-xl">
              <div className="flex items-center gap-2 mb-2">
                <span className="px-3 py-1 bg-red-600 text-white text-sm font-bold rounded">年卦</span>
                <h3 className="font-bold text-red-900">四月核心判断</h3>
              </div>
              <p className="text-red-800 text-lg">"4月是一个很可能大跌的月份"</p>
              <p className="text-red-700 mt-2">整体形态：先涨后跌，涨幅不多，跌的较多</p>
            </div>

            {/* 月卦推演 */}
            <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-xl">
              <div className="flex items-center gap-2 mb-2">
                <span className="px-3 py-1 bg-amber-600 text-white text-sm font-bold rounded">月卦</span>
                <h3 className="font-bold text-amber-900">月卦推演</h3>
              </div>
              <p className="text-amber-800">月初两天轻微涨幅波动，从3号开始就会有明显的下跌出现。</p>
            </div>

            {/* 关键节点 */}
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white rounded-xl p-5 border-l-4 border-red-600 shadow-sm">
                <p className="text-sm text-slate-500 mb-2">本月最低点</p>
                <div className="space-y-1">
                  {keyPoints.lowest.map((date, idx) => (
                    <p key={idx} className="text-red-700 font-bold">{date}</p>
                  ))}
                </div>
              </div>
              <div className="bg-white rounded-xl p-5 border-l-4 border-green-600 shadow-sm">
                <p className="text-sm text-slate-500 mb-2">本月相对高点</p>
                <div className="space-y-1">
                  {keyPoints.highest.map((date, idx) => (
                    <p key={idx} className="text-green-700 font-bold">{date}</p>
                  ))}
                </div>
              </div>
              <div className="bg-white rounded-xl p-5 border-l-4 border-blue-600 shadow-sm">
                <p className="text-sm text-slate-500 mb-2">整体形态</p>
                <p className="text-blue-700 font-bold">{keyPoints.pattern}</p>
              </div>
            </div>

            {/* 多空系数表 */}
            <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm">
              <div className="px-6 py-4 bg-slate-50 border-b border-slate-200">
                <h3 className="font-bold text-slate-900">多空仓位系数设计</h3>
                <p className="text-sm text-slate-500 mt-1">原则：信号全收，仓位调节，风控优先 | 阶段3-5方向不明，多空均轻仓</p>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-slate-50 text-slate-600 text-sm">
                    <tr>
                      <th className="px-4 py-3 text-left">阶段</th>
                      <th className="px-4 py-3 text-left">时间</th>
                      <th className="px-4 py-3 text-left">卦象特征</th>
                      <th className="px-4 py-3 text-center">做多</th>
                      <th className="px-4 py-3 text-center">做空</th>
                      <th className="px-4 py-3 text-left">策略说明</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {liuyaoCoefficients.map((item, idx) => (
                      <tr key={idx} className={item.warning ? 'bg-red-50' : ''}>
                        <td className="px-4 py-3 font-medium">{item.segment}</td>
                        <td className="px-4 py-3 text-slate-600 whitespace-nowrap">{item.period}</td>
                        <td className="px-4 py-3">
                          <div className="font-medium text-slate-900">{item.name}</div>
                          <div className="text-sm text-slate-500">{item.desc}</div>
                        </td>
                        <td className="px-4 py-3 text-center">
                          <span className={`inline-block w-12 py-1 rounded font-bold ${
                            item.long >= 0.8 ? 'bg-green-200 text-green-800' :
                            item.long >= 0.3 ? 'bg-green-100 text-green-700' :
                            'bg-slate-100 text-slate-500'
                          }`}>
                            {item.long}
                          </span>
                        </td>
                        <td className="px-4 py-3 text-center">
                          <span className={`inline-block w-12 py-1 rounded font-bold ${
                            item.short >= 1.0 ? 'bg-red-200 text-red-800' :
                            item.short >= 0.6 ? 'bg-red-100 text-red-700' :
                            'bg-slate-100 text-slate-500'
                          }`}>
                            {item.short}
                          </span>
                        </td>
                        <td className="px-4 py-3 text-sm text-slate-600">
                          {item.note}
                          {item.warning && <span className="ml-1 text-red-500">⚠️</span>}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* 策略建议 */}
            <div className="bg-red-900 text-white rounded-xl p-6">
              <h3 className="text-xl font-bold mb-4">策略建议</h3>
              <div className="bg-red-800 rounded-lg p-4 mb-4">
                <p className="text-xl font-bold text-red-200">空单作为4月的主要方向</p>
              </div>
              <p className="text-red-200">在有正向期望系统的前提下，可适当放大空单的仓位。</p>
              <div className="mt-4 pt-4 border-t border-red-700">
                <p className="text-sm text-red-300">特别警惕：4月14日诱多上插、4月21-22日突然上插针</p>
              </div>
            </div>
          </div>
        )}

        {/* Placeholder Tabs */}
        {(activeTab === 'quant' || activeTab === 'combined' || activeTab === 'conclusion') && (
          <div className="flex items-center justify-center py-24">
            <div className="text-center">
              <div className="text-6xl mb-4">📊</div>
              <h3 className="text-xl font-bold text-slate-700 mb-2">待更新</h3>
              <p className="text-slate-500">等待四月交易数据导入后更新</p>
            </div>
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="bg-slate-100 border-t border-slate-200 py-8 mt-12">
        <div className="max-w-6xl mx-auto px-6 text-center text-slate-500 text-sm">
          <p>时势量化工作室 · 四月实战复盘</p>
          <p className="mt-1">量化策略 × 六爻剧本 结合研究</p>
        </div>
      </footer>
    </main>
  );
}
