import { useEffect, useState } from 'react'
import { FiGithub } from 'react-icons/fi'
import { TbCode } from 'react-icons/tb'

const navLinks = [
  { label: 'Proyectos', href: '#projects' },
  { label: 'Tecnologías', href: '#technologies' },
  { label: 'Contacto', href: '#contact' },
]

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
    <header className="fixed left-0 right-0 top-0 z-50 flex justify-center px-6 pt-6">
      <nav
        className={`
          flex w-full max-w-5xl items-center justify-between
          rounded-2xl border px-6 py-3.5 shadow-glow-purple
          transition-all duration-300
          ${
            scrolled
              ? 'border-border bg-bg-secondary/90 backdrop-blur-xl'
              : 'border-border-purple bg-bg-secondary/70 backdrop-blur-lg'
          }
        `}
      >
        <a href="#" aria-label="Ir al inicio" className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-border-purple bg-purple-accent/20">
            <TbCode className="text-lg text-purple-accent" />
          </div>

          <span className="text-base font-bold tracking-tight text-text-primary">
            JZP.dev
          </span>
        </a>

        <div className="hidden items-center gap-9 md:flex">
          {navLinks.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="text-xs font-semibold uppercase tracking-[0.22em] text-text-secondary transition-colors duration-200 hover:text-text-primary"
            >
              {label}
            </a>
          ))}
        </div>

        <a
          href="https://github.com/JonathanZarateP"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-bg-card transition-all duration-200 hover:border-border-purple hover:bg-purple-accent/10"
        >
          <FiGithub className="text-sm text-text-secondary transition-colors duration-200 hover:text-text-primary" />
        </a>
      </nav>
    </header>
  )
}

export default Navbar