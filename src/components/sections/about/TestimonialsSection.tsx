import { memo } from 'react';
import type { FC } from 'react';
import { motion } from 'framer-motion';
import { toast } from 'react-toastify';
import { TESTIMONIALS } from '../../../constants/about';

const TestimonialsSection: FC = () => {
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = '/fallback-avatar.png';
    toast.warn('Failed to load testimonial image', {
      position: 'bottom-right',
      autoClose: 3000,
    });
  };

  return (
    <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="mx-auto max-w-2xl lg:max-w-none"
      >
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            What Our Users Say
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Real stories from students and professionals who have benefited from our platform.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {TESTIMONIALS.map((testimonial) => (
            <motion.div 
              key={testimonial.author}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ y: -5 }}
              className="flex flex-col"
            >
              <div className="flex flex-1 flex-col justify-between bg-gray-50 p-8">
                <div className="flex items-center gap-x-4">
                  <img
                    className="h-10 w-10 rounded-full bg-gray-100"
                    src={testimonial.image}
                    alt={`${testimonial.author}'s avatar`}
                    onError={handleImageError}
                    loading="lazy"
                  />
                  <div>
                    <div className="text-sm font-semibold leading-6 text-gray-900">
                      {testimonial.author}
                    </div>
                    <div className="text-sm leading-6 text-gray-600">{testimonial.role}</div>
                  </div>
                </div>
                <div className="mt-8">
                  <q className="text-sm italic leading-6 text-gray-600">
                    {testimonial.content}
                  </q>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

TestimonialsSection.displayName = 'TestimonialsSection';
export default memo(TestimonialsSection);
