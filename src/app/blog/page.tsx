import { getSortedPostsData, type BlogPost } from '@/lib/blog';
import BlogPostCard from '@/components/BlogPostCard';

export default function BlogPage() {
  const allPostsData = getSortedPostsData();
  
  return (
    <div className="bg-white py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">MindFlow Blog</h1>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Insights, updates, and thoughts on productivity and AI.
          </p>
        </div>
        
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-12 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {allPostsData.map((post: BlogPost) => (
            <BlogPostCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
}
