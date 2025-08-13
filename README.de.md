# Toolypet - All-in-One Entwickler-Tools-Plattform

[English](README.md) | [한국어](README.ko.md) | [日本語](README.ja.md) | [中文](README.zh.md) | [Español](README.es.md) | [Português](README.pt.md) | [हिन्दी](README.hi.md) | [Deutsch](README.de.md)

## 🚀 Projekt-Einführung

Toolypet ist eine integrierte Plattform, die 34 professionelle Tools für Entwickler bereitstellt. Von CSS-Editoren bis hin zu Sicherheits-Tools und SEO-Optimierung, alles kann an einem Ort gelöst werden.

## 🛠 Hauptfunktionen

### 4 Integrierte Services
- **CSS Studio**: Erweiterte CSS-Bearbeitungs- und Generierungstools
- **DevTools Suite**: Unverzichtbare Utilities für Entwickler
- **Security Tools**: Web-Sicherheitstests und -analyse-Tools
- **SEO Tools**: Suchmaschinenoptimierungs-Tools

### 34 Professionelle Tools
Alle Tools werden kostenlos bereitgestellt und können sofort ohne Login verwendet werden.

## 🌍 Mehrsprachige Unterstützung

Toolypet unterstützt 8 Sprachen:
- 🇺🇸 Englisch (en)
- 🇰🇷 Koreanisch (ko)
- 🇯🇵 Japanisch (ja)
- 🇨🇳 Chinesisch (zh)
- 🇪🇸 Spanisch (es)
- 🇵🇹 Portugiesisch (pt)
- 🇮🇳 Hindi (hi)
- 🇩🇪 Deutsch (de)

## 🔧 Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Sprache**: TypeScript
- **Styling**: Tailwind CSS v4
- **Animation**: Framer Motion
- **Internationalisierung**: next-intl
- **Package Manager**: pnpm

## 📦 Installation und Ausführung

### Anforderungen
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

## 📁 Projektstruktur

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

## 🌐 Internationalisierung (i18n)

- **Bibliothek**: next-intl
- **Dateiformat**: JSON
- **Pfad**: `/lib/i18n/locales/`

## 🚀 Deployment

Auf Vercel deployen (empfohlen):
```bash
vercel
```

---

© 2025 Toolypet. Alle Rechte vorbehalten.