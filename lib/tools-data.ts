export interface Tool {
  id: string
  nameKey: string
  icon: string
  path: string
}

export interface ToolCategory {
  id: string
  tools: Tool[]
}

export const toolsData: ToolCategory[] = [
  {
    id: 'devtools',
    tools: [
      { id: 'json-formatter', nameKey: 'jsonFormatter', icon: '📋', path: '/devtools/{locale}/tools/json-formatter' },
      { id: 'base64', nameKey: 'base64', icon: '🔤', path: '/devtools/{locale}/tools/base64' },
      { id: 'url-encoder', nameKey: 'urlEncoder', icon: '🔗', path: '/devtools/{locale}/tools/url-encoder' },
      { id: 'jwt-decoder', nameKey: 'jwtDecoder', icon: '🔐', path: '/devtools/{locale}/tools/jwt-decoder' },
      { id: 'regex-tester', nameKey: 'regexTester', icon: '🔍', path: '/devtools/{locale}/tools/regex-tester' },
      { id: 'hash-generator', nameKey: 'hashGenerator', icon: '#️⃣', path: '/devtools/{locale}/tools/hash-generator' },
      { id: 'timestamp-converter', nameKey: 'timestampConverter', icon: '⏰', path: '/devtools/{locale}/tools/timestamp-converter' },
      { id: 'uuid-generator', nameKey: 'uuidGenerator', icon: '🆔', path: '/devtools/{locale}/tools/uuid-generator' },
    ],
  },
  {
    id: 'css',
    tools: [
      { id: 'gradient', nameKey: 'gradient', icon: '🎨', path: '/css/{locale}/tools/gradient' },
      { id: 'animation', nameKey: 'animation', icon: '⚡', path: '/css/{locale}/tools/animation' },
      { id: 'box-shadow', nameKey: 'boxShadow', icon: '📦', path: '/css/{locale}/tools/box-shadow' },
      { id: 'text-shadow', nameKey: 'textShadow', icon: '✏️', path: '/css/{locale}/tools/text-shadow' },
      { id: 'border-radius', nameKey: 'borderRadius', icon: '🔲', path: '/css/{locale}/tools/border-radius' },
      { id: 'filter', nameKey: 'filter', icon: '🎭', path: '/css/{locale}/tools/filter' },
      { id: 'transform', nameKey: 'transform', icon: '🔄', path: '/css/{locale}/tools/transform' },
      { id: 'flexbox', nameKey: 'flexbox', icon: '📐', path: '/css/{locale}/tools/flexbox' },
      { id: 'grid', nameKey: 'grid', icon: '⚏', path: '/css/{locale}/tools/grid' },
      { id: 'cubic-bezier', nameKey: 'cubicBezier', icon: '〰️', path: '/css/{locale}/tools/cubic-bezier' },
    ],
  },
  {
    id: 'seo',
    tools: [
      { id: 'meta-tags', nameKey: 'metaTags', icon: '🏷️', path: '/seo/{locale}/tools/meta-tags' },
      { id: 'open-graph', nameKey: 'openGraph', icon: '📊', path: '/seo/{locale}/tools/open-graph' },
      { id: 'robots-txt', nameKey: 'robotsTxt', icon: '🤖', path: '/seo/{locale}/tools/robots-txt' },
      { id: 'sitemap-generator', nameKey: 'sitemapGenerator', icon: '🗺️', path: '/seo/{locale}/tools/sitemap-generator' },
      { id: 'schema-generator', nameKey: 'schemaGenerator', icon: '📝', path: '/seo/{locale}/tools/schema-generator' },
      { id: 'keyword-analyzer', nameKey: 'keywordAnalyzer', icon: '🔎', path: '/seo/{locale}/tools/keyword-analyzer' },
      { id: 'social-preview', nameKey: 'socialPreview', icon: '👁️', path: '/seo/{locale}/tools/social-preview' },
      { id: 'structured-data', nameKey: 'structuredData', icon: '📊', path: '/seo/{locale}/tools/structured-data' },
    ],
  },
  {
    id: 'security',
    tools: [
      { id: 'password-generator', nameKey: 'passwordGenerator', icon: '🔑', path: '/security/{locale}/tools/password-generator' },
      { id: 'password-strength', nameKey: 'passwordStrength', icon: '💪', path: '/security/{locale}/tools/password-strength' },
      { id: 'hash-generator', nameKey: 'hashGenerator', icon: '🔒', path: '/security/{locale}/tools/hash-generator' },
      { id: 'encryption-decryption', nameKey: 'encryptionDecryption', icon: '🔐', path: '/security/{locale}/tools/encryption-decryption' },
      { id: 'security-headers', nameKey: 'securityHeaders', icon: '🛡️', path: '/security/{locale}/tools/security-headers' },
      { id: 'csp-builder', nameKey: 'cspBuilder', icon: '📜', path: '/security/{locale}/tools/csp-builder' },
      { id: 'ssl-checker', nameKey: 'sslChecker', icon: '🔓', path: '/security/{locale}/tools/ssl-checker' },
      { id: 'vulnerability-scanner', nameKey: 'vulnerabilityScanner', icon: '🔍', path: '/security/{locale}/tools/vulnerability-scanner' },
    ],
  },
]