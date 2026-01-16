import type { Project } from "../../.content-collections/generated/index.d.ts";

interface ProjectsSectionProps {
	projects: Project[];
}

export default function ProjectsSection({ projects }: ProjectsSectionProps) {
	const sortedProjects = projects.sort(
		(a: Project, b: Project) => a.order - b.order,
	);

	return (
		<section id="projects" className="py-24 border-t border-border">
			<div className="container mx-auto px-6">
				{/* Section Header */}
				<div className="flex items-center gap-4 mb-12">
					<span className="text-primary text-sm">01</span>
					<h2 className="text-2xl font-medium text-foreground">Projects</h2>
					<span className="h-px flex-1 bg-border" />
				</div>

				<div className="space-y-6">
					{sortedProjects.map((project, index) => (
						<a
							key={project._meta.fileName}
							href={project.link}
							className="group block w-full border border-border bg-card hover:border-primary transition-all duration-300"
						>
							<div className="p-6 space-y-4">
								{/* Project number */}
								<div className="flex items-center justify-between">
									<span className="text-xs text-muted-foreground">
										#{String(index + 1).padStart(2, "0")}
									</span>
									<svg
										className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
										strokeWidth={1.5}
										aria-hidden="true"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
										/>
									</svg>
								</div>

								{/* Title */}
								<h3 className="text-lg font-medium text-foreground group-hover:text-primary transition-colors">
									{project.title}
								</h3>

								{/* Description */}
								<p className="text-sm text-muted-foreground leading-relaxed">
									{project.description}
								</p>

								{/* Tags */}
								<div className="flex flex-wrap gap-2 pt-2">
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
						</a>
					))}
				</div>

				{/* View all link */}
				<div className="mt-8 flex justify-end">
					<a
						href="/projects"
						className="group flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
					>
						<span>view all projects</span>
						<svg
							className="w-4 h-4 group-hover:translate-x-1 transition-transform"
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
					</a>
				</div>
			</div>
		</section>
	);
}
