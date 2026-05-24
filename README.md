# Insure Dome - Digital Insurance Platform

A modern, responsive, multilingual landing page for insurance services built with React, Vite, Tailwind CSS, and i18next.

## 🚀 Quick Start

### Prerequisites
- Node.js 18.x or higher
- npm or yarn

### Installation & Development
```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📋 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server (http://localhost:5173) |
| `npm run build` | Build production bundle to `dist/` |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint code analysis |
| `npm run type-check` | Run TypeScript type checking |
| `npm run check` | Run lint + type-check together |

## 🌐 Features

- **Multilingual Support**: English, Hindi (हिन्दी), Gujarati (ગુજરાતી)
- **Dynamic Language Switching**: Via header buttons or URL query params (`?lang=gu`)
- **Responsive Design**: Mobile-first, optimized for all screen sizes
- **Glassmorphic UI**: Modern design system with ambient shadows
- **Accessibility**: WCAG 2.1 AA compliant
- **Client-Side Routing**: HashRouter for GitHub Pages compatibility
- **Inquiry Modal**: Contact form with Turnstile bot protection placeholder
- **Floating Action Button**: Fixed "Call Us" button with responsive design

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── Header.tsx       # Sticky header with language switcher
│   ├── TrustStats.tsx   # 4-column credibility stats grid
│   ├── CategoryTiles.tsx# 3 insurance product cards
│   ├── InquiryModal.tsx # Contact form modal
│   └── FloatingActionButton.tsx # Fixed FAB
├── hooks/               # Custom React hooks
│   └── useLangQueryParam.ts # Language parameter & auto-scroll
├── locales/             # i18n translation files
│   ├── en/translation.json
│   ├── hi/translation.json
│   └── gu/translation.json
├── App.tsx              # Main app component
├── i18n.ts              # i18next configuration
├── index.css            # Global styles
└── main.tsx             # React entry point
```

## 🎨 Design System

**Colors:**
- Primary: `#091426` (Deep Navy)
- Secondary: `#4648d4` (Indigo)
- Success: `#10b981` (Green)
- Accent: `#8b5cf6` (Purple)

**Typography:**
- Headings: Hanken Grotesk (700-800 weight)
- Body: Inter (400 weight)

**Spacing Scale:** xs(4px) → sm(8px) → md(16px) → lg(24px) → xl(32px)

**Shadows:** 3-level ambient shadow system (L1, L2, L3)

## 🔗 URL Query Parameters

| Parameter | Example | Effect |
|-----------|---------|--------|
| `lang` | `?lang=gu` | Changes UI language to Gujarati |
| `scroll` | `?scroll=products` | Auto-scrolls to section (hero, stats, products) |
| Combined | `?lang=hi&scroll=stats` | Change language + scroll to stats |

## 📱 Responsive Breakpoints

- **Mobile**: < 640px (1 column layouts)
- **Tablet**: 640px - 1024px (2 column layouts)
- **Desktop**: > 1024px (3-4 column layouts)

## ✅ Accessibility

- WCAG 2.1 AA compliant
- Keyboard navigation support
- Screen reader friendly
- Color contrast ≥ 4.5:1
- Touch targets ≥ 44x44px
- Semantic HTML structure

See [TESTING.md](TESTING.md) for detailed accessibility verification.

## 🚀 GitHub Pages Deployment

The project is configured for automatic deployment via GitHub Actions.

### Setup Instructions
1. Push code to main branch
2. GitHub Actions workflow triggers automatically
3. Site deploys to `https://username.github.io/insuredome-website/`

### Configuration
- Base URL: Set in `.github/workflows/deploy.yml` (VITE_BASE)
- GitHub Pages: Enabled for `gh-pages` branch
- 404 Redirect: Configured in `public/404.html`

## 🧪 Testing & Verification

See [TESTING.md](TESTING.md) for comprehensive testing guide including:
- Accessibility testing (WCAG 2.1 AA)
- Cross-device verification
- Performance metrics (Lighthouse)
- Localization testing
- GitHub Pages deployment verification

Quick checklist:
```bash
npm run check    # Type & lint checks
npm run build    # Build production bundle
npm run preview  # Test production build
```

## 📚 Tech Stack

- **React 19**: UI framework
- **Vite 8**: Build tool & dev server
- **TypeScript**: Type safety
- **Tailwind CSS 3**: Utility-first CSS
- **react-i18next**: Internationalization
- **react-router-dom**: Client-side routing (HashRouter)
- **ESLint & TypeScript ESLint**: Code quality

## 📄 License

Private project - All rights reserved.

## 👥 Contributors

Developed by the Insure Dome team.

---

**Status**: ✅ Production Ready | **Last Updated**: May 2026
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
