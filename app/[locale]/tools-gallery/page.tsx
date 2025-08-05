import type { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
import { ExternalLink, CheckCircle, Zap, Shield, Smartphone } from 'lucide-react'

type Locale = 'ko' | 'en' | 'ja' | 'zh' | 'es' | 'pt' | 'hi' | 'de'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>
}): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'toolsGallery' })
  
  return {
    title: `${t('title')} - Toolypet`,
    description: t('description'),
  }
}

export default async function ToolsGallery({
  params,
}: {
  params: Promise<{ locale: Locale }>
}) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'toolsGallery' })

  const services = [
    {
      key: 'devtools',
      icon: '🛠️',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      key: 'css', 
      icon: '🎨',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      key: 'seo',
      icon: '📈', 
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      key: 'security',
      icon: '🔒',
      gradient: 'from-red-500 to-orange-500'
    }
  ]

  return (
    <main className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative py-20">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900" />
        <div className="relative max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-6">
            {t('title')}
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-4 max-w-3xl mx-auto">
            {t('subtitle')}
          </p>
          <p className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
            {t('description')}
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service) => (
              <div
                key={service.key}
                className="group relative bg-white dark:bg-gray-900 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 dark:border-gray-700"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                <div className="relative p-8">
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center gap-4">
                      <div className={`text-4xl p-3 rounded-xl bg-gradient-to-br ${service.gradient} text-white shadow-lg`}>
                        {service.icon}
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                          {t(`services.${service.key}.title`)}
                        </h3>
                        <div className="flex items-center gap-3">
                          <span className="text-sm font-medium text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900/20 px-3 py-1 rounded-full">
                            {t(`services.${service.key}.status`)}
                          </span>
                          <span className="text-sm text-gray-500 dark:text-gray-400">
                            {t(`services.${service.key}.tools`)}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 dark:text-gray-300 mb-6 text-lg">
                    {t(`services.${service.key}.description`)}
                  </p>
                  
                  <a
                    href={t(`services.${service.key}.url`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r ${service.gradient} text-white font-semibold hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200`}
                  >
                    {t('cta.button')}
                    <ExternalLink size={18} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              {t('features.free.title')} & {t('features.noSignup.title')}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              {t('features.free.subtitle')} • {t('features.noSignup.subtitle')}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center text-white text-2xl group-hover:scale-110 transition-transform duration-200">
                <CheckCircle size={32} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {t('features.free.title')}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {t('features.free.subtitle')}
              </p>
            </div>
            
            <div className="text-center group">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center text-white text-2xl group-hover:scale-110 transition-transform duration-200">
                <Zap size={32} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {t('features.noSignup.title')}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {t('features.noSignup.subtitle')}
              </p>
            </div>
            
            <div className="text-center group">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center text-white text-2xl group-hover:scale-110 transition-transform duration-200">
                <Smartphone size={32} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {t('features.responsive.title')}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {t('features.responsive.subtitle')}
              </p>
            </div>
            
            <div className="text-center group">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center text-white text-2xl group-hover:scale-110 transition-transform duration-200">
                <Shield size={32} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {t('features.openSource.title')}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {t('features.openSource.subtitle')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {t('cta.title')}
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            {t('cta.subtitle')}
          </p>
          <a
            href={`/${locale}#services`}
            className="inline-flex items-center gap-3 px-8 py-4 bg-white text-purple-600 rounded-2xl font-bold text-lg hover:bg-gray-50 transform hover:-translate-y-1 transition-all duration-200 shadow-lg"
          >
            {t('cta.button')}
            <ExternalLink size={20} />
          </a>
        </div>
      </section>
    </main>
  )
}