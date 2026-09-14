/**
 * Todos los datos de este archivo provienen del perfil público del doctor en Doctoralia
 * (https://www.doctoralia.co/perfil/guillermo-forero-gonzalez-2) y del Instagram
 * enlazado desde ese perfil. No hay información inferida ni inventada.
 */

export const doctor = {
  name: 'Dr. Guillermo Forero González',
  shortName: 'Dr. Guillermo Forero',
  firstName: 'Guillermo',
  lastName: 'Forero González',
  specialty: 'Ortopedista y Traumatólogo',
  city: 'Medellín',
  neighborhood: 'El Poblado',
  consultationType: 'Presencial',
  languages: ['Español', 'Inglés', 'Portugués'],
  photo: {
    jpg: '/images/dr-guillermo-forero.jpg',
    webp: '/images/dr-guillermo-forero.webp',
    width: 530,
    height: 530,
    alt: 'Dr. Guillermo Forero González, ortopedista y traumatólogo, sonriendo en su consultorio en Medellín',
  },
} as const

export const links = {
  doctoralia: 'https://www.doctoralia.co/perfil/guillermo-forero-gonzalez-2',
  doctoraliaReviews: 'https://www.doctoralia.co/perfil/guillermo-forero-gonzalez-2#profile-reviews',
  instagram: 'https://www.instagram.com/ortopediaforero/',
  maps: 'https://www.google.com/maps/search/?api=1&query=6.2041516,-75.5767136',
  mapsEmbed: 'https://www.google.com/maps?q=6.2041516,-75.5767136&z=16&hl=es&output=embed',
  velt: 'https://veltstudio.tech',
} as const

export const phone = {
  display: '320 242 1124',
  href: 'tel:+573202421124',
  whatsapp:
    'https://wa.me/573202421124?text=' +
    encodeURIComponent('Hola, doctor Forero. Me gustaría solicitar información para agendar una cita.'),
} as const

export const office = {
  name: 'Consultorio Dr. Guillermo Forero',
  addressLine1: 'Calle 2 Sur 46-159',
  addressLine2: 'Torre Medical Salud Vegas, consultorio 408, piso 4',
  area: 'El Poblado, Medellín 050001',
  coordinates: { lat: 6.2041516, lng: -75.5767136 },
  payment: 'Efectivo',
  paymentNote: 'Formas de pago publicadas para visitas privadas.',
  insurers: ['Coomeva Medicina Prepagada S.A.', 'Empresa de Medicina Integral EMI S.A.S.'],
  insurersNote: 'La cobertura varía según la ubicación y el servicio.',
} as const

export const services = [
  {
    name: 'Visita Ortopedia y Traumatología',
    price: '$ 290.000',
    note: 'Valor publicado en Doctoralia.',
  },
] as const

export const areas = [
  { id: '01', name: 'Rodilla' },
  { id: '02', name: 'Artroscopia' },
  { id: '03', name: 'Cirugía de mano' },
  { id: '04', name: 'Traumatología deportiva' },
] as const

export const conditions = [
  'Trauma',
  'Lesión del Ligamento Cruzado Anterior (LCA)',
  'Osteoartritis',
  'Desgarre de meniscos',
  'Patología del manguito rotador',
  'Condromalacia rotuliana',
  'Luxación de hombro',
  'Esguince del tobillo',
  'Tendinitis',
  'Pie plano',
  'Columna',
] as const

export const training = [
  {
    years: '1990',
    title: 'Médico Cirujano',
    institution: 'Universidad del Bosque',
    place: 'Colombia',
  },
  {
    years: '1992',
    title: 'Especialista en Medicina y Ciencias del Deporte',
    institution: 'Universidad Federal de Rio Grande del Sur',
    place: 'Porto Alegre, Brasil',
  },
  {
    years: '1995',
    title: 'Ortopedista y Traumatólogo',
    institution: 'Hospital San Lucas de la Pontificia Universidad Católica de Rio Grande del Sur',
    place: 'Porto Alegre, Brasil',
  },
  {
    years: '1996',
    title: 'Subespecialista en Cirugía y Artroscopia de Rodilla',
    institution:
      'Instituto de Ortopedia y Traumatología del Hospital de Clínicas de São Paulo, Facultad de Medicina USP',
    place: 'Brasil',
  },
  {
    years: '1997',
    title: 'Mini Fellow en Traumatología del Deporte con el Dr. James Andrews',
    institution: 'Alabama Sports Medicine & Orthopedic Center',
    place: 'Birmingham, Alabama, Estados Unidos',
  },
  {
    years: '1997',
    title: 'Mini Fellow en Traumatología del Deporte, énfasis en Artroscopia de Rodilla, con el Dr. John Uribe',
    institution: 'Miami Health South Hospital, Sports Medicine Department of Jackson Hospital',
    place: 'Estados Unidos',
  },
  {
    years: '1998 – 1999',
    title: 'Cirugía y Microcirugía de Mano con el Dr. Samuel Ribak',
    institution: 'Hospital Nossa Senhora do Pari',
    place: 'São Paulo, Brasil',
  },
] as const

export const reviewsSummary = {
  rating: '5,0',
  count: 163,
  highlights: ['Explicaciones detalladas', 'Dedicación durante la visita', 'Instalaciones excelentes'],
} as const

export const faq = [
  {
    q: '¿Cómo puedo reservar una cita?',
    a: 'A través de su calendario en Doctoralia, que se actualiza en tiempo real: eliges el día y la hora entre los disponibles y recibes un recordatorio antes de la visita. La reserva es gratuita e inmediata.',
  },
  {
    q: '¿Atiende consultas en línea?',
    a: 'No. Por el momento el Dr. Forero ofrece únicamente consulta presencial en su consultorio de El Poblado, Medellín.',
  },
  {
    q: '¿En qué idiomas atiende?',
    a: 'Puedes comunicarte con él en español, inglés y portugués.',
  },
  {
    q: '¿Acepta aseguradoras o medicina prepagada?',
    a: 'En su perfil de Doctoralia figuran Coomeva Medicina Prepagada S.A. y Empresa de Medicina Integral EMI S.A.S. La cobertura varía según la ubicación y el servicio, así que conviene confirmarla al momento de agendar.',
  },
] as const

export const navItems = [
  { href: '#especialidad', label: 'Especialidad' },
  { href: '#formacion', label: 'Formación' },
  { href: '#opiniones', label: 'Opiniones' },
  { href: '#consultorio', label: 'Consultorio' },
  { href: '#preguntas', label: 'Preguntas' },
] as const
