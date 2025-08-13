# Toolypet - オールインワン開発者ツールプラットフォーム

[English](README.md) | [한국어](README.ko.md) | [日本語](README.ja.md) | [中文](README.zh.md) | [Español](README.es.md) | [Português](README.pt.md) | [हिन्दी](README.hi.md) | [Deutsch](README.de.md)

## 🚀 プロジェクト紹介

Toolypetは開発者向けの34個の専門ツールを提供する統合プラットフォームです。CSSエディタからセキュリティツール、SEO最適化まで、すべてを一箇所で解決できます。

## 🛠 主な機能

### 4つの統合サービス
- **CSS Studio**: 高度なCSS編集および生成ツール
- **DevTools Suite**: 開発者向け必須ユーティリティ
- **Security Tools**: Webセキュリティテストおよび分析ツール
- **SEO Tools**: 検索エンジン最適化ツール

### 34個の専門ツール
すべてのツールは無料で提供され、ログインなしですぐに使用可能です。

## 🌍 多言語サポート

Toolypetは8言語をサポートしています：
- 🇺🇸 英語 (en)
- 🇰🇷 韓国語 (ko)
- 🇯🇵 日本語 (ja)
- 🇨🇳 中国語 (zh)
- 🇪🇸 スペイン語 (es)
- 🇵🇹 ポルトガル語 (pt)
- 🇮🇳 ヒンディー語 (hi)
- 🇩🇪 ドイツ語 (de)

## 🔧 技術スタック

- **フレームワーク**: Next.js 15 (App Router)
- **言語**: TypeScript
- **スタイリング**: Tailwind CSS v4
- **アニメーション**: Framer Motion
- **国際化**: next-intl
- **パッケージマネージャー**: pnpm

## 📦 インストールと実行

### 要件
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

## 📁 プロジェクト構造

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

## 🌐 国際化 (i18n)

- **ライブラリ**: next-intl
- **ファイル形式**: JSON
- **パス**: `/lib/i18n/locales/`

## 🚀 デプロイ

Vercelでのデプロイ（推奨）:
```bash
vercel
```

---

© 2025 Toolypet. All rights reserved.