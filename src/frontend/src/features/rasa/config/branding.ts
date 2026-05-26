export type BrandingConfig = {
  appName: string
  displayName: string
  shortName: string
  logoPath: string
  logoDarkPath: string
  logoLightPath: string
  logoMonochromePath: string
  logoMarkPath: string
  loadingMarkPath: string
  logoAlt: string
  defaultTitle: string
  faviconPath: string
  favicon16Path: string
  favicon32Path: string
  appleTouchIconPath: string
  androidIcon192Path: string
  androidIcon512Path: string
  maskableIcon512Path: string
  socialPreviewPath: string
  manifestName?: string
  manifestShortName?: string
}

const FALLBACK_APP_NAME = 'Rasa Meet'
const VITE_APP_TITLE = import.meta.env.VITE_APP_TITLE?.trim()

const appName =
  VITE_APP_TITLE && VITE_APP_TITLE !== 'LaSuite Meet'
    ? VITE_APP_TITLE
    : FALLBACK_APP_NAME

export const branding: BrandingConfig = {
  appName,
  displayName: 'رسا',
  shortName: 'رسا',
  logoPath: '/rasa/logo.png',
  logoDarkPath: '/rasa/logo-dark.png',
  logoLightPath: '/rasa/logo-light.png',
  logoMonochromePath: '/rasa/logo-monochrome.png',
  logoMarkPath: '/rasa/logo-mark.png',
  loadingMarkPath: '/rasa/loading-mark.png',
  logoAlt: 'رسا',
  defaultTitle: appName,
  faviconPath: '/rasa/favicon-32x32.png',
  favicon16Path: '/rasa/favicon-16x16.png',
  favicon32Path: '/rasa/favicon-32x32.png',
  appleTouchIconPath: '/rasa/apple-touch-icon.png',
  androidIcon192Path: '/rasa/android-chrome-192x192.png',
  androidIcon512Path: '/rasa/android-chrome-512x512.png',
  maskableIcon512Path: '/rasa/maskable-icon-512x512.png',
  socialPreviewPath: '/rasa/social-preview-1200x630.png',
  manifestName: 'رسا',
  manifestShortName: 'رسا',
}

export const getAppTitle = () => branding.defaultTitle
