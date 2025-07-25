import type { Metadata } from 'next'
import { type Locale } from '@/lib/i18n/translations'
import { legalTranslations } from '@/lib/i18n/legal-translations'

export const metadata: Metadata = {
  title: '이용약관 - Toolypet',
  description: 'Toolypet 서비스 이용약관입니다.',
}

export default async function Terms({
  params,
}: {
  params: Promise<{ locale: Locale }>
}) {
  const { locale } = await params
  const t = legalTranslations[locale] || legalTranslations.ko

  return (
    <main className="min-h-screen max-w-4xl mx-auto p-8">
      <h1 className="text-4xl font-bold mb-8">{t.terms.title}</h1>
      <p className="text-gray-600 dark:text-gray-400 mb-8">{t.terms.lastUpdated}</p>
      
      <section className="space-y-6">
        <div>
          <h2 className="text-2xl font-semibold mb-3">{t.terms.sections.intro.title}</h2>
          <p className="text-black dark:text-gray-200">{t.terms.sections.intro.content}</p>
        </div>
        
        <div>
          <h2 className="text-2xl font-semibold mb-3">{t.terms.sections.usage.title}</h2>
          <ul className="list-disc list-inside space-y-1">
            {t.terms.sections.usage.items.map((item, index) => (
              <li key={index} className="text-black dark:text-gray-200">{item}</li>
            ))}
          </ul>
        </div>
        
        <div>
          <h2 className="text-2xl font-semibold mb-3">{t.terms.sections.restrictions.title}</h2>
          <p className="text-black dark:text-gray-200">{t.terms.sections.restrictions.intro}</p>
          <ul className="list-disc list-inside space-y-1 mt-2">
            {t.terms.sections.restrictions.items.map((item, index) => (
              <li key={index} className="text-black dark:text-gray-200">{item}</li>
            ))}
          </ul>
        </div>
        
        <div>
          <h2 className="text-2xl font-semibold mb-3">{t.terms.sections.disclaimer.title}</h2>
          <ul className="list-disc list-inside space-y-1">
            {t.terms.sections.disclaimer.items.map((item, index) => (
              <li key={index} className="text-black dark:text-gray-200">{item}</li>
            ))}
          </ul>
        </div>
        
        <div>
          <h2 className="text-2xl font-semibold mb-3">{t.terms.sections.ads.title}</h2>
          <p className="text-black dark:text-gray-200">{t.terms.sections.ads.content}</p>
        </div>
        
        <div>
          <h2 className="text-2xl font-semibold mb-3">{t.terms.sections.contact.title}</h2>
          <p className="text-black dark:text-gray-200">
            {t.terms.sections.contact.content}
            <a href={`mailto:${t.terms.sections.contact.email}`} className="text-blue-600 dark:text-blue-400 hover:underline">
              {t.terms.sections.contact.email}
            </a>
            {t.terms.sections.contact.suffix}
          </p>
        </div>
      </section>
    </main>
  )
}