import Link from 'next/link';
import { getPostBySlug, markdownToHtml } from '@/lib/posts';

export async function generateStaticParams() {
  const fs = await import('fs');
  const path = await import('path');
  const postsDir = path.join(process.cwd(), 'src', 'posts');
  const files = fs.readdirSync(postsDir).filter(fn => fn.endsWith('.md'));
  return files.map(f => ({ slug: f.replace(/\.md$/, '') }));
}

export default async function PostPage({ params }) {
  const paramsObj = await params;
  const slug = paramsObj.slug;
  const post = getPostBySlug(slug);
  const content = await markdownToHtml(post.content);

  return (
    <div className="container mx-auto p-8">
      <div className="flex gap-2 mb-6">
        <Link href="/" className="px-3 py-1 bg-gray-700 rounded">Home</Link>
        <Link href="/posts" className="px-3 py-1 bg-gray-700 rounded">All Posts</Link>
      </div>

      <h1 className="text-3xl font-bold mb-2">{post.meta.title}</h1>
      <div className="text-sm text-gray-400 mb-6">{post.meta.date}</div>
      <article className="prose prose-invert" dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
}
