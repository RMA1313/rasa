import i18n from 'i18next'
import resourcesToBackend from 'i18next-resources-to-backend'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import { getLanguageDirection } from './direction'
const i18nDefaultNamespace = 'global'
const fallbackLng = 'fa'

i18n.setDefaultNamespace(i18nDefaultNamespace)
i18n
  .use(
    resourcesToBackend((language: string, namespace: string) => {
      return import(`../locales/${language}/${namespace}.json`)
    })
  )
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    supportedLngs: ['en', 'fr', 'nl', 'de', 'fa'],
    fallbackLng,
    ns: i18nDefaultNamespace,
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
    },
    interpolation: {
      escapeValue: false,
    },
  })
  .then(() => {
    const language = i18n.language || fallbackLng
    document.documentElement.setAttribute('lang', language)
    document.documentElement.setAttribute(
      'dir',
      getLanguageDirection(language)
    )
  })

i18n.on('languageChanged', (lang) => {
  document.documentElement.setAttribute('lang', lang)
  document.documentElement.setAttribute('dir', getLanguageDirection(lang))
})
