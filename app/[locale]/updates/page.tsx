import type { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'

type Locale = 'ko' | 'en' | 'ja' | 'zh' | 'es' | 'pt' | 'hi' | 'de'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>
}): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'updates' })
  
  return {
    title: `${t('title')} - Toolypet`,
    description: t('completed.title'),
  }
}

export default async function Updates({
  params,
}: {
  params: Promise<{ locale: Locale }>
}) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'updates' })

  return (
    <main className="min-h-screen max-w-4xl mx-auto p-8 pt-24">
      <h1 className="text-4xl font-bold mb-8">{t('title')}</h1>
      
      <section className="space-y-8">
        <div className="border-l-4 border-blue-500 pl-6">
          <h2 className="text-2xl font-semibold mb-2">{t('completed.date')}</h2>
          <h3 className="text-lg font-medium mb-2">{t('completed.title')}</h3>
          <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-400">
            <li>{t('completed.items.0')}</li>
            <li>{t('completed.items.1')}</li>
            <li>{t('completed.items.2')}</li>
            <li>{t('completed.items.3')}</li>
            <li>{t('completed.items.4')}</li>
          </ul>
        </div>
        
        <div className="border-l-4 border-gray-300 pl-6">
          <h2 className="text-2xl font-semibold mb-2">{t('upcoming.title')}</h2>
          <div className="space-y-4 mt-4">
            <div>
              <h3 className="text-lg font-medium">{t('upcoming.phases.0.date')}</h3>
              <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-400">
                <li>{t('upcoming.phases.0.items.0')}</li>
                <li>{t('upcoming.phases.0.items.1')}</li>
                <li>{t('upcoming.phases.0.items.2')}</li>
                <li>{t('upcoming.phases.0.items.3')}</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-medium">{t('upcoming.phases.1.date')}</h3>
              <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-400">
                <li>{t('upcoming.phases.1.items.0')}</li>
                <li>{t('upcoming.phases.1.items.1')}</li>
                <li>{t('upcoming.phases.1.items.2')}</li>
                <li>{t('upcoming.phases.1.items.3')}</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-medium">{t('upcoming.phases.2.date')}</h3>
              <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-400">
                <li>{t('upcoming.phases.2.items.0')}</li>
                <li>{t('upcoming.phases.2.items.1')}</li>
                <li>{t('upcoming.phases.2.items.2')}</li>
                <li>{t('upcoming.phases.2.items.3')}</li>
              </ul>
            </div>
            
            <div className="mt-8 p-4 bg-gray-100 dark:bg-gray-800 rounded-lg">
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {t('upcoming.disclaimer')}
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}