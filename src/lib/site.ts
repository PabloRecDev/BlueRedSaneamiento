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
    name: 'Jose Maria Garcia',
    quote:
      'El personal muy profesional el técnico impecable en su trabajo ojalá todas las empresas fueran iguales. Nos iría mejor.',
    source: 'Google',
    stars: 5,
  },
  {
    name: 'Lea Duarte',
    quote: 'Han tenido las tecnicas más adecuadas para la solucion de las continuas humedades que teníamos',
    source: 'Google',
    stars: 5,
  },
  {
    name: 'Eros Aguilar Ferrer',
    quote: 'Me los recomendaron para un atasco inundado y lo arreglaron todo',
    source: 'Google',
    stars: 5,
  },
  {
    name: 'Almudena Aguirre',
    quote: 'Solucionaron un problema de la bajante de la comunidad y sin provocar ninguna molestia.',
    source: 'Google',
    stars: 5,
  },
  {
    name: 'Jano Ferreyra Valdez',
    quote:
      'La mejor empresa para desatascos, desde que llamamos y resolvieron todo en una mañana estaba hecho.',
    source: 'Google',
    stars: 5,
  },
  {
    name: 'Consuelo Fuentes',
    quote: 'Por una recomentación, empecé a trabajar con ellos y ha sido una gran elección',
    source: 'Google',
    stars: 5,
  },
  {
    name: 'Larissa Diez',
    quote: 'Empresa excelente para trabajos de desatrancos en Madrid',
    source: 'Google',
    stars: 5,
  },
] as const;

