import { Link } from '@tanstack/react-router'

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/80 backdrop-blur-sm">
      <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo / Brand */}
        <Link
          to="/"
          className="text-foreground hover:text-primary transition-colors duration-200 flex items-center gap-2"
        >
          <span className="text-primary">~</span>
          <span className="text-sm font-medium tracking-tight">sebastian.dev</span>
        </Link>

        {/* Navigation Links */}
        <ul className="flex items-center gap-8">
          <li>
            <a
              href="#projects"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 link-underline"
            >
              projects
            </a>
          </li>
          <li>
            <a
              href="#blog"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 link-underline"
            >
              blog
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 link-underline"
            >
              contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}
