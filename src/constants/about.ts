import type { Value, Stat, Testimonial } from '../types/about';

export const VALUES: Value[] = [
  {
    name: 'Accessibility',
    description: 'Making mental health support available to everyone through technology and innovation.',
  },
  {
    name: 'Empowerment',
    description: 'Providing tools and knowledge that enable individuals to take control of their mental wellness journey.',
  },
  {
    name: 'Evidence-Based',
    description: 'Utilizing proven therapeutic approaches and staying current with the latest research in mental health.',
  },
];

export const STATS: Stat[] = [
  { id: 1, name: 'Students Supported', value: '30,000+' },
  { id: 2, name: 'Counseling Sessions', value: '50,000+' },
  { id: 3, name: 'Expert Counselors', value: '100+' },
  { id: 4, name: 'Success Rate', value: '95%' },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    content: 'MinYou has been a game-changer for my mental health. The counselors are amazing and the platform is so easy to use.',
    author: 'Sarah M.',
    role: 'Graduate Student',
    image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9',
  },
  {
    content: 'The mood tracking feature helps me understand my patterns and the counseling sessions have given me tools to manage stress better.',
    author: 'James L.',
    role: 'Engineering Student',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d',
  },
  {
    content: 'As a working professional, the flexible scheduling and virtual sessions make it so much easier to prioritize my mental health.',
    author: 'Emily R.',
    role: 'Software Engineer',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80',
  },
];
