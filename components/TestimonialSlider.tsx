'use client';

import { useState, useEffect } from 'react';
import Container from './ui/Container';
import { testimonials } from '@/lib/data/testimonials';

export default function TestimonialSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section
      className="relative py-24 text-white"
      style={{
        backgroundImage: `url(/images/hero/bg/2.jpg)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <Container className="relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          <blockquote className="mb-8">
            <p className="text-2xl md:text-3xl font-light italic mb-6">
              "{currentTestimonial.content}"
            </p>
          </blockquote>

          <div className="flex items-center justify-center gap-4">
            <div>
              <p className="font-bold text-lg">{currentTestimonial.name}</p>
              {currentTestimonial.role && (
                <p className="text-sm text-primary">{currentTestimonial.role}</p>
              )}
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center gap-3 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition ${
                  index === currentIndex
                    ? 'bg-primary'
                    : 'bg-white/50 hover:bg-white'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
