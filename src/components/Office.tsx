import { ArrowUpRight, ExternalLink, Phone } from 'lucide-react'
import { doctor, links, office, phone, services } from '../data/doctor'
import { Reveal, RevealGroup, RevealItem } from './ui/Reveal'
import { SectionHeader } from './ui/SectionHeader'

function Row({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <RevealItem as="div" className="grid grid-cols-1 gap-1.5 border-b border-border py-5 sm:grid-cols-[11rem_1fr] sm:gap-6">
      <dt className="text-[0.75rem] font-medium uppercase tracking-[0.1em] text-ink-3 sm:pt-1">{label}</dt>
      <dd className="text-[1.0625rem] leading-relaxed text-ink">{children}</dd>
    </RevealItem>
  )
}

export function Office() {
  return (
    <section id="consultorio" className="py-20 md:py-24 lg:py-28" aria-labelledby="consultorio-title">
      <div className="container-x">
        <SectionHeader
          eyebrow="Consultorio y citas"
          titleId="consultorio-title"
          title={[{ text: 'Consulta presencial en ' }, { text: doctor.neighborhood, accent: true }]}
          lead="La agenda se gestiona a través de Doctoralia, con calendario en tiempo real y confirmación inmediata. También puedes llamar al consultorio."
        />

        <div className="mt-12 grid grid-cols-1 gap-12 lg:mt-16 lg:grid-cols-[7fr_5fr] lg:gap-16">
          <div>
            <RevealGroup as="dl" className="border-t border-border" stagger={0.08}>
              <Row label="Dirección">
                <span className="block">{office.addressLine1}</span>
                <span className="block">{office.addressLine2}</span>
                <span className="block text-ink-2">{office.area}</span>
                <a href={links.maps} target="_blank" rel="noopener noreferrer" className="link mt-2 inline-flex items-center gap-1.5 text-[0.9375rem]">
                  Abrir en Google Maps
                  <ExternalLink size={14} aria-hidden="true" />
                </a>
              </Row>
              <Row label="Modalidad">{doctor.consultationType}</Row>
              <Row label="Consulta">
                {services.map((s) => (
                  <span key={s.name} className="block">
                    {s.name} · <strong className="font-semibold">{s.price}</strong>
                    <span className="block text-[0.875rem] text-ink-3">{s.note}</span>
                  </span>
                ))}
              </Row>
              <Row label="Formas de pago">
                {office.payment}
                <span className="block text-[0.875rem] text-ink-3">{office.paymentNote}</span>
              </Row>
              <Row label="Aseguradoras">
                <span className="block">{office.insurers.join(' · ')}</span>
                <span className="block text-[0.875rem] text-ink-3">{office.insurersNote}</span>
              </Row>
              <Row label="Teléfono">
                <a href={phone.href} className="link">
                  {phone.display}
                </a>
              </Row>
            </RevealGroup>

            <Reveal delay={0.2} className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a href={links.doctoralia} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                <span>Agendar cita en Doctoralia</span>
                <ArrowUpRight size={18} className="btn-icon" aria-hidden="true" />
              </a>
              <a href={phone.href} className="btn btn-secondary" aria-label={`Llamar al ${phone.display}`}>
                <Phone size={18} aria-hidden="true" />
                <span>Llamar al consultorio</span>
              </a>
            </Reveal>
          </div>

          <Reveal as="figure" delay={0.15} y={32} className="lg:sticky lg:top-28 lg:self-start">
            <div className="overflow-hidden rounded-[24px] bg-surface shadow-[0_0_0_1px_rgba(0,0,0,0.06),0_1px_2px_rgba(0,0,0,0.06)]">
              <iframe
                src={links.mapsEmbed}
                title={`Mapa: ${office.name}, ${office.addressLine1}, ${office.area}`}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen={false}
                className="block h-[320px] w-full border-0 sm:h-[400px] lg:h-[460px]"
              />
            </div>
            <figcaption className="mt-3 flex items-center justify-between gap-4 text-[0.875rem] text-ink-3">
              <span>{office.name}</span>
              <a href={links.maps} target="_blank" rel="noopener noreferrer" className="link inline-flex items-center gap-1">
                Cómo llegar
                <ExternalLink size={13} aria-hidden="true" />
              </a>
            </figcaption>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
