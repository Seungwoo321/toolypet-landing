import type { Metadata } from 'next'
import { type Locale } from '@/lib/i18n/translations'
import { updatesTranslations } from '@/lib/i18n/updates-translations'

export const metadata: Metadata = {
  title: '업데이트 - Toolypet',
  description: 'Toolypet 서비스의 최신 업데이트 내역입니다.',
}

export default async function Updates({
  params,
}: {
  params: Promise<{ locale: Locale }>
}) {
  const { locale } = await params
  const t = updatesTranslations[locale] || updatesTranslations.ko

  return (
    <main className="min-h-screen max-w-4xl mx-auto p-8">
      <h1 className="text-4xl font-bold mb-8">{t.title}</h1>
      
      <section className="space-y-8">
        <div className="border-l-4 border-blue-500 pl-6">
          <h2 className="text-2xl font-semibold mb-2">{t.completed.date}</h2>
          <h3 className="text-lg font-medium mb-2">{t.completed.title}</h3>
          <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-400">
            {t.completed.items.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
        
        <div className="border-l-4 border-gray-300 pl-6">
          <h2 className="text-2xl font-semibold mb-2">{t.upcoming.title}</h2>
          <div className="space-y-4 mt-4">
            {t.upcoming.phases.map((phase, phaseIndex) => (
              <div key={phaseIndex}>
                <h3 className="text-lg font-medium">{phase.date}</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-400">
                  {phase.items.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
            
            <div className="mt-8 p-4 bg-gray-100 dark:bg-gray-800 rounded-lg">
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {t.upcoming.disclaimer}
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}