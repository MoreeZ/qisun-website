import { Link } from "react-router-dom";
import { useRef } from "react";
import Section from "../components/Section";
import SEO from "../components/SEO";
import QiIcon from "../components/QiIcon";
import home_hero_image from "../assets/images/hobbies/reading/background.webp";
import design_image from "../assets/images/design/bags/2.webp";
import writing_image from "../assets/images/home_page/writing.webp";
import hobbies_image from "../assets/images/hobbies/hair_sticks/header.webp";
import { motion } from "framer-motion";

const featuredWorkVariants = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 0.1,
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const Home = () => {
  const aboutSectionRef = useRef<HTMLDivElement>(null);

  // Icon for the hero section and background
  const heroIcon = <QiIcon className="w-24 h-24 mx-auto mb-4 text-white" />;
  const backgroundIcon = <QiIcon className="w-full h-full" />;

  const scrollToContent = () => {
    if (aboutSectionRef.current) {
      const startPosition = window.pageYOffset;
      // Get header height - assume 80px as default if we can't find it
      // Adjust target position by subtracting header height
      const targetPosition =
        aboutSectionRef.current.getBoundingClientRect().top +
        window.pageYOffset;
      const distance = targetPosition - startPosition;
      const duration = 1000; // ms
      let start: number | null = null;

      const step = (timestamp: number) => {
        if (!start) start = timestamp;
        const progress = timestamp - start;
        const percentage = Math.min(progress / duration, 1);

        // Easing function: easeInOutCubic
        const easing =
          percentage < 0.5
            ? 4 * percentage * percentage * percentage
            : 1 - Math.pow(-2 * percentage + 2, 3) / 2;

        window.scrollTo({
          top: startPosition + distance * easing,
          behavior: "auto", // We're manually controlling the animation
        });

        if (progress < duration) {
          window.requestAnimationFrame(step);
        }
      };

      window.requestAnimationFrame(step);
    }
  };

  return (
    <>
      <SEO
        title="Home"
        description="Welcome to Qi Sun's personal website. Explore my work as a writer, digital marketer and designer."
        keywords="Qi Sun, portfolio, writer, digital marketer, designer, personal website"
        url="https://qisun.com"
      />
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pb-24 md:pb-0">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${home_hero_image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "brightness(0.9)",
          }}
        />
        <div
          className="absolute inset-0 z-0"
          style={{
            background:
              "linear-gradient(to top, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.7) 100%)",
          }}
        />
        <div className="container relative z-10 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            {heroIcon}
          </motion.div>
          <motion.h1
            className="text-5xl sm:text-7xl md:text-9xl lg:text-[10rem] font-cinzel font-medium mb-6 md:mb-16 text-white tracking-wide"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Qi Sun
          </motion.h1>
          <motion.p
            className="text-xs sm:text-base md:text-2xl lg:text-4xl max-w-4xl mx-auto tracking-wider font-thin uppercase font-montserrat"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Writer • Digital Marketer • Designer
          </motion.p>
        </div>

        {/* Scroll Down Arrow */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer animate-bounce"
          aria-label="Scroll down"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.5 }}
        >
          <button className="scroll-arrow" onClick={scrollToContent}></button>
        </motion.div>
      </section>

      {/* About Preview Section */}
      <div ref={aboutSectionRef}>
        <Section title="About Me" backgroundIcon={backgroundIcon}>
          <motion.div
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <p className="text-lg mb-6">
              I was born in a gentle and peaceful city in China. Later, I moved
              to Dublin to pursue my Master's degree. I'm a humorous and
              outgoing person. I can always stay calm, I have the ability to
              solve problems. I love meeting new people with different
              personalities. Sometimes, I also enjoy being alone and focusing on
              my work.
            </p>
            <Link to="/about" className="btn btn-primary inline-block">
              Learn More
            </Link>
          </motion.div>
        </Section>
      </div>

      {/* Featured Work Section */}
      <Section bgColor="fancy" backgroundIcon={backgroundIcon}>
        <motion.div 
          className="featured-work-container"
          variants={featuredWorkVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="mb-12 text-center">
            <h2 className="section-title text-primary">
              <motion.span
                variants={itemVariants}
                transition={{ duration: 0.7, ease: "easeOut" }}
                style={{ display: "block" }}
              >
                Featured Work
              </motion.span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Design Card */}
            <motion.div
              variants={itemVariants}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform">
                <img
                  src={design_image}
                  alt="Design Work"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Design</h3>
                  <p className="text-gray-600 mb-4">
                    Explore my design work including posters, web designs, bags,
                    and covers.
                  </p>
                  <Link to="/design" className="btn btn-primary">
                    View Designs
                  </Link>
                </div>
              </div>
            </motion.div>

            {/* Writing Card */}
            <motion.div
              variants={itemVariants}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform">
                <img
                  src={writing_image}
                  alt="Writing Work"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Writing</h3>
                  <p className="text-gray-600 mb-4">
                    Discover my film scripts, TV series pilots, and novels.
                  </p>
                  <Link to="/writing" className="btn btn-primary inline-block">
                    Read My Work
                  </Link>
                </div>
              </div>
            </motion.div>

            {/* Hobbies Card */}
            <motion.div
              variants={itemVariants}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform">
                <img
                  src={hobbies_image}
                  alt="Hobbies"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Hobbies</h3>
                  <p className="text-gray-600 mb-4">
                    Learn about my interests including travel, reading, and
                    collecting wooden hairpins.
                  </p>
                  <Link to="/hobbies" className="btn btn-primary inline-block">
                    Explore Hobbies
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </Section>
    </>
  );
};

export default Home;
