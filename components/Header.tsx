'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Projects', href: '/projects' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'
      }`}
    >
      {/* Top Info Bar */}
      <div className="hidden md:block bg-dark text-white text-sm py-3">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex gap-8">
            <span>Working Hours Monday - Friday <strong className="text-primary">08:00-16:00</strong></span>
            <span>Toll Free <strong className="text-primary">1800.899.900</strong></span>
          </div>
          <div className="flex gap-4">
            <a href="#" className="hover:text-primary transition"><i className="fab fa-facebook-f"></i></a>
            <a href="#" className="hover:text-primary transition"><i className="fab fa-x-twitter"></i></a>
            <a href="#" className="hover:text-primary transition"><i className="fab fa-instagram"></i></a>
            <a href="#" className="hover:text-primary transition"><i className="fab fa-youtube"></i></a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="bg-white">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2">
              <img
                src="/logo/logo.jpeg"
                alt="Decora"
                className="h-12 w-auto"
              />
              <span className="font-bold text-lg hidden sm:inline"></span>
            </Link>

            {/* Desktop Menu */}
            <nav className="hidden lg:flex gap-8">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`font-medium transition hover:text-primary ${
                    isScrolled ? 'text-dark' : 'text-dark'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <nav className="lg:hidden mt-4 pb-4 border-t pt-4">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block py-2 text-dark hover:text-primary transition"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          )}
        </div>
      </div>
    </header>
  );
}
