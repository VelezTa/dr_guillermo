import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import { ArrowUpRight, X, Menu } from 'lucide-react'
import { doctor, navItems } from '../data/doctor'
import { EASE } from '../lib/motion'

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState<string>('')
  const firstLinkRef = useRef<HTMLAnchorElement>(null)
  const toggleRef = useRef<HTMLButtonElement>(null)
  const reduce = useReducedMotion()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Sección activa para aria-current
  useEffect(() => {
    const sections = navItems
      .map((item) => document.querySelector<HTMLElement>(item.href))
      .filter((el): el is HTMLElement => el !== null)
    if (sections.length === 0) return
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)
        if (visible[0]) setActive(`#${visible[0].target.id}`)
      },
      { rootMargin: '-40% 0px -50% 0px', threshold: [0, 0.2, 0.5] },
    )
    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  // Menú móvil: bloquear scroll, cerrar con Escape, gestionar foco
  useEffect(() => {
    if (!open) return
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    const toggle = toggleRef.current
    const t = window.setTimeout(() => firstLinkRef.current?.focus(), 60)
    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', onKey)
      window.clearTimeout(t)
      toggle?.focus()
    }
  }, [open])

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 1024px)')
    const close = () => {
      if (mq.matches) setOpen(false)
    }
    mq.addEventListener('change', close)
    return () => mq.removeEventListener('change', close)
  }, [])

  return (
    <>
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,padding,box-shadow] duration-300 ${
        scrolled || open
          ? 'bg-[rgba(var(--bg-rgb),0.86)] backdrop-blur-md border-b border-border py-2.5'
          : 'bg-transparent border-b border-transparent py-4'
      }`}
    >
      <div className="container-x flex items-center justify-between gap-6">
        <a href="#inicio" className="group flex items-center gap-3 rounded-full focus-visible:outline-2" aria-label={`${doctor.name}, ir al inicio`}>
          <span className="flex size-10 items-center justify-center rounded-full bg-ink font-serif text-[1.05rem] italic leading-none text-bg" aria-hidden="true">
            F
          </span>
          <span className="leading-tight">
            <span className="block font-serif text-[1.05rem] text-ink">{doctor.shortName}</span>
            <span className="block text-[0.6875rem] font-medium uppercase tracking-[0.12em] text-ink-3">{doctor.specialty}</span>
          </span>
        </a>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Secciones">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="nav-link" aria-current={active === item.href ? 'true' : undefined}>
              {item.label}
            </a>
          ))}
        </nav>

        <button
          ref={toggleRef}
          type="button"
          className="btn btn-secondary min-h-[44px] px-4 text-sm lg:hidden"
          aria-expanded={open}
          aria-controls="menu-movil"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={18} aria-hidden="true" /> : <Menu size={18} aria-hidden="true" />}
          <span>{open ? 'Cerrar' : 'Menú'}</span>
        </button>
      </div>

    </header>
      <AnimatePresence>
        {open ? (
          <motion.div
            id="menu-movil"
            className="fixed inset-x-0 top-[64px] bottom-0 z-40 overflow-y-auto border-t border-border bg-bg lg:hidden"
            initial={reduce ? { opacity: 1 } : { opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduce ? { opacity: 1 } : { opacity: 0, y: -8 }}
            transition={{ duration: 0.35, ease: EASE }}
          >
            <nav className="container-x flex min-h-full flex-col py-8" aria-label="Secciones">
              <ul className="flex flex-col">
                {navItems.map((item, i) => (
                  <motion.li
                    key={item.href}
                    className="border-b border-border"
                    initial={reduce ? false : { opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: EASE, delay: 0.08 + i * 0.06 }}
                  >
                    <a
                      ref={i === 0 ? firstLinkRef : undefined}
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="flex items-center justify-between py-5 font-serif text-[1.75rem] text-ink transition-colors hover:text-accent"
                      aria-current={active === item.href ? 'true' : undefined}
                    >
                      {item.label}
                      <ArrowUpRight size={20} className="text-ink-3" aria-hidden="true" />
                    </a>
                  </motion.li>
                ))}
              </ul>
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  )
}
