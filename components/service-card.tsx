'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface ServiceCardProps {
  id: string
  title: string
  description: string
  icon: ReactNode
  color: string
  delay: number
  viewMoreText: string
}

export function ServiceCard({ id, title, description, icon, color, delay, viewMoreText }: ServiceCardProps) {
  return (
    <motion.div
      className="relative group"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay }}
      viewport={{ once: true }}
    >
      <div className="h-full bg-white dark:bg-blue-950/20 backdrop-blur rounded-3xl shadow-lg hover:shadow-2xl dark:hover:shadow-blue-900/30 transition-all duration-300 border border-blue-100 dark:border-blue-800/50 group-hover:scale-[1.02] p-6 sm:p-8 group-hover:border-blue-200 dark:group-hover:border-blue-700 touch-manipulation">
        {/* Icon with enhanced styling */}
        <div className={`w-18 h-18 rounded-2xl bg-gradient-to-br ${color} p-4 flex items-center justify-center shadow-lg group-hover:shadow-xl mb-6 transition-all duration-300`}>
          <div className="text-white dark:text-gray-100 scale-110">
            {icon}
          </div>
        </div>
        
        {/* Title with better contrast */}
        <h3 className="text-xl font-bold text-black dark:text-gray-100 mb-4 transition-colors">{title}</h3>
        
        {/* Description with better readability */}
        <p className="text-base text-black dark:text-gray-300 leading-relaxed mb-8">{description}</p>
        
        {/* Enhanced link with better styling */}
        <div className="flex items-center justify-between">
          <a href={`#showcase-${id}`} className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 font-semibold group-hover:gap-3 group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-all touch-manipulation py-2 -ml-2 pl-2 pr-4 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-950/30">
            <span>{viewMoreText}</span>
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </a>
          {/* Subtle accent line */}
          <div className={`w-8 h-1 rounded-full bg-gradient-to-r ${color} opacity-60 group-hover:opacity-100 transition-opacity`}></div>
        </div>
      </div>
    </motion.div>
  )
}