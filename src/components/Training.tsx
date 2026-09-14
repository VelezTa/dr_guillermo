import { links, training } from '../data/doctor'
import { Reveal, RevealGroup, RevealItem } from './ui/Reveal'
import { SectionHeader } from './ui/SectionHeader'

export function Training() {
  return (
    <section id="formacion" className="bg-surface py-20 md:py-24 lg:py-28" aria-labelledby="formacion-title">
      <div className="container-x">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[5fr_7fr] lg:gap-16">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <SectionHeader
              eyebrow="Formación"
              titleId="formacion-title"
              title={[{ text: 'Una trayectoria formada en Colombia, Brasil y ' }, { text: 'Estados Unidos', accent: true }]}
              lead="Medicina, medicina del deporte, ortopedia y traumatología, artroscopia de rodilla y cirugía de mano: así se ordena, año a año, la formación publicada en su perfil."
            />
            <Reveal as="p" delay={0.25} className="mt-6 text-[0.9375rem] text-ink-3">
              Información tomada de su{' '}
              <a href={links.doctoralia} target="_blank" rel="noopener noreferrer" className="link">
                perfil en Doctoralia
              </a>
              .
            </Reveal>
          </div>

          <RevealGroup as="ol" className="border-t border-border-strong/15" stagger={0.09}>
            {training.map((item, i) => (
              <RevealItem key={`${item.years}-${i}`} as="li" className="grid grid-cols-1 gap-2 border-b border-border py-6 sm:grid-cols-[7.5rem_1fr] sm:gap-8 md:py-7">
                <span className="font-serif text-[1.5rem] leading-none text-accent md:text-[1.75rem]">{item.years}</span>
                <div>
                  <h3 className="text-[1.0625rem] font-medium leading-snug tracking-[-0.01em] text-ink md:text-[1.125rem]">{item.title}</h3>
                  <p className="mt-1.5 text-[0.9375rem] leading-relaxed text-ink-2">{item.institution}</p>
                  <p className="mt-0.5 text-[0.875rem] text-ink-3">{item.place}</p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </div>
    </section>
  )
}
