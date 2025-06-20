import React from "react";
import { motion } from "framer-motion";

interface PageHeadingProps {
  headingText: string;
  subheadingText: string;
}

const PageHeading: React.FC<PageHeadingProps> = ({ headingText, subheadingText }) => {
  return (
    <div className="text-center mb-12">
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: true }}
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-primary">
          {headingText}
        </h1>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scaleX: 0 }}
        whileInView={{ opacity: 1, scaleX: 1 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
        viewport={{ once: true }}
      >
        <div className="w-16 h-1 bg-primary mb-8 mx-auto"></div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: true }}
      >
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          {subheadingText}
        </p>
      </motion.div>
    </div>
  );
};

export default PageHeading;
