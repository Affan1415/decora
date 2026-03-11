'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-dark text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div>
            <img
              src="/logo/logo.jpeg"
              alt="Decora"
              className="h-12 mb-4"
            />
            <p className="text-gray-400">
              Transforming spaces into stunning, functional, and personalized environments with expertise and passion.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-400 hover:text-primary transition">Home</Link></li>
              <li><Link href="/about" className="text-gray-400 hover:text-primary transition">About Us</Link></li>
              <li><Link href="/services" className="text-gray-400 hover:text-primary transition">Services</Link></li>
              <li><Link href="/projects" className="text-gray-400 hover:text-primary transition">Projects</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-primary transition">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Phone: <a href="tel:+971586297143" className="text-primary hover:underline">+971 58 6297143</a></li>
              <li>
                <div className="text-primary">
                  <a href="mailto:shahzad@decorainterior.com" className="block hover:underline">shahzad@decorainterior.com</a>
                  <a href="mailto:nisha@decorainterior.com" className="block hover:underline">nisha@decorainterior.com</a>
                </div>
              </li>
              <li className="text-sm text-gray-500">
                Shoba Ivory II, Business Bay<br />Dubai – UAE
              </li>
              <li className="pt-4">
                <div className="flex gap-4">
                  <a href="#" className="hover:text-primary transition"><i className="fab fa-facebook-f"></i></a>
                  <a href="#" className="hover:text-primary transition"><i className="fab fa-x-twitter"></i></a>
                  <a href="#" className="hover:text-primary transition"><i className="fab fa-instagram"></i></a>
                  <a href="#" className="hover:text-primary transition"><i className="fab fa-youtube"></i></a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
          <p>&copy; Copyright 2025 - Decora Interior Design Portfolio. All rights reserved.</p>
        </div>
      </div>

      {/* Back to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 w-12 h-12 bg-primary text-dark rounded-full flex items-center justify-center hover:bg-yellow-400 transition z-40"
        aria-label="Back to top"
      >
        <i className="fas fa-arrow-up"></i>
      </button>
    </footer>
  );
}
