import type { Metadata } from 'next'
import { Inter, Noto_Sans_KR, Noto_Sans_JP, Noto_Sans_SC, Noto_Sans_Devanagari } from 'next/font/google'
import './globals.css'
import { NextIntlClientProvider } from 'next-intl'
import { getTranslations, getMessages } from 'next-intl/server'
import { MotionProvider } from '@/lib/framer-motion'
import { GoogleAnalytics } from '@next/third-parties/google'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'

// 기본 폰트 (라틴 문자)
const inter = Inter({ 
  subsets: ['latin', 'latin-ext'],
  display: 'swap'
})

// 언어별 전용 폰트 (필요한 언어만)
const notoKR = Noto_Sans_KR({ 
  subsets: ['latin'], 
  display: 'swap' 
})

const notoJP = Noto_Sans_JP({ 
  subsets: ['latin'], 
  display: 'swap' 
})

const notoSC = Noto_Sans_SC({ 
  subsets: ['latin'], 
  display: 'swap' 
})

const notoDevanagari = Noto_Sans_Devanagari({ 
  subsets: ['latin', 'devanagari'], 
  display: 'swap' 
})

type Locale = 'ko' | 'en' | 'ja' | 'zh' | 'es' | 'pt' | 'hi' | 'de'

export async function generateStaticParams() {
  return ['ko', 'en', 'ja', 'zh', 'es', 'pt', 'hi', 'de'].map((locale) => ({ locale }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>
}): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'hero' })
  
  return {
    title: `Toolypet - ${t('subtitle')}`,
    description: t('description'),
  }
}

// 언어별 폰트 클래스 간단 버전
function getFontClassName(locale: Locale): string {
  switch (locale) {
    case 'ko':
      return notoKR.className
    case 'ja':
      return notoJP.className
    case 'zh':
      return notoSC.className
    case 'hi':
      return notoDevanagari.className
    default:
      return inter.className
  }
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: Locale }>
}) {
  const { locale } = await params
  const messages = await getMessages({ locale })
  
  return (
    <html lang={locale}>
      <body className={getFontClassName(locale)}>
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || ''} />
        <NextIntlClientProvider messages={messages}>
          <MotionProvider>
            <Navigation currentLocale={locale} />
            {children}
            <Footer locale={locale} />
          </MotionProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}