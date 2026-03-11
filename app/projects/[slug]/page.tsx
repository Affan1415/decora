import Link from 'next/link';
import { notFound } from 'next/navigation';
import Hero from '@/components/Hero';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import { projects } from '@/lib/data/projects';

interface ProjectDetailPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export function generateMetadata({ params }: ProjectDetailPageProps) {
  const project = projects.find((p) => p.slug === params.slug);
  return {
    title: `${project?.title} - Decora Projects`,
    description: project?.shortDescription,
  };
}

export default function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  const relatedProjects = projects.filter(
    (p) => project.relatedProjects?.includes(p.id)
  );

  return (
    <>
      <Hero
        title={project.title}
        image={project.thumbnail}
        showCTA={false}
      />

      <section className="py-16 md:py-24">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Gallery */}
              <div className="mb-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {project.images.map((image, index) => (
                    <img
                      key={index}
                      src={image}
                      alt={`${project.title} - ${index + 1}`}
                      className="w-full h-64 md:h-80 object-cover rounded-lg"
                    />
                  ))}
                </div>
              </div>

              {/* Project Details */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-dark mb-4">
                  Project Details
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                  {project.fullDescription}
                </p>

                {/* Project Info Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-8">
                  {project.year && (
                    <div className="p-4 bg-light-bg rounded">
                      <p className="text-gray-600 text-sm mb-1">Year</p>
                      <p className="text-xl font-bold text-dark">
                        {project.year}
                      </p>
                    </div>
                  )}
                  {project.client && (
                    <div className="p-4 bg-light-bg rounded">
                      <p className="text-gray-600 text-sm mb-1">Client</p>
                      <p className="text-lg font-semibold text-dark">
                        {project.client}
                      </p>
                    </div>
                  )}
                  <div className="p-4 bg-light-bg rounded">
                    <p className="text-gray-600 text-sm mb-1">Category</p>
                    <p className="text-lg font-semibold text-dark capitalize">
                      {project.category}
                    </p>
                  </div>
                </div>
              </div>

              {/* Testimonial */}
              {project.testimonial && (
                <div className="mb-12 p-8 bg-light-bg border-l-4 border-primary rounded">
                  <p className="text-lg italic text-gray-700 mb-4">
                    "{project.testimonial.content}"
                  </p>
                  <div>
                    <p className="font-bold text-dark">
                      {project.testimonial.name}
                    </p>
                    {project.testimonial.role && (
                      <p className="text-sm text-gray-600">
                        {project.testimonial.role}
                      </p>
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div>
              {/* CTA Box */}
              <div className="bg-primary p-8 rounded-lg mb-8 sticky top-24">
                <h3 className="text-2xl font-bold text-dark mb-4">
                  Interested in a Similar Project?
                </h3>
                <p className="text-gray-800 mb-6">
                  Let's discuss your design needs and create something amazing together.
                </p>
                <Button href="/contact" variant="white" className="w-full text-center">
                  Start Your Project
                </Button>
              </div>

              {/* Related Projects */}
              {relatedProjects.length > 0 && (
                <div>
                  <h3 className="text-xl font-bold text-dark mb-6">
                    Related Projects
                  </h3>
                  <div className="space-y-4">
                    {relatedProjects.map((relatedProject) => (
                      <Link
                        key={relatedProject.id}
                        href={`/projects/${relatedProject.slug}`}
                      >
                        <div className="group cursor-pointer">
                          <div className="h-40 rounded-lg overflow-hidden mb-3">
                            <img
                              src={relatedProject.thumbnail}
                              alt={relatedProject.title}
                              className="w-full h-full object-cover group-hover:scale-110 transition"
                            />
                          </div>
                          <h4 className="font-semibold text-dark group-hover:text-primary transition">
                            {relatedProject.title}
                          </h4>
                          <p className="text-sm text-gray-600 capitalize">
                            {relatedProject.category}
                          </p>
                        </div>
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
