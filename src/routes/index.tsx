import { createFileRoute } from '@tanstack/react-router'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const Route = createFileRoute('/')({
  component: Portfolio,
})

// Sample projects data
const projects = [
  {
    id: 1,
    title: 'Cloud Infrastructure',
    description: 'Scalable cloud architecture with automated deployments and monitoring.',
    tags: ['AWS', 'Terraform', 'Docker'],
    link: '#',
  },
  {
    id: 2,
    title: 'API Gateway',
    description: 'High-performance API gateway handling millions of requests daily.',
    tags: ['Go', 'gRPC', 'Redis'],
    link: '#',
  },
  {
    id: 3,
    title: 'Real-time Dashboard',
    description: 'Interactive analytics dashboard with live data visualization.',
    tags: ['React', 'TypeScript', 'WebSocket'],
    link: '#',
  },
  {
    id: 4,
    title: 'CLI Tools',
    description: 'Developer productivity tools for streamlined workflows.',
    tags: ['Rust', 'CLI', 'Open Source'],
    link: '#',
  },
]

// Sample blog posts data
const blogPosts = [
  {
    id: 1,
    title: 'Building Scalable Systems',
    excerpt: 'Lessons learned from scaling applications to handle millions of users.',
    date: '2025-01-10',
  },
  {
    id: 2,
    title: 'The Art of Clean Code',
    excerpt: 'Principles and practices for writing maintainable software.',
    date: '2025-01-05',
  },
  {
    id: 3,
    title: 'Modern DevOps Practices',
    excerpt: 'Implementing CI/CD pipelines that actually work.',
    date: '2024-12-28',
  },
]

function Portfolio() {
  return (
    <div className="min-h-screen bg-background grid-background">
      <Header />

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center pt-16 relative">
        {/* Corner decorations */}
        <div className="absolute top-20 left-6 w-16 h-16 border-l border-t border-border" />
        <div className="absolute top-20 right-6 w-16 h-16 border-r border-t border-border" />
        <div className="absolute bottom-6 left-6 w-16 h-16 border-l border-b border-border" />
        <div className="absolute bottom-6 right-6 w-16 h-16 border-r border-b border-border" />

        <div className="container mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            {/* Terminal prompt */}
            <div className="inline-flex items-center gap-2 text-muted-foreground text-sm animate-fade-in-up opacity-0">
              <span className="text-primary">$</span>
              <span>whoami</span>
            </div>

            {/* Name */}
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-foreground animate-fade-in-up opacity-0 animation-delay-100">
              Sebastian Beleño
            </h1>

            {/* Title */}
            <div className="flex items-center justify-center gap-3 animate-fade-in-up opacity-0 animation-delay-200">
              <span className="h-px w-8 bg-border" />
              <h2 className="text-xl md:text-2xl text-muted-foreground font-light">
                Senior Software Engineer
              </h2>
              <span className="h-px w-8 bg-border" />
            </div>

            {/* Bio */}
            <p className="text-muted-foreground leading-relaxed max-w-xl mx-auto animate-fade-in-up opacity-0 animation-delay-300">
              Building elegant solutions to complex problems. Passionate about
              clean code, scalable architecture, and developer experience.
            </p>

            {/* Social Links */}
            <div className="flex items-center justify-center gap-6 pt-4 animate-fade-in-up opacity-0 animation-delay-400">
              <a
                href="https://github.com/sebasbeleno"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 px-4 py-2 border border-border hover:border-primary transition-colors duration-200"
              >
                <svg
                  className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
                <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                  GitHub
                </span>
              </a>

              <a
                href="https://linkedin.com/in/sebasbeleno"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 px-4 py-2 border border-border hover:border-primary transition-colors duration-200"
              >
                <svg
                  className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                  LinkedIn
                </span>
              </a>

              <a
                href="mailto:hello@sebastian.dev"
                className="group flex items-center gap-2 px-4 py-2 border border-border hover:border-primary transition-colors duration-200"
              >
                <svg
                  className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                  />
                </svg>
                <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                  Email
                </span>
              </a>
            </div>

            {/* Scroll indicator */}
            <div className="pt-16 animate-fade-in-up opacity-0 animation-delay-500">
              <a
                href="#projects"
                className="inline-flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <span className="text-xs">scroll</span>
                <svg
                  className="w-4 h-4 animate-bounce"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 border-t border-border">
        <div className="container mx-auto px-6">
          {/* Section Header */}
          <div className="flex items-center gap-4 mb-12">
            <span className="text-primary text-sm">01</span>
            <h2 className="text-2xl font-medium text-foreground">Projects</h2>
            <span className="h-px flex-1 bg-border" />
          </div>

          {/* Projects Grid - Horizontal Scroll */}
          <div className="overflow-x-auto pb-4 -mx-6 px-6">
            <div className="flex gap-6 min-w-max">
              {projects.map((project) => (
                <a
                  key={project.id}
                  href={project.link}
                  className="group w-80 flex-shrink-0 border border-border bg-card hover:border-primary transition-all duration-300"
                >
                  <div className="p-6 space-y-4">
                    {/* Project number */}
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-muted-foreground">
                        #{String(project.id).padStart(2, '0')}
                      </span>
                      <svg
                        className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
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
          </div>

          {/* View all link */}
          <div className="mt-8 flex justify-end">
            <a
              href="#"
              className="group flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <span>view all projects</span>
              <svg
                className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
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

      {/* Blog Section */}
      <section id="blog" className="py-24 border-t border-border">
        <div className="container mx-auto px-6">
          {/* Section Header */}
          <div className="flex items-center gap-4 mb-12">
            <span className="text-primary text-sm">02</span>
            <h2 className="text-2xl font-medium text-foreground">Blog</h2>
            <span className="h-px flex-1 bg-border" />
          </div>

          {/* Blog Posts */}
          <div className="space-y-1">
            {blogPosts.map((post, index) => (
              <a
                key={post.id}
                href="#"
                className="group flex items-start md:items-center justify-between py-6 border-b border-border hover:bg-card/50 -mx-4 px-4 transition-colors"
              >
                <div className="flex items-start md:items-center gap-4 md:gap-8 flex-1">
                  {/* Post number */}
                  <span className="text-xs text-muted-foreground font-mono">
                    {String(index + 1).padStart(2, '0')}
                  </span>

                  {/* Content */}
                  <div className="space-y-1 flex-1">
                    <h3 className="text-foreground group-hover:text-primary transition-colors font-medium">
                      {post.title}
                    </h3>
                    <p className="text-sm text-muted-foreground hidden md:block">
                      {post.excerpt}
                    </p>
                  </div>
                </div>

                {/* Date and arrow */}
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
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                    />
                  </svg>
                </div>
              </a>
            ))}
          </div>

          {/* Coming soon message */}
          <div className="mt-12 p-8 border border-dashed border-border text-center">
            <p className="text-muted-foreground text-sm">
              <span className="text-primary">$</span> More posts coming soon...
              <span className="cursor-blink">_</span>
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
