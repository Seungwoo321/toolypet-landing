import { getRequestConfig } from 'next-intl/server'
import { notFound } from 'next/navigation'

// Define locales array
export const locales = ['ko', 'en', 'ja', 'zh', 'es', 'pt', 'hi', 'de'] as const
export type Locale = typeof locales[number]

export default getRequestConfig(async ({ locale }) => {
  console.log('getRequestConfig called with locale:', locale)
  
  // Validate that the incoming `locale` parameter is valid
  if (!locale || !locales.includes(locale as Locale)) {
    console.log('Invalid or undefined locale, using default "ko"')
    const messages = (await import('./lib/i18n/locales/ko.json')).default
    return {
      locale: 'ko',
      messages
    }
  }
  
  const actualLocale = locale as Locale

  // Load messages using static imports
  let messages
  switch (actualLocale) {
    case 'ko':
      messages = (await import('./lib/i18n/locales/ko.json')).default
      break
    case 'en':
      messages = (await import('./lib/i18n/locales/en.json')).default
      break
    case 'ja':
      messages = (await import('./lib/i18n/locales/ja.json')).default
      break
    case 'zh':
      messages = (await import('./lib/i18n/locales/zh.json')).default
      break
    case 'es':
      messages = (await import('./lib/i18n/locales/es.json')).default
      break
    case 'pt':
      messages = (await import('./lib/i18n/locales/pt.json')).default
      break
    case 'hi':
      messages = (await import('./lib/i18n/locales/hi.json')).default
      break
    case 'de':
      messages = (await import('./lib/i18n/locales/de.json')).default
      break
    default:
      console.log('Unknown locale, returning Korean as fallback')
      messages = (await import('./lib/i18n/locales/ko.json')).default
  }

  console.log('Returning messages for locale:', actualLocale)
  return {
    locale: actualLocale,
    messages
  }
})