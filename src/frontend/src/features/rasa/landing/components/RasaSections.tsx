import {
  RiArrowDownSLine,
  RiMenuLine,
  RiCheckboxCircleFill,
  RiFileTextLine,
  RiGithubFill,
  RiGlobalLine,
  RiGroupLine,
  RiLinkedinBoxFill,
  RiLockLine,
  RiMailFill,
  RiMicLine,
  RiRecordCircleLine,
  RiShieldCheckLine,
  RiShieldKeyholeLine,
  RiSparklingLine,
  RiVidiconLine,
} from '@remixicon/react'
import { RasaLocale, rasaContent } from '../content'
import { useState } from 'react'

type RasaContent = (typeof rasaContent)[RasaLocale]

type Props = {
  locale: RasaLocale
  content: RasaContent
  onLocaleChange: () => void
}

const capabilityIcons = [
  RiVidiconLine,
  RiGlobalLine,
  RiSparklingLine,
  RiRecordCircleLine,
  RiFileTextLine,
  RiGroupLine,
  RiLockLine,
  RiGlobalLine,
]

const navTargets = [
  '#product',
  '#capabilities',
  '#security',
  '#deployment',
  '#pricing',
  '#resources',
]

export const RasaSections = ({ locale, content, onLocaleChange }: Props) => {
  const isFa = locale === 'fa'
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="rasa-page" dir={content.dir} data-locale={locale}>
      <nav className="rasa-nav" aria-label="Rasa">
        <div className="rasa-navbar-inner">
          <a className="rasa-brand" href="/">
            <span className="rasa-logo" aria-hidden="true">
              <span />
            </span>
            <span>رسا</span>
          </a>
          <div className="rasa-nav-links" aria-label="Primary">
            {content.nav.map((item, index) => (
              <a href={navTargets[index]} key={item}>
                {item}
              </a>
            ))}
          </div>
          <div className="rasa-nav-actions">
            <a className="rasa-btn rasa-btn-primary" href="/meet">
              {content.start}
            </a>
            <button
              className="rasa-language"
              onClick={onLocaleChange}
              type="button"
              aria-label={
                isFa ? 'Switch language to English' : 'تغییر زبان به فارسی'
              }
            >
              <span aria-hidden="true">{isFa ? 'FA' : 'EN'}</span>
              <RiArrowDownSLine size={16} aria-hidden="true" />
            </button>
            <button
              className="rasa-menu-toggle"
              type="button"
              onClick={() => setMobileMenuOpen((open) => !open)}
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            >
              <RiMenuLine size={18} aria-hidden="true" />
            </button>
          </div>
        </div>
        <div className={`rasa-mobile-menu ${mobileMenuOpen ? 'is-open' : ''}`}>
          {content.nav.map((item, index) => (
            <a
              href={navTargets[index]}
              key={item}
              onClick={() => setMobileMenuOpen(false)}
            >
              {item}
            </a>
          ))}
        </div>
      </nav>

      <header className="rasa-hero" id="product">
        <div className="rasa-orbits" aria-hidden="true" />
        <div className="rasa-hero-copy">
          <h1>
            <span className="rasa-headline-line">{content.headline[0]}</span>
            <span className="rasa-headline-line">{content.headline[1]}</span>
          </h1>
          <p>{content.lead}</p>
          <div className="rasa-hero-buttons">
            <a
              className="rasa-btn rasa-btn-primary rasa-btn-large"
              href="/meet"
            >
              {content.primary}
              <RiVidiconLine size={20} aria-hidden="true" />
            </a>
            <a
              className="rasa-btn rasa-btn-ghost rasa-btn-large"
              href="#deployment"
            >
              {content.secondary}
              <RiSparklingLine size={19} aria-hidden="true" />
            </a>
          </div>
          <div className="rasa-trust-row">
            {content.trust.map((item, index) => (
              <span key={item}>
                {index === 0 && <span className="rasa-mini-badge">HD</span>}
                {index === 1 && (
                  <RiShieldCheckLine size={16} aria-hidden="true" />
                )}
                {index === 2 && (
                  <span className="rasa-bolt" aria-hidden="true">
                    ↯
                  </span>
                )}
                {index === 3 && <RiGlobalLine size={16} aria-hidden="true" />}
                {item}
              </span>
            ))}
          </div>
        </div>

        <ProductMockup />
      </header>

      <section className="rasa-section rasa-trust-section" id="security">
        <h2>{content.trustTitle}</h2>
        <div className="rasa-card-row">
          {content.cards.map((card, index) => (
            <article className="rasa-trust-card" key={card.title}>
              <IconShell index={index} />
              <div>
                <h3>{card.title}</h3>
                <p>{card.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="rasa-section rasa-capabilities" id="capabilities">
        <span className="rasa-eyebrow">{content.capabilitiesEyebrow}</span>
        <h2>{content.capabilitiesTitle}</h2>
        <p>{content.capabilitiesText}</p>
        <div className="rasa-cap-grid">
          {content.capabilities.map((item, index) => {
            const Icon = capabilityIcons[index]
            return (
              <article className="rasa-cap-card" key={item}>
                <Icon size={34} aria-hidden="true" />
                <span>{item}</span>
              </article>
            )
          })}
        </div>
      </section>

      <section className="rasa-infra" id="deployment">
        <div className="rasa-infra-art" aria-hidden="true">
          <span className="rasa-tech rasa-tech-kube">Kubernetes</span>
          <span className="rasa-tech rasa-tech-docker">Docker</span>
          <span className="rasa-tech rasa-tech-lock">
            <RiLockLine size={28} aria-hidden="true" />
          </span>
          <div className="rasa-server">
            <span />
            <span />
            <span />
          </div>
          <i />
        </div>
        <div className="rasa-infra-copy">
          <h2>{content.infraTitle}</h2>
          <p>{content.infraText}</p>
          <ul>
            {content.infraBullets.map((item) => (
              <li key={item}>
                <RiCheckboxCircleFill size={20} aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="rasa-cta" id="pricing">
        <div>
          <span>{content.ctaReady}</span>
          <h2>
            {content.ctaTitle[0]}
            <br />
            {content.ctaTitle[1]}
          </h2>
        </div>
        <div className="rasa-cta-actions">
          <a className="rasa-btn rasa-btn-primary rasa-btn-large" href="/meet">
            {content.primary}
            <RiVidiconLine size={19} aria-hidden="true" />
          </a>
          <a
            className="rasa-btn rasa-btn-ghost rasa-btn-large"
            href="#deployment"
          >
            {content.request}
            <RiSparklingLine size={18} aria-hidden="true" />
          </a>
        </div>
      </section>

      <footer className="rasa-footer" id="resources">
        <div className="rasa-footer-inner">
          <div className="rasa-footer-brand">
            <a className="rasa-brand rasa-brand-footer" href="/">
              <span className="rasa-logo" aria-hidden="true">
                <span />
              </span>
              <span>رسا</span>
            </a>
            <p>{content.footerLead}</p>
          </div>
          <div className="rasa-footer-columns">
            {content.footerColumns.map((column) => (
              <div className="rasa-footer-column" key={column[0]}>
                <h3>{column[0]}</h3>
                <div className="rasa-footer-links">
                  {column.slice(1).map((link) => (
                    <a href="/" key={link}>
                      {link}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="rasa-footer-social">
            <div>
              <RiGithubFill size={24} aria-hidden="true" />
              <RiMailFill size={24} aria-hidden="true" />
              <RiLinkedinBoxFill size={24} aria-hidden="true" />
            </div>
            <button
              className="rasa-country"
              type="button"
              aria-label="Country selector"
            >
              <span aria-hidden="true">🇮🇷</span>
              {content.country}
              <RiArrowDownSLine size={16} aria-hidden="true" />
            </button>
            <small>© 2025 Rasa. All rights reserved.</small>
          </div>
        </div>
      </footer>
    </div>
  )
}

const IconShell = ({ index }: { index: number }) => {
  const icons = [RiShieldKeyholeLine, RiSparklingLine, RiGlobalLine]
  const Icon = icons[index]
  return (
    <div className={`rasa-icon-shell rasa-icon-${index}`}>
      <Icon size={48} />
    </div>
  )
}

const ProductMockup = () => (
  <div className="rasa-mockup" aria-label="Rasa meeting interface">
    <aside className="rasa-chat-panel">
      <div className="rasa-panel-top">
        <span aria-hidden="true">☰</span>
        <strong>پیام‌ها</strong>
      </div>
      <div className="rasa-chat-list">
        <ChatLine name="سارا احمدی" time="10:32" />
        <ChatLine name="علی مرادی" time="10:35" />
      </div>
      <div className="rasa-live-note">
        <b>رونویسی زنده</b>
        <p>در این جلسه درباره برنامه تحویل و مسیر استقرار صحبت می‌کنیم.</p>
      </div>
      <div className="rasa-rec">
        <span />
        در حال ضبط
        <time>01:22:48</time>
      </div>
    </aside>
    <main className="rasa-video-panel">
      <div className="rasa-meeting-top">
        <span>جلسه تیم محصول</span>
        <b>22:48</b>
      </div>
      <div className="rasa-video-grid">
        <VideoTile name="حسین" tone="warm" large />
        <VideoTile name="فاطمه" tone="blue" large />
        <VideoTile name="محمد" tone="cool" />
        <VideoTile name="نازنین" tone="rose" />
        <div className="rasa-audio-tile">
          <RiMicLine size={34} aria-hidden="true" />
          <span>مهمان</span>
        </div>
      </div>
      <div className="rasa-controls">
        {[RiMicLine, RiVidiconLine, RiGlobalLine, RiSparklingLine].map(
          (Icon, i) => (
            <button type="button" key={i}>
              <Icon size={19} aria-hidden="true" />
            </button>
          )
        )}
        <button className="rasa-end" type="button">
          <RiVidiconLine size={18} aria-hidden="true" />
        </button>
      </div>
      <div className="rasa-status">
        اتصال امن و رمزگذاری‌شده
        <RiShieldCheckLine size={16} aria-hidden="true" />
      </div>
    </main>
  </div>
)

const ChatLine = ({ name, time }: { name: string; time: string }) => (
  <div className="rasa-chat-line">
    <span />
    <div>
      <b>{name}</b>
      <small>فایل طراحی به اشتراک گذاشته شد</small>
    </div>
    <time>{time}</time>
  </div>
)

const VideoTile = ({
  name,
  tone,
  large,
}: {
  name: string
  tone: string
  large?: boolean
}) => (
  <div
    className={`rasa-video-tile rasa-video-${tone} ${large ? 'is-large' : ''}`}
  >
    <div className="rasa-avatar-face">
      <span />
      <i />
    </div>
    <small>{name}</small>
  </div>
)
