import heroBackground from '../assets/amazon.jpeg';
import heroHash from '../assets/hero-hash.png';
import Navbar from '../components/Navbar';
import { RequestEngagementButton, DownloadBriefButton } from '../components/Buttons';
import AboutSection from '../components/AboutSection';
import WhatWeDesignSection from '../components/WhatWeDesignSection';
import OurMethodSection from '../components/OurMethodSection';
import WhoWeWorkWithSection from '../components/WhoWeWorkWithSection';
import TestimonialsSection from '../components/TestimonialsSection';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function Home() {
  useScrollReveal();

  return (
    <div className="bg-[#060d1f]">

      {/* ── Page intro overlay (fades out on load) ── */}
      <div id="page-intro" aria-hidden="true" />

      {/* ── Transparent Navbar (fixed, shared across sections) ── */}
      <Navbar />

      {/* ════════════════ HERO SECTION ════════════════ */}
      <section className="relative min-h-screen overflow-hidden">

        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-right bg-no-repeat"
          style={{ backgroundImage: `url(${heroBackground})`, backgroundAttachment: 'fixed' }}
          aria-hidden="true"
        />

        {/* Dark overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to right, rgba(6,13,31,0.97) 0%, rgba(6,13,31,0.80) 45%, rgba(6,13,31,0.30) 100%)',
          }}
          aria-hidden="true"
        />

        {/* Hash / grid overlay */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `url(${heroHash})`,
            backgroundRepeat: 'repeat',
            backgroundSize: '80px 80px',
          }}
          aria-hidden="true"
        />

        {/* Hero content */}
        <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-8 text-center">
          <div className="max-w-5xl w-full pt-24 flex flex-col items-center">

            <h1
              data-reveal="up"
              data-delay="100"
              className="mb-6 text-4xl font-extrabold leading-[1.1] tracking-[-0.01em] text-white md:text-5xl lg:text-6xl"
            >
              Execution Intelligence for Complex Infrastructure
            </h1>

            <p
              data-reveal="up"
              data-delay="300"
              className="mb-12 max-w-2xl text-base leading-relaxed text-white/60 md:text-lg"
            >
              Governance architecture and structured performance systems that
              stabilize delivery, enhance executive visibility, and align
              operational complexity.
            </p>

            <div
              data-reveal="up"
              data-delay="500"
              className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center sm:gap-5"
            >
              <RequestEngagementButton href="#contact" />
              <DownloadBriefButton href="#brief" />
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════ ABOUT SECTION ════════════════ */}
      <AboutSection />

      {/* ════════════════ WHAT WE DESIGN SECTION ════════════════ */}
      <WhatWeDesignSection />

      {/* ════════════════ OUR METHOD SECTION ════════════════ */}
      <OurMethodSection />

      {/* ════════════════ WHO WE WORK WITH SECTION ════════════════ */}
      <WhoWeWorkWithSection />

      {/* ════════════════ TESTIMONIALS SECTION ════════════════ */}
      <TestimonialsSection />

    </div>
  );
}
