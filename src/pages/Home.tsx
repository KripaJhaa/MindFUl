// icon not used here
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

import { FadeInUp, ScaleIn, AnimatedButton } from '../components/animations';
import { motion } from 'framer-motion';
import { AnimatedStat } from '../components/animations/AnimatedCounter';

export default function Home() {
  useEffect(() => {
    (async () => {
      try {
        const motion = await import('motion');
        const { createTimeline, stagger } = motion as any;
        const options = { grid: [13, 13], from: 'center' };
        const tl = createTimeline();
        // stagger in seconds (small step) so animation feels snappy
        tl.add('.dot', {
          scale: stagger([1.1, 0.75], options),
          ease: 'inOutQuad',
        }, stagger(0.12, options));
      } catch (e) {
        // motion not available, ignore
      }
    })();
    return () => { /* cleanup if needed */ };
  }, []);
  return (
    <div className="bg-white">
      {/* Hero section */}
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <FadeInUp>
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                Your Mental Health Journey Starts Here
              </h1>
            </FadeInUp>
            <FadeInUp delay={0.2}>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Professional counseling, mental wellness programs, and self-help tools designed for your personal growth and wellbeing.
              </p>
            </FadeInUp>
            <FadeInUp delay={0.4}>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <AnimatedButton>
                  <Link
                    to="/programs"
                    className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Get Started
                  </Link>
                </AnimatedButton>
                <AnimatedButton>
                  <Link to="/about" className="text-sm font-semibold leading-6 text-gray-900">
                    Learn more <span aria-hidden="true">→</span>
                  </Link>
                </AnimatedButton>
              </div>
            </FadeInUp>
          </motion.div>
        </div>
      </div>

      {/* Impact stats section */}
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:max-w-none">
            <ScaleIn>
              <div className="text-center">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  Making a Difference
                </h2>
              </div>
            </ScaleIn>
            <dl className="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
              {[
                { label: 'Students Supported', value: '30K+' },
                { label: 'Counseling Sessions', value: '50K+' },
                { label: 'Expert Counselors', value: '100+' },
                { label: 'Success Rate', value: '95%' },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                  <AnimatedStat
                    value={stat.value}
                    label={stat.label}
                  />
                </motion.div>
              ))}
            </dl>
          </div>
        </div>
      </div>

      {/* Features section */}
      <div className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeInUp>
            <div className="mx-auto max-w-2xl lg:text-center">
              <h2 className="text-base font-semibold leading-7 text-indigo-600">Features</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Everything you need for mental wellness
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Comprehensive tools and resources to support your mental health journey.
              </p>
            </div>
          </FadeInUp>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              {features.map((feature, index) => (
                <FadeInUp key={feature.name} delay={index * 0.2}>
                  <motion.div 
                    className="flex flex-col"
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                      {feature.name}
                    </dt>
                    <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                      <p className="flex-auto">{feature.description}</p>
                      <div className="mt-6">
                        <AnimatedButton>
                          <Link to={feature.href} className="text-sm font-semibold leading-6 text-indigo-600 inline-flex items-center">
                            Learn more 
                            <motion.span
                              className="ml-1"
                              animate={{ x: [0, 4, 0] }}
                              transition={{ duration: 1.5, repeat: Infinity }}
                            >
                              →
                            </motion.span>
                          </Link>
                        </AnimatedButton>
                      </div>
                    </dd>
                  </motion.div>
                </FadeInUp>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
}

const features = [
  {
    name: 'Personalized Counseling',
    description: 'Connect with expert counselors for one-on-one sessions tailored to your needs.',
    href: '/counselors',
  },
  {
    name: 'Wellness Programs',
    description: 'Structured programs designed to help you develop healthy mental habits and coping strategies.',
    href: '/programs',
  },
  {
    name: 'Self-Help Tools',
    description: 'Access our collection of resources, including mood tracking, guided meditation, and more.',
    href: '/features',
  },
];
