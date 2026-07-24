import { useCallback, useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { ArrowLeft, ArrowRight, ArrowSquareOut, X } from '@phosphor-icons/react'
import { slides } from '@/lib/slideContent'
import { SlideCanvas } from './SlideCanvas'

interface SlideDeckProps {
  onExit: () => void
}

/**
 * Slide deck de la charla técnica, contenido en `src/lib/slideContent.ts`
 * (misma fuente que consume CopilotTalkNotes.tsx para la versión de guía).
 *
 * Layout tipo keynote, dos columnas: texto a la izquierda, visual a la
 * derecha, siempre en la misma fila (nunca la imagen detrás del texto
 * como fondo). Cuando el slide no trae una foto/ilustración propia, la
 * columna derecha la ocupa la escena ambiental de Three.js.
 *
 * Restricciones de diseño (pedidas explícitamente):
 * - Relación 16:9, con barras neutras (nunca negras) si el viewport no calza.
 * - Título a 42px, el resto del texto a 20px — escopeado a este componente.
 */
export function SlideDeck({ onExit }: SlideDeckProps) {
  const [index, setIndex] = useState(0)
  const slide = slides[index]
  const isFirst = index === 0
  const isLast = index === slides.length - 1

  const goNext = useCallback(() => {
    setIndex((i) => Math.min(i + 1, slides.length - 1))
  }, [])

  const goPrev = useCallback(() => {
    setIndex((i) => Math.max(i - 1, 0))
  }, [])

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ') goNext()
      if (e.key === 'ArrowLeft') goPrev()
      if (e.key === 'Escape') onExit()
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [goNext, goPrev, onExit])

  const hasVisual = Boolean(slide.image || slide.photo)

  const textPanel = (
    <div
      key={slide.id}
      className="relative z-10 max-h-full overflow-y-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden animate-in fade-in slide-in-from-left-8 duration-500"
    >
      <span className="inline-block text-[20px] leading-none font-semibold text-white bg-[#7c3aed] px-3 py-1.5 rounded-full mb-4 uppercase tracking-wide">
        {slide.topic}
      </span>
      <h1 className="text-[42px] leading-[1.15] font-bold text-neutral-900 mb-2">
        {slide.title}
      </h1>
      <div className="w-16 h-1 rounded-full bg-gradient-to-r from-[#7c3aed] to-[#c026d3] mb-6" />
      <ul className="space-y-3">
        {slide.bullets.map((bullet, i) => (
          <li key={i} className="text-[20px] leading-snug text-neutral-800 flex gap-3">
            <span className="text-[#c026d3] font-bold flex-shrink-0">—</span>
            <span>{bullet}</span>
          </li>
        ))}
      </ul>
      {slide.links && slide.links.length > 0 && (
        <div className="flex flex-wrap gap-3 mt-6">
          {slide.links.map((link) => (
            <a
              key={link.url}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-[20px] text-[#7c3aed] font-medium border border-[#7c3aed]/30 rounded-full px-4 py-1.5 hover:bg-[#7c3aed]/10 transition-colors"
            >
              {link.label}
              <ArrowSquareOut size={16} />
            </a>
          ))}
        </div>
      )}
    </div>
  )

  return (
    <div className="fixed inset-0 bg-[#e4e1ec] flex items-center justify-center">
      <div className="relative w-full h-full max-w-[177.78vh] max-h-[56.25vw] aspect-video bg-[#fcfbff] overflow-hidden">
        {hasVisual ? (
          // Dos columnas fijas: texto a la izquierda, imagen contenida a la
          // derecha — nunca la imagen cubriendo todo el frame como fondo.
          <div className="relative z-10 h-full flex items-center justify-between gap-10 pt-[6%] pb-[16%] px-[6%]">
            <div className="w-[52%] max-h-full overflow-y-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">{textPanel}</div>
            <div className="w-[38%] flex-shrink-0 flex items-center justify-center">
              {slide.photo ? (
                <img
                  src={slide.photo}
                  alt={slide.title}
                  className="w-56 h-56 rounded-full object-cover border-4 border-white shadow-2xl"
                />
              ) : (
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full rounded-2xl border-4 border-white shadow-2xl object-cover"
                />
              )}
            </div>
          </div>
        ) : (
          <>
            <SlideCanvas accent={slide.sceneAccent} slideId={slide.id} />
            {/* Scrim degradado — solo detrás del panel de texto, para legibilidad,
                sin tapar la escena de Three.js del resto del frame. */}
            <div
              className="absolute inset-y-0 left-0 w-[62%] pointer-events-none"
              style={{
                background:
                  'linear-gradient(90deg, rgba(252,251,255,0.97) 0%, rgba(252,251,255,0.93) 55%, rgba(252,251,255,0) 100%)',
              }}
            />
            <div className="absolute inset-0 flex items-center pt-[6%] pb-[16%] pl-[6%] pr-[6%]">
              <div className="max-w-[58%]">{textPanel}</div>
            </div>
          </>
        )}

        {/* Chrome: salir, contador, navegación */}
        <div className="absolute top-6 right-6 z-20">
          <Button variant="outline" size="sm" onClick={onExit} className="bg-white/90">
            <X size={16} className="mr-1" />
            Entrar a la guía
          </Button>
        </div>

        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center gap-4 bg-white/90 rounded-full px-4 py-2 border border-[#7c3aed]/15 shadow-md">
          <Button variant="ghost" size="sm" onClick={goPrev} disabled={isFirst} aria-label="Slide anterior">
            <ArrowLeft size={18} />
          </Button>
          <span className="text-sm text-neutral-600 tabular-nums min-w-[3.5rem] text-center">
            {index + 1} / {slides.length}
          </span>
          <Button variant="ghost" size="sm" onClick={goNext} disabled={isLast} aria-label="Siguiente slide">
            <ArrowRight size={18} />
          </Button>
        </div>
      </div>
    </div>
  )
}
