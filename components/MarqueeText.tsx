import Container from './ui/Container';

const capabilities = [
  'Concept Development',
  'Space Planning',
  'Floor Plans',
  'Furniture Selection',
  'Art and Accessories',
  'Preconstruction',
  'Lighting Design',
  'Window Treatments',
  'Project Management',
  '3D Visualization',
  'Renovation and Remodeling',
  'Sustainable Design',
];

export default function MarqueeText() {
  return (
    <section className="bg-dark text-white py-12 md:py-16 overflow-hidden">
      <div className="flex whitespace-nowrap gap-16 text-lg md:text-2xl font-bold animate-marquee">
        {[...capabilities, ...capabilities].map((item, index) => (
          <div key={index} className="flex items-center gap-16">
            <span className="text-primary">●</span>
            <span>{item}</span>
          </div>
        ))}
      </div>

      <style>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-marquee {
          animation: marquee 60s linear infinite;
        }

        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
