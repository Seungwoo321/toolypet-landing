import { getRequestConfig } from 'next-intl/server'
import { notFound } from 'next/navigation'

const locales = ['ko', 'en', 'ja', 'zh', 'es', 'pt', 'hi', 'de'] as const

export default getRequestConfig(async ({ locale }) => {
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale as any)) {
    notFound()
  }

  try {
    let messages
    
    switch (locale) {
      case 'ko':
        messages = (await import('../lib/i18n/locales/ko.json')).default
        break
      case 'en':
        messages = (await import('../lib/i18n/locales/en.json')).default
        break
      case 'ja':
        messages = (await import('../lib/i18n/locales/ja.json')).default
        break
      case 'zh':
        messages = (await import('../lib/i18n/locales/zh.json')).default
        break
      case 'es':
        messages = (await import('../lib/i18n/locales/es.json')).default
        break
      case 'pt':
        messages = (await import('../lib/i18n/locales/pt.json')).default
        break
      case 'hi':
        messages = (await import('../lib/i18n/locales/hi.json')).default
        break
      case 'de':
        messages = (await import('../lib/i18n/locales/de.json')).default
        break
      default:
        notFound()
    }
    
    return {
      locale,
      messages
    }
  } catch (error) {
    console.error(`Failed to load messages for locale ${locale}:`, error)
    notFound()
  }
})