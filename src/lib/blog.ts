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
  // Check if the directory exists first
  if (!fs.existsSync(postsDirectory)) {
    // Return an empty array if the directory doesn't exist
    return [];
  }
  
  // Try to read the directory, return empty array if it fails
  let fileNames: string[] = [];
  try {
    // Get file names under /content/blog
    fileNames = fs.readdirSync(postsDirectory);
  } catch (error) {
    console.error('Error reading blog directory:', error);
    return [];
  }
  
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
      // If filename doesn't match the pattern, use today's date and the id as slug
      const today = new Date();
      year = today.getFullYear().toString();
      month = (today.getMonth() + 1).toString().padStart(2, '0');
      day = today.getDate().toString().padStart(2, '0');
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

type StaticParam = {
  date: string;
  slug: string;
};

export function getAllPostIds(): StaticParam[] {
  // Check if the directory exists first
  if (!fs.existsSync(postsDirectory)) {
    // Return an empty array if the directory doesn't exist
    return [];
  }
  
  // Try to read the directory, return empty array if it fails
  let fileNames: string[] = [];
  try {
    fileNames = fs.readdirSync(postsDirectory);
  } catch (error) {
    console.error('Error reading blog directory:', error);
    return [];
  }
  
  const params: StaticParam[] = [];

  fileNames.forEach((fileName) => {
    const dateMatch = fileName.match(/^(\d{4})-(\d{2})-(\d{2})-(.+)\.md$/);
    
    if (dateMatch) {
      const year = dateMatch[1];
      const month = dateMatch[2];
      const day = dateMatch[3];
      const slug = dateMatch[4];
      
      params.push({
        date: `${year}-${month}-${day}`,
        slug: slug,
      });
    } else {
      // Fallback for files that don't match the pattern
      // Use today's date for files without a date prefix
      const today = new Date();
      const year = today.getFullYear().toString();
      const month = (today.getMonth() + 1).toString().padStart(2, '0');
      const day = today.getDate().toString().padStart(2, '0');
      
      params.push({
        date: `${year}-${month}-${day}`,
        slug: fileName.replace(/\.md$/, ''),
      });
    }
  });
  
  return params;
}

export async function getPostData(date: string, slug: string): Promise<BlogPost | null> {
  // Check if the directory exists first
  if (!fs.existsSync(postsDirectory)) {
    return null;
  }
  
  // Try to read the directory
  let fileNames: string[] = [];
  try {
    fileNames = fs.readdirSync(postsDirectory);
  } catch (error) {
    console.error('Error reading blog directory:', error);
    return null;
  }
  
  // Try to find a file with both date and slug
  let fileName = fileNames.find(file => file.includes(slug) && file.includes(date));
  
  // If not found, try to find a file with just the slug (for files without date prefix)
  if (!fileName) {
    fileName = fileNames.find(file => file === `${slug}.md` || file.endsWith(`-${slug}.md`));
  }
  
  if (!fileName) {
    return null;
  }
  
  const id = fileName.replace(/\.md$/, '');
  const fullPath = path.join(postsDirectory, fileName);
  
  let fileContents: string;
  try {
    fileContents = fs.readFileSync(fullPath, 'utf8');
  } catch (error) {
    console.error(`Error reading file ${fullPath}:`, error);
    return null;
  }

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
