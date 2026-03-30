import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(req: NextRequest) {
  const { nom, email, telephone, sujet, message } = await req.json()

  if (!nom || !email || !message) {
    return NextResponse.json({ error: 'Champs requis manquants.' }, { status: 400 })
  }

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT) || 587,
    secure: process.env.SMTP_SECURE === 'true',
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  })

  await transporter.sendMail({
    from: `"inTec Djibouti - Contact" <${process.env.SMTP_FROM ?? process.env.SMTP_USER}>`,
    to: 'mahamoud.ali.hared@gmail.com',
    replyTo: email,
    subject: `[inTec Contact] ${sujet || 'Nouveau message'}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #f8fafc; padding: 24px; border-radius: 12px;">
        <div style="background: linear-gradient(135deg, #1e3a8a, #0c4a6e); padding: 24px; border-radius: 10px 10px 0 0; text-align: center;">
          <h1 style="color: #f59e0b; margin: 0; font-size: 28px; font-weight: 900;">in<span style="color: white;">Tec</span></h1>
          <p style="color: #bfdbfe; margin: 4px 0 0; font-size: 13px;">Institut Technologique de Djibouti</p>
        </div>
        <div style="background: white; padding: 32px; border-radius: 0 0 10px 10px; border: 1px solid #e2e8f0;">
          <h2 style="color: #1e3a8a; margin-top: 0;">Nouveau message de contact</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; color: #64748b; font-size: 13px; width: 130px;"><strong>Nom</strong></td>
              <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; color: #1e293b;">${nom}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; color: #64748b; font-size: 13px;"><strong>Email</strong></td>
              <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; color: #1e293b;"><a href="mailto:${email}" style="color: #1e3a8a;">${email}</a></td>
            </tr>
            ${telephone ? `
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; color: #64748b; font-size: 13px;"><strong>Téléphone</strong></td>
              <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; color: #1e293b;">${telephone}</td>
            </tr>` : ''}
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; color: #64748b; font-size: 13px;"><strong>Sujet</strong></td>
              <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; color: #1e293b;">${sujet || '—'}</td>
            </tr>
          </table>
          <div style="margin-top: 24px;">
            <p style="color: #64748b; font-size: 13px; margin-bottom: 8px;"><strong>Message</strong></p>
            <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 16px; color: #1e293b; line-height: 1.7; white-space: pre-wrap;">${message}</div>
          </div>
          <p style="margin-top: 24px; font-size: 12px; color: #94a3b8; text-align: center;">
            Message envoyé depuis le site inTec Djibouti · <a href="https://intec-djibouti.dj" style="color: #1e3a8a;">intec-djibouti.dj</a>
          </p>
        </div>
      </div>
    `,
  })

  return NextResponse.json({ success: true })
}
