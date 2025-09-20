import Link from 'next/link';
import { getAllPosts } from '@/lib/posts';

export default function PostsPage() {
  const posts = getAllPosts();

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">All Posts</h1>
      <ul className="space-y-4">
        {posts.map(post => (
          <li key={post.slug} className="border p-4 rounded bg-gray-800/30">
            <Link href={`/posts/${post.slug}`} className="text-xl font-semibold hover:underline">
              {post.title}
            </Link>
            <div className="text-sm text-gray-400">{post.date}</div>
            <p className="mt-2 text-gray-300">{post.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
