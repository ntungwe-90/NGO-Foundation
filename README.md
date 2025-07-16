# HopeFoundation NGO Website

A modern, responsive NGO website built with React, TypeScript, TailwindCSS, and Sanity.io as a headless CMS.

## Features

- **Responsive Design**: Mobile-first approach with beautiful UI/UX
- **CMS Integration**: Sanity.io for easy content management
- **Modern Stack**: React 18, TypeScript, TailwindCSS
- **SEO Optimized**: Clean URLs and semantic HTML
- **Accessibility**: WCAG compliant design
- **Performance**: Optimized images and code splitting

## Pages

- **Home**: Hero section, programs overview, testimonials, and donation CTA
- **About**: Organization mission, values, team, and impact
- **Programs**: Filterable program listings with detailed information
- **Gallery**: Categorized photo gallery with modal view
- **Events**: Upcoming and past events with registration
- **Contact**: Contact form with office information
- **Donate**: Secure donation processing with impact display

## Getting Started

### Prerequisites

- Node.js 18+ and npm
- Sanity.io account

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   ```bash
   cp .env.example .env
   ```
   Update the Sanity project ID and dataset in `.env`

4. Start the development server:
   ```bash
   npm run dev
   ```

### Sanity CMS Setup

1. Create a new Sanity project at [sanity.io](https://sanity.io)
2. Install Sanity CLI: `npm install -g @sanity/cli`
3. Navigate to the `sanity` directory
4. Update project ID in `sanity.config.ts` and `sanity.cli.ts`
5. Deploy the schemas: `sanity deploy`

## Content Management

The CMS includes schemas for:
- **Hero Sections**: Homepage banners with CTAs
- **Programs**: Categorized program listings
- **Events**: Event management with dates and locations
- **Testimonials**: Customer testimonials with photos
- **Gallery Images**: Categorized image gallery

## Deployment

### Frontend
Deploy to Netlify, Vercel, or any static hosting service:
```bash
npm run build
```

### CMS
Deploy Sanity Studio:
```bash
cd sanity
sanity deploy
```

## Customization

- **Colors**: Update TailwindCSS theme in `tailwind.config.js`
- **Content**: Modify through Sanity Studio
- **Components**: Located in `src/components/`
- **Pages**: Located in `src/pages/`

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

MIT License - see LICENSE file for details