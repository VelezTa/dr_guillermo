# DESIGN.md — Dr. Guillermo Forero González

> Consultorio de ortopedia en luz de mañana: una página blanca y serena en la que una sola palabra en cobre, escrita en serif, sostiene todo el mensaje.

Fuentes de contenido: perfil público en Doctoralia (única fuente de datos) e Instagram enlazado desde ese perfil. Referencia estructural: Grove AI (Refero Styles). Referencia de movimiento y opiniones: InnerDerma.

## 1. Visual Theme & Atmosphere

**Style**: Editorial clínico cálido (Clinical Editorial, Warm)
**Keywords**: credibilidad, calma, estructura, humano, preciso, sobrio, movimiento
**Tone**: revista médica bien financiada, cercana y clara — NOT plantilla de clínica, NOT azul hospitalario, NOT tarjetas apiladas
**Feel**: una hoja de papel de buen gramaje sobre la que alguien explica con calma qué le pasa a tu rodilla.

**Interaction Tier**: L2 (flujo suave: reveal por scroll, parallax leve, navegación que cambia, marquee de opiniones, menú móvil animado)
**Dependencies**: React + `motion` (Framer Motion) + CSS. Sin GSAP, sin Lenis, sin WebGL.

Decisión de paleta: la especialidad confirmada es **Ortopedia y Traumatología** (rodilla, artroscopia, cirugía de mano, traumatología deportiva). Se evita el azul/verde médico genérico. El acento es un **cobre óseo** profundo — hueso, madera, calor humano y energía deportiva sin leerse como alarma — sobre un lienzo blanco cálido con una única capa gris-cálida para agrupar contenido. La sección de opiniones invierte a un fondo casi negro cálido, siguiendo la referencia InnerDerma.

## 2. Color Palette & Roles

```css
:root {
  /* Backgrounds */
  --bg: #fbfaf7;            /* lienzo de página, blanco cálido */
  --surface: #f1efe9;       /* única capa gris-cálida (tarjetas, franjas) */
  --surface-alt: #e9e6de;   /* segunda tonalidad para separadores de bloque */
  --surface-hover: #ebe8e0;

  /* Dark section (opiniones) */
  --dark: #1c1a17;
  --dark-2: #26231f;
  --dark-border: rgba(255, 255, 255, 0.1);
  --dark-surface: rgba(255, 255, 255, 0.035);
  --on-dark: #f4f1ea;
  --on-dark-2: rgba(244, 241, 234, 0.72);

  /* Borders */
  --border: #ddd9d0;
  --border-strong: #17191c;

  /* Text */
  --ink: #17191c;           /* titulares, texto principal */
  --ink-2: #3a3d42;         /* cuerpo, descripciones */
  --ink-3: #62656b;         /* metadatos (AA sobre --bg: 5.6:1) */

  /* Accent — cobre óseo */
  --accent: #8e4f27;        /* AA sobre --bg: 6.1:1 */
  --accent-hover: #74401f;
  --accent-soft: #f3e6dc;   /* fondo de píldoras muy tenue */

  /* RGB helpers */
  --bg-rgb: 251, 250, 247;
  --ink-rgb: 23, 25, 28;
  --accent-rgb: 142, 79, 39;
  --dark-rgb: 28, 26, 23;

  /* Semantic */
  --success: #2f6b4f;
  --error: #a33a2e;
  --warning: #b07a1f;
}
```

**Color Rules**
- Todos los colores se referencian por variable. Cero hex en componentes.
- El cobre tiene tres trabajos: la palabra clave del titular serif, las etiquetas en versalitas y los iconos direccionales. Nunca es relleno de botón grande ni fondo de sección.
- El botón principal es oscuro (`--ink`), el secundario es contorno. Es el par canónico en todas las secciones.
- Solo existe una capa de superficie clara (`--surface`). Las tarjetas nunca son blanco sobre blanco.
- La sección oscura usa `--dark` con bordes al 10 % y superficies al 3,5 % de blanco.

## 3. Typography Rules

```css
@import url('https://fonts.googleapis.com/css2?family=Geist:wght@400;500;600&family=Libre+Caslon+Text:ital,wght@0,400;0,700;1,400&display=swap');
```

