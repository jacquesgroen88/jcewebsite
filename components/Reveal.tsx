import React from 'react';
import { motion } from 'framer-motion';

/**
 * Scroll-reveal wrapper — fades + rises its children into view once. Gives the
 * page a single cohesive entrance rhythm. Respects reduced-motion (renders
 * statically with no transform).
 */
interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

const REDUCE =
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const Reveal: React.FC<RevealProps> = ({ children, className = '', delay = 0 }) => {
  if (REDUCE) return <div className={className}>{children}</div>;
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '0px 0px -12% 0px' }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay }}
    >
      {children}
    </motion.div>
  );
};

export default Reveal;
