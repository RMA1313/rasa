import { useEffect, useState } from 'react'
import {
  RiArrowDownSLine,
  RiCheckLine,
  RiCloudLine,
  RiFileTextLine,
  RiGlobalLine,
  RiGroupLine,
  RiLockLine,
  RiMailFill,
  RiMenuLine,
  RiMicLine,
  RiPhoneLine,
  RiRecordCircleLine,
  RiShieldCheckLine,
  RiShieldKeyholeLine,
  RiSparklingLine,
  RiSpeedLine,
  RiServerLine,
  RiVidiconLine,
  RiWifiOffLine,
  RiDatabase2Line,
  RiUserSettingsLine,
  RiSettings3Line,
  RiLinksLine,
  RiLayoutGridLine,
} from '@remixicon/react'
import { branding } from '../../config/branding'
import { RasaLocale, rasaContent } from '../content'

type Props = {
  locale: RasaLocale
  content: (typeof rasaContent)[RasaLocale]
  onLocaleChange: () => void
}

const navTargets = ['#product', '#capabilities', '#security', '#deployment', '#pricing', '#resources']

const featureIcons = [
  RiVidiconLine,
  RiGroupLine,
  RiShieldCheckLine,
  RiServerLine,
  RiLockLine,
  RiPhoneLine,
  RiWifiOffLine,
  RiCloudLine,
  RiUserSettingsLine,
  RiSettings3Line,
  RiLayoutGridLine,
  RiLinksLine,
  RiShieldKeyholeLine,
  RiDatabase2Line,
  RiSpeedLine,
  RiRecordCircleLine,
  RiFileTextLine,
  RiGlobalLine,
]

const badgeIcons = [RiShieldCheckLine, RiSparklingLine, RiServerLine, RiSpeedLine, RiLockLine]

