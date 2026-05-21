import { TbCompass, TbCode, TbBrain } from 'react-icons/tb'

const cards = [
  {
    icon: TbCompass,
    title: 'Enfoque Full Stack',
    description:
      'Desarrollo tanto el frontend como el backend de aplicaciones web. Me enfoco en construir soluciones completas, desde la interfaz hasta la base de datos.',
  },
  {
    icon: TbCode,
    title: 'Código limpio y escalable',
    description:
      'Desarrollo aplicaciones web organizadas utilizando React, Node.js, Express y APIs REST, manteniendo una estructura limpia, responsive y fácil de mantener.',
  },
  {
    icon: TbBrain,
    title: 'Mentalidad de soluciones',
    description:
      'Cada proyecto lo abordo como un problema a resolver. Combino precisión técnica con criterio para tomar decisiones que aporten valor real.',
  },
]

const About = () => {
  return (
    <section
      id="about"
      className="mx-auto max-w-6xl px-6 py-28"
    >
      {/* Header */}
      <div className="mb-16 flex flex-col gap-3">
        <span className="text-xs font-medium uppercase tracking-widest text-purple-accent">
          Sobre mí
        </span>
        <h2 className="text-4xl font-black text-text-primary md:text-5xl">
          Quién soy
        </h2>
        <p className="max-w-xl text-base leading-relaxed text-text-secondary">
          Soy Jonathan Zarate, desarrollador Full Stack Junior con TSU en
          Desarrollo de Software Multiplataforma. Me especializo en construir
          aplicaciones web modernas usando JavaScript, React, Node.js y Express.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {cards.map(({ icon: Icon, title, description }) => (
          <div
            key={title}
            className="group flex flex-col gap-4 rounded-2xl border border-border bg-bg-card p-6 transition-all duration-300 hover:border-border-purple hover:bg-bg-card-hover"
          >
            {/* Icon */}
            <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-border-purple bg-purple-accent/10 transition-all duration-300 group-hover:bg-purple-accent/20">
              <Icon className="text-xl text-purple-accent" />
            </div>

            {/* Text */}
            <div className="flex flex-col gap-2">
              <h3 className="text-sm font-bold uppercase tracking-wide text-text-primary">
                {title}
              </h3>
              <p className="text-sm leading-relaxed text-text-secondary">
                {description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom card — Architect Perspective */}
      <div className="mt-4 flex flex-col gap-4 rounded-2xl border border-border bg-bg-card p-8 md:flex-row md:items-start md:gap-8">
        <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-border-purple bg-purple-accent/10">
          <TbCompass className="text-3xl text-purple-accent" />
        </div>
        <div className="flex flex-col gap-3">
          <h3 className="text-lg font-bold text-text-primary">
            La perspectiva del desarrollador
          </h3>
          <p className="text-sm leading-relaxed text-text-secondary">
            Abordo el desarrollo web con un enfoque en buenas prácticas, asegurando
            que cada línea de código contribuya a una estructura estable, escalable
            y enfocada en una buena experiencia de usuario. Trabajo con el stack
            JavaScript completo, construyendo experiencias fluidas desde APIs backend
            funcionales hasta frontends React responsivos.
        </p>
          <p className="text-sm leading-relaxed text-text-secondary">
            Me enfoco en escribir código claro y funcional. Ya sea optimizando queries SQL, diseñando una
            API REST o construyendo una UI con Tailwind, priorizo el rendimiento
            y la intención del usuario por encima de todo.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About