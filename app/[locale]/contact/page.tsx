import type { Metadata } from 'next'
import { Mail } from 'lucide-react'
import { translations, type Locale } from '@/lib/i18n/translations'

export const metadata: Metadata = {
  title: '문의하기 - Toolypet',
  description: 'Toolypet 서비스에 대한 문의사항을 보내주세요.',
}

export default async function Contact({
  params,
}: {
  params: Promise<{ locale: Locale }>
}) {
  const { locale } = await params
  const t = translations[locale] as typeof translations.ko
  return (
    <main className="min-h-screen max-w-4xl mx-auto p-8">
      <h1 className="text-4xl font-bold mb-8">{t.contact.title}</h1>
      
      <section className="space-y-8">
        <div>
          <p className="text-lg mb-8 text-black dark:text-gray-200">
            {t.contact.intro}
          </p>
        </div>
        
        <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-center mb-6">
            <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center">
              <Mail className="w-8 h-8 text-blue-600 dark:text-blue-400" />
            </div>
          </div>
          
          <div className="text-center">
            <h2 className="text-2xl font-semibold mb-4 text-black dark:text-white">{t.contact.emailTitle}</h2>
            <a href={`mailto:${t.contact.email}`} className="text-2xl text-blue-600 dark:text-blue-400 hover:underline font-medium">
              {t.contact.email}
            </a>
            
            <div className="mt-8 space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <p>✓ {t.contact.inquiryTypes.general}</p>
              <p>✓ {t.contact.inquiryTypes.support}</p>
              <p>✓ {t.contact.inquiryTypes.bug}</p>
              <p>✓ {t.contact.inquiryTypes.partner}</p>
            </div>
          </div>
        </div>
        
        <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 p-6 rounded-lg border border-blue-100 dark:border-blue-800/50">
          <h3 className="text-lg font-semibold mb-3 text-black dark:text-white">{t.contact.response.title}</h3>
          <p className="mb-3 text-black dark:text-gray-200">
            {t.contact.response.intro}
          </p>
          <p className="mb-3 text-black dark:text-gray-200">
            {t.contact.response.time}
          </p>
          <p className="text-sm text-gray-700 dark:text-gray-300">
            • {t.contact.response.note1}<br/>
            • {t.contact.response.note2}<br/>
            • {t.contact.response.note3}
          </p>
        </div>
      </section>
    </main>
  )
}