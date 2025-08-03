/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
        // CSS Studio
        {
          source: '/css/:locale',
          destination: `${process.env.CSS_STUDIO_URL || 'https://css.toolypet.com'}/css/:locale`,
        },
        {
          source: '/css/:locale/:path*',
          destination: `${process.env.CSS_STUDIO_URL || 'https://css.toolypet.com'}/css/:locale/:path*`,
        },
        // DevTools
        {
          source: '/devtools/:locale',
          destination: `${process.env.DEVTOOLS_URL || 'https://devtools.toolypet.com'}/devtools/:locale`,
        },
        {
          source: '/devtools/:locale/:path*',
          destination: `${process.env.DEVTOOLS_URL || 'https://devtools.toolypet.com'}/devtools/:locale/:path*`,
        },
        // Security Tools
        {
          source: '/security/:locale',
          destination: `${process.env.SECURITY_TOOLS_URL || 'https://security.toolypet.com'}/security/:locale`,
        },
        {
          source: '/security/:locale/:path*',
          destination: `${process.env.SECURITY_TOOLS_URL || 'https://security.toolypet.com'}/security/:locale/:path*`,
        },
        // SEO Tools
        {
          source: '/seo/:locale',
          destination: `${process.env.SEO_TOOLS_URL || 'https://seo.toolypet.com'}/seo/:locale`,
        },
        {
          source: '/seo/:locale/:path*',
          destination: `${process.env.SEO_TOOLS_URL || 'https://seo.toolypet.com'}/seo/:locale/:path*`,
        },
      ]
  },
}

export default nextConfig