'use client'

import { ServiceCard } from './service-card'
import { Code2, Palette, Search, Shield } from 'lucide-react'
import { useTranslations } from 'next-intl'

export function ServicesSection() {
  const t = useTranslations('services')

  const services = [
    {
      id: 'devtools',
      title: t('devtools.title'),
      description: t('devtools.description'),
      icon: <Code2 size={32} />,
      color: 'from-blue-600 to-purple-700 dark:from-blue-400 dark:to-purple-500',
    },
    {
      id: 'css',
      title: t('css.title'),
      description: t('css.description'),
      icon: <Palette size={32} />,
      color: 'from-pink-600 to-red-600 dark:from-pink-400 dark:to-red-400',
    },
    {
      id: 'seo',
      title: t('seo.title'),
      description: t('seo.description'),
      icon: <Search size={32} />,
      color: 'from-green-600 to-teal-600 dark:from-green-400 dark:to-teal-400',
    },
    {
      id: 'security',
      title: t('security.title'),
      description: t('security.description'),
      icon: <Shield size={32} />,
      color: 'from-orange-600 to-yellow-600 dark:from-orange-400 dark:to-yellow-400',
    },
  ]

  return (
    <section id="services" className="min-h-screen flex items-center py-20">
      <div className="w-full px-6 sm:px-12 lg:px-24">
        <div className="w-full">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="text-gradient">{t('title')}</span>
          </h2>
          <p className="text-xl text-gray-700 dark:text-gray-400 max-w-3xl mx-auto">
            {t('subtitle')}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              {...service}
              delay={index * 0.1}
              viewMoreText={t('viewMore')}
            />
          ))}
        </div>
        </div>
      </div>
    </section>
  )
}