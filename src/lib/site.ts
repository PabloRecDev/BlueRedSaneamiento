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
    quote: 'Empresa excelente para trabajos de desatrancos en Madrid.',
    name: 'Larissa Diez',
  },
  {
    quote:
      'El personal muy profesional, el técnico impecable en su trabajo. Ojalá todas las empresas fueran iguales.',
    name: 'José María García',
  },
  {
    quote:
      'Han tenido las técnicas más adecuadas para la solución de las continuas humedades que teníamos.',
    name: 'Lea Duarte',
  },
  {
    quote: 'Me los recomendaron para un atasco inundado y lo arreglaron todo.',
    name: 'Eros Aguilar Ferrer',
  },
  {
    quote:
      'Solucionaron un problema de la bajante de la comunidad y sin provocar ninguna molestia.',
    name: 'Almudena Aguirre',
  },
  {
    quote:
      'La mejor empresa para desatascos. Desde que llamamos, en una mañana estaba hecho.',
    name: 'Jano Ferreyra Valdez',
  },
  {
    quote: 'Por una recomendación empecé a trabajar con ellos y ha sido una gran elección.',
    name: 'Consuelo Fuentes',
  },
] as const;

