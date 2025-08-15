import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';

// Mock data - replace with actual API call
const articles = {
  '1': {
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
    category: 'Mental Health',
    readTime: '5 min read',
    tags: ['anxiety', 'mental health', 'wellness', 'self-care']
  }
  // Add more articles as needed
};

export default function Article() {
  const { id } = useParams();
  const article = articles[id as keyof typeof articles];

  if (!article) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-2xl text-gray-600">Article not found</h1>
      </div>
    );
  }

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
    >
      <header className="mb-8">
        <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
          <span>{article.date}</span>
          <span>•</span>
          <span>{article.readTime}</span>
          <span>•</span>
          <span>{article.category}</span>
        </div>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">{article.title}</h1>
        <div className="flex items-center gap-2">
          <div className="h-10 w-10 rounded-full bg-indigo-100 flex items-center justify-center">
            <span className="text-indigo-600 font-medium">
              {article.author.split(' ').map(n => n[0]).join('')}
            </span>
          </div>
          <div>
            <p className="font-medium text-gray-900">{article.author}</p>
          </div>
        </div>
      </header>

      <div className="prose prose-lg max-w-none">
        {article.content.split('\n\n').map((paragraph, index) => (
          <motion.p
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * index }}
            className="mb-6"
          >
            {paragraph}
          </motion.p>
        ))}
      </div>

      <div className="mt-8">
        <h2 className="text-lg font-medium text-gray-900 mb-4">Tags</h2>
        <div className="flex flex-wrap gap-2">
          {article.tags.map(tag => (
            <span
              key={tag}
              className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-800"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
}
