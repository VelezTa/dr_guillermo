import type { Variants } from 'motion/react'

/** Curva expo-out suave, cercana a la sensación de InnerDerma (~0,7 s). */
export const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1]

export const DUR = {
  fast: 0.35,
  base: 0.7,
  slow: 1,
} as const

export const VIEWPORT = { once: true, margin: '0px 0px -12% 0px' } as const

export const fadeUp = (delay = 0, y = 24): Variants => ({
  hidden: { opacity: 0, y },
  visible: { opacity: 1, y: 0, transition: { duration: DUR.base, ease: EASE, delay } },
})

export const stagger = (staggerChildren = 0.09, delayChildren = 0): Variants => ({
  hidden: {},
  visible: { transition: { staggerChildren, delayChildren } },
})

export const maskUp: Variants = {
  hidden: { y: '110%' },
  visible: { y: 0, transition: { duration: 0.9, ease: EASE } },
}
