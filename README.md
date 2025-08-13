# Toolypet - All-in-One Developer Tools Platform

[English](README.md) | [한국어](README.ko.md) | [日本語](README.ja.md) | [中文](README.zh.md) | [Español](README.es.md) | [Português](README.pt.md) | [हिन्दी](README.hi.md) | [Deutsch](README.de.md)

## 🚀 Project Introduction

Toolypet is an integrated platform providing 34 professional tools for developers. From CSS editors to security tools and SEO optimization, everything can be solved in one place.

## 🛠 Key Features

### 4 Integrated Services
- **CSS Studio**: Advanced CSS editing and generation tools
- **DevTools Suite**: Essential utilities for developers
- **Security Tools**: Web security testing and analysis tools
- **SEO Tools**: Search engine optimization tools

### 34 Professional Tools
All tools are provided for free and can be used immediately without login.

## 🌍 Multi-language Support

Toolypet supports 8 languages:
- 🇺🇸 English (en)
- 🇰🇷 Korean (ko)
- 🇯🇵 Japanese (ja)
- 🇨🇳 Chinese (zh)
- 🇪🇸 Spanish (es)
- 🇵🇹 Portuguese (pt)
- 🇮🇳 Hindi (hi)
- 🇩🇪 German (de)

## 🔧 Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Animation**: Framer Motion
- **Internationalization**: next-intl
- **Package Manager**: pnpm

## 📦 Installation & Running

### Requirements
- Node.js 18.17+
- pnpm 8.0+

```bash
# Install dependencies
pnpm install

# Run development server (http://localhost:3000)
pnpm dev

# Build for production
pnpm build

# Run production server
pnpm start

# Run all services locally (for testing)
./scripts/start-local.sh
```

## 📁 Project Structure

```
toolypet/
├── app/
│   ├── [locale]/               # i18n routing
│   │   ├── layout.tsx          # Common layout
│   │   ├── page.tsx            # Homepage
│   │   ├── contact/            # Contact
│   │   ├── privacy-policy/     # Privacy Policy
│   │   ├── terms/              # Terms of Service
│   │   ├── tools-gallery/      # Tools Gallery
│   │   └── updates/            # Updates
│   ├── css/                    # CSS Studio redirect
│   ├── devtools/               # DevTools redirect
│   ├── security/               # Security Tools redirect
│   └── seo/                    # SEO Tools redirect
├── components/                 # React components
├── lib/
│   └── i18n/
│       └── locales/            # Translation files (JSON)
├── i18n.ts                     # next-intl configuration
├── middleware.ts               # i18n middleware
└── tailwind.config.css         # Tailwind CSS v4 config
```

## 🌐 Internationalization (i18n)

- **Library**: next-intl
- **File Format**: JSON
- **Path**: `/lib/i18n/locales/`

## 🚀 Deployment

Deploy to Vercel (recommended):
```bash
vercel
```

---

© 2025 Toolypet. All rights reserved.