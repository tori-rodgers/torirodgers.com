import Header from "../../components/Header";
import Image from "next/image";

// Individual post page with styling

async function getDevtoPost(slug) {
	const res = await fetch(`https://dev.to/api/articles/torirodgers/${slug}`, {
		next: { revalidate: 3600 },
	});
	if (!res.ok) return null;
	return res.json();
}

export default async function PostPage({ params }) {
	const resolvedParams = await params;
	const slug = resolvedParams.slug;
	const post = await getDevtoPost(slug);
	if (!post)
		return <div className="container mx-auto p-8 pt-24">Post not found.</div>;
	return (
		<div>
			<Header />
			<div className="container mx-auto p-8 pb-20 sm:p-20 font-[family-name:var(--font-geist-sans)]">
				<div className="mb-6 flex flex-col sm:flex-row gap-6 items-center">
					{post.social_image && (
						<Image
							src={post.social_image}
							alt={post.title}
							width={200}
							height={200}
							className="rounded w-48 h-48 object-cover"
							unoptimized
						/>
					)}
					<div>
						<h1 className="text-3xl font-bold mb-2">{post.title}</h1>
						<div className="text-gray-400 text-sm mb-2">
							{post.readable_publish_date || post.published_at?.split("T")[0]}
						</div>
						{Array.isArray(post.tag_list) && post.tag_list.length > 0 && (
							<div className="flex flex-wrap gap-1 mt-2">
								{post.tag_list.map((tag) => (
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
				</div>
				<article
					className="prose prose-invert max-w-none"
					dangerouslySetInnerHTML={{ __html: post.body_html || "" }}
				/>
			</div>
		</div>
	);
}
