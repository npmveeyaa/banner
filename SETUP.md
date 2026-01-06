# Setup Instructions

## Development Setup

1. **Install Dependencies**
   ```bash
   cd packages/banner
   npm install
   ```

2. **Build the Library**
   ```bash
   npm run build
   ```

3. **Development Mode (Watch)**
   ```bash
   npm run dev
   ```

## Linking to Main Project

### Option 1: npm link (Development)

1. In the banner package directory:
   ```bash
   cd packages/banner
   npm link
   ```

2. In your main project:
   ```bash
   cd ../../  # back to root
   npm link @veeyaa/banner
   ```

### Option 2: Local Package Reference

In your main project's `package.json`:
```json
{
  "dependencies": {
    "@veeyaa/banner": "file:./packages/banner"
  }
}
```

Then run:
```bash
npm install
```

### Option 3: Publish to npm (Production)

1. Build the package:
   ```bash
   cd packages/banner
   npm run build
   ```

2. Publish:
   ```bash
   npm publish --access public
   ```

## Usage in Main Project

After linking or installing:

```jsx
import { Banner } from '@veeyaa/banner';

// Use in your components
<Banner img={bannerImg} pageDetails={pageDetails} />
```

## Required Styles

Make sure your main project has the following CSS classes available:

```css
.banner-img {
  /* Your banner styles */
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.overlay {
  /* Your overlay styles */
  background: rgba(0, 0, 0, 0.5);
}

.banner-title {
  /* Your title styles */
}

.banner-desc {
  /* Your description styles */
}

.theme-color-green {
  /* Your highlight color */
  color: #your-green-color;
}
```

Or customize using the className props!

