import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.toolypet.com'
  const locales = ['ko', 'en', 'ja', 'zh']
  
  // 모든 로케일에 대한 URL 생성
  const urls = locales.map(locale => ({
    url: `${baseUrl}/${locale}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 1,
  }))
  
  // 루트 URL 추가
  urls.unshift({
    url: baseUrl,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 1,
  })
  
  return urls
}