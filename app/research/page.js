'use client';

import { useState, useEffect } from 'react';
import { translations } from '@/lib/i18n';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

// 固定密码的 SHA-256 摘要（明文是 "baxian2026"，可随时更换）
const ACCESS_HASH = '8d969eef6ecad3c29a3a629280e686cf0c3f5d5a86aff3ca12020c923adc6c92';

async function hashInput(input) {
  const encoder = new TextEncoder();
  const data = encoder.encode(input);
  const hashBuffer = await crypto.subtle.digest('SHA-256', data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
}

export default function ResearchPage() {
  const router = useRouter();
  const [lang, setLang] = useState('zh');
  const [activeMonth, setActiveMonth] = useState('march');
  const [showAccessModal, setShowAccessModal] = useState(false);
  const [accessInput, setAccessInput] = useState('');
  const [accessError, setAccessError] = useState(false);

  useEffect(() => {
    const savedLang = localStorage.getItem('lang');
    if (savedLang) {
      setLang(savedLang);
    }
  }, []);

  async function handleAccessSubmit(e) {
    e.preventDefault();
    const inputHash = await hashInput(accessInput);
    if (inputHash === ACCESS_HASH) {
      router.push('/review/march-2026');
    } else {
      setAccessError(true);
      setTimeout(() => setAccessError(false), 2000);
    }
  }

  const t = translations[lang];

  const months = [
    { id: 'march', label: '三月研报', labelEn: 'March Report', status: 'published' },
    { id: 'april', label: '四月研报', labelEn: 'April Report', status: 'published' },
  ];

  const aprilCoefficients = [
    { segment: '阶段1', period: '4/1-2日', name: '月初轻微涨幅', long: 0.5, short: 0.2, desc: '月初两天轻微涨幅波动，能量不强', note: '观望为主，轻仓参与' },
    { segment: '阶段2', period: '4/3-5日', name: '明显下跌开始', long: 0.2, short: 1.0, desc: '从3号开始明显下跌，空头主导', note: '极轻仓多，正常做空' },
    { segment: '阶段3', period: '4/6-8日', name: '月初低点+弱反弹', long: 0.5, short: 0.5, desc: '6号明显低点，7-8号短时间反弹但能量不强', note: '多空交替频繁，延续性不强，多空均轻仓，落袋为安' },
    { segment: '阶段4', period: '4/9-11日', name: '下插针+震荡', long: 0.5, short: 0.5, desc: '9号下插针，10-11号震荡或横盘', note: '多空交替频繁，延续性不强，多空均轻仓，落袋为安' },
    { segment: '阶段5', period: '4/12-13日', name: '剧烈波动+震荡', long: 0.5, short: 0.5, desc: '12号开始波动剧烈，上插针后回落更像回踩', note: '多空交替频繁，延续性不强，多空均轻仓，落袋为安' },
    { segment: '阶段6', period: '4/14日', name: '诱多上插', long: 0.2, short: 1.2, desc: '14号可能明显上插，诱多陷阱', note: '⚠️ 极轻仓多，重仓做空', warning: true },
    { segment: '阶段7', period: '4/15-18日', name: '持续下跌', long: 0.2, short: 1.0, desc: '14号上插后跌至17-18号', note: '单边下跌，极轻仓多，正常做空' },
    { segment: '阶段8', period: '4/19-20日', name: '最低点弱反弹', long: 0.3, short: 0.5, desc: '17-18号最低点后弱反弹', note: '力度弱，谨慎参与' },
    { segment: '阶段9', period: '4/21-22日', name: '突然上插针', long: 0.2, short: 0.8, desc: '21-22号可能突然上插针', note: '⚠️ 不易做多，小心假突破', warning: true },
    { segment: '阶段10', period: '4/23-24日', name: '震荡过渡', long: 0.3, short: 0.6, desc: '波动过渡，等待方向', note: '降低仓位，观望为主' },
    { segment: '阶段11', period: '4/25-26日', name: '再次上插针', long: 0.2, short: 0.8, desc: '25-26号再次出现上插针反弹', note: '诱多性质，空为主' },
    { segment: '阶段12', period: '4/27-30日', name: '回落到月低点', long: 0.3, short: 1.0, desc: '27号后回落，29-30号本月低点', note: '月末持续弱势，做空为主' },
  ];

  const aprilKeyPoints = {
    lowest: ['4月17-18日', '4月29-30日'],
    highest: ['4月2日', '4月11日', '4月14日'],
    pattern: '先涨后跌，涨幅不多，跌的较多',
  };


  const marchContent = {
    title: '三月剧本推演',
    subtitle: 'BTC 月度行情结构分析',
    updatedAt: '2025-03-01',
    summary: '这个月的结构剧本，比 2 月要"干脆"很多。2 月是磨人型结构，3 月是——情绪上半月集中释放，下半月慢性衰竭。',
    sections: [
      {
        title: '核心判断',
        content: '此次的卦感里有两个非常重要的能量特征：',
        highlights: [
          '"多次上插针"',
          '"回落是震荡式衰退，不是瀑布"',
        ],
        conclusion: '这意味着：3 月是情绪主导型结构，而不是趋势流畅型结构。',
      },
      {
        title: '结构段 1｜3月1–3日',
        subtitle: '【回踩确认区 · 能量聚拢】',
        content: '月初先震荡回踩，2–3号局部支撑不破位，但不强。这不是弱，是为上半月冲高蓄力。',
        features: [
          '下跌不流畅',
          '回踩幅度有限',
          '情绪偏谨慎',
        ],
        traderPsychology: '「是不是又要横？」「这个支撑稳不稳？」',
        note: '这是一段情绪低位 → 能量蓄势。',
      },
      {
        title: '结构段 2｜3月4–9日',
        subtitle: '【双峰冲顶区 · 情绪释放】',
        content: '这是整个 3 月最关键的结构。能量路径：4–6号第一波冲高，6–7号出现明显高点，回踩9号再次冲高。像典型的"双波释放结构"。',
        keyJudgment: '6号 or 9号可能是"能量最高点"。未必是价格最高，但一定是：',
        features: [
          '市场信心最满',
          'FOMO 最重',
          '情绪最统一',
        ],
        traderPsychology: '「这次是不是不一样？」「是不是牛又回来了？」「要不要加一点？」',
        warning: '这段是 3 月最危险的"乐观区"。',
      },
      {
        title: '结构段 3｜3月10–17日',
        subtitle: '【震荡衰退区 · 情绪退潮】',
        content: '10号开始回落，不暴跌，是震荡式衰退。这是分配期结构。',
        features: [
          '高点越来越低',
          '反弹越来越弱',
          '但不崩',
        ],
        traderPsychology: '「只是回调吧？」「再等等应该会拉回来。」',
        warning: '这段的危险不是亏钱，而是慢慢被磨掉判断力。',
      },
      {
        title: '结构段 4｜3月17–21日',
        subtitle: '【回光区 · 上插针】',
        content: '17–18号反弹，19/21可能突然上插针。像"情绪回光"结构：不是趋势反转，而是空头回补、多头再一次幻想。',
        traderPsychology: '「低点是不是确认了？」「刚才那根插针是不是信号？」',
        warning: '这是一个极具迷惑性的假希望段。',
      },
      {
        title: '结构段 5｜3月22–28日',
        subtitle: '【慢性衰竭区 · 情绪耗尽】',
        content: '继续震荡回落，25号前后可能再插一次针，但整体仍偏弱。这是情绪抽干区。',
        features: [
          '不是崩，是"没劲"',
        ],
        traderPsychology: '「没戏了吧？」「这个月是不是废了？」',
        note: '最低点能量大概率在：24或28左右。',
      },
      {
        title: '结构段 6｜3月29–31日',
        subtitle: '【弱反弹区 · 月末修复】',
        content: '有反弹，但力度有限。更像技术修复，而不是趋势反转。',
      },
    ],
    conclusion: {
      title: '整个月核心结构总结',
      quote: '上半月情绪集中释放，下半月慢性衰退，中途多次"假希望插针"。',
      comparison: '这个月和2月的本质差异：3月更危险。因为2月是悲观杀人，3月是乐观杀人。',
    },
  };

  return (
    <main className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-slate-900 text-white py-4 px-6">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <Link href="/" className="text-xl font-bold hover:text-blue-400 transition">
            时势量化工作室
          </Link>
          <div className="flex items-center gap-4">
            <span className="text-sm text-slate-400">会员专享</span>
            <Link 
              href="/" 
              className="text-sm px-4 py-2 bg-slate-800 rounded-lg hover:bg-slate-700 transition"
            >
              返回首页
            </Link>
          </div>
        </div>
      </header>

      {/* Month Navigation */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex gap-2 py-4">
            {months.map((month) => (
              <button
                key={month.id}
                onClick={() => month.status === 'published' && setActiveMonth(month.id)}
                disabled={month.status !== 'published'}
                className={`px-6 py-3 rounded-lg font-medium transition ${
                  activeMonth === month.id
                    ? month.id === 'april'
                      ? 'bg-red-600 text-white'
                      : 'bg-blue-600 text-white'
                    : month.status === 'published'
                    ? 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                    : 'bg-slate-50 text-slate-400 cursor-not-allowed'
                }`}
              >
                {lang === 'zh' ? month.label : month.labelEn}
                {month.status === 'upcoming' && (
                  <span className="ml-2 text-xs">(待更新)</span>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        {activeMonth === 'march' && (
          <article className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
            {/* Header */}
            <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white px-8 py-12">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-blue-400 font-medium">2025年3月</span>
                <span className="text-xs text-slate-400">更新于 {marchContent.updatedAt}</span>
              </div>
              <h1 className="text-3xl font-bold mb-4">{marchContent.title}</h1>
              <p className="text-xl text-slate-300">{marchContent.subtitle}</p>
            </div>

            <div className="p-8">
              {/* Summary */}
              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg mb-8">
                <p className="text-lg text-slate-800 leading-relaxed">{marchContent.summary}</p>
              </div>

              {/* Core Judgment */}
              <section className="mb-10">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">{marchContent.sections[0].title}</h2>
                <p className="text-slate-700 mb-4">{marchContent.sections[0].content}</p>
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  {marchContent.sections[0].highlights.map((highlight, idx) => (
                    <div key={idx} className="bg-amber-50 border border-amber-200 p-4 rounded-lg">
                      <span className="text-amber-800 font-semibold">{highlight}</span>
                    </div>
                  ))}
                </div>
                <p className="text-slate-700 font-medium">{marchContent.sections[0].conclusion}</p>
              </section>

              {/* Structure Sections */}
              {marchContent.sections.slice(1).map((section, idx) => (
                <section key={idx} className="mb-10 border-t border-slate-100 pt-8">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg shrink-0">
                      {idx + 1}
                    </div>
                    <div>
                      <h2 className="text-xl font-bold text-slate-900">{section.title}</h2>
                      <p className="text-blue-600 font-medium">{section.subtitle}</p>
                    </div>
                  </div>
                  
                  <div className="ml-16">
                    <p className="text-slate-700 mb-4 leading-relaxed">{section.content}</p>
                    
                    {section.keyJudgment && (
                      <p className="text-slate-700 mb-3 font-medium">{section.keyJudgment}</p>
                    )}
                    
                    {section.features && (
                      <ul className="space-y-2 mb-4">
                        {section.features.map((feature, fidx) => (
                          <li key={fidx} className="flex items-center gap-2 text-slate-700">
                            <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    )}
                    
                    {section.traderPsychology && (
                      <div className="bg-slate-50 border-l-4 border-slate-400 p-4 rounded-r-lg mb-4">
                        <p className="text-sm text-slate-500 mb-1">交易者心理</p>
                        <p className="text-slate-700 italic">{section.traderPsychology}</p>
                      </div>
                    )}
                    
                    {section.note && (
                      <p className="text-slate-600 text-sm">{section.note}</p>
                    )}
                    
                    {section.warning && (
                      <div className="bg-red-50 border border-red-200 p-4 rounded-lg mt-4">
                        <p className="text-red-700 font-medium">⚠️ {section.warning}</p>
                      </div>
                    )}
                  </div>
                </section>
              ))}

              {/* Conclusion */}
              <section className="mt-12 bg-slate-900 text-white p-8 rounded-xl">
                <h2 className="text-2xl font-bold mb-6">{marchContent.conclusion.title}</h2>
                <blockquote className="text-xl text-blue-300 italic border-l-4 border-blue-500 pl-6 mb-6">
                  {marchContent.conclusion.quote}
                </blockquote>
                <p className="text-slate-300">{marchContent.conclusion.comparison}</p>
              </section>
            </div>
          </article>
        )}

        {activeMonth === 'april' && (
          <article className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
            {/* Header */}
            <div className="bg-gradient-to-r from-red-900 to-slate-800 text-white px-8 py-12">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-red-400 font-medium">2026年4月</span>
                <span className="text-xs text-slate-400">更新于 2026-04-02</span>
              </div>
              <h1 className="text-3xl font-bold mb-4">四月剧本推演</h1>
              <p className="text-xl text-slate-300">BTC 月度行情结构分析</p>
            </div>

            <div className="p-8">
              {/* 核心判断 */}
              <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-xl mb-6">
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-3 py-1 bg-red-600 text-white text-sm font-bold rounded">年卦</span>
                  <h3 className="font-bold text-red-900">四月核心判断</h3>
                </div>
                <p className="text-red-800 text-lg">"4月是一个很可能大跌的月份"</p>
                <p className="text-red-700 mt-2">整体形态：先涨后跌，涨幅不多，跌的较多</p>
              </div>

              {/* 月卦推演 */}
              <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-xl mb-6">
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-3 py-1 bg-amber-600 text-white text-sm font-bold rounded">月卦</span>
                  <h3 className="font-bold text-amber-900">月卦推演</h3>
                </div>
                <p className="text-amber-800">月初两天轻微涨幅波动，从3号开始就会有明显的下跌出现。</p>
              </div>

              {/* 关键节点 */}
              <div className="grid md:grid-cols-3 gap-4 mb-8">
                <div className="bg-white rounded-xl p-5 border-l-4 border-red-600 shadow-sm">
                  <p className="text-sm text-slate-500 mb-2">本月最低点</p>
                  <div className="space-y-1">
                    {aprilKeyPoints.lowest.map((date, idx) => (
                      <p key={idx} className="text-red-700 font-bold">{date}</p>
                    ))}
                  </div>
                </div>
                <div className="bg-white rounded-xl p-5 border-l-4 border-green-600 shadow-sm">
                  <p className="text-sm text-slate-500 mb-2">本月相对高点</p>
                  <div className="space-y-1">
                    {aprilKeyPoints.highest.map((date, idx) => (
                      <p key={idx} className="text-green-700 font-bold">{date}</p>
                    ))}
                  </div>
                </div>
                <div className="bg-white rounded-xl p-5 border-l-4 border-blue-600 shadow-sm">
                  <p className="text-sm text-slate-500 mb-2">整体形态</p>
                  <p className="text-blue-700 font-bold">{aprilKeyPoints.pattern}</p>
                </div>
              </div>

              {/* 多空系数表 */}
              <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm mb-8">
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
                      {aprilCoefficients.map((item, idx) => (
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
          </article>
        )}

      </div>

      {/* Footer */}
      <footer className="bg-slate-100 border-t border-slate-200 py-8">
        <div className="max-w-6xl mx-auto px-6 text-center text-slate-500 text-sm">
          <p>© 2025 时<span
            onClick={() => setShowAccessModal(true)}
            className="text-slate-400 select-none cursor-pointer text-xs align-baseline hover:text-blue-400 transition-colors duration-300"
            style={{ fontSize: '0.7rem', verticalAlign: 'baseline' }}
            title=""
          >势量化</span>工作室. 会员专享内容，请勿外传。</p>
        </div>
      </footer>

      {/* 复盘入口密码弹窗 */}
      {showAccessModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50" onClick={() => setShowAccessModal(false)}>
          <div className="bg-white rounded-xl shadow-2xl p-8 w-80 text-center" onClick={e => e.stopPropagation()}>
            <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-5 h-5 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-slate-800 mb-2">内部复盘入口</h3>
            <p className="text-sm text-slate-500 mb-6">输入访问密码</p>
            <form onSubmit={handleAccessSubmit}>
              <input
                type="password"
                value={accessInput}
                onChange={e => setAccessInput(e.target.value)}
                placeholder="密码"
                className={`w-full px-4 py-2 border rounded-lg mb-3 text-center focus:outline-none focus:ring-2 focus:ring-blue-400 ${accessError ? 'border-red-400 bg-red-50' : 'border-slate-300'}`}
                autoFocus
              />
              {accessError && <p className="text-red-500 text-xs mb-3">密码错误</p>}
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => setShowAccessModal(false)}
                  className="flex-1 px-4 py-2 border border-slate-300 rounded-lg text-slate-600 hover:bg-slate-50 transition"
                >
                  取消
                </button>
                <button
                  type="submit"
                  className="flex-1 px-4 py-2 bg-slate-800 text-white rounded-lg hover:bg-slate-700 transition"
                >
                  进入
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </main>
  );
}
