import { areas, conditions, doctor } from '../data/doctor'
import { Reveal, RevealGroup, RevealItem } from './ui/Reveal'
import { SectionHeader } from './ui/SectionHeader'

export function Specialties() {
  return (
    <section id="especialidad" className="py-20 md:py-24 lg:py-28" aria-labelledby="especialidad-title">
      <div className="container-x">
        <SectionHeader
          eyebrow="Especialidad"
          titleId="especialidad-title"
          title={[{ text: 'Áreas en las que se ' }, { text: 'especializa', accent: true }]}
          lead={
            <>
              {doctor.specialty}. Según su perfil profesional, atiende de forma presencial y concentra su práctica en
              cuatro áreas de la ortopedia.
            </>
          }
        />

        <div className="mt-14 grid grid-cols-1 gap-12 lg:mt-16 lg:grid-cols-[5fr_7fr] lg:gap-16">
          <RevealGroup as="ol" className="border-t border-border" stagger={0.1}>
            {areas.map((area) => (
              <RevealItem key={area.id} as="li" className="group flex items-baseline gap-6 border-b border-border py-6 md:py-7">
                <span className="w-8 shrink-0 font-sans text-[0.75rem] font-medium tracking-[0.1em] text-ink-3 transition-colors group-hover:text-accent">
                  {area.id}
                </span>
                <span className="h3 text-ink transition-transform duration-500 ease-out-expo group-hover:translate-x-1">{area.name}</span>
              </RevealItem>
            ))}
          </RevealGroup>

          <div>
            <Reveal as="p" className="text-[0.75rem] font-medium uppercase tracking-[0.1em] text-ink-3">
              Principales enfermedades tratadas
            </Reveal>
            <RevealGroup as="ul" className="mt-5 flex flex-wrap gap-2.5" stagger={0.04}>
              {conditions.map((c) => (
                <RevealItem key={c} as="li" y={10}>
                  <span className="tag">{c}</span>
                </RevealItem>
              ))}
            </RevealGroup>

            <Reveal delay={0.2} className="mt-10 grid grid-cols-1 gap-6 border-t border-border pt-6 sm:grid-cols-2">
              <div>
                <p className="text-[0.75rem] font-medium uppercase tracking-[0.1em] text-ink-3">Tipo de consulta</p>
                <p className="mt-1.5 text-[1.0625rem] text-ink">{doctor.consultationType}</p>
              </div>
              <div>
                <p className="text-[0.75rem] font-medium uppercase tracking-[0.1em] text-ink-3">Idiomas</p>
                <p className="mt-1.5 text-[1.0625rem] text-ink">{doctor.languages.join(', ')}</p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
