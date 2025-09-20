import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const postsDirectory = path.join(process.cwd(), 'src', 'posts');

export function getPostFiles() {
  return fs.readdirSync(postsDirectory).filter(fn => fn.endsWith('.md'));
}

export function getPostBySlug(slug) {
  const realSlug = slug.replace(/\.md$/, '');
  const fullPath = path.join(postsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);
  return { slug: data.slug || realSlug, meta: data, content };
}

export function getAllPosts() {
  const files = getPostFiles();
  const posts = files.map(filename => {
    const filePath = path.join(postsDirectory, filename);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data } = matter(fileContents);
    return {
      slug: data.slug || filename.replace(/\.md$/, ''),
      title: data.title || '',
      date: data.date || '',
      description: data.description || ''
    };
  });

  // sort by date desc
  posts.sort((a, b) => new Date(b.date) - new Date(a.date));
  return posts;
}

export async function markdownToHtml(markdown) {
  const result = await remark().use(html).process(markdown);
  return result.toString();
}
