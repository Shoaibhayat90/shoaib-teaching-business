import nodemailer from 'nodemailer';

let transporter: ReturnType<typeof nodemailer.createTransport> | null = null;

/**
 * Initialize the email transporter
 * Uses the built-in Manus email service via SMTP
 */
function getTransporter() {
  if (transporter) {
    return transporter;
  }

  // Use Manus built-in email service
  // The SMTP credentials are provided via environment variables
  const smtpHost = process.env.SMTP_HOST || 'smtp.manus.im';
  const smtpPort = parseInt(process.env.SMTP_PORT || '587');
  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASS;

  transporter = nodemailer.createTransport({
    host: smtpHost,
    port: smtpPort,
    secure: smtpPort === 465, // true for 465, false for other ports
    auth: smtpUser && smtpPass ? {
      user: smtpUser,
      pass: smtpPass,
    } : undefined,
  });

  return transporter;
}

/**
 * Send email via the configured email service
 */
export async function sendEmail({
  to,
  subject,
  html,
  text,
}: {
  to: string;
  subject: string;
  html?: string;
  text?: string;
}): Promise<boolean> {
  try {
    const transporter = getTransporter();

    const result = await transporter.sendMail({
      from: process.env.EMAIL_FROM || 'noreply@itinsightacademy.com',
      to,
      subject,
      text: text || html?.replace(/<[^>]*>/g, ''),
      html,
    });

    console.log('[Email] Sent successfully:', result.messageId);
    return true;
  } catch (error) {
    console.error('[Email] Failed to send:', error);
    return false;
  }
}

/**
 * Send contact form submission email
 */
export async function sendContactFormEmail({
  name,
  email,
  phone,
  subject,
  message,
}: {
  name: string;
  email: string;
  phone?: string | null;
  subject: string;
  message: string;
}): Promise<boolean> {
  const html = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #1B9B8F;">New Contact Form Submission</h2>
      
      <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
        <p><strong>From:</strong> ${name}</p>
        <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
        ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ''}
        <p><strong>Subject:</strong> ${subject}</p>
      </div>
      
      <div style="margin: 20px 0;">
        <h3 style="color: #333;">Message:</h3>
        <p style="white-space: pre-wrap; color: #555;">${message}</p>
      </div>
      
      <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;" />
      
      <p style="font-size: 12px; color: #999;">
        This is an automated email from IT Insight Academy contact form.
      </p>
    </div>
  `;

  const text = `
New Contact Form Submission

From: ${name}
Email: ${email}
${phone ? `Phone: ${phone}` : ''}
Subject: ${subject}

Message:
${message}
  `.trim();

  return sendEmail({
    to: 'shoaib.hayyat@gmail.com',
    subject: `New Contact: ${subject}`,
    html,
    text,
  });
}
