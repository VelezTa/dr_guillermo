# Dr. Guillermo Forero González — sitio web

Página web de una sola vista para el Dr. Guillermo Forero González, ortopedista y traumatólogo en El Poblado, Medellín.

Toda la información publicada proviene de su perfil público en Doctoralia
(https://www.doctoralia.co/perfil/guillermo-forero-gonzalez-2) y del Instagram enlazado desde ese perfil.
Los datos viven en `src/data/doctor.ts` y las opiniones (transcritas textualmente) en `src/data/reviews.ts`.

## Stack

- Vite 8 + React 19 + TypeScript
- Tailwind CSS 4 (tokens de diseño en `src/index.css`, especificación en `DESIGN.md`)
- `motion` (Framer Motion) para las animaciones
- `lucide-react` para iconografía

## Comandos

```bash
npm install
```

```bash
npm run dev
```

```bash
npm run build
```

```bash
npm run preview
```

```bash
npm run lint
```

## Dominio de producción (SEO)

Al compilar, define `VITE_SITE_URL` con el dominio final para generar `sitemap.xml`, la línea `Sitemap:` de `robots.txt`,
la etiqueta `canonical` y las URLs absolutas de Open Graph:

```bash
VITE_SITE_URL=https://tu-dominio.com npm run build
```

Sin esa variable el build funciona igual, pero no se genera `sitemap.xml` y las imágenes de Open Graph quedan con ruta relativa.

## Estructura

```
src/
  data/doctor.ts        Datos verificados (especialidad, formación, consultorio, teléfono, enlaces, FAQ)
  data/reviews.ts       Opiniones reales de Doctoralia
  lib/motion.ts         Curvas, duraciones y variantes compartidas
  components/ui/        Reveal, SplitWords, Marquee, SectionHeader, Button
  components/           Header, Hero, AreasBand, Specialties, Training, Reviews, Office, Faq, Footer
  index.css             Tokens, tipografía, componentes base, reduced-motion
public/
  images/               Fotografía del doctor (530×530, origen: Doctoralia)
  favicon.svg, apple-touch-icon.png
```

Hecho por [Velt Studio](https://veltstudio.tech).
