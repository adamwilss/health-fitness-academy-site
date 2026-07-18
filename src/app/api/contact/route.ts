import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import nodemailer from 'nodemailer';
import { contactSchema } from '@/lib/validation';

export const runtime = 'nodejs';

const CONTACT_TO = process.env.CONTACT_TO_EMAIL || 'info@healthfitnessacademy.co.uk';
const resendApiKey = process.env.RESEND_API_KEY;
const fromEmail =
  process.env.CONTACT_FROM_EMAIL || 'Health Fitness Academy <noreply@healthfitnessacademy.co.uk>';

interface Lead {
  name: string;
  email: string;
  phone?: string;
  interest?: string;
  message: string;
}

async function sendSmtpEmail(lead: Lead, text: string): Promise<boolean> {
  const host = process.env.SMTP_HOST?.trim();
  const user = process.env.SMTP_USER?.trim();
  const pass = process.env.SMTP_PASS;
  if (!host || !user || !pass) return false;
  try {
    const port = Number(process.env.SMTP_PORT) || 587;
    const transporter = nodemailer.createTransport({
      host,
      port,
      secure: port === 465,
      auth: { user, pass },
    });
    await transporter.sendMail({
      from: `Health Fitness Academy <${user}>`,
      to: CONTACT_TO,
      replyTo: lead.email,
      subject: `New enquiry from ${lead.name}`,
      text,
    });
    return true;
  } catch (err) {
    console.error('SMTP send exception:', err);
    return false;
  }
}

async function sendResendEmail(lead: Lead, text: string): Promise<boolean> {
  if (!resendApiKey) return false;
  try {
    const resend = new Resend(resendApiKey);
    const { error } = await resend.emails.send({
      from: fromEmail,
      to: [CONTACT_TO],
      replyTo: lead.email,
      subject: `New enquiry from ${lead.name}`,
      text,
    });
    if (error) {
      console.error('Resend error:', error);
      return false;
    }
    return true;
  } catch (err) {
    console.error('Resend exception:', err);
    return false;
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const result = contactSchema.safeParse(body);

    if (!result.success) {
      const firstError = result.error.issues[0]?.message || 'Invalid form data';
      return NextResponse.json({ ok: false, error: firstError }, { status: 400 });
    }

    const data = result.data;

    // Honeypot check — silently succeed without sending anything
    if (data.company && data.company.length > 0) {
      return NextResponse.json({ ok: true });
    }

    const lead: Lead = {
      name: data.name,
      email: data.email,
      phone: data.phone,
      interest: data.interest,
      message: data.message,
    };

    const messageText = [
      'New enquiry — Health Fitness Academy website',
      '',
      `Name: ${lead.name}`,
      `Email: ${lead.email}`,
      lead.phone ? `Phone: ${lead.phone}` : null,
      lead.interest ? `Interested in: ${lead.interest}` : null,
      '',
      'Message:',
      lead.message,
    ]
      .filter(Boolean)
      .join('\n');

    const [smtpOk, resendOk] = await Promise.all([
      sendSmtpEmail(lead, messageText),
      sendResendEmail(lead, messageText),
    ]);

    console.log(`[contact] ${lead.name} <${lead.email}> — smtp:${smtpOk} resend:${resendOk}`);

    if (!smtpOk && !resendOk) {
      return NextResponse.json(
        {
          ok: false,
          error:
            'We couldn’t send your message just now. Please try again, or call us on 07947 846008.',
        },
        { status: 500 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('Contact route error:', err);
    return NextResponse.json(
      { ok: false, error: 'Something went wrong. Please try again later.' },
      { status: 500 },
    );
  }
}
