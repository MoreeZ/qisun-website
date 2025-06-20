import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, useAnimationControls } from "framer-motion";

// Consider importing a specific serif font like Playfair Display or Lora
// e.g., in your global CSS: @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&display=swap');
// And add to tailwind.config.js: theme: { extend: { fontFamily: { playfair: ['"Playfair Display"', 'serif'] } } }
// Then use font-playfair for the logo.

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/design", label: "Design" },
  { to: "/writing", label: "Writing" },
  { to: "/hobbies", label: "Hobbies" },
  { to: "/contact", label: "Contact" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const location = useLocation();
  const navRefs = useRef<(HTMLDivElement | null)[]>([]);
  const underlineControls = useAnimationControls();

  useEffect(() => {
    const handleScroll = () => {
      if (location.pathname === "/") {
        setScrolled(window.scrollY > 50);
      } else {
        // For other pages, consider it always "scrolled" for consistent styling
        setScrolled(true);
      }
    };

    // Initial check
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [location.pathname]);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);

    // Find the active link index based on current path
    const index = navLinks.findIndex((link) => link.to === location.pathname);
    setActiveIndex(index >= 0 ? index : 0);
  }, [location.pathname]); // Changed dependency to location.pathname for clarity, though location object works too

  // Animate the underline when active or hovered index changes
  useEffect(() => {
    const currentIndex = hoveredIndex !== null ? hoveredIndex : activeIndex;
    const currentElement = navRefs.current[currentIndex];

    if (currentElement) {
      const rect = currentElement.getBoundingClientRect();
      const navElement = document.querySelector("nav");
      const navRect = navElement?.getBoundingClientRect();

      if (navRect) {
        // Calculate position relative to the nav container
        const relativeLeft = rect.left - navRect.left;

        underlineControls.start({
          width: rect.width,
          x: relativeLeft,
          transition: { type: "spring", stiffness: 500, damping: 30 },
        });
      }
    }
  }, [hoveredIndex, activeIndex, underlineControls]);

  const headerScrolledStyle = "bg-dark-plum/80 backdrop-blur-md shadow-lg";
  const headerTransparentStyle = "bg-transparent";

  return (
    <motion.header
      className="fixed top-4 right-4 z-50"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="flex justify-end items-center">
        {/* Desktop Navigation */}
        <motion.nav
          className={`hidden md:flex items-center justify-end px-6 py-2 rounded-lg transition-colors duration-300 ${
            scrolled
              ? headerScrolledStyle
              : location.pathname === "/"
              ? headerTransparentStyle
              : headerScrolledStyle
          }`}
          aria-label="Main navigation"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {navLinks.map((link, index) => (
            <Link
              to={link.to}
              className={`font-medium px-1 transition-colors duration-300 ${
                location.pathname === link.to
                  ? "text-primary font-semibold"
                  : "text-white hover:text-primary"
              }`}
            >
              <div
                key={link.to}
                ref={(el: HTMLDivElement | null) => {
                  navRefs.current[index] = el;
                }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="relative pl-3 pr-3"
              >
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                >
                  {link.label}
                </motion.div>
              </div>
            </Link>
          ))}

          {/* Animated underline that jumps between links */}
          <motion.div
            className="absolute bottom-0 left-0 h-0.5 bg-primary"
            initial={{ width: 0, x: 0 }}
            animate={underlineControls}
          />
        </motion.nav>
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden fixed right-4 top-4 text-white bg-dark-plum/80 p-2 rounded-full backdrop-blur-md shadow-md focus:outline-none transform transition-transform duration-200 hover:scale-110 active:scale-95"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-expanded={isMenuOpen}
        aria-controls="mobile-menu"
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`h-7 w-7 transition-transform duration-300 ease-in-out ${
            isMenuOpen ? "rotate-[360deg]" : ""
          }`}
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

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        className={`
          md:hidden fixed top-16 right-4 w-64 bg-dark-plum/90 backdrop-blur-md shadow-lg overflow-y-auto rounded-lg
          transition-all duration-500 ease-in-out 
          ${
            isMenuOpen
              ? "max-h-[calc(100vh-5rem)] opacity-100 visible"
              : "max-h-0 opacity-0 invisible"
          }
        `}
      >
        <nav
          className="py-4 px-3 flex flex-col space-y-2"
          role="navigation"
          aria-label="Mobile menu"
        >
          {navLinks.map((link) => (
            <Link
              key={`mobile-${link.to}`}
              to={link.to}
              onClick={() => setIsMenuOpen(false)} // Close menu on item click
              className={`block py-3 px-3 text-lg font-medium transition-opacity duration-300 rounded-md relative ${
                location.pathname === link.to
                  ? "text-primary font-semibold pl-6"
                  : "text-white hover:text-primary"
              }`}
              aria-current={location.pathname === link.to ? "page" : undefined}
            >
              {location.pathname === link.to && (
                <span className="absolute left-0 top-1/2 -translate-y-1/2 text-primary">
                  ▶
                </span>
              )}
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </motion.header>
  );
};

export default Header;
