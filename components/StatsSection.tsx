'use client';

import { useState, useEffect } from 'react';
import Container from './ui/Container';

export default function StatsSection() {
  const [yearsCount, setYearsCount] = useState(0);

  useEffect(() => {
    // Simple counter animation
    let count = 0;
    const interval = setInterval(() => {
      if (count < 18) {
        count++;
        setYearsCount(count);
      } else {
        clearInterval(interval);
      }
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 md:py-24 bg-light-bg">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Stats Box */}
          <div className="text-center">
            <div className="text-5xl md:text-6xl font-bold text-primary mb-4">
              {yearsCount}
            </div>
            <p className="text-lg font-semibold text-dark">Years of Experience</p>
          </div>

          {/* Main Heading */}
          <div className="md:col-span-1">
            <h2 className="text-3xl md:text-4xl font-bold text-dark leading-tight">
              Crafting Timeless Designs to Inspire and Enrich Your Life
            </h2>
          </div>

          {/* Description */}
          <div>
            <p className="text-dark text-lg leading-relaxed">
              We believe that a well-designed space has the power to inspire, uplift, and enhance the way we live and work. At our studio, we are passionate about creating captivating interiors that not only reflect your personal style but also optimize functionality and comfort.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
