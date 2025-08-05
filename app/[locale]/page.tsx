import { getTranslations } from 'next-intl/server'
import { HeroSection } from '@/components/hero-section'
import { ServicesSection } from '@/components/services-section'
import { ShowcaseSection } from '@/components/showcase-section'
import { FeaturesSection } from '@/components/features-section'
import { RoadmapSection } from '@/components/roadmap-section'
import { NewsletterSection } from '@/components/newsletter-section'

type Locale = 'ko' | 'en' | 'ja' | 'zh' | 'es' | 'pt' | 'hi'

export default async function Home({
  params,
}: {
  params: Promise<{ locale: Locale }>
}) {
  const { locale } = await params
  
  return (
    <main>
      <HeroSection />
      <ServicesSection />
      <ShowcaseSection locale={locale} />
      <FeaturesSection />
      <RoadmapSection />
      {/* <NewsletterSection /> */}
    </main>
  )
}