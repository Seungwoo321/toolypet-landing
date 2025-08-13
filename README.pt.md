# Toolypet - Plataforma de Ferramentas Tudo-em-Um para Desenvolvedores

[English](README.md) | [한국어](README.ko.md) | [日本語](README.ja.md) | [中文](README.zh.md) | [Español](README.es.md) | [Português](README.pt.md) | [हिन्दी](README.hi.md) | [Deutsch](README.de.md)

## 🚀 Introdução do Projeto

Toolypet é uma plataforma integrada que fornece 34 ferramentas profissionais para desenvolvedores. De editores CSS a ferramentas de segurança e otimização SEO, tudo pode ser resolvido em um só lugar.

## 🛠 Recursos Principais

### 4 Serviços Integrados
- **CSS Studio**: Ferramentas avançadas de edição e geração CSS
- **DevTools Suite**: Utilitários essenciais para desenvolvedores
- **Security Tools**: Ferramentas de teste e análise de segurança web
- **SEO Tools**: Ferramentas de otimização para mecanismos de busca

### 34 Ferramentas Profissionais
Todas as ferramentas são fornecidas gratuitamente e podem ser usadas imediatamente sem login.

## 🌍 Suporte Multilíngue

Toolypet suporta 8 idiomas:
- 🇺🇸 Inglês (en)
- 🇰🇷 Coreano (ko)
- 🇯🇵 Japonês (ja)
- 🇨🇳 Chinês (zh)
- 🇪🇸 Espanhol (es)
- 🇵🇹 Português (pt)
- 🇮🇳 Hindi (hi)
- 🇩🇪 Alemão (de)

## 🔧 Stack Tecnológico

- **Framework**: Next.js 15 (App Router)
- **Linguagem**: TypeScript
- **Estilização**: Tailwind CSS v4
- **Animações**: Framer Motion
- **Internacionalização**: next-intl
- **Gerenciador de pacotes**: pnpm

## 📦 Instalação e Execução

### Requisitos
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

## 📁 Estrutura do Projeto

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

## 🌐 Internacionalização (i18n)

- **Biblioteca**: next-intl
- **Formato de arquivo**: JSON
- **Caminho**: `/lib/i18n/locales/`

## 🚀 Deploy

Deploy no Vercel (recomendado):
```bash
vercel
```

---

© 2025 Toolypet. Todos os direitos reservados.