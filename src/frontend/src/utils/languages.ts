// Map frontend language codes to backend language codes

export type BackendLanguage = 'en-us' | 'fr-fr' | 'nl-nl' | 'de-de' | 'fa-ir'
export type FrontendLanguage = 'en' | 'fr' | 'nl' | 'de' | 'fa'

const frontendToBackendMap: Record<FrontendLanguage, BackendLanguage> = {
  en: 'en-us',
  fr: 'fr-fr',
  nl: 'nl-nl',
  de: 'de-de',
  fa: 'fa-ir',
}

export const convertToBackendLanguage = (
  frontendLang: string = 'fa'
): BackendLanguage => {
  if (frontendLang.startsWith('fa')) return 'fa-ir'
  return frontendToBackendMap[frontendLang as FrontendLanguage]
}
