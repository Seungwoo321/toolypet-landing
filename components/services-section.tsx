'use client'

import { ServiceCard } from './service-card'
import { Code2, Palette, Search, Shield } from 'lucide-react'
import { type TranslationKeys } from '@/lib/i18n/translations'

interface ServicesSectionProps {
  translations: TranslationKeys
}

export function ServicesSection({ translations }: ServicesSectionProps) {
  const t = translations

  const services = [
    {
      id: 'devtools',
      title: t.services.devtools.title,
      description: t.services.devtools.description,
      icon: <Code2 size={32} />,
      color: 'from-blue-600 to-purple-700 dark:from-blue-400 dark:to-purple-500',
    },
    {
      id: 'css',
      title: t.services.css.title,
      description: t.services.css.description,
      icon: <Palette size={32} />,
      color: 'from-pink-600 to-red-600 dark:from-pink-400 dark:to-red-400',
    },
    {
      id: 'seo',
      title: t.services.seo.title,
      description: t.services.seo.description,
      icon: <Search size={32} />,
      color: 'from-green-600 to-teal-600 dark:from-green-400 dark:to-teal-400',
    },
    {
      id: 'security',
      title: t.services.security.title,
      description: t.services.security.description,
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
            <span className="text-gradient">Our Services</span>
          </h2>
          <p className="text-xl text-gray-700 dark:text-gray-400 max-w-3xl mx-auto">
            개발과 디자인 작업을 위한 강력한 도구들을 만나보세요. 모든 도구는 무료로 사용할 수 있습니다.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              {...service}
              delay={index * 0.1}
              viewMoreText={t.services.viewMore}
            />
          ))}
        </div>
        </div>
      </div>
    </section>
  )
}