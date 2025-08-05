import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://toolypet.com'
  const locales = ['ko', 'en', 'ja', 'zh', 'es']
  
  // 루트 도메인 페이지들
  const pages = [
    { path: '', priority: 1.0, changeFrequency: 'weekly' }, // 홈페이지
    { path: 'contact', priority: 0.8, changeFrequency: 'monthly' },
    { path: 'privacy-policy', priority: 0.5, changeFrequency: 'yearly' },
    { path: 'terms', priority: 0.5, changeFrequency: 'yearly' },
    { path: 'updates', priority: 0.7, changeFrequency: 'weekly' },
  ]
  
  // 도구 카테고리 정의
  const toolCategories = [
    {
      path: 'css',
      tools: [
        'animation', 'gradient', 'box-shadow', 'text-shadow',
        'border-radius', 'filter', 'transform', 'flexbox',
        'grid', 'cubic-bezier'
      ]
    },
    {
      path: 'devtools',
      tools: [
        'json-formatter', 'base64', 'url-encoder', 'hash-generator',
        'uuid-generator', 'jwt-decoder', 'timestamp-converter', 'regex-tester'
      ]
    },
    {
      path: 'security',
      tools: [
        'password-generator', 'password-strength', 'hash-generator',
        'encryption-decryption', 'security-headers', 'csp-builder',
        'ssl-checker', 'vulnerability-scanner'
      ]
    },
    {
      path: 'seo',
      tools: [
        'meta-tags', 'open-graph', 'robots-txt', 'sitemap-generator',
        'schema-generator', 'keyword-analyzer', 'social-preview', 'structured-data'
      ]
    }
  ]
  
  const urls: MetadataRoute.Sitemap = []
  
  // 루트 URL
  urls.push({
    url: baseUrl,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 1,
  })
  
  // 각 로케일에 대한 메인 페이지와 기본 페이지들
  locales.forEach(locale => {
    urls.push({
      url: `${baseUrl}/${locale}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    })
    
    // 루트 도메인의 추가 페이지들
    pages.slice(1).forEach(page => {
      urls.push({
        url: `${baseUrl}/${locale}/${page.path}`,
        lastModified: new Date(),
        changeFrequency: page.changeFrequency as 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never',
        priority: page.priority,
      })
    })
  })
  
  // 각 도구 카테고리와 도구들
  toolCategories.forEach(category => {
    locales.forEach(locale => {
      // 카테고리 메인 페이지
      urls.push({
        url: `${baseUrl}/${category.path}/${locale}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.9,
      })
      
      // 카테고리 about 페이지
      urls.push({
        url: `${baseUrl}/${category.path}/${locale}/about`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.5,
      })
      
      // 카테고리 도구 목록 페이지
      urls.push({
        url: `${baseUrl}/${category.path}/${locale}/tools`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.8,
      })
      
      // 각 도구 페이지
      category.tools.forEach(tool => {
        urls.push({
          url: `${baseUrl}/${category.path}/${locale}/tools/${tool}`,
          lastModified: new Date(),
          changeFrequency: 'weekly',
          priority: 0.7,
        })
      })
    })
  })
  
  return urls
}