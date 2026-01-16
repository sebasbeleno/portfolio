import { Link } from "@tanstack/react-router";
import type { Blog } from "../../.content-collections/generated/index.d.ts";

interface BlogSectionProps {
	blogPosts: Blog[];
}

export default function BlogSection({ blogPosts }: BlogSectionProps) {
	const sortedBlogPosts = [...blogPosts].sort(
		(a: Blog, b: Blog) =>
			new Date(b.date).getTime() - new Date(a.date).getTime(),
	);

	return (
		<section id="blog" className="py-24 border-t border-border">
			<div className="container mx-auto px-6">
				<div className="flex items-center gap-4 mb-12">
					<span className="text-primary text-sm">02</span>
					<h2 className="text-2xl font-medium text-foreground">Blog</h2>
					<span className="h-px flex-1 bg-border" />
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
		</section>
	);
}
