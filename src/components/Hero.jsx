import { FiGithub, FiLinkedin, FiFileText } from 'react-icons/fi'
import { BsWhatsapp } from 'react-icons/bs'
import { TbStack2 } from 'react-icons/tb'
import { HiOutlineLightningBolt } from 'react-icons/hi'

const Hero = () => {
  return (
    <section className="relative mx-auto flex min-h-screen max-w-6xl items-center px-6 pb-12 pt-24">
      <div className="z-10 flex flex-1 flex-col gap-6">
        <div className="flex w-fit items-center gap-2 rounded-full border border-border bg-bg-card px-4 py-2">
          <span className="h-2 w-2 animate-pulse rounded-full bg-purple-accent" />
          <span className="text-xs font-medium uppercase tracking-widest text-text-secondary">
            Disponible para oportunidades junior
          </span>
        </div>

        <div className="flex flex-col gap-1">
          <h1 className="text-6xl font-black leading-none tracking-tight text-text-primary md:text-7xl lg:text-8xl">
            Jonathan
          </h1>
          <h1 className="text-6xl font-black italic leading-none tracking-tight text-purple-accent md:text-7xl lg:text-8xl">
            Zarate Pablo
          </h1>
        </div>

        <p className="max-w-md text-base leading-relaxed text-text-secondary md:text-lg">
          Desarrollo soluciones web modernas con enfoque en{' '}
          <span className="font-semibold text-text-primary">
            rendimiento, diseño limpio y buena experiencia de usuario.
          </span>{' '}
          Construyo aplicaciones full stack escalables usando tecnologías actuales.
        </p>

        <div className="mt-2 flex flex-wrap items-center gap-4">
          <a
            href="#projects"
            className="flex items-center gap-2 rounded-full bg-text-primary px-6 py-3 text-sm font-semibold text-bg-primary transition-all duration-200 hover:bg-purple-light"
          >
            Ver proyectos
            <span>→</span>
          </a>

          <a
            href="https://github.com/JonathanZarateP"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-bg-card transition-all duration-200 hover:border-border-purple hover:bg-purple-accent/10"
          >
            <FiGithub className="text-base text-text-secondary" />
          </a>

          <a
            href="https://linkedin.com/in/jonathan-zarate-pablo"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-bg-card transition-all duration-200 hover:border-border-purple hover:bg-purple-accent/10"
          >
            <FiLinkedin className="text-base text-text-secondary" />
          </a>

          <a
            href="https://wa.me/525627909037"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-bg-card transition-all duration-200 hover:border-border-purple hover:bg-purple-accent/10"
          >
            <BsWhatsapp className="text-base text-text-secondary" />
          </a>

          <a
            href="/cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="CV"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-bg-card transition-all duration-200 hover:border-border-purple hover:bg-purple-accent/10"
          >
            <FiFileText className="text-base text-text-secondary" />
          </a>
        </div>
      </div>

      <div className="z-10 hidden flex-1 items-center justify-end md:flex">
        <div className="relative">
          <div className="absolute inset-0 scale-110 rounded-2xl bg-purple-accent/10 blur-3xl" />

          <div className="group relative h-80 w-72 overflow-hidden rounded-2xl border border-border lg:h-96 lg:w-80">
            <div className="flex h-full w-full items-center justify-center bg-bg-card">
              <span className="text-sm text-text-muted">Tu foto aquí</span>
            </div>

            <div className="absolute inset-0 bg-bg-primary/20 transition-all duration-500 group-hover:bg-transparent" />
          </div>

          <div className="absolute -left-12 top-8 flex items-center gap-2 rounded-xl border border-border bg-bg-card/90 px-3 py-2 backdrop-blur-sm">
            <div className="flex h-7 w-7 items-center justify-center rounded-lg border border-border-purple bg-purple-accent/20">
              <TbStack2 className="text-sm text-purple-accent" />
            </div>

            <div className="flex flex-col">
              <span className="text-[9px] uppercase tracking-widest text-text-muted">
                Perfil
              </span>
              <span className="font-mono text-xs font-semibold text-text-primary">
                Full Stack Jr
              </span>
            </div>
          </div>

          <div className="absolute -right-4 bottom-10 flex items-center gap-2 rounded-xl border border-border bg-bg-card/90 px-3 py-2 backdrop-blur-sm">
            <div className="flex h-7 w-7 items-center justify-center rounded-lg border border-border-purple bg-purple-accent/20">
              <HiOutlineLightningBolt className="text-sm text-purple-accent" />
            </div>

            <div className="flex flex-col">
              <span className="text-[9px] uppercase tracking-widest text-text-muted">
                Enfoque
              </span>
              <span className="font-mono text-xs font-semibold text-text-primary">
                Web Apps
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero