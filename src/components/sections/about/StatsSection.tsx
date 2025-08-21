import { memo } from 'react';
import type { FC } from 'react';
import { motion } from 'framer-motion';
import { STATS } from '../../../constants/about';

const StatsSection: FC = () => (
  <div className="bg-gray-50 py-24 sm:py-32">
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mx-auto max-w-2xl lg:max-w-none"
      >
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Our Impact
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            Making a difference in mental health support and wellness.
          </p>
        </div>
        <dl className="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
          {STATS.map((stat) => (
            <motion.div 
              key={stat.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05 }}
              className="flex flex-col bg-white p-8"
            >
              <dt className="text-sm font-semibold leading-6 text-gray-600">{stat.name}</dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900">
                {stat.value}
              </dd>
            </motion.div>
          ))}
        </dl>
      </motion.div>
    </div>
  </div>
);

StatsSection.displayName = 'StatsSection';
export default memo(StatsSection);
