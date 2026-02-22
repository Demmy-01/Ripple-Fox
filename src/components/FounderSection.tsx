import { useRef, useEffect } from 'react';
import iconWhite from '../assets/Icon_white.png';

const experiences = [
  { text: 'Governance design', highlight: true },
  { text: 'Infrastructure deployment oversight', highlight: false },
  { text: 'Digital transformation alignment', highlight: false },
  { text: 'Structured execution stabilization', highlight: false },
];

/** Floating dot metadata */
const DOTS = [
  { size: 18, x: 5,  y: 12, speed: 0.018, opacity: 0.55, color: '#1F4E79', glow: 36,  floatClass: 'dot-float-a', delay: '0s'    },
  { size: 10, x: 20, y: 65, speed: 0.025, opacity: 0.35, color: '#3b82f6', glow: 20,  floatClass: 'dot-float-b', delay: '0.8s'  },
  { size: 28, x: 60, y: 18, speed: 0.012, opacity: 0.20, color: '#1F4E79', glow: 56,  floatClass: 'dot-float-a', delay: '1.4s'  },
  { size: 8,  x: 80, y: 72, speed: 0.022, opacity: 0.5,  color: '#60a5fa', glow: 16,  floatClass: 'dot-float-b', delay: '0.4s'  },
  { size: 22, x: 88, y: 25, speed: 0.03,  opacity: 0.30, color: '#1F4E79', glow: 44,  floatClass: 'dot-float-a', delay: '2s'    },
  { size: 12, x: 42, y: 85, speed: 0.016, opacity: 0.45, color: '#3b82f6', glow: 24,  floatClass: 'dot-float-b', delay: '1.1s'  },
  { size: 6,  x: 70, y: 50, speed: 0.028, opacity: 0.6,  color: '#60a5fa', glow: 12,  floatClass: 'dot-float-a', delay: '1.7s'  },
  { size: 20, x: 33, y: 35, speed: 0.014, opacity: 0.18, color: '#1F4E79', glow: 40,  floatClass: 'dot-float-b', delay: '0.6s'  },
];

export default function FounderSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const dotRefs = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = section.getBoundingClientRect();
      // normalised cursor position within section: -1 to 1
      const cx = ((e.clientX - rect.left) / rect.width  - 0.5) * 2;
      const cy = ((e.clientY - rect.top)  / rect.height - 0.5) * 2;

      dotRefs.current.forEach((dot, i) => {
        if (!dot) return;
        const d = DOTS[i];
        const tx = cx * d.speed * 120;
        const ty = cy * d.speed * 120;
        dot.style.transform = `translate(${tx}px, ${ty}px)`;
      });
    };

    const handleMouseLeave = () => {
      dotRefs.current.forEach(dot => {
        if (dot) dot.style.transform = 'translate(0,0)';
      });
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
      id="founder"
      ref={sectionRef}
      className="relative bg-white px-6 py-20 md:px-16 lg:px-24 overflow-hidden"
    >
      {/* ── Cursor-reactive floating blue dots ── */}
      {DOTS.map((d, i) => (
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
            background: d.color,
            opacity: d.opacity,
            transition: 'transform 0.7s cubic-bezier(0.23, 1, 0.32, 1)',
            pointerEvents: 'none',
            boxShadow: `0 0 ${d.glow}px ${d.color}, 0 0 ${d.glow * 2}px ${d.color}40`,
            animationDelay: d.delay,
          }}
        />
      ))}

      <div className="relative mx-auto max-w-screen-xl">

        {/* Top row: icon circle + heading */}
        <div
          className="flex flex-col gap-8 md:flex-row md:items-center md:gap-12 mb-16"
          data-reveal="up"
          data-delay="100"
        >
          {/* Icon in navy circle with decorative dot */}
          <div className="relative flex-shrink-0 self-start md:self-center">
            {/* Small decorative dot — top-left of circle */}
            <span
              className="absolute -top-3 -left-3 w-4 h-4 rounded-full"
              style={{ background: '#1F4E79' }}
              aria-hidden="true"
            />
            {/* Navy circle */}
            <div
              className="w-60 h-60 rounded-full flex items-center justify-center"
              style={{ background: '#0d3354' }}
            >
              <img
                src={iconWhite}
                alt="Ripple Fox Limited"
                className="w-40 h-40 object-contain"
              />
            </div>
          </div>

          {/* Heading + subtext */}
          <div>
            <h2 className="text-2xl font-extrabold leading-snug text-[#060d1f] md:text-3xl mb-4">
              <span className="text-[#1F4E79]">Ripple Fox</span>{' '}
              is founded by a senior infrastructure and transformation executive
            </h2>
            <p className="text-sm text-gray-500 leading-relaxed max-w-md">
              with extensive experience in complex, multi-stakeholder program leadership.
            </p>
          </div>
        </div>

        {/* Experience list */}
        <div data-reveal="up" data-delay="200">
          <p className="text-xs text-gray-400 uppercase tracking-widest mb-6">
            Experience includes:
          </p>

          <ul className="flex flex-col gap-0">
            {experiences.map(({ text, highlight }) => (
              <li key={text} className="founder-exp-item group pt-5 pb-3">
                <span
                  className="founder-exp-text text-2xl font-bold md:text-3xl"
                  style={{ color: highlight ? '#1F4E79' : '#060d1f' }}
                >
                  {text}
                </span>
                {/* Animated underline */}
                <div className="founder-exp-bar" style={{ background: highlight ? '#1F4E79' : '#060d1f' }} />
              </li>
            ))}
          </ul>
        </div>

      </div>
    </section>
  );
}
