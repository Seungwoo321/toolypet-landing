'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { translations, type Locale } from '@/lib/i18n/translations'
import { useParams } from 'next/navigation'

export function RoadmapSection() {
  const params = useParams()
  const locale = params.locale as Locale
  const t = translations[locale] as typeof translations.ko
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], [100, -100])
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0])

  const phases = [
    {
      phase: `${t.roadmap.phase} 1`,
      date: "2025 Q3",
      title: "Developer Hub Launched", 
      items: ["DevTools Suite", "CSS Design Studio", "SEO Analyzer", "Security Tools"],
      status: "completed"
    },
    {
      phase: `${t.roadmap.phase} 2`, 
      date: "2025 Q4",
      title: "Creative Hub & Basic Tools (예정)",
      items: ["Image Toolbox", "PDF Master", "Unit Converter", "Date & Time Calculator"],
      status: "upcoming"
    },
    {
      phase: `${t.roadmap.phase} 3`,
      date: "2026 Q1", 
      title: "Korea Hub Launch",
      items: ["급여 계산기", "세금 계산기", "부동산 계산기", "4대보험 계산기"],
      status: "upcoming"
    },
    {
      phase: `${t.roadmap.phase} 4`,
      date: "2026 Q2",
      title: "Business & Finance Hub",
      items: ["Finance Calculator Pro", "Business Tools Suite", "Invoice Generator", "Currency Converter"],
      status: "upcoming"
    }
  ]

  return (
    <section ref={sectionRef} id="roadmap" className="min-h-screen flex items-center py-20 overflow-hidden">
      <div className="w-full px-6 sm:px-12 lg:px-24">
        <motion.div style={{ y, opacity }}>
        <h2 className="text-5xl md:text-6xl font-bold text-center mb-16">
          <span className="text-gradient">{t.roadmap.title}</span>
        </h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 to-purple-500" />

          {/* Timeline items */}
          {phases.map((phase, index) => (
            <motion.div
              key={phase.phase}
              className={`relative flex items-center mb-16 ${
                index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
              }`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              {/* Content */}
              <div className={`w-1/2 ${index % 2 === 0 ? 'pr-12 text-right' : 'pl-12'}`}>
                <motion.div
                  className="bg-gradient-to-br from-blue-50 to-purple-50 dark:bg-gradient-to-br dark:from-gray-800 dark:to-gray-900 p-8 rounded-2xl shadow-xl"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <span className={`inline-block px-4 py-2 rounded-full text-sm font-medium mb-4 ${
                    phase.status === 'completed' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' :
                    phase.status === 'in-progress' ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200' :
                    'bg-purple-100 text-purple-800 dark:bg-gray-800 dark:text-gray-200'
                  }`}>
                    {phase.date} - {phase.status === 'completed' ? t.roadmap.status.completed : phase.status === 'in-progress' ? t.roadmap.status.inProgress : t.roadmap.status.upcoming}
                  </span>
                  <h3 className="text-2xl font-bold mb-4">{phase.phase}: {phase.title}</h3>
                  <ul className="space-y-2">
                    {phase.items.map(item => (
                      <li key={item} className="text-black dark:text-gray-400">
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>

              {/* Timeline dot */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-blue-500 rounded-full border-4 border-white dark:border-gray-900 z-10" />
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
          {t.roadmap.disclaimer}
        </motion.p>
        </motion.div>
      </div>
    </section>
  )
}