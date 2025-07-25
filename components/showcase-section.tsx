'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export function ShowcaseSection() {
  return (
    <section className="min-h-auto md:min-h-screen flex items-center py-12 sm:py-20" style={{ backgroundColor: 'var(--background)' }}>
      <div className="w-full px-6 sm:px-12 lg:px-24 py-10 sm:py-20">
        <div className="space-y-16 sm:space-y-32">
        <motion.div
          id="showcase-devtools"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-24"
        >
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-gradient">DevTools Suite</span>
            </h2>
            <p className="text-xl text-black dark:text-gray-400 mb-8">
              개발 생산성을 극대화하는 20개 이상의 전문 도구. JSON 포맷터, 코드 변환기, API 테스터 등 모든 개발 작업을 한 곳에서.
            </p>
            <a href="https://devtools.toolypet.com" className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium text-lg">
              devtools.toolypet.com 방문하기 →
            </a>
          </div>
          <motion.div
            className="relative h-64 sm:h-96 bg-gradient-to-br from-blue-500 to-purple-600 dark:from-blue-400 dark:to-purple-500 rounded-2xl overflow-hidden shadow-2xl"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-white dark:text-gray-100 text-4xl sm:text-6xl font-bold opacity-40">DevTools</div>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          id="showcase-css"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-24"
        >
          <motion.div
            className="relative h-64 sm:h-96 bg-gradient-to-br from-pink-500 to-red-500 dark:from-pink-400 dark:to-red-400 rounded-2xl overflow-hidden shadow-2xl order-2 md:order-1"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-white dark:text-gray-100 text-4xl sm:text-6xl font-bold opacity-40">CSS Studio</div>
            </div>
          </motion.div>
          <div className="order-1 md:order-2">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-gradient">CSS Design Studio</span>
            </h2>
            <p className="text-xl text-black dark:text-gray-400 mb-8">
              실시간 프리뷰와 함께하는 CSS 디자인의 새로운 경험. 그라디언트 생성기, 애니메이션 빌더, Flexbox 플레이그라운드 등.
            </p>
            <a href="https://css.toolypet.com" className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium text-lg">
              css.toolypet.com 방문하기 →
            </a>
          </div>
        </motion.div>

        <motion.div
          id="showcase-seo"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-24"
        >
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-gradient">SEO Tools Center</span>
            </h2>
            <p className="text-xl text-black dark:text-gray-400 mb-8">
              검색 엔진 최적화를 위한 완벽한 솔루션. 메타 태그 생성기, 사이트맵 빌더, 구조화된 데이터 검증기 등.
            </p>
            <a href="https://seo.toolypet.com" className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium text-lg">
              seo.toolypet.com 방문하기 →
            </a>
          </div>
          <motion.div
            className="relative h-64 sm:h-96 bg-gradient-to-br from-green-500 to-teal-500 dark:from-green-400 dark:to-teal-400 rounded-2xl overflow-hidden shadow-2xl"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-white dark:text-gray-100 text-4xl sm:text-6xl font-bold opacity-40">SEO Tools</div>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          id="showcase-security"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center"
        >
          <motion.div
            className="relative h-64 sm:h-96 bg-gradient-to-br from-orange-500 to-yellow-500 dark:from-orange-400 dark:to-yellow-400 rounded-2xl overflow-hidden shadow-2xl order-2 md:order-1"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-white dark:text-gray-100 text-4xl sm:text-6xl font-bold opacity-40">Security</div>
            </div>
          </motion.div>
          <div className="order-1 md:order-2">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-gradient">Security Tools</span>
            </h2>
            <p className="text-xl text-black dark:text-gray-400 mb-8">
              웹 보안을 위한 필수 도구 모음. 해시 생성기, 암호화/복호화, CSP 빌더, 보안 헤더 검사기 등.
            </p>
            <a href="https://security.toolypet.com" className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium text-lg">
              security.toolypet.com 방문하기 →
            </a>
          </div>
        </motion.div>
        </div>
      </div>
    </section>
  )
}