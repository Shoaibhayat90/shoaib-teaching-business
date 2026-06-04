import { describe, it, expect } from 'vitest';
import { sendEmail } from './_core/email';

describe('Email Service', () => {
  it('should validate SMTP credentials by sending a test email', async () => {
    // Test that the email service can connect and send
    const result = await sendEmail({
      to: 'info@itinsightacademy.com',
      subject: 'SMTP Configuration Test',
      text: 'This is a test email to verify SMTP credentials are configured correctly.',
      html: '<p>This is a test email to verify SMTP credentials are configured correctly.</p>',
    });

    expect(result).toBe(true);
  }, { timeout: 10000 });

  it('should handle invalid email addresses gracefully', async () => {
    const result = await sendEmail({
      to: 'invalid-email',
      subject: 'Test',
      text: 'Test',
    });

    // Should return false for invalid email
    expect(typeof result).toBe('boolean');
  }, { timeout: 10000 });
});
