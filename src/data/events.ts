import type { Workshop } from '../models/types';

export const events: Workshop[] = [
  {
    id: '1',
    title: 'Stress Management Workshop',
    date: new Date('2025-08-20'),
    description: 'Learn practical techniques for managing stress in your daily life.',
    host: 'Dr. Sarah Johnson',
    duration: '2 hours',
    registrationUrl: '/register/stress-management'
  },
  {
    id: '2',
    title: 'Mindfulness Meditation Session',
    date: new Date('2025-08-22'),
    description: 'An introduction to mindfulness meditation and its benefits for mental health.',
    host: 'Dr. Michael Chen',
    duration: '1.5 hours',
    registrationUrl: '/register/mindfulness'
  },
  {
    id: '3',
    title: 'Building Healthy Relationships',
    date: new Date('2025-08-25'),
    description: 'Explore strategies for building and maintaining healthy relationships.',
    host: 'Dr. Emily Rodriguez',
    duration: '2 hours',
    registrationUrl: '/register/relationships'
  }
];