| Role | Font | Size | Weight | Line Height | Letter Spacing |
|------|------|------|--------|-------------|----------------|
| Hero H1 | Libre Caslon Text | clamp(2.75rem, 7.2vw, 5.75rem) | 400 | 1.06 | -0.011em |
| Section H2 | Libre Caslon Text | clamp(2rem, 4vw, 3rem) | 400 | 1.12 | -0.01em |
| H3 | Libre Caslon Text | 1.5rem–1.75rem | 400 | 1.25 | 0 |
| Subhead | Geist | 1.125rem–1.25rem | 500 | 1.35 | -0.017em |
| Body | Geist | 1rem–1.0625rem | 400 | 1.6 | -0.004em |
| Label / eyebrow | Geist | 0.75rem | 500 | 1.5 | 0.1em, uppercase |
| Quote (opiniones) | Libre Caslon Text | 1.125rem–1.25rem | 400 | 1.45 | 0 |
| Stat | Geist | 2rem–2.5rem | 600 | 1.1 | -0.028em |

**Typography Rules**
- El serif solo vive en titulares, cifras de años y citas. Nunca en botones, navegación ni cuerpo.
- La palabra clave del H1 va en serif *itálica* y color `--accent`; el resto del titular queda en `--ink`.
- Cuerpo alineado a la izquierda, ancho máximo 56ch (≈ 560 px).
- **NEVER use**: Inter como display, Playfair Display, Montserrat, Roboto, fuentes del sistema como fallback único.

**Text Decoration**
- H1: sin degradado, sin sombra (estilo contenido). El énfasis es cambio de color y cursiva.
- H2: sin decoración. Eyebrow con línea corta de 32 px en `--accent` a la izquierda.
- Cuerpo: ninguna decoración.

## 4. Component Stylings

### Buttons
```css
.btn { display:inline-flex; align-items:center; gap:.5rem; min-height:48px; padding:0 1.5rem;
  border-radius:9999px; font:500 .9375rem/1 'Geist',sans-serif; letter-spacing:-.005em;
  transition:transform .25s cubic-bezier(.22,1,.36,1), background-color .2s, color .2s, border-color .2s, box-shadow .2s; }
.btn-primary { background:var(--ink); color:var(--bg);
  box-shadow: inset 0 1px 0 rgba(255,255,255,.14), 0 1px 2px rgba(var(--ink-rgb),.18); }
.btn-primary:hover { background:#000; transform:translateY(-1px); }
.btn-primary:active { transform:translateY(0) scale(.98); box-shadow:none; }
.btn-secondary { background:transparent; color:var(--ink); border:1px solid var(--border-strong); }
.btn-secondary:hover { background:var(--surface); }
.btn-secondary:active { transform:scale(.98); }
.btn:focus-visible { outline:2px solid var(--accent); outline-offset:3px; }
.btn[aria-disabled="true"], .btn:disabled { opacity:.45; pointer-events:none; }
.btn .icon { transition: transform .3s cubic-bezier(.22,1,.36,1); }
.btn:hover .icon { transform: translateX(3px); }
/* En fondo oscuro */
.btn-on-dark { background:var(--on-dark); color:var(--dark); }
```

### Cards (única capa)
```css
.card { background:var(--surface); border-radius:20px; padding:24px; border:1px solid transparent;
  transition: border-color .2s, transform .35s cubic-bezier(.22,1,.36,1); }
.card:hover { border-color:var(--border); }
.card:focus-within { outline:2px solid var(--accent); outline-offset:2px; }
.card-lg { border-radius:24px; padding:32px; }
/* Tarjeta de opinión (sección oscura) */
.review-card { width:21rem; padding:24px; border-radius:16px;
  background:var(--dark-surface); border:1px solid var(--dark-border); }
```

### Navigation
```css
.nav { position:fixed; inset:0 0 auto 0; z-index:50; padding:14px 0;
  background:transparent; border-bottom:1px solid transparent;
  transition: background-color .35s, border-color .35s, padding .35s, box-shadow .35s; }
.nav.is-scrolled { background:rgba(var(--bg-rgb),.85); backdrop-filter:blur(12px);
  border-bottom-color:var(--border); padding:10px 0; }
.nav-link { font:500 .9375rem/1 'Geist'; color:var(--ink-2); position:relative; }
.nav-link::after { content:''; position:absolute; left:0; bottom:-6px; height:1px; width:100%;
  background:var(--ink); transform:scaleX(0); transform-origin:left; transition:transform .3s cubic-bezier(.22,1,.36,1); }
.nav-link:hover::after, .nav-link:focus-visible::after, .nav-link[aria-current="true"]::after { transform:scaleX(1); }
```

