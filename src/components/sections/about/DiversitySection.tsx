import { memo } from 'react';
import type { FC } from 'react';
import { motion } from 'framer-motion';

const DiversitySection: FC = memo(() => (
  <div className="bg-gray-50 py-24 sm:py-32">
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mx-auto max-w-2xl lg:text-center"
      >
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Diversity & Inclusion
        </h2>
        <p className="mt-6 text-lg leading-8 text-gray-600">
          We believe that mental health support should be accessible and inclusive to everyone, 
          regardless of their background, identity, or circumstances. Our counselors are trained 
          to provide culturally competent care and support for diverse perspectives and experiences.
        </p>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none"
      >
        <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
          {[
            {
              name: 'Cultural Competence',
              description: 'Our counselors undergo regular training to better understand and support clients from diverse cultural backgrounds.',
            },
            {
              name: 'Inclusive Environment',
              description: 'We foster a welcoming space where everyone feels safe to be themselves and discuss their mental health openly.',
            },
            {
              name: 'Accessibility',
              description: 'Our platform is designed to be accessible to users with different abilities and requirements.',
            },
          ].map((feature) => (
            <motion.div 
              key={feature.name}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05 }}
              className="flex flex-col"
            >
              <dt className="text-base font-semibold leading-7 text-gray-900">
                {feature.name}
              </dt>
              <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-600">
                <p className="flex-auto">{feature.description}</p>
              </dd>
            </motion.div>
          ))}
        </dl>
      </motion.div>
    </div>
  </div>
));

DiversitySection.displayName = 'DiversitySection';

export default DiversitySection;
