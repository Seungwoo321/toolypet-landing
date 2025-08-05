'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { toolsData } from '@/lib/tools-data'
import { useTranslations } from 'next-intl'
import { Code2, Palette, Shield, Search, ArrowRight } from 'lucide-react'

interface ShowcaseSectionProps {
  locale: string
}

const categoryIcons = {
  css: <Palette size={40} />,
  devtools: <Code2 size={40} />,
  security: <Shield size={40} />,
  seo: <Search size={40} />,
}

const categoryColors = {
  css: 'from-pink-500 to-red-500',
  devtools: 'from-blue-500 to-purple-600',
  security: 'from-orange-500 to-yellow-500',
  seo: 'from-green-500 to-teal-500',
}

const categoryUrls = {
  css: process.env.NEXT_PUBLIC_CSS_URL || 'https://css.toolypet.com',
  devtools: process.env.NEXT_PUBLIC_DEVTOOLS_URL || 'https://devtools.toolypet.com',
  security: process.env.NEXT_PUBLIC_SECURITY_URL || 'https://security.toolypet.com',
  seo: process.env.NEXT_PUBLIC_SEO_URL || 'https://seo.toolypet.com',
}

export function ShowcaseSection({ locale }: ShowcaseSectionProps) {
  const t = useTranslations('allTools')
  const showcaseT = useTranslations('showcase')

  return (
    <section className="py-20">
      <div className="w-full px-6 sm:px-12 lg:px-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="text-gradient">Showcase</span>
          </h2>
          <p className="text-xl text-gray-700 dark:text-gray-400 max-w-3xl mx-auto">
            {showcaseT('subtitle')}
          </p>
        </motion.div>

        <div className="space-y-32">
          {toolsData.map((category, categoryIndex) => {
            const color = categoryColors[category.id as keyof typeof categoryColors]
            const icon = categoryIcons[category.id as keyof typeof categoryIcons]
            const isEven = categoryIndex % 2 === 0
            const url = categoryUrls[category.id as keyof typeof categoryUrls]

            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                viewport={{ once: true, margin: "-100px" }}
                className="relative"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                  {/* Service Info - 높이 증가 */}
                  <motion.div 
                    className={`flex flex-col justify-start ${isEven ? '' : 'lg:order-2'}`}
                    initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${color} text-white shadow-lg mb-8 self-start`}>
                      {icon}
                    </div>
                    
                    <h3 className="text-4xl md:text-5xl font-bold mb-6">
                      {showcaseT(`${category.id}.title`)}
                    </h3>
                    
                    <p className="text-lg md:text-xl text-gray-700 dark:text-gray-400 mb-8 leading-relaxed">
                      {showcaseT(`${category.id}.description`)}
                    </p>
                    
                    
                    <div className="flex flex-wrap items-center gap-6">
                      <div className="text-lg">
                        <span className="text-5xl font-bold text-gradient">{category.tools.length}</span>
                        <span className="ml-2 text-gray-600 dark:text-gray-400">{showcaseT('toolsCount')}</span>
                      </div>
                      <a 
                        href={url} 
                        className={`inline-flex items-center gap-2 px-8 py-4 rounded-lg font-medium bg-gradient-to-r ${color} text-white hover:shadow-lg transition-all hover:scale-105 text-lg`}
                      >
                        {showcaseT(`${category.id}.link`)}
                        <ArrowRight size={24} />
                      </a>
                    </div>
                  </motion.div>

                  {/* Compact Tools Grid */}
                  <motion.div 
                    className={`${isEven ? 'lg:order-2' : ''} lg:pt-[120px]`}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <div className={`grid ${category.id === 'css' ? 'grid-cols-3' : 'grid-cols-3'} gap-3`}>
                      {category.tools.map((tool, index) => (
                        <motion.div
                          key={tool.id}
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3, delay: index * 0.03 }}
                          viewport={{ once: true }}
                          whileHover={{ scale: 1.05 }}
                          className="group"
                        >
                          <Link
                            href={tool.path.replace('{locale}', locale)}
                            className="block bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-400 hover:shadow-lg transition-all h-full"
                          >
                            <div className="text-center">
                              <span className="text-2xl block mb-2 group-hover:scale-110 transition-transform">
                                {tool.icon}
                              </span>
                              <p className="text-xs font-medium text-gray-700 dark:text-gray-300 line-clamp-2">
                                {t(`tools.${tool.nameKey}`)}
                              </p>
                            </div>
                          </Link>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Bottom Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-32 pt-20 border-t border-gray-200 dark:border-gray-700"
        >
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-2">
            {showcaseT('totalTools')}
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-500">
            {showcaseT('browserNote')}
          </p>
        </motion.div>
      </div>
    </section>
  )
}