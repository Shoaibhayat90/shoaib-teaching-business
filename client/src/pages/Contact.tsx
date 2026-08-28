import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useLocation } from 'wouter';
import { trpc } from '@/lib/trpc';
import { toast } from 'sonner';

export default function Contact() {
  const [, navigate] = useLocation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const submitContactForm = trpc.contact.submit.useMutation();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const result = await submitContactForm.mutateAsync({
        name: formData.name,
        email: formData.email,
        phone: formData.phone || undefined,
        subject: formData.subject,
        message: formData.message,
      });

      if (result.success) {
        setSubmitted(true);
        toast.success(result.message);
        
        // Reset form after 3 seconds
        setTimeout(() => {
          setFormData({
            name: '',
            email: '',
            phone: '',
            subject: '',
            message: '',
          });
          setSubmitted(false);
        }, 3000);
      }
    } catch (error) {
      console.error('Form submission error:', error);
      toast.error('Failed to submit form. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white border-b border-border">
        <div className="container flex items-center justify-between py-4">
          <a href="/" className="flex items-center gap-2">
            <img src="/manus-storage/logo-option-2_8664fe11.png" alt="IT Insight Academy" className="h-8" />
            <span className="font-bold text-foreground">IT Insight Academy</span>
          </a>
          <nav className="hidden md:flex items-center gap-8">
            <a href="/" className="text-foreground/70 hover:text-foreground transition">Home</a>
            <a href="/mission" className="text-foreground/70 hover:text-foreground transition">Our Mission</a>
            <a href="/courses" className="text-foreground/70 hover:text-foreground transition">Courses</a>
            <a href="/learning-methods" className="text-foreground/70 hover:text-foreground transition">Learning</a>
            <a href="/certifications" className="text-foreground/70 hover:text-foreground transition">Certifications</a>
          </nav>
          <Button onClick={() => navigate('/contact')} className="bg-primary hover:bg-primary/90 text-primary-foreground">
            Get Started
          </Button>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-b from-primary/10 to-background">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h1 className="text-5xl font-bold mb-6 text-foreground">
                Get in Touch
              </h1>
              <p className="text-xl text-foreground/70 leading-relaxed">
                Have questions about our courses or learning methods? We'd love to hear from you. 
                Reach out and let's discuss how we can help you achieve your goals.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
              {/* Contact Information */}
              <div className="lg:col-span-1">
                <h2 className="text-2xl font-bold mb-8 text-foreground">Contact Information</h2>
                
                <div className="space-y-8">
                  {/* Phone */}
                  <Card className="p-6 border-l-4 border-l-primary">
                    <h3 className="font-bold text-foreground mb-2 flex items-center gap-2">
                      <span className="text-2xl">📞</span>
                      Phone
                    </h3>
                    <p className="text-foreground/70">
                      <a href="tel:+15147012500" className="hover:text-primary transition font-semibold">
                        +1 514 701 2500
                      </a>
                    </p>
                    <p className="text-sm text-foreground/50 mt-2">Mon-Fri, 9:00 AM - 6:00 PM EST</p>
                  </Card>

                  {/* Email */}
                  <Card className="p-6 border-l-4 border-l-primary">
                    <h3 className="font-bold text-foreground mb-2 flex items-center gap-2">
                      <span className="text-2xl">✉️</span>
                      Email
                    </h3>
                    <p className="text-foreground/70">
                      <a href="mailto:shoaibhayat@icloud.com" className="hover:text-primary transition font-semibold">
                        shoaibhayat@icloud.com
                      </a>
                    </p>
                    <p className="text-sm text-foreground/50 mt-2">We'll respond within 24 hours</p>
                  </Card>

                  {/* Response Time */}
                  <Card className="p-6 border-l-4 border-l-primary">
                    <h3 className="font-bold text-foreground mb-2 flex items-center gap-2">
                      <span className="text-2xl">⏱️</span>
                      Response Time
                    </h3>
                    <p className="text-foreground/70">
                      We typically respond to inquiries within 24 business hours.
                    </p>
                  </Card>
                </div>
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-2">
                <Card className="p-8 border-2 border-primary/20">
                  <h2 className="text-2xl font-bold mb-6 text-foreground">Send us a Message</h2>
                  
                  {submitted ? (
                    <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                      <p className="text-green-700 font-semibold">✓ Thank you for your message!</p>
                      <p className="text-green-600 text-sm mt-2">We'll get back to you soon.</p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      {/* Name */}
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                          Full Name *
                        </label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Your full name"
                          required
                          className="w-full"
                        />
                      </div>

                      {/* Email */}
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                          Email Address *
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="your.email@example.com"
                          required
                          className="w-full"
                        />
                      </div>

                      {/* Phone */}
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                          Phone Number
                        </label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+1 (555) 000-0000"
                          className="w-full"
                        />
                      </div>

                      {/* Subject */}
                      <div>
                        <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                          Subject *
                        </label>
                        <Input
                          id="subject"
                          name="subject"
                          type="text"
                          value={formData.subject}
                          onChange={handleChange}
                          placeholder="How can we help?"
                          required
                          className="w-full"
                        />
                      </div>

                      {/* Message */}
                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                          Message *
                        </label>
                        <Textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="Tell us more about your inquiry..."
                          required
                          rows={6}
                          className="w-full"
                        />
                      </div>

                      {/* Submit Button */}
                      <Button 
                        type="submit" 
                        size="lg" 
                        className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
                        disabled={isLoading}
                      >
                        {isLoading ? 'Sending...' : 'Send Message'}
                      </Button>
                    </form>
                  )}
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-background/50">
          <div className="container">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-12 text-center text-foreground">
                Frequently Asked Questions
              </h2>
              
              <div className="space-y-6">
                <Card className="p-6">
                  <h3 className="font-bold text-foreground mb-2">How quickly will I hear back?</h3>
                  <p className="text-foreground/70">
                    We aim to respond to all inquiries within 24 business hours during weekdays.
                  </p>
                </Card>

                <Card className="p-6">
                  <h3 className="font-bold text-foreground mb-2">What if I prefer to call?</h3>
                  <p className="text-foreground/70">
                    You can reach us directly at +1 514 701 2500. Our team is available Monday through Friday, 9:00 AM to 6:00 PM EST.
                  </p>
                </Card>

                <Card className="p-6">
                  <h3 className="font-bold text-foreground mb-2">Can I schedule a free consultation?</h3>
                  <p className="text-foreground/70">
                    Absolutely! Let us know in your message that you'd like to schedule a consultation, and we'll get back to you with available times.
                  </p>
                </Card>

                <Card className="p-6">
                  <h3 className="font-bold text-foreground mb-2">Do you offer corporate training?</h3>
                  <p className="text-foreground/70">
                    Yes, we offer customized training solutions for organizations. Contact us to discuss your specific needs.
                  </p>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary/10">
          <div className="container">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6 text-foreground">
                Ready to Start Your Learning Journey?
              </h2>
              <p className="text-lg text-foreground/70 mb-8">
                Explore our courses and take the first step toward certification and career growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  onClick={() => navigate('/courses')}
                  size="lg" 
                  className="bg-primary hover:bg-primary/90 text-primary-foreground"
                >
                  Explore Courses
                </Button>
                <Button 
                  onClick={() => navigate('/')}
                  variant="outline" 
                  size="lg"
                >
                  Back to Home
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-foreground text-background py-12">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-bold mb-4">IT Insight Academy</h4>
              <p className="text-sm opacity-80">
                Empowering beginners with practical IT skills and industry certifications.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="/" className="opacity-80 hover:opacity-100 transition">Home</a></li>
                <li><a href="/courses" className="opacity-80 hover:opacity-100 transition">Courses</a></li>
                <li><a href="/certifications" className="opacity-80 hover:opacity-100 transition">Certifications</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Contact</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="tel:+15147012500" className="opacity-80 hover:opacity-100 transition">+1 514 701 2500</a></li>
                <li><a href="mailto:shoaibhayat@icloud.com" className="opacity-80 hover:opacity-100 transition">shoaibhayat@icloud.com</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Hours</h4>
              <p className="text-sm opacity-80">
                Mon-Fri: 9:00 AM - 6:00 PM EST<br/>
                Sat-Sun: Closed
              </p>
            </div>
          </div>
          <div className="border-t border-background/20 pt-8 text-center text-sm opacity-80">
            <p>&copy; 2026 IT Insight Academy. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
