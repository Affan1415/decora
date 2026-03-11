import Link from 'next/link';
import { notFound } from 'next/navigation';
import Hero from '@/components/Hero';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import { services } from '@/lib/data/services';

interface ServiceDetailPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export function generateMetadata({ params }: ServiceDetailPageProps) {
  const service = services.find((s) => s.slug === params.slug);
  return {
    title: `${service?.title} - Decora Interior Design`,
    description: service?.shortDescription,
  };
}

export default function ServiceDetailPage({ params }: ServiceDetailPageProps) {
  const service = services.find((s) => s.slug === params.slug);

  if (!service) {
    notFound();
  }

  const relatedServices = services.filter(
    (s) => service.relatedProjects?.includes(s.id)
  );

  return (
    <>
      <Hero
        title={service.title}
        image={service.image}
        showCTA={false}
      />

      <section className="py-16 md:py-24">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-dark mb-6">
                {service.title}
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                {service.fullDescription}
              </p>

              {/* Features */}
              <div className="mb-12">
                <h3 className="text-2xl font-bold text-dark mb-6">
                  Key Features
                </h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {service.features.map((feature, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-3"
                    >
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-dark flex items-center justify-center font-bold text-sm">
                        ✓
                      </span>
                      <span className="text-gray-700 pt-1">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Benefits */}
              {service.benefits && service.benefits.length > 0 && (
                <div className="mb-12">
                  <h3 className="text-2xl font-bold text-dark mb-6">
                    Benefits
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {service.benefits.map((benefit, index) => (
                      <div
                        key={index}
                        className="p-4 bg-light-bg rounded-lg border-l-4 border-primary"
                      >
                        <p className="text-gray-700">{benefit}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div>
              {/* CTA Box */}
              <div className="bg-primary p-8 rounded-lg mb-8">
                <h3 className="text-2xl font-bold text-dark mb-4">
                  Ready to Get Started?
                </h3>
                <p className="text-gray-800 mb-6">
                  Let's discuss how we can bring your vision to life with this service.
                </p>
                <Button href="/contact" variant="white" className="w-full text-center">
                  Contact Us
                </Button>
              </div>

              {/* Related Services */}
              {relatedServices.length > 0 && (
                <div>
                  <h3 className="text-xl font-bold text-dark mb-6">
                    Related Services
                  </h3>
                  <div className="space-y-4">
                    {relatedServices.map((relatedService) => (
                      <Link
                        key={relatedService.id}
                        href={`/services/${relatedService.slug}`}
                        className="block p-4 bg-light-bg rounded-lg hover:bg-primary hover:text-dark transition group"
                      >
                        <h4 className="font-semibold text-dark group-hover:text-dark mb-2">
                          {relatedService.title}
                        </h4>
                        <p className="text-sm text-gray-600 group-hover:text-dark/80">
                          {relatedService.shortDescription}
                        </p>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
