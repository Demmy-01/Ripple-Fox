import { useState, useCallback } from 'react';
import slide1 from '../assets/slide-1.png';
import slide2 from '../assets/slide-2.png';
import slide3 from '../assets/slide-3.png';
import slide4 from '../assets/slide-4.png';

const slides = [
  {
    image: slide1,
    title: 'Program Stabilization & Recovery',
    description: 'Structured intervention across operational and digital layers',
    dark: false,
  },
  {
    image: slide2,
    title: 'Governance Architecture Design',
    description: 'Executive unifying systems integrating operational, financial, and digital data flows.',
    dark: true,
  },
  {
    image: slide3,
    title: 'Multi-Stakeholder Alignment Systems',
    description: 'Accountability structures across vendors and enabling digital systems.',
    dark: false,
  },
  {
    image: slide4,
    title: 'Execution Intelligence Development',
    description: 'Data-informed governance models for institutional continuity.',
    dark: true,
  },
];

export default function WhatWeDesignSection() {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);

  const goTo = useCallback((index: number) => {
    if (animating || index === current) return;
    setAnimating(true);
    setTimeout(() => {
      setCurrent(index);
      setAnimating(false);
    }, 300);
  }, [animating, current]);

  const prev = () => goTo((current - 1 + slides.length) % slides.length);
  const next = () => goTo((current + 1) % slides.length);

  const slide = slides[current];

  return (
    <section id="services" className="bg-white px-6 py-20 md:px-16 lg:px-24">
      <div className="mx-auto max-w-screen-xl">

        {/* ── Pill label ── */}
        <div className="mb-8" data-reveal="fade">
          <span className="inline-flex items-center rounded-full bg-[#0d3354] px-4 py-1.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-white">
            What We Design
          </span>
        </div>

        {/* ── Slide card ── */}
        <div
          data-reveal="up"
          data-delay="200"
          className="rounded-2xl overflow-hidden shadow-sm transition-colors duration-300"
          style={{
            background: slide.dark ? '#1F4E79' : '#ffffff',
            border: slide.dark ? 'none' : '1px solid #e5e7eb',
          }}
        >
          <div
            className={`flex flex-col items-center gap-0 ${slide.dark ? 'md:flex-row-reverse' : 'md:flex-row'}`}
            style={{
              opacity: animating ? 0 : 1,
              transform: animating ? 'translateX(20px)' : 'translateX(0)',
              transition: 'opacity 0.3s ease, transform 0.3s ease',
            }}
          >
            {/* Image side */}
            <div className="w-full md:w-2/5 flex-shrink-0 p-6 md:p-8">
              <div className="rounded-xl overflow-hidden bg-gray-100 shadow-inner aspect-[4/3]">
                <img
                  key={current}
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Text side */}
            <div className="w-full md:w-3/5 px-6 pb-8 pt-2 md:px-12 md:py-12">
              <h3
                className="mb-4 text-3xl font-bold leading-tight md:text-4xl"
                style={{ color: slide.dark ? '#ffffff' : '#060d1f' }}
              >
                {slide.title}
              </h3>
              <p
                className="text-sm leading-relaxed md:text-base"
                style={{ color: slide.dark ? 'rgba(255,255,255,0.7)' : '#3b82f6' }}
              >
                {slide.description}
              </p>
            </div>
          </div>
        </div>

        {/* ── Navigation arrows ── */}
        <div className="mt-8 flex items-center justify-center gap-4" data-reveal="up" data-delay="400">
          <button
            onClick={prev}
            aria-label="Previous slide"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-gray-300 bg-white text-gray-600 shadow-sm transition-all hover:border-[#0d3354] hover:text-[#0d3354]"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>

          {/* Dot indicators */}
          <div className="flex items-center gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                aria-label={`Go to slide ${i + 1}`}
                className="h-2 rounded-full transition-all duration-300"
                style={{
                  width: i === current ? '20px' : '8px',
                  backgroundColor: i === current ? '#0d3354' : '#d1d5db',
                }}
              />
            ))}
          </div>

          <button
            onClick={next}
            aria-label="Next slide"
            className="flex h-11 w-11 items-center justify-center rounded-full bg-[#0d3354] text-white shadow-md transition-all hover:bg-[#0a2540]"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        </div>

      </div>
    </section>
  );
}
