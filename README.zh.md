# Toolypet - 一站式开发者工具平台

[English](README.md) | [한국어](README.ko.md) | [日本語](README.ja.md) | [中文](README.zh.md) | [Español](README.es.md) | [Português](README.pt.md) | [हिन्दी](README.hi.md) | [Deutsch](README.de.md)

## 🚀 项目介绍

Toolypet是为开发者提供34个专业工具的综合平台。从CSS编辑器到安全工具、SEO优化，一站式解决所有需求。

## 🛠 主要功能

### 4个集成服务
- **CSS Studio**：高级CSS编辑和生成工具
- **DevTools Suite**：开发者必备实用工具
- **Security Tools**：Web安全测试和分析工具
- **SEO Tools**：搜索引擎优化工具

### 34个专业工具
所有工具免费提供，无需登录即可立即使用。

## 🌍 多语言支持

Toolypet支持8种语言：
- 🇺🇸 英语 (en)
- 🇰🇷 韩语 (ko)
- 🇯🇵 日语 (ja)
- 🇨🇳 中文 (zh)
- 🇪🇸 西班牙语 (es)
- 🇵🇹 葡萄牙语 (pt)
- 🇮🇳 印地语 (hi)
- 🇩🇪 德语 (de)

## 🔧 技术栈

- **框架**: Next.js 15 (App Router)
- **语言**: TypeScript
- **样式**: Tailwind CSS v4
- **动画**: Framer Motion
- **国际化**: next-intl
- **包管理器**: pnpm

## 📦 安装和运行

### 要求
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

## 📁 项目结构

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

## 🌐 国际化 (i18n)

- **库**: next-intl
- **文件格式**: JSON
- **路径**: `/lib/i18n/locales/`

## 🚀 部署

推荐部署到 Vercel：
```bash
vercel
```

---

© 2025 Toolypet. All rights reserved.