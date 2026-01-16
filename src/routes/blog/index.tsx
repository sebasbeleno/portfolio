import { createFileRoute, Link } from "@tanstack/react-router";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import type { Blog } from "../../../.content-collections/generated/index.d.ts";
import { allBlogs } from "../../../.content-collections/generated/index.js";

export const Route = createFileRoute("/blog/")({
	component: BlogPage,
});

function BlogPage() {
	const sortedBlogPosts = [...allBlogs].sort(
		(a: Blog, b: Blog) =>
			new Date(b.date).getTime() - new Date(a.date).getTime(),
	);

	return (
		<div className="min-h-screen bg-background">
			<Header />
			<main className="pt-24 pb-12">
				<div className="container mx-auto px-6">
					<div className="mb-12">
						<Link
							to="/"
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
							back
						</Link>
						<h1 className="text-4xl font-medium text-foreground mt-4">Blog</h1>
						<p className="text-muted-foreground mt-2">
							Thoughts on software engineering, technology, and more
						</p>
					</div>

					<div className="space-y-1">
						{sortedBlogPosts.map((post, index) => (
							<Link
								key={post._meta.fileName}
								to="/blog/$name"
								params={{ name: post._meta.path }}
								className="group flex items-start md:items-center justify-between py-6 border-b border-border hover:bg-card/50 -mx-4 px-4 transition-colors"
							>
								<div className="flex items-start md:items-center gap-4 md:gap-8 flex-1">
									<span className="text-xs text-muted-foreground font-mono">
										{String(index + 1).padStart(2, "0")}
									</span>

									<div className="space-y-1 flex-1">
										<h3 className="text-foreground group-hover:text-primary transition-colors font-medium">
											{post.title}
										</h3>
										<p className="text-sm text-muted-foreground hidden md:block">
											{post.excerpt}
										</p>
									</div>
								</div>

								<div className="flex items-center gap-4">
									<span className="text-xs text-muted-foreground hidden sm:block">
										{post.date}
									</span>
									<svg
										className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
										strokeWidth={1.5}
										aria-hidden="true"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
										/>
									</svg>
								</div>
							</Link>
						))}
					</div>

					<div className="mt-12 p-8 border border-dashed border-border text-center">
						<p className="text-muted-foreground text-sm">
							<span className="text-primary">$</span> More posts coming soon...
							<span className="cursor-blink">_</span>
						</p>
					</div>
				</div>
			</main>
			<Footer />
		</div>
	);
}
