import { memo } from 'react';
import type { FC } from 'react';
import { motion } from 'framer-motion';
import { VALUES } from '../../../constants/about';

const ValuesSection: FC = () => (
  <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="mx-auto max-w-2xl lg:max-w-none"
    >
      <div className="text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Values</h2>
        <p className="mt-6 text-lg leading-8 text-gray-600">
          Guided by compassion, driven by innovation, and committed to excellence.
        </p>
      </div>
      <dl className="mt-16 grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-3">
        {VALUES.map((value) => (
          <motion.div 
            key={value.name}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05 }}
            className="text-center"
          >
            <dt className="text-base font-semibold leading-7 text-gray-900">
              {value.name}
            </dt>
            <dd className="mt-2 text-base leading-7 text-gray-600">
              {value.description}
            </dd>
          </motion.div>
        ))}
      </dl>
    </motion.div>
  </div>
);

ValuesSection.displayName = 'ValuesSection';
export default memo(ValuesSection);
