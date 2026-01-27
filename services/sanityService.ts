/**
 * Sanity Fetcher for Bycom Intelligence Hub
 * Optimized for 2026 Performance Standards
 */

const PROJECT_ID = process.env.SANITY_PROJECT_ID || 'y6j27h2a'; // Default placeholder or user ID
const DATASET = process.env.SANITY_DATASET || 'production';
const QUERY_URL = `https://${PROJECT_ID}.api.sanity.io/v2021-10-21/data/query/${DATASET}`;

export interface Post {
  _id: string;
  title: string;
  slug: { current: string };
  mainImage?: { asset: { _ref: string } };
  publishedAt: string;
  excerpt: string;
  body: any;
  author?: { name: string; image?: any };
  categories?: string[];
}

export const fetchPosts = async (): Promise<Post[]> => {
  const query = encodeURIComponent(`*[_type == "post"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    mainImage,
    publishedAt,
    "excerpt": array::join(string::split(pt::text(body), "")[0..150], "") + "...",
    "categories": categories[]->title
  }`);

  try {
    const response = await fetch(`${QUERY_URL}?query=${query}`);
    const { result } = await response.json();
    return result || [];
  } catch (error) {
    console.error("Sanity Fetch Error:", error);
    return [];
  }
};

export const fetchPostBySlug = async (slug: string): Promise<Post | null> => {
  const query = encodeURIComponent(`*[_type == "post" && slug.current == $slug][0] {
    ...,
    "categories": categories[]->title,
    "author": author-> { name, image }
  }`);
  
  try {
    const response = await fetch(`${QUERY_URL}?query=${query}&$slug="${slug}"`);
    const { result } = await response.json();
    return result;
  } catch (error) {
    console.error("Sanity Detail Fetch Error:", error);
    return null;
  }
};

// Helper for Sanity images
export const urlFor = (source: any) => {
  if (!source?.asset?._ref) return '';
  const [_file, id, size, format] = source.asset._ref.split('-');
  return `https://cdn.sanity.io/images/${PROJECT_ID}/${DATASET}/${id}-${size}.${format}`;
};
