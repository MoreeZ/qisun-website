import React from "react";
import { motion } from "framer-motion";

interface ContactCardProps {
  title: string;
  description: string;
  link: string;
  linkText: string;
  iconSvgPath?: string;
  iconSvgClassName?: string;
  iconOutlined?: boolean; // Whether the icon is outlined (stroke) or filled
  icon?: React.ReactNode; // Keep for backward compatibility
  delay?: number;
  isExternal?: boolean;
}

const ContactCard: React.FC<ContactCardProps> = ({
  title,
  description,
  link,
  linkText,
  iconSvgPath,
  iconSvgClassName = "text-primary",
  iconOutlined = false,
  icon,
  delay = 0.4,
  isExternal = false,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut", delay }}
      viewport={{ once: true }}
    >
      <div className="bg-white p-8 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
        <div className="bg-primary bg-opacity-10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
          {iconSvgPath ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`h-8 w-8 ${iconSvgClassName}`}
              fill={iconOutlined ? "none" : "currentColor"}
              viewBox="0 0 24 24"
              stroke={iconOutlined ? "currentColor" : undefined}
            >
              <path
                d={iconSvgPath}
                strokeLinecap={iconOutlined ? "round" : undefined}
                strokeLinejoin={iconOutlined ? "round" : undefined}
                strokeWidth={iconOutlined ? 2 : undefined}
              />
            </svg>
          ) : (
            icon
          )}
        </div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <a
          href={link}
          className="text-primary hover:underline font-medium"
          {...(isExternal
            ? { target: "_blank", rel: "noopener noreferrer" }
            : {})}
        >
          {linkText}
        </a>
      </div>
    </motion.div>
  );
};

export default ContactCard;
