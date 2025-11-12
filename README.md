# Norbert Studio Static Site

A fully responsive, accessibility-minded marketing site built with semantic HTML5, modern CSS, and lean vanilla JavaScript. The project ships with three ready-to-use homepage variants assembled from the same modular components.

## Project structure

```
repoNorbert/
├── assets/
│   └── images/
│       ├── avatar-1.svg
│       ├── avatar-2.svg
│       ├── avatar-3.svg
│       └── hero-pattern.svg
├── css/
│   └── style.css
├── js/
│   └── main.js
├── home-experience.html
├── home-growth.html
├── index.html
└── README.md
```

### Component overview

| Module | Description |
| --- | --- |
| Header / Navigation | Sticky header with hamburger toggle, dropdown menu support, and call-to-action button. |
| Hero / Banner | Full-width hero with flexible media (image or video) and statistic cards. |
| Animated Slider | Reusable slider supporting images and video, autoplay, pagination dots, and keyboard controls. |
| Content Sections | Feature cards, testimonial layouts, media grids, and inline video triggers built on CSS grid / flexbox. |
| Contact Form | Accessible form with validation, inline feedback, and honeypot spam protection. |
| Footer | Multi-column footer with social links and metadata. |

All modules are styled using CSS custom properties declared at the top of `css/style.css`. Adjusting tokens there will cascade through every component without editing individual selectors.

## Getting started

1. **Install dependencies:** none required.
2. **Run locally:**
   ```bash
   python3 -m http.server 8080
   ```
   Then visit `http://localhost:8080/index.html` (or any homepage variant) in your browser.
3. **Build / deploy:** copy the repository contents to any static host (Netlify, Vercel, GitHub Pages, S3). No build step is necessary.

## Accessibility & browser support

* Semantic landmarks (`header`, `main`, `section`, `footer`) and proper heading hierarchy.
* Keyboard-accessible navigation, sliders, dropdowns, and form controls.
* Focus states, ARIA attributes, and reduced-motion safe-guards for users with motion sensitivity.
* Tested against evergreen Chrome, Firefox, Safari, and Edge using standards-based CSS/JS only.

## Customization tips

* Update typography, colors, and spacing via the `:root` custom properties block in `css/style.css`.
* Duplicate a homepage and mix modules as needed; all sections are self-contained and responsive.
* Replace placeholder media in `assets/images` or embed hosted video sources by updating the relevant `src` attributes.

## Deployment note

Deploy the static files to your preferred host (e.g., Netlify drop, GitHub Pages). Once deployed, share the preview URL to review on real devices.
