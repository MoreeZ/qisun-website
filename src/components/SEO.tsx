import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
  author?: string;
}

const SEO: React.FC<SEOProps> = ({
  title = 'Qi Sun - Writer, Designer & Digital Marketer',
  description = 'Personal website of Qi Sun, showcasing writing, design work, and digital marketing expertise.',
  keywords = 'Qi Sun, writer, designer, digital marketer, portfolio',
  image = '/og-image.svg', // Using the SVG image we created in the public folder
  url = 'https://qisun.com', // Replace with your actual domain when deployed
  type = 'website',
  author = 'Qi Sun',
}) => {
  const siteTitle = title.includes('Qi Sun') ? title : `Qi Sun | ${title}`;
  
  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{siteTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={siteTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      
      {/* Canonical Link */}
      <link rel="canonical" href={url} />
    </Helmet>
  );
};

export default SEO;
