import { TbBriefcase, TbBook, TbDatabase } from 'react-icons/tb'

const experiences = [
  {
    id: 1,
    icon: TbBriefcase,
    title: 'Freelance Full Stack Developer',
    period: 'Presente',
    periodType: 'present',
    description:
      'Desarrollo de plataformas web y sistemas administrativos usando React, Node.js y Express. Implementación de APIs REST, autenticación JWT y automatizaciones con n8n e IA.',
    side: 'right',
  },
  {
    id: 2,
    icon: TbBook,
    title: 'Express Learning Online — Full Stack Developer',
    period: '2024 – 2025',
    periodType: 'past',
    description:
      'Desarrollo de plataforma educativa web con React, Node.js y MySQL. Sistema de autenticación, gestión de usuarios multirol y funcionalidades CRUD para alumnos, trabajadores y cursos.',
    side: 'left',
  },
  {
    id: 3,
    icon: TbDatabase,
    title: 'UniverMilenium — Capturista de Datos',
    period: '2025',
    periodType: 'past',
    description:
      'Registro, validación y actualización de información académica en bases de datos y plataformas institucionales. Organización documental y apoyo en procesos administrativos.',
    side: 'right',
  },
]

const periodStyles = {
  present:
    'bg-purple-accent/20 text-purple-light border border-purple-accent/30',
  past: 'bg-bg-secondary text-text-muted border border-border',
}

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-28"
    >
      {/* Header */}
      <div className="mb-16 flex flex-col items-center gap-3 text-center">
        <h2 className="text-4xl font-black text-text-primary md:text-5xl">
          Experiencia
        </h2>
        <p className="max-w-md text-base leading-relaxed text-text-secondary">
          El camino de mejora continua y entrega de soluciones reales.
        </p>
      </div>

      {/* Timeline */}
      <div className="relative flex flex-col items-center">

        {/* Línea vertical central */}
        <div className="absolute top-0 bottom-0 left-1/2 w-px -translate-x-1/2 bg-border" />

        <div className="flex w-full flex-col gap-12">
          {experiences.map((exp) => (
            <div
              key={exp.id}
              className={`relative flex w-full items-center gap-6 ${
                exp.side === 'left'
                  ? 'flex-row-reverse'
                  : 'flex-row'
              }`}
            >
              {/* Card */}
              <div className="w-5/12">
                <div className="flex flex-col gap-3 rounded-2xl border border-border bg-bg-card p-6 transition-all duration-300 hover:border-border-purple hover:bg-bg-card-hover">
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="text-sm font-bold text-text-primary">
                      {exp.title}
                    </h3>
                    <span
                      className={`shrink-0 rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase tracking-widest ${periodStyles[exp.periodType]}`}
                    >
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-sm leading-relaxed text-text-secondary">
                    {exp.description}
                  </p>
                </div>
              </div>

              {/* Icono central */}
              <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border-purple bg-bg-card">
                <exp.icon className="text-base text-purple-accent" />
              </div>

              {/* Espacio lado opuesto */}
              <div className="w-5/12" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience