import { useState } from 'react';
import { motion } from 'framer-motion';
import type { Counselor } from '../models/types';

export default function Counselors() {
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);

  const toggleFilter = (filter: string) => {
    setSelectedFilters(prev => 
      prev.includes(filter) 
        ? prev.filter(f => f !== filter)
        : [...prev, filter]
    );
  };

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Our Expert Counselors
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Connect with experienced professionals who are here to support your mental health journey.
          </p>
        </div>

        {/* Filters */}
        <div className="mt-10">
          <div className="flex flex-wrap justify-center gap-3 p-4 bg-gray-50 rounded-xl">
            {filters.map(filter => (
              <motion.button
                key={filter}
                onClick={() => toggleFilter(filter)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 ${
                  selectedFilters.includes(filter)
                    ? 'bg-indigo-600 text-white shadow-md'
                    : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {filter}
              </motion.button>
            ))}
          </div>
        </div>

        {/* Counselor Grid */}
        <div className="mx-auto mt-12 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3 px-4">
          {counselors.map((counselor) => (
            <article key={counselor.id} className="flex flex-col h-full bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300">
              <div className="relative w-full">
                <img
                  src={counselor.photo}
                  alt={counselor.name}
                  className="h-64 w-full object-cover"
                />
              </div>
              <div className="flex flex-col flex-grow p-6">
                <div className="flex items-center gap-x-4 text-xs">
                  <span className="inline-flex items-center rounded-full bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                    Available Now
                  </span>
                  <div className="flex gap-2">
                    {counselor.languages.map(lang => (
                      <span
                        key={lang}
                        className="inline-flex items-center rounded-full bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10"
                      >
                        {lang}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="mt-4">
                  <h3 className="text-xl font-semibold leading-6 text-gray-900">
                    {counselor.name}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-gray-600 line-clamp-3">
                    {counselor.bio}
                  </p>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {counselor.expertise.map(exp => (
                    <span
                      key={exp}
                      className="inline-flex items-center rounded-md bg-indigo-50 px-2 py-1 text-xs font-medium text-indigo-700 ring-1 ring-inset ring-indigo-700/10"
                    >
                      {exp}
                    </span>
                  ))}
                </div>
                <div className="mt-auto pt-6">
                  <button
                    type="button"
                    className="w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-colors duration-200"
                  >
                    Book Session
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}

const filters = [
  'Anxiety',
  'Depression',
  'Stress',
  'Relationships',
  'Career',
  'Academic',
  'Video',
  'Chat',
  'Available Today',
];

const counselors: Counselor[] = [
  {
    id: '1',
    name: 'Dr. Sarah Johnson',
    photo: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
    expertise: ['Anxiety', 'Depression', 'Stress Management'],
    languages: ['English', 'Spanish'],
    bio: 'Clinical psychologist with over 15 years of experience helping students and young professionals overcome anxiety and depression.',
    availability: ['Mon', 'Wed', 'Fri'],
  },
  {
    id: '2',
    name: 'Dr. Michael Chen',
    photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e',
    expertise: ['Academic Success', 'Career Counseling', 'Personal Growth'],
    languages: ['English', 'Mandarin'],
    bio: 'Specializing in academic and career counseling with a focus on helping students achieve their full potential.',
    availability: ['Tue', 'Thu', 'Sat'],
  },
  {
    id: '3',
    name: 'Dr. Emily Patel',
    photo: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80',
    expertise: ['Relationships', 'Family Therapy', 'Stress'],
    languages: ['English', 'Hindi'],
    bio: 'Experienced therapist helping individuals navigate relationship challenges and family dynamics.',
    availability: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
  },
];
