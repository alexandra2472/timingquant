'use client';

import { useState, useEffect } from 'react';
import { translations } from '@/lib/i18n';
import Link from 'next/link';

export default function ResearchPage() {
  const [lang, setLang] = useState('zh');
  const [activeMonth, setActiveMonth] = useState('march');

  useEffect(() => {
    const savedLang = localStorage.getItem('lang');
    if (savedLang) {
      setLang(savedLang);
    }
  }, []);

  const t = translations[lang];

  const months = [
    { id: 'march', label: '三月研报', labelEn: 'March Report', status: 'published' },
    { id: 'april', label: '四月研报', labelEn: 'April Report', status: 'published' },
  ];

  const aprilContent = {
    title: '四月剧本推演',
    subtitle: 'BTC 月度行情结构分析',
    summary: '从年卦上看，4月是一个很可能大跌的月份。整体形态接近先涨后跌，但应该是属于那种涨幅不多，但是跌的比较多的一个月。',
    yearView: {
      title: '年卦视角',
      content: '从年卦上看，4月是一个很可能大跌的月份。',
      highlight: true,
    },
    monthView: {
      title: '月卦推演',
      intro: '月卦上看月初两天轻微涨幅波动下，从3号开始，就会有明显的下跌出现。',
    },
    timeline: [
      {
        date: '4月1-2日',
        title: '月初轻微涨幅波动',
        content: '月初两天轻微涨幅波动。',
        type: 'neutral',
      },
      {
        date: '4月3日起',
        title: '明显下跌开始',
        content: '从3号开始，就会有明显的下跌出现。',
        type: 'bearish',
      },
      {
        date: '4月6日左右',
        title: '月初第一个明显低点',
        content: '在6号左右，出现月初的第一个明显低点。',
        type: 'low',
      },
      {
        date: '4月7-8日',
        title: '短时间反弹',
        content: '7号，8号之间会有短时间反弹，但整体能量不会特别强。',
        type: 'bounce',
      },
      {
        date: '4月9日',
        title: '下插针',
        content: '9号可能会有个下插针，整体会接近就是波动性的反弹，或者震荡，大概能够持续到10号，11号之间。',
        type: 'volatile',
      },
      {
        date: '4月12日起',
        title: '波动剧烈',
        content: '12号开始波动会比较剧烈，可能有一个上插针继续回落，但是这一波有可能更像回踩。',
        type: 'volatile',
      },
      {
        date: '4月14日左右',
        title: '诱多上插',
        content: '14号左右甚至有可能再出现一个明显上插，让很多人认为开始反弹了。这个可能就是诱多。',
        type: 'trap',
        warning: '诱多风险',
      },
      {
        date: '4月14-18日',
        title: '持续下跌',
        content: '从14号上插针以后，几乎会跌到17号到18号之间。',
        type: 'bearish',
      },
      {
        date: '4月17-18日',
        title: '本月可能最低点之一',
        content: '这个时候开始有震荡中的反弹轻微，但是力度也是比较弱的，很可能就是一个震荡或者横盘。',
        type: 'low',
        note: '本月最低点可能位置',
      },
      {
        date: '4月21-22日',
        title: '突然上插针',
        content: '要小心这个时间呢，其实不太容易做多，但是呢，又会有一些特殊的上插针出现，如21号，22号可能会有明显突然的上插针出现。',
        type: 'trap',
        warning: '不易做多',
      },
      {
        date: '4月24-26日',
        title: '再次上插针反弹',
        content: '然后波动到24号，25号之间，会在25号，26号又出现一个上插针的反弹。',
        type: 'bounce',
      },
      {
        date: '4月27-30日',
        title: '回落到本月低点',
        content: '27号以后还是要回落的，估计到29号，30号会出现一个本月的明显低点。',
        type: 'low',
        note: '本月最低点可能位置',
      },
    ],
    keyPoints: {
      lowest: ['4月17-18日', '4月29-30日'],
      highest: ['4月2日', '4月11日', '4月14日'],
      pattern: '先涨后跌，涨幅不多，跌的较多',
    },
    recommendation: {
      direction: '空单作为4月的主要方向',
      note: '在有正向期望系统的前提下，可适当放大空单的仓位。',
    },
  };

  const marchContent = {
    title: '三月剧本推演',
    subtitle: 'BTC 月度行情结构分析',
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
                    ? 'bg-blue-600 text-white'
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
              <div className="text-sm text-blue-400 font-medium mb-2">2025年3月</div>
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
              <div className="text-sm text-red-400 font-medium mb-2">2025年4月</div>
              <h1 className="text-3xl font-bold mb-4">{aprilContent.title}</h1>
              <p className="text-xl text-slate-300">{aprilContent.subtitle}</p>
            </div>

            <div className="p-8">
              {/* Year View Warning */}
              <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg mb-8">
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-3 py-1 bg-red-600 text-white text-sm font-bold rounded">年卦</span>
                  <span className="text-red-800 font-bold">{aprilContent.yearView.title}</span>
                </div>
                <p className="text-lg text-slate-800 leading-relaxed">{aprilContent.yearView.content}</p>
              </div>

              {/* Summary */}
              <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-lg mb-8">
                <p className="text-lg text-slate-800 leading-relaxed">{aprilContent.summary}</p>
              </div>

              {/* Month View Intro */}
              <section className="mb-10">
                <div className="flex items-center gap-2 mb-4">
                  <span className="px-3 py-1 bg-blue-600 text-white text-sm font-bold rounded">月卦</span>
                  <h2 className="text-2xl font-bold text-slate-900">{aprilContent.monthView.title}</h2>
                </div>
                <p className="text-slate-700 leading-relaxed">{aprilContent.monthView.intro}</p>
              </section>

              {/* Timeline */}
              <section className="mb-10">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">每日推演</h2>
                <div className="relative">
                  {/* Timeline line */}
                  <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-slate-200"></div>
                  
                  {aprilContent.timeline.map((item, idx) => (
                    <div key={idx} className="relative flex gap-6 mb-6">
                      {/* Dot */}
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center shrink-0 z-10 ${
                        item.type === 'bearish' ? 'bg-red-600 text-white' :
                        item.type === 'low' ? 'bg-red-800 text-white' :
                        item.type === 'bounce' ? 'bg-green-600 text-white' :
                        item.type === 'trap' ? 'bg-amber-500 text-white' :
                        item.type === 'volatile' ? 'bg-purple-600 text-white' :
                        'bg-slate-400 text-white'
                      }`}>
                        <span className="text-xs font-bold">{idx + 1}</span>
                      </div>
                      
                      {/* Content */}
                      <div className="flex-1 bg-slate-50 rounded-lg p-5">
                        <div className="flex items-center gap-3 mb-2">
                          <span className="text-sm font-bold text-slate-500">{item.date}</span>
                          {item.warning && (
                            <span className="px-2 py-0.5 bg-red-100 text-red-700 text-xs font-bold rounded">⚠️ {item.warning}</span>
                          )}
                          {item.note && (
                            <span className="px-2 py-0.5 bg-blue-100 text-blue-700 text-xs font-bold rounded">{item.note}</span>
                          )}
                        </div>
                        <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
                        <p className="text-slate-700 leading-relaxed">{item.content}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Key Points Summary */}
              <section className="mb-10 bg-slate-100 rounded-xl p-8">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">关键节点总结</h2>
                
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-white rounded-lg p-5 border-l-4 border-red-600">
                    <p className="text-sm text-slate-500 mb-2">本月最低点</p>
                    <div className="space-y-1">
                      {aprilContent.keyPoints.lowest.map((date, idx) => (
                        <p key={idx} className="text-red-700 font-bold">{date}</p>
                      ))}
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-lg p-5 border-l-4 border-green-600">
                    <p className="text-sm text-slate-500 mb-2">本月最高点</p>
                    <div className="space-y-1">
                      {aprilContent.keyPoints.highest.map((date, idx) => (
                        <p key={idx} className="text-green-700 font-bold">{date}</p>
                      ))}
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-lg p-5 border-l-4 border-blue-600">
                    <p className="text-sm text-slate-500 mb-2">整体形态</p>
                    <p className="text-blue-700 font-bold">{aprilContent.keyPoints.pattern}</p>
                  </div>
                </div>
              </section>

              {/* Recommendation */}
              <section className="bg-red-900 text-white p-8 rounded-xl">
                <h2 className="text-2xl font-bold mb-4">策略建议</h2>
                <div className="bg-red-800 rounded-lg p-6 mb-4">
                  <p className="text-xl font-bold text-red-200 mb-2">{aprilContent.recommendation.direction}</p>
                </div>
                <p className="text-red-200">{aprilContent.recommendation.note}</p>
              </section>
            </div>
          </article>
        )}
      </div>

      {/* Footer */}
      <footer className="bg-slate-100 border-t border-slate-200 py-8">
        <div className="max-w-6xl mx-auto px-6 text-center text-slate-500 text-sm">
          <p>© 2025 时势量化工作室. 会员专享内容，请勿外传。</p>
        </div>
      </footer>
    </main>
  );
}
