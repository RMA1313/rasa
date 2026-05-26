const rtlLanguages = new Set(['fa', 'ar', 'he', 'ur'])

const normalizeLanguageTag = (language: string) => {
  return language.trim().replace(/_/g, '-').toLowerCase()
}

export const getLanguageDirection = (language: string): 'rtl' | 'ltr' => {
  const normalizedLanguage = normalizeLanguageTag(language)
  const baseLanguage = normalizedLanguage.split('-')[0]

  return rtlLanguages.has(baseLanguage) ? 'rtl' : 'ltr'
}
