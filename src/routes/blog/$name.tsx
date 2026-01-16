import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { marked } from "marked";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { allBlogs } from "../../../.content-collections/generated/index.js";

export const Route = createFileRoute("/blog/$name")({
	component: BlogPostPage,
	loader: ({ params }) => {
		const post = allBlogs.find((p) => p._meta.path === params.name);
		if (!post) {
			throw notFound();
		}
		return { post };
	},
});

function BlogPostPage() {
	const { post } = Route.useLoaderData();
	const htmlContent = marked(post.content);

	return (
		<div className="min-h-screen bg-background">
			<Header />
			<main className="pt-24 pb-12">
				<div className="container mx-auto px-6 max-w-4xl">
					<div className="mb-8">
						<Link
							to="/blog"
							className="text-sm text-muted-foreground hover:text-foreground transition-colors mb-4 inline-flex items-center gap-2"
						>
							<svg
								className="w-4 h-4"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
								strokeWidth={1.5}
								aria-hidden="true"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
								/>
							</svg>
							back to blog
						</Link>
					</div>

					<article>
						<header className="mb-8 pb-8 border-b border-border">
							<span className="text-xs text-muted-foreground">{post.date}</span>
							<h1 className="text-4xl font-medium text-foreground mt-4 mb-4">
								{post.title}
							</h1>
							<p className="text-lg text-muted-foreground">{post.excerpt}</p>
						</header>

						<div
							className="prose prose-invert prose-lg max-w-none"
							dangerouslySetInnerHTML={{ __html: htmlContent }}
						/>
					</article>
				</div>
			</main>
			<Footer />
		</div>
	);
}
