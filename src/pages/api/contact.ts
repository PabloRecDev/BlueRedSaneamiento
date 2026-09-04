import type { APIRoute } from 'astro';
import { site, whatsappHref } from '../../lib/site';

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  const form = await request.formData();
  if (String(form.get('company') ?? '')) {
    return Response.json({ ok: true, message: 'Parte recibido.' });
  }

  const name = String(form.get('name') ?? '').trim();
  const phone = String(form.get('phone') ?? '').trim();
  const email = String(form.get('email') ?? '').trim();
  const typeValues = form.getAll('services').map(String).filter(Boolean);
  const type = typeValues.join(', ') || String(form.get('type') ?? '').trim();
  const zone = String(form.get('zone') ?? '').trim();
  const message = String(form.get('message') ?? '').trim() || 'Consulta rápida desde la web.';

  if (!name || !phone) {
    return Response.json({ ok: false, message: 'Faltan nombre o teléfono.' }, { status: 400 });
  }

  const body = [
    `Nuevo parte web`,
    `Nombre: ${name}`,
    `Teléfono: ${phone}`,
    email ? `Email: ${email}` : null,
    `Tipo: ${type || 'sin especificar'}`,
    zone ? `Zona: ${zone}` : null,
    '',
    message,
  ]
    .filter(Boolean)
    .join('\n');

  const key = import.meta.env.RESEND_API_KEY;
  if (key) {
    const sent = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${key}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'Blue Red Web <noreply@blueredsaneamiento.net>',
        to: [site.email],
        subject: `Parte web · ${type || 'contacto'} · ${name}`,
        text: body,
      }),
    });

    if (sent.ok) {
      return Response.json({ ok: true, message: 'Parte enviado. Te llamamos.' });
    }
  }

  return Response.json({
    ok: true,
    href: whatsappHref(body),
    message: 'Abrimos WhatsApp con el parte.',
  });
};
