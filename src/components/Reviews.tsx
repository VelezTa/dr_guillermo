import { useState } from 'react'
import { ArrowUpRight, BadgeCheck, Pause, Play, Star } from 'lucide-react'
import { links, reviewsSummary } from '../data/doctor'
import { reviews, type Review } from '../data/reviews'
import { Reveal } from './ui/Reveal'
import { Marquee } from './ui/Marquee'
import { SectionHeader } from './ui/SectionHeader'

const MONTHS = ['ene', 'feb', 'mar', 'abr', 'may', 'jun', 'jul', 'ago', 'sep', 'oct', 'nov', 'dic']

function formatDate(iso: string) {
  const [year, month] = iso.split('-')
  return `${MONTHS[Number(month) - 1]} ${year}`
}

function ReviewCard({ review }: { review: Review }) {
  const initial = review.author.trim().charAt(0).toUpperCase()
  return (
    <article className="review-card" aria-label={`Opinión de ${review.author}`}>
      <header className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className="flex size-9 shrink-0 items-center justify-center rounded-full border border-[var(--dark-border-hover)] font-serif text-[0.95rem] text-on-dark" aria-hidden="true">
            {initial}
          </span>
          <div className="leading-tight">
            <p className="text-[0.9375rem] font-medium text-on-dark">{review.author}</p>
            <p className="mt-0.5 whitespace-nowrap text-[0.75rem] text-on-dark-2">
              Cita verificada · <time dateTime={review.date}>{formatDate(review.date)}</time>
            </p>
          </div>
        </div>
        <span className="inline-flex shrink-0 items-center gap-1 text-[0.75rem] text-on-dark-2">
          <BadgeCheck size={14} className="text-accent-on-dark" aria-hidden="true" />
          Doctoralia
        </span>
      </header>
      <blockquote className="mt-4 font-serif text-[1.0625rem] leading-[1.45] text-[rgba(244,241,234,0.88)] sm:text-[1.125rem]" title={review.text}>
        <p className="review-quote">“{review.text}”</p>
      </blockquote>
    </article>
  )
}

export function Reviews() {
  const [paused, setPaused] = useState(false)
  const half = Math.ceil(reviews.length / 2)
  const rowA = reviews.slice(0, half)
  const rowB = reviews.slice(half)

  return (
    <section id="opiniones" className="bg-dark py-20 text-on-dark md:py-24 lg:py-28" aria-labelledby="opiniones-title">
      <div className="container-x">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeader
            onDark
            eyebrow="Opiniones de pacientes"
            titleId="opiniones-title"
            title={[{ text: 'Lo que dicen sus ' }, { text: 'pacientes', accent: true }]}
          />
          <Reveal delay={0.2} className="flex flex-col gap-5 lg:items-end">
            <p className="flex items-center gap-2 text-[0.9375rem] text-on-dark-2">
              <Star size={16} className="fill-accent-on-dark text-accent-on-dark" aria-hidden="true" />
              <span>
                <strong className="font-semibold text-on-dark">{reviewsSummary.rating}</strong> · {reviewsSummary.count} opiniones de pacientes publicadas en
                Doctoralia
              </span>
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <button type="button" className="btn btn-ghost-dark min-h-[44px] px-4 text-sm" aria-pressed={paused} onClick={() => setPaused((v) => !v)}>
                {paused ? <Play size={15} aria-hidden="true" /> : <Pause size={15} aria-hidden="true" />}
                <span>{paused ? 'Reanudar' : 'Pausar'}</span>
              </button>
              <a
                href={links.doctoraliaReviews}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[44px] items-center gap-2 text-[0.8125rem] font-medium uppercase tracking-[0.1em] text-accent-on-dark transition-colors hover:text-on-dark focus-visible:outline-accent-on-dark"
              >
                Ver opiniones en Doctoralia
                <ArrowUpRight size={16} aria-hidden="true" />
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.1} className="mt-8 flex flex-wrap items-center gap-x-3 gap-y-2 text-[0.875rem] text-on-dark-2">
          <span className="text-[0.6875rem] font-medium uppercase tracking-[0.12em] text-on-dark-2">Lo más mencionado</span>
          {reviewsSummary.highlights.map((h) => (
            <span key={h} className="rounded-full border border-[var(--dark-border)] px-3 py-1.5 text-on-dark">
              {h}
            </span>
          ))}
        </Reveal>
      </div>

      <Reveal delay={0.15} y={32} className="mt-12 flex flex-col gap-4 md:mt-14">
        <Marquee duration={300} paused={paused} label="Opiniones, primera fila">
          {rowA.map((r) => (
            <ReviewCard key={`${r.author}-${r.date}`} review={r} />
          ))}
        </Marquee>
        <Marquee duration={290} reverse paused={paused} label="Opiniones, segunda fila">
          {rowB.map((r) => (
            <ReviewCard key={`${r.author}-${r.date}`} review={r} />
          ))}
        </Marquee>
      </Reveal>

      <div className="container-x">
        <p className="mt-10 max-w-[44rem] text-[0.875rem] leading-relaxed text-on-dark-2">
          Opiniones transcritas textualmente del perfil del doctor en Doctoralia. Las opiniones se muestran tal como fueron publicadas por cada
          paciente y pueden consultarse completas en la fuente original.
        </p>
      </div>
    </section>
  )
}
