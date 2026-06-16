import { Suspense, lazy, useEffect, useMemo, useState } from 'react'
import { RiArrowLeftLine, RiArrowRightLine, RiShieldCheckLine } from '@remixicon/react'
import { branding } from '../../config/branding'
import { rasaContent } from '../content'
import { CommunicationWave } from './CommunicationWave'
import { ScalePath } from './ScalePath'
import { FeatureOrbit } from './FeatureOrbit'
import { InfrastructureBackbone } from './InfrastructureBackbone'

const HeroGlobe = lazy(() => import('./HeroGlobe'))

export const RasaSections = () => {
  const content = rasaContent.fa
  const sectionIds = useMemo(() => ['hero', 'scale', 'product', 'security', 'final'], [])
  const [visibleSections, setVisibleSections] = useState<string[]>(['hero'])

  useEffect(() => {
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el))

    const observer = new IntersectionObserver(
      (entries) => {
        setVisibleSections((current) => {
          const next = new Set(current)
          entries.forEach((entry) => {
            if (entry.isIntersecting) next.add(entry.target.id)
          })
          return Array.from(next)
        })
      },
      { threshold: 0.22, rootMargin: '-8% 0px -12% 0px' }
    )

    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [sectionIds])

  return (
    <main className="rasa-page" dir="rtl" data-locale="fa">
      <div className="rasa-page-grid" aria-hidden="true" />
      <nav className="rasa-nav" aria-label="Rasa">
        <a className="rasa-brand" href="/" aria-label={branding.logoAlt}>
          <img src={branding.logoLightPath} alt={branding.logoAlt} width="80" height="32" />
        </a>
        <div className="rasa-nav-actions">
          <a className="rasa-nav-link" href="#product">
            محصول
          </a>
          <a className="rasa-nav-link" href="/meet">
            ورود
          </a>
        </div>
      </nav>

      <section className={`rasa-section rasa-hero-section ${visibleSections.includes('hero') ? 'is-visible' : ''}`} id="hero">
        <div className="rasa-hero-copy">
          <p className="rasa-eyebrow">رسا</p>
          <h1>
            <span>هر گفتگو،</span>
            <span className="rasa-title-accent">رسا</span>
          </h1>
          <p className="rasa-hero-subtitle">
            از جلسات روزمره تا زیرساخت ارتباطی سازمان شما؛ رسا ارتباطات آنلاین را ساده، امن و قابل اتکا می‌کند.
          </p>
          <div className="rasa-hero-actions">
            <a className="rasa-btn rasa-btn-primary" href="/meet">
              {content.primary}
              <RiArrowLeftLine size={18} aria-hidden="true" />
            </a>
            <a className="rasa-btn rasa-btn-secondary" href="#final">
              {content.secondary}
              <RiArrowRightLine size={18} aria-hidden="true" />
            </a>
          </div>
          <ul className="rasa-trust-list">
            {content.trust.map((item) => (
              <li key={item}>
                <RiShieldCheckLine size={16} aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="rasa-hero-visual">
          <Suspense fallback={<div className="rasa-hero-fallback" aria-hidden="true" />}>
            <HeroGlobe />
          </Suspense>
        </div>
      </section>

      <section className={`rasa-section rasa-scale-section ${visibleSections.includes('scale') ? 'is-visible' : ''}`} id="scale">
        <ScalePath title={content.scaleTitle} items={content.scaleItems} />
      </section>

      <section className={`rasa-section rasa-product-section ${visibleSections.includes('product') ? 'is-visible' : ''}`} id="product">
        <FeatureOrbit title={content.productTitle} items={content.productItems} />
      </section>

      <section className={`rasa-section rasa-infra-section ${visibleSections.includes('security') ? 'is-visible' : ''}`} id="security">
        <InfrastructureBackbone
          title={content.infraTitle}
          subtitle={content.infraSubtitle}
          metrics={content.metrics}
        />
      </section>

      <section className={`rasa-section rasa-final-section ${visibleSections.includes('final') ? 'is-visible' : ''}`} id="final">
        <CommunicationWave />
        <div className="rasa-final-copy">
          <p className="rasa-eyebrow">رسا</p>
          <h2>{content.finalTitle}</h2>
          <p>{content.finalText}</p>
          <div className="rasa-hero-actions">
            <a className="rasa-btn rasa-btn-primary" href="/meet">
              {content.primary}
              <RiArrowLeftLine size={18} aria-hidden="true" />
            </a>
            <a className="rasa-btn rasa-btn-secondary" href="mailto:sales@rasa.ir">
              {content.secondary}
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
