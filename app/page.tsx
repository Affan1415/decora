import Hero from '@/components/Hero';
import StatsSection from '@/components/StatsSection';
import ServicesCarousel from '@/components/ServicesCarousel';
import TestimonialSlider from '@/components/TestimonialSlider';
import ProjectsGrid from '@/components/ProjectsGrid';
import MarqueeText from '@/components/MarqueeText';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <Hero
        title="Exquisite Functional Designs"
        subtitle="Interior Design Studio"
        description="We are passionate about transforming spaces into stunning, functional, and personalized environments. With years of experience in the industry, we specialize in creating exceptional interior designs that reflect our clients' unique style and meet their specific needs."
        image="/images/hero/bg/1.jpg"
        showCTA={true}
        ctaText="Start Your Project"
        ctaLink="/contact"
      />

      {/* Stats Section */}
      <StatsSection />

      {/* Services Section */}
      <section className="py-16 md:py-24 bg-white">
        <ServicesCarousel />
      </section>

      {/* Design Philosophy Section */}
      <section className="py-16 md:py-24 bg-light-bg">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-dark mb-6">
                Where Dreams Meet Design
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Our services encompass every stage of the design process, from initial conceptualization to the final execution. We begin by getting to know you and understanding your unique vision, preferences, and lifestyle. With this foundation, we collaborate closely to develop a personalized design plan tailored to your needs.
              </p>
              <Button href="/about" variant="secondary">
                Learn About Us
              </Button>
            </div>
            <div className="relative">
              <img
                src="/images/hero/misc/1.jpg"
                alt="Design Philosophy"
                className="w-full rounded-lg shadow-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
            </div>
          </div>
        </Container>
      </section>

      {/* Testimonials Section */}
      <TestimonialSlider />

      {/* Projects Section */}
      <section className="py-16 md:py-24 bg-light-bg">
        <ProjectsGrid />
      </section>

      {/* Capabilities Marquee */}
      <MarqueeText />

      {/* Final CTA Section */}
      <section className="py-16 md:py-24 bg-primary">
        <Container>
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-6">
              Ready to Transform Your Space?
            </h2>
            <p className="text-lg text-dark mb-8 max-w-2xl mx-auto">
              Let's work together to create a space that reflects your unique style and meets your functional needs.
            </p>
            <Button href="/contact" variant="white">
              Get In Touch Today
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
