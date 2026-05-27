import { useState, useEffect, useRef } from 'react'
import { TbChevronLeft, TbChevronRight } from 'react-icons/tb'

const ProjectCarousel = ({ images = [] }) => {
  const [current, setCurrent] = useState(0)
  const [paused, setPaused] = useState(false)
  const intervalRef = useRef(null)

  const total = images.length

  const next = () => setCurrent((prev) => (prev + 1) % total)
  const prev = () => setCurrent((prev) => (prev - 1 + total) % total)

  useEffect(() => {
    if (total <= 1 || paused) return
    intervalRef.current = setInterval(next, 4500)
    return () => clearInterval(intervalRef.current)
  }, [paused, total, current])

  if (total === 0) {
    return (
      <div className="relative h-52 w-full bg-bg-secondary">
        <div className="flex h-full w-full items-center justify-center">
          <span className="text-sm text-text-muted">
            Screenshot próximamente
          </span>
        </div>
      </div>
    )
  }

  return (
    <div
      className="group/carousel relative h-52 w-full overflow-hidden bg-bg-secondary"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Imágenes */}
      {images.map((src, index) => (
        <img
          key={index}
          src={src}
          alt={`Screenshot ${index + 1}`}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ${
            index === current ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ))}

      {/* Flecha izquierda */}
      {current > 0 && (
        <button
          onClick={(e) => { e.stopPropagation(); prev() }}
          className="absolute left-3 top-1/2 z-10 flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-bg-card/80 text-text-secondary opacity-0 backdrop-blur-sm transition-all duration-200 group-hover/carousel:opacity-100 hover:border-border-purple hover:text-purple-accent"
        >
          <TbChevronLeft className="text-sm" />
        </button>
      )}

      {/* Flecha derecha */}
      {current < total - 1 && (
        <button
          onClick={(e) => { e.stopPropagation(); next() }}
          className="absolute right-3 top-1/2 z-10 flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-bg-card/80 text-text-secondary opacity-0 backdrop-blur-sm transition-all duration-200 group-hover/carousel:opacity-100 hover:border-border-purple hover:text-purple-accent"
        >
          <TbChevronRight className="text-sm" />
        </button>
      )}

      {/* Dots */}
      {total > 1 && (
        <div className="absolute bottom-3 left-1/2 z-10 flex -translate-x-1/2 gap-1.5">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                index === current
                  ? 'w-4 bg-purple-accent'
                  : 'w-1.5 bg-text-muted/50'
              }`}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export default ProjectCarousel