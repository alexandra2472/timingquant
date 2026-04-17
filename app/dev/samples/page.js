'use client';

import { useLang } from '@/lib/useLang';
import Link from 'next/link';

export default function SamplesPage() {
  const lang = useLang('dev-lang') || 'zh';

  const content = {
    zh: {
      eyebrow: '样本',
      title: '研究样本',
      subtitle: 'Sample Cases',
      intro: '以下为 Timingquant Lab 的有限度研究样本展示，用于说明框架如何观察、标记与跟踪市场状态。',
      note: '完整研究内容仅限研究合作方访问。如需进一步了解，请联系我们。',
      cta: '联系我们',
      months: [
        {
          month: '2026年3月',
          theme: { zh: '诱多后杀多，最终偏空', en: 'Bull Trap Followed by Sell-off, Ultimately Bearish' },
          description: {
            zh: '三月为情绪主导型结构，上半月情绪集中释放，下半月慢性衰退。剧本成功识别关键节点与风险窗口，量化策略结合六爻仓位系数后收益提升约2个百分点。',
            en: 'March exhibited an emotion-driven structure, with concentrated sentiment release in the first half and gradual decay in the second half. The framework successfully identified key turning points and risk windows.',
          },
          tags: ['情绪主导', '诱多陷阱', '仓位调节'],
          link: null,
          linkLabel: '查看三月复盘',
        },
        {
          month: '2026年4月',
          theme: { zh: '大概率下跌，月初冲高后持续走弱', en: 'Likely Decline, Initial Rise Followed by Persistent Weakness' },
          description: {
            zh: '四月为年卦主导型结构，月初微涨后大概率下跌，整体偏空。六爻剧本给出12个阶段的多空仓位系数，量化信号在此框架下执行风控调节。',
            en: 'April follows a year-hexagram dominant structure, likely to see an initial rise followed by sustained decline. The hexagram script provides long/short coefficients across 12 phases.',
          },
          tags: ['年卦主导', '多空系数', '风控'],
          link: null,
          linkLabel: '查看四月剧本',
        },
      ],
    },
    en: {
      eyebrow: 'Samples',
      title: 'Research Samples',
      subtitle: 'Sample Cases',
      intro: 'The following are limited research samples from Timingquant Lab, illustrating how the framework observes, labels, and tracks market states.',
      note: 'Full research content is available to research partners only. For further information, please contact us.',
      cta: 'Contact Us',
      months: [
        {
          month: 'March 2026',
          theme: { zh: '诱多后杀多，最终偏空', en: 'Bull Trap Followed by Sell-off, Ultimately Bearish' },
          description: {
            zh: '三月为情绪主导型结构，上半月情绪集中释放，下半月慢性衰退。',
            en: 'March exhibited an emotion-driven structure, with concentrated sentiment release in the first half and gradual decay in the second half. The framework successfully identified key turning points and risk windows.',
          },
          tags: ['Sentiment', 'Bull Trap', 'Position'],
          link: null,
          linkLabel: 'View March Review',
        },
        {
          month: 'April 2026',
          theme: { zh: '大概率下跌，月初冲高后持续走弱', en: 'Likely Decline, Initial Rise Followed by Persistent Weakness' },
          description: {
            zh: '四月为年卦主导型结构，月初微涨后大概率下跌。',
            en: 'April follows a year-hexagram dominant structure, likely to see an initial rise followed by sustained decline. The hexagram script provides long/short coefficients across 12 phases.',
          },
          tags: ['Year Hexagram', 'Long/Short', 'Risk'],
          link: null,
          linkLabel: 'View April Script',
        },
      ],
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
          <p style={{ marginTop: '0.75rem', maxWidth: '50ch', color: 'var(--text-secondary)', lineHeight: 1.8 }}>
            {t.intro}
          </p>
        </div>
      </section>

      {/* Sample Cases */}
      <section className="section">
        <div className="container" style={{ maxWidth: '55rem' }}>
          {t.months.map((m, i) => (
            <div key={i} className="card" style={{ marginBottom: '1.5rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem', flexWrap: 'wrap', gap: '0.5rem' }}>
                <div>
                  <span style={{
                    fontSize: '0.7rem',
                    fontWeight: 700,
                    color: 'var(--accent-primary)',
                    letterSpacing: '0.1em',
                  }}>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 style={{ fontSize: '1.1rem', fontWeight: 600, marginTop: '0.25rem' }}>{m.month}</h3>
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                  {m.tags.map((tag, j) => (
                    <span key={j} style={{
                      fontSize: '0.7rem',
                      padding: '0.2rem 0.6rem',
                      background: 'var(--accent-light)',
                      borderRadius: '4px',
                      color: 'var(--accent-primary)',
                      fontWeight: 500,
                    }}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div style={{
                fontSize: '1rem',
                fontWeight: 600,
                color: 'var(--text-primary)',
                marginBottom: '0.75rem',
                paddingBottom: '0.75rem',
                borderBottom: '1px solid var(--divider)',
              }}>
                {m.theme[lang]}
              </div>

              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '1.25rem' }}>
                {m.description[lang]}
              </p>

              {m.link ? (
                <Link href={m.link} className="btn btn-outline" style={{ fontSize: '0.8rem' }}>
                  {m.linkLabel}
                </Link>
              ) : (
                <span className="btn btn-outline" style={{ fontSize: '0.8rem', opacity: 0.4, cursor: 'default' }}>
                  {m.linkLabel}
                </span>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="section section-alt">
        <div className="container" style={{ maxWidth: '55rem', textAlign: 'center' }}>
          <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', marginBottom: '1.5rem', lineHeight: 1.8 }}>
            {t.note}
          </p>
          <Link href="/dev/contact" className="btn btn-primary">
            {t.cta}
          </Link>
        </div>
      </section>
    </div>
  );
}
