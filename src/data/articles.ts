import type { Article } from '../models/types';

export const articles: Article[] = [
  {
    id: '1',
    title: 'Understanding Anxiety and Its Impact on Daily Life',
    author: 'Dr. Sarah Johnson',
    date: 'August 15, 2025',
    content: `Anxiety is a natural response to stress, but when it becomes excessive, it can interfere with daily activities. This article explores the different types of anxiety disorders, their symptoms, and effective coping strategies.

Many people experience anxiety at some point in their lives. It's the body's natural response to stress, a feeling of fear or apprehension about what's to come. However, when anxiety becomes excessive, persistent, and interferes with daily activities, it may indicate an anxiety disorder.

Common symptoms of anxiety include:
- Feeling restless or tense
- Having a sense of impending danger or doom
- Increased heart rate
- Rapid breathing (hyperventilation)
- Sweating
- Trembling
- Feeling weak or tired
- Difficulty concentrating
- Sleep problems
- Gastrointestinal problems

There are several effective strategies for managing anxiety:
1. Regular exercise
2. Adequate sleep
3. Healthy diet
4. Mindfulness and meditation
5. Deep breathing exercises
6. Professional counseling
7. Support groups

Remember, seeking help is a sign of strength, not weakness. If you're struggling with anxiety, consider speaking with a mental health professional who can provide personalized strategies and support.`,
    summary: 'Learn about anxiety disorders, their symptoms, and effective strategies for managing anxiety in daily life.',
    thumbnail: '/articles/anxiety.jpg',
    category: 'Mental Health',
    readTime: '5 min read',
    tags: ['anxiety', 'mental health', 'wellness', 'self-care']
  },
  {
    id: '2',
    title: 'The Power of Mindfulness in Managing Stress',
    author: 'Dr. Michael Chen',
    date: 'August 14, 2025',
    content: `Mindfulness is more than just a buzzword - it's a powerful tool for managing stress and improving mental well-being. This article explores the science behind mindfulness and practical techniques you can start using today.`,
    summary: 'Discover how mindfulness practices can help reduce stress and improve your mental well-being.',
    thumbnail: '/articles/mindfulness.jpg',
    category: 'Wellness',
    readTime: '4 min read',
    tags: ['mindfulness', 'stress management', 'meditation', 'mental health']
  },
  {
    id: '3',
    title: 'Building Healthy Relationships: Communication is Key',
    author: 'Dr. Emily Rodriguez',
    date: 'August 13, 2025',
    content: `Strong relationships are built on effective communication. Learn the essential skills for maintaining healthy relationships with family, friends, and partners.`,
    summary: 'Master the art of communication to build and maintain healthier relationships in all areas of your life.',
    thumbnail: '/articles/relationships.jpg',
    category: 'Relationships',
    readTime: '6 min read',
    tags: ['relationships', 'communication', 'social skills', 'personal growth']
  }
];
