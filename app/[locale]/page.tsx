import { translations, type Locale } from '@/lib/i18n/translations'
import { Navigation } from '@/components/navigation'
import { HeroSection } from '@/components/hero-section'
import { ServicesSection } from '@/components/services-section'
import { ShowcaseSection } from '@/components/showcase-section'
import { FeaturesSection } from '@/components/features-section'
import { RoadmapSection } from '@/components/roadmap-section'
import { NewsletterSection } from '@/components/newsletter-section'
import { Footer } from '@/components/footer'

export default async function Home({
  params,
}: {
  params: Promise<{ locale: Locale }>
}) {
  const { locale } = await params
  const t = translations[locale] as typeof translations.ko
  
  if (!t) {
    return <div>Loading...</div>
  }
  
  return (
    <>
      <Navigation currentLocale={locale} />
      <main>
        <HeroSection translations={t} />
        <ServicesSection translations={t} />
        <ShowcaseSection translations={t} locale={locale} />
        <FeaturesSection />
        <RoadmapSection />
        {/* <NewsletterSection /> */}
      </main>
      <Footer locale={locale} />
    </>
  )
}