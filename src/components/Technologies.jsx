import {
  SiReact,
  SiJavascript,
  SiTypescript,
  SiHtml5,
  SiTailwindcss,
  SiVite,
  SiNodedotjs,
  SiExpress,
  SiPhp,
  SiMysql,
  SiFirebase,
  SiGit,
  SiGithub,
  SiPostman,
  SiDocker,
  SiN8N,
} from 'react-icons/si'
import { TbApi, TbShieldLock, TbRobot, TbDatabase, TbBrandCss3 } from 'react-icons/tb'
import { FaJava } from 'react-icons/fa'
import AnimatedSection from './AnimatedSection'

const technologies = [
  // Frontend
  { icon: SiReact, name: 'React', category: 'Frontend' },
  { icon: SiJavascript, name: 'JavaScript', category: 'Frontend' },
  { icon: SiTypescript, name: 'TypeScript (Básico)', category: 'Frontend' },
  { icon: SiHtml5, name: 'HTML5', category: 'Frontend' },
  { icon: TbBrandCss3, name: 'CSS3', category: 'Frontend' },
  { icon: SiTailwindcss, name: 'Tailwind', category: 'Frontend' },
  { icon: SiVite, name: 'Vite', category: 'Frontend' },

  // Backend
  { icon: SiNodedotjs, name: 'Node.js', category: 'Backend' },
  { icon: SiExpress, name: 'Express', category: 'Backend' },
  { icon: FaJava, name: 'Java', category: 'Backend' },
  { icon: SiPhp, name: 'PHP', category: 'Backend' },
  { icon: TbApi, name: 'REST APIs', category: 'Backend' },
  { icon: TbShieldLock, name: 'JWT', category: 'Auth' },

  // Bases de datos
  { icon: TbDatabase, name: 'SQL', category: 'Base de datos' },
  { icon: SiMysql, name: 'MySQL', category: 'Base de datos' },
  { icon: SiFirebase, name: 'Firebase', category: 'Base de datos' },

  // Herramientas
  { icon: SiGit, name: 'Git', category: 'Herramienta' },
  { icon: SiGithub, name: 'GitHub', category: 'Herramienta' },
  { icon: SiPostman, name: 'Postman', category: 'Herramienta' },
  { icon: SiDocker, name: 'Docker (Básico)', category: 'Herramienta' },
  { icon: SiN8N, name: 'n8n', category: 'Automatización' },
  { icon: TbRobot, name: 'IA Automation', category: 'Automatización' },
]

const Technologies = () => {
  return (
    <section
      id="technologies"
      className="py-20"
    >
      {/* Header */}
      <AnimatedSection className="mb-16 flex flex-col items-center gap-3 text-center">
        <span className="text-xs font-medium uppercase tracking-widest text-purple-accent">
          Capacidades
        </span>
        <h2 className="text-4xl font-black text-text-primary md:text-5xl">
          Stack y herramientas
        </h2>
        <div className="h-px w-16 bg-purple-accent" />
      </AnimatedSection>

      {/* Grid */}
      <AnimatedSection delay={0.15} className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
        {technologies.map(({ icon: Icon, name, category }) => (
          <div
            key={name}
            className="group flex flex-col items-center gap-3 rounded-2xl border border-border bg-bg-card p-5 transition-all duration-300 hover:border-border-purple hover:bg-bg-card-hover"
          >
            {/* Icon container */}
            <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-border bg-bg-secondary transition-all duration-300 group-hover:border-border-purple group-hover:bg-purple-accent/10">
              <Icon className="text-2xl text-purple-accent" />
            </div>

            {/* Text */}
            <div className="flex flex-col items-center gap-1">
              <span className="text-sm font-semibold text-text-primary">
                {name}
              </span>
              <span className="text-[10px] uppercase tracking-widest text-text-muted">
                {category}
              </span>
            </div>
          </div>
        ))}
      </AnimatedSection>
    </section>
  )
}

export default Technologies