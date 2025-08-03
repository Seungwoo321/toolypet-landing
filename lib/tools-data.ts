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
    id: 'css',
    tools: [
      { id: 'gradient', nameKey: 'gradient', icon: '🎨', path: 'https://toolypet.com/css/{locale}/tools/gradient' },
      { id: 'animation', nameKey: 'animation', icon: '⚡', path: 'https://toolypet.com/css/{locale}/tools/animation' },
      { id: 'box-shadow', nameKey: 'boxShadow', icon: '📦', path: 'https://toolypet.com/css/{locale}/tools/box-shadow' },
      { id: 'text-shadow', nameKey: 'textShadow', icon: '✏️', path: 'https://toolypet.com/css/{locale}/tools/text-shadow' },
      { id: 'border-radius', nameKey: 'borderRadius', icon: '🔲', path: 'https://toolypet.com/css/{locale}/tools/border-radius' },
      { id: 'filter', nameKey: 'filter', icon: '🎭', path: 'https://toolypet.com/css/{locale}/tools/filter' },
      { id: 'transform', nameKey: 'transform', icon: '🔄', path: 'https://toolypet.com/css/{locale}/tools/transform' },
      { id: 'flexbox', nameKey: 'flexbox', icon: '📐', path: 'https://toolypet.com/css/{locale}/tools/flexbox' },
      { id: 'grid', nameKey: 'grid', icon: '⚏', path: 'https://toolypet.com/css/{locale}/tools/grid' },
      { id: 'cubic-bezier', nameKey: 'cubicBezier', icon: '〰️', path: 'https://toolypet.com/css/{locale}/tools/cubic-bezier' },
    ],
  },
  {
    id: 'devtools',
    tools: [
      { id: 'json-formatter', nameKey: 'jsonFormatter', icon: '📋', path: 'https://toolypet.com/devtools/{locale}/tools/json-formatter' },
      { id: 'base64', nameKey: 'base64', icon: '🔤', path: 'https://toolypet.com/devtools/{locale}/tools/base64' },
      { id: 'url-encoder', nameKey: 'urlEncoder', icon: '🔗', path: 'https://toolypet.com/devtools/{locale}/tools/url-encoder' },
      { id: 'jwt-decoder', nameKey: 'jwtDecoder', icon: '🔐', path: 'https://toolypet.com/devtools/{locale}/tools/jwt-decoder' },
      { id: 'regex-tester', nameKey: 'regexTester', icon: '🔍', path: 'https://toolypet.com/devtools/{locale}/tools/regex-tester' },
      { id: 'hash-generator', nameKey: 'hashGenerator', icon: '#️⃣', path: 'https://toolypet.com/devtools/{locale}/tools/hash-generator' },
      { id: 'timestamp-converter', nameKey: 'timestampConverter', icon: '⏰', path: 'https://toolypet.com/devtools/{locale}/tools/timestamp-converter' },
      { id: 'uuid-generator', nameKey: 'uuidGenerator', icon: '🆔', path: 'https://toolypet.com/devtools/{locale}/tools/uuid-generator' },
    ],
  },
  {
    id: 'security',
    tools: [
      { id: 'password-generator', nameKey: 'passwordGenerator', icon: '🔑', path: 'https://toolypet.com/security/{locale}/tools/password-generator' },
      { id: 'password-strength', nameKey: 'passwordStrength', icon: '💪', path: 'https://toolypet.com/security/{locale}/tools/password-strength' },
      { id: 'hash-generator', nameKey: 'hashGenerator', icon: '🔒', path: 'https://toolypet.com/security/{locale}/tools/hash-generator' },
      { id: 'encryption-decryption', nameKey: 'encryptionDecryption', icon: '🔐', path: 'https://toolypet.com/security/{locale}/tools/encryption-decryption' },
      { id: 'security-headers', nameKey: 'securityHeaders', icon: '🛡️', path: 'https://toolypet.com/security/{locale}/tools/security-headers' },
      { id: 'csp-builder', nameKey: 'cspBuilder', icon: '📜', path: 'https://toolypet.com/security/{locale}/tools/csp-builder' },
      { id: 'ssl-checker', nameKey: 'sslChecker', icon: '🔓', path: 'https://toolypet.com/security/{locale}/tools/ssl-checker' },
      { id: 'vulnerability-scanner', nameKey: 'vulnerabilityScanner', icon: '🔍', path: 'https://toolypet.com/security/{locale}/tools/vulnerability-scanner' },
    ],
  },
  {
    id: 'seo',
    tools: [
      { id: 'meta-tags', nameKey: 'metaTags', icon: '🏷️', path: 'https://toolypet.com/seo/{locale}/tools/meta-tags' },
      { id: 'open-graph', nameKey: 'openGraph', icon: '📊', path: 'https://toolypet.com/seo/{locale}/tools/open-graph' },
      { id: 'robots-txt', nameKey: 'robotsTxt', icon: '🤖', path: 'https://toolypet.com/seo/{locale}/tools/robots-txt' },
      { id: 'sitemap-generator', nameKey: 'sitemapGenerator', icon: '🗺️', path: 'https://toolypet.com/seo/{locale}/tools/sitemap-generator' },
      { id: 'schema-generator', nameKey: 'schemaGenerator', icon: '📝', path: 'https://toolypet.com/seo/{locale}/tools/schema-generator' },
      { id: 'keyword-analyzer', nameKey: 'keywordAnalyzer', icon: '🔎', path: 'https://toolypet.com/seo/{locale}/tools/keyword-analyzer' },
      { id: 'social-preview', nameKey: 'socialPreview', icon: '👁️', path: 'https://toolypet.com/seo/{locale}/tools/social-preview' },
      { id: 'structured-data', nameKey: 'structuredData', icon: '📊', path: 'https://toolypet.com/seo/{locale}/tools/structured-data' },
    ],
  },
]