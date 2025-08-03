import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://toolypet.com'
  const locales = ['ko', 'en', 'ja', 'zh']
  
  // 모든 페이지 경로
  const pages = [
    { path: '', priority: 1.0, changeFrequency: 'weekly' }, // 홈페이지
    { path: 'contact', priority: 0.8, changeFrequency: 'monthly' },
    { path: 'privacy-policy', priority: 0.5, changeFrequency: 'yearly' },
    { path: 'terms', priority: 0.5, changeFrequency: 'yearly' },
    { path: 'updates', priority: 0.7, changeFrequency: 'weekly' },
  ]
  
  const urls: MetadataRoute.Sitemap = []
  
  // 루트 URL 추가
  urls.push({
    url: baseUrl,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 1.0,
  })
  
  // 각 로케일과 페이지에 대한 URL 생성
  locales.forEach(locale => {
    pages.forEach(page => {
      urls.push({
        url: `${baseUrl}/${locale}${page.path ? `/${page.path}` : ''}`,
        lastModified: new Date(),
        changeFrequency: page.changeFrequency as 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never',
        priority: page.priority,
      })
    })
  })
  
  return urls
}