/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return {
      fallback: [
        // CSS Studio
        {
          source: '/css-studio/:locale',
          destination: `${process.env.CSS_STUDIO_URL || 'https://css-studio.toolypet.com'}/css-studio/:locale`,
        },
        {
          source: '/css-studio/:locale/:path*',
          destination: `${process.env.CSS_STUDIO_URL || 'https://css-studio.toolypet.com'}/css-studio/:locale/:path*`,
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
          source: '/security-tools/:locale',
          destination: `${process.env.SECURITY_TOOLS_URL || 'https://security-tools.toolypet.com'}/security-tools/:locale`,
        },
        {
          source: '/security-tools/:locale/:path*',
          destination: `${process.env.SECURITY_TOOLS_URL || 'https://security-tools.toolypet.com'}/security-tools/:locale/:path*`,
        },
        // SEO Tools
        {
          source: '/seo-tools/:locale',
          destination: `${process.env.SEO_TOOLS_URL || 'https://seo-tools.toolypet.com'}/seo-tools/:locale`,
        },
        {
          source: '/seo-tools/:locale/:path*',
          destination: `${process.env.SEO_TOOLS_URL || 'https://seo-tools.toolypet.com'}/seo-tools/:locale/:path*`,
        },
      ],
    }
  },
}

export default nextConfig