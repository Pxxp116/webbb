import type { VercelRequest, VercelResponse } from '@vercel/node';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

// Utilidad muy simple para limpiar strings
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

    // Honeypot (spam)
    if (honeypot && String(honeypot).trim() !== '') {
      // Fingimos OK para no dar pistas a bots
      return res.status(200).json({ ok: true });
    }

    // Validaciones mínimas
    if (!name || !email || !description || !consent) {
      return res.status(400).json({ ok: false, error: 'Faltan campos obligatorios' });
    }

    const to = process.env.MICROREQUEST_TO;
    const from = process.env.RESEND_FROM;

    if (!to || !from) {
      return res.status(500).json({ ok: false, error: 'Falta configuración de correo (ENV)' });
    }

    const cleanName = clean(name);
    const cleanCompany = clean(company);
    const cleanEmail = clean(email);
    const cleanPhone = clean(phone);
    const cleanDesc = clean(description);
    const cleanFeatures = clean(features);
    const cleanBudget = clean(budget);
    const cleanDeadline = clean(deadline);

    const subject = `Nueva solicitud de microsolución — ${cleanName}${cleanCompany ? ' @ ' + cleanCompany : ''}`;

    const html = `
      <div style="font-family:system-ui,-apple-system,Segoe UI,Roboto,Ubuntu,sans-serif;line-height:1.5;">
        <h2>Solicitud de Microsolución / Software Inteligente</h2>
        <p><strong>Nombre:</strong> ${cleanName}</p>
        <p><strong>Empresa:</strong> ${cleanCompany || '—'}</p>
        <p><strong>Email:</strong> ${cleanEmail}</p>
        <p><strong>Teléfono:</strong> ${cleanPhone || '—'}</p>
        <p><strong>Descripción:</strong><br/>${cleanDesc.replace(/\n/g, '<br/>')}</p>
        <p><strong>Funcionalidades deseadas:</strong><br/>${cleanFeatures ? cleanFeatures.replace(/\n/g, '<br/>') : '—'}</p>
        <p><strong>Presupuesto estimado:</strong> ${cleanBudget || '—'}</p>
        <p><strong>Plazo estimado:</strong> ${cleanDeadline || '—'}</p>
      </div>
    `;

    // Envío interno a PX
    await resend.emails.send({
      from,
      to,
      subject,
      html,
      replyTo: cleanEmail, // podrás responder directo al solicitante
    });

    // (Opcional) Autorespuesta al usuario
    await resend.emails.send({
      from,
      to: cleanEmail,
      subject: 'Hemos recibido tu solicitud — Fluxo Services',
      html: `
        <div style="font-family:system-ui,-apple-system,Segoe UI,Roboto,Ubuntu,sans-serif;line-height:1.6;">
          <p>Hola ${cleanName},</p>
          <p>¡Gracias por tu interés! Hemos recibido tu solicitud de microsolución/software inteligente. 
          Nuestro equipo te contactará muy pronto para concretar detalles y enviarte una propuesta.</p>
          <p>— Fluxo Services</p>
        </div>
      `,
    });

    return res.status(200).json({ ok: true });
  } catch (err: any) {
    console.error('send-micro-request error:', err);
    return res.status(500).json({ ok: false, error: 'Error enviando la solicitud' });
  }
}
