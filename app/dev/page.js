'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useLang } from '@/lib/useLang';

export default function HomePage() {
  const lang = useLang('dev-lang') || 'zh';

  // Hero Section
  const hero = {
    zh: {
      eyebrow: '时序量化研究框架',
      title: '研究市场节奏、\n结构状态与风险暴露',
      subtitle: 'Timingquant Lab 致力于构建一套用于识别市场状态、观察周期切换与管理风险暴露的研究框架。\n\n我们的研究部分受到东方时间逻辑与变化思想的启发，但所有输出都以结构化表达、量化验证与持续跟踪为核心。',
      cta1: '探索研究框架',
      cta2: '查看研究样本',
    },
    en: {
      eyebrow: 'Temporal Quantitative Framework',
      title: 'Studying Market Rhythm,\nStructural Regimes & Risk Exposure',
      subtitle: 'Timingquant Lab is focused on building a research framework for identifying market states, observing regime transitions, and managing risk exposure.\n\nOur work is partly inspired by Eastern ideas of time and change, but every output is grounded in structured representation, quantitative validation, and continuous tracking.',
      cta1: 'Explore the Framework',
      cta2: 'View Research Samples',
    },
  };

  // Problem Section
  const problem = {
    zh: {
      eyebrow: '研究视角',
      title: '不是简单预测涨跌，\n而是识别市场处在什么状态',
      desc: 'Timingquant Lab 关注的重点，不是单一价格方向，而是市场在不同时间窗口中的结构状态与风险条件。我们重点研究以下问题：',
      questions: [
        '当前市场处于趋势、震荡、压缩、扩散还是切换阶段',
        '风险暴露应当扩张、收缩，还是保持防守',
        '波动、节奏与参与效率在不同阶段如何变化',
        '哪些时间窗口更适合防守、试探、进攻或回避',
      ],
    },
    en: {
      eyebrow: 'Research Perspective',
      title: 'Not Directional Prediction,\nBut Market-State Identification',
      desc: 'Timingquant Lab does not approach markets as a simple directional prediction problem. Instead, we focus on structural states and changing risk conditions across time windows. We study questions such as:',
      questions: [
        'Whether the market is in trend, consolidation, compression, expansion, or transition',
        'Whether risk exposure should be expanded, reduced, or kept defensive',
        'How volatility, rhythm, and participation efficiency evolve across different phases',
        'Which timing windows are more suitable for defense, probing, offense, or avoidance',
      ],
    },
  };

  // Methodology Section
  const methodology = {
    zh: {
      eyebrow: '方法论定位',
      title: '从时间逻辑到结构化研究',
      desc: 'Timingquant Lab 的研究灵感部分来自东方关于时间、变化与关系的理解。但这些思想并不被直接当作结论使用。\n\n我们的核心工作，是将其转化为可观察、可跟踪、可复盘的研究框架，用于表达市场节奏、结构状态、风险阶段与参与角色。',
    },
    en: {
      eyebrow: 'Methodological Positioning',
      title: 'From Temporal Logic to Structured Research',
      desc: 'Timingquant Lab is partly inspired by Eastern ways of thinking about time, change, and relational dynamics. However, these ideas are not presented as opaque conclusions.\n\nOur core effort is to translate them into an observable, trackable, and reviewable research framework for representing market rhythm, structural states, risk phases, and participation posture.',
    },
  };

  // Use Cases Section
  const useCases = {
    zh: {
      eyebrow: '适用场景',
      title: '研究框架的多元应用',
      cases: [
        { title: '市场状态识别', desc: '识别当前市场所属的结构类型' },
        { title: 'Regime Filter', desc: '作为策略信号过滤的辅助工具' },
        { title: '风险暴露管理', desc: '辅助仓位调节与风险控制决策' },
        { title: '周期切换观察', desc: '监测市场状态的转换节点' },
        { title: '宏观节奏研究', desc: '研究战术窗口与节奏变化' },
        { title: '团队决策支持', desc: '作为研究团队的辅助判断框架' },
      ],
    },
    en: {
      eyebrow: 'Use Cases',
      title: 'Multiple Applications of the Research Framework',
      cases: [
        { title: 'Market-State Identification', desc: 'Identifying the structural type of the current market' },
        { title: 'Regime Filter', desc: 'Serving as an auxiliary tool for strategy signal filtering' },
        { title: 'Risk Exposure Management', desc: 'Supporting position adjustment and risk control decisions' },
        { title: 'Regime Transition Monitoring', desc: 'Monitoring transition nodes between market states' },
        { title: 'Macro Rhythm Research', desc: 'Studying tactical windows and rhythm changes' },
        { title: 'Team Decision Support', desc: 'Serving as a complementary framework for research teams' },
      ],
    },
  };

  // Value Section
  const value = {
    zh: {
      eyebrow: '价值主张',
      title: '可研究，可跟踪，可复盘',
      desc: '我们不把市场视为神秘且不可验证的预测对象。\n\nTimingquant Lab 的目标，是建立一套能够持续记录、比较与复盘的研究语言。任何真正有价值的框架，最终都应该能够被表达、被跟踪、被检验。',
    },
    en: {
      eyebrow: 'Value Proposition',
      title: 'Researchable. Trackable. Reviewable.',
      desc: 'We do not treat markets as mystical objects of unverifiable prediction.\n\nThe goal of Timingquant Lab is to build a research language that can be recorded, compared, and reviewed over time. Any framework with real value should ultimately be expressible, trackable, and testable.',
    },
  };

  const t = { hero: hero[lang], problem: problem[lang], methodology: methodology[lang], useCases: useCases[lang], value: value[lang] };

  return (
    <>
      {/* =============================================
          SECTION 1: HERO
          ============================================= */}
      <section className="hero">
        <span className="hero-eyebrow">{t.hero.eyebrow}</span>
        <h1 className="hero-title">
          <span style={{ whiteSpace: 'pre-line' }}>{t.hero.title}</span>
        </h1>
        <p className="hero-subtitle" style={{ whiteSpace: 'pre-line' }}>
          {t.hero.subtitle}
        </p>
        <div className="hero-actions">
          <Link href="/methodology" className="btn btn-primary">
            {t.hero.cta1}
          </Link>
          <Link href="/samples" className="btn btn-outline">
            {t.hero.cta2}
          </Link>
        </div>
      </section>

      {/* =============================================
          SECTION 2: PROBLEM
          ============================================= */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-header">
            <span className="section-label">{t.problem.eyebrow}</span>
            <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', maxWidth: '35ch', margin: '0 auto', lineHeight: 1.4 }}>
              <span style={{ whiteSpace: 'pre-line' }}>{t.problem.title}</span>
            </h2>
          </div>
          <div style={{ maxWidth: '60ch', margin: '0 auto', textAlign: 'center' }}>
            <p style={{ marginBottom: '2rem', textAlign: 'left' }}>{t.problem.desc}</p>
            <ul className="list-disc" style={{ maxWidth: '55ch', margin: '0 auto', textAlign: 'left' }}>
              {t.problem.questions.map((q, i) => (
                <li key={i}>{q}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* =============================================
          SECTION 3: METHODOLOGY
          ============================================= */}
      <section className="section">
        <div className="container" style={{ maxWidth: '75rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'center' }}>
            {/* Left: Text */}
            <div>
              <span className="section-label">{t.methodology.eyebrow}</span>
              <div className="divider" />
              <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', lineHeight: 1.3, marginBottom: '1.5rem' }}>
                <span style={{ whiteSpace: 'pre-line' }}>{t.methodology.title}</span>
              </h2>
              <p style={{ whiteSpace: 'pre-line', lineHeight: 1.9 }}>{t.methodology.desc}</p>
            </div>

            {/* Right: Structural diagram */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {[
                { label: { zh: '时间窗口', en: 'Time Window' }, sub: { zh: '多周期结构观察', en: 'Multi-cycle observation' } },
                { label: { zh: '市场节奏', en: 'Market Rhythm' }, sub: { zh: '趋势 / 震荡 / 压缩 / 扩散', en: 'Trend / Consolidation / Compression / Expansion' } },
                { label: { zh: '结构状态', en: 'Structural Regime' }, sub: { zh: 'Regime 标签与映射', en: 'Regime labeling & mapping' } },
                { label: { zh: '风险阶段', en: 'Risk Phase' }, sub: { zh: '扩张 / 收缩 / 防守', en: 'Expand / Reduce / Defensive' } },
                { label: { zh: '输出表达', en: 'Output Representation' }, sub: { zh: '可跟踪 · 可复盘 · 可验证', en: 'Trackable · Reviewable · Testable' } },
              ].map((item, i) => (
                <div key={i} style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  padding: '1rem 1.25rem',
                  background: 'var(--bg-card)',
                  border: '1px solid var(--divider)',
                  borderRadius: '8px',
                }}>
                  <div style={{
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    background: 'var(--accent-primary)',
                    flexShrink: 0,
                  }} />
                  <div>
                    <div style={{ fontWeight: 600, fontSize: '0.9rem', color: 'var(--text-primary)' }}>
                      {item.label[lang]}
                    </div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                      {item.sub[lang]}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =============================================
          SECTION 4: USE CASES
          ============================================= */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-header">
            <span className="section-label">{t.useCases.eyebrow}</span>
            <h2>{t.useCases.title}</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem', maxWidth: '70rem', margin: '0 auto' }}>
            {t.useCases.cases.map((c, i) => (
              <div key={i} className="card" style={{ textAlign: 'center', padding: '2rem 1.5rem' }}>
                <div style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '8px',
                  background: 'var(--accent-light)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 1rem',
                  fontSize: '0.8rem',
                  fontWeight: 700,
                  color: 'var(--accent-primary)',
                  letterSpacing: '0.05em',
                }}>
                  {String(i + 1).padStart(2, '0')}
                </div>
                <h3 style={{ fontSize: '1rem', fontWeight: 600, marginBottom: '0.5rem', color: 'var(--text-primary)' }}>{c.title}</h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =============================================
          SECTION 5: VALUE
          ============================================= */}
      <section className="section">
        <div className="container" style={{ textAlign: 'center' }}>
          <span className="section-label">{t.value.eyebrow}</span>
          <h2 style={{ fontSize: 'clamp(1.75rem, 4vw, 3rem)', marginBottom: '2rem', letterSpacing: '-0.03em' }}>
            {t.value.title}
          </h2>
          <div className="divider divider-center" />
          <p style={{ maxWidth: '55ch', margin: '0 auto', lineHeight: 1.9, whiteSpace: 'pre-line' }}>
            {t.value.desc}
          </p>

          {/* Three pillars */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '2rem',
            maxWidth: '40rem',
            margin: '3rem auto 0',
          }}>
            {[
              { zh: '可研究', en: 'Researchable', char: 'R' },
              { zh: '可跟踪', en: 'Trackable', char: 'T' },
              { zh: '可复盘', en: 'Reviewable', char: 'V' },
            ].map((p, i) => (
              <div key={i} style={{ textAlign: 'center' }}>
                <div style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: '50%',
                  border: '2px solid var(--accent-primary)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 0.75rem',
                  fontSize: '1.25rem',
                  color: 'var(--accent-primary)',
                  fontWeight: 700,
                }}>
                  {p.char}
                </div>
                <h4 style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--text-primary)' }}>{p[lang]}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
