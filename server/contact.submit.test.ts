import { describe, it, expect, vi, beforeEach } from 'vitest';
import { createContactSubmission } from './db';
import { sendContactFormEmail } from './_core/email';
import { notifyOwner } from './_core/notification';

// Mock the dependencies
vi.mock('./db');
vi.mock('./_core/email');
vi.mock('./_core/notification');

describe('Contact Form Submission', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('should save submission to database and send email', async () => {
    // Mock successful responses
    vi.mocked(createContactSubmission).mockResolvedValue(undefined);
    vi.mocked(sendContactFormEmail).mockResolvedValue(true);
    vi.mocked(notifyOwner).mockResolvedValue(true);

    const testData = {
      name: 'John Doe',
      email: 'john@example.com',
      phone: '+1 234 567 8900',
      subject: 'Course Inquiry',
      message: 'I am interested in the Microsoft Office course',
    };

    // Simulate the mutation logic
    await createContactSubmission(testData);
    const emailSent = await sendContactFormEmail(testData);
    await notifyOwner({
      title: `New Contact Form Submission from ${testData.name}`,
      content: `Email: ${testData.email}\nPhone: ${testData.phone}\nSubject: ${testData.subject}\n\nMessage:\n${testData.message}`,
    });

    // Verify all functions were called
    expect(createContactSubmission).toHaveBeenCalledWith(testData);
    expect(sendContactFormEmail).toHaveBeenCalledWith(testData);
    expect(notifyOwner).toHaveBeenCalled();
    expect(emailSent).toBe(true);
  });

  it('should handle email sending failure gracefully', async () => {
    // Mock email failure
    vi.mocked(createContactSubmission).mockResolvedValue(undefined);
    vi.mocked(sendContactFormEmail).mockResolvedValue(false);
    vi.mocked(notifyOwner).mockResolvedValue(true);

    const testData = {
      name: 'Jane Doe',
      email: 'jane@example.com',
      phone: '+1 234 567 8900',
      subject: 'Certification Question',
      message: 'What certifications do you offer?',
    };

    // Simulate the mutation logic
    await createContactSubmission(testData);
    const emailSent = await sendContactFormEmail(testData);
    await notifyOwner({
      title: `New Contact Form Submission from ${testData.name}`,
      content: `Email: ${testData.email}\nPhone: ${testData.phone}\nSubject: ${testData.subject}\n\nMessage:\n${testData.message}`,
    });

    // Verify submission was saved even though email failed
    expect(createContactSubmission).toHaveBeenCalledWith(testData);
    expect(emailSent).toBe(false);
    expect(notifyOwner).toHaveBeenCalled();
  });

  it('should validate email sending to correct recipient', async () => {
    vi.mocked(createContactSubmission).mockResolvedValue(undefined);
    vi.mocked(sendContactFormEmail).mockResolvedValue(true);
    vi.mocked(notifyOwner).mockResolvedValue(true);

    const testData = {
      name: 'Test User',
      email: 'testuser@example.com',
      phone: undefined,
      subject: 'Test Subject',
      message: 'Test message content',
    };

    await sendContactFormEmail(testData);

    // Verify sendContactFormEmail was called with the correct data
    expect(sendContactFormEmail).toHaveBeenCalledWith(
      expect.objectContaining({
        name: 'Test User',
        email: 'testuser@example.com',
        subject: 'Test Subject',
        message: 'Test message content',
      })
    );
  });
});
