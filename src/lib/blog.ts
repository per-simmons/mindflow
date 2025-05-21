import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import { format, parseISO } from 'date-fns';

const postsDirectory = path.join(process.cwd(), 'content/blog');

export type BlogPost = {
  id: string;
  title: string;
  date: string;
  formattedDate: string;
  author: string;
  excerpt: string;
  content: string;
  slug: string;
  year: string;
  month: string;
  day: string;
};

export function getSortedPostsData(): BlogPost[] {
  // Get file names under /content/blog
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, '');

    // Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    // Parse the date from the file name (format: YYYY-MM-DD-slug.md)
    const dateMatch = fileName.match(/^(\d{4})-(\d{2})-(\d{2})-(.+)\.md$/);
    const date = matterResult.data.date || '';
    let slug = '';
    let year = '';
    let month = '';
    let day = '';

    if (dateMatch) {
      year = dateMatch[1];
      month = dateMatch[2];
      day = dateMatch[3];
      slug = dateMatch[4];
    } else {
      // If filename doesn't match the pattern, use the id as slug
      slug = id;
    }

    // Format the date for display
    const formattedDate = date ? format(parseISO(date), 'MMMM d, yyyy') : '';

    // Combine the data with the id
    return {
      id,
      ...(matterResult.data as { title: string; date: string; author: string; excerpt: string }),
      content: matterResult.content,
      formattedDate,
      slug,
      year,
      month,
      day,
    };
  });

  // Sort posts by date
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export function getAllPostIds() {
  const fileNames = fs.readdirSync(postsDirectory);

  return fileNames.map((fileName) => {
    const dateMatch = fileName.match(/^(\d{4})-(\d{2})-(\d{2})-(.+)\.md$/);
    
    if (dateMatch) {
      const year = dateMatch[1];
      const month = dateMatch[2];
      const day = dateMatch[3];
      const slug = dateMatch[4];
      
      return {
        params: {
          date: `${year}-${month}-${day}`,
          slug: slug,
        },
      };
    }
    
    // Fallback for files that don't match the pattern
    return {
      params: {
        date: 'unknown',
        slug: fileName.replace(/\.md$/, ''),
      },
    };
  });
}

export async function getPostData(date: string, slug: string): Promise<BlogPost | null> {
  const fileNames = fs.readdirSync(postsDirectory);
  const fileName = fileNames.find(file => file.includes(slug) && file.includes(date));
  
  if (!fileName) {
    return null;
  }
  
  const id = fileName.replace(/\.md$/, '');
  const fullPath = path.join(postsDirectory, fileName);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);

  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  // Parse the date from the file name
  const dateMatch = fileName.match(/^(\d{4})-(\d{2})-(\d{2})-(.+)\.md$/);
  let year = '';
  let month = '';
  let day = '';

  if (dateMatch) {
    year = dateMatch[1];
    month = dateMatch[2];
    day = dateMatch[3];
  }

  // Format the date for display
  const formattedDate = matterResult.data.date 
    ? format(parseISO(matterResult.data.date as string), 'MMMM d, yyyy') 
    : '';

  // Combine the data with the id and contentHtml
  return {
    id,
    ...(matterResult.data as { title: string; date: string; author: string; excerpt: string }),
    content: contentHtml,
    formattedDate,
    slug,
    year,
    month,
    day,
  };
}
