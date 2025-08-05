import type { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'

type Locale = 'ko' | 'en' | 'ja' | 'zh' | 'es' | 'pt' | 'hi' | 'de'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>
}): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'terms' })
  
  return {
    title: `${t('title')} - Toolypet`,
    description: t('sections.intro.content'),
  }
}

export default async function Terms({
  params,
}: {
  params: Promise<{ locale: Locale }>
}) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'terms' })

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
          <h2 className="text-2xl font-semibold mb-3">{t('sections.usage.title')}</h2>
          <ul className="list-disc list-inside space-y-1">
            <li className="text-black dark:text-gray-200">{t('sections.usage.items.0')}</li>
            <li className="text-black dark:text-gray-200">{t('sections.usage.items.1')}</li>
            <li className="text-black dark:text-gray-200">{t('sections.usage.items.2')}</li>
          </ul>
        </div>
        
        <div>
          <h2 className="text-2xl font-semibold mb-3">{t('sections.restrictions.title')}</h2>
          <p className="text-black dark:text-gray-200">{t('sections.restrictions.intro')}</p>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li className="text-black dark:text-gray-200">{t('sections.restrictions.items.0')}</li>
            <li className="text-black dark:text-gray-200">{t('sections.restrictions.items.1')}</li>
            <li className="text-black dark:text-gray-200">{t('sections.restrictions.items.2')}</li>
          </ul>
        </div>
        
        <div>
          <h2 className="text-2xl font-semibold mb-3">{t('sections.disclaimer.title')}</h2>
          <ul className="list-disc list-inside space-y-1">
            <li className="text-black dark:text-gray-200">{t('sections.disclaimer.items.0')}</li>
            <li className="text-black dark:text-gray-200">{t('sections.disclaimer.items.1')}</li>
            <li className="text-black dark:text-gray-200">{t('sections.disclaimer.items.2')}</li>
          </ul>
        </div>
        
        <div>
          <h2 className="text-2xl font-semibold mb-3">{t('sections.ads.title')}</h2>
          <p className="text-black dark:text-gray-200">{t('sections.ads.content')}</p>
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