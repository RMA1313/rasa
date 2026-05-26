export type BrandingConfig = {
  appName: string
  displayName: string
  shortName: string
  logoPath: string
  logoAlt: string
  defaultTitle: string
  manifestName?: string
  manifestShortName?: string
}

const FALLBACK_APP_NAME = 'Rasa Meet'
const VITE_APP_TITLE = import.meta.env.VITE_APP_TITLE?.trim()

const appName = VITE_APP_TITLE || FALLBACK_APP_NAME

export const branding: BrandingConfig = {
  appName,
  displayName: appName,
  shortName: 'Rasa',
  logoPath: '/rasa/logo.svg',
  logoAlt: appName,
  defaultTitle: appName,
  manifestName: appName,
  manifestShortName: 'Rasa',
}

export const getAppTitle = () => branding.defaultTitle
