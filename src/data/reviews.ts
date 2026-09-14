/**
 * Opiniones reales, transcritas textualmente del perfil del doctor en Doctoralia
 * (https://www.doctoralia.co/perfil/guillermo-forero-gonzalez-2). Todas están marcadas
 * allí como «Cita verificada». No se han editado, combinado ni corregido.
 */
export interface Review {
  author: string
  date: string // ISO
  text: string
}

export const reviews: Review[] = [
  {
    author: 'MICC',
    date: '2026-09-11',
    text: 'Excelente el trato, explicación detallada, gran servicio humano',
  },
  {
    author: 'Tatiana Mesa',
    date: '2026-09-03',
    text: 'Antes de ver al doctor Forero me había visto otro especialista, me recomendó cirugía en las dos rodillas. El doctor Forero me recomendó un tratamiento conservador que mejoró muchísimo el dolor que llevaba 4 años atras, excelente experiencia.',
  },
  {
    author: 'Carlos Izaza',
    date: '2026-09-02',
    text: 'Muy bien explicado todo. Muy cercano. Buen conocimiento y acertivo en el diagnóstico.',
  },
  {
    author: 'Vf',
    date: '2026-08-26',
    text: 'Acudí al doctor Forero con un intenso dolor de cadera, el doctor No sólo proporcionó alivio al dolor inmediato, pero también un plan claro de acción para detectar la razón y el tratamiento. Me sentí escuchada.',
  },
  {
    author: 'Amparo Hernández de López',
    date: '2026-08-26',
    text: 'Muy atento y claro con su atención de acuerdo ala enfermedad gracias',
  },
  {
    author: 'Gerardo Arias E',
    date: '2026-08-21',
    text: 'Muy claro en sus explicaciones y muy profesional . Tiene buen sentido del humor y humanidad con el paciente.',
  },
  {
    author: 'PACP',
    date: '2026-08-14',
    text: 'Muy dedicado y profesional. Buena comunicación y conocimiento',
  },
  {
    author: 'Yeison Martínez',
    date: '2026-08-03',
    text: 'Gran profesional. Con una gran calidad humana. Muy contento con la explicación',
  },
  {
    author: 'Me',
    date: '2026-07-30',
    text: 'Excelente atención , fue muy claro en su criterio médico',
  },
  {
    author: 'Alex',
    date: '2026-07-27',
    text: 'Excelente mucho conocimiento y explicación al paciente',
  },
  {
    author: 'Blanca Gloria Rendón Castaño',
    date: '2026-07-24',
    text: 'Excelente manejo profesional. Satisfacción total. Todo bien',
  },
  {
    author: 'victor acosta',
    date: '2026-07-23',
    text: 'Excelente servicio y atención después de muchos meses de buscar ayuda aquí encontré lo que realmente necesitaba',
  },
  {
    author: 'GLB',
    date: '2026-07-18',
    text: 'Doctor muy familiar. Quedé muy satisfecha con la consulta. Fué muy claro con sus explicaciones',
  },
  {
    author: 'Sofía A',
    date: '2026-07-16',
    text: 'El Dr es excelente, súper profesional y el trato es increíble!',
  },
  {
    author: 'M.A',
    date: '2026-07-11',
    text: 'Muy buena atención y explicación clara, las instalaciones limpias y ordenadas.',
  },
  {
    author: 'jaime g.',
    date: '2026-06-23',
    text: 'muy atento el doctor y explica muy bien el tratamiento',
  },
  {
    author: 'Eliana Suárez',
    date: '2026-06-20',
    text: 'Me escucha con atención , está actualizado con los nuevos tratamientos , es una persona muy sabia , me genera mucha paz y confianza',
  },
  {
    author: 'Juan Rua',
    date: '2026-06-13',
    text: 'Muy profesional el médico y tratamiento pertinente',
  },
  {
    author: 'Beatriz Herrera',
    date: '2026-06-06',
    text: 'Escucha al paciente que lo mas importante y receta muy muy bien gracias',
  },
  {
    author: 'Jpg',
    date: '2026-06-03',
    text: 'Muy buena atención y muy claro en sus apreciaciones.',
  },
  {
    author: 'Monica Aguirre',
    date: '2026-05-05',
    text: 'Es un excelente ortopedista. Ademas de la maravillosa atención brinda elementos que ayudan a conprender el diagnostico y elementos para cuidar el cuerpo con habitos de la vida cotidiana.',
  },
  {
    author: 'Lina María Acosta',
    date: '2026-05-05',
    text: 'Excelente. Muy buenas explicaviones y recomendaciones.',
  },
  {
    author: 'Gloria palacio',
    date: '2026-04-23',
    text: 'Calidad humana y su conocimiento profesional y sus consejos',
  },
  {
    author: 'jose',
    date: '2026-04-08',
    text: 'Muy correcta la explicación, muy acertivo en todo. Muy bien.',
  },
]
