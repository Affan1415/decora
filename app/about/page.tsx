import Hero from '@/components/Hero';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';

export default function AboutPage() {
  return (
    <>
      <Hero
        title="About Decora"
        subtitle="Who We Are"
        description="Creating beautiful, functional spaces that transform lives"
        showCTA={false}
      />

      {/* Story Section */}
      <section className="py-16 md:py-24">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-dark mb-6">
                Our Story
              </h2>
              <p className="text-lg text-gray-600 mb-4 leading-relaxed">
                Decora was founded with a simple mission: to transform spaces into stunning, functional, and personalized environments that reflect the unique style and personality of each client. Based in Dubai, we bring international expertise to the heart of the Middle East.
              </p>
              <p className="text-lg text-gray-600 mb-4 leading-relaxed">
                With 18 years of experience in the interior design industry, our team has developed a deep understanding of how great design impacts the way people live and work. Led by Shahzad and Nisha, we've worked on everything from intimate residential spaces to large commercial projects, each one teaching us something new.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Today, we're committed to combining creativity, functionality, and sustainability in every project we undertake. From our offices in Business Bay, Dubai, we believe that design should be accessible, personalized, and transformative.
              </p>
            </div>
            <div>
              <img
                src="/images/hero/bg/1.jpg"
                alt="Our Story"
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* Values Section */}
      <section className="py-16 md:py-24 bg-light-bg">
        <Container>
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-12 text-center">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: '✨',
                title: 'Excellence',
                description: 'We strive for excellence in every project, paying attention to every detail and ensuring the highest quality of work.',
              },
              {
                icon: '🤝',
                title: 'Collaboration',
                description: 'We believe in working closely with our clients, understanding their vision, and collaborating to bring it to life.',
              },
              {
                icon: '♻️',
                title: 'Sustainability',
                description: 'We are committed to sustainable design practices that minimize environmental impact and create healthier spaces.',
              },
              {
                icon: '💡',
                title: 'Innovation',
                description: 'We stay current with design trends and technologies, always looking for innovative ways to solve design challenges.',
              },
              {
                icon: '❤️',
                title: 'Passion',
                description: 'We are passionate about creating spaces that inspire, uplift, and bring joy to the people who inhabit them.',
              },
              {
                icon: '🎯',
                title: 'Integrity',
                description: 'We operate with honesty and transparency, delivering on our promises and maintaining the highest professional standards.',
              },
            ].map((value, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition">
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold text-dark mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Team Section */}
      <section className="py-16 md:py-24">
        <Container>
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-12 text-center">
            Our Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: 'Sarah Johnson',
                role: 'Lead Designer',
                image: '/images/team/1.jpg',
              },
              {
                name: 'Michael Chen',
                role: 'Creative Director',
                image: '/images/team/2.jpg',
              },
              {
                name: 'Emma Davis',
                role: 'Project Manager',
                image: '/images/team/3.jpg',
              },
              {
                name: 'James Wilson',
                role: 'Interior Specialist',
                image: '/images/team/4.jpg',
              },
            ].map((member, index) => (
              <div key={index} className="text-center group">
                <div className="h-64 overflow-hidden rounded-lg mb-4">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
                  />
                </div>
                <h3 className="text-xl font-bold text-dark">{member.name}</h3>
                <p className="text-primary font-semibold">{member.role}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary">
        <Container>
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-6">
              Let's Create Something Amazing Together
            </h2>
            <p className="text-lg text-dark mb-8 max-w-2xl mx-auto">
              Ready to transform your space? Get in touch with our team today and let's discuss your design needs.
            </p>
            <Button href="/contact" variant="white">
              Contact Us
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
