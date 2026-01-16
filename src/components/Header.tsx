import { useState } from 'react'

export default function Header() {
  const [copied, setCopied] = useState(false)

  const handleEmailClick = () => {
    navigator.clipboard.writeText('sebasbeleno15@gmail.com')
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/80 backdrop-blur-sm">
      <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo / Brand */}
        <div className="relative flex items-center gap-2">
          <button
            onClick={handleEmailClick}
            className="text-foreground hover:text-primary transition-colors duration-200 flex items-center gap-2 cursor-pointer"
          >
            <span className="text-primary">~</span>
            <span className="text-sm font-medium tracking-tight">sebasbeleno15@gmail.com</span>
          </button>
          <span
            className={`absolute -right-20 text-xs text-primary font-medium transition-all duration-300 ${
              copied
                ? 'opacity-100 blur-0 translate-x-0'
                : 'opacity-0 blur-xs -translate-x-2 pointer-events-none'
            }`}
          >
            Copied!
          </span>
        </div>

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
        </ul>
      </nav>
    </header>
  )
}
