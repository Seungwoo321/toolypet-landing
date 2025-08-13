# Toolypet - Plataforma de Herramientas Todo en Uno para Desarrolladores

[English](README.md) | [한국어](README.ko.md) | [日本語](README.ja.md) | [中文](README.zh.md) | [Español](README.es.md) | [Português](README.pt.md) | [हिन्दी](README.hi.md) | [Deutsch](README.de.md)

## 🚀 Introducción del Proyecto

Toolypet es una plataforma integrada que proporciona 34 herramientas profesionales para desarrolladores. Desde editores CSS hasta herramientas de seguridad y optimización SEO, todo se puede resolver en un solo lugar.

## 🛠 Características Principales

### 4 Servicios Integrados
- **CSS Studio**: Herramientas avanzadas de edición y generación CSS
- **DevTools Suite**: Utilidades esenciales para desarrolladores
- **Security Tools**: Herramientas de prueba y análisis de seguridad web
- **SEO Tools**: Herramientas de optimización para motores de búsqueda

### 34 Herramientas Profesionales
Todas las herramientas se proporcionan de forma gratuita y se pueden usar de inmediato sin iniciar sesión.

## 🌍 Soporte Multiidioma

Toolypet admite 8 idiomas:
- 🇺🇸 Inglés (en)
- 🇰🇷 Coreano (ko)
- 🇯🇵 Japonés (ja)
- 🇨🇳 Chino (zh)
- 🇪🇸 Español (es)
- 🇵🇹 Portugués (pt)
- 🇮🇳 Hindi (hi)
- 🇩🇪 Alemán (de)

## 🔧 Stack Tecnológico

- **Framework**: Next.js 15 (App Router)
- **Lenguaje**: TypeScript
- **Estilos**: Tailwind CSS v4
- **Animaciones**: Framer Motion
- **Internacionalización**: next-intl
- **Gestor de paquetes**: pnpm

## 📦 Instalación y Ejecución

### Requisitos
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

## 📁 Estructura del Proyecto

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

## 🌐 Internacionalización (i18n)

- **Biblioteca**: next-intl
- **Formato de archivo**: JSON
- **Ruta**: `/lib/i18n/locales/`

## 🚀 Despliegue

Desplegar en Vercel (recomendado):
```bash
vercel
```

---

© 2025 Toolypet. Todos los derechos reservados.