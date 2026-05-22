import {
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiMysql,
  SiFirebase,
  SiJavascript,
} from "react-icons/si";
import {
  TbApi,
  TbShieldLock,
  TbExternalLink,
  TbBrandGithub,
  TbSparkles,
} from "react-icons/tb";

const projects = [
  {
    id: 1,
    status: "Completado",
    statusType: "completed",
    title: "Plataforma Educativa Web",
    description:
      "Sistema administrativo multirol para gestión de alumnos, trabajadores y cursos. Incluye dashboard, autenticación segura y funcionalidades CRUD.",
    techs: [
      { icon: SiReact, name: "React" },
      { icon: SiNodedotjs, name: "Node.js" },
      { icon: SiFirebase, name: "Firebase" },
      { icon: SiMysql, name: "MySQL" },
      { icon: SiJavascript, name: "JavaScript" },
    ],
    demoUrl: null,
    githubUrl: null,
  },
  {
    id: 2,
    status: "En desarrollo",
    statusType: "in-development",
    title: "SaaS de Reservaciones",
    description:
      "Plataforma SaaS para gestión de citas en barberías, spas y consultorios. Incluye autenticación JWT, gestión de clientes, empleados, servicios y automatizaciones con IA.",
    techs: [
      { icon: SiNodedotjs, name: "Node.js" },
      { icon: SiExpress, name: "Express" },
      { icon: TbApi, name: "REST APIs" },
      { icon: TbShieldLock, name: "JWT" },
      { icon: SiMysql, name: "MySQL" },
    ],
    demoUrl: null,
    githubUrl: null,
  },
];

const placeholders = [
  {
    id: 3,
    label: "Próximamente",
    title: "Inventory Dashboard",
    description:
      "Dashboard de inventario con reportes en tiempo real y control de stock.",
  },
  {
    id: 4,
    label: "Próximamente",
    title: "AI Report Generator",
    description:
      "Generador de reportes automatizados usando IA y procesamiento de datos.",
  },
  {
    id: 5,
    label: "Próximamente",
    title: "Task Management App",
    description:
      "Aplicación de gestión de tareas con flujos colaborativos y notificaciones.",
  },
  {
    id: 6,
    label: "Próximamente",
    title: "TypeScript Full Stack Project",
    description:
      "Proyecto full stack completo utilizando TypeScript en frontend y backend.",
  },
];

const statusStyles = {
  completed:
    "bg-purple-accent/20 text-purple-light border border-purple-accent/30",
  "in-development": "bg-blue-500/20 text-blue-300 border border-blue-500/30",
};

const Projects = () => {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-28">
      {/* Header */}
      <div className="mb-16 flex flex-col gap-3">
        <span className="text-xs font-medium uppercase tracking-widest text-purple-accent">
          Portafolio
        </span>
        <h2 className="text-4xl font-black text-text-primary md:text-5xl">
          Proyectos destacados
        </h2>
        <p className="max-w-xl text-base leading-relaxed text-text-secondary">
          Una selección de proyectos reales donde aplico soluciones full stack, 
          diseño responsive y tecnologías modernas.
        </p>
      </div>

      {/* Proyectos reales */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {projects.map((project) => (
          <div
            key={project.id}
            className="group flex flex-col rounded-2xl border border-border bg-bg-card transition-all duration-300 hover:border-border-purple hover:bg-bg-card-hover overflow-hidden"
          >
            {/* Image placeholder */}
            <div className="relative h-52 w-full bg-bg-secondary">
              <div className="flex h-full w-full items-center justify-center">
                <span className="text-sm text-text-muted">
                  Screenshot próximamente
                </span>
              </div>

              {/* Status badge */}
              <div className="absolute right-4 top-4">
                <span
                  className={`rounded-full px-3 py-1 text-[10px] font-semibold uppercase tracking-widest ${statusStyles[project.statusType]}`}
                >
                  {project.status}
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="flex flex-1 flex-col gap-4 p-6">
              <h3 className="text-lg font-bold text-text-primary">
                {project.title}
              </h3>
              <p className="text-sm leading-relaxed text-text-secondary">
                {project.description}
              </p>

              {/* Tech tags */}
              <div className="flex flex-wrap gap-2">
                {project.techs.map(({ icon: Icon, name }) => (
                  <div
                    key={name}
                    className="flex items-center gap-1.5 rounded-full border border-border bg-bg-secondary px-3 py-1"
                  >
                    <Icon className="text-xs text-purple-accent" />
                    <span className="text-[11px] font-medium text-text-secondary">
                      {name}
                    </span>
                  </div>
                ))}
              </div>

              {/* Buttons */}
              <div className="mt-auto flex gap-3 pt-2">
                {project.demoUrl ? (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-1 items-center justify-center gap-2 rounded-full bg-text-primary px-4 py-2.5 text-sm font-semibold text-bg-primary transition-all duration-200 hover:bg-purple-light"
                  >
                    <TbExternalLink className="text-base" />
                    Ver demo
                  </a>
                ) : (
                  <div className="flex flex-1 items-center justify-center gap-2 rounded-full bg-text-primary/40 px-4 py-2.5 text-sm font-semibold text-bg-primary opacity-50">
                    <TbExternalLink className="text-base" />
                    Demo próximamente
                  </div>
                )}

                <button
                  disabled={!project.githubUrl}
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border bg-bg-secondary transition-all duration-200 hover:border-border-purple hover:bg-purple-accent/10 disabled:cursor-not-allowed disabled:opacity-40"
                >
                  <TbBrandGithub className="text-base text-text-secondary" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Placeholders futuros */}
      <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
        {placeholders.map((item) => (
          <div
            key={item.id}
            className="flex flex-col items-center gap-4 rounded-2xl border border-border bg-bg-card p-10 text-center transition-all duration-300 hover:border-border-purple"
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-border-purple bg-purple-accent/10">
              <TbSparkles className="text-2xl text-purple-accent" />
            </div>

            <div className="flex flex-col gap-1">
              <span className="rounded-full border border-border px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-text-muted">
                {item.label}
              </span>
            </div>

            <div className="flex flex-col gap-2">
              <h3 className="text-base font-bold text-text-primary">
                {item.title}
              </h3>
              <p className="text-sm leading-relaxed text-text-secondary">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
