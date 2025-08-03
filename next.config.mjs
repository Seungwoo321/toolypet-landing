/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return {
      fallback: [
        // CSS Studio
        {
          source: '/:locale/css-studio',
          destination: `${process.env.CSS_STUDIO_URL || 'https://css-studio.toolypet.com'}/css-studio/:locale`,
        },
        {
          source: '/:locale/css-studio/:path*',
          destination: `${process.env.CSS_STUDIO_URL || 'https://css-studio.toolypet.com'}/css-studio/:locale/:path*`,
        },
        // DevTools
        {
          source: '/:locale/devtools',
          destination: `${process.env.DEVTOOLS_URL || 'https://devtools.toolypet.com'}/devtools/:locale`,
        },
        {
          source: '/:locale/devtools/:path*',
          destination: `${process.env.DEVTOOLS_URL || 'https://devtools.toolypet.com'}/devtools/:locale/:path*`,
        },
        // Security Tools
        {
          source: '/:locale/security-tools',
          destination: `${process.env.SECURITY_TOOLS_URL || 'https://security-tools.toolypet.com'}/security-tools/:locale`,
        },
        {
          source: '/:locale/security-tools/:path*',
          destination: `${process.env.SECURITY_TOOLS_URL || 'https://security-tools.toolypet.com'}/security-tools/:locale/:path*`,
        },
        // SEO Tools
        {
          source: '/:locale/seo-tools',
          destination: `${process.env.SEO_TOOLS_URL || 'https://seo-tools.toolypet.com'}/seo-tools/:locale`,
        },
        {
          source: '/:locale/seo-tools/:path*',
          destination: `${process.env.SEO_TOOLS_URL || 'https://seo-tools.toolypet.com'}/seo-tools/:locale/:path*`,
        },
      ],
    }
  },
}

export default nextConfig