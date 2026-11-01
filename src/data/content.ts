// Todo el contenido de la landing vive aquí.
// Cambia estos textos para reutilizar el sitio con otra empresa.

export const site = {
  name: 'Talentia',
  fullName: 'Talentia Consulting',
  title: 'Talentia Consulting | Recursos Humanos para tu empresa',
  description:
    'Somos el área de Recursos Humanos de tu empresa: reclutamiento, nómina, capacitación y clima laboral. Tú diriges, nosotros nos encargamos de tu gente.',
};

export const nav = {
  links: [
    { label: 'Servicios', href: '#servicios' },
    { label: 'Cómo empezamos', href: '#proceso' },
    { label: 'Resultados', href: '#resultados' },
  ],
  cta: { label: 'Agendar consulta', href: '#contacto' },
};

export const hero = {
  title: 'Tú diriges la empresa. Nosotros nos encargamos de tu gente.',
  subtitle:
    'Somos el área de Recursos Humanos de empresas que todavía no tienen una, o que ya no se dan abasto. Reclutamos, pagamos la nómina y cuidamos el clima laboral por ti.',
  primaryCta: { label: 'Agendar consulta gratuita', href: '#contacto' },
  secondaryCta: { label: 'Ver servicios', href: '#servicios' },
};

// Organigrama animado del hero: cada puesto empieza como "Vacante" y se cubre.
export const orgChart = {
  head: { title: 'Dirección', name: 'Tú' },
  caption: 'Así armamos el equipo de Grupo Nova: 6 puestos cubiertos en 30 días.',
  departments: [
    {
      name: 'Finanzas',
      people: [
        { name: 'Laura Méndez', role: 'Contadora general' },
        { name: 'Diego Ruiz', role: 'Auxiliar contable' },
      ],
    },
    {
      name: 'Operación',
      people: [
        { name: 'Sofía Pardo', role: 'Jefa de almacén' },
        { name: 'Iván Torres', role: 'Coordinador de rutas' },
      ],
    },
    {
      name: 'Ventas',
      people: [
        { name: 'Paola Gil', role: 'Ejecutiva de cuenta' },
        { name: 'Marco Salas', role: 'Vendedor de piso' },
      ],
    },
  ],
};

export const services = {
  title: 'Lo que dejas de hacer tú',
  subtitle: 'Contrata un servicio suelto o todo el paquete. Tú decides cuánto delegar.',
  items: [
    {
      title: 'Reclutamiento y selección',
      description:
        'Publicamos la vacante, filtramos candidatos y te presentamos tres finalistas en un promedio de 18 días.',
      includes: ['Pruebas psicométricas', 'Entrevistas por competencias', 'Reemplazo sin costo durante 90 días'],
    },
    {
      title: 'Nómina',
      description: 'Calculamos y pagamos la nómina cada periodo, con IMSS, ISR e Infonavit al día.',
      includes: ['Recibos timbrados (CFDI)', 'Altas y bajas en el IMSS', 'Finiquitos y liquidaciones'],
    },
    {
      title: 'Capacitación',
      description: 'Detectamos qué le falta a tu equipo y diseñamos cursos que se aplican al día siguiente.',
      includes: ['Diagnóstico de necesidades', 'Cursos presenciales y en línea', 'Constancias DC-3'],
    },
    {
      title: 'Clima laboral',
      description: 'Medimos cómo se siente tu equipo y te decimos qué cambiar antes de que alguien renuncie.',
      includes: ['Encuesta NOM-035', 'Entrevistas de salida', 'Plan de acción trimestral'],
    },
    {
      title: 'Administración de personal',
      description: 'Expedientes, vacaciones, incidencias y contratos en un solo lugar y siempre actualizados.',
      includes: ['Expediente digital por colaborador', 'Control de vacaciones e incidencias', 'Reglamento interior de trabajo'],
    },
    {
      title: 'Cumplimiento legal',
      description: 'Revisamos contratos y políticas para que una inspección de la STPS no te tome por sorpresa.',
      includes: ['Auditoría laboral', 'Contratos individuales', 'Acompañamiento en inspecciones'],
    },
  ],
};

export const process = {
  title: 'Cómo empezamos',
  subtitle: 'En seis semanas tu área de Recursos Humanos queda funcionando.',
  steps: [
    {
      when: 'Semana 1',
      title: 'Diagnóstico',
      description: 'Nos reunimos contigo y revisamos tu plantilla, tus contratos y tu nómina actual.',
    },
    {
      when: 'Semana 2',
      title: 'Propuesta',
      description: 'Te entregamos un plan con lo que haremos, cuánto cuesta y qué cambia para ti.',
    },
    {
      when: 'Semanas 3 a 6',
      title: 'Implementación',
      description: 'Tomamos los procesos uno por uno, sin frenar la operación de tu empresa.',
    },
    {
      when: 'Cada mes',
      title: 'Seguimiento',
      description: 'Recibes un reporte con rotación, tiempos de contratación y costo de nómina.',
    },
  ],
};

export const results = {
  title: 'Resultados de nuestros clientes',
  subtitle: 'Más de 150 empresas en México ya delegaron su área de Recursos Humanos con nosotros.',
  items: [
    {
      metric: '18 días',
      metricLabel: 'para cubrir cada vacante. Antes tardaban 40.',
      quote: 'El equipo de Talentia entendió desde la primera reunión qué perfil buscábamos.',
      name: 'Mariana López',
      role: 'Directora general de Grupo Nova',
    },
    {
      metric: '0 errores',
      metricLabel: 'de nómina en 14 meses de trabajo juntos.',
      quote: 'Delegar la nómina nos devolvió dos días al mes que ahora dedicamos a vender.',
      name: 'Carlos Ramírez',
      role: 'Director de Logística Express',
    },
    {
      metric: '40 % menos',
      metricLabel: 'rotación de personal en el primer año.',
      quote: 'La encuesta de clima nos mostró problemas que nadie se atrevía a decirnos.',
      name: 'Andrea Martínez',
      role: 'Gerente de operaciones de TecnoSur',
    },
  ],
};

export const contact = {
  title: 'Cuéntanos de tu equipo',
  subtitle:
    'En una llamada de 30 minutos revisamos tu situación y te decimos qué podemos resolver. La consulta no tiene costo.',
  note: 'Respondemos en menos de 24 horas hábiles.',
  form: {
    submit: 'Agendar consulta',
    successTitle: 'Consulta solicitada',
    success: 'Te escribiremos a {email} en menos de 24 horas hábiles para acordar el horario.',
    sizes: ['De 1 a 10 personas', 'De 11 a 50 personas', 'De 51 a 200 personas', 'Más de 200 personas'],
  },
};

export const footer = {
  tagline: 'El área de Recursos Humanos de tu empresa.',
  email: 'hola@talentia.com',
  phone: '+52 55 1234 5678',
  address: 'Ciudad de México',
  socials: [
    { label: 'LinkedIn', href: '#' },
    { label: 'Instagram', href: '#' },
    { label: 'Facebook', href: '#' },
  ],
};
