import type { ReactNode } from 'react'
import { Reveal } from './Reveal'
import { SplitWords, type Segment } from './SplitWords'

interface SectionHeaderProps {
  eyebrow: string
  title: Segment[]
  titleId: string
  lead?: ReactNode
  onDark?: boolean
  className?: string
}

/** Cabecera editorial de sección: eyebrow, titular serif revelado por palabras y párrafo de apoyo. */
export function SectionHeader({ eyebrow, title, titleId, lead, onDark = false, className = '' }: SectionHeaderProps) {
  return (
    <div className={`max-w-[42rem] ${className}`}>
      <Reveal as="p" className={`eyebrow ${onDark ? 'eyebrow-on-dark' : ''}`} y={12}>
        {eyebrow}
      </Reveal>
      <SplitWords as="h2" id={titleId} segments={title} className={`h2 mt-5 ${onDark ? 'text-on-dark' : 'text-ink'}`} />
      {lead ? (
        <Reveal as="p" delay={0.15} className={`mt-5 max-w-[36rem] text-[1.0625rem] leading-relaxed ${onDark ? 'text-on-dark-2' : 'text-ink-2'}`}>
          {lead}
        </Reveal>
      ) : null}
    </div>
  )
}
