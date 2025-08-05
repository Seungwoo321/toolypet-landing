import type { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'

type Locale = 'ko' | 'en' | 'ja' | 'zh' | 'es' | 'pt' | 'hi' | 'de'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>
}): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'privacy' })
  
  return {
    title: `${t('title')} - Toolypet`,
    description: t('sections.intro.content'),
  }
}

export default async function PrivacyPolicy({
  params,
}: {
  params: Promise<{ locale: Locale }>
}) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'privacy' })

  return (
    <main className="min-h-screen max-w-4xl mx-auto p-8 pt-24">
      <h1 className="text-4xl font-bold mb-8">{t('title')}</h1>
      <p className="text-gray-600 dark:text-gray-400 mb-8">{t('lastUpdated')}</p>
      
      <section className="space-y-6">
        <div>
          <h2 className="text-2xl font-semibold mb-3">{t('sections.intro.title')}</h2>
          <p className="text-black dark:text-gray-200">{t('sections.intro.content')}</p>
        </div>
        
        <div>
          <h2 className="text-2xl font-semibold mb-3">{t('sections.analytics.title')}</h2>
          <p className="text-black dark:text-gray-200 mb-2">{t('sections.analytics.content')}</p>
          <ul className="list-disc list-inside space-y-1">
            <li className="text-black dark:text-gray-200">{t('sections.analytics.items.0')}</li>
            <li className="text-black dark:text-gray-200">{t('sections.analytics.items.1')}</li>
          </ul>
          <p className="text-gray-600 dark:text-gray-400 mt-2 text-sm">{t('sections.analytics.note')}</p>
        </div>
        
        <div>
          <h2 className="text-2xl font-semibold mb-3">{t('sections.cookies.title')}</h2>
          <p className="text-black dark:text-gray-200 mb-2">{t('sections.cookies.content')}</p>
          <ul className="list-disc list-inside space-y-1">
            <li className="text-black dark:text-gray-200">{t('sections.cookies.items.0')}</li>
            <li className="text-black dark:text-gray-200">{t('sections.cookies.items.1')}</li>
            <li className="text-black dark:text-gray-200">{t('sections.cookies.items.2')}</li>
          </ul>
        </div>
        
        <div>
          <h2 className="text-2xl font-semibold mb-3">{t('sections.security.title')}</h2>
          <p className="text-black dark:text-gray-200">{t('sections.security.content')}</p>
        </div>
        
        <div>
          <h2 className="text-2xl font-semibold mb-3">{t('sections.rights.title')}</h2>
          <p className="text-black dark:text-gray-200">{t('sections.rights.content')}</p>
        </div>
        
        <div>
          <h2 className="text-2xl font-semibold mb-3">{t('sections.contact.title')}</h2>
          <p className="text-black dark:text-gray-200">
            {t('sections.contact.content')}
            <a href={`mailto:${t('sections.contact.email')}`} className="text-blue-600 dark:text-blue-400 hover:underline">
              {t('sections.contact.email')}
            </a>
            {t('sections.contact.suffix')}
          </p>
        </div>
      </section>
    </main>
  )
}