### Links
```css
.link { color:var(--accent); text-decoration:underline; text-underline-offset:4px; text-decoration-thickness:1px;
  transition:color .2s, text-decoration-color .2s; }
.link:hover { color:var(--accent-hover); }
.link:focus-visible { outline:2px solid var(--accent); outline-offset:3px; border-radius:2px; }
```

### Tags / Badges
```css
.tag { display:inline-flex; align-items:center; min-height:36px; padding:0 14px; border-radius:9999px;
  border:1px solid var(--border); color:var(--ink-2); font:400 .875rem/1 'Geist';
  transition:border-color .2s, color .2s, background-color .2s; }
.tag:hover { border-color:var(--ink); color:var(--ink); }
.eyebrow { display:inline-flex; align-items:center; gap:12px; font:500 .75rem/1.5 'Geist';
  letter-spacing:.1em; text-transform:uppercase; color:var(--accent); }
.eyebrow::before { content:''; width:32px; height:1px; background:currentColor; }
.pill-outline { border:1px solid var(--accent); color:var(--accent); border-radius:9999px; padding:8px 16px;
  font:500 .75rem/1 'Geist'; letter-spacing:.1em; text-transform:uppercase; }
```

### Accordion (FAQ)
```css
.faq-item { border-top:1px solid var(--border); }
.faq-trigger { width:100%; display:flex; justify-content:space-between; gap:24px; padding:22px 0; text-align:left;
  font:400 1.25rem/1.3 'Libre Caslon Text', serif; color:var(--ink); }
.faq-trigger:hover { color:var(--accent); }
.faq-trigger:focus-visible { outline:2px solid var(--accent); outline-offset:4px; }
.faq-trigger[aria-expanded="true"] .chevron { transform:rotate(45deg); }
```

## 5. Layout Principles

**Container**
- Max width: 1200px (`--container`), padding lateral 24px móvil / 40px tablet / 48px escritorio.
- Columna de lectura: 560px.

**Spacing Scale** (base 4px)
- Section padding: 96px escritorio / 72px tablet / 56px móvil.
- Component gap: 24px.
- Card padding: 24px (32px en tarjetas grandes).
- Element gap: 10–12px.

**Grid**
```css
.grid-editorial { display:grid; grid-template-columns: 5fr 7fr; gap:64px; align-items:start; }
.grid-hero { display:grid; grid-template-columns: 1.1fr .9fr; gap:56px; align-items:center; min-height:calc(100svh - 80px); }
@media (max-width: 1023px) { .grid-editorial, .grid-hero { grid-template-columns:1fr; gap:40px; } }
```

Separación de secciones por **cambio de fondo y ritmo**, no por cajas: lienzo → franja marquee → lienzo con líneas finas → superficie gris cálida → oscuro → lienzo → superficie → pie oscuro.

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat | sin sombra, borde hairline `--border` | listas, timeline, tags |
| Subtle | `0 0 0 1px rgba(0,0,0,.06), 0 1px 2px rgba(0,0,0,.06)` | tarjeta del hero, mapa |
| Elevated | `0 12px 32px -16px rgba(var(--ink-rgb),.25)` | menú móvil, tarjeta flotante sobre la foto |
| Inset | `inset 0 1px 0 rgba(255,255,255,.14)` | botón oscuro |

Nada supera 32px de blur. Nunca sombras de color.

## 7. Animation & Interaction

**Motion Philosophy**: elegante y rápida; solo `transform` y `opacity`; cada sección entra una vez y se queda.
**Tier**: L2

### Base Setup (motion / React)
```ts
export const EASE = [0.22, 1, 0.36, 1] as const;   // expo-out suave (referencia InnerDerma ≈ .7s)
export const DUR = { fast: 0.35, base: 0.7, slow: 1 };
export const viewport = { once: true, margin: '0px 0px -12% 0px' };
```

### Entrance Animation (hero, carga)
- Líneas del H1: máscara por línea, `y: 110% → 0`, 0.9s, stagger 90ms, delay 0.1s.
- Eyebrow / subtítulo / CTAs: `opacity 0→1, y 18→0`, 0.7s, stagger 100ms desde 0.35s.
- Tarjeta de foto: `opacity 0→1, y 28→0, scale .98→1`, 1s, delay 0.25s.

