import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Section from "./Section";

const LoadingPage: React.FC = () => {
  // For typewriter effect
  const [text, setText] = useState("");
  const staticText = "Loading";
  const animatedText = " your content...";

  useEffect(() => {
    let index = 0;
    const typingInterval = setInterval(() => {
      if (index <= animatedText.length) {
        setText(animatedText.slice(0, index));
        index++;
      } else {
        // Reset after typing is complete
        setTimeout(() => {
          index = 0;
          setText("");
        }, 1000);
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, []);

  // Animated pen path
  const penPathVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { type: "spring", duration: 1.5, bounce: 0 },
        opacity: { duration: 0.2 },
      },
    },
  };

  // Ink drop animation
  const inkDrops = [
    { delay: 0.5, x: "20%", y: "30%" },
    { delay: 1.2, x: "70%", y: "40%" },
    { delay: 1.8, x: "40%", y: "60%" },
    { delay: 2.5, x: "80%", y: "70%" },
    { delay: 3.1, x: "30%", y: "80%" },
  ];

  return (
    <Section bgColor="fancy">
      <div className="flex flex-col items-center justify-center h-screen">
        {/* Paper with lines */}
        <div
          className="relative w-full max-w-3xl h-80 md:h-96 bg-white rounded-lg shadow-xl p-8 md:p-12 overflow-hidden mx-4"
          style={{
            backgroundImage: "linear-gradient(#e7e7e7 1px, transparent 1px)",
            backgroundSize: "100% 10px",
          }}
        >
          {/* Ink drops */}
          {inkDrops.map((drop, index) => {
            // Using a regular div with motion.div inside to avoid TypeScript errors
            return (
              <div
                key={index}
                style={{
                  position: "absolute",
                  left: drop.x,
                  top: drop.y,
                }}
              >
                <motion.div
                  style={{
                    width: "1.5rem",
                    height: "1.5rem",
                    borderRadius: "9999px",
                    backgroundColor: "#2563eb",
                    opacity: 0.7,
                    filter: "blur(2px)",
                  }}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{
                    scale: [0, 1.5, 0.8],
                    opacity: [0, 0.7, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatDelay: 1,
                    delay: drop.delay,
                  }}
                />
              </div>
            );
          })}

          {/* Animated pen */}
          <div
            style={{
              position: "absolute",
              right: "2rem",
              bottom: "2rem",
            }}
          >
            <motion.div
              animate={{
                x: [-5, 5, -5],
                rotate: [-2, 2, -2],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <svg width="60" height="60" viewBox="0 0 24 24" fill="none">
                <motion.path
                  d="M17 3C17.2626 2.73735 17.5744 2.52901 17.9176 2.38687C18.2608 2.24473 18.6286 2.17157 19 2.17157C19.3714 2.17157 19.7392 2.24473 20.0824 2.38687C20.4256 2.52901 20.7374 2.73735 21 3C21.2626 3.26264 21.471 3.57444 21.6131 3.9176C21.7553 4.26077 21.8284 4.62856 21.8284 5C21.8284 5.37143 21.7553 5.73923 21.6131 6.08239C21.471 6.42555 21.2626 6.73735 21 7L7.5 20.5L2 22L3.5 16.5L17 3Z"
                  stroke="#3b82f6"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  variants={penPathVariants}
                  initial="hidden"
                  animate="visible"
                />
              </svg>
            </motion.div>
          </div>

          {/* Typewriter text */}
          <div className="mt-24 md:mt-32 font-mono text-2xl md:text-3xl text-gray-800 flex">
            <span className="font-bold mr-3 md:mr-5" >{staticText}</span> <span>{text}</span>
            <div style={{ display: "inline-block" }}>
              <motion.div
                style={{
                  width: "4px",
                  height: "2rem",
                  backgroundColor: "#1f2937",
                  marginLeft: "2px",
                }}
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 0.8, repeat: Infinity }}
              />
            </div>
          </div>
        </div>

        {/* Subtitle */}
        <div>
          <motion.div
            style={{
              marginTop: "2rem",
              fontSize: "1.25rem",
              color: "#6b7280",
              fontStyle: "italic",
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 3, repeat: Infinity, repeatDelay: 0.5 }}
          >
            Crafting your experience with words...
          </motion.div>
        </div>
      </div>
    </Section>
  );
};

export default LoadingPage;
