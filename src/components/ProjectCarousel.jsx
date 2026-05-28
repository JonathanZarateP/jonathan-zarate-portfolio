import { useState, useEffect, useRef } from "react";
import { TbChevronLeft, TbChevronRight, TbX } from "react-icons/tb";

const ProjectCarousel = ({ images = [] }) => {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalIndex, setModalIndex] = useState(0);
  const intervalRef = useRef(null);

  const total = images.length;

  const next = () => setCurrent((prev) => (prev + 1) % total);
  const prev = () => setCurrent((prev) => (prev - 1 + total) % total);

  const modalNext = () => setModalIndex((prev) => (prev + 1) % total);
  const modalPrev = () => setModalIndex((prev) => (prev - 1 + total) % total);

  const openModal = (index) => {
    setModalIndex(index);
    setModalOpen(true);
  };

  const closeModal = () => setModalOpen(false);

  useEffect(() => {
    if (total <= 1 || paused) return;
    intervalRef.current = setInterval(next, 4500);
    return () => clearInterval(intervalRef.current);
  }, [paused, total, current]);

  useEffect(() => {
    if (!modalOpen) return;
    const handleKey = (e) => {
      if (e.key === "Escape") closeModal();
      if (e.key === "ArrowRight" && total > 1) modalNext();
      if (e.key === "ArrowLeft" && total > 1) modalPrev();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [modalOpen, modalIndex, total]);

  if (total === 0) {
    return (
      <div className="relative h-52 w-full bg-bg-secondary">
        <div className="flex h-full w-full items-center justify-center">
          <span className="text-sm text-text-muted">
            Screenshot próximamente
          </span>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Carrusel */}
      <div
        className="group/carousel relative h-52 w-full overflow-hidden bg-bg-secondary"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Screenshot ${index + 1}`}
            onClick={() => openModal(current)}
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ${
              index === current
                ? "opacity-100 cursor-zoom-in pointer-events-auto"
                : "opacity-0 pointer-events-none"
            }`}
          />
        ))}

        {/* Flecha izquierda */}
        {current > 0 && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            className="absolute left-3 top-1/2 z-10 flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-bg-card/80 text-text-secondary opacity-0 backdrop-blur-sm transition-all duration-200 group-hover/carousel:opacity-100 hover:border-border-purple hover:text-purple-accent"
          >
            <TbChevronLeft className="text-sm" />
          </button>
        )}

        {/* Flecha derecha */}
        {current < total - 1 && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            className="absolute right-3 top-1/2 z-10 flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-bg-card/80 text-text-secondary opacity-0 backdrop-blur-sm transition-all duration-200 group-hover/carousel:opacity-100 hover:border-border-purple hover:text-purple-accent"
          >
            <TbChevronRight className="text-sm" />
          </button>
        )}

        {total > 1 && (
          <div className="absolute bottom-3 left-1/2 z-10 flex -translate-x-1/2 gap-1.5">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  index === current
                    ? "w-4 bg-purple-accent"
                    : "w-1.5 bg-text-muted/50"
                }`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Modal / Lightbox */}
      {modalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
          onClick={closeModal}
        >
          <div
            className="relative mx-4 flex max-h-[90vh] max-w-5xl w-full items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={images[modalIndex]}
              alt={`Screenshot ${modalIndex + 1}`}
              className="max-h-[85vh] w-full rounded-2xl border border-border object-contain shadow-2xl"
            />

            {/* Botón cerrar */}
            <button
              onClick={closeModal}
              className="absolute -right-3 -top-3 flex h-8 w-8 items-center justify-center rounded-full border border-border bg-bg-card text-text-secondary transition-all duration-200 hover:border-border-purple hover:text-purple-accent"
            >
              <TbX className="text-sm" />
            </button>

            {/* Flecha izquierda modal */}
            {total > 1 && modalIndex > 0 && (
              <button
                onClick={modalPrev}
                className="absolute left-3 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/70 text-white shadow-lg backdrop-blur-md transition-all duration-200 hover:border-purple-accent hover:bg-purple-accent/20"
              >
                <TbChevronLeft className="text-base" />
              </button>
            )}

            {/* Flecha derecha modal */}
            {total > 1 && modalIndex < total - 1 && (
              <button
                onClick={modalNext}
                className="absolute right-3 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/70 text-white shadow-lg backdrop-blur-md transition-all duration-200 hover:border-purple-accent hover:bg-purple-accent/20"
                >
                <TbChevronRight className="text-base" />
              </button>
            )}

            {total > 1 && (
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full border border-border bg-bg-card/80 px-3 py-1 text-xs text-text-muted backdrop-blur-sm">
                {modalIndex + 1} / {total}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default ProjectCarousel;
