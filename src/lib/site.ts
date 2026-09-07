export const site = {
  name: 'Blue Red Saneamientos',
  shortName: 'Blue Red',
  legalName: 'Blue Red de Saneamientos, S.L.',
  cif: 'B86112745',
  url: 'https://blueredsaneamiento.net',
  phone: '917056515',
  phoneDisplay: '91 705 65 15',
  email: 'info@blueredsaneamiento.net',
  whatsapp: '34917056515',
  address: {
    street: 'Calle Trigo 1, Nave 9',
    city: 'Leganés',
    region: 'Madrid',
    country: 'España',
    postalCode: '28914',
    mapsQuery: 'C. del Trigo, 1, Nave 9, 28914 Leganés, Madrid',
  },
  hours: '24 horas / 365 días',
  experience: 'Más de 15 años',
} as const;

export const nav = [
  { href: '/servicios', label: 'Servicios' },
  { href: '/quienes-somos', label: '¿Quiénes somos?' },
  { href: '/blog', label: 'Blog' },
  { href: '/contacto', label: 'Contacto' },
] as const;

export const telHref = `tel:+34${site.phone}`;

export const mapsHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(site.address.mapsQuery)}`;

export const mapsEmbedSrc = `https://maps.google.com/maps?q=${encodeURIComponent(site.address.mapsQuery)}&hl=es&z=16&output=embed`;

export function whatsappHref(text?: string) {
  const base = `https://wa.me/${site.whatsapp}`;
  return text ? `${base}?text=${encodeURIComponent(text)}` : base;
}

export const reviews = [
  {
    quote: 'Muy buena experiencia. Realizaron los trabajos en mi comunidad y todo fue genial.',
    source: 'Google',
    stars: 5,
  },
  {
    quote:
      'En mi comunidad les llamaron para el desatasco de una bajante y el vaciado de un foso de ascensor. Vinieron rápido y lo solucionaron en el tiempo indicado. Bastante contentos con los trabajos y el trato del personal.',
    source: 'Google',
    stars: 5,
  },
  {
    quote:
      'Han trabajado en mi casa y he quedado encantado. Muy profesionales y limpios. Evitaron una obra mayor con sus técnicas de trabajo. Les recomendaré siempre que pueda.',
    source: 'Google',
    stars: 5,
  },
  {
    quote: 'Colaboradores excelentes, eficaces, rápidos y limpios. Los recomiendo siempre para trabajos de saneamiento.',
    source: 'Google',
    stars: 5,
  },
] as const;

