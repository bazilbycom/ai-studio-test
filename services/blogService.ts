/**
 * Bycom Local Blog Fetcher
 * Optimized for Sveltia CMS / Git-based content
 */

export interface Post {
  id: string;
  title: string;
  slug: string;
  date: string;
  thumbnail: string;
  excerpt: string;
  categories: string[];
  body: string;
}

// Mock data for initial launch
const MOCK_POSTS: Post[] = [
  {
    id: '1',
    title: 'The 2026 Architecture Protocol',
    slug: '2026-architecture-protocol',
    date: '2025-05-20',
    thumbnail: 'https://images.unsplash.com/photo-1639322537228-f710d846310a?auto=format&fit=crop&q=80&w=1600',
    excerpt: 'Deep dive into sub-ms latency patterns and how Bycom handles extreme-scale traffic for global fintech platforms.',
    categories: ['Engineering', 'Performance'],
    body: `## Performance is the Only Feature
    
In 2026, user patience is non-existent. Our new protocol leverages edge-side rendering and atomic CSS to deliver experiences that feel native.

### Key Metrics:
- **First Contentful Paint:** < 200ms
- **Hydration:** Non-blocking
- **API Latency:** Global < 5ms`
  },
  {
    id: '2',
    title: 'AI Native Design Systems',
    slug: 'ai-native-design',
    date: '2025-05-15',
    thumbnail: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1600',
    excerpt: 'How generative AI is reshaping the UI/UX landscape and our approach to dynamic component generation.',
    categories: ['AI', 'Design'],
    body: `## Beyond Static Layouts
    
We are moving away from fixed grids. Our new design system adapts based on real-time user intent, powered by our custom neural layers.`
  }
];

export const fetchPosts = async (): Promise<Post[]> => {
  return MOCK_POSTS;
};

export const fetchPostBySlug = async (slug: string): Promise<Post | null> => {
  return MOCK_POSTS.find(p => p.slug === slug) || null;
};
