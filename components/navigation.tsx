'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { Globe } from 'lucide-react'
import { useState } from 'react'
import { type Locale } from '@/lib/i18n/translations'
import { ThemeToggle } from './theme-toggle'

const locales = ['ko', 'en', 'ja', 'zh'] as const
const localeNames = {
  ko: '한국어',
  en: 'English',
  ja: '日本語',
  zh: '中文',
}

export function Navigation({ currentLocale }: { currentLocale: Locale }) {
  const pathname = usePathname()
  const [isLangOpen, setIsLangOpen] = useState(false)

  const switchLocale = (newLocale: Locale) => {
    const segments = pathname.split('/')
    segments[1] = newLocale
    return segments.join('/')
  }

  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-lg bg-white/70 dark:bg-black/70 border-b border-gray-200/20">
      <div className="w-full px-6 sm:px-12 lg:px-24">
        <div className="flex items-center justify-between h-16">
          <Link href={`/${currentLocale}`} className="text-2xl font-semibold text-gray-800 dark:text-white hover:opacity-80 transition-opacity">
            Toolypet
          </Link>
          
          <div className="flex items-center gap-4 md:gap-6">
            <div className="hidden md:flex items-center gap-6">
              <Link href={`/${currentLocale}#services`} className="text-gray-800 dark:text-gray-200 hover:text-blue-600 transition-colors font-medium">
                Services
              </Link>
              <Link href={`/${currentLocale}#roadmap`} className="text-gray-800 dark:text-gray-200 hover:text-blue-600 transition-colors font-medium">
                Roadmap
              </Link>
              <Link href={`/${currentLocale}/contact`} className="text-gray-800 dark:text-gray-200 hover:text-blue-600 transition-colors font-medium">
                Contact
              </Link>
            </div>
            
            <div className="flex items-center gap-2">
              <div className="relative">
            <button
              onClick={() => setIsLangOpen(!isLangOpen)}
                className="flex items-center gap-2 px-3 py-2 rounded-lg text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              <Globe size={18} />
              <span>{localeNames[currentLocale]}</span>
            </button>
            
                {isLangOpen && (
                  <div className="absolute right-0 mt-2 w-40 bg-white dark:bg-gray-900 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700">
                    {locales.map((locale) => (
                      <Link
                        key={locale}
                        href={switchLocale(locale)}
                        className="block px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors first:rounded-t-lg last:rounded-b-lg"
                        onClick={() => setIsLangOpen(false)}
                      >
                        {localeNames[locale]}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
              
              <ThemeToggle />
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}