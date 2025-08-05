'use client'

import Link from 'next/link'
import { useTranslations } from 'next-intl'

type Locale = 'ko' | 'en' | 'ja' | 'zh' | 'es' | 'pt' | 'hi' | 'de'

export function Footer({ locale }: { locale: Locale }) {
  const heroT = useTranslations('hero')
  const footerT = useTranslations('footer')
  const cssUrl = process.env.NEXT_PUBLIC_CSS_URL || 'https://css.toolypet.com'
  const devtoolsUrl = process.env.NEXT_PUBLIC_DEVTOOLS_URL || 'https://devtools.toolypet.com'
  const securityUrl = process.env.NEXT_PUBLIC_SECURITY_URL || 'https://security.toolypet.com'
  const seoUrl = process.env.NEXT_PUBLIC_SEO_URL || 'https://seo.toolypet.com'

  return (
    <footer className="bg-gray-100 dark:bg-gray-900 py-20">
      <div className="w-full px-6 sm:px-12 lg:px-24">
        <div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 mb-12">
          <div>
            <h3 className="text-2xl font-bold mb-6">Toolypet</h3>
            <p className="text-black dark:text-gray-400">
              {heroT('subtitle')}
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-6 text-lg">{footerT('quickLinks.services')}</h4>
            <ul className="space-y-3 text-black dark:text-gray-400">
              <li><a href={devtoolsUrl} className="hover:text-blue-600">DevTools Suite</a></li>
              <li><a href={cssUrl} className="hover:text-blue-600">CSS Studio</a></li>
              <li><a href={seoUrl} className="hover:text-blue-600">SEO Tools</a></li>
              <li><a href={securityUrl} className="hover:text-blue-600">Security Tools</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-6 text-lg">{locale === 'ko' ? '정보' : locale === 'en' ? 'About' : locale === 'ja' ? '情報' : locale === 'zh' ? '关于' : locale === 'es' ? 'Acerca de' : locale === 'pt' ? 'Sobre' : locale === 'hi' ? 'के बारे में' : locale === 'de' ? 'Über' : 'About'}</h4>
            <ul className="space-y-3 text-black dark:text-gray-400">
              <li><Link href={`/${locale}/privacy-policy`} className="hover:text-blue-600">{footerT('quickLinks.privacy')}</Link></li>
              <li><Link href={`/${locale}/terms`} className="hover:text-blue-600">{footerT('quickLinks.terms')}</Link></li>
              <li><Link href={`/${locale}/contact`} className="hover:text-blue-600">{footerT('quickLinks.contact')}</Link></li>
              <li><Link href={`/${locale}/updates`} className="hover:text-blue-600">{footerT('quickLinks.updates')}</Link></li>
            </ul>
          </div>
          
          {/* Newsletter section temporarily disabled
          <div>
            <h4 className="font-semibold mb-6 text-lg">Newsletter</h4>
            <p className="text-black dark:text-gray-400 mb-6">
              새로운 도구와 업데이트 소식을 받아보세요
            </p>
            <form className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="이메일 주소"
                className="flex-1 px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-600 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
              <button className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium whitespace-nowrap">
                구독
              </button>
            </form>
          </div>
          */}
        </div>
        
        <div className="border-t border-gray-200 dark:border-gray-800 pt-12 mt-12 text-center text-black dark:text-gray-400">
          <p>{footerT('copyright')}</p>
        </div>
        </div>
      </div>
    </footer>
  )
}