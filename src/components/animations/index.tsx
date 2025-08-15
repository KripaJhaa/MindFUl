import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

interface AnimatedProps {
  children: ReactNode;
  delay?: number;
}

export const FadeInUp = ({ children, delay = 0 }: AnimatedProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{
      duration: 0.5,
      delay,
      ease: [0.4, 0, 0.2, 1],
    }}
  >
    {children}
  </motion.div>
);

export const FadeIn = ({ children, delay = 0 }: AnimatedProps) => (
  <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    transition={{
      duration: 0.5,
      delay,
      ease: [0.4, 0, 0.2, 1],
    }}
  >
    {children}
  </motion.div>
);

export const ScaleIn = ({ children, delay = 0 }: AnimatedProps) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{
      duration: 0.5,
      delay,
      ease: [0.4, 0, 0.2, 1],
    }}
  >
    {children}
  </motion.div>
);

export const SlideInLeft = ({ children, delay = 0 }: AnimatedProps) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{
      duration: 0.5,
      delay,
      ease: [0.4, 0, 0.2, 1],
    }}
  >
    {children}
  </motion.div>
);

export const SlideInRight = ({ children, delay = 0 }: AnimatedProps) => (
  <motion.div
    initial={{ opacity: 0, x: 20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{
      duration: 0.5,
      delay,
      ease: [0.4, 0, 0.2, 1],
    }}
  >
    {children}
  </motion.div>
);

export const AnimatedButton = ({ children }: { children: ReactNode }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    transition={{
      type: "spring",
      stiffness: 400,
      damping: 17
    }}
  >
    {children}
  </motion.div>
);
