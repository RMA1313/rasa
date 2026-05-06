import { useState } from 'react'
import { Screen } from '@/layout/Screen'
import { RasaSections } from './components/RasaSections'
import { RasaLocale, rasaContent } from './content'
import './styles/rasaLanding.css'

export const RasaMarketingPage = () => {
  const [locale, setLocale] = useState<RasaLocale>('fa')
  const content = rasaContent[locale]

  return (
    <Screen header={false} footer={false}>
      <RasaSections
        locale={locale}
        content={content}
        onLocaleChange={() => setLocale(locale === 'fa' ? 'en' : 'fa')}
      />
    </Screen>
  )
}

export default RasaMarketingPage
