export interface Program {
  id: string;
  title: string;
  description: string;
  price: number;
  benefits: string[];
  features: string[];
}

export interface Counselor {
  id: string;
  name: string;
  photo: string;
  expertise: string[];
  languages: string[];
  bio: string;
  availability: string[];
}

export interface Article {
  id: string;
  title: string;
  author: string;
  date: string;
  content: string;
  summary: string;
  thumbnail: string;
  category: string;
  readTime: string;
  tags: string[];
}

export interface Workshop {
  id: string;
  title: string;
  date: Date;
  description: string;
  host: string;
  duration: string;
  registrationUrl: string;
}

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  role: 'student' | 'parent' | 'counselor';
}
