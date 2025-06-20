import React from "react";
import { motion } from "framer-motion";
import ListCard from "./ListCard";

interface ListItem {
  title: string;
  items: string[];
}

interface ListCardGridProps {
  title: string;
  lists: ListItem[];
  columns?: number;
  gap?: number;
}

const ListCardGrid: React.FC<ListCardGridProps> = ({
  title,
  lists,
  columns = 3,
  gap = 6,
}) => {
  // Animation variants for container and items
  const containerVariants = {
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

  return (
    <>
      {title && (
        <div className="mb-12 mt-16 text-center">
          <h2 className="section-title text-gray-900">
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
        </div>
      )}
      <motion.div
        className={`grid md:grid-cols-${columns} gap-${gap}`}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {lists.map((list, index) => (
          <motion.div 
            key={index} 
            variants={itemVariants}
            className="h-full gap-6" // Make the motion div take full height
          >
            <ListCard
              title={list.title}
              items={list.items}
              className="h-full" // Pass className prop to ListCard
              // No need for delay prop as the staggering is handled by the parent
            />
          </motion.div>
        ))}
      </motion.div>
    </>
  );
};

export default ListCardGrid;
