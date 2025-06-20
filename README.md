# Qi Sun - Personal Website

A modern, responsive personal website for Qi Sun, showcasing writing, design work, and digital marketing expertise. Built with React, TypeScript, and TailwindCSS.

## Features

- **Responsive Design**: Optimized for all device sizes
- **Modern UI**: Clean and professional design with smooth animations
- **SEO Optimized**: Includes meta tags for better search engine visibility and social media sharing
- **Multiple Pages**: Home, About, Hobbies, and more
- **Custom Favicon**: Complete favicon set for all devices and platforms

## Technologies Used

- **React**: Frontend library for building user interfaces
- **TypeScript**: Type-safe JavaScript
- **Vite**: Next-generation frontend tooling
- **TailwindCSS**: Utility-first CSS framework
- **React Router**: Navigation and routing
- **Framer Motion**: Animations
- **React Helmet Async**: Document head manager for SEO

## Prerequisites

Before you begin, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v14.x or higher)
- [npm](https://www.npmjs.com/) (v6.x or higher) or [yarn](https://yarnpkg.com/) (v1.22.x or higher)

## Installation

1. Clone the repository:
   ```bash
   git clone [repository-url]
   cd qi-personal-website
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn
   ```

## Development

To start the development server:

```bash
npm run dev
# or
yarn dev
```

This will start the development server at `http://localhost:5173`.

## Building for Production

To build the project for production:

```bash
npm run build
# or
yarn build
```

The built files will be in the `dist` directory.

## Preview Production Build

To preview the production build locally:

```bash
npm run preview
# or
yarn preview
```

## Project Structure

```
├── public/             # Static assets
│   ├── favicon/        # Favicon files
│   └── site.webmanifest
├── src/
│   ├── assets/         # Images and other assets
│   ├── components/     # Reusable components
│   │   ├── Header.tsx
│   │   ├── SEO.tsx
│   │   └── ...
│   ├── pages/          # Page components
│   │   ├── Home.tsx
│   │   ├── About.tsx
│   │   └── ...
│   ├── App.tsx         # Main App component
│   └── main.tsx        # Entry point
├── index.html          # HTML template
└── package.json        # Project dependencies and scripts
```

## SEO

The website includes SEO optimization with:
- Meta tags for title, description, and keywords
- Open Graph tags for social media sharing
- Twitter card tags
- Custom favicon for all devices

## License

[MIT License](LICENSE)

## Author

Qi Sun - Writer, Designer & Digital Marketer