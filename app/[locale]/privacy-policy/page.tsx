import type { Metadata } from 'next'
import { type Locale } from '@/lib/i18n/translations'
import { legalTranslations } from '@/lib/i18n/legal-translations'

export const metadata: Metadata = {
  title: '개인정보처리방침 - Toolypet',
  description: 'Toolypet의 개인정보처리방침입니다.',
}

export default async function PrivacyPolicy({
  params,
}: {
  params: Promise<{ locale: Locale }>
}) {
  const { locale } = await params
  const t = legalTranslations[locale] || legalTranslations.ko

  return (
    <main className="min-h-screen max-w-4xl mx-auto p-8">
      <h1 className="text-4xl font-bold mb-8">{t.privacy.title}</h1>
      <p className="text-gray-600 dark:text-gray-400 mb-8">{t.privacy.lastUpdated}</p>
      
      <section className="space-y-6">
        <div>
          <h2 className="text-2xl font-semibold mb-3">{t.privacy.sections.intro.title}</h2>
          <p className="text-black dark:text-gray-200">{t.privacy.sections.intro.content}</p>
        </div>
        
        <div>
          <h2 className="text-2xl font-semibold mb-3">{t.privacy.sections.analytics.title}</h2>
          <p className="text-black dark:text-gray-200 mb-2">{t.privacy.sections.analytics.content}</p>
          <ul className="list-disc list-inside space-y-1">
            {t.privacy.sections.analytics.items.map((item, index) => (
              <li key={index} className="text-black dark:text-gray-200">{item}</li>
            ))}
          </ul>
          <p className="text-gray-600 dark:text-gray-400 mt-2 text-sm">{t.privacy.sections.analytics.note}</p>
        </div>
        
        <div>
          <h2 className="text-2xl font-semibold mb-3">{t.privacy.sections.cookies.title}</h2>
          <p className="text-black dark:text-gray-200 mb-2">{t.privacy.sections.cookies.content}</p>
          <ul className="list-disc list-inside space-y-1">
            {t.privacy.sections.cookies.items.map((item, index) => (
              <li key={index} className="text-black dark:text-gray-200">{item}</li>
            ))}
          </ul>
        </div>
        
        <div>
          <h2 className="text-2xl font-semibold mb-3">{t.privacy.sections.security.title}</h2>
          <p className="text-black dark:text-gray-200">{t.privacy.sections.security.content}</p>
        </div>
        
        <div>
          <h2 className="text-2xl font-semibold mb-3">{t.privacy.sections.rights.title}</h2>
          <p className="text-black dark:text-gray-200">{t.privacy.sections.rights.content}</p>
        </div>
        
        <div>
          <h2 className="text-2xl font-semibold mb-3">{t.privacy.sections.contact.title}</h2>
          <p className="text-black dark:text-gray-200">
            {t.privacy.sections.contact.content}
            <a href={`mailto:${t.privacy.sections.contact.email}`} className="text-blue-600 dark:text-blue-400 hover:underline">
              {t.privacy.sections.contact.email}
            </a>
            {t.privacy.sections.contact.suffix}
          </p>
        </div>
      </section>
    </main>
  )
}