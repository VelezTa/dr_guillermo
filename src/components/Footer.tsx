import { ArrowUpRight, Phone } from 'lucide-react'
import { doctor, links, navItems, office, phone } from '../data/doctor'
import { Reveal } from './ui/Reveal'

export function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="bg-dark text-on-dark" aria-labelledby="footer-title">
      <div className="container-x py-16 md:py-20">
        <Reveal className="grid grid-cols-1 gap-12 lg:grid-cols-[1.2fr_0.8fr_0.8fr] lg:gap-16">
          <div>
            <p id="footer-title" className="font-serif text-[1.75rem] leading-tight md:text-[2rem]">
              {doctor.name}
            </p>
            <p className="mt-2 text-[0.75rem] font-medium uppercase tracking-[0.12em] text-accent-on-dark">{doctor.specialty}</p>
            <p className="mt-6 max-w-[26rem] text-[0.9375rem] leading-relaxed text-on-dark-2">
              Consulta presencial en {doctor.neighborhood}, {doctor.city}. Agenda tu cita a través de Doctoralia o llama al consultorio.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a href={links.doctoralia} target="_blank" rel="noopener noreferrer" className="btn btn-on-dark">
                <span>Agendar cita en Doctoralia</span>
                <ArrowUpRight size={18} className="btn-icon" aria-hidden="true" />
              </a>
              <a href={phone.href} className="btn btn-ghost-dark" aria-label={`Llamar al ${phone.display}`}>
                <Phone size={18} aria-hidden="true" />
                <span>{phone.display}</span>
              </a>
            </div>
          </div>

          <div>
            <p className="text-[0.75rem] font-medium uppercase tracking-[0.12em] text-on-dark-2">Consultorio</p>
            <address className="mt-4 text-[0.9375rem] not-italic leading-relaxed text-on-dark">
              <span className="block">{office.addressLine1}</span>
              <span className="block">{office.addressLine2}</span>
              <span className="block text-on-dark-2">{office.area}</span>
            </address>
            <a
              href={links.maps}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex min-h-[44px] items-center gap-1.5 text-[0.9375rem] text-accent-on-dark underline decoration-1 underline-offset-4 transition-colors hover:text-on-dark focus-visible:outline-accent-on-dark"
            >
              Abrir en Google Maps
              <ArrowUpRight size={15} aria-hidden="true" />
            </a>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-2 lg:grid-cols-1">
            <nav aria-label="Secciones del sitio">
              <p className="text-[0.75rem] font-medium uppercase tracking-[0.12em] text-on-dark-2">Secciones</p>
              <ul className="mt-3 flex flex-col gap-0.5">
                {navItems.map((item) => (
                  <li key={item.href}>
                    <a href={item.href} className="inline-flex min-h-[44px] items-center text-[0.9375rem] text-on-dark transition-colors hover:text-accent-on-dark focus-visible:outline-accent-on-dark">
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
            <div>
              <p className="text-[0.75rem] font-medium uppercase tracking-[0.12em] text-on-dark-2">Perfiles</p>
              <ul className="mt-3 flex flex-col gap-0.5">
                <li>
                  <a
                    href={links.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-[44px] items-center gap-2 text-[0.9375rem] text-on-dark transition-colors hover:text-accent-on-dark focus-visible:outline-accent-on-dark"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                    </svg>
                    Instagram
                  </a>
                </li>
                <li>
                  <a
                    href={links.doctoralia}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-[44px] items-center gap-2 text-[0.9375rem] text-on-dark transition-colors hover:text-accent-on-dark focus-visible:outline-accent-on-dark"
                  >
                    <ArrowUpRight size={16} aria-hidden="true" />
                    Doctoralia
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </Reveal>

        <div className="mt-14 flex flex-col gap-4 border-t border-[var(--dark-border)] pt-6 text-[0.8125rem] text-on-dark-2 md:flex-row md:items-center md:justify-between">
          <p>
            © {year} {doctor.name}. La información de este sitio proviene de su perfil público en Doctoralia.
          </p>
          <p>
            Hecho por{' '}
            <a
              href="https://veltstudio.tech"
              target="_blank"
              rel="noopener noreferrer"
              className="text-on-dark underline decoration-1 underline-offset-4 transition-colors hover:text-accent-on-dark focus-visible:outline-accent-on-dark"
            >
              Velt Studio
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
