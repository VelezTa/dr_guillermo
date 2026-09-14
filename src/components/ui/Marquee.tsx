import type { ReactNode } from 'react'

interface MarqueeProps {
  children: ReactNode
  /** Segundos que tarda una vuelta completa */
  duration?: number
  reverse?: boolean
  paused?: boolean
  gap?: string
  className?: string
  label?: string
}

/**
 * Banda horizontal infinita en CSS puro (translate3d), pausable y con
 * degradación a scroll horizontal cuando el usuario prefiere menos movimiento.
 * El contenido se duplica una vez; la copia queda oculta para lectores de pantalla.
 */
export function Marquee({ children, duration = 60, reverse = false, paused = false, gap = '1rem', className = '', label }: MarqueeProps) {
  const style = { '--marquee-duration': `${duration}s`, '--marquee-gap': gap } as React.CSSProperties
  return (
    <div className={`marquee ${className}`} data-paused={paused} style={style} aria-label={label} role={label ? 'region' : undefined}>
      <div className={`marquee-track ${reverse ? 'is-reverse' : ''}`}>
        <div className="marquee-group">{children}</div>
        <div className="marquee-group" aria-hidden="true">
          {children}
        </div>
      </div>
    </div>
  )
}
