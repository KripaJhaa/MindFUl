import { FC } from 'react';

export interface Value {
  name: string;
  description: string;
}

export interface Stat {
  id: number;
  name: string;
  value: string;
}

export interface Testimonial {
  content: string;
  author: string;
  role: string;
  image: string;
}
