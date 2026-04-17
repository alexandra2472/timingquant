'use client';

import { useLang } from '@/lib/useLang';

export default function MethodologyPage() {
  const lang = useLang('dev-lang') || 'zh';

  const sections = [
    {
      zh: {
        eyebrow: '方法论',
        title: 'Methodology',
        subtitle: '研究框架的核心结构',
        items: [
          {
            label: '研究对象',
            desc: 'Timingquant Lab 研究的不是单一价格点，而是市场在不同时间窗口中的状态变化。核心对象包括：',
            list: [
              '市场节奏',
              '结构状态',
              '风险阶段',
              '周期切换',
              '多空力量的阶段性失衡',
              '不同环境下的参与效率',
            ],
          },
          {
            label: '研究单位',
            desc: '为了让市场状态具备可跟踪性，我们将观察单位尽量结构化。研究单位通常包括：',
            list: [
              '时间窗口',
              '状态标签',
              '风险等级',
              '参与角色',
              '节奏切换节点',
              '结构延续或失效条件',
            ],
          },
          {
            label: '输出层',
            desc: 'Timingquant Lab 的输出不以"神秘判断"为目标，而以结构化表达为目标。常见输出包括：',
            list: [
              'Market State / 市场状态',
              'Regime Mapping / 结构映射',
              'Risk Phase / 风险阶段',
              'Exposure Posture / 风险暴露姿态',
              'Defensive / Probing / Offensive Mode / 防守/试探/进攻模式',
              'Transition Watch / 切换观察',
            ],
          },
          {
            label: '研究流程',
            desc: '我们的研究流程通常包含以下步骤：',
            list: [
              '观察市场在不同时间窗口中的结构特征',
              '对状态、节奏与风险进行标签化表达',
              '跟踪后续演化过程',
              '对阶段判断进行复盘与修正',
              '在重复观察中优化框架的一致性与实用性',
            ],
          },
          {
            label: '验证方向',
            desc: 'Timingquant Lab 并不以单次结果作为主要验证依据。更重要的，是框架是否具备以下特征：',
            list: [
              '表达一致性 / Consistency of Representation',
              '追踪连续性 / Continuity of Tracking',
              '复盘可比性 / Comparability in Review',
              '对风险暴露管理的辅助价值',
              '对策略过滤或仓位控制的增益价值',
            ],
          },
        ],
      },
      en: {
        eyebrow: 'Methodology',
        title: 'Methodology',
        subtitle: 'Core Structure of the Research Framework',
        items: [
          {
            label: 'Research Object',
            desc: 'Timingquant Lab does not focus on isolated price points, but on state changes across time windows. Its core objects of study include:',
            list: [
              'Market rhythm',
              'Structural regimes',
              'Risk phases',
              'Regime transitions',
              'Temporary imbalance between bullish and bearish forces',
              'Participation efficiency under different environments',
            ],
          },
          {
            label: 'Research Units',
            desc: 'To make market states trackable, we structure the observation units as clearly as possible. These often include:',
            list: [
              'Time windows',
              'State labels',
              'Risk levels',
              'Participation posture',
              'Transition nodes',
              'Continuation or invalidation conditions',
            ],
          },
          {
            label: 'Output Layer',
            desc: 'Timingquant Lab is not designed to output mystical judgments, but structured representations. Common outputs include:',
            list: [
              'Market State',
              'Regime Mapping',
              'Risk Phase',
              'Exposure Posture',
              'Defensive / Probing / Offensive Mode',
              'Transition Watch',
            ],
          },
          {
            label: 'Research Process',
            desc: 'Our research process typically includes:',
            list: [
              'Observing market structure across multiple time windows',
              'Labeling states, rhythm, and risk conditions',
              'Tracking subsequent evolution',
              'Reviewing and revising stage assessments',
              'Improving consistency and practical value through repeated observation',
            ],
          },
          {
            label: 'Validation Direction',
            desc: 'Timingquant Lab does not rely on one-off outcomes as its primary form of validation. More important questions are whether the framework demonstrates:',
            list: [
              'Consistency of Representation',
              'Continuity of Tracking',
              'Comparability in Review',
              'Value in managing risk exposure',
              'Value as a filter for strategy execution or position control',
            ],
          },
        ],
      },
    },
  ];

  const t = sections[0][lang];

  return (
    <div style={{ paddingTop: '4rem' }}>
      {/* Page Header */}
      <section className="section" style={{ paddingBottom: '2rem', borderBottom: '1px solid var(--divider)' }}>
        <div className="container" style={{ maxWidth: '55rem' }}>
          <span className="section-label">{t.eyebrow}</span>
          <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', letterSpacing: '-0.03em', marginTop: '0.5rem' }}>
            {t.title}
          </h1>
          <p style={{ marginTop: '0.75rem', color: 'var(--text-muted)', fontSize: '1rem' }}>
            {t.subtitle}
          </p>
        </div>
      </section>

      {/* Five Sections */}
      {t.items.map((item, index) => (
        <section
          key={index}
          className={`section ${index % 2 === 0 ? 'section-alt' : ''}`}
        >
          <div className="container" style={{ maxWidth: '55rem' }}>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '1rem', marginBottom: '1rem' }}>
              <span style={{
                fontSize: '0.75rem',
                fontWeight: 700,
                color: 'var(--accent-primary)',
                letterSpacing: '0.1em',
              }}>
                {String(index + 1).padStart(2, '0')}
              </span>
              <h2 style={{ fontSize: '1.5rem', fontWeight: 600 }}>{item.label}</h2>
            </div>
            <div style={{ marginLeft: '2.5rem' }}>
              <p style={{ lineHeight: 1.9, marginBottom: '1.25rem' }}>{item.desc}</p>
              <ul className="list-disc">
                {item.list.map((l, i) => (
                  <li key={i} style={{ fontSize: '0.95rem' }}>{l}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      ))}

      {/* Bottom note */}
      <section className="section">
        <div className="container" style={{ maxWidth: '55rem', textAlign: 'center' }}>
          <div className="method-note" style={{
            whiteSpace: 'pre-line',
            lineHeight: 1.9,
            textAlign: 'left',
            margin: 0,
          }}>
            {lang === 'zh'
              ? '框架的价值不在于单次判断的准确与否，而在于是否建立了一套可持续观察、记录、比较与优化的研究语言。'
              : 'The value of the framework lies not in the accuracy of individual calls, but in whether it establishes a sustainable research language for observation, recording, comparison, and refinement.'}
          </div>
        </div>
      </section>
    </div>
  );
}
