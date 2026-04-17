'use client';

import { useLang } from '@/lib/useLang';
import Link from 'next/link';

export default function AboutPage() {
  const lang = useLang('dev-lang') || 'zh';

  const content = {
    zh: {
      eyebrow: '关于',
      title: '关于 Timingquant Lab',
      mission: '核心问题',
      missionDesc: 'Timingquant Lab 的工作始于一个核心问题：\n市场变化，是否不仅可以被"预测"，还可以被更系统地识别、分层、表达与验证？',
      approach: '研究路径',
      approachDesc: '围绕这个问题，Timingquant Lab 尝试融合两类通常很少被认真放在一起讨论的视角：',
      perspectives: [
        '一类是东方关于时间、变化与关系的思维方式',
        '另一类是现代量化研究对于结构、样本、跟踪与验证的要求',
      ],
      focus: '工作重点',
      focusDesc: '我们的重点不是制造一次性的判断结果，而是建立一套长期可迭代的框架，用于：',
      focuses: [
        '识别市场状态',
        '观察周期切换',
        '描述风险阶段',
        '辅助仓位控制与策略过滤',
        '提供结构化的研究表达',
      ],
      note: 'Timingquant Lab 并不试图用抽象话术替代研究，也不把非传统思想直接包装成结论。\n\n我们的目标，是把独特的时间逻辑转化为一种更接近研究语言、机构语言和决策语言的表达方式。',
      cta: '探索方法论',
      ctaLink: '/dev/methodology',
    },
    en: {
      eyebrow: 'About',
      title: 'About Timingquant Lab',
      mission: 'Core Question',
      missionDesc: 'Timingquant Lab\'s work begins with a simple question:\nCan market change be approached not only as prediction, but as something that can be identified, layered, represented, and validated more systematically?',
      approach: 'Research Approach',
      approachDesc: 'Under that question, Timingquant Lab attempts to combine two perspectives that are rarely treated seriously together:',
      perspectives: [
        'One drawn from Eastern ways of thinking about time, change, and relational structure',
        'The other from modern quantitative research, with its emphasis on structure, sampling, tracking, and validation',
      ],
      focus: 'Focus Areas',
      focusDesc: 'Our focus is not to produce one-off impressive calls, but to build an iterative framework for:',
      focuses: [
        'Identifying market states',
        'Observing regime transitions',
        'Describing risk phases',
        'Supporting position control and strategy filtering',
        'Offering structured research outputs',
      ],
      note: 'Timingquant Lab does not try to replace research with abstraction, nor does it package nontraditional ideas as conclusions by default.\n\nThe objective is to translate a distinct temporal logic into a language that is closer to research, institutions, and decision-making.',
      cta: 'Explore Methodology',
      ctaLink: '/dev/methodology',
    },
  };

  const t = content[lang];

  return (
    <div style={{ paddingTop: '4rem' }}>
      {/* Page Header */}
      <section className="section" style={{ paddingBottom: '2rem', borderBottom: '1px solid var(--divider)' }}>
        <div className="container" style={{ maxWidth: '55rem' }}>
          <span className="section-label">{t.eyebrow}</span>
          <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', letterSpacing: '-0.03em', marginTop: '0.5rem' }}>
            {t.title}
          </h1>
        </div>
      </section>

      {/* Mission */}
      <section className="section section-alt">
        <div className="container" style={{ maxWidth: '55rem' }}>
          <span className="section-label">{t.mission}</span>
          <div className="divider" />
          <p style={{ whiteSpace: 'pre-line', lineHeight: 1.9, fontSize: '1.05rem' }}>{t.missionDesc}</p>
        </div>
      </section>

      {/* Approach */}
      <section className="section">
        <div className="container" style={{ maxWidth: '55rem' }}>
          <span className="section-label">{t.approach}</span>
          <div className="divider" />
          <p style={{ marginBottom: '1.5rem', lineHeight: 1.9 }}>{t.approachDesc}</p>
          <ul className="list-disc">
            {t.perspectives.map((p, i) => (
              <li key={i}>{p}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* Focus Areas */}
      <section className="section section-alt">
        <div className="container" style={{ maxWidth: '55rem' }}>
          <span className="section-label">{t.focus}</span>
          <div className="divider" />
          <p style={{ marginBottom: '1.5rem', lineHeight: 1.9 }}>{t.focusDesc}</p>
          <ul className="list-disc">
            {t.focuses.map((f, i) => (
              <li key={i}>{f}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* Note */}
      <section className="section">
        <div className="container" style={{ maxWidth: '55rem' }}>
          <div className="method-note" style={{ whiteSpace: 'pre-line', lineHeight: 1.9, margin: 0 }}>
            {t.note}
          </div>
          <div style={{ marginTop: '3rem', textAlign: 'center' }}>
            <Link href={t.ctaLink} className="btn btn-primary">
              {t.cta}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
