'use client';

import { FormEvent, useState } from 'react';
import Hero from '@/components/Hero';
import Container from '@/components/ui/Container';

export const dynamic = 'force-dynamic';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // For now, just log the form data
      // In production, you would send this to your backend API
      console.log('Form submitted:', formData);
      setSubmitMessage('Thank you for your message! We will get back to you soon.');
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      });

      // Clear message after 5 seconds
      setTimeout(() => setSubmitMessage(''), 5000);
    } catch (error) {
      setSubmitMessage('Error submitting form. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Hero
        title="Get In Touch"
        subtitle="Contact Us"
        description="We'd love to hear about your project and discuss how we can help transform your space."
        showCTA={false}
      />

      <section className="py-16 md:py-24">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
            {/* Contact Info */}
            <div>
              <h3 className="text-2xl font-bold text-dark mb-6">
                Contact Information
              </h3>
              <div className="space-y-6">
                <div>
                  <p className="text-gray-600 text-sm mb-2">Phone</p>
                  <a href="tel:+971586297143" className="text-lg font-semibold text-primary hover:text-yellow-400">
                    +971 58 6297143
                  </a>
                </div>
                <div>
                  <p className="text-gray-600 text-sm mb-2">Email</p>
                  <div className="space-y-2">
                    <a href="mailto:shahzad@decorainterior.com" className="block text-lg font-semibold text-primary hover:text-yellow-400">
                      shahzad@decorainterior.com
                    </a>
                    <a href="mailto:nisha@decorainterior.com" className="block text-lg font-semibold text-primary hover:text-yellow-400">
                      nisha@decorainterior.com
                    </a>
                  </div>
                </div>
                <div>
                  <p className="text-gray-600 text-sm mb-2">Address</p>
                  <p className="text-lg font-semibold text-dark">
                    1107, Shoba Ivory II Building<br />
                    Business Bay, Dubai – UAE
                  </p>
                </div>
                <div>
                  <p className="text-gray-600 text-sm mb-2">Working Hours</p>
                  <p className="text-lg font-semibold">Monday - Friday</p>
                  <p className="text-gray-600">08:00 - 16:00</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-2xl font-bold text-dark mb-6">
                Follow Us
              </h3>
              <div className="space-y-4">
                <a
                  href="#"
                  className="flex items-center gap-3 text-gray-600 hover:text-primary transition"
                >
                  <i className="fab fa-facebook-f text-2xl"></i>
                  <span>Facebook</span>
                </a>
                <a
                  href="#"
                  className="flex items-center gap-3 text-gray-600 hover:text-primary transition"
                >
                  <i className="fab fa-instagram text-2xl"></i>
                  <span>Instagram</span>
                </a>
                <a
                  href="#"
                  className="flex items-center gap-3 text-gray-600 hover:text-primary transition"
                >
                  <i className="fab fa-x-twitter text-2xl"></i>
                  <span>Twitter</span>
                </a>
                <a
                  href="#"
                  className="flex items-center gap-3 text-gray-600 hover:text-primary transition"
                >
                  <i className="fab fa-youtube text-2xl"></i>
                  <span>YouTube</span>
                </a>
              </div>
            </div>

            {/* Quick Info */}
            <div>
              <h3 className="text-2xl font-bold text-dark mb-6">
                What to Expect
              </h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold mt-1">✓</span>
                  <span>Quick response to your inquiry</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold mt-1">✓</span>
                  <span>Initial consultation at no charge</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold mt-1">✓</span>
                  <span>Detailed project proposal</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold mt-1">✓</span>
                  <span>Professional support throughout</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div className="max-w-2xl mx-auto bg-light-bg p-8 rounded-lg">
            <h2 className="text-3xl font-bold text-dark mb-8 text-center">
              Send us a Message
            </h2>

            {submitMessage && (
              <div className={`mb-6 p-4 rounded-lg text-center ${
                submitMessage.includes('Thank')
                  ? 'bg-green-100 text-green-800'
                  : 'bg-red-100 text-red-800'
              }`}>
                {submitMessage}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-dark mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Your name"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-dark mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Phone */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-dark mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Your phone number"
                  />
                </div>

                {/* Subject */}
                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold text-dark mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Project inquiry"
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-dark mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                  placeholder="Tell us about your project..."
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary text-dark font-bold py-3 rounded-lg hover:bg-yellow-400 transition disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </Container>
      </section>
    </>
  );
}
