'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function MarchReviewPage() {
  const [activeTab, setActiveTab] = useState('overview');

  // 量化交易数据
  const quantTrades = [
    { id: 168, date: '2/27-3/1', entry: '1,941.89', exit: '1,939.58', type: '做空', return: '+0.02%', result: 'win' },
    { id: 169, date: '3/1-3/2', entry: '2,005.88', exit: '1,955.71', type: '做多', return: '-2.60%', result: 'loss' },
    { id: 170, date: '3/2-3/3', entry: '2,046.41', exit: '2,048.84', type: '做多', return: '+0.02%', result: 'win' },
    { id: 171, date: '3/5', entry: '2,155.10', exit: '2,101.20', type: '做多', return: '-2.60%', result: 'loss' },
    { id: 172, date: '3/6-3/9', entry: '2,047.56', exit: '2,009.88', type: '做空', return: '+1.74%', result: 'win' },
    { id: 173, date: '3/9-3/10', entry: '2,009.88', exit: '2,012.27', type: '做多', return: '+0.02%', result: 'win' },
    { id: 174, date: '3/11-3/12', entry: '2,049.90', exit: '2,052.33', type: '做多', return: '+0.02%', result: 'win' },
    { id: 175, date: '3/13-3/14', entry: '2,068.65', exit: '2,071.11', type: '做多', return: '+0.02%', result: 'win' },
    { id: 176, date: '3/16-3/18', entry: '2,128.02', exit: '2,236.46', type: '做多', return: '+4.99%', result: 'win', highlight: true },
    { id: 177, date: '3/18-3/24', entry: '2,236.46', exit: '2,164.35', type: '做空', return: '+3.12%', result: 'win', highlight: true },
    { id: 178, date: '3/24-3/25', entry: '2,164.35', exit: '2,110.22', type: '做多', return: '-2.60%', result: 'loss' },
    { id: 179, date: '3/25-3/26', entry: '2,185.27', exit: '2,130.61', type: '做多', return: '-2.60%', result: 'loss' },
    { id: 180, date: '3/27-3/30', entry: '2,067.10', exit: '2,034.99', type: '做空', return: '+1.45%', result: 'win' },
    { id: 181, date: '3/30', entry: '2,034.99', exit: '2,066.16', type: '做多', return: '+1.43%', result: 'win' },
  ];

  // 六爻剧本多空系数
  const liuyaoCoefficients = [
    { segment: '结构段1', period: '3/1-3日', name: '回踩确认区', long: 0.6, short: 0.3, desc: '震荡筑底，多略占优' },
    { segment: '结构段2-前', period: '3/4-6日', name: '第一波冲高', long: 1.0, short: 0.2, desc: '冲顶前半，全力做多' },
    { segment: '结构段2-峰', period: '3/6-7日', name: '第一峰形成', long: 0.3, short: 1.0, desc: '峰顶区域，全力做空' },
    { segment: '结构段2-后', period: '3/7-9日', name: '第二峰/回踩', long: 0.5, short: 0.5, desc: '不确定，多空均衡' },
    { segment: '结构段3', period: '3/10-17日', name: '震荡衰退区', long: 0.4, short: 1.0, desc: '回落段，做空为主，允许多头反弹' },
    { segment: '结构段4', period: '3/17-21日', name: '回光返照/假希望', long: 0.2, short: 1.2, desc: '诱多陷阱，重仓空，极轻仓多' },
    { segment: '结构段5', period: '3/22-28日', name: '慢性衰竭区', long: 0.3, short: 1.0, desc: '弱势延续，做空为主' },
    { segment: '结构段6', period: '3/29-31日', name: '弱反弹区', long: 0.7, short: 0.4, desc: '月末修复，多略占优' },
  ];

  // 结合效果数据
  const combinedResults = [
    { id: 168, segment: '结构段1', signal: '做空', coef: 0.3, adjustedReturn: '+0.006%', originalReturn: '+0.02%' },
    { id: 169, segment: '结构段1', signal: '做多', coef: 0.6, adjustedReturn: '-1.56%', originalReturn: '-2.60%' },
    { id: 170, segment: '结构段1', signal: '做多', coef: 0.6, adjustedReturn: '+0.012%', originalReturn: '+0.02%' },
    { id: 171, segment: '结构段2-前', signal: '做多', coef: 1.0, adjustedReturn: '-2.60%', originalReturn: '-2.60%' },
    { id: 172, segment: '结构段2-峰', signal: '做空', coef: 1.0, adjustedReturn: '+1.74%', originalReturn: '+1.74%' },
    { id: 173, segment: '结构段2-后', signal: '做多', coef: 0.5, adjustedReturn: '+0.01%', originalReturn: '+0.02%' },
    { id: 174, segment: '结构段3', signal: '做多', coef: 0.4, adjustedReturn: '+0.008%', originalReturn: '+0.02%' },
    { id: 175, segment: '结构段3', signal: '做多', coef: 0.4, adjustedReturn: '+0.008%', originalReturn: '+0.02%' },
    { id: 176, segment: '结构段3', signal: '做多', coef: 0.4, adjustedReturn: '+2.00%', originalReturn: '+4.99%', highlight: true },
    { id: 177, segment: '结构段4', signal: '做空', coef: 1.2, adjustedReturn: '+3.74%', originalReturn: '+3.12%', highlight: true },
    { id: 178, segment: '结构段5', signal: '做多', coef: 0.3, adjustedReturn: '-0.78%', originalReturn: '-2.60%', saved: true },
    { id: 179, segment: '结构段5', signal: '做多', coef: 0.3, adjustedReturn: '-0.78%', originalReturn: '-2.60%', saved: true },
    { id: 180, segment: '结构段5', signal: '做空', coef: 1.0, adjustedReturn: '+1.45%', originalReturn: '+1.45%' },
    { id: 181, segment: '结构段6', signal: '做多', coef: 0.7, adjustedReturn: '+1.00%', originalReturn: '+1.43%' },
  ];

  const stats = {
    pureQuant: { return: '+2.22%', profit: '+2,218 USDT', maxLoss: '-2,600 USDT', segment45Loss: '-5,200 USDT' },
    combined: { return: '+4.27%', profit: '+4,270 USDT', maxLoss: '-2,600 USDT', segment45Loss: '-1,560 USDT' },
    improvement: '+2.05%',
  };

  return (
    <main className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-slate-900 text-white py-6 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold">三月实战复盘</h1>
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
              { id: 'overview', label: '总览' },
              { id: 'quant', label: '量化表现' },
              { id: 'liuyao', label: '六爻剧本' },
              { id: 'combined', label: '结合效果' },
              { id: 'conclusion', label: '关键结论' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
                  activeTab === tab.id
                    ? 'bg-blue-600 text-white'
                    : 'text-slate-600 hover:bg-slate-100'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-8">
        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-2xl p-8">
              <h2 className="text-3xl font-bold mb-4">三月战绩总览</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white/10 rounded-xl p-6">
                  <div className="text-4xl font-bold">14笔</div>
                  <div className="text-blue-200">总交易次数</div>
                </div>
                <div className="bg-white/10 rounded-xl p-6">
                  <div className="text-4xl font-bold">71%</div>
                  <div className="text-blue-200">整体胜率</div>
                </div>
                <div className="bg-white/10 rounded-xl p-6">
                  <div className="text-4xl font-bold">100%</div>
                  <div className="text-blue-200">做空胜率</div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 border border-slate-200">
                <h3 className="text-lg font-bold text-slate-900 mb-4">纯量化策略</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-slate-600">总收益率</span>
                    <span className="font-bold text-slate-900">{stats.pureQuant.return}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">总收益(10万U本金)</span>
                    <span className="font-bold text-slate-900">{stats.pureQuant.profit}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">结构段4-5亏损</span>
                    <span className="font-bold text-red-600">{stats.pureQuant.segment45Loss}</span>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 rounded-xl p-6 border border-green-200">
                <h3 className="text-lg font-bold text-green-900 mb-4">量化+六爻结合</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-green-700">总收益率</span>
                    <span className="font-bold text-green-900 text-xl">{stats.combined.return}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-green-700">总收益(10万U本金)</span>
                    <span className="font-bold text-green-900">{stats.combined.profit}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-green-700">结构段4-5亏损</span>
                    <span className="font-bold text-green-700">{stats.combined.segment45Loss}</span>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-green-200">
                  <div className="text-center">
                    <span className="text-green-600">收益提升</span>
                    <div className="text-3xl font-bold text-green-800">{stats.improvement}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Quant Tab */}
        {activeTab === 'quant' && (
          <div className="space-y-6">
            <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
              <div className="px-6 py-4 bg-slate-50 border-b border-slate-200">
                <h3 className="font-bold text-slate-900">量化策略交易明细</h3>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-slate-50 text-slate-600 text-sm">
                    <tr>
                      <th className="px-4 py-3 text-left">交易#</th>
                      <th className="px-4 py-3 text-left">日期</th>
                      <th className="px-4 py-3 text-left">方向</th>
                      <th className="px-4 py-3 text-right">入场价</th>
                      <th className="px-4 py-3 text-right">出场价</th>
                      <th className="px-4 py-3 text-right">收益率</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {quantTrades.map((trade) => (
                      <tr key={trade.id} className={trade.highlight ? 'bg-amber-50' : ''}>
                        <td className="px-4 py-3 font-medium">#{trade.id}</td>
                        <td className="px-4 py-3 text-slate-600">{trade.date}</td>
                        <td className="px-4 py-3">
                          <span className={`px-2 py-1 rounded text-sm font-medium ${
                            trade.type === '做多' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                          }`}>
                            {trade.type}
                          </span>
                        </td>
                        <td className="px-4 py-3 text-right font-mono">{trade.entry}</td>
                        <td className="px-4 py-3 text-right font-mono">{trade.exit}</td>
                        <td className={`px-4 py-3 text-right font-bold ${
                          trade.result === 'win' ? 'text-green-600' : 'text-red-600'
                        }`}>
                          {trade.return}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-green-50 rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-green-700">5笔</div>
                <div className="text-green-600">真正盈利</div>
                <div className="text-sm text-green-500 mt-1">+4.99% ~ +1.43%</div>
              </div>
              <div className="bg-blue-50 rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-blue-700">5笔</div>
                <div className="text-blue-600">打平出场</div>
                <div className="text-sm text-blue-500 mt-1">+0.02% (BE)</div>
              </div>
              <div className="bg-red-50 rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-red-700">4笔</div>
                <div className="text-red-600">止损</div>
                <div className="text-sm text-red-500 mt-1">-2.60%</div>
              </div>
            </div>
          </div>
        )}

        {/* Liuyao Tab */}
        {activeTab === 'liuyao' && (
          <div className="space-y-6">
            <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-xl">
              <h3 className="font-bold text-amber-900 mb-2">三月六爻剧本核心判断</h3>
              <p className="text-amber-800">"上半月情绪集中释放，下半月慢性衰退，中途多次假希望插针"</p>
              <p className="text-amber-700 text-sm mt-2">3月是情绪主导型结构，而不是趋势流畅型结构。2月是悲观杀人，3月是乐观杀人。</p>
            </div>

            <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
              <div className="px-6 py-4 bg-slate-50 border-b border-slate-200">
                <h3 className="font-bold text-slate-900">多空仓位系数设计</h3>
                <p className="text-sm text-slate-500 mt-1">原则：信号全收，仓位调节，风控优先</p>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-slate-50 text-slate-600 text-sm">
                    <tr>
                      <th className="px-4 py-3 text-left">结构段</th>
                      <th className="px-4 py-3 text-left">时间</th>
                      <th className="px-4 py-3 text-left">卦象特征</th>
                      <th className="px-4 py-3 text-center">做多系数</th>
                      <th className="px-4 py-3 text-center">做空系数</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {liuyaoCoefficients.map((item, idx) => (
                      <tr key={idx}>
                        <td className="px-4 py-3 font-medium">{item.segment}</td>
                        <td className="px-4 py-3 text-slate-600">{item.period}</td>
                        <td className="px-4 py-3">
                          <div className="font-medium text-slate-900">{item.name}</div>
                          <div className="text-sm text-slate-500">{item.desc}</div>
                        </td>
                        <td className="px-4 py-3 text-center">
                          <span className={`inline-block w-12 py-1 rounded font-bold ${
                            item.long >= 0.8 ? 'bg-green-200 text-green-800' :
                            item.long >= 0.4 ? 'bg-green-100 text-green-700' :
                            'bg-slate-100 text-slate-600'
                          }`}>
                            {item.long}
                          </span>
                        </td>
                        <td className="px-4 py-3 text-center">
                          <span className={`inline-block w-12 py-1 rounded font-bold ${
                            item.short >= 1.0 ? 'bg-red-200 text-red-800' :
                            item.short >= 0.4 ? 'bg-red-100 text-red-700' :
                            'bg-slate-100 text-slate-600'
                          }`}>
                            {item.short}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* Combined Tab */}
        {activeTab === 'combined' && (
          <div className="space-y-6">
            <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
              <div className="px-6 py-4 bg-slate-50 border-b border-slate-200">
                <h3 className="font-bold text-slate-900">结合效果明细</h3>
                <p className="text-sm text-slate-500 mt-1">实际收益 = 原始收益 × 仓位系数</p>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-slate-50 text-slate-600 text-sm">
                    <tr>
                      <th className="px-4 py-3 text-left">交易#</th>
                      <th className="px-4 py-3 text-left">结构段</th>
                      <th className="px-4 py-3 text-left">信号</th>
                      <th className="px-4 py-3 text-center">系数</th>
                      <th className="px-4 py-3 text-right">原始收益</th>
                      <th className="px-4 py-3 text-right">调整后收益</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {combinedResults.map((item) => (
                      <tr key={item.id} className={item.highlight ? 'bg-amber-50' : item.saved ? 'bg-green-50' : ''}>
                        <td className="px-4 py-3 font-medium">#{item.id}</td>
                        <td className="px-4 py-3 text-slate-600">{item.segment}</td>
                        <td className="px-4 py-3">
                          <span className={`px-2 py-1 rounded text-sm ${
                            item.signal === '做多' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                          }`}>
                            {item.signal}
                          </span>
                        </td>
                        <td className="px-4 py-3 text-center font-bold">{item.coef}</td>
                        <td className="px-4 py-3 text-right">{item.originalReturn}</td>
                        <td className={`px-4 py-3 text-right font-bold ${
                          item.adjustedReturn.startsWith('+') ? 'text-green-600' : 'text-red-600'
                        }`}>
                          {item.adjustedReturn}
                          {item.saved && <span className="ml-2 text-xs text-green-600">💰</span>}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-green-50 rounded-xl p-6 border border-green-200">
                <h4 className="font-bold text-green-900 mb-3">💰 风险节省</h4>
                <p className="text-green-800">#178 #179 在结构段5（慢性衰竭），做多系数0.3</p>
                <div className="mt-3 text-2xl font-bold text-green-700">
                  -5,200 USDT → -1,560 USDT
                </div>
                <div className="text-green-600">节省 3,640 USDT</div>
              </div>

              <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
                <h4 className="font-bold text-blue-900 mb-3">🚀 盈利放大</h4>
                <p className="text-blue-800">#177 在结构段4（假希望），做空系数1.2</p>
                <div className="mt-3 text-2xl font-bold text-blue-700">
                  +3.12% → +3.74%
                </div>
                <div className="text-blue-600">额外收益 +768 USDT</div>
              </div>
            </div>
          </div>
        )}

        {/* Conclusion Tab */}
        {activeTab === 'conclusion' && (
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-slate-800 to-slate-900 text-white rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6">关键结论</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white/10 rounded-xl p-6">
                  <div className="text-4xl mb-2">📊</div>
                  <h4 className="font-bold mb-2">信号全收</h4>
                  <p className="text-slate-300 text-sm">不错过任何量化信号，14笔交易全部参与</p>
                </div>
                <div className="bg-white/10 rounded-xl p-6">
                  <div className="text-4xl mb-2">⚖️</div>
                  <h4 className="font-bold mb-2">仓位调节</h4>
                  <p className="text-slate-300 text-sm">根据六爻剧本动态调整仓位，顺势重仓，逆势轻仓</p>
                </div>
                <div className="bg-white/10 rounded-xl p-6">
                  <div className="text-4xl mb-2">🛡️</div>
                  <h4 className="font-bold mb-2">风险可控</h4>
                  <p className="text-slate-300 text-sm">结构段4-5风险降低70%，最大回撤有效控制</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 border border-slate-200">
              <h4 className="font-bold text-slate-900 mb-4">核心发现</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold shrink-0">1</span>
                  <div>
                    <span className="font-medium text-slate-900">抓住大盈利：</span>
                    <span className="text-slate-600">#176 (+4.99%) 虽仓位降至0.4，但仍抓住+2.0%收益，不错过结构性机会</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold shrink-0">2</span>
                  <div>
                    <span className="font-medium text-slate-900">避免大亏损：</span>
                    <span className="text-slate-600">#178 #179 在"慢性衰竭"段，做多系数0.3，亏损从-5,200降至-1,560</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold shrink-0">3</span>
                  <div>
                    <span className="font-medium text-slate-900">放大顺势盈利：</span>
                    <span className="text-slate-600">#177 在"假希望"段，做空系数1.2，盈利从+3.12%放大至+3.74%</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold shrink-0">4</span>
                  <div>
                    <span className="font-medium text-slate-900">收益几乎翻倍：</span>
                    <span className="text-slate-600">纯量化+2.22%，结合后+4.27%，提升+2.05个百分点</span>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
              <h4 className="font-bold text-amber-900 mb-2">💡 启示</h4>
              <p className="text-amber-800">六爻剧本的价值不在于预测具体点位，而在于识别"能量阶段"。量化策略负责捕捉信号，六爻负责判断"这个信号该不该重仓"。两者结合，实现了1+1&gt;2的效果。</p>
            </div>
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="bg-slate-100 border-t border-slate-200 py-8 mt-12">
        <div className="max-w-6xl mx-auto px-6 text-center text-slate-500 text-sm">
          <p>时势量化实验室 · 三月实战复盘</p>
          <p className="mt-1">量化策略 × 六爻剧本 结合研究</p>
        </div>
      </footer>
    </main>
  );
}
