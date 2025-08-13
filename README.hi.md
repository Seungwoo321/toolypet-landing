# Toolypet - डेवलपर्स के लिए ऑल-इन-वन टूल्स प्लेटफॉर्म

[English](README.md) | [한국어](README.ko.md) | [日本語](README.ja.md) | [中文](README.zh.md) | [Español](README.es.md) | [Português](README.pt.md) | [हिन्दी](README.hi.md) | [Deutsch](README.de.md)

## 🚀 प्रोजेक्ट परिचय

Toolypet डेवलपर्स के लिए 34 पेशेवर टूल्स प्रदान करने वाला एक एकीकृत प्लेटफॉर्म है। CSS एडिटर से लेकर सुरक्षा टूल्स और SEO अनुकूलन तक, सबकुछ एक जगह हल किया जा सकता है।

## 🛠 मुख्य सुविधाएं

### 4 एकीकृत सेवाएं
- **CSS Studio**: उन्नत CSS संपादन और जेनरेशन टूल्स
- **DevTools Suite**: डेवलपर्स के लिए आवश्यक उपयोगिताएं
- **Security Tools**: वेब सुरक्षा परीक्षण और विश्लेषण टूल्स
- **SEO Tools**: सर्च इंजन ऑप्टिमाइज़ेशन टूल्स

### 34 पेशेवर टूल्स
सभी टूल्स मुफ्त में प्रदान किए जाते हैं और बिना लॉगिन के तुरंत उपयोग किए जा सकते हैं।

## 🌍 बहुभाषी समर्थन

Toolypet 8 भाषाओं का समर्थन करता है:
- 🇺🇸 अंग्रेजी (en)
- 🇰🇷 कोरियाई (ko)
- 🇯🇵 जापानी (ja)
- 🇨🇳 चीनी (zh)
- 🇪🇸 स्पेनिश (es)
- 🇵🇹 पुर्तगाली (pt)
- 🇮🇳 हिन्दी (hi)
- 🇩🇪 जर्मन (de)

## 🔧 तकनीकी स्टैक

- **फ्रेमवर्क**: Next.js 15 (App Router)
- **भाषा**: TypeScript
- **स्टाइलिंग**: Tailwind CSS v4
- **एनीमेशन**: Framer Motion
- **अंतर्राष्ट्रीयकरण**: next-intl
- **पैकेज मैनेजर**: pnpm

## 📦 इंस्टॉलेशन और चलाना

### आवश्यकताएं
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

## 📁 प्रोजेक्ट संरचना

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

## 🌐 अंतर्राष्ट्रीयकरण (i18n)

- **लाइब्रेरी**: next-intl
- **फाइल फॉर्मेट**: JSON
- **पथ**: `/lib/i18n/locales/`

## 🚀 डिप्लॉयमेंट

Vercel पर डिप्लॉय करें (अनुशंसित):
```bash
vercel
```

---

© 2025 Toolypet. सभी अधिकार सुरक्षित।