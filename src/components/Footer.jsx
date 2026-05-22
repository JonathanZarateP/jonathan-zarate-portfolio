import { TbCode } from 'react-icons/tb'
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'
import { BsWhatsapp } from 'react-icons/bs'

const socialLinks = [
  {
    icon: FiGithub,
    label: 'GitHub',
    href: 'https://github.com/JonathanZarateP',
  },
  {
    icon: FiLinkedin,
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/jonathan-zarate-pablo',
  },
  {
    icon: BsWhatsapp,
    label: 'WhatsApp',
    href: 'https://wa.me/525627909037',
  },
  {
    icon: FiMail,
    label: 'Email',
    href: 'mailto:jonathanzaratepablo@gmail.com',
  },
]

const technologies = ['React', 'Vite', 'Tailwind CSS']

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-bg-primary">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="flex flex-col gap-10">
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-center">
            <div className="flex flex-col gap-3">
              <a href="#" className="flex w-fit items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-border-purple bg-purple-accent/20">
                  <TbCode className="text-base text-purple-accent" />
                </div>

                <span className="text-lg font-black tracking-tight text-text-primary">
                  JZP
                </span>
              </a>

              <p className="max-w-md text-sm leading-relaxed text-text-secondary">
                Portfolio personal de Jonathan Zarate Pablo, desarrollador Full Stack Junior.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              {socialLinks.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('mailto:') ? undefined : '_blank'}
                  rel={href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
                  className="flex items-center gap-2 rounded-full border border-border bg-bg-card px-4 py-2 text-sm font-medium text-text-secondary transition-all duration-200 hover:border-border-purple hover:bg-purple-accent/10 hover:text-text-primary"
                >
                  <Icon className="text-base text-purple-accent" />
                  {label}
                </a>
              ))}
            </div>
          </div>

          <div className="h-px w-full bg-border" />

          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
            <p className="text-xs text-text-muted">
              © {currentYear} Jonathan Zarate Pablo. Todos los derechos reservados.
            </p>

            <div className="flex flex-wrap items-center gap-2 text-xs text-text-muted">
              <span>Desarrollado con:</span>
              {technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-border bg-bg-card px-3 py-1 text-purple-accent"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer