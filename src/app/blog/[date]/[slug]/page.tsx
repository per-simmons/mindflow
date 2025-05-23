import { getAllPostIds, getPostData } from '@/lib/blog';
import Link from 'next/link';
import { notFound } from 'next/navigation';

// This is the correct format for Next.js 15 generateStaticParams
export function generateStaticParams() {
  return getAllPostIds();
}

// Next.js 15 expects this specific interface for page components
type Props = {
  params: {
    date: string;
    slug: string;
  };
  searchParams: Record<string, string | string[] | undefined>;
};

export default async function BlogPost({ params }: Props) {
  const { date, slug } = params;
  const postData = await getPostData(date, slug);
  
  if (!postData) {
    notFound();
  }

  return (
    <div className="bg-white py-12 sm:py-16">
      <article className="mx-auto max-w-3xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl">
          <Link 
            href="/blog" 
            className="text-sm font-medium text-indigo-600 hover:text-indigo-500"
          >
            ← Back to all posts
          </Link>
          
          <h1 className="mt-6 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {postData.title}
          </h1>
          
          <div className="mt-2 flex items-center gap-x-4 text-sm text-gray-500">
            <time dateTime={postData.date}>{postData.formattedDate}</time>
            <span className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600">
              {postData.author}
            </span>
          </div>
          
          <div 
            className="mt-10 prose prose-lg prose-indigo max-w-none text-gray-800 leading-relaxed" 
            style={{ fontSize: '18px', lineHeight: '1.8', fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif' }}
            dangerouslySetInnerHTML={{ __html: postData.content }} 
          />
        </div>
      </article>
    </div>
  );
}
