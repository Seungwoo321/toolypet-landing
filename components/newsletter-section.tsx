'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

export function NewsletterSection() {
  const [email, setEmail] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle newsletter signup
    console.log('Newsletter signup:', email)
  }

  return (
    <section className="py-24 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            새로운 도구 출시 소식을 받아보세요
          </h2>
          <p className="text-xl mb-8 opacity-90">
            매달 추가되는 새로운 도구와 기능 업데이트를 이메일로 받아보세요.
          </p>
          
          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex gap-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="이메일 주소를 입력하세요"
                className="flex-1 px-6 py-4 rounded-full bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-white/30"
                required
              />
              <motion.button
                type="submit"
                className="px-8 py-4 bg-white text-blue-600 rounded-full font-medium hover:bg-gray-100 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                구독하기
              </motion.button>
            </div>
          </form>
          
          <p className="mt-4 text-sm opacity-70">
            스팸 메일은 절대 보내지 않습니다. 언제든지 구독을 취소할 수 있습니다.
          </p>
        </motion.div>
        </div>
      </div>
    </section>
  )
}