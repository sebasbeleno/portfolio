import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import DOMPurify from "dompurify";
import { useEffect, useState } from "react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { parseMarkdown } from "@/lib/markdown";
import { allProjects } from "../../../.content-collections/generated/index.js";
import "highlight.js/styles/github-dark.css";

export const Route = createFileRoute("/projects/$name")({
	component: ProjectDetailPage,
	loader: async ({ params }) => {
		const project = [...allProjects].find((p) => p._meta.path === params.name);
		if (!project) {
			throw notFound();
		}

		return { project };
	},
});

function ProjectDetailPage() {
	const { project } = Route.useLoaderData();
	const [sanitizedHtml, setSanitizedHtml] = useState<string>("");

	useEffect(() => {
		const processMarkdown = async () => {
			const rawHtml = await parseMarkdown(project.content);
			const sanitized = DOMPurify.sanitize(rawHtml);
			setSanitizedHtml(sanitized);
		};
		processMarkdown();
	}, [project.content]);

	return (
		<div className="min-h-screen bg-background">
			<Header />
			<main className="pt-24 pb-12">
				<div className="container mx-auto px-6 max-w-4xl">
					<div className="mb-8">
						<Link
							to="/projects"
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
							back to projects
						</Link>
					</div>

					<article>
						<header className="mb-8 pb-8 border-b border-border">
							<div className="flex items-center gap-4 mb-4">
								<span className="text-xs text-muted-foreground">
									{project.year}
								</span>
								<div className="flex flex-wrap gap-2">
									{project.tags.map((tag) => (
										<span
											key={tag}
											className="px-2 py-1 text-xs border border-border text-muted-foreground"
										>
											{tag}
										</span>
									))}
								</div>
							</div>

							{project.image && (
								<div className="mb-8 w-full overflow-hidden bg-muted aspect-video">
									<img
										src={project.image}
										alt={project.title}
										className="w-full h-full object-cover"
									/>
								</div>
							)}

							<h1 className="text-4xl font-medium text-foreground mb-4">
								{project.title}
							</h1>
							<p className="text-lg text-muted-foreground">
								{project.description}
							</p>

							{project.links && (
								<div className="flex items-center gap-4 mt-6">
									{project.links.website && (
										<a
											href={project.links.website}
											target="_blank"
											rel="noopener noreferrer"
											className="text-sm text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-2"
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
													d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
												/>
											</svg>
											Website
										</a>
									)}
									{project.links.github && (
										<a
											href={project.links.github}
											target="_blank"
											rel="noopener noreferrer"
											className="text-sm text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-2"
										>
											<svg
												className="w-4 h-4"
												fill="currentColor"
												viewBox="0 0 24 24"
												aria-hidden="true"
											>
												<path
													fillRule="evenodd"
													clipRule="evenodd"
													d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z"
												/>
											</svg>
											GitHub
										</a>
									)}
									{project.links.appStore && (
										<a
											href={project.links.appStore}
											target="_blank"
											rel="noopener noreferrer"
											className="text-sm text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-2"
										>
											<svg
												className="w-4 h-4"
												fill="currentColor"
												viewBox="0 0 24 24"
												aria-hidden="true"
											>
												<path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
											</svg>
											App Store
										</a>
									)}
									{project.links.googlePlay && (
										<a
											href={project.links.googlePlay}
											target="_blank"
											rel="noopener noreferrer"
											className="text-sm text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-2"
										>
											<svg
												className="w-4 h-4"
												fill="currentColor"
												viewBox="0 0 24 24"
												aria-hidden="true"
											>
												<path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
											</svg>
											Google Play
										</a>
									)}
								</div>
							)}
						</header>

						<div
							className="prose prose-invert prose-lg max-w-none"
							dangerouslySetInnerHTML={{ __html: sanitizedHtml }}
						/>
					</article>
				</div>
			</main>
			<Footer />
		</div>
	);
}
