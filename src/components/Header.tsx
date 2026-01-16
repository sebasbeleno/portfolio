import { useState, useEffect, useRef } from 'react'
import { Link, useRouterState } from '@tanstack/react-router'

export default function Header() {
  const router = useRouterState()
  const isIndexRoute = router.location.pathname === '/'
  const [copied, setCopied] = useState(false)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [])

  const handleEmailClick = async () => {
    try {
      await navigator.clipboard.writeText('sebasbeleno15@gmail.com')

      // Blur out
      setIsTransitioning(true)

      // Change text after blur
      setTimeout(() => {
        setCopied(true)
        setIsTransitioning(false)
      }, 150)

      // Reset after 2 seconds with blur transition
      timeoutRef.current = setTimeout(() => {
        setIsTransitioning(true)
        setTimeout(() => {
          setCopied(false)
          setIsTransitioning(false)
        }, 150)
      }, 2000)
    } catch (error) {
      console.error('Failed to copy email:', error)
    }
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/80 backdrop-blur-sm">
      <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo / Brand */}
        <div className="flex items-center gap-2">
          {isIndexRoute ? (
            <button
              onClick={handleEmailClick}
              className="text-foreground hover:text-primary transition-colors duration-200 flex items-center gap-2 cursor-pointer"
            >
              <span className="text-primary">~</span>
              <span className={`text-sm font-medium tracking-tight transition-all duration-150 ${isTransitioning ? 'blur-xs opacity-0' : 'blur-0 opacity-100'
                }`}>
                {copied ? 'Copied!' : 'sebasbeleno15@gmail.com'}
              </span>
            </button>
          ) : (
            <Link
              to="/"
              className="text-foreground hover:text-primary transition-colors duration-200 flex items-center gap-2"
            >
              <span className="text-primary">~</span>
              <span className="text-sm font-medium tracking-tight">
                home
              </span>
            </Link>
          )}
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
