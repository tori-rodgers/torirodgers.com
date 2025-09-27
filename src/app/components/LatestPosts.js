"use client";
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function LatestPosts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    let mounted = true;
    fetch('https://dev.to/api/articles?username=torirodgers&per_page=3')
      .then(res => res.json())
      .then(data => {
        if (mounted) setPosts(data);
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
          <div key={p.id} className="p-3 rounded border border-gray-700/50 bg-gray-800/20 flex items-center gap-4">
            <Link href={`/posts/${p.slug}`} className="flex items-center gap-4">
              {p.social_image && (
                <Image
                  src={p.social_image}
                  alt={p.title}
                  width={80}
                  height={80}
                  className="w-20 h-20 object-cover rounded"
                  style={{ minWidth: 80, minHeight: 80 }}
                  unoptimized
                  priority={true}
                />
              )}
              <div>
                <div className="text-lg font-medium hover:underline">{p.title}</div>
                <div className="text-sm text-gray-400">{p.readable_publish_date || p.published_at?.split('T')[0]}</div>
                {Array.isArray(p.tag_list) && p.tag_list.length > 0 && (
                  <div className="flex flex-wrap gap-1 mt-2">
                    {p.tag_list.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 text-xs rounded-full bg-purple-500/20 text-purple-200 border border-purple-500/30"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </Link>
          </div>
        ))}
      </div>
      <div className="mt-4">
        <Link
          href="/posts"
          className="inline-block px-4 py-2 bg-purple-600 rounded hover:bg-purple-500"
        >
          View all posts
        </Link>
      </div>
    </section>
  );
}
