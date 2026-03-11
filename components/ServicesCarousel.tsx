'use client';

import Link from 'next/link';
import Container from './ui/Container';
import { services } from '@/lib/data/services';

export default function ServicesCarousel() {
  return (
    <section className="py-16 md:py-24">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              className="service-card bg-cover bg-center rounded-lg overflow-hidden h-64 md:h-80 relative group cursor-pointer"
              style={{
                backgroundImage: `url(${service.image})`,
              }}
            >
              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black/60 group-hover:bg-black/50 transition-all duration-300"></div>

              {/* Content */}
              <div className="relative h-full flex flex-col justify-center items-center text-center text-white p-6 z-10">
                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                  {service.title}
                </h3>
                <p className="text-sm md:text-base mb-6 opacity-90">
                  {service.shortDescription}
                </p>
                <Link
                  href={`/services/${service.slug}`}
                  className="inline-block px-6 py-2 border-2 border-white text-white hover:bg-primary hover:border-primary hover:text-dark transition font-semibold"
                >
                  Read More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
