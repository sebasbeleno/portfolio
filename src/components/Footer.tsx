export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer id="contact" className="border-t border-border bg-background">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Copyright */}
          <p className="text-sm text-muted-foreground">
            <span className="text-primary">$</span> {currentYear} Sebastian Beleño
          </p>

          {/* Links */}
          <div className="flex items-center gap-6">
            <a
              href="https://github.com/sebasbeleno"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              github
            </a>
            <a
              href="https://linkedin.com/in/sebasbeleno"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              linkedin
            </a>
            <a
              href="mailto:sebasbeleno15@gmail.com"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              email
            </a>
          </div>

          {/* Status indicator */}
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span>Available for work</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
