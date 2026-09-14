import { motion, useReducedMotion } from 'motion/react'
import type { ReactNode } from 'react'
import { DUR, EASE, VIEWPORT } from '../../lib/motion'

interface RevealProps {
  children: ReactNode
  className?: string
  delay?: number
  y?: number
  as?: 'div' | 'section' | 'li' | 'p' | 'span' | 'header' | 'figure'
}

/** Aparece una sola vez al entrar en el viewport (opacity + translateY). */
export function Reveal({ children, className, delay = 0, y = 24, as = 'div' }: RevealProps) {
  const reduce = useReducedMotion()
  const Tag = motion[as]
  return (
    <Tag
      className={className}
      initial={reduce ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={VIEWPORT}
      transition={{ duration: DUR.base, ease: EASE, delay }}
    >
      {children}
    </Tag>
  )
}

interface RevealGroupProps {
  children: ReactNode
  className?: string
  stagger?: number
  delay?: number
  as?: 'div' | 'ul' | 'ol' | 'dl'
}

/** Contenedor que escalona la entrada de sus hijos `RevealItem`. */
export function RevealGroup({ children, className, stagger = 0.09, delay = 0, as = 'div' }: RevealGroupProps) {
  const reduce = useReducedMotion()
  const Tag = motion[as]
  return (
    <Tag
      className={className}
      initial={reduce ? false : 'hidden'}
      whileInView="visible"
      viewport={VIEWPORT}
      variants={{ hidden: {}, visible: { transition: { staggerChildren: stagger, delayChildren: delay } } }}
    >
      {children}
    </Tag>
  )
}

interface RevealItemProps {
  children: ReactNode
  className?: string
  y?: number
  as?: 'div' | 'li' | 'p' | 'span' | 'a'
}

export function RevealItem({ children, className, y = 20, as = 'div' }: RevealItemProps) {
  const Tag = motion[as]
  return (
    <Tag
      className={className}
      variants={{
        hidden: { opacity: 0, y },
        visible: { opacity: 1, y: 0, transition: { duration: DUR.base, ease: EASE } },
      }}
    >
      {children}
    </Tag>
  )
}
