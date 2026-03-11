import Link from 'next/link';
import Hero from '@/components/Hero';
import Container from '@/components/ui/Container';
import { projects } from '@/lib/data/projects';

export default function ProjectsPage() {
  const categories = ['residential', 'hospitality', 'commercial'] as const;

  return (
    <>
      <Hero
        title="Our Projects"
        subtitle="Portfolio"
        description="Explore our diverse range of interior design projects"
        showCTA={false}
      />

      <section className="py-16 md:py-24">
        <Container>
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">
              Portfolio Gallery
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl">
              Discover our collection of completed projects showcasing different styles and design approaches from residential to commercial spaces.
            </p>
          </div>

          {/* Category Sections */}
          {categories.map((category) => {
            const categoryProjects = projects.filter((p) => p.category === category);
            if (categoryProjects.length === 0) return null;

            return (
              <div key={category} className="mb-16">
                <h3 className="text-2xl font-bold text-dark mb-8 capitalize">
                  {category} Projects
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {categoryProjects.map((project) => (
                    <Link
                      key={project.id}
                      href={`/projects/${project.slug}`}
                    >
                      <div className="project-item group relative overflow-hidden rounded-lg h-80">
                        <img
                          src={project.thumbnail}
                          alt={project.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
                        />

                        {/* Overlay */}
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-all duration-300 flex flex-col justify-end">
                          <div className="p-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <h4 className="text-2xl font-bold mb-2">
                              {project.title}
                            </h4>
                            <p className="text-sm mb-4 opacity-90">
                              {project.shortDescription}
                            </p>
                            <span className="inline-block px-4 py-2 bg-primary text-dark font-semibold rounded hover:bg-yellow-400 transition">
                              View Details
                            </span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
        </Container>
      </section>
    </>
  );
}
