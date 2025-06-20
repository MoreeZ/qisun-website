import { ReactNode } from 'react';
import type { CSSProperties } from 'react';
import './section.css';
import { motion } from 'framer-motion';

// Define color options type to avoid duplication
type ColorOption = 'white' | 'light' | 'dark' | 'fancy';

interface SectionProps {
  id?: string;
  title?: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
  bgColor?: ColorOption;
  headingColor?: ColorOption;
  fullWidthBackground?: boolean;
  backgroundImage?: string;
  backgroundOpacity?: number;
}

const Section = ({ 
  id, 
  title, 
  subtitle, 
  children, 
  className = '', 
  bgColor = 'white',
  headingColor,
  fullWidthBackground = false,
  backgroundImage,
  backgroundOpacity = 0.15
}: SectionProps) => {
  // Get color class based on color option
  const getColorClass = (colorOption: ColorOption | undefined, isBackground: boolean): string => {
    if (!colorOption) return isBackground ? 'bg-white' : 'text-gray-900';
    
    switch (colorOption) {
      case 'light':
        return isBackground ? 'bg-gray-50' : 'text-gray-800';
      case 'dark':
        return isBackground ? 'bg-gray-900 text-white' : 'text-white';
      case 'fancy':
        return isBackground 
          ? 'bg-gradient-to-br from-indigo-50 via-white to-purple-50 relative overflow-hidden fancy-bg'
          : 'bg-clip-text text-transparent bg-gradient-to-r from-primary to-indigo-600';
      default:
        return isBackground ? 'bg-white' : 'text-gray-900';
    }
  };
  
  const getBgColor = () => getColorClass(bgColor, true);
  const getHeadingColor = () => getColorClass(headingColor || bgColor, false);
  
  // Additional styles for the fancy background
  const getFancyStyle = (): CSSProperties => {
    if (bgColor === 'fancy') {
      return {
        position: 'relative',
        overflow: 'hidden'
      };
    }
    return {};
  };

  return (
    <section 
      id={id} 
      className={`section ${getBgColor()} ${className} py-16 ${fullWidthBackground ? 'relative' : ''}`} 
      style={getFancyStyle()}
    >
      {bgColor === 'fancy' && (
        <>
          <div className="absolute top-0 left-0 w-64 h-64 rounded-full bg-gradient-to-br from-primary/20 to-purple-300/20 blur-3xl -translate-x-1/2 -translate-y-1/2 fancy-orb fancy-orb-1"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-gradient-to-tl from-blue-300/20 to-primary/20 blur-3xl translate-x-1/4 translate-y-1/4 fancy-orb fancy-orb-2"></div>
          <div className="absolute top-1/2 right-1/4 w-48 h-48 rounded-full bg-gradient-to-bl from-indigo-300/20 to-pink-300/20 blur-3xl fancy-orb fancy-orb-3"></div>
        </>
      )}
      
      {/* Full-width background if enabled */}
      {fullWidthBackground && backgroundImage && (
        <div 
          className={`absolute inset-0 w-screen left-1/2 transform -translate-x-1/2 z-0`}
          style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed',
            width: '100vw',
            height: '100%',
            opacity: backgroundOpacity
          }}
        ></div>
      )}
      
      <div className="container relative z-10">
        {(title || subtitle) && (
          <div className="mb-12 text-center">
            {title && (
              <h2 className={`section-title ${getHeadingColor()}`}>
                <motion.span
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                  viewport={{ once: true, margin: "-100px" }}
                  style={{ display: 'block' }}
                >
                  {title}
                </motion.span>
              </h2>
            )}
            {subtitle && (
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
                  viewport={{ once: true, margin: "-100px" }}
                  style={{ display: 'block' }}
                >
                  {subtitle}
                </motion.span>
              </p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
};

// Animation CSS will be in section.css

export default Section;
