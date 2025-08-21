import { memo } from 'react';
import type { FC } from 'react';
import { motion } from 'framer-motion';

const MissionSection: FC = () => (
  <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="mx-auto max-w-2xl lg:mx-0"
    >
      <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Our Mission</h2>
      <p className="mt-6 text-lg leading-8 text-gray-600">
        Empowering students and young professionals to take control of their mental health journey
        through accessible, personalized support and evidence-based resources.
      </p>
    </motion.div>
  </div>
);

MissionSection.displayName = 'MissionSection';
export default memo(MissionSection);