export const RasaSections = ({ locale, content, onLocaleChange }: Props) => {
  const isFa = locale === 'fa'
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('product')
  const [activeTab, setActiveTab] = useState(0)

  useEffect(() => {
    const observers = navTargets
      .map((target) => target.slice(1))
      .map((id) => document.getElementById(id))
      .filter(Boolean)
      .map((element) => {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                setActiveSection(entry.target.id)
              }
            })
          },
          { rootMargin: '-35% 0px -50% 0px', threshold: 0.1 }
        )
        observer.observe(element as Element)
        return observer
      })

    return () => observers.forEach((observer) => observer.disconnect())
  }, [])

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMobileMenuOpen(false)
    }
    window.addEventListener('keydown', closeOnEscape)
    return () => window.removeEventListener('keydown', closeOnEscape)
  }, [])

  useEffect(() => {
    setMobileMenuOpen(false)
  }, [locale])

  return (
    <div className="rasa-page" dir={content.dir} data-locale={locale}>
      <HeroDecorations />
      <nav className="rasa-nav" aria-label="Rasa">
        <div className="rasa-navbar-inner">
          <a className="rasa-brand" href="/">
            <img
              className="rasa-brand-logo"
              src={branding.logoPath}
              alt={branding.logoAlt}
              width="148"
              height="36"
              decoding="async"
            />
          </a>
          <div className="rasa-nav-links" aria-label="Primary">
            {content.nav.map((item, index) => (
              <a
                href={navTargets[index]}
                key={item}
                className={activeSection === navTargets[index].slice(1) ? 'is-active' : ''}
              >
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
              aria-label={isFa ? 'Switch language to English' : 'تغییر زبان به فارسی'}
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
            <a className="rasa-btn rasa-btn-primary rasa-btn-large" href="/meet">
              {content.primary}
              <RiVidiconLine size={20} aria-hidden="true" />
            </a>
            <a className="rasa-btn rasa-btn-ghost rasa-btn-large" href="#deployment">
              {content.secondary}
              <RiSparklingLine size={19} aria-hidden="true" />
            </a>
          </div>
          <div className="rasa-trust-row">
            {content.trust.map((item, index) => (
              <span key={item}>
                {index === 0 && <span className="rasa-mini-badge">HD</span>}
                {index === 1 && <RiShieldCheckLine size={16} aria-hidden="true" />}
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
        <span className="rasa-eyebrow">{content.trustTitle}</span>
        <h2>{content.trustTitle2}</h2>
        <p className="rasa-section-lead">{content.trustSubtitle}</p>
        <p className="rasa-section-body">{content.trustText2}</p>
        <div className="rasa-card-grid rasa-trust-grid">
          {content.trustCards.map((card, index) => (
            <article className="rasa-trust-card" key={card.title}>
              <div className="rasa-trust-card-head">
                <IconShell index={index} />
                <h3>{card.title}</h3>
              </div>
              <p>{card.text}</p>
              <ul className="rasa-bullet-list">
                {card.bullets.map((bullet) => (
                  <li key={bullet}>
                    <RiCheckLine size={14} aria-hidden="true" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="rasa-section rasa-capabilities" id="capabilities">
        <span className="rasa-eyebrow">{content.capabilitiesEyebrow}</span>
        <h2>{content.capabilitiesTitle}</h2>
        <p>{content.capabilitiesText}</p>
        <div className="rasa-feature-tabs" role="tablist" aria-label={content.capabilitiesTitle}>
          {content.capabilityGroups.map((group, index) => (
            <button
              key={group.title}
              type="button"
              role="tab"
              className={activeTab === index ? 'is-active' : ''}
              aria-selected={activeTab === index}
              onClick={() => setActiveTab(index)}
            >
              {group.title}
            </button>
          ))}
        </div>
        <div className="rasa-tab-panels">
          {content.capabilityGroups.map((group, index) => (
            <div
              key={group.title}
              role="tabpanel"
              hidden={activeTab !== index}
              className="rasa-feature-panel"
            >
              <div className="rasa-card-grid rasa-feature-grid">
                {group.items.map((item, itemIndex) => {
                  const Icon = featureIcons[(index * 6 + itemIndex) % featureIcons.length]
                  return (
                    <article className="rasa-feature-card" key={item.title}>
                      <Icon size={22} aria-hidden="true" />
                      <div>
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                      </div>
                    </article>
                  )
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="rasa-tech-trust" id="deployment">
        <div className="rasa-tech-trust-copy">
          <span className="rasa-eyebrow">{content.trustTitle2}</span>
          <h2>{content.trustTitle2}</h2>
          <p>{content.trustText2}</p>
        </div>
        <div className="rasa-tech-mockup" aria-hidden="true">
          <div className="rasa-tech-mockup-header">
            <RiServerLine size={18} />
            <span>Enterprise control plane</span>
          </div>
          <div className="rasa-tech-mockup-grid">
            <div>
              <RiShieldKeyholeLine size={20} />
              <span>Security</span>
            </div>
            <div>
              <RiLinksLine size={20} />
              <span>API</span>
            </div>
            <div>
              <RiLayoutGridLine size={20} />
              <span>Scale</span>
            </div>
            <div>
              <RiDatabase2Line size={20} />
              <span>Data</span>
            </div>
          </div>
          <div className="rasa-tech-mockup-badges">
          {content.trustBadges.slice(0, 4).map((badge, index) => {
            const Icon = badgeIcons[index]
            return (
              <span key={badge}>
                <span className="rasa-badge-icon" aria-hidden="true">
                  <Icon size={14} aria-hidden="true" />
                </span>
                {badge}
              </span>
            )
          })}
          </div>
        </div>
        <div className="rasa-badge-row">
          {content.trustBadges.map((badge, index) => {
            const Icon = badgeIcons[index % badgeIcons.length]
            return (
              <span key={badge}>
                <Icon size={14} aria-hidden="true" />
                {badge}
              </span>
            )
          })}
        </div>
      </section>

      <section className="rasa-cta" id="pricing">
        <div className="rasa-cta-copy">
          <span>{content.ctaReady}</span>
          <h2>{content.ctaReady}</h2>
          <p>{content.ctaText}</p>
        </div>
        <div className="rasa-cta-actions">
          <a className="rasa-btn rasa-btn-primary rasa-btn-large" href="/meet">
            {content.primaryCta}
            <RiVidiconLine size={19} aria-hidden="true" />
          </a>
          <a className="rasa-btn rasa-btn-ghost rasa-btn-large" href="#deployment">
            {content.secondaryCta}
            <RiSparklingLine size={18} aria-hidden="true" />
          </a>
          <a className="rasa-btn rasa-btn-ghost rasa-btn-large" href="#resources">
            {content.tertiaryCta}
            <RiFileTextLine size={18} aria-hidden="true" />
          </a>
        </div>
      </section>

      <footer className="rasa-footer" id="resources">
        <div className="rasa-footer-inner">
          <div className="rasa-footer-brand">
            <a className="rasa-brand rasa-brand-footer" href="/">
              <img
                className="rasa-brand-logo"
                src="rasa/logo-light.png"
                alt={branding.logoAlt}
                width="148"
                height="36"
                decoding="async"
              />
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
              <RiMailFill size={24} aria-hidden="true" />
              <RiGlobalLine size={24} aria-hidden="true" />
              <RiGroupLine size={24} aria-hidden="true" />
            </div>
            <button className="rasa-country" type="button" aria-label="Country selector">
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
  const icons = [RiShieldKeyholeLine, RiSparklingLine, RiServerLine, RiPhoneLine]
  const Icon = icons[index]
  return (
    <div className={`rasa-icon-shell rasa-icon-${index}`}>
      <Icon size={28} />
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
        {[RiMicLine, RiVidiconLine, RiGlobalLine, RiSparklingLine].map((Icon, i) => (
          <button type="button" key={i}>
            <Icon size={19} aria-hidden="true" />
          </button>
        ))}
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
  <div className={`rasa-video-tile rasa-video-${tone} ${large ? 'is-large' : ''}`}>
    <div className="rasa-avatar-face">
      <span />
      <i />
    </div>
    <small>{name}</small>
  </div>
)

const HeroDecorations = () => {
  const dots = [
    { className: 'rasa-dot-dot rasa-dot-a', size: 18 },
    { className: 'rasa-dot-dot rasa-dot-b', size: 12 },
    { className: 'rasa-dot-dot rasa-dot-c', size: 24 },
    { className: 'rasa-dot-dot rasa-dot-d', size: 10 },
    { className: 'rasa-dot-dot rasa-dot-e', size: 16 },
    { className: 'rasa-dot-dot rasa-dot-f', size: 14 },
    { className: 'rasa-dot-dot rasa-dot-g', size: 20 },
    { className: 'rasa-dot-dot rasa-dot-h', size: 11 },
  ]

  return (
    <div className="rasa-hero-decor" aria-hidden="true">
      <svg
        className="rasa-hero-lines"
        viewBox="0 0 1200 780"
        preserveAspectRatio="none"
        aria-hidden="true"
        focusable="false"
      >
        <path d="M88 228C205 132 343 92 488 126c114 27 171 102 276 121 126 23 245-39 327-131" />
        <path d="M106 516c130-56 264-40 362 29 89 63 187 99 316 76 121-22 208-90 332-198" />
        <path d="M158 180c92 21 160 70 231 134 74 67 147 95 238 92 97-3 177-48 255-106 92-68 164-106 286-89" />
      </svg>
      {dots.map((dot, index) => (
        <span
          key={dot.className}
          className={dot.className}
          style={{
            width: `${dot.size}px`,
            height: `${dot.size}px`,
            animationDelay: `${index * 0.35}s`,
          }}
        />
      ))}
    </div>
  )
}
