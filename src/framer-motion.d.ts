import { HTMLMotionProps } from "framer-motion";

// Augment the MotionProps interface to include className
declare module "framer-motion" {
  export interface MotionProps {
    className?: string;
  }

  // Ensure all HTML element types have className support
  export interface HTMLMotionProps<T> extends React.HTMLAttributes<T> {
    className?: string;
  }
}
