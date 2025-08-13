# Toolypet - 올인원 개발자 도구 플랫폼

[English](README.md) | [한국어](README.ko.md) | [日本語](README.ja.md) | [中文](README.zh.md) | [Español](README.es.md) | [Português](README.pt.md) | [हिन्दी](README.hi.md) | [Deutsch](README.de.md)

## 🚀 프로젝트 소개

Toolypet은 개발자를 위한 34개의 전문 도구를 제공하는 통합 플랫폼입니다. CSS 편집기부터 보안 도구, SEO 최적화까지 모든 것을 한 곳에서 해결할 수 있습니다.

## 🛠 주요 기능

### 4개의 통합 서비스
- **CSS Studio**: 고급 CSS 편집 및 생성 도구
- **DevTools Suite**: 개발자를 위한 필수 유틸리티
- **Security Tools**: 웹 보안 테스트 및 분석 도구
- **SEO Tools**: 검색 엔진 최적화 도구

### 34개의 전문 도구
모든 도구는 무료로 제공되며, 로그인 없이 즉시 사용 가능합니다.

## 🌍 다국어 지원

Toolypet은 8개 언어를 지원합니다:
- 🇺🇸 영어 (en)
- 🇰🇷 한국어 (ko)
- 🇯🇵 일본어 (ja)
- 🇨🇳 중국어 (zh)
- 🇪🇸 스페인어 (es)
- 🇵🇹 포르투갈어 (pt)
- 🇮🇳 힌디어 (hi)
- 🇩🇪 독일어 (de)

## 🔧 기술 스택

- **프레임워크**: Next.js 15 (App Router)
- **언어**: TypeScript
- **스타일링**: Tailwind CSS v4
- **애니메이션**: Framer Motion
- **국제화**: next-intl
- **패키지 매니저**: pnpm

## 📦 설치 및 실행

### 요구사항
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

## 📁 프로젝트 구조

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

## 🌐 국제화 (i18n)

- **라이브러리**: next-intl
- **파일 형식**: JSON
- **경로**: `/lib/i18n/locales/`

## 🚀 배포

Vercel 배포 (권장):
```bash
vercel
```

---

© 2025 Toolypet. All rights reserved.