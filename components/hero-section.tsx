'use client'

import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { type TranslationKeys } from '@/lib/i18n/translations'

interface HeroSectionProps {
  translations: TranslationKeys
}

export function HeroSection({ translations }: HeroSectionProps) {
  const t = translations

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 gradient-bg opacity-20" />
      
      {/* 3D floating orbs */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 left-20 w-72 h-72 bg-purple-500 rounded-full blur-3xl opacity-30"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500 rounded-full blur-3xl opacity-30"
          animate={{
            x: [0, -100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/3 w-64 h-64 bg-pink-500 rounded-full blur-3xl opacity-20"
          animate={{
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Hero content */}
      <div className="w-full px-6 sm:px-12 lg:px-24">
        <div className="text-center relative z-10">
        <motion.h1
          className="text-7xl md:text-9xl font-bold mb-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="text-gradient">{t.hero.title}</span>
        </motion.h1>
        
        <motion.p
          className="text-2xl md:text-4xl font-bold mb-3 text-black dark:text-gray-300"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {t.hero.subtitle}
        </motion.p>
        
        <motion.p
          className="text-xl md:text-2xl text-black dark:text-gray-400 mb-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {t.hero.description}
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <a href="#services" className="inline-block w-full sm:w-auto">
            <button className="w-full sm:w-auto min-w-[180px] py-4 px-8 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-full text-lg font-medium transition-all duration-200 shadow-xl hover:shadow-2xl hover:scale-[1.02] active:scale-[0.98]">
              {t.hero.cta?.start || '시작하기'}
            </button>
          </a>
          {/* <button className="w-full sm:w-auto min-w-[180px] py-4 px-8 bg-white dark:bg-gray-900 text-black dark:text-white rounded-full text-lg font-medium transition-all duration-200 shadow-xl hover:shadow-2xl hover:scale-[1.02] active:scale-[0.98] border-2 border-gray-200 dark:border-gray-700">
            {t.hero.cta?.learn || '더 알아보기'}
          </button> */}
        </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown size={32} className="text-gray-800 dark:text-gray-400" />
      </motion.div>
    </section>
  )
}