# @veeyaainnovatives/banner

A reusable Banner component with breadcrumb navigation and title parsing for React applications.

## Features

- 🎨 Customizable banner with background image
- 🍞 Breadcrumb navigation support
- ✨ Markdown-like title parsing (`**text**` for highlighting)
- 🎯 Fully configurable styling
- 📱 Responsive design with React Bootstrap
- 🔧 TypeScript support (coming soon)

## Installation

```bash
npm install @veeyaainnovatives/banner
```

## Peer Dependencies

This package requires the following peer dependencies:

- `react` (^16.8.0 || ^17.0.0 || ^18.0.0)
- `react-dom` (^16.8.0 || ^17.0.0 || ^18.0.0)
- `react-bootstrap` (^2.0.0)

## Usage

### Basic Example

```jsx
import { Banner } from '@veeyaainnovatives/banner';

function App() {
  const pageDetails = {
    title: "Welcome to **Our** Site",
    description: "This is a description of the page",
    breadcrumb: [
      { name: "Home", link: "/" },
      { name: "About", link: "/about" }
    ]
  };

  return (
    <Banner 
      img="/path/to/background-image.jpg"
      pageDetails={pageDetails}
    />
  );
}
```

### Advanced Example with Custom Styling

```jsx
import { Banner } from '@veeyaainnovatives/banner';

function App() {
  const pageDetails = {
    title: "Our **Products**",
    description: "Discover our innovative range of products",
    breadcrumb: [
      { name: "Home", link: "/" },
      { name: "Products", link: "/products" }
    ]
  };

  const handleBreadcrumbClick = (item) => {
    // Custom navigation logic
    console.log('Navigating to:', item.link);
    // Your navigation code here
  };

  return (
    <Banner 
      img="/path/to/image.jpg"
      pageDetails={pageDetails}
      className="custom-banner"
      overlayClassName="custom-overlay"
      titleClassName="custom-title"
      descriptionClassName="custom-description"
      highlightClassName="custom-highlight"
      onBreadcrumbClick={handleBreadcrumbClick}
      style={{ minHeight: '400px' }}
    />
  );
}
```

## Props

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `img` | `string` | Yes | - | Background image URL or path |
| `pageDetails` | `object` | Yes | - | Page details object |
| `pageDetails.title` | `string` | No | - | Page title (supports `**text**` for highlighting) |
| `pageDetails.description` | `string` | No | - | Page description |
| `pageDetails.breadcrumb` | `array` | No | - | Array of breadcrumb items |
| `pageDetails.breadcrumb[].name` | `string` | Yes | - | Breadcrumb item name |
| `pageDetails.breadcrumb[].link` | `string` | Yes | - | Breadcrumb item link |
| `className` | `string` | No | `''` | Additional CSS classes for banner container |
| `overlayClassName` | `string` | No | `''` | Additional CSS classes for overlay |
| `titleClassName` | `string` | No | `''` | Additional CSS classes for title |
| `descriptionClassName` | `string` | No | `''` | Additional CSS classes for description |
| `highlightClassName` | `string` | No | `''` | CSS class for highlighted text (optional, if not provided, `**text**` will be rendered as plain text) |
| `onBreadcrumbClick` | `function` | No | - | Callback when breadcrumb is clicked |
| `style` | `object` | No | `{}` | Additional inline styles |

## Title Parsing

The component supports markdown-like syntax in titles:

- `**text**` - Highlights text with the specified highlight class (if `highlightClassName` prop is provided)
- Example: `"Welcome to **Our** Site"` with `highlightClassName="my-highlight"` → "Welcome to <span class='my-highlight'>Our</span> Site"
- If `highlightClassName` is not provided, `**text**` will render as plain text without highlighting

## Styling

The component uses the following default CSS classes:

- `.banner-img` - Main banner container
- `.overlay` - Overlay div
- `.banner-title` - Title heading
- `.banner-desc` - Description paragraph
- Custom highlight class - Set via `highlightClassName` prop (optional)

You can override these styles or add custom classes using the className props.

## License

MIT

## Author

[Veeyaa Innovatives](https://www.veeyaainnovatives.com)

