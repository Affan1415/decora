import Link from 'next/link';
import Hero from '@/components/Hero';
import Container from '@/components/ui/Container';
import { services } from '@/lib/data/services';

export default function ServicesPage() {
  return (
    <>
      <Hero
        title="Our Services"
        subtitle="What We Offer"
        description="Comprehensive interior design services tailored to your needs"
        showCTA={false}
      />

      <section className="py-16 md:py-24">
        <Container>
          <div className="mb-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">
              Complete Design Solutions
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From initial consultation to final execution, we provide comprehensive services to transform your space into something extraordinary.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <Link key={service.id} href={`/services/${service.slug}`}>
                <div className="h-full bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition group cursor-pointer">
                  {/* Image */}
                  <div className="h-64 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-dark mb-3">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {service.shortDescription}
                    </p>
                    <div className="flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition">
                      <span>Learn More</span>
                      <i className="fas fa-arrow-right"></i>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
