import createMiddleware from 'next-intl/middleware'
import { locales } from './i18n'

export default createMiddleware({
  // A list of all locales that are supported
  locales,
  
  // Used when no locale matches
  defaultLocale: 'ko',
  
  // Always show locale prefix in URL
  localePrefix: 'always'
})

export const config = {
  matcher: [
    '/((?!_next|api|favicon.ico|.*\\..*|css|devtools|security|seo).*)',
  ],
}