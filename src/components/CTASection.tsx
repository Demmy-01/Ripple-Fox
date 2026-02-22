import { useRef, useEffect } from 'react';

const WHITE_DOTS = [
  { size: 6,  x: 5,  y: 20, floatClass: 'dot-float-a', delay: '0s',   opacity: 0.25 },
  { size: 10, x: 15, y: 75, floatClass: 'dot-float-b', delay: '1.2s', opacity: 0.15 },
  { size: 5,  x: 50, y: 10, floatClass: 'dot-float-a', delay: '0.5s', opacity: 0.2  },
  { size: 14, x: 72, y: 80, floatClass: 'dot-float-b', delay: '1.8s', opacity: 0.12 },
  { size: 8,  x: 88, y: 30, floatClass: 'dot-float-a', delay: '0.9s', opacity: 0.22 },
  { size: 5,  x: 93, y: 65, floatClass: 'dot-float-b', delay: '2.2s', opacity: 0.18 },
  { size: 9,  x: 30, y: 88, floatClass: 'dot-float-a', delay: '1.5s', opacity: 0.16 },
];

export default function CTASection() {
  const sectionRef = useRef<HTMLElement>(null);
  const dotRefs = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = section.getBoundingClientRect();
      const cx = ((e.clientX - rect.left) / rect.width  - 0.5) * 2;
      const cy = ((e.clientY - rect.top)  / rect.height - 0.5) * 2;
      dotRefs.current.forEach((dot, i) => {
        if (!dot) return;
        const speed = 0.012 + i * 0.004;
        dot.style.transform = `translate(${cx * speed * 80}px, ${cy * speed * 80}px)`;
      });
    };

    const handleMouseLeave = () => {
      dotRefs.current.forEach(dot => { if (dot) dot.style.transform = 'translate(0,0)'; });
    };

    section.addEventListener('mousemove', handleMouseMove);
    section.addEventListener('mouseleave', handleMouseLeave);
    return () => {
      section.removeEventListener('mousemove', handleMouseMove);
      section.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative px-6 py-20 md:px-16 lg:px-24 overflow-hidden"
      style={{ background: '#1a3d6b' }}
    >
      {/* ── Floating white dots ── */}
      {WHITE_DOTS.map((d, i) => (
        <span
          key={i}
          ref={el => { dotRefs.current[i] = el; }}
          aria-hidden="true"
          className={d.floatClass}
          style={{
            position: 'absolute',
            left: `${d.x}%`,
            top: `${d.y}%`,
            width: `${d.size}px`,
            height: `${d.size}px`,
            borderRadius: '50%',
            background: '#ffffff',
            opacity: d.opacity,
            pointerEvents: 'none',
            transition: 'transform 0.7s cubic-bezier(0.23, 1, 0.32, 1)',
            boxShadow: `0 0 ${d.size * 3}px rgba(255,255,255,0.5)`,
            animationDelay: d.delay,
          }}
        />
      ))}

      <div className="relative mx-auto max-w-screen-xl">

        {/* Chain — horizontal on ALL screen sizes */}
        <div className="mb-16 w-full" data-reveal="up" data-delay="100">

          {/* Circles + connectors row */}
          <div className="flex items-center w-full">
            <Circle />
            <Connector />
            <Circle />
            <Connector />
            <Circle />
          </div>

          {/* Labels row */}
          <div className="flex items-start w-full mt-3">
            <div className="w-14 flex-shrink-0 flex justify-center md:w-16">
              <span className="text-[10px] md:text-xs text-white/75 text-center whitespace-nowrap">
                Complex Environment
              </span>
            </div>
            <div className="flex-1 mx-2" />
            <div className="w-14 flex-shrink-0 flex justify-center md:w-16">
              <span className="text-[10px] md:text-xs text-white/75 text-center whitespace-nowrap">
                High Stakes
              </span>
            </div>
            <div className="flex-1 mx-2" />
            <div className="w-14 flex-shrink-0 flex justify-center md:w-16">
              <span className="text-[10px] md:text-xs text-white/75 text-center whitespace-nowrap">
                Limited Clarity.
              </span>
            </div>
          </div>

        </div>

        {/* Tagline */}
        <p
          className="text-center text-lg font-semibold text-white mb-10 md:text-2xl"
          data-reveal="up"
          data-delay="200"
        >
          Let's restore structured control.
        </p>

        {/* CTA Button */}
        <div className="flex justify-center" data-reveal="up" data-delay="300">
          <a
            href="#"
            className="cta-btn inline-flex items-center gap-3 px-6 py-3.5 text-sm font-semibold tracking-wide rounded-sm border border-white focus:outline-none"
          >
            Request Strategic Engagement
            <span aria-hidden="true" className="cta-btn-arrow text-base leading-none">→</span>
          </a>
        </div>

      </div>
    </section>
  );
}

function Circle() {
  return (
    <div
      className="w-14 h-14 md:w-16 md:h-16 flex-shrink-0 rounded-full flex items-center justify-center"
      style={{
        background: 'rgba(255,255,255,0.12)',
        border: '2.5px solid rgba(255,255,255,0.55)',
      }}
    >
      <div
        className="w-9 h-9 md:w-10 md:h-10 rounded-full"
        style={{ background: 'rgba(255,255,255,0.88)' }}
      />
    </div>
  );
}

function Connector() {
  return (
    <div
      className="flex-1 mx-1 md:mx-2"
      style={{ borderTop: '4px dotted rgba(255,255,255,0.75)' }}
    />
  );
}
