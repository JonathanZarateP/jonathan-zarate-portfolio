import { useEffect, useState } from 'react'
import { FiGithub } from 'react-icons/fi'
import { TbCode } from 'react-icons/tb'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-5">
      <nav
        className={`
          flex w-full max-w-2xl items-center justify-between
          rounded-full border px-6 py-3
          transition-all duration-500
          ${
            scrolled
              ? 'bg-bg-secondary/80 border-border backdrop-blur-xl'
              : 'bg-bg-secondary/60 border-border backdrop-blur-md'
          }
        `}
      >
        <a href="#" className="flex items-center gap-2" aria-label="Go to top">
          <div className="flex h-7 w-7 items-center justify-center rounded-lg border border-border-purple bg-purple-accent/20">
            <TbCode className="text-sm text-purple-accent" />
          </div>

          <span className="text-sm font-semibold tracking-wide text-text-primary">
            JZP.dev
          </span>
        </a>

        <div className="flex items-center gap-7">
          <a
            href="#projects"
            className="text-xs font-medium uppercase tracking-widest text-text-secondary transition-colors duration-200 hover:text-text-primary"
          >
            Proyectos
          </a>

          <a
            href="#technologies"
            className="text-xs font-medium uppercase tracking-widest text-text-secondary transition-colors duration-200 hover:text-text-primary"
          >
            Tecnologías
          </a>

          <a
            href="#contact"
            className="text-xs font-medium uppercase tracking-widest text-text-secondary transition-colors duration-200 hover:text-text-primary"
          >
            Contacto
          </a>
        </div>

        <a
          href="https://github.com/JonathanZarateP"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub profile"
          className="flex h-8 w-8 items-center justify-center rounded-full border border-border bg-bg-card transition-all duration-200 hover:border-border-purple hover:bg-purple-accent/10"
        >
          <FiGithub className="text-sm text-text-secondary transition-colors duration-200 hover:text-text-primary" />
        </a>
      </nav>
    </header>
  )
}

export default Navbar