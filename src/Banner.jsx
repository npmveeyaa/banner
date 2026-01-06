import React from 'react';
import { Breadcrumb, Container, Col, Row } from 'react-bootstrap';

/**
 * Banner Component
 * 
 * A reusable banner component with background image, title, description, and breadcrumb navigation.
 * Supports markdown-like syntax in titles (e.g., **text** for highlighting).
 * 
 * @param {string} img - Background image URL or path
 * @param {Object} pageDetails - Page details object
 * @param {string} pageDetails.title - Page title (supports **text** for highlighting)
 * @param {string} pageDetails.description - Page description
 * @param {Array} pageDetails.breadcrumb - Array of breadcrumb items
 * @param {string} pageDetails.breadcrumb[].name - Breadcrumb item name
 * @param {string} pageDetails.breadcrumb[].link - Breadcrumb item link
 * @param {string} className - Additional CSS classes for the banner container
 * @param {string} overlayClassName - Additional CSS classes for the overlay
 * @param {string} titleClassName - Additional CSS classes for the title
 * @param {string} descriptionClassName - Additional CSS classes for the description
 * @param {string} highlightClassName - CSS class for highlighted text (default: 'theme-color-green')
 * @param {Function} onBreadcrumbClick - Callback function when breadcrumb is clicked
 * @param {Object} style - Additional inline styles for the banner container
 * 
 * @example
 * ```jsx
 * <Banner 
 *   img="/path/to/image.jpg"
 *   pageDetails={{
 *     title: "Welcome to **Our** Site",
 *     description: "This is a description",
 *     breadcrumb: [
 *       { name: "Home", link: "/" },
 *       { name: "About", link: "/about" }
 *     ]
 *   }}
 * />
 * ```
 */
const Banner = ({
  img,
  pageDetails,
  className = '',
  overlayClassName = '',
  titleClassName = '',
  descriptionClassName = '',
  highlightClassName = '',
  onBreadcrumbClick,
  style = {}
}) => {
  /**
   * Parse markdown-like syntax in title
   * Converts **text** to <span class="highlightClassName">text</span>
   * 
   * @param {string} htmlString - String with markdown-like syntax
   * @returns {string} - HTML string with parsed highlights
   */
  const parseAsHtml = (htmlString) => {
    if (!htmlString) return '';
    // Only add class if highlightClassName is provided
    if (highlightClassName) {
      return htmlString.replace(
        /\*\*(.*?)\*\*/g, 
        `<span class="${highlightClassName}">$1</span>`
      );
    }
    // If no highlight class, just remove the ** markers
    return htmlString.replace(/\*\*(.*?)\*\*/g, '$1');
  };

  /**
   * Handle breadcrumb click
   * 
   * @param {Event} e - Click event
   * @param {Object} item - Breadcrumb item
   */
  const handleBreadcrumbClick = (e, item) => {
    if (onBreadcrumbClick) {
      e.preventDefault();
      onBreadcrumbClick(item);
    }
  };

  // Merge inline styles with background image
  const bannerStyle = {
    backgroundImage: `url(${img})`,
    ...style
  };

  return (
    <div 
      style={bannerStyle} 
      alt="banner-img" 
      className={`banner-img ${className}`.trim()}
    >
      <div className={`overlay p-md-5 ${overlayClassName}`.trim()}>
        <Container>
          <Row className="justify-content-md-center">
            <Col xs lg="10">
              {pageDetails?.title && (
                <h1 
                  className={`banner-title ${titleClassName}`.trim()}
                  dangerouslySetInnerHTML={{ 
                    __html: parseAsHtml(pageDetails.title) 
                  }}
                />
              )}

              {pageDetails?.description && (
                <p className={`banner-desc ${descriptionClassName}`.trim()}>
                  {pageDetails.description}
                </p>
              )}

              {pageDetails?.breadcrumb && pageDetails.breadcrumb.length > 0 && (
                <div>
                  <Breadcrumb>
                    {pageDetails.breadcrumb.map((item, index) => {
                      const isLast = index + 1 === pageDetails.breadcrumb.length;
                      
                      return isLast ? (
                        <Breadcrumb.Item active key={index}>
                          {item.name}
                        </Breadcrumb.Item>
                      ) : (
                        <Breadcrumb.Item 
                          href={item.link} 
                          key={index}
                          onClick={(e) => handleBreadcrumbClick(e, item)}
                        >
                          {item.name}
                        </Breadcrumb.Item>
                      );
                    })}
                  </Breadcrumb>
                </div>
              )}
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Banner;

