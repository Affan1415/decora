'use client';

import Container from './ui/Container';
import Button from './ui/Button';

interface HeroProps {
  title: string;
  subtitle?: string;
  description?: string;
  image?: string;
  showCTA?: boolean;
  ctaText?: string;
  ctaLink?: string;
}

export default function Hero({
  title,
  subtitle,
  description,
  image,
  showCTA = true,
  ctaText = 'Get Started',
  ctaLink = '/contact',
}: HeroProps) {
  return (
    <section className="relative h-screen md:h-auto md:py-20 flex items-center overflow-hidden">
      {/* Background Image */}
      {image && (
        <div className="absolute inset-0 z-0">
          <img
            src={image}
            alt="Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
      )}

      {/* Content */}
      <Container className="relative z-10 text-white py-20 md:py-0">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            {subtitle && (
              <h3 className="text-lg md:text-xl mb-4 text-primary font-semibold">
                {subtitle}
              </h3>
            )}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              {title}
            </h1>
            {description && (
              <p className="text-lg md:text-xl mb-8 opacity-90">
                {description}
              </p>
            )}
            {showCTA && (
              <Button href={ctaLink} variant="primary">
                {ctaText}
              </Button>
            )}
          </div>
        </div>
      </Container>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 text-white animate-bounce hidden md:block">
        <i className="fas fa-chevron-down text-2xl"></i>
      </div>
    </section>
  );
}
