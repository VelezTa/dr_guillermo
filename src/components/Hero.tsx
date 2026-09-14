import { useRef, useState } from 'react'
import { motion, useReducedMotion, useScroll, useTransform } from 'motion/react'
import { ArrowUpRight, MapPin, Star } from 'lucide-react'
import { doctor, links, reviewsSummary } from '../data/doctor'
import { EASE } from '../lib/motion'

const lines: { text: string; accent?: boolean }[] = [
  { text: 'Dr. Guillermo' },
  { text: 'Forero González', accent: true },
]

export function Hero() {
  const reduceMotion = useReducedMotion()
  // Si la pestaña arranca en segundo plano (o en un prerender), mostramos el hero sin animar:
  // así nunca queda invisible mientras requestAnimationFrame está pausado.
  const [startedHidden] = useState(() => typeof document !== 'undefined' && document.visibilityState === 'hidden')
  const reduce = reduceMotion || startedHidden
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const cardY = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : -48])
  const textY = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 24])

  const fade = (delay: number) => ({
    initial: reduce ? false : { opacity: 0, y: 18 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, ease: EASE, delay },
  })

  return (
    <section ref={ref} id="inicio" className="grain relative isolate overflow-hidden" aria-labelledby="hero-title">
      <div
        className="pointer-events-none absolute -right-40 -top-40 -z-10 size-[38rem] rounded-full opacity-100"
        style={{ background: 'radial-gradient(closest-side, rgba(var(--accent-rgb), 0.11), transparent 70%)' }}
        aria-hidden="true"
      />

      <div className="container-x grid min-h-[100svh] grid-cols-1 items-center gap-12 pb-16 pt-28 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14 lg:pb-20 lg:pt-32">
        <motion.div style={{ y: textY }} className="max-w-[40rem]">
          <motion.p {...fade(0.05)} className="pill-outline">
            {doctor.specialty}
            <span className="hidden min-[480px]:inline"> · {doctor.city}</span>
          </motion.p>

          <h1 id="hero-title" className="display mt-8 text-ink" aria-label={doctor.name}>
            {lines.map((line, i) => (
              <span key={line.text} className="block overflow-hidden pb-[0.06em] -mb-[0.06em]" aria-hidden="true">
                <motion.span
                  className={`block ${line.accent ? 'accent-word' : ''}`}
                  initial={reduce ? false : { y: '108%' }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.95, ease: EASE, delay: 0.12 + i * 0.1 }}
                >
                  {line.text}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p {...fade(0.4)} className="mt-7 max-w-[32rem] text-[1.125rem] font-medium leading-[1.35] tracking-[-0.017em] text-ink md:text-[1.25rem]">
            Especialista en rodilla, artroscopia, cirugía de mano y traumatología deportiva.
          </motion.p>
          <motion.p {...fade(0.5)} className="mt-3 text-[1.0625rem] text-ink-2">
            Consulta presencial en {doctor.neighborhood}, {doctor.city}.
          </motion.p>

          <motion.div {...fade(0.6)} className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a href={links.doctoralia} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              <span>Agendar cita en Doctoralia</span>
              <ArrowUpRight size={18} className="btn-icon" aria-hidden="true" />
            </a>
          </motion.div>

          <motion.dl {...fade(0.75)} className="mt-12 flex flex-wrap items-start gap-x-10 gap-y-5 border-t border-border pt-6">
            <div>
              <dt className="text-[0.6875rem] font-medium uppercase tracking-[0.12em] text-ink-3">Opiniones en Doctoralia</dt>
              <dd className="mt-1.5 flex items-center gap-2 text-[0.9375rem] text-ink">
                <Star size={16} className="fill-accent text-accent" aria-hidden="true" />
                <span>
                  <strong className="font-semibold">{reviewsSummary.rating}</strong> · {reviewsSummary.count} opiniones verificadas
                </span>
              </dd>
            </div>
            <div>
              <dt className="text-[0.6875rem] font-medium uppercase tracking-[0.12em] text-ink-3">Idiomas</dt>
              <dd className="mt-1.5 text-[0.9375rem] text-ink">{doctor.languages.join(' · ')}</dd>
            </div>
          </motion.dl>
        </motion.div>

        <motion.figure
          style={{ y: cardY }}
          className="relative mx-auto w-full max-w-[26rem] lg:ml-auto lg:max-w-[29rem]"
          initial={reduce ? false : { opacity: 0, y: 28, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, ease: EASE, delay: 0.25 }}
        >
          <div className="relative aspect-[4/5] overflow-hidden rounded-[24px] bg-surface shadow-[0_0_0_1px_rgba(0,0,0,0.06),0_1px_2px_rgba(0,0,0,0.06)]">
            <picture>
              <source srcSet={doctor.photo.webp} type="image/webp" />
              <img
                src={doctor.photo.jpg}
                alt={doctor.photo.alt}
                width={doctor.photo.width}
                height={doctor.photo.height}
                fetchPriority="high"
                decoding="async"
                className="h-full w-full object-cover object-[58%_22%]"
              />
            </picture>
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-[rgba(var(--dark-rgb),0.55)] to-transparent" aria-hidden="true" />

            <motion.span
              className="absolute right-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-[rgba(var(--bg-rgb),0.92)] px-3 py-2 text-[0.75rem] font-medium text-ink shadow-[0_1px_2px_rgba(0,0,0,0.08)] backdrop-blur"
              initial={reduce ? false : { opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: EASE, delay: 0.9 }}
            >
              <MapPin size={14} className="text-accent" aria-hidden="true" />
              {doctor.neighborhood}, {doctor.city}
            </motion.span>

            <motion.figcaption
              className="absolute bottom-4 left-4 right-4 rounded-2xl bg-[rgba(var(--bg-rgb),0.94)] px-5 py-4 shadow-[0_12px_32px_-16px_rgba(var(--ink-rgb),0.35)] backdrop-blur sm:right-auto sm:min-w-[16rem]"
              initial={reduce ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: EASE, delay: 1 }}
            >
              <span className="block font-serif text-[1.125rem] leading-tight text-ink">{doctor.name}</span>
              <span className="mt-1 block text-[0.6875rem] font-medium uppercase tracking-[0.12em] text-accent">{doctor.specialty}</span>
            </motion.figcaption>
          </div>
        </motion.figure>
      </div>
    </section>
  )
}
