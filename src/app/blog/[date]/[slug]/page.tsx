import { getAllPostIds, getPostData } from '@/lib/blog';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  const paths = getAllPostIds();
  return paths;
}

export default async function BlogPost({
  params,
}: {
  params: { date: string; slug: string };
}) {
  const postData = await getPostData(params.date, params.slug);
  
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
          
          <div className="mt-10 prose prose-lg prose-indigo max-w-none" dangerouslySetInnerHTML={{ __html: postData.content }} />
        </div>
      </article>
    </div>
  );
}
