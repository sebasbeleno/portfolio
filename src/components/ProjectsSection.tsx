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
						<div
							key={project._meta.fileName}
							className="group w-full border border-border bg-card hover:border-primary transition-all duration-300"
						>
							<div className="flex flex-col md:flex-row gap-6 p-6">
								{/* Project Image */}
								<div className="md:w-48 md:h-48 w-full h-48 shrink-0 overflow-hidden bg-muted">
									<img
										src={project.image}
										alt={project.title}
										className="w-full h-full object-cover"
									/>
								</div>

								{/* Project Content */}
								<div className="flex-1 space-y-4">
									{/* Project number and year */}
									<div className="flex items-center justify-between">
										<span className="text-xs text-muted-foreground">
											#{String(index + 1).padStart(2, "0")}
										</span>
										<span className="text-xs text-muted-foreground">
											{project.year}
										</span>
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

									{/* Links */}
									{project.links && (
										<div className="flex items-center gap-4 pt-2">
											{project.links.website && (
												<a
													href={project.links.website}
													target="_blank"
													rel="noopener noreferrer"
													className="text-muted-foreground hover:text-primary transition-colors"
													onClick={(e) => e.stopPropagation()}
												>
													<svg
														className="w-5 h-5"
														fill="none"
														stroke="currentColor"
														viewBox="0 0 24 24"
														strokeWidth={1.5}
													>
														<path
															strokeLinecap="round"
															strokeLinejoin="round"
															d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
														/>
													</svg>
												</a>
											)}
											{project.links.github && (
												<a
													href={project.links.github}
													target="_blank"
													rel="noopener noreferrer"
													className="text-muted-foreground hover:text-primary transition-colors"
													onClick={(e) => e.stopPropagation()}
												>
													<svg
														className="w-5 h-5"
														fill="currentColor"
														viewBox="0 0 24 24"
													>
														<path
															fillRule="evenodd"
															clipRule="evenodd"
															d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z"
														/>
													</svg>
												</a>
											)}
											{project.links.appStore && (
												<a
													href={project.links.appStore}
													target="_blank"
													rel="noopener noreferrer"
													className="text-muted-foreground hover:text-primary transition-colors"
													onClick={(e) => e.stopPropagation()}
												>
													<svg
														className="w-5 h-5"
														fill="currentColor"
														viewBox="0 0 24 24"
													>
														<path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
													</svg>
												</a>
											)}
											{project.links.googlePlay && (
												<a
													href={project.links.googlePlay}
													target="_blank"
													rel="noopener noreferrer"
													className="text-muted-foreground hover:text-primary transition-colors"
													onClick={(e) => e.stopPropagation()}
												>
													<svg
														className="w-5 h-5"
														fill="currentColor"
														viewBox="0 0 24 24"
													>
														<path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
													</svg>
												</a>
											)}
										</div>
									)}
								</div>
							</div>
						</div>
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
