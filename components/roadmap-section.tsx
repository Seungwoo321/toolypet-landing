'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { useTranslations } from 'next-intl'

export function RoadmapSection() {
  const t = useTranslations('roadmap')
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], [100, -100])
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0])

  const phases = [
    {
      phase: `${t('phase')} 1`,
      date: "2025 Q3",
      title: "Developer Hub Launched", 
      items: ["DevTools Suite", "CSS Design Studio", "SEO Analyzer", "Security Tools"],
      status: "completed"
    },
    {
      phase: `${t('phase')} 2`, 
      date: "2025 Q4",
      title: "Creative Hub & Basic Tools (예정)",
      items: ["Image Toolbox", "PDF Master", "Unit Converter", "Date & Time Calculator"],
      status: "upcoming"
    },
    {
      phase: `${t('phase')} 3`,
      date: "2026 Q1", 
      title: "Korea Hub Launch",
      items: ["급여 계산기", "세금 계산기", "부동산 계산기", "4대보험 계산기"],
      status: "upcoming"
    },
    {
      phase: `${t('phase')} 4`,
      date: "2026 Q2",
      title: "Business & Finance Hub",
      items: ["Finance Calculator Pro", "Business Tools Suite", "Invoice Generator", "Currency Converter"],
      status: "upcoming"
    }
  ]

  return (
    <section ref={sectionRef} id="roadmap" className="min-h-screen flex items-center py-12 md:py-20 overflow-hidden">
      <div className="w-full px-6 sm:px-12 lg:px-24">
        <motion.div style={{ y, opacity }}>
        <h2 className="text-5xl md:text-6xl font-bold text-center mb-16">
          <span className="text-gradient">{t('title')}</span>
        </h2>

        <div className="relative">
          {/* Timeline line - mobile left, desktop center */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 to-purple-500" />

          {/* Timeline items */}
          {phases.map((phase, index) => (
            <motion.div
              key={phase.phase}
              className={`relative flex items-center mb-12 md:mb-16 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              {/* Content - full width mobile, half width desktop */}
              <div className={`w-full md:w-1/2 pl-20 md:pl-0 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                <motion.div
                  className="bg-gradient-to-br from-blue-50 to-purple-50 dark:bg-gradient-to-br dark:from-gray-800 dark:to-gray-900 p-6 md:p-8 rounded-2xl shadow-xl"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <span className={`inline-block px-4 py-2 rounded-full text-sm font-medium mb-4 ${
                    phase.status === 'completed' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' :
                    phase.status === 'in-progress' ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200' :
                    'bg-purple-100 text-purple-800 dark:bg-gray-800 dark:text-gray-200'
                  }`}>
                    {phase.date} - {phase.status === 'completed' ? t('status.completed') : phase.status === 'in-progress' ? t('status.inProgress') : t('status.upcoming')}
                  </span>
                  <h3 className="text-xl md:text-2xl font-bold mb-4">{phase.phase}: {phase.title}</h3>
                  <ul className="space-y-2">
                    {phase.items.map(item => (
                      <li key={item} className="text-sm md:text-base text-black dark:text-gray-400">
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>

              {/* Timeline dot - mobile left, desktop center */}
              <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-6 h-6 bg-blue-500 rounded-full border-4 border-white dark:border-gray-900 z-10" />
            </motion.div>
          ))}
        </div>
        
        {/* Disclaimer */}
        <motion.p 
          className="text-center text-sm text-gray-600 dark:text-gray-400 mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
        >
          {t('disclaimer')}
        </motion.p>
        </motion.div>
      </div>
    </section>
  )
}