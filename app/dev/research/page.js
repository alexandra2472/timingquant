'use client';

import { useLang } from '@/lib/useLang';
import Link from 'next/link';

export default function ResearchPage() {
  const lang = useLang('dev-lang') || 'zh';

  const categories = {
    zh: [
      {
        title: 'Market Rhythm',
        subtitle: '市场节奏',
        desc: '研究市场在不同时间窗口中的节奏变化，包括趋势推进、压缩、扩散与节奏断裂。',
        tags: ['节奏识别', '趋势', '震荡', '压缩'],
      },
      {
        title: 'Structural Regimes',
        subtitle: '结构状态',
        desc: '研究市场所处的结构状态，以及结构如何延续、衰减或切换。',
        tags: ['Regime', '结构映射', '状态切换'],
      },
      {
        title: 'Risk Phases',
        subtitle: '风险阶段',
        desc: '研究不同阶段下的风险条件变化，以及何时应扩张、收缩或防守。',
        tags: ['风险暴露', '仓位调节', '防守'],
      },
      {
        title: 'Tactical Windows',
        subtitle: '战术窗口',
        desc: '研究更适合试探、进攻、减仓或回避的时序窗口。',
        tags: ['时序', '窗口', '仓位'],
      },
      {
        title: 'Method Notes',
        subtitle: '方法笔记',
        desc: '记录框架定义、状态标签、复盘逻辑与验证思路。',
        tags: ['框架', '标签', '复盘'],
      },
      {
        title: 'Sample Cases',
        subtitle: '研究样本',
        desc: '展示有限度的研究样本，用于说明框架如何观察、标记与跟踪市场状态。',
        tags: ['样本', '案例', '跟踪'],
        cta: true,
      },
    ],
    en: [
      {
        title: 'Market Rhythm',
        subtitle: 'Market Rhythm',
        desc: 'Studies the changing rhythm of markets across time windows, including trend continuation, compression, expansion, and rhythm breaks.',
        tags: ['Rhythm', 'Trend', 'Consolidation', 'Compression'],
      },
      {
        title: 'Structural Regimes',
        subtitle: 'Structural Regimes',
        desc: 'Examines the structural state of markets and how those structures persist, weaken, or transition.',
        tags: ['Regime', 'Mapping', 'Transition'],
      },
      {
        title: 'Risk Phases',
        subtitle: 'Risk Phases',
        desc: 'Focuses on changing risk conditions and when exposure may need to be expanded, reduced, or kept defensive.',
        tags: ['Risk', 'Exposure', 'Defense'],
      },
      {
        title: 'Tactical Windows',
        subtitle: 'Tactical Windows',
        desc: 'Explores timing windows that may favor probing, offense, de-risking, or avoidance.',
        tags: ['Timing', 'Windows', 'Position'],
      },
      {
        title: 'Method Notes',
        subtitle: 'Method Notes',
        desc: 'Documents framework definitions, state labels, review logic, and validation ideas.',
        tags: ['Framework', 'Labels', 'Review'],
      },
      {
        title: 'Sample Cases',
        subtitle: 'Sample Cases',
        desc: 'Presents limited research samples to illustrate how the framework observes, labels, and tracks market states.',
        tags: ['Samples', 'Cases', 'Tracking'],
        cta: true,
      },
    ],
  };

  const intro = {
    zh: {
      eyebrow: '研究',
      title: 'Research',
      intro: 'Timingquant Lab 的研究围绕市场节奏、状态切换与风险暴露展开。我们更关注结构化研究与持续跟踪，而不是零散观点输出。',
      note: '研究内容持续更新中。部分内容仅限特定研究合作方访问。',
    },
    en: {
      eyebrow: 'Research',
      title: 'Research',
      intro: 'Timingquant Lab\'s research centers on market rhythm, regime transitions, and risk exposure. We prioritize structured analysis and continuous tracking over fragmented commentary.',
      note: 'Research content is continuously updated. Some content is available to specific research partners only.',
    },
  };

  const t = intro[lang];
  const cats = categories[lang];

  return (
    <div style={{ paddingTop: '4rem' }}>
      {/* Page Header */}
      <section className="section" style={{ paddingBottom: '2rem', borderBottom: '1px solid var(--divider)' }}>
        <div className="container" style={{ maxWidth: '55rem' }}>
          <span className="section-label">{t.eyebrow}</span>
          <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', letterSpacing: '-0.03em', marginTop: '0.5rem' }}>
            {t.title}
          </h1>
          <p style={{ marginTop: '0.75rem', maxWidth: '50ch', color: 'var(--text-secondary)', lineHeight: 1.8 }}>
            {t.intro}
          </p>
        </div>
      </section>

      {/* Research Categories */}
      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem', maxWidth: '75rem', margin: '0 auto' }}>
            {cats.map((cat, i) => (
              <div key={i} className="research-card">
                <div style={{ marginBottom: '0.75rem' }}>
                  <span style={{
                    fontSize: '0.7rem',
                    fontWeight: 700,
                    color: 'var(--accent-primary)',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                  }}>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '0.25rem', color: 'var(--text-primary)' }}>
                  {cat.title}
                </h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '1rem' }}>
                  {cat.subtitle}
                </p>
                <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '1rem' }}>
                  {cat.desc}
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                  {cat.tags.map((tag, j) => (
                    <span key={j} style={{
                      fontSize: '0.7rem',
                      padding: '0.2rem 0.6rem',
                      background: 'var(--bg-secondary)',
                      borderRadius: '4px',
                      color: 'var(--text-muted)',
                      fontWeight: 500,
                    }}>
                      {tag}
                    </span>
                  ))}
                </div>
                {cat.cta && (
                  <div style={{ marginTop: '1.25rem' }}>
                    <Link href="/samples" className="btn btn-outline" style={{ fontSize: '0.8rem', padding: '0.5rem 1rem' }}>
                      {lang === 'zh' ? '查看样本' : 'View Samples'}
                    </Link>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Note */}
      <section className="section section-alt">
        <div className="container" style={{ maxWidth: '55rem', textAlign: 'center' }}>
          <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', lineHeight: 1.8 }}>
            {t.note}
          </p>
        </div>
      </section>
    </div>
  );
}
