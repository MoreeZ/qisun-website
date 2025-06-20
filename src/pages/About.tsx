import Section from '../components/Section';
import SEO from '../components/SEO';
import { motion } from 'framer-motion';

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
      <div className="pt-20">
      {/* Hero Section */}
      <Section bgColor="fancy">
        <div className="grid md:grid-cols-5 gap-8 items-center">
          <div className="md:col-span-3">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-primary">About Me</h1>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.4 }}
              viewport={{ once: true }}
            >
              <p className="text-lg text-gray-600 mb-6">
                Writer, Designer, Digital Marketer
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-1 bg-primary mb-8"></div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.8 }}
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
        <div className="grid md:grid-cols-3 gap-8">
          {/* Literature */}
          <motion.div 
            className="bg-white rounded-lg shadow-md overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
            viewport={{ once: true, amount: 0.2 }}
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
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
            viewport={{ once: true, amount: 0.2 }}
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
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.5 }}
            viewport={{ once: true, amount: 0.2 }}
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
        </div>
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
            <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-indigo-600">Skills</h2>
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
