import { areas } from '../data/doctor'
import { Marquee } from './ui/Marquee'

/** Franja editorial con las cuatro áreas de especialización publicadas en Doctoralia. */
export function AreasBand() {
  const items = [...areas, ...areas]
  return (
    <section className="border-y border-border bg-surface py-6 md:py-8" aria-label="Áreas de especialización">
      <ul className="sr-only">
        {areas.map((a) => (
          <li key={a.id}>{a.name}</li>
        ))}
      </ul>
      <div aria-hidden="true">
        <Marquee duration={38} gap="0">
          {items.map((a, i) => (
            <span key={`${a.id}-${i}`} className="flex items-center whitespace-nowrap font-serif text-[1.75rem] leading-none text-ink md:text-[2.25rem]">
              <span className="px-6 md:px-8">{a.name}</span>
              <span className="size-2 rounded-full bg-accent" />
            </span>
          ))}
        </Marquee>
      </div>
    </section>
  )
}
