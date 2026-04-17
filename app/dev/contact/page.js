'use client';

import { useState } from 'react';
import { useLang } from '@/lib/useLang';

export default function ContactPage() {
  const lang = useLang('dev-lang') || 'zh';
  const [submitted, setSubmitted] = useState(false);

  const content = {
    zh: {
      eyebrow: '联系',
      title: '联系 / 合作',
      intro: 'Timingquant Lab 欢迎以下方向的交流与合作：',
      directions: [
        '研究合作',
        '框架交流',
        '风险研究',
        '市场状态与 Regime 研究',
        '策略过滤与仓位管理相关讨论',
        '面向机构或家族办公室的研究型合作',
      ],
      note: '如需进一步了解研究框架、样本输出或合作方式，请通过以下方式联系。',
      formName: '姓名',
      formEmail: '邮箱',
      formMessage: '留言内容',
      formPlaceholder: '请简要描述您的合作意向或问题...',
      formSubmit: '发送消息',
      formSuccess: '消息已发送，我们会尽快回复。',
      privacy: '我们尊重您的隐私，所有信息仅用于回复联系请求。',
    },
    en: {
      eyebrow: 'Contact',
      title: 'Contact / Collaboration',
      intro: 'Timingquant Lab welcomes conversations and collaboration in areas such as:',
      directions: [
        'Research collaboration',
        'Framework discussion',
        'Risk studies',
        'Market-state and regime research',
        'Strategy filtering and position management',
        'Institution-oriented research cooperation',
      ],
      note: 'For further information regarding the framework, sample outputs, or potential collaboration, please get in touch below.',
      formName: 'Name',
      formEmail: 'Email',
      formMessage: 'Message',
      formPlaceholder: 'Please briefly describe your inquiry or collaboration interest...',
      formSubmit: 'Send Message',
      formSuccess: 'Message sent. We will get back to you shortly.',
      privacy: 'We respect your privacy. All information is used solely to respond to your inquiry.',
    },
  };

  const t = content[lang];

  const handleSubmit = (e) => {
    e.preventDefault();
    // In production, this would send to an API/email service
    setSubmitted(true);
  };

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

      {/* Content */}
      <section className="section">
        <div className="container" style={{ maxWidth: '65rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: '5rem', alignItems: 'start' }}>

            {/* Left: Collaboration areas */}
            <div>
              <p style={{ marginBottom: '1.5rem', lineHeight: 1.8, color: 'var(--text-secondary)' }}>
                {t.intro}
              </p>
              <ul className="list-disc" style={{ marginBottom: '2rem' }}>
                {t.directions.map((d, i) => (
                  <li key={i} style={{ fontSize: '0.95rem' }}>{d}</li>
                ))}
              </ul>
              <div className="method-note" style={{ whiteSpace: 'pre-line', lineHeight: 1.8, margin: 0 }}>
                {t.note}
              </div>
            </div>

            {/* Right: Contact Form */}
            <div>
              {submitted ? (
                <div style={{
                  padding: '3rem 2rem',
                  textAlign: 'center',
                  background: 'var(--bg-card)',
                  border: '1px solid var(--divider)',
                  borderRadius: '8px',
                }}>
                  <div style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '50%',
                    background: 'var(--accent-light)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 1rem',
                    fontSize: '1.25rem',
                    color: 'var(--accent-primary)',
                  }}>
                    ✓
                  </div>
                  <p style={{ color: 'var(--text-primary)', fontWeight: 500, marginBottom: '0.5rem' }}>
                    {t.formSuccess}
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{
                  background: 'var(--bg-card)',
                  border: '1px solid var(--divider)',
                  borderRadius: '8px',
                  padding: '2rem',
                }}>
                  <div className="form-group">
                    <label className="form-label">{t.formName}</label>
                    <input
                      type="text"
                      className="form-input"
                      placeholder={lang === 'zh' ? '您的姓名' : 'Your name'}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">{t.formEmail}</label>
                    <input
                      type="email"
                      className="form-input"
                      placeholder={lang === 'zh' ? 'your@email.com' : 'your@email.com'}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">{t.formMessage}</label>
                    <textarea
                      className="form-textarea"
                      placeholder={t.formPlaceholder}
                      required
                    />
                  </div>
                  <button type="submit" className="btn btn-primary w-full" style={{ width: '100%', justifyContent: 'center' }}>
                    {t.formSubmit}
                  </button>
                  <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '1rem', textAlign: 'center' }}>
                    {t.privacy}
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
