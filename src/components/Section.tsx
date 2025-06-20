import type { CSSProperties, ReactNode, ReactElement } from 'react';
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
  backgroundIcon?: ReactElement;
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
  backgroundOpacity = 0.15,
  backgroundIcon
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
          ? 'bg-gradient-to-br from-pink-50 via-white to-pink-50 relative overflow-hidden fancy-bg'
          : 'bg-clip-text text-transparent bg-gradient-to-r from-primary to-pink-500';
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
          <div className="absolute top-0 left-0 w-64 h-64 rounded-full bg-gradient-to-br from-pink-300/20 to-pink-200/10 blur-3xl -translate-x-1/2 -translate-y-1/2 fancy-orb fancy-orb-1"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-gradient-to-tl from-pink-300/15 to-pink-100/10 blur-3xl translate-x-1/4 translate-y-1/4 fancy-orb fancy-orb-2"></div>
          <div className="absolute top-1/2 right-1/4 w-48 h-48 rounded-full bg-gradient-to-bl from-pink-200/20 to-pink-300/10 blur-3xl fancy-orb fancy-orb-3"></div>
          <div className="absolute bottom-1/3 left-1/4 w-72 h-72 rounded-full bg-gradient-to-tr from-pink-100/15 to-pink-200/10 blur-3xl fancy-orb fancy-orb-4"></div>
          
          {/* Background Icon or Default Lotus */}
          <div className="absolute bottom-0 left-[65%] -translate-x-1/2 translate-y-1/3 opacity-5 z-0 pointer-events-none">
            {backgroundIcon ? (
              <div className="w-[60vw] h-[60vw] text-primary">
                {backgroundIcon}
              </div>
            ) : (
              <svg viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg" className="w-[60vw] h-[60vw] text-primary">
                <rect fill="none" height="256" width="256"/>
                <path d="M128,200c16,0,42.5-.2,72.9-17.8s40.3-39.5,43.4-50.8a7.9,7.9,0,0,0-5.7-9.8c-7.3-1.9-20.1-3.6-36.5.3" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
                <path d="M53.9,121.8c-16.4-3.8-29.2-2.1-36.5-.2a7.9,7.9,0,0,0-5.7,9.8c3.1,11.3,13,33.3,43.4,50.8S112,200,128,200" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
                <path d="M128,200s40-21.8,40-80c0-45.6-24.6-68.8-35.2-76.8a8.1,8.1,0,0,0-9.6,0C112.6,51.2,88,74.4,88,120,88,178.2,128,200,128,200Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
                <path d="M128,200c12-2.6,44.3-20.8,63.7-54.4s14.6-60.3,10.8-72a7.8,7.8,0,0,0-9.2-5.3,77.1,77.1,0,0,0-31.4,15.1" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
                <path d="M94.1,83.4A77.1,77.1,0,0,0,62.7,68.3a7.8,7.8,0,0,0-9.2,5.3c-3.8,11.7-8.6,38.5,10.8,72S116,197.4,128,200" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
              </svg>
            )}
          </div>
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
          <motion.div 
            className="mb-12 text-center"
            variants={{
              hidden: {},
              visible: {
                transition: {
                  delayChildren: 0.1,
                  staggerChildren: 0.2,
                }
              }
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-20px" }}
          >
            {title && (
              <motion.h2 
                className={`section-title ${getHeadingColor()}`}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
                }}
              >
                {title}
              </motion.h2>
            )}
            {subtitle && (
              <motion.p 
                className="text-lg text-gray-600 max-w-3xl mx-auto"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
                }}
              >
                {subtitle}
              </motion.p>
            )}
          </motion.div>
        )}
        {children}
      </div>
    </section>
  );
};

// Animation CSS will be in section.css

export default Section;
