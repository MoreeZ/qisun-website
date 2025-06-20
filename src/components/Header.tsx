import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

// Consider importing a specific serif font like Playfair Display or Lora
// e.g., in your global CSS: @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&display=swap');
// And add to tailwind.config.js: theme: { extend: { fontFamily: { playfair: ['"Playfair Display"', 'serif'] } } }
// Then use font-playfair for the logo.

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/design', label: 'Design' },
  { to: '/writing', label: 'Writing' },
  { to: '/hobbies', label: 'Hobbies' },
  { to: '/contact', label: 'Contact' },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (location.pathname === '/') {
        setScrolled(window.scrollY > 50);
      } else {
        // For other pages, consider it always "scrolled" for consistent styling
        setScrolled(true);
      }
    };

    // Initial check
    handleScroll();

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [location.pathname]);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]); // Changed dependency to location.pathname for clarity, though location object works too

  const headerBaseStyle = 'fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out py-3';
  const headerScrolledStyle = 'bg-gray-900/80 backdrop-blur-md shadow-lg';
  const headerTransparentStyle = 'bg-transparent';

  return (
    <header
      className={`${headerBaseStyle} ${
        scrolled ? headerScrolledStyle : (location.pathname === '/' ? headerTransparentStyle : headerScrolledStyle)
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link 
          to="/"
          // Using font-serif. For a more distinct look, consider a specific serif font (see comment above).
          className="text-3xl font-serif font-bold text-white transition-colors duration-300"
        >
          Qi Sun
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6 lg:space-x-8" aria-label="Main navigation">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`font-medium py-2 transition-colors duration-300 relative group ${
                location.pathname === link.to
                  ? 'text-primary font-semibold'
                  : 'text-white hover:text-primary'
              }`}
            >
              {link.label}
              <span
                className={`absolute bottom-0 left-0 h-0.5 bg-primary transition-all duration-300 ease-out ${
                  location.pathname === link.to ? 'w-full' : 'w-0 group-hover:w-full'
                }`}
              />
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white focus:outline-none transform transition-transform duration-200 hover:scale-110 active:scale-95"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`h-7 w-7 transition-transform duration-300 ease-in-out ${isMenuOpen ? 'rotate-[360deg]' : ''}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        className={`
          md:hidden absolute top-full left-0 right-0 bg-gray-900/90 backdrop-blur-md shadow-lg overflow-y-auto 
          transition-all duration-500 ease-in-out 
          ${isMenuOpen ? 'max-h-[calc(100vh-4.5rem)] opacity-100 visible' : 'max-h-0 opacity-0 invisible'}
        `}
        // 4.5rem is approx header height (py-3 is 1.5rem top/bottom, plus line height)
      >
        <nav className="container mx-auto px-4 py-4 flex flex-col space-y-2" role="navigation" aria-label="Mobile menu">
          {navLinks.map((link) => (
            <Link
              key={`mobile-${link.to}`}
              to={link.to}
              onClick={() => setIsMenuOpen(false)} // Close menu on item click
              className={`block py-3 px-3 text-lg font-medium transition-all duration-300 rounded-md ${
                location.pathname === link.to
                  ? 'text-primary bg-gray-800 font-semibold'
                  : 'text-white hover:text-primary hover:bg-gray-700/50 active:bg-gray-700'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
