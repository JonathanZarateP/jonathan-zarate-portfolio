import { useState } from 'react'
import { TbMail, TbMapPin, TbBrandGithub, TbBrandLinkedin } from 'react-icons/tb'
import { BsWhatsapp } from 'react-icons/bs'

const contactInfo = [
  {
    icon: TbMail,
    label: 'Email',
    value: 'jonathanzaratepablo@gmail.com',
    href: 'mailto:jonathanzaratepablo@gmail.com',
  },
  {
    icon: TbMapPin,
    label: 'Ubicación',
    value: 'Nezahualcóyotl, México',
    href: null,
  },
]

const socialLinks = [
  {
    icon: TbBrandGithub,
    label: 'GitHub',
    href: 'https://github.com/JonathanZarateP',
  },
  {
    icon: TbBrandLinkedin,
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/jonathan-zarate-pablo',
  },
  {
    icon: BsWhatsapp,
    label: 'WhatsApp',
    href: 'https://wa.me/525627909037',
  },
]

const areaOptions = [
  'Consulta técnica',
  'Proyecto freelance',
  'Oportunidad laboral',
  'Colaboración',
  'Otro',
]

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    area: '',
    message: '',
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Aquí se conectará Formspree o EmailJS más adelante
    console.log('Formulario enviado:', formData)
  }

  return (
    <section
      id="contact"
      className="mx-auto max-w-6xl px-6 py-28"
    >
      <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-8">

        {/* Lado izquierdo — Info */}
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-3">
            <span className="text-xs font-medium uppercase tracking-widest text-purple-accent">
              Colaborar
            </span>
            <h2 className="text-4xl font-black leading-tight text-text-primary md:text-5xl">
              ¿Listo para construir algo{' '}
              <span className="italic text-purple-accent">
                increíble?
              </span>
            </h2>
            <p className="text-base leading-relaxed text-text-secondary">
              Disponible para consultas técnicas, proyectos freelance
              y oportunidades como desarrollador Full Stack Junior.
            </p>
          </div>

          {/* Info de contacto */}
          <div className="flex flex-col gap-3">
            {contactInfo.map(({ icon: Icon, label, value, href }) => (
              <div
                key={label}
                className="flex items-center gap-4 rounded-2xl border border-border bg-bg-card p-4"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-border-purple bg-purple-accent/10">
                  <Icon className="text-lg text-purple-accent" />
                </div>
                <div className="flex flex-col gap-0.5">
                  <span className="text-[10px] uppercase tracking-widest text-text-muted">
                    {label}
                  </span>
                  
                  {href ? (
                    <a 
                      href={href}
                      className="text-sm font-medium text-text-primary transition-colors duration-200 hover:text-purple-accent"
                    >
                      {value}
                    </a>
                  ) : (
                    <span className="text-sm font-medium text-text-primary">
                      {value}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Redes sociales */}
          <div className="flex gap-3">
            {socialLinks.map(({ icon: Icon, label, href }) => (
              <a 
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-bg-card transition-all duration-200 hover:border-border-purple hover:bg-purple-accent/10"
              >
                <Icon className="text-base text-text-secondary" />
              </a>
            ))}
          </div>
        </div>

        {/* Lado derecho — Formulario */}
        <div className="rounded-2xl border border-border bg-bg-card p-6 md:p-8">
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">

            {/* Nombre y Email */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="flex flex-col gap-2">
                <label className="text-[10px] uppercase tracking-widest text-text-muted">
                  Nombre
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Juan Pérez"
                  required
                  className="rounded-xl border border-border bg-bg-secondary px-4 py-3 text-sm text-text-primary placeholder-text-muted outline-none transition-all duration-200 focus:border-border-purple focus:bg-bg-card-hover"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[10px] uppercase tracking-widest text-text-muted">
                  Correo electrónico
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="juan@empresa.com"
                  required
                  className="rounded-xl border border-border bg-bg-secondary px-4 py-3 text-sm text-text-primary placeholder-text-muted outline-none transition-all duration-200 focus:border-border-purple focus:bg-bg-card-hover"
                />
              </div>
            </div>

            {/* Área de interés */}
            <div className="flex flex-col gap-2">
              <label className="text-[10px] uppercase tracking-widest text-text-muted">
                Área de interés
              </label>
              <select
                name="area"
                value={formData.area}
                onChange={handleChange}
                required
                className="rounded-xl border border-border bg-bg-secondary px-4 py-3 text-sm text-text-primary outline-none transition-all duration-200 focus:border-border-purple focus:bg-bg-card-hover"
              >
                <option value="" disabled>
                  Selecciona una opción
                </option>
                {areaOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>

            {/* Mensaje */}
            <div className="flex flex-col gap-2">
              <label className="text-[10px] uppercase tracking-widest text-text-muted">
                Mensaje
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Cuéntame sobre tu proyecto o propuesta..."
                required
                rows={5}
                className="resize-none rounded-xl border border-border bg-bg-secondary px-4 py-3 text-sm text-text-primary placeholder-text-muted outline-none transition-all duration-200 focus:border-border-purple focus:bg-bg-card-hover"
              />
            </div>

            {/* Botón enviar */}
            <button
              type="submit"
              className="w-full rounded-full bg-text-primary py-3 text-sm font-semibold text-bg-primary transition-all duration-200 hover:bg-purple-light"
            >
              Enviar mensaje
            </button>

          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact