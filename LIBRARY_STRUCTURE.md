# @veeyaa/banner Library Structure

## 📁 Directory Structure

```
packages/banner/
├── src/
│   ├── Banner.jsx          # Main Banner component
│   └── index.js            # Entry point (exports)
├── dist/                   # Build output (generated)
├── package.json            # Package configuration
├── rollup.config.js        # Build configuration
├── README.md               # Documentation
├── EXAMPLE.md              # Usage examples
├── SETUP.md                # Setup instructions
├── .gitignore              # Git ignore rules
└── .npmignore              # NPM publish ignore rules
```

## 🎯 What's Included

### Core Component
- **Banner.jsx** - Fully featured Banner component with:
  - Background image support
  - Title with markdown-like parsing (`**text**` → highlighted)
  - Description text
  - Breadcrumb navigation
  - Fully customizable styling
  - Click handlers for breadcrumbs

### Configuration Files
- **package.json** - NPM package configuration with peer dependencies
- **rollup.config.js** - Build configuration for bundling
- **.gitignore** - Git ignore patterns
- **.npmignore** - NPM publish ignore patterns

### Documentation
- **README.md** - Complete API documentation
- **EXAMPLE.md** - Usage examples
- **SETUP.md** - Setup and linking instructions

## 🚀 Next Steps

1. **Install Dependencies**
   ```bash
   cd packages/banner
   npm install
   ```

2. **Build the Library**
   ```bash
   npm run build
   ```

3. **Link to Main Project** (for development)
   ```bash
   npm link
   # Then in main project: npm link @veeyaa/banner
   ```

4. **Use in Your Project**
   ```jsx
   import { Banner } from '@veeyaa/banner';
   ```

## 📦 Package Details

- **Name**: `@veeyaa/banner`
- **Version**: `1.0.0`
- **License**: MIT
- **Author**: Veeyaa Innovatives

## 🔗 Peer Dependencies

- `react` (^16.8.0 || ^17.0.0 || ^18.0.0)
- `react-dom` (^16.8.0 || ^17.0.0 || ^18.0.0)
- `react-bootstrap` (^2.0.0)

## ✨ Features

- ✅ Reusable Banner component
- ✅ Breadcrumb navigation
- ✅ Markdown-like title parsing
- ✅ Fully customizable
- ✅ Responsive design
- ✅ TypeScript ready (can add types later)

