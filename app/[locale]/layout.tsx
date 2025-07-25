import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { translations, type Locale } from '@/lib/i18n/translations'
import { MotionProvider } from '@/lib/framer-motion'
import { GoogleAnalytics } from 'next-google-analytics'

const inter = Inter({ subsets: ['latin'] })

export async function generateStaticParams() {
  return ['ko', 'en', 'ja', 'zh'].map((locale) => ({ locale }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>
}): Promise<Metadata> {
  const { locale } = await params
  const t = translations[locale] || translations.ko
  
  return {
    title: `Toolypet - ${t.hero.subtitle}`,
    description: t.hero.description,
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
  return (
    <html lang={locale}>
      <body className={inter.className}>
        <GoogleAnalytics measurementId={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || ''} />
        <MotionProvider>
          {children}
        </MotionProvider>
      </body>
    </html>
  )
}