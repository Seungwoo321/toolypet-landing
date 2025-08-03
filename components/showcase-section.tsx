'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { toolsData } from '@/lib/tools-data'
import { type TranslationKeys } from '@/lib/i18n/translations'
import { Code2, Palette, Shield, Search, ArrowRight } from 'lucide-react'

interface ShowcaseSectionProps {
  translations: TranslationKeys
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

const categoryInfo = {
  css: {
    title: 'CSS Design Studio',
    description: '실시간 프리뷰와 함께하는 CSS 디자인의 새로운 경험. 그라디언트, 애니메이션, 레이아웃 등 모든 CSS 작업을 시각적으로 처리하세요.',
    features: ['실시간 프리뷰', '코드 자동 생성', '크로스 브라우저 지원'],
    url: 'https://css.toolypet.com',
  },
  devtools: {
    title: 'DevTools Suite',
    description: '개발 생산성을 극대화하는 전문 도구 모음. JSON 포맷터부터 정규식 테스터까지, 개발에 필요한 모든 도구를 한 곳에서.',
    features: ['빠른 변환', '오프라인 지원', '개발자 친화적'],
    url: 'https://devtools.toolypet.com',
  },
  security: {
    title: 'Security Tools',
    description: '웹 보안을 위한 필수 도구 모음. 비밀번호 생성, 암호화, 보안 헤더 검사 등 보안 강화를 위한 모든 것.',
    features: ['강력한 암호화', '보안 검증', '취약점 분석'],
    url: 'https://security.toolypet.com',
  },
  seo: {
    title: 'SEO Tools Center',
    description: '검색 엔진 최적화를 위한 완벽한 솔루션. 메타 태그, 사이트맵, 구조화된 데이터까지 SEO의 모든 것.',
    features: ['SEO 분석', '자동 최적화', '실시간 미리보기'],
    url: 'https://seo.toolypet.com',
  },
}

export function ShowcaseSection({ translations, locale }: ShowcaseSectionProps) {
  const t = translations.allTools
  const showcaseT = translations.showcase

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
            34개의 전문 도구를 제공하는 4개의 통합 서비스
          </p>
        </motion.div>

        <div className="space-y-32">
          {toolsData.map((category, categoryIndex) => {
            const info = categoryInfo[category.id as keyof typeof categoryInfo]
            const color = categoryColors[category.id as keyof typeof categoryColors]
            const icon = categoryIcons[category.id as keyof typeof categoryIcons]
            const isEven = categoryIndex % 2 === 0

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
                      {showcaseT[category.id as keyof typeof showcaseT]?.title || info.title}
                    </h3>
                    
                    <p className="text-lg md:text-xl text-gray-700 dark:text-gray-400 mb-8 leading-relaxed">
                      {info.description}
                    </p>
                    
                    {/* Features */}
                    <ul className="space-y-3 mb-10">
                      {info.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-3">
                          <div className={`w-6 h-6 rounded-full bg-gradient-to-r ${color} flex items-center justify-center`}>
                            <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <div className="flex flex-wrap items-center gap-6">
                      <div className="text-lg">
                        <span className="text-5xl font-bold text-gradient">{category.tools.length}</span>
                        <span className="ml-2 text-gray-600 dark:text-gray-400">개의 전문 도구</span>
                      </div>
                      <a 
                        href={info.url} 
                        className={`inline-flex items-center gap-2 px-8 py-4 rounded-lg font-medium bg-gradient-to-r ${color} text-white hover:shadow-lg transition-all hover:scale-105 text-lg`}
                      >
                        {showcaseT[category.id as keyof typeof showcaseT]?.link || `${info.url.replace('https://', '')} 방문하기`}
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
                                {t.tools[tool.nameKey as keyof typeof t.tools]}
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
            Toolypet은 총 <span className="font-bold text-gray-900 dark:text-white">34개</span>의 무료 온라인 도구를 제공합니다
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-500">
            모든 도구는 브라우저에서 바로 사용 가능하며, 설치가 필요 없습니다
          </p>
        </motion.div>
      </div>
    </section>
  )
}