### Scroll Behavior
- `Reveal`: `opacity 0→1, y 24→0`, 0.7s, ease EASE, `viewport once`. Contenedores con stagger 80–100ms.
- `SplitWords` para H2: palabras suben `y: 100% → 0` con máscara, 0.75s, stagger 45ms.
- Parallax: la tarjeta del hero se desplaza `y: 0 → -40px` a lo largo del primer 100vh (`useScroll` + `useTransform`), solo si no hay reduced-motion.
- Navegación: al superar 24px de scroll, fondo translúcido + blur + borde.
- Marquee de opiniones: dos filas en direcciones opuestas, `translateX(0 → -50%)`, lineal, ~48px/s (300s por fila), pausa en hover/focus y con botón «Pausar».
- Marquee de áreas: `translateX(0 → -50%)`, 40s lineal.

### Hover & Focus States
- Botones: elevación 1px + flecha desliza 3px. Active: scale .98.
- Enlaces de navegación: subrayado que crece desde la izquierda.
- Tags: borde pasa a `--ink`.
- Tarjeta de opinión: borde al 22 % de blanco.
- `:focus-visible` global: `outline 2px solid var(--accent); outline-offset 3px`.

### Special Effects
- Fondo del hero: un único halo radial cobre al 10 % en la esquina superior derecha y una textura de grano SVG al 3,5 % sobre todo el lienzo. Nada de degradados multicolor.
- Menú móvil: panel desliza desde arriba (`y -8 → 0, opacity`), enlaces con stagger 60ms.
- FAQ: altura animada con `AnimatePresence`, 0.35s.

### Reduced Motion
```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after { animation-duration: .01ms !important; animation-iteration-count: 1 !important;
    transition-duration: .01ms !important; scroll-behavior: auto !important; }
  .marquee-track { animation: none !important; transform: none !important; }
}
```
En React, `useReducedMotion()` desactiva parallax, máscaras de texto y stagger: todo aparece visible de inmediato.

## 8. Do's and Don'ts

### Do
- Mostrar solo información publicada en Doctoralia o en el Instagram enlazado desde ese perfil.
- Titulares en serif con una única palabra en cobre; todo lo demás monocromo.
- Separar secciones con cambios de fondo, líneas finas y ritmo tipográfico.
- Mantener el par de CTAs oscuro + contorno en hero, consultorio y pie.
- Un solo nivel de superficie clara; tarjetas solo donde agrupan contenido real (foto del hero, opiniones, mapa).
- Todas las animaciones con `transform`/`opacity`, una vez, y con degradación para reduced-motion.
- Objetivos táctiles ≥ 44px; contraste AA en todo texto.

### Don't
- ❌ Inventar experiencia, cifras, horarios, WhatsApp, redes o testimonios.
- ❌ Usar azul/verde hospitalario, degradados multicolor o «glow» decorativo.
- ❌ Convertir servicios o formación en una cuadrícula de tarjetas iguales.
- ❌ Iconos dentro de círculos repetidos por toda la página.
- ❌ Sombras de más de 32px de blur o sombras de color.
- ❌ Radios entre 14px y 18px: solo 8/12px (elementos), 16/20/24px (tarjetas), 9999px (píldoras).
- ❌ Texto gris con contraste menor a 4.5:1.
- ❌ Botones sin destino real o calendarios simulados.
- ❌ Animaciones que bloqueen la lectura, superen 1s o usen `filter: blur()` en movimiento.
- ❌ Centrar párrafos de cuerpo por debajo del hero.

## 9. Responsive Behavior

| Name | Width | Key Changes |
|------|-------|-------------|
| Desktop XL | ≥ 1440px | contenedor 1200px, H1 92px, hero 2 columnas 1.1/0.9 |
| Desktop | 1024–1439px | H1 ≈ 72–84px, mismas columnas |
| Tablet | 768–1023px | hero en una columna (texto arriba, foto máx. 440px), secciones editoriales en una columna, nav completa hasta 1023px se compacta a menú |
| Mobile | 375–767px | H1 44–52px, padding 24px, CTAs a ancho completo, marquee de opiniones con tarjetas 19rem, mapa a 320px de alto |
| Small mobile | < 375px | H1 40px, eyebrow 11px, botones apilados |

**Touch Targets**: mínimo 44×44px.
**Collapsing Strategy**: nav → botón «Menú» animado (< 1024px) con panel a pantalla completa; timeline pasa de dos columnas (año | texto) a apilada; tags de condiciones en flujo; el pie pasa de 3 columnas a 1.

```css
@media (max-width: 1023px) {
  .grid-hero { min-height: auto; padding-top: 112px; }
  .hero-card { max-width: 440px; }
}
@media (max-width: 767px) {
  .btn { width: 100%; justify-content: center; }
  .review-card { width: 19rem; }
}
```
