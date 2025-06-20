import Section from '../components/Section';
import SEO from '../components/SEO';
import { motion } from 'framer-motion';

const passionsContainerVariants = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 0.1,
      staggerChildren: 0.2,
    },
  },
};

const passionsItemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

import profileImage from "../assets/images/home_page/profile.webp";
import bookImage from "../assets/images/hobbies/reading/book_image.webp";
import bagImage from "../assets/images/design/bags/1.webp";
import webImage from "../assets/images/design/webs/1.webp";
import tcdBackground from "../assets/images/about/tcd_background.webp";

const About = () => {
  return (
    <>
      <SEO 
        title="About" 
        description="Learn about Qi Sun's background, education, skills, and professional journey as a writer, designer, and digital marketer."
        keywords="Qi Sun, about, biography, background, education, skills, experience, writer, designer"
      />
      <div className="pt-0">
      {/* Hero Section */}
      <Section bgColor="fancy">
        <div className="grid md:grid-cols-5 gap-8 items-center">
          <div className="md:col-span-3">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0}}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: true }}
              className="flex justify-start mb-4"
            >
              <svg viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg" className="w-16 h-16 text-primary">
                <rect fill="none" height="256" width="256"/>
                <path d="M128,200c16,0,42.5-.2,72.9-17.8s40.3-39.5,43.4-50.8a7.9,7.9,0,0,0-5.7-9.8c-7.3-1.9-20.1-3.6-36.5.3" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
                <path d="M53.9,121.8c-16.4-3.8-29.2-2.1-36.5-.2a7.9,7.9,0,0,0-5.7,9.8c3.1,11.3,13,33.3,43.4,50.8S112,200,128,200" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
                <path d="M128,200s40-21.8,40-80c0-45.6-24.6-68.8-35.2-76.8a8.1,8.1,0,0,0-9.6,0C112.6,51.2,88,74.4,88,120,88,178.2,128,200,128,200Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
                <path d="M128,200c12-2.6,44.3-20.8,63.7-54.4s14.6-60.3,10.8-72a7.8,7.8,0,0,0-9.2-5.3,77.1,77.1,0,0,0-31.4,15.1" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
                <path d="M94.1,83.4A77.1,77.1,0,0,0,62.7,68.3a7.8,7.8,0,0,0-9.2,5.3c-3.8,11.7-8.6,38.5,10.8,72S116,197.4,128,200" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
              </svg>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-primary">About Me</h1>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.6 }}
              viewport={{ once: true }}
            >
              <p className="text-lg text-gray-600 mb-6">
                Writer, Designer, Digital Marketer
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-1 bg-primary mb-8"></div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 1 }}
              viewport={{ once: true }}
            >
              <p className="text-lg mb-4">
                I was born in a gentle and peaceful city in China. Later, I moved to Dublin to pursue my Master's degree. I'm a humorous and outgoing person. I can always stay calm, I have the ability to solve problems. I love meeting new people with different personalities.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 1.0 }}
              viewport={{ once: true }}
            >
              <p className="text-lg mb-4">
                I'm passionate about literature, sales, and design. I started reading when I was in first grade, and began writing novels in fourth grade. By the age of 20, I signed two books publishing contracts. I'm still writing and plan to publish my English novel soon.
              </p>
            </motion.div>
          </div>
          <motion.div 
            className="md:col-span-2 order-first md:order-last"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="aspect-square overflow-hidden rounded-lg shadow-xl">
              <img 
                src={profileImage} 
                alt="Qi" 
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </Section>

      {/* My Passions */}
      <Section title="My Passions">
        <motion.div 
          className="grid md:grid-cols-3 gap-8"
          variants={passionsContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Literature */}
          <motion.div 
            className="bg-white rounded-lg shadow-md overflow-hidden"
            variants={passionsItemVariants}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <div className="aspect-square overflow-hidden">
              <img 
                src={bookImage} 
                alt="Books" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-3">Literature</h3>
              <p className="text-gray-600">
                I'm passionate about literature. I started reading when I was in first grade, and began writing novels in fourth grade. By the age of 20, I signed two books publishing contracts. I'm still writing and plan to publish my English novel soon.
              </p>
            </div>
          </motion.div>

          {/* Sales */}
          <motion.div 
            className="bg-white rounded-lg shadow-md overflow-hidden"
            variants={passionsItemVariants}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <div className="aspect-square overflow-hidden">
              <img 
                src={bagImage} 
                alt="Sales" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-3">Sales</h3>
              <p className="text-gray-600">
                I discovered my love for sales in middle school. I made my own hair accessories and sold them at local markets. Later, I opened two online shops to sell handmade bags and vintage items. I also started two accounts on the Chinese platform Xiaohongshu, gaining followers and brand collaborations.
              </p>
            </div>
          </motion.div>

          {/* Design */}
          <motion.div 
            className="bg-white rounded-lg shadow-md overflow-hidden"
            variants={passionsItemVariants}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <div className="aspect-square overflow-hidden">
              <img 
                src={webImage} 
                alt="Design" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-3">Design</h3>
              <p className="text-gray-600">
                Because I enjoy both sales and social media, I started learning digital marketing by myself. While working at a foreign trade company in Ningbo, I learned how to build websites. Within two months, I created and launched two independent sites for the company.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </Section>

      {/* Education */}
      <Section 
        title="Education" 
        fullWidthBackground={true}
        bgColor='dark'
        backgroundImage={tcdBackground}
        backgroundOpacity={0.25}
      >
        <div className="space-y-8 relative z-10">
          <motion.div 
            className="bg-white p-6 rounded-lg shadow-md"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="flex flex-wrap justify-between items-start mb-4">
              <h3 className="text-gray-700 text-xl font-bold">Master's Degree in Screenwriting</h3>
              <span className="text-gray-700">Dublin, Ireland</span>
            </div>
            <p className="text-gray-600 mb-4">Trinity College Dublin</p>
            <p  className="text-gray-600 mb-4">
              After completing my studies in China, I came to Dublin to study screenwriting for my master's degree, expanding my creative writing skills and gaining international experience.
            </p>
          </motion.div>

          <motion.div 
            className="bg-white p-6 rounded-lg shadow-md"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="flex flex-wrap justify-between items-start mb-4">
              <h3 className="text-gray-700 text-xl font-bold">English Major</h3>
              <span className="text-gray-700">Suzhou, China</span>
            </div>
            <p className="text-gray-600 mb-4">Suzhou University of Science and Technology</p>
            <p  className="text-gray-600 mb-4">
              I was accepted into Suzhou University of Science and Technology for another undergraduate degree as an English major.
            </p>
          </motion.div>

          <motion.div 
            className="bg-white p-6 rounded-lg shadow-md"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="flex flex-wrap justify-between items-start mb-4">
              <h3 className="text-gray-700 text-xl font-bold">Chinese Language and Literature</h3>
              <span className="text-gray-700">China</span>
            </div>
            <p className="text-gray-600 mb-4">Self-taught Undergraduate Degree</p>
            <p  className="text-gray-600 mb-4">
              I completed a self-taught undergraduate degree in Chinese language and literature, demonstrating my passion for learning and literature.
            </p>
          </motion.div>

          <motion.div 
            className="bg-white p-6 rounded-lg shadow-md"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.4 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="flex flex-wrap justify-between items-start mb-4">
              <h3 className="text-gray-700 text-xl font-bold">Computer Technology</h3>
              <span className="text-gray-700">China</span>
            </div>
            <p className="text-gray-600 mb-4">Initial College Studies</p>
            <p  className="text-gray-600 mb-4">
              In college, I first studied computer technology before switching to English, showing my diverse interests and adaptability.
            </p>
          </motion.div>
        </div>
      </Section>

      {/* Skills */}
      <Section bgColor='fancy'>
        <div className="mb-12 text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary">Skills</h2>
          </motion.div>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="flex flex-col items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <h3 className="text-2xl font-bold mb-6 text-center">Digital Marketing</h3>
              <ul className="space-y-4 w-full max-w-md">
              <li className="flex items-center justify-center">
                <svg className="h-6 w-6 text-primary mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>AI Marketing</span>
              </li>
              <li className="flex items-center justify-center">
                <svg className="h-6 w-6 text-primary mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Search Engine Optimization (SEO)</span>
              </li>
              <li className="flex items-center justify-center">
                <svg className="h-6 w-6 text-primary mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Pay-Per-Click Advertising (PPC)</span>
              </li>
              <li className="flex items-center justify-center">
                <svg className="h-6 w-6 text-primary mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Social Media Marketing</span>
              </li>
            </ul>
            </motion.div>
          </div>
          <div className="flex flex-col items-center">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <h3 className="text-2xl font-bold mb-6 text-center">Creative Skills</h3>
              <ul className="space-y-4 w-full max-w-md">
              <li className="flex items-center justify-center">
                <svg className="h-6 w-6 text-primary mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Content Creation and Marketing</span>
              </li>
              <li className="flex items-center justify-center">
                <svg className="h-6 w-6 text-primary mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Email Marketing</span>
              </li>
              <li className="flex items-center justify-center">
                <svg className="h-6 w-6 text-primary mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Creative Writing</span>
              </li>
              <li className="flex items-center justify-center">
                <svg className="h-6 w-6 text-primary mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Web Design</span>
              </li>
            </ul>
            </motion.div>
          </div>
        </div>
      </Section>
    </div>
    </>
  );
};

export default About;
