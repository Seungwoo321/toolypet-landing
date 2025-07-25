'use client'

import { motion } from 'framer-motion'
import { Zap, Globe, Shield, Sparkles } from 'lucide-react'

export function FeaturesSection() {
  const features = [
    {
      icon: <Zap size={32} />,
      title: '빠른 속도',
      description: '모든 도구는 최적화되어 즉시 실행됩니다. 기다림 없이 바로 사용하세요.',
    },
    {
      icon: <Globe size={32} />,
      title: '어디서나 접근',
      description: '웹 기반 도구로 설치 없이 브라우저에서 바로 사용 가능합니다.',
    },
    {
      icon: <Shield size={32} />,
      title: '안전한 처리',
      description: '모든 데이터는 브라우저에서 처리되어 서버로 전송되지 않습니다.',
    },
    {
      icon: <Sparkles size={32} />,
      title: '무료 사용',
      description: '모든 기본 기능은 무료로 제공됩니다. 제한 없이 사용하세요.',
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
            왜 <span className="text-gradient">Toolypet</span>인가?
          </h2>
          <p className="text-xl text-gray-700 dark:text-gray-400">
            개발자와 디자이너를 위해 설계된 특별한 기능들
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