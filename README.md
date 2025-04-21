# Frontend Developer Task - Responsive Website

This project is a responsive website built for a frontend developer task, adhering to the provided Figma designs for 1440px, 768px, and 360px breakpoints. The website is developed using vanilla JavaScript, HTML5, and CSS, with a focus on reusability, accessibility, SEO best practices, and performance optimization.

## Table of Contents

- [Project Overview](#project-overview)
- [Folder Structure](#folder-structure)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Setup Instructions](#setup-instructions)
- [Best Practices Implemented](#best-practices-implemented)
- [CSS File Breakdown](#css-file-breakdown)
- [Accessibility and SEO](#accessibility-and-seo)
- [Responsive Design](#responsive-design)
- [Additional Notes](#additional-notes)

## Project Overview

This project is a fully responsive website built to match the Figma designs provided for desktop (1440px), tablet (768px), and mobile (360px) breakpoints. The website includes a contact form, a modal with a video player, reusable web components, and dynamic content loaded from a JSON file. The focus was on creating a reusable, accessible, SEO-friendly, and performant website using vanilla JavaScript, HTML5, and CSS.

## Folder Structure

```
├── assets/                # Static assets (images, videos, etc.)
│   └── hero-bg.webp        # Example: Hero background image
├── css/                   # CSS files
│   ├── base.css           # Global styles, CSS reset, and CSS variables
│   ├── hero.css           # Hero section styles
│   ├── sections.css       # Styles for other sections (e.g., understand, organize)
│   ├── modal.css          # Modal styles
│   ├── responsive.css     # Responsive design adjustments
│   └── style.css          # Main CSS file that imports all other CSS files
├── js/                    # JavaScript files
│   ├── content.json       # JSON file containing all website text content
│   └── script.js          # Main JavaScript file for interactivity and content mapping
├── web-component/         # Reusable web components built in vanilla JS
│   └── tooltip-component.js  # Example: Tooltip web component
├── index.html             # Main HTML file
├── thankyou.html          # Thank-you page after form submission
├── robots.txt             # Robots file for SEO
├── site-map.xml           # Sitemap for SEO
└── README.md              # Project documentation (this file)
```

## Features

- **Responsive Design**: Fully responsive website matching Figma designs for 1440px, 768px, and 360px breakpoints.
- **Reusable Web Components**: Built reusable web components (e.g., tooltip-component) in vanilla JavaScript for modularity and maintainability.
- **Dynamic Content**: All website text is stored in content.json and dynamically mapped to the DOM using script.js.
- **Modal with Video**: A responsive modal (down to 360px) containing a video player that plays on trigger.
- **Form Interactivity**: Contact form with validation, error messages (disappear after 1 second), and passive, hover, and pressed states as per Figma specs.
- **SEO Optimization**: SEO-friendly template with robots.txt, site-map.xml, JSON-LD schema, semantic HTML5, and proper meta tags.
- **Performance Optimization**: Preloading of critical assets (e.g., hero-bg.webp), fetchPriority, decoding="async", and optimized CSS/JS.
- **Accessibility**: Use of role, aria-* attributes, and semantic HTML5 for better accessibility.
- **CSS Variables**: Defined a color palette and other reusable variables in base.css for consistency and easy maintenance.
- **Button States**: Buttons (e.g., form submit) and form inputs feature passive, hover, and pressed states as defined in Figma.

## Technologies Used

- **HTML5**: Semantic markup with SEO and accessibility best practices.
- **CSS**: Modular CSS with 6 files for better organization and reusability.
- **Vanilla JavaScript**: Core interactivity, web components, and dynamic content mapping.
- **Figma**: Designs for 1440px, 768px, and 360px breakpoints.
- **JSON**: Content management using content.json.

## Setup Instructions

1. **Clone the Repository**:
   ```
   git clone url
   cd folder
   ```

2. **Serve the Project**:
   - Use a local server to serve the project (e.g., VS Code Live Server, or any static server).
   - Open index.html in a browser to view the website.

3. **Dependencies**:
   - No external dependencies are required; the project uses vanilla JS and CSS.
   - Ensure an internet connection for the Google Fonts import (Montserrat) in base.css.

4. **Test Responsiveness**:
   - Use browser developer tools to test the website at 1440px, 768px, and 360px breakpoints.

## Best Practices Implemented

### Reusability:
- Built reusable web components in vanilla JS (e.g., tooltip-component in the web-component folder).
- Defined CSS variables (e.g., color palette) in base.css for consistent theming.

### Performance:
- Preloaded critical assets like hero-bg.webp using <link rel="preload"> and JavaScript fallback.
- Used fetchPriority and decoding="async" on images for faster loading.
- Implemented a preloader (#preloader) to improve perceived performance.

### SEO:
- Used semantic HTML5 elements.
- Used modren images .webp format.
- Added robots.txt and site-map.xml for search engine crawling.
- Included JSON-LD schema for structured data.
- Used proper meta tags, alt attributes, and semantic markup.

### Accessibility:
- Added role and aria-* attributes for better screen reader support.
- Ensured keyboard navigation support (e.g., for the modal and form).

### User Experience:
- Disabled default text selection highlighting using ::selection.
- Prevented image dragging to avoid unwanted ghost images during mouse interaction.
- Form error messages disappear after 1 second for a cleaner UX.

## CSS File Breakdown

The CSS is split into 6 files for better organization and maintainability:

- **base.css**: Global styles, CSS reset, CSS variables (e.g., color palette), and selection/dragging behavior.
- **hero.css**: Styles for the hero section, including form inputs and submit button states.
- **sections.css**: Styles for other sections like "Understand" and "Organize".
- **modal.css**: Styles for the responsive modal and video player.
- **responsive.css**: Media queries for 768px and 360px breakpoints.
- **style.css**: Imports all other CSS files to consolidate styles.

## Accessibility and SEO

### Accessibility:
- Used role and aria-* attributes (e.g., aria-label, aria-required) on form elements, buttons, and modal.
- Ensured semantic HTML5 structure (e.g., <header>, <main>, <section>).
- Added keyboard navigation support for interactive elements.

### SEO:
- Included robots.txt and site-map.xml for search engine indexing.
- Used JSON-LD schema for structured data (e.g., organization or webpage schema).
- Added alt attributes to all images.
- Ensured fast loading with preloading and optimized assets.

## Responsive Design

- Matches Figma designs for 1440px (desktop), 768px (tablet), and 360px (mobile) breakpoints.
- Modal is responsive down to 360px, with the video player adjusting accordingly.
- Form layout adjusts at each breakpoint (e.g., stacking inputs vertically on mobile).
- Media queries are defined in responsive.css for layout adjustments.

## Additional Notes

- **Content Management**: All text content is stored in content.json and dynamically mapped to the DOM using script.js, making it easy to update content without touching the HTML.
- **Modal Video**: The modal includes a video player that plays on trigger and pauses when closed, with responsive styling down to 360px.
- **Form Behavior**: Form inputs and buttons feature passive, hover, and pressed states as per Figma. Error messages appear on invalid inputs and disappear after 1 second.
- **Performance**: Preloading of hero-bg.webp ensures the hero section loads quickly. The preloader hides after 1 second, but this can be adjusted to wait for the hero image to load fully if needed.
- **Future Improvements**:
  - Add lazy loading for images below the fold.
  - Optimize video loading in the modal for slower networks.
  - Add unit tests for web components.

This project demonstrates a strong focus on modern frontend development practices, including reusability, accessibility, SEO, and performance optimization, while adhering to the provided Figma designs.