import { getRequestConfig } from 'next-intl/server'
import { notFound } from 'next/navigation'

const locales = ['ko', 'en', 'ja', 'zh', 'es'] as const

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
      default:
        notFound()
    }
    
    return {
      messages
    }
  } catch (error) {
    console.error(`Failed to load messages for locale ${locale}:`, error)
    notFound()
  }
})