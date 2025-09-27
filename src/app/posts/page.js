import Header from '../components/Header';
import Image from 'next/image';
import Link from 'next/link';

// Lists all posts with styling

async function getDevtoPosts() {
  const res = await fetch('https://dev.to/api/articles?username=torirodgers', { next: { revalidate: 3600 } });
  if (!res.ok) return [];
  return res.json();
}

export default async function PostsPage() {
  const posts = await getDevtoPosts();
  return (
    <div>
      <Header />
      <div className="container mx-auto p-8 pt-24">
        <h1 className="text-3xl font-bold mb-8">All Posts</h1>
        <div className="grid gap-8 md:grid-cols-2">
          {posts.map(post => (
            <Link key={post.id} href={`/posts/${post.slug}`} className="block rounded border border-gray-700/50 bg-gray-800/20 p-4 hover:shadow-lg transition">
              <div className="flex gap-4 items-center">
                {post.social_image && (
                  <Image src={post.social_image} alt={post.title} width={100} height={100} className="rounded w-24 h-24 object-cover" unoptimized />
                )}
                <div>
                  <div className="text-xl font-semibold mb-1">{post.title}</div>
                  <div className="text-gray-400 text-sm mb-2">{post.readable_publish_date || post.published_at?.split('T')[0]}</div>
                  <div className="text-gray-300 text-sm mb-2 whitespace-pre-line break-words">{post.description}</div>
                  {/*  FIXME: description is getting cut off */}
                  <div className="flex flex-wrap gap-1 mt-2">
                    {post.tag_list.map(tag => (
                      <span key={tag} className="px-2 py-0.5 text-xs rounded-full bg-purple-500/20 text-purple-200 border border-purple-500/30">#{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
