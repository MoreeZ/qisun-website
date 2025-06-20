import React from "react";
import { motion } from "framer-motion";

interface ListCardProps {
  title: string;
  items: string[];
  delay?: number;
  className?: string;
}

const ListCard: React.FC<ListCardProps> = ({
  title,
  items,
  delay = 0.2,
  className = "",
}) => {
  // Function to parse and style item parts based on dividers
  const renderStyledItem = (item: string) => {
    // Check for common dividers: hyphen, em dash, en dash
    if (item.includes(' – ') || item.includes(' - ') || item.includes(' — ')) {
      // Split by the divider that exists in the string
      const divider = item.includes(' – ') ? ' – ' : item.includes(' - ') ? ' - ' : ' — ';
      const [part1, part2] = item.split(divider);
      
      return (
        <>
          <span className="font-medium text-gray-800">{part1}</span>
          <span className="mx-1 text-gray-400">–</span>
          <span className="text-gray-600 italic">{part2}</span>
        </>
      );
    }
    
    // Check for comma divider (likely city, country format)
    else if (item.includes(', ')) {
      const [part1, part2] = item.split(', ');
      
      return (
        <>
          <span className="font-medium text-gray-800">{part1}</span>
          <span className="mx-1 text-gray-400">,</span>
          <span className="text-gray-600">{part2}</span>
        </>
      );
    }
    
    // No divider found, return as is
    return <span>{item}</span>;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut", delay }}
      viewport={{ once: true }}
      className={`bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100 flex flex-col ${className}`}
    >
      <h4 className="text-lg font-bold mb-4 pb-2 border-b border-gray-200 text-gray-800">{title}</h4>
      <ul className="space-y-2.5 flex-grow">
        {items.map((item, index) => (
          <li key={index} className="flex items-start">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-gray-400 mt-2 mr-2.5 flex-shrink-0"></span>
            <span className="text-sm leading-relaxed">{renderStyledItem(item)}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export default ListCard;
