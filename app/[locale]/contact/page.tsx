import type { Metadata } from 'next'
import { Mail } from 'lucide-react'
import { getTranslations } from 'next-intl/server'

type Locale = 'ko' | 'en' | 'ja' | 'zh' | 'es' | 'pt' | 'hi' | 'de'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>
}): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'contact' })
  
  return {
    title: `${t('title')} - Toolypet`,
    description: t('intro'),
  }
}

export default async function Contact({
  params,
}: {
  params: Promise<{ locale: Locale }>
}) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'contact' })
  return (
    <main className="min-h-screen max-w-4xl mx-auto p-8 pt-24">
      <h1 className="text-4xl font-bold mb-8">{t('title')}</h1>
      
      <section className="space-y-8">
        <div>
          <p className="text-lg mb-8 text-black dark:text-gray-200">
            {t('intro')}
          </p>
        </div>
        
        <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-center mb-6">
            <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center">
              <Mail className="w-8 h-8 text-blue-600 dark:text-blue-400" />
            </div>
          </div>
          
          <div className="text-center">
            <h2 className="text-2xl font-semibold mb-4 text-black dark:text-white">{t('emailTitle')}</h2>
            <a href={`mailto:${t('email')}`} className="text-2xl text-blue-600 dark:text-blue-400 hover:underline font-medium">
              {t('email')}
            </a>
            
            <div className="mt-8 space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <p>✓ {t('inquiryTypes.general')}</p>
              <p>✓ {t('inquiryTypes.support')}</p>
              <p>✓ {t('inquiryTypes.bug')}</p>
              <p>✓ {t('inquiryTypes.partner')}</p>
            </div>
          </div>
        </div>
        
        <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 p-6 rounded-lg border border-blue-100 dark:border-blue-800/50">
          <h3 className="text-lg font-semibold mb-3 text-black dark:text-white">{t('response.title')}</h3>
          <p className="mb-3 text-black dark:text-gray-200">
            {t('response.intro')}
          </p>
          <p className="mb-3 text-black dark:text-gray-200">
            {t('response.time')}
          </p>
          <p className="text-sm text-gray-700 dark:text-gray-300">
            • {t('response.note1')}<br/>
            • {t('response.note2')}<br/>
            • {t('response.note3')}
          </p>
        </div>
      </section>
    </main>
  )
}