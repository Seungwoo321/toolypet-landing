'use client'

import { motion } from 'framer-motion'
import { Zap, Globe, Shield, Sparkles } from 'lucide-react'
import { translations, type Locale } from '@/lib/i18n/translations'
import { useParams } from 'next/navigation'

export function FeaturesSection() {
  const params = useParams()
  const locale = params.locale as Locale
  const t = translations[locale] as typeof translations.ko
  
  const features = [
    {
      icon: <Zap size={32} />,
      title: t.features.speed.title,
      description: t.features.speed.description,
    },
    {
      icon: <Globe size={32} />,
      title: t.features.access.title,
      description: t.features.access.description,
    },
    {
      icon: <Shield size={32} />,
      title: t.features.security.title,
      description: t.features.security.description,
    },
    {
      icon: <Sparkles size={32} />,
      title: t.features.free.title,
      description: t.features.free.description,
    },
  ]

  return (
    <section className="min-h-screen flex items-center py-20">
      <div className="w-full px-6 sm:px-12 lg:px-24">
        <div className="w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {t.features.title.split('Toolypet').map((part, index) => 
              index === 0 ? part : (
                <span key={index}>
                  <span className="text-gradient">Toolypet</span>
                  {part}
                </span>
              )
            )}
          </h2>
          <p className="text-xl text-gray-700 dark:text-gray-400">
            {t.features.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <motion.div
                className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-blue-600 to-purple-700 dark:from-blue-400 dark:to-purple-500 rounded-2xl flex items-center justify-center text-white dark:text-gray-100"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {feature.icon}
              </motion.div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-700 dark:text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
        </div>
      </div>
    </section>
  )
}