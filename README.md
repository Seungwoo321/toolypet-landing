# Toolypet - All-in-One Developer Tools Platform

[English](#english) | [한국어](#한국어) | [日本語](#日本語) | [中文](#中文) | [Español](#español) | [Português](#português) | [हिन्दी](#हिन्दी) | [Deutsch](#deutsch)

---

## English

### 🚀 Project Introduction

Toolypet is an integrated platform providing 34 professional tools for developers. From CSS editors to security tools and SEO optimization, everything can be solved in one place.

### 🛠 Key Features

#### 4 Integrated Services
- **CSS Studio**: Advanced CSS editing and generation tools
- **DevTools Suite**: Essential utilities for developers
- **Security Tools**: Web security testing and analysis tools
- **SEO Tools**: Search engine optimization tools

#### 34 Professional Tools
All tools are provided for free and can be used immediately without login.

### 🌍 Multi-language Support

Toolypet supports 8 languages:
- 🇰🇷 Korean (ko)
- 🇺🇸 English (en)
- 🇯🇵 Japanese (ja)
- 🇨🇳 Chinese (zh)
- 🇪🇸 Spanish (es)
- 🇵🇹 Portuguese (pt)
- 🇮🇳 Hindi (hi)
- 🇩🇪 German (de)

### 🔧 Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Animation**: Framer Motion
- **Internationalization**: next-intl
- **Package Manager**: pnpm

### 📦 Installation & Running

#### Requirements
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

### 📁 Project Structure

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

### 🌐 Internationalization (i18n)

- **Library**: next-intl
- **File Format**: JSON
- **Path**: `/lib/i18n/locales/`

### 🚀 Deployment

Deploy to Vercel (recommended):
```bash
vercel
```

### 📧 Contact

For questions or suggestions, please contact us at contact@toolypet.com

---

## 한국어

### 🚀 프로젝트 소개

Toolypet은 개발자를 위한 34개의 전문 도구를 제공하는 통합 플랫폼입니다. CSS 편집기부터 보안 도구, SEO 최적화까지 모든 것을 한 곳에서 해결할 수 있습니다.

### 🛠 주요 기능

#### 4개의 통합 서비스
- **CSS Studio**: 고급 CSS 편집 및 생성 도구
- **DevTools Suite**: 개발자를 위한 필수 유틸리티
- **Security Tools**: 웹 보안 테스트 및 분석 도구
- **SEO Tools**: 검색 엔진 최적화 도구

#### 34개의 전문 도구
모든 도구는 무료로 제공되며, 로그인 없이 즉시 사용 가능합니다.

### 🌍 다국어 지원

Toolypet은 8개 언어를 지원합니다:
- 🇰🇷 한국어 (ko)
- 🇺🇸 영어 (en)
- 🇯🇵 일본어 (ja)
- 🇨🇳 중국어 (zh)
- 🇪🇸 스페인어 (es)
- 🇵🇹 포르투갈어 (pt)
- 🇮🇳 힌디어 (hi)
- 🇩🇪 독일어 (de)

### 🔧 기술 스택

- **프레임워크**: Next.js 15 (App Router)
- **언어**: TypeScript
- **스타일링**: Tailwind CSS v4
- **애니메이션**: Framer Motion
- **국제화**: next-intl
- **패키지 매니저**: pnpm

### 📦 설치 및 실행

#### 요구사항
- Node.js 18.17 이상
- pnpm 8.0 이상

```bash
# 의존성 설치
pnpm install

# 개발 서버 실행 (http://localhost:3000)
pnpm dev

# 프로덕션 빌드
pnpm build

# 프로덕션 서버 실행
pnpm start

# 모든 서비스 로컬 실행 (테스트용)
./scripts/start-local.sh
```

### 📁 프로젝트 구조

```
toolypet/
├── app/
│   ├── [locale]/               # 다국어 라우팅
│   │   ├── layout.tsx          # 공통 레이아웃
│   │   ├── page.tsx            # 홈페이지
│   │   ├── contact/            # 문의하기
│   │   ├── privacy-policy/     # 개인정보 처리방침
│   │   ├── terms/              # 이용약관
│   │   ├── tools-gallery/      # 도구 갤러리
│   │   └── updates/            # 업데이트 내역
│   ├── css/                    # CSS Studio 리다이렉트
│   ├── devtools/               # DevTools 리다이렉트
│   ├── security/               # Security Tools 리다이렉트
│   └── seo/                    # SEO Tools 리다이렉트
├── components/                 # React 컴포넌트
├── lib/
│   └── i18n/
│       └── locales/            # 번역 파일 (JSON)
├── i18n.ts                     # next-intl 설정
├── middleware.ts               # 다국어 미들웨어
└── tailwind.config.css         # Tailwind CSS v4 설정
```

### 🌐 국제화 (i18n)

- **라이브러리**: next-intl
- **파일 형식**: JSON
- **경로**: `/lib/i18n/locales/`

### 🚀 배포

Vercel 배포 (권장):
```bash
vercel
```

### 📧 문의

질문이나 제안사항이 있으시면 contact@toolypet.com으로 연락주세요.

---

## 日本語

### 🚀 プロジェクト紹介

Toolypetは開発者向けの34個の専門ツールを提供する統合プラットフォームです。CSSエディタからセキュリティツール、SEO最適化まで、すべてを一箇所で解決できます。

### 🛠 主な機能

#### 4つの統合サービス
- **CSS Studio**: 高度なCSS編集および生成ツール
- **DevTools Suite**: 開発者向け必須ユーティリティ
- **Security Tools**: Webセキュリティテストおよび分析ツール
- **SEO Tools**: 検索エンジン最適化ツール

#### 34個の専門ツール
すべてのツールは無料で提供され、ログインなしですぐに使用可能です。

### 🌍 多言語サポート

Toolypetは8言語をサポートしています：
- 🇰🇷 韓国語 (ko)
- 🇺🇸 英語 (en)
- 🇯🇵 日本語 (ja)
- 🇨🇳 中国語 (zh)
- 🇪🇸 スペイン語 (es)
- 🇵🇹 ポルトガル語 (pt)
- 🇮🇳 ヒンディー語 (hi)
- 🇩🇪 ドイツ語 (de)

### 🔧 技術スタック

- **フレームワーク**: Next.js 15 (App Router)
- **言語**: TypeScript
- **スタイリング**: Tailwind CSS v4
- **アニメーション**: Framer Motion
- **国際化**: next-intl
- **パッケージマネージャー**: pnpm

### 📦 インストールと実行

#### 要件
- Node.js 18.17以上
- pnpm 8.0以上

```bash
# 依存関係のインストール
pnpm install

# 開発サーバーの起動 (http://localhost:3000)
pnpm dev

# プロダクションビルド
pnpm build

# プロダクションサーバーの起動
pnpm start

# 全サービスのローカル実行（テスト用）
./scripts/start-local.sh
```

### 📁 プロジェクト構造

```
toolypet/
├── app/
│   ├── [locale]/               # 国際化ルーティング
│   │   ├── layout.tsx          # 共通レイアウト
│   │   ├── page.tsx            # ホームページ
│   │   ├── contact/            # お問い合わせ
│   │   ├── privacy-policy/     # プライバシーポリシー
│   │   ├── terms/              # 利用規約
│   │   ├── tools-gallery/      # ツールギャラリー
│   │   └── updates/            # アップデート履歴
│   ├── css/                    # CSS Studio リダイレクト
│   ├── devtools/               # DevTools リダイレクト
│   ├── security/               # Security Tools リダイレクト
│   └── seo/                    # SEO Tools リダイレクト
├── components/                 # React コンポーネント
├── lib/
│   └── i18n/
│       └── locales/            # 翻訳ファイル (JSON)
├── i18n.ts                     # next-intl 設定
├── middleware.ts               # 国際化ミドルウェア
└── tailwind.config.css         # Tailwind CSS v4 設定
```

### 🌐 国際化 (i18n)

- **ライブラリ**: next-intl
- **ファイル形式**: JSON
- **パス**: `/lib/i18n/locales/`

### 🚀 デプロイ

Vercelでのデプロイ（推奨）:
```bash
vercel
```

### 📧 お問い合わせ

ご質問やご提案がございましたら、contact@toolypet.comまでご連絡ください。

---

## 中文

### 🚀 项目介绍

Toolypet是为开发者提供34个专业工具的综合平台。从CSS编辑器到安全工具、SEO优化，一站式解决所有需求。

### 🛠 主要功能

#### 4个集成服务
- **CSS Studio**：高级CSS编辑和生成工具
- **DevTools Suite**：开发者必备实用工具
- **Security Tools**：Web安全测试和分析工具
- **SEO Tools**：搜索引擎优化工具

#### 34个专业工具
所有工具免费提供，无需登录即可立即使用。

### 🌍 多语言支持

Toolypet支持8种语言：
- 🇰🇷 韩语 (ko)
- 🇺🇸 英语 (en)
- 🇯🇵 日语 (ja)
- 🇨🇳 中文 (zh)
- 🇪🇸 西班牙语 (es)
- 🇵🇹 葡萄牙语 (pt)
- 🇮🇳 印地语 (hi)
- 🇩🇪 德语 (de)

### 🔧 技术栈

- **框架**: Next.js 15 (App Router)
- **语言**: TypeScript
- **样式**: Tailwind CSS v4
- **动画**: Framer Motion
- **国际化**: next-intl
- **包管理器**: pnpm

### 📦 安装和运行

#### 要求
- Node.js 18.17+
- pnpm 8.0+

```bash
# 安装依赖
pnpm install

# 运行开发服务器 (http://localhost:3000)
pnpm dev

# 构建生产版本
pnpm build

# 运行生产服务器
pnpm start

# 本地运行所有服务（用于测试）
./scripts/start-local.sh
```

### 📁 项目结构

```
toolypet/
├── app/
│   ├── [locale]/               # 国际化路由
│   │   ├── layout.tsx          # 公共布局
│   │   ├── page.tsx            # 首页
│   │   ├── contact/            # 联系我们
│   │   ├── privacy-policy/     # 隐私政策
│   │   ├── terms/              # 服务条款
│   │   ├── tools-gallery/      # 工具画廊
│   │   └── updates/            # 更新日志
│   ├── css/                    # CSS Studio 重定向
│   ├── devtools/               # DevTools 重定向
│   ├── security/               # Security Tools 重定向
│   └── seo/                    # SEO Tools 重定向
├── components/                 # React 组件
├── lib/
│   └── i18n/
│       └── locales/            # 翻译文件 (JSON)
├── i18n.ts                     # next-intl 配置
├── middleware.ts               # 国际化中间件
└── tailwind.config.css         # Tailwind CSS v4 配置
```

### 🌐 国际化 (i18n)

- **库**: next-intl
- **文件格式**: JSON
- **路径**: `/lib/i18n/locales/`

### 🚀 部署

推荐部署到 Vercel：
```bash
vercel
```

### 📧 联系方式

如有问题或建议，请联系contact@toolypet.com

---

## Español

### 🚀 Introducción del Proyecto

Toolypet es una plataforma integrada que proporciona 34 herramientas profesionales para desarrolladores. Desde editores CSS hasta herramientas de seguridad y optimización SEO, todo se puede resolver en un solo lugar.

### 🛠 Características Principales

#### 4 Servicios Integrados
- **CSS Studio**: Herramientas avanzadas de edición y generación CSS
- **DevTools Suite**: Utilidades esenciales para desarrolladores
- **Security Tools**: Herramientas de prueba y análisis de seguridad web
- **SEO Tools**: Herramientas de optimización para motores de búsqueda

#### 34 Herramientas Profesionales
Todas las herramientas se proporcionan de forma gratuita y se pueden usar de inmediato sin iniciar sesión.

### 🌍 Soporte Multiidioma

Toolypet admite 8 idiomas:
- 🇰🇷 Coreano (ko)
- 🇺🇸 Inglés (en)
- 🇯🇵 Japonés (ja)
- 🇨🇳 Chino (zh)
- 🇪🇸 Español (es)
- 🇵🇹 Portugués (pt)
- 🇮🇳 Hindi (hi)
- 🇩🇪 Alemán (de)

### 🔧 Stack Tecnológico

- **Framework**: Next.js 15 (App Router)
- **Lenguaje**: TypeScript
- **Estilos**: Tailwind CSS v4
- **Animaciones**: Framer Motion
- **Internacionalización**: next-intl
- **Gestor de paquetes**: pnpm

### 📦 Instalación y Ejecución

#### Requisitos
- Node.js 18.17+
- pnpm 8.0+

```bash
# Instalar dependencias
pnpm install

# Ejecutar servidor de desarrollo (http://localhost:3000)
pnpm dev

# Construir para producción
pnpm build

# Ejecutar servidor de producción
pnpm start

# Ejecutar todos los servicios localmente (para pruebas)
./scripts/start-local.sh
```

### 📁 Estructura del Proyecto

```
toolypet/
├── app/
│   ├── [locale]/               # Enrutamiento i18n
│   │   ├── layout.tsx          # Layout común
│   │   ├── page.tsx            # Página de inicio
│   │   ├── contact/            # Contacto
│   │   ├── privacy-policy/     # Política de privacidad
│   │   ├── terms/              # Términos de servicio
│   │   ├── tools-gallery/      # Galería de herramientas
│   │   └── updates/            # Actualizaciones
│   ├── css/                    # Redirección CSS Studio
│   ├── devtools/               # Redirección DevTools
│   ├── security/               # Redirección Security Tools
│   └── seo/                    # Redirección SEO Tools
├── components/                 # Componentes React
├── lib/
│   └── i18n/
│       └── locales/            # Archivos de traducción (JSON)
├── i18n.ts                     # Configuración next-intl
├── middleware.ts               # Middleware i18n
└── tailwind.config.css         # Configuración Tailwind CSS v4
```

### 🌐 Internacionalización (i18n)

- **Biblioteca**: next-intl
- **Formato de archivo**: JSON
- **Ruta**: `/lib/i18n/locales/`

### 🚀 Despliegue

Desplegar en Vercel (recomendado):
```bash
vercel
```

### 📧 Contacto

Para preguntas o sugerencias, contáctenos en contact@toolypet.com

---

## Português

### 🚀 Introdução do Projeto

Toolypet é uma plataforma integrada que fornece 34 ferramentas profissionais para desenvolvedores. De editores CSS a ferramentas de segurança e otimização SEO, tudo pode ser resolvido em um só lugar.

### 🛠 Recursos Principais

#### 4 Serviços Integrados
- **CSS Studio**: Ferramentas avançadas de edição e geração CSS
- **DevTools Suite**: Utilitários essenciais para desenvolvedores
- **Security Tools**: Ferramentas de teste e análise de segurança web
- **SEO Tools**: Ferramentas de otimização para mecanismos de busca

#### 34 Ferramentas Profissionais
Todas as ferramentas são fornecidas gratuitamente e podem ser usadas imediatamente sem login.

### 🌍 Suporte Multilíngue

Toolypet suporta 8 idiomas:
- 🇰🇷 Coreano (ko)
- 🇺🇸 Inglês (en)
- 🇯🇵 Japonês (ja)
- 🇨🇳 Chinês (zh)
- 🇪🇸 Espanhol (es)
- 🇵🇹 Português (pt)
- 🇮🇳 Hindi (hi)
- 🇩🇪 Alemão (de)

### 🔧 Stack Tecnológico

- **Framework**: Next.js 15 (App Router)
- **Linguagem**: TypeScript
- **Estilização**: Tailwind CSS v4
- **Animações**: Framer Motion
- **Internacionalização**: next-intl
- **Gerenciador de pacotes**: pnpm

### 📦 Instalação e Execução

#### Requisitos
- Node.js 18.17+
- pnpm 8.0+

```bash
# Instalar dependências
pnpm install

# Executar servidor de desenvolvimento (http://localhost:3000)
pnpm dev

# Construir para produção
pnpm build

# Executar servidor de produção
pnpm start

# Executar todos os serviços localmente (para testes)
./scripts/start-local.sh
```

### 📁 Estrutura do Projeto

```
toolypet/
├── app/
│   ├── [locale]/               # Roteamento i18n
│   │   ├── layout.tsx          # Layout comum
│   │   ├── page.tsx            # Página inicial
│   │   ├── contact/            # Contato
│   │   ├── privacy-policy/     # Política de privacidade
│   │   ├── terms/              # Termos de serviço
│   │   ├── tools-gallery/      # Galeria de ferramentas
│   │   └── updates/            # Atualizações
│   ├── css/                    # Redirecionamento CSS Studio
│   ├── devtools/               # Redirecionamento DevTools
│   ├── security/               # Redirecionamento Security Tools
│   └── seo/                    # Redirecionamento SEO Tools
├── components/                 # Componentes React
├── lib/
│   └── i18n/
│       └── locales/            # Arquivos de tradução (JSON)
├── i18n.ts                     # Configuração next-intl
├── middleware.ts               # Middleware i18n
└── tailwind.config.css         # Configuração Tailwind CSS v4
```

### 🌐 Internacionalização (i18n)

- **Biblioteca**: next-intl
- **Formato de arquivo**: JSON
- **Caminho**: `/lib/i18n/locales/`

### 🚀 Deploy

Deploy no Vercel (recomendado):
```bash
vercel
```

### 📧 Contato

Para perguntas ou sugerências, entre em contato conosco em contact@toolypet.com

---

## हिन्दी

### 🚀 प्रोजेक्ट परिचय

Toolypet डेवलपर्स के लिए 34 पेशेवर टूल्स प्रदान करने वाला एक एकीकृत प्लेटफॉर्म है। CSS एडिटर से लेकर सुरक्षा टूल्स और SEO अनुकूलन तक, सबकुछ एक जगह हल किया जा सकता है।

### 🛠 मुख्य सुविधाएं

#### 4 एकीकृत सेवाएं
- **CSS Studio**: उन्नत CSS संपादन और जेनरेशन टूल्स
- **DevTools Suite**: डेवलपर्स के लिए आवश्यक उपयोगिताएं
- **Security Tools**: वेब सुरक्षा परीक्षण और विश्लेषण टूल्स
- **SEO Tools**: सर्च इंजन ऑप्टिमाइज़ेशन टूल्स

#### 34 पेशेवर टूल्स
सभी टूल्स मुफ्त में प्रदान किए जाते हैं और बिना लॉगिन के तुरंत उपयोग किए जा सकते हैं।

### 🌍 बहुभाषी समर्थन

Toolypet 8 भाषाओं का समर्थन करता है:
- 🇰🇷 कोरियाई (ko)
- 🇺🇸 अंग्रेजी (en)
- 🇯🇵 जापानी (ja)
- 🇨🇳 चीनी (zh)
- 🇪🇸 स्पेनिश (es)
- 🇵🇹 पुर्तगाली (pt)
- 🇮🇳 हिन्दी (hi)
- 🇩🇪 जर्मन (de)

### 🔧 तकनीकी स्टैक

- **फ्रेमवर्क**: Next.js 15 (App Router)
- **भाषा**: TypeScript
- **स्टाइलिंग**: Tailwind CSS v4
- **एनीमेशन**: Framer Motion
- **अंतर्राष्ट्रीयकरण**: next-intl
- **पैकेज मैनेजर**: pnpm

### 📦 इंस्टॉलेशन और चलाना

#### आवश्यकताएं
- Node.js 18.17+
- pnpm 8.0+

```bash
# निर्भरताएं इंस्टॉल करें
pnpm install

# डेवलपमेंट सर्वर चलाएं (http://localhost:3000)
pnpm dev

# प्रोडक्शन के लिए बिल्ड करें
pnpm build

# प्रोडक्शन सर्वर चलाएं
pnpm start

# सभी सेवाएं स्थानीय रूप से चलाएं (परीक्षण के लिए)
./scripts/start-local.sh
```

### 📁 प्रोजेक्ट संरचना

```
toolypet/
├── app/
│   ├── [locale]/               # i18n रूटिंग
│   │   ├── layout.tsx          # सामान्य लेआउट
│   │   ├── page.tsx            # होमपेज
│   │   ├── contact/            # संपर्क
│   │   ├── privacy-policy/     # गोपनीयता नीति
│   │   ├── terms/              # सेवा की शर्तें
│   │   ├── tools-gallery/      # टूल गैलरी
│   │   └── updates/            # अपडेट
│   ├── css/                    # CSS Studio रीडायरेक्ट
│   ├── devtools/               # DevTools रीडायरेक्ट
│   ├── security/               # Security Tools रीडायरेक्ट
│   └── seo/                    # SEO Tools रीडायरेक्ट
├── components/                 # React कंपोनेंट्स
├── lib/
│   └── i18n/
│       └── locales/            # अनुवाद फाइलें (JSON)
├── i18n.ts                     # next-intl कॉन्फ़िगरेशन
├── middleware.ts               # i18n मिडलवेयर
└── tailwind.config.css         # Tailwind CSS v4 कॉन्फ़िगरेशन
```

### 🌐 अंतर्राष्ट्रीयकरण (i18n)

- **लाइब्रेरी**: next-intl
- **फाइल फॉर्मेट**: JSON
- **पथ**: `/lib/i18n/locales/`

### 🚀 डिप्लॉयमेंट

Vercel पर डिप्लॉय करें (अनुशंसित):
```bash
vercel
```

### 📧 संपर्क

प्रश्न या सुझावों के लिए, कृपया contact@toolypet.com पर संपर्क करें

---

## Deutsch

### 🚀 Projekt-Einführung

Toolypet ist eine integrierte Plattform, die 34 professionelle Tools für Entwickler bereitstellt. Von CSS-Editoren bis hin zu Sicherheits-Tools und SEO-Optimierung, alles kann an einem Ort gelöst werden.

### 🛠 Hauptfunktionen

#### 4 Integrierte Services
- **CSS Studio**: Erweiterte CSS-Bearbeitungs- und Generierungstools
- **DevTools Suite**: Unverzichtbare Utilities für Entwickler
- **Security Tools**: Web-Sicherheitstests und -analyse-Tools
- **SEO Tools**: Suchmaschinenoptimierungs-Tools

#### 34 Professionelle Tools
Alle Tools werden kostenlos bereitgestellt und können sofort ohne Login verwendet werden.

### 🌍 Mehrsprachige Unterstützung

Toolypet unterstützt 8 Sprachen:
- 🇰🇷 Koreanisch (ko)
- 🇺🇸 Englisch (en)
- 🇯🇵 Japanisch (ja)
- 🇨🇳 Chinesisch (zh)
- 🇪🇸 Spanisch (es)
- 🇵🇹 Portugiesisch (pt)
- 🇮🇳 Hindi (hi)
- 🇩🇪 Deutsch (de)

### 🔧 Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Sprache**: TypeScript
- **Styling**: Tailwind CSS v4
- **Animation**: Framer Motion
- **Internationalisierung**: next-intl
- **Package Manager**: pnpm

### 📦 Installation und Ausführung

#### Anforderungen
- Node.js 18.17+
- pnpm 8.0+

```bash
# Abhängigkeiten installieren
pnpm install

# Entwicklungsserver starten (http://localhost:3000)
pnpm dev

# Für Produktion bauen
pnpm build

# Produktionsserver starten
pnpm start

# Alle Services lokal ausführen (zum Testen)
./scripts/start-local.sh
```

### 📁 Projektstruktur

```
toolypet/
├── app/
│   ├── [locale]/               # i18n Routing
│   │   ├── layout.tsx          # Gemeinsames Layout
│   │   ├── page.tsx            # Homepage
│   │   ├── contact/            # Kontakt
│   │   ├── privacy-policy/     # Datenschutzrichtlinie
│   │   ├── terms/              # Nutzungsbedingungen
│   │   ├── tools-gallery/      # Tools Galerie
│   │   └── updates/            # Updates
│   ├── css/                    # CSS Studio Umleitung
│   ├── devtools/               # DevTools Umleitung
│   ├── security/               # Security Tools Umleitung
│   └── seo/                    # SEO Tools Umleitung
├── components/                 # React Komponenten
├── lib/
│   └── i18n/
│       └── locales/            # Übersetzungsdateien (JSON)
├── i18n.ts                     # next-intl Konfiguration
├── middleware.ts               # i18n Middleware
└── tailwind.config.css         # Tailwind CSS v4 Konfiguration
```

### 🌐 Internationalisierung (i18n)

- **Bibliothek**: next-intl
- **Dateiformat**: JSON
- **Pfad**: `/lib/i18n/locales/`

### 🚀 Deployment

Auf Vercel deployen (empfohlen):
```bash
vercel
```

### 📧 Kontakt

Für Fragen oder Anregungen kontaktieren Sie uns bitte unter contact@toolypet.com

---

© 2024 Toolypet. All rights reserved.