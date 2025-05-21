import Link from 'next/link';
import { BlogPost } from '@/lib/blog';

type BlogPostCardProps = {
  post: BlogPost;
};

export default function BlogPostCard({ post }: BlogPostCardProps) {
  return (
    <div className="bg-white overflow-hidden shadow rounded-lg">
      <div className="px-4 py-5 sm:p-6">
        <h3 className="text-lg leading-6 font-medium text-gray-900">
          <Link 
            href={`/blog/${post.year}-${post.month}-${post.day}/${post.slug}`}
            className="hover:text-indigo-600"
          >
            {post.title}
          </Link>
        </h3>
        <div className="mt-2 max-w-xl text-sm text-gray-500">
          <p>{post.formattedDate} • {post.author}</p>
        </div>
        <div className="mt-3 text-base text-gray-500">
          <p>{post.excerpt}</p>
        </div>
        <div className="mt-4">
          <Link
            href={`/blog/${post.year}-${post.month}-${post.day}/${post.slug}`}
            className="text-sm font-medium text-indigo-600 hover:text-indigo-500"
          >
            Read more <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
