"use client";
import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function LatestPosts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    let mounted = true;
    fetch('/api/posts')
      .then(res => res.json())
      .then(data => {
        if (mounted) setPosts(data.slice(0, 2));
      })
      .catch(() => {});
    return () => {
      mounted = false;
    };
  }, []);

  return (
    <section id="latest-posts" className="px-4 py-15 sm:px-6 lg:px-8">
      <h3 className="text-2xl font-semibold mb-4">Latest Posts</h3>
      <div className="space-y-3">
        {posts.map((p) => (
          <div key={p.slug} className="p-3 rounded border border-gray-700/50 bg-gray-800/20">
            <Link href={`/posts/${p.slug}`} className="text-lg font-medium hover:underline">
              {p.title}
            </Link>
            <div className="text-sm text-gray-400">{p.date}</div>
          </div>
        ))}
      </div>
      <div className="mt-4">
        <Link href="/posts" className="inline-block px-4 py-2 bg-purple-600 rounded hover:bg-purple-500">
          View all posts
        </Link>
      </div>
    </section>
  );
}
