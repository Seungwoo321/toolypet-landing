import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export async function GET(request: NextRequest) {
  // Get locale from headers or default to 'ko'
  const acceptLanguage = request.headers.get('accept-language') || ''
  const locale = acceptLanguage.includes('en') ? 'en' : 
                 acceptLanguage.includes('ja') ? 'ja' : 
                 acceptLanguage.includes('zh') ? 'zh' : 'ko'
  
  // Redirect to the SEO Tools with locale
  return NextResponse.redirect(new URL(`/seo/${locale}`, request.url))
}