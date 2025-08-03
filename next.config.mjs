/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return {
      fallback: [
        // CSS Studio
        {
          source: '/css-studio',
          destination: `${process.env.CSS_STUDIO_URL || 'https://css-studio.toolypet.com'}/css-studio`,
        },
        {
          source: '/css-studio/:path*',
          destination: `${process.env.CSS_STUDIO_URL || 'https://css-studio.toolypet.com'}/css-studio/:path*`,
        },
        // DevTools
        {
          source: '/devtools',
          destination: `${process.env.DEVTOOLS_URL || 'https://devtools.toolypet.com'}/devtools`,
        },
        {
          source: '/devtools/:path*',
          destination: `${process.env.DEVTOOLS_URL || 'https://devtools.toolypet.com'}/devtools/:path*`,
        },
        // Security Tools
        {
          source: '/security-tools',
          destination: `${process.env.SECURITY_TOOLS_URL || 'https://security-tools.toolypet.com'}/security-tools`,
        },
        {
          source: '/security-tools/:path*',
          destination: `${process.env.SECURITY_TOOLS_URL || 'https://security-tools.toolypet.com'}/security-tools/:path*`,
        },
        // SEO Tools
        {
          source: '/seo-tools',
          destination: `${process.env.SEO_TOOLS_URL || 'https://seo-tools.toolypet.com'}/seo-tools`,
        },
        {
          source: '/seo-tools/:path*',
          destination: `${process.env.SEO_TOOLS_URL || 'https://seo-tools.toolypet.com'}/seo-tools/:path*`,
        },
      ],
    }
  },
}

export default nextConfig