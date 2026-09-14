import { motion, useReducedMotion } from 'motion/react'
import { EASE, VIEWPORT } from '../../lib/motion'

export interface Segment {
  text: string
  accent?: boolean
}

interface SplitWordsProps {
  segments: Segment[]
  as?: 'h1' | 'h2' | 'h3' | 'p'
  className?: string
  id?: string
  /** Retraso inicial en segundos */
  delay?: number
  /** Si es true, anima al montar en lugar de al entrar en viewport (hero). */
  onMount?: boolean
}

/**
 * Revela un titular palabra por palabra con una máscara vertical.
 * Cada palabra sube desde abajo (y: 110% → 0) con un escalonado corto.
 */
export function SplitWords({ segments, as = 'h2', className, id, delay = 0, onMount = false }: SplitWordsProps) {
  const reduce = useReducedMotion()
  const Tag = motion[as]

  const words: { word: string; accent: boolean }[] = []
  segments.forEach((segment) => {
    segment.text
      .split(' ')
      .filter(Boolean)
      .forEach((word) => words.push({ word, accent: !!segment.accent }))
  })

  const label = segments.map((s) => s.text).join(' ')

  return (
    <Tag
      id={id}
      className={className}
      aria-label={label}
      initial={reduce ? false : 'hidden'}
      {...(onMount ? { animate: 'visible' } : { whileInView: 'visible', viewport: VIEWPORT })}
      variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.045, delayChildren: delay } } }}
    >
      {words.map(({ word, accent }, i) => (
        <span key={`${word}-${i}`} aria-hidden="true" className="inline-block overflow-hidden pb-[0.08em] -mb-[0.08em] align-bottom">
          <motion.span
            className={`inline-block ${accent ? 'accent-word' : ''}`}
            variants={{
              hidden: { y: '110%' },
              visible: { y: 0, transition: { duration: 0.8, ease: EASE } },
            }}
          >
            {word}
          </motion.span>
          {i < words.length - 1 ? ' ' : ''}
        </span>
      ))}
    </Tag>
  )
}
