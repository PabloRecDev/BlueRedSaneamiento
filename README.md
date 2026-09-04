# Blue Red Saneamientos

Web de captación para [blueredsaneamiento.net](https://blueredsaneamiento.net): Astro, Tailwind, daisyUI, GSAP, MDX y despliegue en Vercel.

## Local

```sh
npm install
npm run dev
```

## Vercel

1. Importa el repo en [Vercel](https://vercel.com) (framework: Astro).
2. Opcional: `RESEND_API_KEY` para que el formulario envíe correo a `info@blueredsaneamiento.net`. Sin clave, el parte se abre en WhatsApp.
3. Apunta el dominio `blueredsaneamiento.net` al proyecto.

## Contenido

- Servicios: `src/content/servicios`
- Bitácora: `src/content/blog`
- Datos de empresa y teléfono: `src/lib/site.ts`
