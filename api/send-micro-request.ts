import type { VercelRequest, VercelResponse } from '@vercel/node';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

// función util para limpiar texto
const clean = (s?: string) => (s ?? '').toString().trim();

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ ok: false, error: 'Method Not Allowed' });
  }

  try {
    const {
      name,
      company,
      email,
      phone,
      description,
      features,
      budget,
      deadline,
      honeypot,
      consent,
    } = req.body || {};

    // honeypot (spam)
    if (honeypot && String(honeypot).trim() !== '') {
      return res.status(200).json({ ok: true });
    }

    // validaciones básicas
    if (!name || !email || !description || !consent) {
      return res.status(400).json({ ok: false, error: 'Faltan campos obligatorios' });
    }

    // correo destino fijo
    const to = 'p.equix25@gmail.com';

    // usamos un remitente universal que no necesita dominio verificado
    const from = 'onboarding@resend.dev';

    const subject = `🧠 Nueva solicitud de microsolución — ${clean(name)}`;

    const html = `
      <div style="font-family: system-ui, -apple-system, Roboto, sans-serif; line-height: 1.6;">
        <h2 style="color: #111;">Nueva solicitud de microsolución</h2>
        <p><strong>Nombre:</strong> ${clean(name)}</p>
        <p><strong>Empresa:</strong> ${clean(company) || '—'}</p>
        <p><strong>Email:</strong> ${clean(email)}</p>
        <p><strong>Teléfono:</strong> ${clean(phone) || '—'}</p>
        <p><strong>Descripción:</strong><br>${clean(description).replace(/\n/g, '<br>')}</p>
        <p><strong>Funcionalidades deseadas:</strong><br>${clean(features) || '—'}</p>
        <p><strong>Presupuesto estimado:</strong> ${clean(budget) || '—'}</p>
        <p><strong>Plazo estimado:</strong> ${clean(deadline) || '—'}</p>
        <hr>
        <p>📩 Este mensaje fue enviado desde el formulario de Fluxo Services.</p>
      </div>
    `;

    // enviamos el correo al destino principal
    const result = await resend.emails.send({
      from,
      to,
      subject,
      html,
      reply_to: clean(email),
    });

    // verificamos si Resend respondió correctamente
    if (!result || result.error) {
      console.error('Resend error:', result?.error);
      return res.status(500).json({ ok: false, error: 'Error enviando correo con Resend' });
    }

    // (Opcional) autorespuesta al usuario
    await resend.emails.send({
      from,
      to: clean(email),
      subject: 'Hemos recibido tu solicitud — Fluxo Services',
      html: `
        <div style="font-family: system-ui, -apple-system, Roboto, sans-serif; line-height: 1.6;">
          <p>Hola ${clean(name)},</p>
          <p>Hemos recibido tu solicitud correctamente. Te contactaremos muy pronto para concretar los detalles.</p>
          <p>Gracias por confiar en Fluxo Services.</p>
        </div>
      `,
    });

    return res.status(200).json({ ok: true });
  } catch (err: any) {
    console.error('send-micro-request error:', err);
    return res.status(500).json({ ok: false, error: 'Error de servidor' });
  }
}
