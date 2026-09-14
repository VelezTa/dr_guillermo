import { useId, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import { ArrowUpRight, Plus } from 'lucide-react'
import { faq, links } from '../data/doctor'
import { EASE } from '../lib/motion'
import { Reveal, RevealGroup, RevealItem } from './ui/Reveal'
import { SectionHeader } from './ui/SectionHeader'

function FaqItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(index === 0)
  const id = useId()
  const reduce = useReducedMotion()
  return (
    <RevealItem as="li" className="border-b border-border">
      <h3>
        <button type="button" className="faq-trigger" aria-expanded={open} aria-controls={`${id}-panel`} id={`${id}-trigger`} onClick={() => setOpen((v) => !v)}>
          <span>{q}</span>
          <Plus size={20} className="faq-icon text-ink-3" aria-hidden="true" />
        </button>
      </h3>
      <AnimatePresence initial={false}>
        {open ? (
          <motion.div
            id={`${id}-panel`}
            role="region"
            aria-labelledby={`${id}-trigger`}
            initial={reduce ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={reduce ? { height: 0, opacity: 0, transition: { duration: 0 } } : { height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: EASE }}
            className="overflow-hidden"
          >
            <p className="max-w-[40rem] pb-6 text-[1.0625rem] leading-relaxed text-ink-2">{a}</p>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </RevealItem>
  )
}

export function Faq() {
  return (
    <section id="preguntas" className="bg-surface py-20 md:py-24 lg:py-28" aria-labelledby="preguntas-title">
      <div className="container-x grid grid-cols-1 gap-12 lg:grid-cols-[5fr_7fr] lg:gap-16">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <SectionHeader
            eyebrow="Preguntas frecuentes"
            titleId="preguntas-title"
            title={[{ text: 'Antes de ' }, { text: 'agendar', accent: true }]}
            lead="Respuestas basadas en la información publicada en su perfil de Doctoralia."
          />
          <Reveal delay={0.25} className="mt-8">
            <a href={links.doctoralia} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              <span>Ver disponibilidad</span>
              <ArrowUpRight size={18} className="btn-icon" aria-hidden="true" />
            </a>
          </Reveal>
        </div>
        <RevealGroup as="ul" className="border-t border-border" stagger={0.08}>
          {faq.map((item, i) => (
            <FaqItem key={item.q} q={item.q} a={item.a} index={i} />
          ))}
        </RevealGroup>
      </div>
    </section>
  )
}
