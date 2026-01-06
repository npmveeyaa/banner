# Usage Examples

## Example 1: Basic Usage

```jsx
import { Banner } from '@veeyaa/banner';

const MyPage = () => {
  const pageDetails = {
    title: "About **Us**",
    description: "Learn more about our company",
    breadcrumb: [
      { name: "Home", link: "/" },
      { name: "About", link: "/about" }
    ]
  };

  return (
    <Banner 
      img="/images/banner-about.jpg"
      pageDetails={pageDetails}
    />
  );
};
```

## Example 2: With React Router

```jsx
import { Banner } from '@veeyaa/banner';
import { useNavigate } from 'react-router-dom';

const MyPage = () => {
  const navigate = useNavigate();
  
  const pageDetails = {
    title: "Terms and **Conditions**",
    description: "Please read carefully",
    breadcrumb: [
      { name: "Home", link: "/" },
      { name: "Terms", link: "/terms" }
    ]
  };

  const handleBreadcrumbClick = (item) => {
    navigate(item.link);
  };

  return (
    <Banner 
      img="/images/banner-terms.jpg"
      pageDetails={pageDetails}
      onBreadcrumbClick={handleBreadcrumbClick}
    />
  );
};
```

## Example 3: Custom Styling

```jsx
import { Banner } from '@veeyaa/banner';
import './custom-banner.css';

const MyPage = () => {
  const pageDetails = {
    title: "Services",
    description: "Our amazing services",
    breadcrumb: [
      { name: "Home", link: "/" },
      { name: "Services", link: "/services" }
    ]
  };

  return (
    <Banner 
      img="/images/banner-services.jpg"
      pageDetails={pageDetails}
      className="my-custom-banner"
      highlightClassName="my-highlight"
      style={{ minHeight: '500px', backgroundSize: 'cover' }}
    />
  );
};
```

