import { FiGithub, FiLinkedin, FiFileText } from 'react-icons/fi'
import { BsWhatsapp } from 'react-icons/bs'
import { TbStack2 } from 'react-icons/tb'
import { HiOutlineLightningBolt } from 'react-icons/hi'

const Hero = () => {
  return (
    <section className="w-full pt-32 pb-16">
      <div className="flex w-full flex-col items-center gap-16 md:flex-row md:items-center md:justify-between">

        <div className="flex w-full flex-col gap-7 md:max-w-lg">

          {/* Badge */}
          <div className="flex w-fit items-center gap-2 rounded-full border border-border bg-bg-card px-4 py-2">
            <span className="h-2 w-2 animate-pulse rounded-full bg-purple-accent" />
            <span className="text-xs font-medium uppercase tracking-widest text-text-secondary">
              Disponible para oportunidades junior
            </span>
          </div>

          {/* Nombre */}
          <div className="flex flex-col gap-0">
            <h1 className="text-6xl font-black leading-none tracking-tight text-text-primary lg:text-7xl">
              Jonathan
            </h1>
            <h1 className="text-6xl font-black italic leading-none tracking-tight text-purple-accent lg:text-7xl">
              Zarate Pablo
            </h1>
          </div>

          {/* Descripción */}
          <p className="text-base leading-relaxed text-text-secondary">
            Desarrollo soluciones web modernas con enfoque en{' '}
            <span className="font-semibold text-text-primary">
              rendimiento, diseño limpio y buena experiencia de usuario.
            </span>{' '}
            Construyo aplicaciones full stack escalables usando tecnologías actuales.
          </p>
          <div className="flex flex-wrap items-center gap-3">
             <a
              href="#projects"
              className="flex items-center gap-2 rounded-full bg-text-primary px-6 py-3 text-sm font-semibold text-bg-primary transition-all duration-200 hover:bg-purple-light"
            >
              Ver proyectos →
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

        {/* Derecha — Foto */}
        <div className="hidden md:flex md:shrink-0">
          <div className="relative">
            <div className="absolute inset-0 scale-110 rounded-2xl bg-purple-accent/10 blur-3xl" />

            <div className="group relative h-80 w-64 overflow-hidden rounded-2xl border border-border lg:h-96 lg:w-72">
              <img
  src="/src/assets/profile.jpg"
  alt="Jonathan Zarate Pablo"
  className="h-full w-full object-cover object-top grayscale transition-all duration-700 group-hover:grayscale-0"
/>
<div className="absolute inset-0 bg-gradient-to-t from-bg-primary/60 via-transparent to-transparent transition-all duration-700 group-hover:from-transparent" />
            </div>

            {/* Badge Perfil */}
            <div className="absolute -left-10 top-8 flex items-center gap-2 rounded-xl border border-border bg-bg-card/90 px-3 py-2 backdrop-blur-sm">
              <div className="flex h-7 w-7 items-center justify-center rounded-lg border border-border-purple bg-purple-accent/20">
                <TbStack2 className="text-sm text-purple-accent" />
              </div>
              <div className="flex flex-col">
                <span className="text-[9px] uppercase tracking-widest text-text-muted">Perfil</span>
                <span className="font-mono text-xs font-semibold text-text-primary">Full Stack Jr</span>
              </div>
            </div>

            {/* Badge Enfoque */}
            <div className="absolute -right-2 bottom-10 flex items-center gap-2 rounded-xl border border-border bg-bg-card/90 px-3 py-2 backdrop-blur-sm">
              <div className="flex h-7 w-7 items-center justify-center rounded-lg border border-border-purple bg-purple-accent/20">
                <HiOutlineLightningBolt className="text-sm text-purple-accent" />
              </div>
              <div className="flex flex-col">
                <span className="text-[9px] uppercase tracking-widest text-text-muted">Enfoque</span>
                <span className="font-mono text-xs font-semibold text-text-primary">Web Apps</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Hero