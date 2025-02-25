export interface Template {
  id: string;
  title: string;
  description: string;
  image: string;
  category: 'frontend' | 'fullstack' | 'backend' | 'e-commerce' | 'other';
  tags: string[];
  stars: number;
  downloads: number;
  author: {
    name: string;
    avatar: string;
  };
  technologies: string[];
  demoUrl?: string;
  longDescription?: string;
  features?: string[];
  useCases?: string[];
  requirements?: string[];
  installation?: string[];
}